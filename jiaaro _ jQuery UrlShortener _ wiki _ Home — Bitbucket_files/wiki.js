webpackJsonp([11],{1026:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=a(i),u=n(2),o=a(u),d=n(18),s=a(d);t.default=s.default.Behavior.extend({initialize:function(){this._warnHandler=function(){if(o.default.result(this.options,"condition"))return o.default.result(this.options,"message")}.bind(this),(0,r.default)(window).on("beforeunload",this._warnHandler)},onDestroy:function(){(0,r.default)(window).off("beforeunload",this._warnHandler)},defaults:{condition:!0,message:gettext("Your changes will be lost. Are you sure you want to leave?")}}),e.exports=t.default},1050:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(485),r=a(i),u=n(484),o=a(u);t.default=(0,r.default)("#wiki-clone-dialog","clone-wiki-dialog",{preHideCallback:o.default.callback}),e.exports=t.default},1064:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(i,r){try{var u=t[i](r),o=u.value}catch(e){return void n(e)}return u.done?void e(o):Promise.resolve(o).then(function(e){a("next",e)},function(e){a("throw",e)})}return a("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),u=a(r),o=n(11),d=a(o),s=n(181),l=a(s);t.default=function(){var e=i(regeneratorRuntime.mark(function e(t){var n,a,i,r,o,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.find(".markdown-raw").first(),0!==n.length){e.next=4;break}return console.error("Can't find raw markup"),e.abrupt("return");case 4:return a=(0,u.default)('<div class="clientside-render spinner"></div>').appendTo(t),a.spin("large"),i=(0,u.default)('<div class="markdown-rendered"></div>'),r=n.text(),n.remove(),e.prev=9,e.next=12,(0,l.default)("markdown-render-worker");case 12:return o=e.sent,e.next=15,o.postMessage({content:r,repoFullSlug:d.default.toString()});case 15:s=e.sent,i.html(s).appendTo(t),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(9),console.error("Failed to render markdown content: "+e.t0);case 22:return e.prev=22,a.spinStop(),a.addClass("hidden"),e.finish(22);case 26:case"end":return e.stop()}},e,void 0,[[9,19,22,26]])}));return function(t){return e.apply(this,arguments)}}(),e.exports=t.default},1065:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),r=a(i),u=n(0),o=a(u),d=n(18),s=a(d),l=n(2),c=a(l);n(139);var f=n(1026),g=a(f),p=n(148),h=a(p);t.default=s.default.ItemView.extend({behaviors:function(){return{WarnsOnPageChange:{behaviorClass:g.default,condition:function(){return this.getContent()!==this.initialContent&&!this._submitting}.bind(this)}}},events:{"keydown @ui.textarea":"checkForSubmission"},ui:{textarea:"textarea"},initialize:function(){this.bindUIElements(),this.initialContent=this.getContent(),this.language=this.$el.data("markup-type")||"markdown",this.listenForSubmission()},getContent:function(){return this.ui.textarea.val()},render:function(){return this.ui.textarea.markItUp((0,h.default)(c.default.result(this,"markItUpOptions"))),this.bindUIElements(),this},listenForSubmission:function(){var e=this.ui.textarea[0].form;e&&(0,o.default)(e).on("submit",function(){this._submitting=!0}.bind(this))},checkForSubmission:function(e){e.keyCode===r.default.keyCode.ENTER&&e.metaKey&&e.target.form&&e.target.form.submit()}}),e.exports=t.default},1711:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var i=n(2146),r=a(i),u=n(111),o=a(u),d=n(146),s=a(d);s.default.add({"components/clone/clone-dialog":function(){return n(192)},"components/clone/clone-in-sourcetree":function(){return n(250)},"components/clone/clone-wiki-contextual":function(){return n(1050)},"components/clone/url-dropdown":function(){return n(193)},"components/mathjax":function(){return n(508)},"components/markdown-render":function(){return n(1064)},"repo/create-branch":function(){return n(208)},"repo/index":function(){return n(209)},"repo/sidebar":function(){return n(259)}}),window.__router__=(0,o.default)({"/:owner/:slug/wiki":{"create/?":r.default,"edit/(.*)":r.default}}).init()},1741:function(e,t){var n="wiki",a=n||"unknownBundle";window._moduleTiming=window._moduleTiming||{},window._moduleTiming[a]=(new Date).getTime()-window._moduleTiming[a]},1742:function(e,t){var n="wiki",a=n||"unknownBundle";window._moduleTiming=window._moduleTiming||{},window._moduleTiming[a]=(new Date).getTime()},1890:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=a(i),u=n(18),o=a(u);t.default=o.default.ItemView.extend({languageNames:{markdown:"Markdown",creole:"Creole",rest:"reStructuredText",textile:"Textile"},events:{"click a":"updateLanguage","aui-dropdown2-show":"setActive"},initialize:function(e){this.$languageBtn=e.$languageBtn,this.language=e.language,this.on("change:language",function(e){this.language=e,this.render()})},render:function(){return this._buttonAuified||(this.auifyButton(),this._buttonAuified=!0),this.updateLabel(this.language),this},updateLanguage:function(e){e.preventDefault(),this.trigger("change:language",(0,r.default)(e.target).data("markupLang"))},auifyButton:function(){this.$languageBtn.removeClass("hidden").find("a").addClass("aui-dropdown2-trigger aui-dropdown2-trigger-arrowless aui-style-default").attr({"aria-haspopup":"true","aria-owns":"dropdown-wiki-lang","data-container":"#markItUpId_data"})},updateLabel:function(e){var t='<span class="aui-icon-dropdown"></span>';this.$languageBtn.find("a").text(this.languageNames[e]).append(t)},setActive:function(){this.$("li a").removeClass("active"),this.$('a[data-markup-lang="'+this.language+'"]').addClass("active")}}),e.exports=t.default},1929:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=a(i),u=n(1065),o=a(u),d=n(1890),s=a(d);t.default=o.default.extend({markItUpOptions:function(){return{syntax:this.language,isWiki:!0}},initialize:function(){o.default.prototype.initialize.call(this)},render:function(){return o.default.prototype.render.call(this),this._createDropdown(),this},setLanguage:function(e){this.language=e,this.$el.attr("data-markup-type",e).find("[class^=markup-type]").removeClass().addClass("markup-type-"+e),this.trigger("change:language",e)},_createDropdown:function(){this.languageDropdown=new s.default({el:(0,r.default)("#dropdown-wiki-lang"),$languageBtn:this.$(".markItUpButton.language"),language:this.language}).render(),this.listenTo(this.languageDropdown,"change:language",this.setLanguage)}}),e.exports=t.default},2146:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var a=(0,r.default)("#wiki-edit"),i=a.find(".textarea-preview"),u=a.data("isCreate"),d=a.find("#id_markup_type"),s=new o.default({el:i}).render();s.on("change:language",function(e){return d.val(e)}),u&&a.find("#id_path").focus()};var i=n(0),r=a(i),u=n(1929),o=a(u);e.exports=t.default},2485:function(e,t,n){n(1742),n(1711),e.exports=n(1741)}},[2485]);
//# sourceMappingURL=wiki.js.map