"use strict";!function(t,e,i,s){function n(e,i){this.element=e,this._defaults=r,this._name=o,this.options=t.extend({},r,i),this.action="string"==typeof i?i:"default",this.init()}var o="jMosaic",r={items_type:"article",min_row_height:150,margin:0,is_first_big:!1};n.prototype.start=function(){var e=this,i=0,s=0,n=t(e.element).find(e.options.items_type).length;this.clear(),e.options.is_first_big&&e.reverseItems(),t(e.element).addClass("jMosaic-selector"),t(e.element).find(e.options.items_type).each(function(o){t(this).addClass("jMosaic-item");var r=e.itemNewWidth(this,e.options.min_row_height);t(this).removeAttr("width").removeAttr("height").css({width:r+"px",height:e.options.min_row_height+"px",margin:e.options.margin+"px"}),0==o||t(this).position().top==t(this).prev().position().top?s+=t(this).outerWidth(!0):(e.stretchingRow(".jMosaic-row_"+i,s),s=t(this).outerWidth(!0),i++),t(this).addClass("jMosaic-row_"+i),o==n-1&&e.stretchingRow(".jMosaic-row_"+i,s)}),e.options.is_first_big&&e.reverseItems(),t(e.element).append("<div class='jMosaic-clear'></div>")},n.prototype.clear=function(){var e=this;t(e.element).find(".jMosaic-item").each(function(e){t(this)[0].className=t(this)[0].className.replace(/\bjMosaic-row_.*?\b/g,"")}),t(e.element).find(".jMosaic-item").removeClass("jMosaic-item"),t(e.element).find(".jMosaic-clear").remove(),t(e.element).removeClass("jMosaic-selector")},n.prototype.stretchingRow=function(e,i){var s=this,n=t(s.element).find(e).outerHeight(!0),o=t(s.element).width()-1,r=n/i*o,h=0,a=0;t(s.element).find(e).each(function(e){t(this).width(s.itemNewWidth(this,r-2*s.options.margin)),h+=t(this).outerWidth(!0)}),t(s.element).find(e).height(r-2*s.options.margin),a=t(s.element).find(e).last().outerWidth(!0)+(o-h)-2*s.options.margin,t(s.element).find(e).last().width(a)},n.prototype.itemNewWidth=function(e,i){var s=void 0!==t(e).attr("width")?t(e).attr("width"):t(e).width(),n=void 0!==t(e).attr("height")?t(e).attr("height"):t(e).height(),o=s/n,r=i*o;return Math.round(r)},n.prototype.reverseItems=function(){var e=this,i=t.makeArray(t(e.element).find(e.options.items_type));i.reverse(),t(e.element).html(i)},n.prototype.init=function(){switch(this.action){case"clear":return this.clear();default:return this.start()}},t.fn[o]=function(e){return this.each(function(){t.data(this,"plugin_"+o,new n(this,e))})}}(jQuery,window,document);