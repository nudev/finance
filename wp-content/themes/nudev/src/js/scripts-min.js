var exceedsContainer=!1,Finance={};!function(r,e,i){r(function(){Finance.faqs={triggers:r(".js__collapsible_list > li > h5"),questions:r(".js__collapsible_list > li"),answers:r(".js__collapsible_list > li > div"),_init:function(){r(window).on("load",Finance.faqs._loadHandler),Finance.faqs.triggers.on("click",Finance.faqs._clickHandler)},_loadHandler:function(e){Finance.faqs.answers.slideUp(0)},_clickHandler:function(e){var i="js__collapsible_opened",n=r(this).siblings("div"),s=Finance.faqs.answers.not(n);r(s).removeClass(i),r(s).slideUp(200),Finance.faqs.triggers.removeClass("js__collapsible_triggered"),r(n).hasClass(i)?(r(this).removeClass("js__collapsible_triggered"),r(n).removeClass(i),r(n).slideUp(200)):(r(this).addClass("js__collapsible_triggered"),r(n).addClass(i),r(n).slideDown(200))}},Finance.faqs._init(),Finance.Nav={parentlinks:r("nav.nu__main-nav > ul > li.has-children > a"),dropdowns:r("nav.nu__main-nav > ul > li.has-children"),categories:r("#howdoi.neumenu-wrapper > .neumenu-wrapper-inner > div:last-child > div"),backtocats:r("#howdoi.neumenu-wrapper > .neumenu-wrapper-inner > div:first-child > .removefilter"),_init:function(){r("div.wrapper, footer, div#nu__global-footer").on("click",Finance.Nav._didClickOutsideNav),Finance.Nav.parentlinks.on("click",Finance.Nav._didClickDropdown),Finance.Nav.categories.on("click",Finance.Nav._didClickCategory),Finance.Nav.backtocats.on("click",Finance.Nav._didClickBackToCats)},_didClickBackToCats:function(){Finance.Nav.categories.removeClass("theFilter"),Finance.Nav.categories.parents(".neumenu-wrapper-inner").removeClass("isFiltered")},_didClickCategory:function(e){r(this).parents(".neumenu-wrapper-inner").addClass("isFiltered"),r(this).addClass("theFilter")},_didClickOutsideNav:function(e){0===r("div#nu__globalheader, div#header").has(e.target).length&&(Finance.Nav._collapseDropdowns(),r("#neu__navicon").removeAttr("checked"),r("#nu__mobile a.active").removeClass("active"),r("#nu__mobile .show").hide(),r("#nu__mobile .show").removeClass("show"),r("html, body").removeClass("neu__noscroll"))},_collapseDropdowns:function(){r("li.has-children").find(".neumenu-wrapper").hide(),r("li.has-children").find(".isFiltered").removeClass("isFiltered"),r("li.has-children").find(".theFilter").removeClass("theFilter"),Finance.Nav.dropdowns.removeClass("neu__showme")},_didClickDropdown:function(e){e.stopPropagation(),e.preventDefault(),r(this).parent().siblings(".has-children").find(".neumenu-wrapper").is(":hidden")||r(this).parent().siblings(".has-children").find(".neumenu-wrapper").hide(),r(this).parent().siblings(".has-children").hasClass("neu__showme")&&r(this).parent().siblings(".has-children").removeClass("neu__showme"),r(this).parent().find(".neumenu-wrapper").is(":hidden")?(r(this).parent().find(".neumenu-wrapper").show(),r(this).parent().addClass("neu__showme")):(r(this).parent().find(".neumenu-wrapper").hide(),r(this).parent().removeClass("neu__showme"))}},Finance.Nav._init(),Finance.MobileNav={navicon:r("#neu__navicon-label"),nav:r("#nu__mobile"),_init:function(){Finance.MobileNav.navicon.on("click",Finance.MobileNav._didClickNavicon)},_didClickNavicon:function(e){r("html, body").toggleClass("neu__noscroll")}},Finance.MobileNav._init(),r(".js-mobile-nav").click(function(e){e.preventDefault();var i=r(this);i.next().hasClass("show")?(i.next().removeClass("show"),i.removeClass("active"),i.next().slideUp(350)):(i.parent().parent().find("li .inner").removeClass("show"),i.hasClass("parent")?i.parents("#nu__mobile > nav ul").find(".toggle").removeClass("active"):i.hasClass("child")?i.parents("#nu__mobile > nav ul").find(".toggle.child").removeClass("active"):i.parents("#nu__mobile > nav ul").find(".toggle.child-child").removeClass("active"),i.parent().parent().find("li .inner").slideUp(350),i.next().toggleClass("show"),i.addClass("active"),i.next().slideToggle(350))}),r(window).width()<1260?r(".download").removeClass("hvr-shutter-out-horizontal"):r(".download").addClass("hvr-shutter-out-horizontal"),r(".js__bio").magnificPopup({type:"ajax",closeOnContentClick:!1,closeOnBgClick:!1,enableEscapeKey:!1,verticalFit:!0,removalDelay:300,mainClass:"mfp-fade"});var n={},i=0;function s(){r(".nu__section-break").each(function(e){n[r(this).attr("id")]=0==e?0:parseInt(r(this).offset().top+r("header").height()-i)})}function a(e){var i=r(window).scrollTop(),n=i+r(window).height(),s=r(e).offset().top,a;return s+r(e).height()<=n&&i<=s}i=r(window).height()/2,s(),r(window).scroll(function(){r(".nu__col-left ul:not(.noautoscroll) li a").removeClass("active");var e=0;for(var i in n){if(result=a(r("#section-"+e)),result){r(".nu__col-left ul li a").removeClass("active"),r(".nu__col-left ul li a[data-id="+e+"]").addClass("active");break}e++}}),r(".nu__col-left ul:not(.noautoscroll)").on("click","a",function(e){console.log("click"),e.preventDefault();var i=r(this);r(".nu__col-left ul li a").removeClass("active"),r("html,body").animate({scrollTop:n["section-"+i.attr("data-id")]},500,function(){i.addClass("active")})});var e=r(window).width();function t(){if(r(window).width()<=620)r(".nu__filters > div > div").hide(),r(".nu__filters > div > ul > li").removeAttr("style"),r(".nu__filters > div > ul > li").removeClass("inshowmore"),exceedsContainer=!1;else{var e=0,i=r(".nu__filters > div > ul").width(),n=0,s=r(".nu__filters > div > ul > li").first().position().top,a=r(".nu__filters").height()-2;r(".nu__filters > div > ul > li.inshowmore").removeClass("inshowmore"),r(".nu__filters > div > ul > li > a").each(function(e){n+=r(this).outerWidth(),i<n?(r(this).parent().addClass("inshowmore").css({top:a}),a+=r(this).parent().height()):(r(this).parent().removeAttr("style"),r(this).parent().removeClass("inshowmore"))}),i<=n+0?exceedsContainer||(exceedsContainer=!0,r(".nu__filters > div > div").show()):n+0<i&&exceedsContainer&&(exceedsContainer=!1,r(".nu__filters > div > div").hide(),r(".nu__filters > div > ul > li.inshowmore").removeAttr("style"),r(".nu__filters > div > ul > li.inshowmore").removeClass("inshowmore"))}}function l(){r(".js__showmore").hasClass("active")||(r(".js__showmore").addClass("active"),r(".nu__filters > div > ul > li.inshowmore").each(function(){r(this).css({opacity:"1.0"})}),r(".nu__filters").css({overflow:"visible"}))}function o(){r(".js__showmore").hasClass("active")&&(r(".js__showmore").removeClass("active"),r(".nu__filters > div > ul > li.inshowmore").each(function(){r(this).css({opacity:"0.0"})}),r(".nu__filters").css({overflow:"hidden"}))}r("p.testp").text("Screen width is currently: "+e+"px."),r(window).resize(function(){!r("body").hasClass("home")&&0<r(".nu__filters").length&&(t(),o()),i=r(window).height()/2,s(),r(window).width()<1260?r(".download").removeClass("hvr-shutter-out-horizontal"):r(".download").addClass("hvr-shutter-out-horizontal");var e=r(window).width();e<=576?r("p.testp").text("Screen width is less than or equal to 576px. Width is currently: "+e+"px."):e<=680?r("p.testp").text("Screen width is between 577px and 680px. Width is currently: "+e+"px."):e<=1024?r("p.testp").text("Screen width is between 681px and 1024px. Width is currently: "+e+"px."):e<=1500?r("p.testp").text("Screen width is between 1025px and 1499px. Width is currently: "+e+"px."):r("p.testp").text("Screen width is greater than 1500px. Width is currently: "+e+"px.")}),!r("body").hasClass("home")&&0<r(".nu__filters").length&&t(),r(".nu__filters").on("click",".js__showmore",function(e){r(this).hasClass("active")?o():l()}),r(".js__youtube").magnificPopup({type:"iframe",iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',patterns:{youtube:{index:"youtube.com/",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"}},srcAction:"iframe_src"}})})}(jQuery,this);