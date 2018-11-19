!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(d){var u,i,p,o,f,t,l="Close",c="BeforeClose",n="AfterClose",r="BeforeAppend",m="MarkupParse",g="Open",a="Change",s="mfp",h="."+s,v="mfp-ready",C="mfp-removing",y="mfp-prevent-close",e=function(){},w=!!window.jQuery,b=d(window),I=function(e,t){u.ev.on(s+e+h,t)},x=function(e,t,n,i){var o=document.createElement("div");return o.className="mfp-"+e,n&&(o.innerHTML=n),i?t&&t.appendChild(o):(o=d(o),t&&o.appendTo(t)),o},k=function(e,t){u.ev.triggerHandler(s+e,t),u.st.callbacks&&(e=e.charAt(0).toLowerCase()+e.slice(1),u.st.callbacks[e]&&u.st.callbacks[e].apply(u,d.isArray(t)?t:[t]))},T=function(e){return e===t&&u.currTemplate.closeBtn||(u.currTemplate.closeBtn=d(u.st.closeMarkup.replace("%title%",u.st.tClose)),t=e),u.currTemplate.closeBtn},E=function(){d.magnificPopup.instance||((u=new e).init(),d.magnificPopup.instance=u)},_=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};e.prototype={constructor:e,init:function(){var e=navigator.appVersion;u.isIE7=-1!==e.indexOf("MSIE 7."),u.isIE8=-1!==e.indexOf("MSIE 8."),u.isLowIE=u.isIE7||u.isIE8,u.isAndroid=/android/gi.test(e),u.isIOS=/iphone|ipad|ipod/gi.test(e),u.supportsTransition=_(),u.probablyMobile=u.isAndroid||u.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),p=d(document),u.popupsCache={}},open:function(e){var t;if(!1===e.isObj){u.items=e.items.toArray(),u.index=0;var n,i=e.items;for(t=0;t<i.length;t++)if((n=i[t]).parsed&&(n=n.el[0]),n===e.el[0]){u.index=t;break}}else u.items=d.isArray(e.items)?e.items:[e.items],u.index=e.index||0;if(!u.isOpen){u.types=[],f="",e.mainEl&&e.mainEl.length?u.ev=e.mainEl.eq(0):u.ev=p,e.key?(u.popupsCache[e.key]||(u.popupsCache[e.key]={}),u.currTemplate=u.popupsCache[e.key]):u.currTemplate={},u.st=d.extend(!0,{},d.magnificPopup.defaults,e),u.fixedContentPos="auto"===u.st.fixedContentPos?!u.probablyMobile:u.st.fixedContentPos,u.st.modal&&(u.st.closeOnContentClick=!1,u.st.closeOnBgClick=!1,u.st.showCloseBtn=!1,u.st.enableEscapeKey=!1),u.bgOverlay||(u.bgOverlay=x("bg").on("click"+h,function(){u.close()}),u.wrap=x("wrap").attr("tabindex",-1).on("click"+h,function(e){u._checkIfClose(e.target)&&u.close()}),u.container=x("container",u.wrap)),u.contentContainer=x("content"),u.st.preloader&&(u.preloader=x("preloader",u.container,u.st.tLoading));var o=d.magnificPopup.modules;for(t=0;t<o.length;t++){var r=o[t];r=r.charAt(0).toUpperCase()+r.slice(1),u["init"+r].call(u)}k("BeforeOpen"),u.st.showCloseBtn&&(u.st.closeBtnInside?(I(m,function(e,t,n,i){n.close_replaceWith=T(i.type)}),f+=" mfp-close-btn-in"):u.wrap.append(T())),u.st.alignTop&&(f+=" mfp-align-top"),u.fixedContentPos?u.wrap.css({overflow:u.st.overflowY,overflowX:"hidden",overflowY:u.st.overflowY}):u.wrap.css({top:b.scrollTop(),position:"absolute"}),(!1===u.st.fixedBgPos||"auto"===u.st.fixedBgPos&&!u.fixedContentPos)&&u.bgOverlay.css({height:p.height(),position:"absolute"}),u.st.enableEscapeKey&&p.on("keyup"+h,function(e){27===e.keyCode&&u.close()}),b.on("resize"+h,function(){u.updateSize()}),u.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&u.wrap.addClass(f);var a=u.wH=b.height(),s={};if(u.fixedContentPos&&u._hasScrollBar(a)){var l=u._getScrollbarSize();l&&(s.marginRight=l)}u.fixedContentPos&&(u.isIE7?d("body, html").css("overflow","hidden"):s.overflow="hidden");var c=u.st.mainClass;return u.isIE7&&(c+=" mfp-ie7"),c&&u._addClassToMFP(c),u.updateItemHTML(),k("BuildControls"),d("html").css(s),u.bgOverlay.add(u.wrap).prependTo(u.st.prependTo||d(document.body)),u._lastFocusedEl=document.activeElement,setTimeout(function(){u.content?(u._addClassToMFP(v),u._setFocus()):u.bgOverlay.addClass(v),p.on("focusin"+h,u._onFocusIn)},16),u.isOpen=!0,u.updateSize(a),k(g),e}u.updateItemHTML()},close:function(){u.isOpen&&(k(c),u.isOpen=!1,u.st.removalDelay&&!u.isLowIE&&u.supportsTransition?(u._addClassToMFP(C),setTimeout(function(){u._close()},u.st.removalDelay)):u._close())},_close:function(){k(l);var e=C+" "+v+" ";if(u.bgOverlay.detach(),u.wrap.detach(),u.container.empty(),u.st.mainClass&&(e+=u.st.mainClass+" "),u._removeClassFromMFP(e),u.fixedContentPos){var t={marginRight:""};u.isIE7?d("body, html").css("overflow",""):t.overflow="",d("html").css(t)}p.off("keyup.mfp focusin"+h),u.ev.off(h),u.wrap.attr("class","mfp-wrap").removeAttr("style"),u.bgOverlay.attr("class","mfp-bg"),u.container.attr("class","mfp-container"),!u.st.showCloseBtn||u.st.closeBtnInside&&!0!==u.currTemplate[u.currItem.type]||u.currTemplate.closeBtn&&u.currTemplate.closeBtn.detach(),u._lastFocusedEl&&d(u._lastFocusedEl).focus(),u.currItem=null,u.content=null,u.currTemplate=null,u.prevHeight=0,k(n)},updateSize:function(e){if(u.isIOS){var t=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*t;u.wrap.css("height",n),u.wH=n}else u.wH=e||b.height();u.fixedContentPos||u.wrap.css("height",u.wH),k("Resize")},updateItemHTML:function(){var e=u.items[u.index];u.contentContainer.detach(),u.content&&u.content.detach(),e.parsed||(e=u.parseEl(u.index));var t=e.type;if(k("BeforeChange",[u.currItem?u.currItem.type:"",t]),u.currItem=e,!u.currTemplate[t]){var n=!!u.st[t]&&u.st[t].markup;k("FirstMarkupParse",n),u.currTemplate[t]=!n||d(n)}o&&o!==e.type&&u.container.removeClass("mfp-"+o+"-holder");var i=u["get"+t.charAt(0).toUpperCase()+t.slice(1)](e,u.currTemplate[t]);u.appendContent(i,t),e.preloaded=!0,k(a,e),o=e.type,u.container.prepend(u.contentContainer),k("AfterChange")},appendContent:function(e,t){(u.content=e)?u.st.showCloseBtn&&u.st.closeBtnInside&&!0===u.currTemplate[t]?u.content.find(".mfp-close").length||u.content.append(T()):u.content=e:u.content="",k(r),u.container.addClass("mfp-"+t+"-holder"),u.contentContainer.append(u.content)},parseEl:function(e){var t,n=u.items[e];if((n=n.tagName?{el:d(n)}:(t=n.type,{data:n,src:n.src})).el){for(var i=u.types,o=0;o<i.length;o++)if(n.el.hasClass("mfp-"+i[o])){t=i[o];break}n.src=n.el.attr("data-mfp-src"),n.src||(n.src=n.el.attr("href"))}return n.type=t||u.st.type||"inline",n.index=e,n.parsed=!0,u.items[e]=n,k("ElementParse",n),u.items[e]},addGroup:function(t,n){var e=function(e){e.mfpEl=this,u._openClick(e,t,n)};n||(n={});var i="click.magnificPopup";n.mainEl=t,n.items?(n.isObj=!0,t.off(i).on(i,e)):(n.isObj=!1,n.delegate?t.off(i).on(i,n.delegate,e):(n.items=t).off(i).on(i,e))},_openClick:function(e,t,n){var i;if((void 0!==n.midClick?n.midClick:d.magnificPopup.defaults.midClick)||!(2===e.which||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)){var o=void 0!==n.disableOn?n.disableOn:d.magnificPopup.defaults.disableOn;if(o)if(d.isFunction(o)){if(!o.call(u))return!0}else if(b.width()<o)return!0;e.type&&(e.preventDefault(),u.isOpen&&e.stopPropagation()),n.el=d(e.mfpEl),n.delegate&&(n.items=t.find(n.delegate)),u.open(n)}},updateStatus:function(e,t){if(u.preloader){i!==e&&u.container.removeClass("mfp-s-"+i),t||"loading"!==e||(t=u.st.tLoading);var n={status:e,text:t};k("UpdateStatus",n),e=n.status,t=n.text,u.preloader.html(t),u.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),u.container.addClass("mfp-s-"+e),i=e}},_checkIfClose:function(e){if(!d(e).hasClass(y)){var t=u.st.closeOnContentClick,n=u.st.closeOnBgClick;if(t&&n)return!0;if(!u.content||d(e).hasClass("mfp-close")||u.preloader&&e===u.preloader[0])return!0;if(e===u.content[0]||d.contains(u.content[0],e)){if(t)return!0}else if(n&&d.contains(document,e))return!0;return!1}},_addClassToMFP:function(e){u.bgOverlay.addClass(e),u.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),u.wrap.removeClass(e)},_hasScrollBar:function(e){return(u.isIE7?p.height():document.body.scrollHeight)>(e||b.height())},_setFocus:function(){(u.st.focus?u.content.find(u.st.focus).eq(0):u.wrap).focus()},_onFocusIn:function(e){if(e.target!==u.wrap[0]&&!d.contains(u.wrap[0],e.target))return u._setFocus(),!1},_parseMarkup:function(o,e,t){var r;t.data&&(e=d.extend(t.data,e)),k(m,[o,e,t]),d.each(e,function(e,t){if(void 0===t||!1===t)return!0;if(1<(r=e.split("_")).length){var n=o.find(h+"-"+r[0]);if(0<n.length){var i=r[1];"replaceWith"===i?n[0]!==t[0]&&n.replaceWith(t):"img"===i?n.is("img")?n.attr("src",t):n.replaceWith('<img src="'+t+'" class="'+n.attr("class")+'" />'):n.attr(r[1],t)}}else o.find(h+"-"+e).html(t)})},_getScrollbarSize:function(){if(void 0===u.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),u.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return u.scrollbarSize}},d.magnificPopup={instance:null,proto:e.prototype,modules:[],open:function(e,t){return E(),(e=e?d.extend(!0,{},e):{}).isObj=!0,e.index=t||0,this.instance.open(e)},close:function(){return d.magnificPopup.instance&&d.magnificPopup.instance.close()},registerModule:function(e,t){t.options&&(d.magnificPopup.defaults[e]=t.options),d.extend(this.proto,t.proto),this.modules.push(e)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},d.fn.magnificPopup=function(e){E();var t=d(this);if("string"==typeof e)if("open"===e){var n,i=w?t.data("magnificPopup"):t[0].magnificPopup,o=parseInt(arguments[1],10)||0;n=i.items?i.items[o]:(n=t,i.delegate&&(n=n.find(i.delegate)),n.eq(o)),u._openClick({mfpEl:n},t,i)}else u.isOpen&&u[e].apply(u,Array.prototype.slice.call(arguments,1));else e=d.extend(!0,{},e),w?t.data("magnificPopup",e):t[0].magnificPopup=e,u.addGroup(t,e);return t};var S,P,O,z="inline",M=function(){O&&(P.after(O.addClass(S)).detach(),O=null)};d.magnificPopup.registerModule(z,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){u.types.push(z),I(l+"."+z,function(){M()})},getInline:function(e,t){if(M(),e.src){var n=u.st.inline,i=d(e.src);if(i.length){var o=i[0].parentNode;o&&o.tagName&&(P||(S=n.hiddenClass,P=x(S),S="mfp-"+S),O=i.after(P).detach().removeClass(S)),u.updateStatus("ready")}else u.updateStatus("error",n.tNotFound),i=d("<div>");return e.inlineElement=i}return u.updateStatus("ready"),u._parseMarkup(t,{},e),t}}});var B,F="ajax",H=function(){B&&d(document.body).removeClass(B)},L=function(){H(),u.req&&u.req.abort()};d.magnificPopup.registerModule(F,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){u.types.push(F),B=u.st.ajax.cursor,I(l+"."+F,L),I("BeforeChange."+F,L)},getAjax:function(o){B&&d(document.body).addClass(B),u.updateStatus("loading");var e=d.extend({url:o.src,success:function(e,t,n){var i={data:e,xhr:n};k("ParseAjax",i),u.appendContent(d(i.data),F),o.finished=!0,H(),u._setFocus(),setTimeout(function(){u.wrap.addClass(v)},16),u.updateStatus("ready"),k("AjaxContentAdded")},error:function(){H(),o.finished=o.loadError=!0,u.updateStatus("error",u.st.ajax.tError.replace("%url%",o.src))}},u.st.ajax.settings);return u.req=d.ajax(e),""}}});var A,j=function(e){if(e.data&&void 0!==e.data.title)return e.data.title;var t=u.st.image.titleSrc;if(t){if(d.isFunction(t))return t.call(u,e);if(e.el)return e.el.attr(t)||""}return""};d.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=u.st.image,t=".image";u.types.push("image"),I(g+t,function(){"image"===u.currItem.type&&e.cursor&&d(document.body).addClass(e.cursor)}),I(l+t,function(){e.cursor&&d(document.body).removeClass(e.cursor),b.off("resize"+h)}),I("Resize"+t,u.resizeImage),u.isLowIE&&I("AfterChange",u.resizeImage)},resizeImage:function(){var e=u.currItem;if(e&&e.img&&u.st.image.verticalFit){var t=0;u.isLowIE&&(t=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",u.wH-t)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,A&&clearInterval(A),e.isCheckingImgSize=!1,k("ImageHasSize",e),e.imgHidden&&(u.content&&u.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(t){var n=0,i=t.img[0],o=function(e){A&&clearInterval(A),A=setInterval(function(){return 0<i.naturalWidth?void u._onImageHasSize(t):(200<n&&clearInterval(A),void(3===++n?o(10):40===n?o(50):100===n&&o(500)))},e)};o(1)},getImage:function(e,t){var n=0,i=function(){e&&(e.img[0].complete?(e.img.off(".mfploader"),e===u.currItem&&(u._onImageHasSize(e),u.updateStatus("ready")),e.hasSize=!0,e.loaded=!0,k("ImageLoadComplete")):++n<200?setTimeout(i,100):o())},o=function(){e&&(e.img.off(".mfploader"),e===u.currItem&&(u._onImageHasSize(e),u.updateStatus("error",r.tError.replace("%url%",e.src))),e.hasSize=!0,e.loaded=!0,e.loadError=!0)},r=u.st.image,a=t.find(".mfp-img");if(a.length){var s=document.createElement("img");s.className="mfp-img",e.el&&e.el.find("img").length&&(s.alt=e.el.find("img").attr("alt")),e.img=d(s).on("load.mfploader",i).on("error.mfploader",o),s.src=e.src,a.is("img")&&(e.img=e.img.clone()),0<(s=e.img[0]).naturalWidth?e.hasSize=!0:s.width||(e.hasSize=!1)}return u._parseMarkup(t,{title:j(e),img_replaceWith:e.img},e),u.resizeImage(),e.hasSize?(A&&clearInterval(A),e.loadError?(t.addClass("mfp-loading"),u.updateStatus("error",r.tError.replace("%url%",e.src))):(t.removeClass("mfp-loading"),u.updateStatus("ready"))):(u.updateStatus("loading"),e.loading=!0,e.hasSize||(e.imgHidden=!0,t.addClass("mfp-loading"),u.findImageSize(e))),t}}});var N,W=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};d.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,r=u.st.zoom,t=".zoom";if(r.enabled&&u.supportsTransition){var n,i,o=r.duration,a=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),n="all "+r.duration/1e3+"s "+r.easing,i={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},o="transition";return i["-webkit-"+o]=i["-moz-"+o]=i["-o-"+o]=i[o]=n,t.css(i),t},s=function(){u.content.css("visibility","visible")};I("BuildControls"+t,function(){if(u._allowZoom()){if(clearTimeout(n),u.content.css("visibility","hidden"),!(e=u._getItemToZoom()))return void s();(i=a(e)).css(u._getOffset()),u.wrap.append(i),n=setTimeout(function(){i.css(u._getOffset(!0)),n=setTimeout(function(){s(),setTimeout(function(){i.remove(),e=i=null,k("ZoomAnimationEnded")},16)},o)},16)}}),I(c+t,function(){if(u._allowZoom()){if(clearTimeout(n),u.st.removalDelay=o,!e){if(!(e=u._getItemToZoom()))return;i=a(e)}i.css(u._getOffset(!0)),u.wrap.append(i),u.content.css("visibility","hidden"),setTimeout(function(){i.css(u._getOffset())},16)}}),I(l+t,function(){u._allowZoom()&&(s(),i&&i.remove(),e=null)})}},_allowZoom:function(){return"image"===u.currItem.type},_getItemToZoom:function(){return!!u.currItem.hasSize&&u.currItem.img},_getOffset:function(e){var t,n=(t=e?u.currItem.img:u.st.zoom.opener(u.currItem.el||u.currItem)).offset(),i=parseInt(t.css("padding-top"),10),o=parseInt(t.css("padding-bottom"),10);n.top-=d(window).scrollTop()-i;var r={width:t.width(),height:(w?t.innerHeight():t[0].offsetHeight)-o-i};return W()?r["-moz-transform"]=r.transform="translate("+n.left+"px,"+n.top+"px)":(r.left=n.left,r.top=n.top),r}}});var R="iframe",Z="//about:blank",q=function(e){if(u.currTemplate[R]){var t=u.currTemplate[R].find("iframe");t.length&&(e||(t[0].src=Z),u.isIE8&&t.css("display",e?"block":"none"))}};d.magnificPopup.registerModule(R,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){u.types.push(R),I("BeforeChange",function(e,t,n){t!==n&&(t===R?q():n===R&&q(!0))}),I(l+"."+R,function(){q()})},getIframe:function(e,t){var n=e.src,i=u.st.iframe;d.each(i.patterns,function(){if(-1<n.indexOf(this.index))return this.id&&(n="string"==typeof this.id?n.substr(n.lastIndexOf(this.id)+this.id.length,n.length):this.id.call(this,n)),n=this.src.replace("%id%",n),!1});var o={};return i.srcAction&&(o[i.srcAction]=n),u._parseMarkup(t,o,e),u.updateStatus("ready"),t}}});var K=function(e){var t=u.items.length;return t-1<e?e-t:e<0?t+e:e},D=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};d.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var r=u.st.gallery,e=".mfp-gallery",o=Boolean(d.fn.mfpFastClick);return u.direction=!0,!(!r||!r.enabled)&&(f+=" mfp-gallery",I(g+e,function(){r.navigateByImgClick&&u.wrap.on("click"+e,".mfp-img",function(){if(1<u.items.length)return u.next(),!1}),p.on("keydown"+e,function(e){37===e.keyCode?u.prev():39===e.keyCode&&u.next()})}),I("UpdateStatus"+e,function(e,t){t.text&&(t.text=D(t.text,u.currItem.index,u.items.length))}),I(m+e,function(e,t,n,i){var o=u.items.length;n.counter=1<o?D(r.tCounter,i.index,o):""}),I("BuildControls"+e,function(){if(1<u.items.length&&r.arrows&&!u.arrowLeft){var e=r.arrowMarkup,t=u.arrowLeft=d(e.replace(/%title%/gi,r.tPrev).replace(/%dir%/gi,"left")).addClass(y),n=u.arrowRight=d(e.replace(/%title%/gi,r.tNext).replace(/%dir%/gi,"right")).addClass(y),i=o?"mfpFastClick":"click";t[i](function(){u.prev()}),n[i](function(){u.next()}),u.isIE7&&(x("b",t[0],!1,!0),x("a",t[0],!1,!0),x("b",n[0],!1,!0),x("a",n[0],!1,!0)),u.container.append(t.add(n))}}),I(a+e,function(){u._preloadTimeout&&clearTimeout(u._preloadTimeout),u._preloadTimeout=setTimeout(function(){u.preloadNearbyImages(),u._preloadTimeout=null},16)}),void I(l+e,function(){p.off(e),u.wrap.off("click"+e),u.arrowLeft&&o&&u.arrowLeft.add(u.arrowRight).destroyMfpFastClick(),u.arrowRight=u.arrowLeft=null}))},next:function(){u.direction=!0,u.index=K(u.index+1),u.updateItemHTML()},prev:function(){u.direction=!1,u.index=K(u.index-1),u.updateItemHTML()},goTo:function(e){u.direction=e>=u.index,u.index=e,u.updateItemHTML()},preloadNearbyImages:function(){var e,t=u.st.gallery.preload,n=Math.min(t[0],u.items.length),i=Math.min(t[1],u.items.length);for(e=1;e<=(u.direction?i:n);e++)u._preloadItem(u.index+e);for(e=1;e<=(u.direction?n:i);e++)u._preloadItem(u.index-e)},_preloadItem:function(e){if(e=K(e),!u.items[e].preloaded){var t=u.items[e];t.parsed||(t=u.parseEl(e)),k("LazyLoad",t),"image"===t.type&&(t.img=d('<img class="mfp-img" />').on("load.mfploader",function(){t.hasSize=!0}).on("error.mfploader",function(){t.hasSize=!0,t.loadError=!0,k("LazyLoadError",t)}).attr("src",t.src)),t.preloaded=!0}}}});var Y="retina",U,G,X,Q,V;d.magnificPopup.registerModule(Y,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(1<window.devicePixelRatio){var n=u.st.retina,i=n.ratio;1<(i=isNaN(i)?i():i)&&(I("ImageHasSize."+Y,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/i,width:"100%"})}),I("ElementParse."+Y,function(e,t){t.src=n.replaceSrc(t,i)}))}}}}),U=1e3,G="ontouchstart"in window,X=function(){b.off("touchmove"+V+" touchend"+V)},V="."+"mfpFastClick",d.fn.mfpFastClick=function(l){return d(this).each(function(){var t,e=d(this),n,i,o,r,a,s;G&&e.on("touchstart"+V,function(e){r=!1,s=1,a=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],i=a.clientX,o=a.clientY,b.on("touchmove"+V,function(e){a=e.originalEvent?e.originalEvent.touches:e.touches,s=a.length,a=a[0],(10<Math.abs(a.clientX-i)||10<Math.abs(a.clientY-o))&&(r=!0,X())}).on("touchend"+V,function(e){X(),r||1<s||(t=!0,e.preventDefault(),clearTimeout(n),n=setTimeout(function(){t=!1},U),l())})}),e.on("click"+V,function(){t||l()})})},d.fn.destroyMfpFastClick=function(){d(this).off("touchstart"+V+" click"+V),G&&b.off("touchmove"+V+" touchend"+V)},E()});