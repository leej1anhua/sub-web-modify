(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-554f2393"],{"0cb2":function(e,t,o){var a=o("7b0b"),l=Math.floor,i="".replace,n=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,o,r,c,u){var m=o+e.length,d=r.length,h=s;return void 0!==c&&(c=a(c),h=n),i.call(u,h,(function(a,i){var n;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,o);case"'":return t.slice(m);case"<":n=c[i.slice(1,-1)];break;default:var s=+i;if(0===s)return a;if(s>d){var u=l(s/10);return 0===u?a:u<=d?void 0===r[u-1]?i.charAt(1):r[u-1]+i.charAt(1):a}n=r[s-1]}return void 0===n?"":n}))}},"0d03":function(e,t,o){var a=o("6eeb"),l=Date.prototype,i="Invalid Date",n="toString",s=l[n],r=l.getTime;new Date(NaN)+""!=i&&a(l,n,(function(){var e=r.call(this);return e===e?s.call(this):i}))},"14c3":function(e,t,o){var a=o("c6b6"),l=o("9263");e.exports=function(e,t){var o=e.exec;if("function"===typeof o){var i=o.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return l.call(e,t)}},"25f0":function(e,t,o){"use strict";var a=o("6eeb"),l=o("825a"),i=o("d039"),n=o("ad6d"),s="toString",r=RegExp.prototype,c=r[s],u=i((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),m=c.name!=s;(u||m)&&a(RegExp.prototype,s,(function(){var e=l(this),t=String(e.source),o=e.flags,a=String(void 0===o&&e instanceof RegExp&&!("flags"in r)?n.call(e):o);return"/"+t+"/"+a}),{unsafe:!0})},"4de4":function(e,t,o){"use strict";var a=o("23e7"),l=o("b727").filter,i=o("1dde"),n=i("filter");a({target:"Array",proto:!0,forced:!n},{filter:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}})},"4e82":function(e,t,o){"use strict";var a=o("23e7"),l=o("1c0b"),i=o("7b0b"),n=o("d039"),s=o("a640"),r=[],c=r.sort,u=n((function(){r.sort(void 0)})),m=n((function(){r.sort(null)})),d=s("sort"),h=u||!m||!d;a({target:"Array",proto:!0,forced:h},{sort:function(e){return void 0===e?c.call(i(this)):c.call(i(this),l(e))}})},5319:function(e,t,o){"use strict";var a=o("d784"),l=o("825a"),i=o("50c4"),n=o("a691"),s=o("1d80"),r=o("8aa5"),c=o("0cb2"),u=o("14c3"),m=Math.max,d=Math.min,h=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,o,a){var p=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,f=a.REPLACE_KEEPS_$0,b=p?"$":"$0";return[function(o,a){var l=s(this),i=void 0==o?void 0:o[e];return void 0!==i?i.call(o,l,a):t.call(String(l),o,a)},function(e,a){if(!p&&f||"string"===typeof a&&-1===a.indexOf(b)){var s=o(t,e,this,a);if(s.done)return s.value}var g=l(e),v=String(this),S="function"===typeof a;S||(a=String(a));var w=g.global;if(w){var y=g.unicode;g.lastIndex=0}var C=[];while(1){var x=u(g,v);if(null===x)break;if(C.push(x),!w)break;var k=String(x[0]);""===k&&(g.lastIndex=r(v,i(g.lastIndex),y))}for(var _="",A=0,R=0;R<C.length;R++){x=C[R];for(var L=String(x[0]),U=m(d(n(x.index),v.length),0),T=[],E=1;E<x.length;E++)T.push(h(x[E]));var $=x.groups;if(S){var N=[L].concat(T,U,v);void 0!==$&&N.push($);var O=String(a.apply(void 0,N))}else O=c(L,v,U,T,$,a);U>=A&&(_+=v.slice(A,U)+O,A=U+L.length)}return _+v.slice(A)}]}))},6547:function(e,t,o){var a=o("a691"),l=o("1d80"),i=function(e){return function(t,o){var i,n,s=String(l(t)),r=a(o),c=s.length;return r<0||r>=c?e?"":void 0:(i=s.charCodeAt(r),i<55296||i>56319||r+1===c||(n=s.charCodeAt(r+1))<56320||n>57343?e?s.charAt(r):i:e?s.slice(r,r+2):n-56320+(i-55296<<10)+65536)}};e.exports={codeAt:i(!1),charAt:i(!0)}},"8aa5":function(e,t,o){"use strict";var a=o("6547").charAt;e.exports=function(e,t,o){return t+(o?a(e,t).length:1)}},9263:function(e,t,o){"use strict";var a=o("ad6d"),l=o("9f7f"),i=o("5692"),n=RegExp.prototype.exec,s=i("native-string-replace",String.prototype.replace),r=n,c=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=l.UNSUPPORTED_Y||l.BROKEN_CARET,m=void 0!==/()??/.exec("")[1],d=c||m||u;d&&(r=function(e){var t,o,l,i,r=this,d=u&&r.sticky,h=a.call(r),p=r.source,f=0,b=e;return d&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),b=String(e).slice(r.lastIndex),r.lastIndex>0&&(!r.multiline||r.multiline&&"\n"!==e[r.lastIndex-1])&&(p="(?: "+p+")",b=" "+b,f++),o=new RegExp("^(?:"+p+")",h)),m&&(o=new RegExp("^"+p+"$(?!\\s)",h)),c&&(t=r.lastIndex),l=n.call(d?o:r,b),d?l?(l.input=l.input.slice(f),l[0]=l[0].slice(f),l.index=r.lastIndex,r.lastIndex+=l[0].length):r.lastIndex=0:c&&l&&(r.lastIndex=r.global?l.index+l[0].length:t),m&&l&&l.length>1&&s.call(l[0],o,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(l[i]=void 0)})),l}),e.exports=r},"9f7f":function(e,t,o){"use strict";var a=o("d039");function l(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=l("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=l("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a640:function(e,t,o){"use strict";var a=o("d039");e.exports=function(e,t){var o=[][e];return!!o&&a((function(){o.call(null,t||function(){throw 1},1)}))}},a9c7:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",{staticStyle:{"margin-top":"10px"}},[o("el-col",[o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[o("svg-icon",{staticClass:"gayhub",staticStyle:{float:"left"},attrs:{"icon-class":"github"},on:{click:e.goToProject}}),o("svg-icon",{staticClass:"dianbao",staticStyle:{float:"left","margin-left":"10px"},attrs:{"icon-class":"telegram"},on:{click:e.gotoTgChannel}}),o("svg-icon",{staticClass:"bilibili",staticStyle:{float:"right","margin-left":"10px"},attrs:{"icon-class":"bilibili"},on:{click:e.gotoBiliBili}}),o("svg-icon",{staticClass:"youguan",staticStyle:{float:"right","margin-left":"10px"},attrs:{"icon-class":"youtube"},on:{click:e.gotoYouTuBe}}),o("svg-icon",{staticClass:"channel",staticStyle:{float:"right","margin-left":"10px"},attrs:{"icon-class":"telegram"},on:{click:e.gotoTgChannel}}),o("div",{staticStyle:{"text-align":"center","font-size":"15px"}},[e._v("订 阅 转 换")])],1),o("el-container",[o("el-form",{staticStyle:{width:"100%"},attrs:{model:e.form,"label-width":"80px","label-position":"left"}},[o("el-form-item",{attrs:{label:"订阅链接:"}},[o("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"支持各种订阅链接或单节点链接，多个链接每行一个或用 | 分隔"},model:{value:e.form.sourceSubUrl,callback:function(t){e.$set(e.form,"sourceSubUrl",t)},expression:"form.sourceSubUrl"}})],1),o("el-form-item",{attrs:{label:"生成类型:"}},[o("el-select",{staticStyle:{width:"100%"},model:{value:e.form.clientType,callback:function(t){e.$set(e.form,"clientType",t)},expression:"form.clientType"}},e._l(e.options.clientTypes,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"后端地址:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"可输入自己的后端"},model:{value:e.form.customBackend,callback:function(t){e.$set(e.form,"customBackend",t)},expression:"form.customBackend"}},e._l(e.options.customBackend,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"短链选择:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"可输入其他可用短链API"},model:{value:e.form.shortType,callback:function(t){e.$set(e.form,"shortType",t)},expression:"form.shortType"}},e._l(e.options.shortTypes,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"远程配置:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:e.form.remoteConfig,callback:function(t){e.$set(e.form,"remoteConfig",t)},expression:"form.remoteConfig"}},[e._l(e.options.remoteConfig,(function(t){return o("el-option-group",{key:t.label,attrs:{label:t.label}},e._l(t.options,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)})),o("el-button",{attrs:{slot:"append",icon:"el-icon-link"},on:{click:e.gotoRemoteConfig},slot:"append"},[e._v("配置示例")])],2)],1),o("el-form-item",{attrs:{"label-width":"0px"}},[o("el-collapse",[o("el-collapse-item",[o("template",{slot:"title"},[o("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"高级功能:"}},[o("el-button",{staticStyle:{width:"100%"},attrs:{type:"limr",icon:"el-icon-more-outline"}},[e._v("点击显示/隐藏")])],1)],1),o("el-form-item",{attrs:{label:"包含节点:"}},[o("el-input",{attrs:{placeholder:"要保留的节点，支持正则"},model:{value:e.form.includeRemarks,callback:function(t){e.$set(e.form,"includeRemarks",t)},expression:"form.includeRemarks"}})],1),o("el-form-item",{attrs:{label:"排除节点:"}},[o("el-input",{attrs:{placeholder:"要排除的节点，支持正则"},model:{value:e.form.excludeRemarks,callback:function(t){e.$set(e.form,"excludeRemarks",t)},expression:"form.excludeRemarks"}})],1),o("el-form-item",{attrs:{label:"节点命名:"}},[o("el-input",{attrs:{placeholder:"举例：`香港@菲律宾``美国@巴西``台湾@俄罗斯`..."},model:{value:e.form.rename,callback:function(t){e.$set(e.form,"rename",t)},expression:"form.rename"}})],1),o("el-form-item",{attrs:{label:"订阅命名:"}},[o("el-input",{attrs:{placeholder:"返回的订阅文件名"},model:{value:e.form.filename,callback:function(t){e.$set(e.form,"filename",t)},expression:"form.filename"}})],1),o("el-form-item",{staticClass:"eldiy",attrs:{"label-width":"0px"}},[o("el-row",{attrs:{type:"flex"}},[o("el-col",[o("el-checkbox",{attrs:{label:"仅输出节点信息",border:""},model:{value:e.form.nodeList,callback:function(t){e.$set(e.form,"nodeList",t)},expression:"form.nodeList"}})],1),o("el-popover",{attrs:{placement:"bottom"},model:{value:e.form.extraset,callback:function(t){e.$set(e.form,"extraset",t)},expression:"form.extraset"}},[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"Emoji"},model:{value:e.form.emoji,callback:function(t){e.$set(e.form,"emoji",t)},expression:"form.emoji"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"网易云"},model:{value:e.form.insert,callback:function(t){e.$set(e.form,"insert",t)},expression:"form.insert"}})],1)],1),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"启用 UDP"},model:{value:e.form.udp,callback:function(t){e.$set(e.form,"udp",t)},expression:"form.udp"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"排序节点"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1)],1),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"启用 TFO"},model:{value:e.form.tfo,callback:function(t){e.$set(e.form,"tfo",t)},expression:"form.tfo"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"Surge.DoH"},model:{value:e.form.tpl.surge.doh,callback:function(t){e.$set(e.form.tpl.surge,"doh",t)},expression:"form.tpl.surge.doh"}})],1)],1),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"插入节点类型"},model:{value:e.form.appendType,callback:function(t){e.$set(e.form,"appendType",t)},expression:"form.appendType"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"Clash.DoH"},model:{value:e.form.tpl.clash.doh,callback:function(t){e.$set(e.form.tpl.clash,"doh",t)},expression:"form.tpl.clash.doh"}})],1)],1),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"展开规则全文"},model:{value:e.form.expand,callback:function(t){e.$set(e.form,"expand",t)},expression:"form.expand"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"Clash新字段名"},model:{value:e.form.new_name,callback:function(t){e.$set(e.form,"new_name",t)},expression:"form.new_name"}})],1)],1),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"跳过证书验证"},model:{value:e.form.scv,callback:function(t){e.$set(e.form,"scv",t)},expression:"form.scv"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"过滤不支持节点"},model:{value:e.form.fdn,callback:function(t){e.$set(e.form,"fdn",t)},expression:"form.fdn"}})],1)],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("更多选项")])],1)],1)],1)],2)],1)],1),o("div",{staticStyle:{"margin-top":"30px"}}),o("el-divider",{attrs:{"content-position":"center"}},[o("el-button",{attrs:{type:"zhuti"},on:{click:e.change}},[o("i",{staticClass:"el-icon-sunny",attrs:{id:"rijian"}}),o("i",{staticClass:"el-icon-moon",attrs:{id:"yejian"}})])],1),o("el-form-item",{attrs:{label:"定制订阅:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.customSubUrl,callback:function(t){e.customSubUrl=t},expression:"customSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.customSubUrl,expression:"customSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),o("el-form-item",{attrs:{label:"订阅短链:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.curtomShortSubUrl,callback:function(t){e.curtomShortSubUrl=t},expression:"curtomShortSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.curtomShortSubUrl,expression:"curtomShortSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),o("el-form-item",{staticStyle:{"margin-top":"40px","text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",disabled:0===e.form.sourceSubUrl.length},on:{click:e.makeUrl}},[e._v("生成订阅链接")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",loading:e.loading,disabled:0===e.customSubUrl.length},on:{click:e.makeShortUrl}},[e._v("生成短链接")])],1),o("el-form-item",{staticStyle:{"text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-upload",loading:e.loading},on:{click:function(t){e.dialogUploadConfigVisible=!0}}},[e._v("上传自定义配置")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-connection",disabled:0===e.customSubUrl.length},on:{click:e.clashInstall}},[e._v("一键导入Clash")])],1),o("el-form-item",{staticStyle:{"text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"250px"},attrs:{type:"warning",icon:"el-icon-video-play"},on:{click:e.gotovideo}},[e._v("保姆级视频教程")])],1),o("el-form-item",{staticStyle:{"text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"250px"},attrs:{type:"success",icon:"el-icon-download"},on:{click:e.cldown}},[e._v("Clash For Android 客户端")])],1)],1)],1)],1)],1)],1),o("el-dialog",{attrs:{visible:e.dialogUploadConfigVisible,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"80%"},on:{"update:visible":function(t){e.dialogUploadConfigVisible=t}}},[o("div",{attrs:{slot:"title"},slot:"title"},[e._v(" Remote config upload "),o("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{trigger:"hover",placement:"right"}},[o("el-link",{attrs:{type:"primary",href:e.sampleConfig,target:"_blank",icon:"el-icon-info"}},[e._v("参考配置")]),o("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})],1)],1),o("el-form",{attrs:{"label-position":"left"}},[o("el-form-item",{attrs:{prop:"uploadConfig"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:15,maxRows:15},maxlength:"10000","show-word-limit":""},model:{value:e.uploadConfig,callback:function(t){e.uploadConfig=t},expression:"uploadConfig"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.uploadConfig="",e.dialogUploadConfigVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary",disabled:0===e.uploadConfig.length},on:{click:e.confirmUploadConfig}},[e._v("确 定")])],1)],1)],1)},l=[],i=(o("4de4"),o("c975"),o("4e82"),o("0d03"),o("d3b7"),o("ac1f"),o("25f0"),o("5319"),"https://github.com/youshandefeiyang/sub-web-modify"),n="https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/universal/urltest.ini",s="https://github.com/tindy2013/subconverter/releases",r="https://sub.d1.mk/sub?",c="https://d1.mk/short",u="https://api.wcc.best/config/upload",m="https://t.me/subconverter_discuss",d="https://youtube.com/channel/UCKHJ2UPlkNsDRj1cVXi0UsA",h="https://space.bilibili.com/138129883",p="https://github.com/Kr328/ClashForAndroid/releases/download/v2.1.6/app-universal-release.apk",f="https://www.youtube.com/watch?v=C4WV4223uYw",b={data:function(){return{backendVersion:"",advanced:"2",isPC:!0,options:{clientTypes:{Clash:"clash",Surge2:"surge&ver=2",Surge3:"surge&ver=3",Surge4:"surge&ver=4",V2Ray:"v2ray",Trojan:"trojan",ShadowsocksR:"ssr","混合订阅（mixed）":"mixed",Surfboard:"surfboard",Quantumult:"quan","Quantumult X":"quanx",Loon:"loon",Mellow:"mellow",ClashR:"clashr","Shadowsocks(SIP002)":"ss","Shadowsocks Android(SIP008)":"sssub",ShadowsocksD:"ssd","自动判断客户端":"auto"},shortTypes:{"v1.mk":"https://v1.mk/short","d1.mk":"https://d1.mk/short","dlj.tf":"https://dlj.tf/short","suo.yt":"https://suo.yt/short","sub.cm":"https://sub.cm/short","subweb-bygcloud.cc":"https://subweb-bygcloud.cc/short"},customBackend:{"白月光(半官方)提供":"https://suc.subweb-bygcloud.cc/sub?","肥羊增强型后端【负载均衡】":"https://api.v1.mk/sub?","sub-web作者提供":"https://api.wcc.best/sub?","nameless13提供":"https://www.nameless13.com/sub?","subconverter作者提供":"https://subcon.dlj.tf/sub?","sub作者&lhie1提供":"https://api.dler.io/sub?","品云提供":"https://sub.id9.cc/sub?"},backendOptions:[{value:"https://suc.subweb-bygcloud.cc/sub?"},{value:"https://api.v1.mk/sub?"},{value:"https://api.wcc.best/sub?"},{value:"https://www.nameless13.com/sub?"},{value:"https://sub.xeton.dev/sub?"},{value:"https://api.dler.io/sub?"},{value:"https://sub.id9.cc/sub?"}],remoteConfig:[{label:"通用",options:[{label:"默认",value:"https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/Area_Media_NoAuto.ini"},{label:"默认（自动测速）",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini"},{label:"默认（索尼电视专用）",value:"https://raw.githubusercontent.com/youshandefeiyang/webcdn/main/SONY.ini"},{label:"默认（附带用于 Clash 的 AdGuard DNS）",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/default_with_clash_adg.yml"}]},{label:"ACL规则",options:[{label:"ACL_默认版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"},{label:"ACL_无测速版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini"},{label:"ACL_去广告版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini"},{label:"ACL_多国家版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_MultiCountry.ini"},{label:"ACL_无Reject版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini"},{label:"ACL_无测速精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini"},{label:"ACL_全分组版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini"},{label:"ACL_全分组谷歌版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Google.ini"},{label:"ACL_全分组多模式版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_MultiMode.ini"},{label:"ACL_全分组奈飞版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini"},{label:"ACL_全分组无测速版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini"},{label:"ACL_精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"},{label:"ACL_去广告精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini"},{label:"ACL_Fallback精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini"},{label:"ACL_多国家精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiCountry.ini"},{label:"ACL_多模式精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"}]},{label:"全网搜集规则",options:[{label:"常规规则",value:"https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG.ini"},{label:"分区域故障转移",value:"https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG_Area_Fallback.ini"},{label:"分区域自动测速",value:"https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG_Area_Urltest.ini"},{label:"分区域无自动测速",value:"https://raw.githubusercontent.com/flyhigherpi/merlinclash_clash_related/master/Rule_config/ZHANG_Area_NoAuto.ini"},{label:"OoHHHHHHH",value:"https://raw.githubusercontent.com/OoHHHHHHH/ini/master/config.ini"},{label:"CFW-TAP",value:"https://raw.githubusercontent.com/OoHHHHHHH/ini/master/cfw-tap.ini"},{label:"lhl77全分组（定期更新）",value:"https://raw.githubusercontent.com/lhl77/sub-ini/main/tsutsu-full.ini"},{label:"lhl77简易版（定期更新）",value:"https://raw.githubusercontent.com/lhl77/sub-ini/main/tsutsu-mini-gfw.ini"},{label:"ConnersHua 神机规则 Outbound",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/connershua_new.ini"},{label:"ConnersHua 神机规则 Inbound 回国专用",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/connershua_backtocn.ini"},{label:"lhie1 洞主规则（使用 Clash 分组规则）",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/lhie1_clash.ini"},{label:"lhie1 洞主规则完整版",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/lhie1_dler.ini"},{label:"eHpo1 规则",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/ehpo1_main.ini"},{label:"多策略组默认白名单模式",value:"https://raw.nameless13.com/api/public/dl/ROzQqi2S/white.ini"},{label:"多策略组可以有效减少审计触发",value:"https://raw.nameless13.com/api/public/dl/ptLeiO3S/mayinggfw.ini"},{label:"精简策略默认白名单",value:"https://raw.nameless13.com/api/public/dl/FWSh3dXz/easy3.ini"},{label:"多策略增加SMTP策略",value:"https://raw.nameless13.com/api/public/dl/L_-vxO7I/youtube.ini"},{label:"无策略入门推荐",value:"https://raw.nameless13.com/api/public/dl/zKF9vFbb/easy.ini"},{label:"无策略入门推荐国家分组",value:"https://raw.nameless13.com/api/public/dl/E69bzCaE/easy2.ini"},{label:"无策略仅IPIP CN + Final",value:"https://raw.nameless13.com/api/public/dl/XHr0miMg/ipip.ini"},{label:"无策略魅影vip分组",value:"https://raw.nameless13.com/api/public/dl/BBnfb5lD/MAYINGVIP.ini"},{label:"品云专属配置（仅香港区域分组）",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Examine.ini"},{label:"品云专属配置（全地域分组）",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Examine_Full.ini"},{label:"nzw9314 规则",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/nzw9314_custom.ini"},{label:"maicoo-l 规则",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/maicoo-l_custom.ini"},{label:"DlerCloud Platinum 李哥定制规则",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/dlercloud_lige_platinum.ini"},{label:"DlerCloud Gold 李哥定制规则",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/dlercloud_lige_gold.ini"},{label:"DlerCloud Silver 李哥定制规则",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/dlercloud_lige_silver.ini"}]},{label:"各大机场规则",options:[{label:"EXFLUX",value:"https://gist.github.com/jklolixxs/16964c46bad1821c70fa97109fd6faa2/raw/EXFLUX.ini"},{label:"NaNoport",value:"https://gist.github.com/jklolixxs/32d4e9a1a5d18a92beccf3be434f7966/raw/NaNoport.ini"},{label:"CordCloud",value:"https://gist.github.com/jklolixxs/dfbe0cf71ffc547557395c772836d9a8/raw/CordCloud.ini"},{label:"BigAirport",value:"https://gist.github.com/jklolixxs/e2b0105c8be6023f3941816509a4c453/raw/BigAirport.ini"},{label:"跑路云",value:"https://gist.github.com/jklolixxs/9f6989137a2cfcc138c6da4bd4e4cbfc/raw/PaoLuCloud.ini"},{label:"WaveCloud",value:"https://gist.github.com/jklolixxs/fccb74b6c0018b3ad7b9ed6d327035b3/raw/WaveCloud.ini"},{label:"几鸡",value:"https://gist.github.com/jklolixxs/bfd5061dceeef85e84401482f5c92e42/raw/JiJi.ini"},{label:"四季加速",value:"https://gist.github.com/jklolixxs/6ff6e7658033e9b535e24ade072cf374/raw/SJ.ini"},{label:"ImmTelecom",value:"https://gist.github.com/jklolixxs/24f4f58bb646ee2c625803eb916fe36d/raw/ImmTelecom.ini"},{label:"AmyTelecom",value:"https://gist.github.com/jklolixxs/b53d315cd1cede23af83322c26ce34ec/raw/AmyTelecom.ini"},{label:"Miaona",value:"https://gist.github.com/jklolixxs/ff8ddbf2526cafa568d064006a7008e7/raw/Miaona.ini"},{label:"Foo&Friends",value:"https://gist.github.com/jklolixxs/df8fda1aa225db44e70c8ac0978a3da4/raw/Foo&Friends.ini"},{label:"ABCloud",value:"https://gist.github.com/jklolixxs/b1f91606165b1df82e5481b08fd02e00/raw/ABCloud.ini"},{label:"咸鱼",value:"https://raw.githubusercontent.com/SleepyHeeead/subconverter-config/master/remote-config/customized/xianyu.ini"},{label:"便利店",value:"https://subweb.oss-cn-hongkong.aliyuncs.com/RemoteConfig/customized/convenience.ini"},{label:"CNIX",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/SSRcloud.ini"},{label:"Nirvana",value:"https://raw.githubusercontent.com/Mazetsz/ACL4SSR/master/Clash/config/V2rayPro.ini"},{label:"V2Pro",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/V2Pro.ini"},{label:"史迪仔-自动测速",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Stitch.ini"},{label:"史迪仔-负载均衡",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Stitch-Balance.ini"},{label:"Maying",value:"https://raw.githubusercontent.com/SleepyHeeead/subconverter-config/master/remote-config/customized/maying.ini"},{label:"Ytoo",value:"https://raw.githubusercontent.com/SleepyHeeead/subconverter-config/master/remote-config/customized/ytoo.ini"},{label:"w8ves",value:"https://raw.nameless13.com/api/public/dl/M-We_Fn7/w8ves.ini"},{label:"NyanCAT",value:"https://raw.githubusercontent.com/SleepyHeeead/subconverter-config/master/remote-config/customized/nyancat.ini"},{label:"Nexitally",value:"https://raw.githubusercontent.com/SleepyHeeead/subconverter-config/master/remote-config/customized/nexitally.ini"},{label:"SoCloud",value:"https://raw.githubusercontent.com/SleepyHeeead/subconverter-config/master/remote-config/customized/socloud.ini"},{label:"ARK",value:"https://raw.githubusercontent.com/SleepyHeeead/subconverter-config/master/remote-config/customized/ark.ini"},{label:"N3RO",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/n3ro_optimized.ini"},{label:"Scholar",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/scholar_optimized.ini"},{label:"Flowercloud",value:"https://raw.githubusercontent.com/SleepyHeeead/subconverter-config/master/remote-config/customized/flowercloud.ini"}]},{label:"特殊",options:[{label:"NeteaseUnblock",value:"https://raw.githubusercontent.com/SleepyHeeead/subconverter-config/master/remote-config/special/netease.ini"},{label:"Basic",value:"https://raw.githubusercontent.com/SleepyHeeead/subconverter-config/master/remote-config/special/basic.ini"}]}]},form:{sourceSubUrl:"",clientType:"",customBackend:"https://api.v1.mk/sub?",shortType:"https://v1.mk/short",remoteConfig:"https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/Area_Media_NoAuto.ini",excludeRemarks:"",includeRemarks:"",filename:"",rename:"",emoji:!0,nodeList:!1,extraset:!1,sort:!1,udp:!1,tfo:!1,expand:!0,scv:!1,fdn:!1,appendType:!1,insert:!1,new_name:!0,tpl:{surge:{doh:!1},clash:{doh:!1}}},loading:!1,customSubUrl:"",curtomShortSubUrl:"",dialogUploadConfigVisible:!1,uploadConfig:"",uploadPassword:"",myBot:m,sampleConfig:n}},created:function(){document.title="在线订阅转换工具",this.isPC=this.$getOS().isPc},mounted:function(){var e=this;this.notify(),this.form.clientType="clash",this.getBackendVersion(),this.anhei();var t=window.matchMedia("(prefers-color-scheme: light)"),o=window.matchMedia("(prefers-color-scheme: dark)"),a=function(t){t.matches&&e.anhei()};"function"!==typeof o.addEventListener&&"function"!==typeof t.addEventListener||(t.addEventListener("change",a),o.addEventListener("change",a))},methods:{anhei:function(){var e=window.localStorage.getItem("localTheme"),t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)"),o=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");e?document.getElementsByTagName("body")[0].className=e:null!=e&&"undefined"!=e&&""!=e||((new Date).getHours()>=19||(new Date).getHours()<7?document.getElementsByTagName("body")[0].setAttribute("class","dark-mode"):document.getElementsByTagName("body")[0].setAttribute("class","light-mode"),t&&t.matches&&document.getElementsByTagName("body")[0].setAttribute("class","light-mode"),o&&o.matches&&document.getElementsByTagName("body")[0].setAttribute("class","dark-mode"))},change:function(){var e=document.getElementsByTagName("body")[0].className;"light-mode"===e&&(document.getElementsByTagName("body")[0].setAttribute("class","dark-mode"),window.localStorage.setItem("localTheme","dark-mode")),"dark-mode"===e&&(document.getElementsByTagName("body")[0].setAttribute("class","light-mode"),window.localStorage.setItem("localTheme","light-mode"))},notify:function(){this.$notify({title:"温馨提示",type:"warning",position:"top-left",customClass:"msgbox",message:"本站自定义配置上传功能已恢复！"})},onCopy:function(){this.$message.success("Copied!")},goToProject:function(){window.open(i)},gotoTgChannel:function(){window.open(m)},gotoGayhub:function(){window.open(s)},gotoBiliBili:function(){window.open(h)},gotoYouTuBe:function(){window.open(d)},cldown:function(){window.open(p)},gotoRemoteConfig:function(){window.open(n)},clashInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="clash://install-config?url=";window.open(e+encodeURIComponent(""!==this.curtomShortSubUrl?this.curtomShortSubUrl:this.customSubUrl))},surgeInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="surge://install-config?url=";window.open(e+this.customSubUrl)},gotovideo:function(){this.$alert("别忘了关注友善的肥羊哦！",{type:"warning",confirmButtonText:"确定",customClass:"msgbox",showClose:!1}).then((function(){window.open(f)}))},makeUrl:function(){if(""===this.form.sourceSubUrl||""===this.form.clientType)return this.$message.error("订阅链接与客户端为必填项"),!1;if(-1!==this.form.sourceSubUrl.indexOf("losadhwse")&&-1!==this.form.customBackend.indexOf("api.wcc.best"))return this.$alert("薯条已将该后端屏蔽，请更换其他后端进行转换！",{type:"warning",confirmButtonText:"确定",customClass:"msgbox",showClose:!1}),!1;var e=""===this.form.customBackend?r:this.form.customBackend,t=this.form.sourceSubUrl;t=t.replace(/(\n|\r|\n\r)/g,"|"),this.customSubUrl=e+"target="+this.form.clientType+"&url="+encodeURIComponent(t)+"&insert="+this.form.insert,"2"===this.advanced&&(""!==this.form.remoteConfig&&(this.customSubUrl+="&config="+encodeURIComponent(this.form.remoteConfig)),""!==this.form.excludeRemarks&&(this.customSubUrl+="&exclude="+encodeURIComponent(this.form.excludeRemarks)),""!==this.form.includeRemarks&&(this.customSubUrl+="&include="+encodeURIComponent(this.form.includeRemarks)),""!==this.form.filename&&(this.customSubUrl+="&filename="+encodeURIComponent(this.form.filename)),""!==this.form.rename&&(this.customSubUrl+="&rename="+encodeURIComponent(this.form.rename)),this.form.appendType&&(this.customSubUrl+="&append_type="+this.form.appendType.toString()),this.customSubUrl+="&emoji="+this.form.emoji.toString()+"&list="+this.form.nodeList.toString()+"&udp="+this.form.udp.toString()+"&tfo="+this.form.tfo.toString()+"&expand="+this.form.expand.toString()+"&scv="+this.form.scv.toString()+"&fdn="+this.form.fdn.toString()+"&sort="+this.form.sort.toString(),!0===this.form.tpl.surge.doh&&(this.customSubUrl+="&surge.doh=true"),"clash"===this.form.clientType&&(!0===this.form.tpl.clash.doh&&(this.customSubUrl+="&clash.doh=true"),this.customSubUrl+="&new_name="+this.form.new_name.toString())),this.$copyText(this.customSubUrl),this.$message.success("定制订阅已复制到剪贴板")},makeShortUrl:function(){var e=this;if(""===this.customSubUrl)return this.$message.warning("请先生成订阅链接，再获取对应短链接"),!1;var t=""===this.form.shortType?c:this.form.shortType;this.loading=!0;var o=new FormData;o.append("longUrl",btoa(this.customSubUrl)),this.$axios.post(t,o,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){1===t.data.Code&&""!==t.data.ShortUrl?(e.curtomShortSubUrl=t.data.ShortUrl,e.$copyText(t.data.ShortUrl),e.$message.success("短链接已复制到剪贴板")):e.$message.error("短链接获取失败："+t.data.Message)}))["catch"]((function(){e.$message.error("短链接获取失败")}))["finally"]((function(){e.loading=!1}))},confirmUploadConfig:function(){var e=this;if(""===this.uploadConfig)return this.$message.warning("远程配置不能为空"),!1;this.loading=!0;var t=new FormData;t.append("password",this.uploadPassword),t.append("config",this.uploadConfig),this.$axios.post(u,t,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){0===t.data.code&&""!==t.data.data.url?(e.$message.success("远程配置上传成功，配置链接已复制到剪贴板，有效期三个月望知悉"),e.form.remoteConfig=t.data.data.url,e.$copyText(e.form.remoteConfig),e.dialogUploadConfigVisible=!1):e.$message.error("远程配置上传失败: "+t.data.msg)}))["catch"]((function(){e.$message.error("远程配置上传失败")}))["finally"]((function(){e.loading=!1}))},backendSearch:function(e,t){var o=this.options.backendOptions,a=e?o.filter(this.createFilter(e)):o;t(a)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},getBackendVersion:function(){var e=this;this.$axios.get(r.substring(0,r.length-5)+"/version").then((function(t){e.backendVersion=t.data.replace(/backend\n$/gm,""),e.backendVersion=e.backendVersion.replace("subconverter","")}))}}},g=b,v=o("2877"),S=Object(v["a"])(g,a,l,!1,null,null,null);t["default"]=S.exports},ac1f:function(e,t,o){"use strict";var a=o("23e7"),l=o("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==l},{exec:l})},ad6d:function(e,t,o){"use strict";var a=o("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},c975:function(e,t,o){"use strict";var a=o("23e7"),l=o("4d64").indexOf,i=o("a640"),n=[].indexOf,s=!!n&&1/[1].indexOf(1,-0)<0,r=i("indexOf");a({target:"Array",proto:!0,forced:s||!r},{indexOf:function(e){return s?n.apply(this,arguments)||0:l(this,e,arguments.length>1?arguments[1]:void 0)}})},d784:function(e,t,o){"use strict";o("ac1f");var a=o("6eeb"),l=o("9263"),i=o("d039"),n=o("b622"),s=o("9112"),r=n("species"),c=RegExp.prototype,u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),m=function(){return"$0"==="a".replace(/./,"$0")}(),d=n("replace"),h=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var o="ab".split(e);return 2!==o.length||"a"!==o[0]||"b"!==o[1]}));e.exports=function(e,t,o,d){var f=n(e),b=!i((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),g=b&&!i((function(){var t=!1,o=/a/;return"split"===e&&(o={},o.constructor={},o.constructor[r]=function(){return o},o.flags="",o[f]=/./[f]),o.exec=function(){return t=!0,null},o[f](""),!t}));if(!b||!g||"replace"===e&&(!u||!m||h)||"split"===e&&!p){var v=/./[f],S=o(f,""[e],(function(e,t,o,a,i){var n=t.exec;return n===l||n===c.exec?b&&!i?{done:!0,value:v.call(t,o,a)}:{done:!0,value:e.call(o,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:m,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),w=S[0],y=S[1];a(String.prototype,e,w),a(c,f,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}d&&s(c[f],"sham",!0)}}}]);
//# sourceMappingURL=chunk-554f2393.d3149dfd.js.map