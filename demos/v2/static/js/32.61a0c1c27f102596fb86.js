webpackJsonp([32,70],{19:function(e,t,i){var o,n;i(22),o=i(20);var s=i(23);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,e.exports=o},20:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:String}}},21:function(e,t,i){t=e.exports=i(2)(),t.push([e.id,'.weui_cells_access .weui_cell:not(.no_access){-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui_cells_access .weui_cell:not(.no_access):active{background-color:#ececec}.weui_cells_access a.weui_cell{color:inherit}.weui_cells_access .weui_cell_ft:after{content:" ";display:inline-block;transform:rotate(45deg);height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;position:relative;top:-2px;top:-1px;margin-left:.3em}.weui_cell{position:relative}.weui_cell:before{content:" ";position:absolute;left:0;top:0;width:100%;height:1px;border-top:1px solid #d9d9d9;color:#d9d9d9;transform-origin:0 0;transform:scaleY(.5);left:15px}.weui_cell:first-child:before{display:none}.weui_cells{margin-top:1.17647059em;background-color:#fff;line-height:1.41176471;font-size:17px;overflow:hidden;position:relative}.weui_cells:before{top:0;border-top:1px solid #d9d9d9;transform-origin:0 0;transform:scaleY(.5)}.weui_cells:after,.weui_cells:before{content:" ";position:absolute;left:0;width:100%;height:1px;color:#d9d9d9}.weui_cells:after{bottom:0;border-bottom:1px solid #d9d9d9;transform-origin:0 100%;transform:scaleY(.5)}.weui_cells_title{margin-top:.77em;margin-bottom:.3em;padding-left:15px;padding-right:15px;color:#888;font-size:14px}.weui_cells_title+.weui_cells{margin-top:0}.weui_cells_tips{margin-top:.3em;color:#888;padding-left:15px;padding-right:15px;font-size:14px}.weui_cell{padding:10px 15px;position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.weui_cell_ft{text-align:right;color:#888}.weui_cell_primary{-ms-flex:1;flex:1}.vux-no-group-title{margin-top:15px}.weui_cells>a{color:#000}',"",{version:3,sources:["/./src/components/group/index.vue"],names:[],mappings:"AACA,8CAA8C,yCAAyC,CACtF,AACD,qDAAqD,wBAAwB,CAC5E,AACD,+BAA+B,aAAa,CAC3C,AACD,uCAAuC,YAAY,qBAAqB,wBAAwB,WAAW,UAAU,yBAAyB,qBAAqB,mBAAmB,kBAAkB,SAAS,SAAS,gBAAgB,CACzO,AACD,WAAW,iBAAiB,CAC3B,AACD,kBAAkB,YAAY,kBAAkB,OAAO,MAAM,WAAW,WAAW,6BAA6B,cAAc,qBAAqB,qBAAqB,SAAS,CAChL,AACD,8BAA8B,YAAY,CACzC,AACD,YAAY,wBAAwB,sBAAyB,uBAAuB,eAAe,gBAAgB,iBAAiB,CACnI,AACD,mBAAwD,MAAM,AAAsB,6BAA6B,AAAc,qBAAqB,oBAAoB,CACvK,AACD,qCAFmB,YAAY,kBAAkB,OAAO,AAAM,WAAW,WAAW,AAA6B,aAAc,CAG9H,AADD,kBAAuD,SAAS,AAAsB,gCAAgC,AAAc,wBAAwB,oBAAoB,CAC/K,AACD,kBAAkB,iBAAiB,mBAAmB,kBAAkB,mBAAmB,WAAW,cAAc,CACnH,AACD,8BAA8B,YAAY,CACzC,AACD,iBAAiB,gBAAgB,WAAW,kBAAkB,mBAAmB,cAAc,CAC9F,AACD,WAAW,kBAAkB,kBAAkB,oBAAoB,aAAa,sBAAsB,kBAAkB,CACvH,AACD,cAAc,iBAAiB,UAAU,CACxC,AACD,mBAAmB,WAAW,MAAM,CACnC,AACD,oBAAoB,eAAe,CAClC,AACD,cAAc,UAAU,CACvB",file:"index.vue",sourcesContent:['\n.weui_cells_access .weui_cell:not(.no_access){-webkit-tap-highlight-color:rgba(0,0,0,0)\n}\n.weui_cells_access .weui_cell:not(.no_access):active{background-color:#ECECEC\n}\n.weui_cells_access a.weui_cell{color:inherit\n}\n.weui_cells_access .weui_cell_ft:after{content:" ";display:inline-block;transform:rotate(45deg);height:6px;width:6px;border-width:2px 2px 0 0;border-color:#C8C8CD;border-style:solid;position:relative;top:-2px;top:-1px;margin-left:.3em\n}\n.weui_cell{position:relative\n}\n.weui_cell:before{content:" ";position:absolute;left:0;top:0;width:100%;height:1px;border-top:1px solid #D9D9D9;color:#D9D9D9;transform-origin:0 0;transform:scaleY(.5);left:15px\n}\n.weui_cell:first-child:before{display:none\n}\n.weui_cells{margin-top:1.17647059em;background-color:#FFFFFF;line-height:1.41176471;font-size:17px;overflow:hidden;position:relative\n}\n.weui_cells:before{content:" ";position:absolute;left:0;top:0;width:100%;height:1px;border-top:1px solid #D9D9D9;color:#D9D9D9;transform-origin:0 0;transform:scaleY(.5)\n}\n.weui_cells:after{content:" ";position:absolute;left:0;bottom:0;width:100%;height:1px;border-bottom:1px solid #D9D9D9;color:#D9D9D9;transform-origin:0 100%;transform:scaleY(.5)\n}\n.weui_cells_title{margin-top:.77em;margin-bottom:.3em;padding-left:15px;padding-right:15px;color:#888;font-size:14px\n}\n.weui_cells_title+.weui_cells{margin-top:0\n}\n.weui_cells_tips{margin-top:.3em;color:#888;padding-left:15px;padding-right:15px;font-size:14px\n}\n.weui_cell{padding:10px 15px;position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center\n}\n.weui_cell_ft{text-align:right;color:#888\n}\n.weui_cell_primary{-ms-flex:1;flex:1\n}\n.vux-no-group-title{margin-top:15px\n}\n.weui_cells>a{color:#000\n}'],sourceRoot:"webpack://"}])},22:function(e,t,i){var o=i(21);"string"==typeof o&&(o=[[e.id,o,""]]);i(3)(o,{});o.locals&&(e.exports=o.locals)},23:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.title?i("div",{staticClass:"weui_cells_title",style:{color:e.titleColor},domProps:{innerHTML:e._s(e.title)}}):e._e(),e._v(" "),i("div",{staticClass:"weui_cells",class:{"vux-no-group-title":!e.title},style:{marginTop:e.gutter}},[e._t("after-title"),e._v(" "),e._t("default")],2)])},staticRenderFns:[]}},24:function(e,t,i){var o,n;i(27);var s=i(28);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,e.exports=o},26:function(e,t,i){t=e.exports=i(2)(),t.push([e.id,".vux-label-desc{font-size:14px;color:#666}","",{version:3,sources:["/./src/components/inline-desc/index.vue"],names:[],mappings:"AACA,gBACE,eAAe,AACf,UAAW,CACZ",file:"index.vue",sourcesContent:["\n.vux-label-desc {\n  font-size:14px;\n  color:#666;\n}\n"],sourceRoot:"webpack://"}])},27:function(e,t,i){var o=i(26);"string"==typeof o&&(o=[[e.id,o,""]]);i(3)(o,{});o.locals&&(e.exports=o.locals)},28:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"vux-label-desc"},[e._t("default")],2)},staticRenderFns:[]}},51:function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(24),s=o(n);t.default={components:{InlineDesc:s.default},computed:{labelStyle:function(){var e=/<\/?[^>]*>/.test(this.title),t=Math.min(e?5:this.title.length+1,14)+"em";return{width:t}}},props:{title:{type:String,required:!0},disabled:Boolean,value:{type:Boolean,default:!1},inlineDesc:[String,Boolean,Number]},data:function(){return{currentValue:this.value}},watch:{currentValue:function(e){this.$emit("input",e),this.$emit("on-change",e)},value:function(e){this.currentValue=e}}}},52:function(e,t,i){t=e.exports=i(2)(),t.push([e.id,'.weui_label{color:#000;display:block;width:105px;word-wrap:break-word;word-break:break-all}.weui_input{width:100%;border:0;outline:0;-webkit-appearance:none;background-color:transparent;font-size:inherit;color:inherit;height:1.41176471em;line-height:1.41176471}.weui_input::-webkit-inner-spin-button,.weui_input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.weui_textarea{display:block;border:0;resize:none;width:100%;color:inherit;font-size:1em;line-height:inherit;outline:0}.weui_textarea_counter{color:#b2b2b2;text-align:right}.weui_cell_warn .weui_textarea_counter{color:#e64340}.weui_toptips{display:none;position:fixed;-webkit-transform:translateZ(0);width:100%;top:0;line-height:2.3;font-size:14px;text-align:center;color:#fff;z-index:50000}.weui_toptips.weui_warn{background-color:#e64340}.weui_cells_form .weui_cell_warn{color:#e64340}.weui_cells_form .weui_cell_warn .weui_icon_warn{display:inline-block}.weui_cells_form .weui_cell_ft{font-size:0}.weui_cells_form .weui_icon_warn{display:none}.weui_cells_form input,.weui_cells_form label[for],.weui_cells_form textarea{-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui_cell.weui_cell_switch{padding-top:6px;padding-bottom:6px}.weui_switch{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:relative;width:52px;height:32px;border:1px solid #dfdfdf;outline:0;border-radius:16px;box-sizing:border-box;background:#dfdfdf}.weui_switch:before{width:50px;background-color:#fdfdfd}.weui_switch:after,.weui_switch:before{content:" ";position:absolute;top:0;left:0;height:30px;border-radius:15px;transition:transform .3s}.weui_switch:after{width:30px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.4)}.weui_switch:checked{border-color:#ffe26d;background-color:#ffe26d}.weui_switch:checked:before{transform:scale(0)}.weui_switch:checked:after{transform:translateX(20px)}.weui_cell_switch .weui_cell_ft{font-size:0}input.weui_switch[disabled]{opacity:.6}',"",{version:3,sources:["/./src/components/x-switch/index.vue"],names:[],mappings:"AACA,YAAY,WAAW,cAAc,YAAY,qBAAqB,oBAAoB,CACzF,AACD,YAAY,WAAW,SAAS,UAAU,wBAAwB,6BAA6B,kBAAkB,cAAc,oBAAoB,sBAAsB,CACxK,AACD,8EAA8E,wBAAwB,QAAQ,CAC7G,AACD,eAAe,cAAc,SAAS,YAAY,WAAW,cAAc,cAAc,oBAAoB,SAAS,CACrH,AACD,uBAAuB,cAAc,gBAAgB,CACpD,AACD,uCAAuC,aAAa,CACnD,AACD,cAAc,aAAa,eAAe,gCAAgC,WAAW,MAAM,gBAAgB,eAAe,kBAAkB,WAAW,aAAa,CACnK,AACD,wBAAwB,wBAAwB,CAC/C,AACD,iCAAiC,aAAa,CAC7C,AACD,iDAAiD,oBAAoB,CACpE,AACD,+BAA+B,WAAW,CACzC,AACD,iCAAiC,YAAY,CAC5C,AACD,6EAA6E,yCAAyC,CACrH,AACD,4BAA4B,gBAAgB,kBAAkB,CAC7D,AACD,aAAa,wBAAwB,qBAAqB,gBAAgB,kBAAkB,WAAW,YAAY,yBAAyB,UAAU,mBAAmB,sBAAsB,kBAAkB,CAChN,AACD,oBAA+D,WAAW,AAA+B,wBAAyB,CACjI,AACD,uCAFoB,YAAY,kBAAkB,MAAM,OAAO,AAAW,YAAY,mBAAmB,AAAyB,wBAAwB,CAGzJ,AADD,mBAA8D,WAAW,AAA+B,sBAAyB,mCAAqC,CACrK,AACD,qBAAqB,qBAAqB,wBAAwB,CACjE,AACD,4BAA4B,kBAAkB,CAC7C,AACD,2BAA2B,0BAA0B,CACpD,AACD,gCAAgC,WAAW,CAC1C,AACD,4BAA4B,UAAU,CACrC",file:"index.vue",sourcesContent:['\n.weui_label{color:#000;display:block;width:105px;word-wrap:break-word;word-break:break-all\n}\n.weui_input{width:100%;border:0;outline:0;-webkit-appearance:none;background-color:transparent;font-size:inherit;color:inherit;height:1.41176471em;line-height:1.41176471\n}\n.weui_input::-webkit-outer-spin-button,.weui_input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0\n}\n.weui_textarea{display:block;border:0;resize:none;width:100%;color:inherit;font-size:1em;line-height:inherit;outline:0\n}\n.weui_textarea_counter{color:#B2B2B2;text-align:right\n}\n.weui_cell_warn .weui_textarea_counter{color:#E64340\n}\n.weui_toptips{display:none;position:fixed;-webkit-transform:translateZ(0);width:100%;top:0;line-height:2.3;font-size:14px;text-align:center;color:#FFF;z-index:50000\n}\n.weui_toptips.weui_warn{background-color:#E64340\n}\n.weui_cells_form .weui_cell_warn{color:#E64340\n}\n.weui_cells_form .weui_cell_warn .weui_icon_warn{display:inline-block\n}\n.weui_cells_form .weui_cell_ft{font-size:0\n}\n.weui_cells_form .weui_icon_warn{display:none\n}\n.weui_cells_form input,.weui_cells_form textarea,.weui_cells_form label[for]{-webkit-tap-highlight-color:rgba(0,0,0,0)\n}\n.weui_cell.weui_cell_switch{padding-top:6px;padding-bottom:6px\n}\n.weui_switch{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:relative;width:52px;height:32px;border:1px solid #DFDFDF;outline:0;border-radius:16px;box-sizing:border-box;background:#DFDFDF\n}\n.weui_switch:before{content:" ";position:absolute;top:0;left:0;width:50px;height:30px;border-radius:15px;background-color:#FDFDFD;transition:transform .3s\n}\n.weui_switch:after{content:" ";position:absolute;top:0;left:0;width:30px;height:30px;border-radius:15px;background-color:#FFFFFF;box-shadow:0 1px 3px rgba(0,0,0,0.4);transition:transform .3s\n}\n.weui_switch:checked{border-color:#ffe26d;background-color:#ffe26d\n}\n.weui_switch:checked:before{transform:scale(0)\n}\n.weui_switch:checked:after{transform:translateX(20px)\n}\n.weui_cell_switch .weui_cell_ft{font-size:0\n}\ninput.weui_switch[disabled]{opacity:.6\n}'],sourceRoot:"webpack://"}])},53:function(e,t,i){var o=i(52);"string"==typeof o&&(o=[[e.id,o,""]]);i(3)(o,{});o.locals&&(e.exports=o.locals)},54:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui_cell weui_cell_switch"},[i("div",{staticClass:"weui_cell_hd weui_cell_primary"},[i("label",{staticClass:"weui_label",style:e.labelStyle,domProps:{innerHTML:e._s(e.title)}}),e._v(" "),e.inlineDesc?i("inline-desc",[e._v(e._s(e.inlineDesc))]):e._e()],1),e._v(" "),i("div",{staticClass:"weui_cell_ft"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"weui_switch",attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:Array.isArray(e.currentValue)?e._i(e.currentValue,null)>-1:e.currentValue},on:{change:function(t){var i=e.currentValue,o=t.target,n=!!o.checked;if(Array.isArray(i)){var s=null,r=e._i(i,s);n?r<0&&(e.currentValue=i.concat(s)):r>-1&&(e.currentValue=i.slice(0,r).concat(i.slice(r+1)))}else e.currentValue=n}}})])])},staticRenderFns:[]}},55:function(e,t,i){var o,n;i(53),o=i(51);var s=i(54);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,e.exports=o},209:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mounted:function(){var e=this;this.$nextTick(function(){e.$tabbar=document.querySelector(".weui_tabbar")})},props:{value:Boolean,showCancel:Boolean,cancelText:String,menus:{type:Object,default:function(){}},closeOnClickingMask:{type:Boolean,default:!0}},data:function(){return{show:!1}},methods:{onClickingMask:function(){this.closeOnClickingMask&&(this.show=!1)},emitEvent:function(e,t){"on-click-menu"!==e||/.noop/.test(t)||(this.$emit(e,t),this.$emit(e+"-"+t),this.show=!1)},fixIos:function(e){this.$tabbar&&/iphone/i.test(navigator.userAgent)&&(this.$tabbar.style.zIndex=e)}},watch:{show:function(e){var t=this;this.$emit("input",e),e?this.fixIos(-1):setTimeout(function(){t.fixIos(100)},200)},value:function(e){this.show=e}},beforeDestroy:function(){this.fixIos(100)}}},247:function(e,t,i){t=e.exports=i(2)(),t.push([e.id,'.weui_mask{z-index:1000;background:rgba(0,0,0,.6)}.weui_mask,.weui_mask_transparent{position:fixed;width:100%;height:100%;top:0;left:0}.weui_mask_transparent{z-index:5001}.weui_mask_transition{display:none;position:fixed;z-index:1000;width:100%;height:100%;top:0;left:0;background:transparent;transition:background .3s}.weui_fade_toggle{background:rgba(0,0,0,.6)}.weui_actionsheet{position:fixed;left:0;bottom:0;transform:translateY(100%);-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:5000;width:100%;background-color:#efeff4;transition:transform .3s}.weui_actionsheet_menu{background-color:#fff}.weui_actionsheet_action{margin-top:6px;background-color:#fff}.weui_actionsheet_cell{position:relative;padding:10px 0;text-align:center;font-size:18px}.weui_actionsheet_cell:before{content:" ";position:absolute;left:0;top:0;width:100%;height:1px;border-top:1px solid #d9d9d9;color:#d9d9d9;transform-origin:0 0;transform:scaleY(.5)}.weui_actionsheet_cell:active{background-color:#ececec}.weui_actionsheet_cell:first-child:before{display:none}.weui_actionsheet_toggle{transform:translate(0)}.vux-actionsheet-gap{height:8px;width:100%;background-color:#eee}.vux-actionsheet-cancel:before{border-top:none}',"",{version:3,sources:["/./src/components/actionsheet/index.vue"],names:[],mappings:"AACA,WAA0B,aAAa,AAAoC,yBAA0B,CACpG,AACD,kCAFW,eAAe,AAAa,WAAW,YAAY,MAAM,MAAO,CAG1E,AADD,uBAAsC,YAAa,CAClD,AACD,sBAAsB,aAAa,eAAe,aAAa,WAAW,YAAY,MAAM,OAAO,uBAAyB,yBAAyB,CACpJ,AACD,kBAAkB,yBAA0B,CAC3C,AACD,kBAAkB,eAAe,OAAO,SAAS,2BAA6B,mCAAmC,2BAA2B,aAAa,WAAW,yBAAyB,wBAAwB,CACpN,AACD,uBAAuB,qBAAwB,CAC9C,AACD,yBAAyB,eAAe,qBAAwB,CAC/D,AACD,uBAAuB,kBAAkB,eAAe,kBAAkB,cAAc,CACvF,AACD,8BAA8B,YAAY,kBAAkB,OAAO,MAAM,WAAW,WAAW,6BAA6B,cAAc,qBAAqB,oBAAoB,CAClL,AACD,8BAA8B,wBAAwB,CACrD,AACD,0CAA0C,YAAY,CACrD,AACD,yBAAyB,sBAAyB,CACjD,AACD,qBAAqB,WAAW,WAAW,qBAAqB,CAC/D,AACD,+BAA+B,eAAe,CAC7C",file:"index.vue",sourcesContent:['\n.weui_mask{position:fixed;z-index:1000;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.6)\n}\n.weui_mask_transparent{position:fixed;z-index:5001;width:100%;height:100%;top:0;left:0\n}\n.weui_mask_transition{display:none;position:fixed;z-index:1000;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0);transition:background .3s\n}\n.weui_fade_toggle{background:rgba(0,0,0,0.6)\n}\n.weui_actionsheet{position:fixed;left:0;bottom:0;transform:translate(0, 100%);-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:5000;width:100%;background-color:#EFEFF4;transition:transform .3s\n}\n.weui_actionsheet_menu{background-color:#FFFFFF\n}\n.weui_actionsheet_action{margin-top:6px;background-color:#FFFFFF\n}\n.weui_actionsheet_cell{position:relative;padding:10px 0;text-align:center;font-size:18px\n}\n.weui_actionsheet_cell:before{content:" ";position:absolute;left:0;top:0;width:100%;height:1px;border-top:1px solid #D9D9D9;color:#D9D9D9;transform-origin:0 0;transform:scaleY(.5)\n}\n.weui_actionsheet_cell:active{background-color:#ECECEC\n}\n.weui_actionsheet_cell:first-child:before{display:none\n}\n.weui_actionsheet_toggle{transform:translate(0, 0)\n}\n.vux-actionsheet-gap{height:8px;width:100%;background-color:#eee\n}\n.vux-actionsheet-cancel:before{border-top:none\n}'],sourceRoot:"webpack://"}])},257:function(e,t,i){var o=i(247);"string"==typeof o&&(o=[[e.id,o,""]]);i(3)(o,{});o.locals&&(e.exports=o.locals)},278:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-actionsheet"},[i("div",{staticClass:"weui_mask_transition",class:{weui_fade_toggle:e.show},style:{display:e.show?"block":"none"},on:{click:e.onClickingMask}}),e._v(" "),i("div",{staticClass:"weui_actionsheet",class:{weui_actionsheet_toggle:e.show}},[i("div",{staticClass:"weui_actionsheet_menu"},[e._l(e.menus,function(t,o){return i("div",{staticClass:"weui_actionsheet_cell",domProps:{innerHTML:e._s(e.$t(t))},on:{click:function(t){e.emitEvent("on-click-menu",o)}}})}),e._v(" "),e.showCancel?i("div",{staticClass:"vux-actionsheet-gap"}):e._e(),e._v(" "),e.showCancel?i("div",{staticClass:"weui_actionsheet_cell vux-actionsheet-cancel",on:{click:function(t){e.emitEvent("on-click-menu","cancel")}}},[e._v(e._s(e.cancelText||e.$t("vux.actionsheet.cancel")))]):e._e()],2)])])},staticRenderFns:[]}},289:function(e,t,i){var o,n;i(257),o=i(209);var s=i(278);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,e.exports=o},364:function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(289),s=o(n),r=i(19),A=o(r),a=i(55),l=o(a),c=i(206),u=o(c);t.default={components:{Actionsheet:s.default,Group:A.default,XSwitch:l.default,Toast:u.default},mounted:function(){document.title="actionsheet",setTimeout(function(){document.title="actionsheet again"},5e3)},data:function(){return{show1:!1,menus1:{menu1:"Share to friends",menu2:"Share to timeline"},show2:!1,menus2:{menu1:"Take Photo",menu2:"Choose from photos"},show3:!1,show4:!1,showSuccess:!1,menus3:{"title.noop":'Are you sure?<br/><span style="color:#666;font-size:12px;">Once deleted, you will never find it.</span>',delete:'<span style="color:red">Delete</span>'}}},methods:{click:function(e){console.log(e)},onDelete:function(){this.showSuccess=!0}}}},509:function(e,t,i){t=e.exports=i(2)(),t.push([e.id,".popup0{padding-bottom:15px;height:200px}.popup1{width:100%;height:100%}","",{version:3,sources:["/./src/demos/Actionsheet.vue"],names:[],mappings:"AACA,QACE,oBAAoB,AACpB,YAAa,CACd,AACD,QACE,WAAW,AACX,WAAY,CACb",file:"Actionsheet.vue",sourcesContent:["\n.popup0 {\n  padding-bottom:15px;\n  height:200px;\n}\n.popup1 {\n  width:100%;\n  height:100%;\n}\n"],sourceRoot:"webpack://"}])},573:function(e,t,i){var o=i(509);"string"==typeof o&&(o=[[e.id,o,""]]);i(3)(o,{});o.locals&&(e.exports=o.locals)},692:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("group",[i("x-switch",{directives:[{name:"model",rawName:"v-model",value:e.show1,expression:"show1"}],attrs:{title:e.$t("Basic Usage")},domProps:{value:e.show1},on:{input:function(t){e.show1=t}}}),e._v(" "),i("x-switch",{directives:[{name:"model",rawName:"v-model",value:e.show2,expression:"show2"}],attrs:{title:e.$t("Show cancel menu")},domProps:{value:e.show2},on:{input:function(t){e.show2=t}}}),e._v(" "),i("x-switch",{directives:[{name:"model",rawName:"v-model",value:e.show3,expression:"show3"}],attrs:{title:e.$t("menu as tips")},domProps:{value:e.show3},on:{input:function(t){e.show3=t}}})],1),e._v(" "),i("group",{attrs:{title:e.$t("prevent closing when clicking mask")}},[i("x-switch",{directives:[{name:"model",rawName:"v-model",value:e.show4,expression:"show4"}],attrs:{title:e.$t("Basic Usage")},domProps:{value:e.show4},on:{input:function(t){e.show4=t}}})],1),e._v(" "),i("actionsheet",{directives:[{name:"model",rawName:"v-model",value:e.show4,expression:"show4"}],attrs:{menus:e.menus1,"close-on-clicking-mask":!1,"show-cancel":""},domProps:{value:e.show4},on:{input:function(t){e.show4=t}}}),e._v(" "),i("actionsheet",{directives:[{name:"model",rawName:"v-model",value:e.show1,expression:"show1"}],attrs:{menus:e.menus1},domProps:{value:e.show1},on:{"on-click-menu":e.click,input:function(t){e.show1=t}}}),e._v(" "),i("actionsheet",{directives:[{name:"model",rawName:"v-model",value:e.show2,expression:"show2"}],attrs:{menus:e.menus2,"show-cancel":""},domProps:{value:e.show2},on:{"on-click-menu":e.click,input:function(t){e.show2=t}}}),e._v(" "),i("actionsheet",{directives:[{name:"model",rawName:"v-model",value:e.show3,expression:"show3"}],attrs:{menus:e.menus3,"show-cancel":""},domProps:{value:e.show3},on:{"on-click-menu":e.click,"on-click-menu-delete":e.onDelete,input:function(t){e.show3=t}}}),e._v(" "),i("toast",{directives:[{name:"model",rawName:"v-model",value:e.showSuccess,expression:"showSuccess"}],domProps:{value:e.showSuccess},on:{input:function(t){e.showSuccess=t}}},[e._v(e._s(e.$t("Deleted~")))])],1)},staticRenderFns:[]}},784:function(e,t,i){var o,n;i(573),o=i(364);var s=i(692);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,e.exports=o}});