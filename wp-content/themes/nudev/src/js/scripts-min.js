var exceedsContainer=!1,Finance={};!function(c,e,u){c(function(){var o;(o=c).fn.extend({neumenu:function(e){var t={pos:"list.bottom",classes:"active"},n=o.extend({},t,e);return this.each(function(){var t=o(this).attr("data-pos");t==u&&(t=n.pos);var i=o(this).attr("data-classes");i==u&&(i=n.classes);var s=o(this);o(this).find(".neumenu-item").each(function(){var e=o(this).find(".neumenu-sub");if(0==e.length)return!0;switch(t){case"list.right":e.css({top:0,left:0,"margin-left":s.outerWidth()-1+"%",height:"100%","border-left":"none"});break;case"list.left":e.css({top:0,right:0,"margin-right":s.outerWidth()-1+"px",height:s.outerHeight()+"px","border-right":"none"});break;case"list.bottom":e.css({left:0,width:s.outerWidth()+"px"});break;case"list.top":e.css({left:0,width:s.outerWidth()+"px",bottom:0,"margin-bottom":s.outerHeight()+"px"})}o(this).on("click",function(){o(".neumenu-item, .neumenu-sub").removeClass("active"),o(this).addClass("active"),e.addClass(i)})})}),this}}),c(".nu__main-nav > ul > li.has-children ").on("click",function(e){var t=c(this).attr("data-id");c(e.target).is("a")||e.preventDefault(),c("li.has-children").removeClass("neu__active"),c(this).addClass("neu__active"),"howdoi"==t&&(c("#about, .first-sub").css({display:"none"}),c("#howdoi, .first-sub").css({display:"block"})),"about"==t&&(c("#howdoi, .first-sub").css({display:"none"}),c("#about, .first-sub").css({display:"block"}))}),c("main").on("click touchend",function(){c("li.has-children").removeClass("neu__active"),c("#howdoi, .first-sub").css({display:"none"}),c("#about, .first-sub").css({display:"none"})}),c(".neumenu").neumenu(),c("#about > .neumenu > .neumenu-item").on("click",function(e){c(".neumenu-item").removeClass("active")}),c(".js-mobile-nav").click(function(e){e.preventDefault();var t=c(this);t.next().hasClass("show")?(t.next().removeClass("show"),t.removeClass("active"),t.next().slideUp(350)):(t.parent().parent().find("li .inner").removeClass("show"),t.hasClass("parent")?t.parents("#nu__mobile > nav ul").find(".toggle").removeClass("active"):t.hasClass("child")?t.parents("#nu__mobile > nav ul").find(".toggle.child").removeClass("active"):t.parents("#nu__mobile > nav ul").find(".toggle.child-child").removeClass("active"),t.parent().parent().find("li .inner").slideUp(350),t.next().toggleClass("show"),t.addClass("active"),t.next().slideToggle(350))}),c(window).width()<1260?c(".download").removeClass("hvr-shutter-out-horizontal"):c(".download").addClass("hvr-shutter-out-horizontal"),c(".js__bio").magnificPopup({type:"ajax",closeOnContentClick:!1,closeOnBgClick:!1,enableEscapeKey:!1,verticalFit:!0,removalDelay:300,mainClass:"mfp-fade"});var i={},t=0;function s(){c(".nu__section-break").each(function(e){i[c(this).attr("id")]=0==e?0:parseInt(c(this).offset().top+c("header").height()-t)})}function n(e){var t=c(window).scrollTop(),i=t+c(window).height(),s=c(e).offset().top,n;return s+c(e).height()<=i&&t<=s}t=c(window).height()/2,s(),c(window).scroll(function(){c(".nu__col-left ul:not(.noautoscroll) li a").removeClass("active");var e=0;for(var t in i){if(result=n(c("#section-"+e)),result){c(".nu__col-left ul li a").removeClass("active"),c(".nu__col-left ul li a[data-id="+e+"]").addClass("active");break}e++}}),c(".nu__col-left ul:not(.noautoscroll)").on("click","a",function(e){console.log("click"),e.preventDefault();var t=c(this);c(".nu__col-left ul li a").removeClass("active"),c("html,body").animate({scrollTop:i["section-"+t.attr("data-id")]},500,function(){t.addClass("active")})});var e=c(window).width();function a(){if(c(window).width()<=620)c(".nu__filters > div > div").hide(),c(".nu__filters > div > ul > li").removeAttr("style"),c(".nu__filters > div > ul > li").removeClass("inshowmore"),exceedsContainer=!1;else{var e=0,t=c(".nu__filters > div > ul").width(),i=0,s=c(".nu__filters > div > ul > li").first().position().top,n=c(".nu__filters").height()-2;c(".nu__filters > div > ul > li.inshowmore").removeClass("inshowmore"),c(".nu__filters > div > ul > li > a").each(function(e){i+=c(this).outerWidth(),t<i?(c(this).parent().addClass("inshowmore").css({top:n}),n+=c(this).parent().height()):(c(this).parent().removeAttr("style"),c(this).parent().removeClass("inshowmore"))}),t<=i+0?exceedsContainer||(exceedsContainer=!0,c(".nu__filters > div > div").show()):i+0<t&&exceedsContainer&&(exceedsContainer=!1,c(".nu__filters > div > div").hide(),c(".nu__filters > div > ul > li.inshowmore").removeAttr("style"),c(".nu__filters > div > ul > li.inshowmore").removeClass("inshowmore"))}}function l(){c(".js__showmore").hasClass("active")||(c(".js__showmore").addClass("active"),c(".nu__filters > div > ul > li.inshowmore").each(function(){c(this).css({opacity:"1.0"})}),c(".nu__filters").css({overflow:"visible"}))}function r(){c(".js__showmore").hasClass("active")&&(c(".js__showmore").removeClass("active"),c(".nu__filters > div > ul > li.inshowmore").each(function(){c(this).css({opacity:"0.0"})}),c(".nu__filters").css({overflow:"hidden"}))}c("p.testp").text("Screen width is currently: "+e+"px."),c(window).resize(function(){!c("body").hasClass("home")&&0<c(".nu__filters").length&&(a(),r()),t=c(window).height()/2,s(),c(window).width()<1260?c(".download").removeClass("hvr-shutter-out-horizontal"):c(".download").addClass("hvr-shutter-out-horizontal");var e=c(window).width();e<=576?c("p.testp").text("Screen width is less than or equal to 576px. Width is currently: "+e+"px."):e<=680?c("p.testp").text("Screen width is between 577px and 680px. Width is currently: "+e+"px."):e<=1024?c("p.testp").text("Screen width is between 681px and 1024px. Width is currently: "+e+"px."):e<=1500?c("p.testp").text("Screen width is between 1025px and 1499px. Width is currently: "+e+"px."):c("p.testp").text("Screen width is greater than 1500px. Width is currently: "+e+"px.")}),!c("body").hasClass("home")&&0<c(".nu__filters").length&&a(),c(".nu__filters").on("click",".js__showmore",function(e){c(this).hasClass("active")?r():l()}),c(".js__youtube").magnificPopup({type:"iframe",iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',patterns:{youtube:{index:"youtube.com/",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"}},srcAction:"iframe_src"}})})}(jQuery,this);