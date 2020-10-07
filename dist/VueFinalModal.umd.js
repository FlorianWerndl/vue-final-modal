!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).VueFinalModal=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t=function(e){return!(!e||e.nodeType!==Node.ELEMENT_NODE)},n=function(e,n){n&&t(e)&&(e.style[n]="")},o="enter",i="entering",a="leave",s="leavng";var r=[String,Object,Array],l={name:"VueFinalModal",props:{name:{type:String,default:null},value:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:{type:r,default:""},overlayClass:{type:r,default:""},contentClass:{type:r,default:""},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(t){var n=e(t);return"boolean"===n||"string"===n||t.nodeType===Node.ELEMENT_NODE}},transition:{type:String,default:"vfm"},overlayTransition:{type:String,default:"vfm"},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1}},data:function(){return{modalStackIndex:null,visible:!1,visibility:{modal:!1,overlay:!1},overlayTransitionState:null,modalTransitionState:null}},computed:{isComponentReadyToBeDestroyed:function(){return(this.hideOverlay||this.overlayTransitionState===a)&&this.modalTransitionState===a},calculateZIndex:function(){return"boolean"==typeof this.zIndex?this.attach?"unset":this.zIndexBase+2*(this.modalStackIndex||0):this.zIndex}},watch:{value:function(e){this.mounted(),e||this.close()},lockScroll:"handleLockScroll",hideOverlay:function(e){this.value&&!e&&(this.visibility.overlay=!0)},attach:"mounted",isComponentReadyToBeDestroyed:function(e){e&&(this.visible=!1)}},created:function(){this.$vfm.modals.push(this)},mounted:function(){this.mounted()},beforeDestroy:function(){var e=this;this.close(),this.$el.remove();var t=this.$vfm.modals.findIndex((function(t){return t===e}));this.$vfm.openedModals.splice(t,1)},methods:{mounted:function(){var e=this;if(this.value){var t=this.getAttachElement();if(t||!1===this.attach){!1!==this.attach&&t.appendChild(this.$el);var n=this.$vfm.openedModals.findIndex((function(t){return t===e}));-1!==n&&this.$vfm.openedModals.splice(n,1),this.$vfm.openedModals.push(this),this.modalStackIndex=this.$vfm.openedModals.length-1,this.handleLockScroll(),this.$vfm.openedModals.filter((function(t){return t!==e})).forEach((function(e,n){e.getAttachElement()===t&&(e.modalStackIndex=n,e.visibility.overlay=!1)})),this.visible=!0,this.$nextTick((function(){e.startTransitionEnter()}))}else!1!==t&&console.warn("Unable to locate target ".concat(this.attach))}},close:function(){var e=this,t=this.$vfm.openedModals.findIndex((function(t){return t===e}));if(-1!==t&&this.$vfm.openedModals.splice(t,1),this.$vfm.openedModals.length>0){var o=this.$vfm.openedModals[this.$vfm.openedModals.length-1];o.handleLockScroll(),!o.hideOverlay&&(o.visibility.overlay=!0)}else this.lockScroll&&n(document.body,"overflow");this.startTransitionLeave()},startTransitionEnter:function(){this.visibility.overlay=!0,this.visibility.modal=!0},startTransitionLeave:function(){this.visibility.overlay=!1,this.visibility.modal=!1},handleLockScroll:function(){var e,o,i;this.value&&(this.lockScroll?(e=document.body,i="hidden",(o="overflow")&&t(e)&&(e.style[o]=i)):n(document.body,"overflow"))},getAttachElement:function(){return!1!==this.attach&&("string"==typeof this.attach?!!window&&window.document.querySelector(this.attach):this.attach)},beforeOverlayEnter:function(){this.overlayTransitionState=i},afterOverlayEnter:function(){this.overlayTransitionState=o},beforeOverlayLeave:function(){this.overlayTransitionState=s},afterOverlayLeave:function(){this.overlayTransitionState=a},beforeModalEnter:function(){this.$emit("before-open"),this.modalTransitionState=i},afterModalEnter:function(){this.modalTransitionState=o,this.$refs.vfmContainer.focus(),this.$emit("opened")},beforeModalLeave:function(){this.$emit("before-close"),this.modalTransitionState=s},afterModalLeave:function(){this.modalTransitionState=a,this.modalStackIndex=null,this.$emit("closed")},onClickContainer:function(){this.$emit("click-outside"),this.clickToClose&&this.$emit("input",!1)}}};var d,f=function(e,t,n,o,i,a,s,r,l,d){"boolean"!=typeof s&&(l=r,r=s,s=!1);var f,c="function"==typeof n?n.options:n;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,i&&(c.functional=!0)),o&&(c._scopeId=o),a?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=f):t&&(f=s?function(e){t.call(this,d(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,r(e))}),f)if(c.functional){var v=c.render;c.render=function(e,t){return f.call(t),v(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,f):[f]}return n},c="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var v={};const u=f({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.ssr||e.visible?n("div",{directives:[{name:"show",rawName:"v-show",value:!e.ssr||e.visible,expression:"!ssr || visible"}],staticClass:"vfm vfm--inset",class:[!1===e.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":e.preventClick}],style:{zIndex:e.calculateZIndex}},[n("transition",{attrs:{name:e.overlayTransition},on:{"before-enter":e.beforeOverlayEnter,"after-enter":e.afterOverlayEnter,"before-leave":e.beforeOverlayLeave,"after-leave":e.afterOverlayLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.hideOverlay&&e.visibility.overlay,expression:"!hideOverlay && visibility.overlay"}],staticClass:"vfm__overlay vfm--overlay vfm--absolute vfm--inset",class:e.overlayClass,attrs:{"aria-expanded":e.visibility.overlay.toString()}})]),e._v(" "),n("transition",{attrs:{name:e.transition},on:{"before-enter":e.beforeModalEnter,"after-enter":e.afterModalEnter,"before-leave":e.beforeModalLeave,"after-leave":e.afterModalLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visibility.modal,expression:"visibility.modal"}],ref:"vfmContainer",staticClass:"vfm__container vfm--absolute vfm--inset vfm--outline-none",class:[e.classes,{"vfm--cursor-pointer":e.clickToClose}],attrs:{"aria-expanded":e.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1"},on:{click:e.onClickContainer}},[n("div",{ref:"vfmContent",staticClass:"vfm__content vfm--cursor-auto",class:[e.contentClass,{"vfm--prevent-auto":e.preventClick}],on:{click:function(e){e.stopPropagation()}}},[e._t("default")],2)])])],1):e._e()},staticRenderFns:[]},(function(e){e&&e("data-v-5f2cd6ef_0",{source:".vfm--fixed[data-v-5f2cd6ef]{position:fixed}.vfm--absolute[data-v-5f2cd6ef]{position:absolute}.vfm--inset[data-v-5f2cd6ef]{top:0;right:0;bottom:0;left:0}.vfm--overlay[data-v-5f2cd6ef]{background-color:rgba(0,0,0,.5)}.vfm--prevent-none[data-v-5f2cd6ef]{pointer-events:none}.vfm--prevent-auto[data-v-5f2cd6ef]{pointer-events:auto}.vfm--cursor-pointer[data-v-5f2cd6ef]{cursor:pointer}.vfm--cursor-auto[data-v-5f2cd6ef]{cursor:auto}.vfm--outline-none[data-v-5f2cd6ef]:focus{outline:0}.vfm-enter-active[data-v-5f2cd6ef],.vfm-leave-active[data-v-5f2cd6ef]{transition:opacity .2s}.vfm-enter[data-v-5f2cd6ef],.vfm-leave-to[data-v-5f2cd6ef]{opacity:0}",map:void 0,media:void 0})}),l,"data-v-5f2cd6ef",false,undefined,!1,(function(e){return function(e,t){return function(e,t){var n=c?t.media||"default":e,o=v[n]||(v[n]={ids:new Set,styles:[]});if(!o.ids.has(e)){o.ids.add(e);var i=t.source;if(t.map&&(i+="\n/*# sourceURL="+t.map.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",t.media&&o.element.setAttribute("media",t.media),void 0===d&&(d=document.head||document.getElementsByTagName("head")[0]),d.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(i),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var a=o.ids.size-1,s=document.createTextNode(i),r=o.element.childNodes;r[a]&&o.element.removeChild(r[a]),r.length?o.element.insertBefore(s,r[a]):o.element.appendChild(s)}}}(e,t)}}),void 0,void 0);return{install:function(e){if(!e.prototype.$vfm){var t=function(){var e;return function(){return e||(e={openedModals:[],modals:[],show:function(e){this.toggle(e,!0)},hide:function(e){this.toggle(e,!1)},hideAll:function(){this.openedModals.forEach((function(e){e.$emit("input",!1)}))},toggle:function(e,t){var n=this.modals.find((function(t){return t.name===e}));void 0!==n&&n.$emit("input",t)}}),e}}()();Object.defineProperty(e.prototype,"$vfm",{get:function(){return t}}),e.component("VueFinalModal",u)}}}}));
//# sourceMappingURL=VueFinalModal.umd.js.map
