var exceedsContainer=!1,Finance={};!function(e,n,a){e(function(){Search={toggleOpen:e("#neu__sitesearch-toggle"),form:e("#neu__sitesearch-form"),input:e('#neu__sitesearch-form > input[type="text"]'),toggleClosed:e(".neu__sitesearch-closebutton"),_init:function(){Search.toggleOpen.on("click",Search._doOpenSearchBar),Search.toggleClosed.on("click",Search._doCloseSearchBar),e(document).on("click",function(n){e(n.target).closest("#header").length||Search._doCloseSearchBar()}),Search.form.on("blur","button",function(n){e(n.relatedTarget).closest(Search.form).length||Search._doCloseSearchBar()})},_doOpenSearchBar:function(e){Search.form.addClass("neu__sitesearch-form--shown"),Search.form.find("button, input").attr("tabindex","0"),Search.input.focus()},_doCloseSearchBar:function(e){Search.form.find("button, input").attr("tabindex","-1"),Search.form.removeClass("neu__sitesearch-form--shown")}},Search._init(),Finance.NavHandler={isHomepage:e("main > div#howdoi").length>0,navItems:e("#nu__main-nav-desktop > ul > li > a"),dropdownPanels:e("li.has-children > .neumenu-wrapper"),_init:function(){Finance.NavHandler.navItems.on("focus blur click",Finance.NavHandler._navInteractionHandler),e("#nu__main-nav-desktop > ul > li:last-child > .neumenu-wrapper > div > a:last-child").on("blur",function(n){0==e(this).parent().find(e(n.relatedTarget)).length&&(Finance.NavHandler.dropdownPanels.hide(),Finance.NavHandler.dropdownPanels.parent("li.has-children").removeClass("neu__showme"))}),e("#howdoi .neumenu-wrapper-inner>div:last-of-type>div>ul>li:last-of-type > a, #howdoi .neumenu-wrapper-inner>div:first-of-type > a").on("blur",function(n){(e("#nu__main-nav-desktop > ul > li:nth-child(2) > a").is(n.relatedTarget)||e("#nu__main-nav-desktop > ul > li:first-child > a").is(n.relatedTarget))&&Finance.NavHandler._resetHowdoiState()}),Finance.NavHandler.isHomepage&&(e("#howdoi .neumenu-wrapper-inner>div:first-of-type > a").on("blur",function(n){e("#nu__main-nav-desktop > ul > li:last-child > a").is(n.relatedTarget)&&(e("#nu__main-nav-desktop > ul > li:first-child > a").focus(),Finance.NavHandler._resetHowdoiState())}),e("#howdoi .neumenu-wrapper-inner>div:last-of-type>div>ul>li:last-of-type > a").on("blur",function(n){e("section.hero > div > a").is(n.relatedTarget)&&(e("#nu__main-nav-desktop > ul > li:nth-child(2) > a").focus(),Finance.NavHandler._resetHowdoiState())}),e("main > #howdoi > div> div:last-child > div:first-child > a").on("blur",function(n){e("li.has-children:last-child > a").is(n.relatedTarget)&&(e("main > #howdoi > div> div:last-child > div > a").attr("tabindex","-1"),e("li.has-children:first-of-type > a").focus())}),e("main > #howdoi > div> div:last-child > div:last-child > a").on("blur",function(n){e("section.hero a.nu__content_btn").is(n.relatedTarget)&&(e("main > #howdoi > div> div:last-child > div > a").attr("tabindex","-1"),e("#nu__main-nav-desktop > ul > li:nth-child(2) > a").focus())}))},_navInteractionHandler:function(n){n.stopPropagation(),"click"==n.type?e(this).data("justfocussed")?e(this).data("justfocussed",!1):(Finance.NavHandler.dropdownPanels.hide(),Finance.NavHandler.dropdownPanels.parent("li.has-children").removeClass("neu__showme"),e(this).blur()):"focus"==n.type?(e(this).data("justfocussed",!0),Finance.NavHandler.dropdownPanels.hide(),Finance.NavHandler.dropdownPanels.parent("li.has-children").removeClass("neu__showme"),Finance.NavHandler._resetHowdoiState(),e(this).parent("li.has-children").find(".neumenu-wrapper").show(),e(this).parent("li.has-children").addClass("neu__showme"),e(this).parent().is('[data-id="howdoi"]')&&(e(".neumenu-wrapper#howdoi .neumenu-wrapper-inner>div:first-of-type>a").attr("tabindex","0"),e(".neumenu-wrapper#howdoi .neumenu-wrapper-inner>div:last-of-type>div>ul>li>a").attr("tabindex","0"),e(".neumenu-wrapper#howdoi .neumenu-wrapper-inner>div:last-of-type>div>a").attr("tabindex","0"))):(e(this).data("justfocussed",!1),e("#nu__main-nav-desktop > ul > li.has-children").not(e(this).parent()).find(".neumenu-wrapper").hide(),e(this).parent().find(n.relatedTarget).length,Finance.NavHandler.isHomepage&&e(this).parent().is('[data-id="howdoi"]')&&e(n.relatedTarget).is("#nu__main-nav-desktop > ul > li:nth-child(2) > a")&&(e("main > #howdoi > div> div:last-child > div > a").attr("tabindex","0"),e("main > #howdoi > div> div:last-child > div:first-child > a").focus()))},_resetHowdoiState:function(){e(".neumenu-wrapper#howdoi .neumenu-wrapper-inner>div:last-of-type>div").removeClass("theFilter"),e(".neumenu-wrapper#howdoi .neumenu-wrapper-inner").removeClass("isFiltered"),e(".neumenu-wrapper#howdoi .neumenu-wrapper-inner>div:first-of-type>a").attr("tabindex","-1"),e(".neumenu-wrapper#howdoi .neumenu-wrapper-inner>div:last-of-type>div>ul>li>a").attr("tabindex","-1"),e(".neumenu-wrapper#howdoi .neumenu-wrapper-inner>div:last-of-type>div>a").attr("tabindex","-1")}},Finance.NavHandler._init(),Finance.Nav={parentlinks:e("nav.nu__main-nav > ul > li.has-children > a"),dropdowns:e("nav.nu__main-nav > ul > li.has-children"),categories:e("#howdoi.neumenu-wrapper > .neumenu-wrapper-inner > div:last-child > div"),backtocats:e("#howdoi.neumenu-wrapper > .neumenu-wrapper-inner > div:first-child > .removefilter"),_init:function(){e("div.wrapper, footer, div#nu__global-footer").on("click",Finance.Nav._didClickOutsideNav),Finance.Nav.categories.on("click",Finance.Nav._didClickCategory),Finance.Nav.backtocats.on("click",Finance.Nav._didClickBackToCats)},_didClickBackToCats:function(){Finance.Nav.categories.removeClass("theFilter"),Finance.Nav.categories.parents(".neumenu-wrapper-inner").removeClass("isFiltered"),e("#nu__main-nav-desktop > ul > li:first-child > a").focus()},_didClickCategory:function(n){e(this).parents(".neumenu-wrapper-inner").addClass("isFiltered"),e(this).addClass("theFilter"),e("#howdoi > div > div:first-child > a").attr("tabindex","0"),e(this).find("a").attr("tabindex","0")},_didClickOutsideNav:function(n){0===e("div#nu__globalheader, div#header").has(n.target).length&&(e("li.has-children").find(".neumenu-wrapper").hide(),e("li.has-children").find(".isFiltered").removeClass("isFiltered"),e("li.has-children").find(".theFilter").removeClass("theFilter"),Finance.Nav.dropdowns.removeClass("neu__showme"),e("#neu__navicon").removeAttr("checked"),e("#nu__mobile a.active").removeClass("active"),e("#nu__mobile .show").hide(),e("#nu__mobile .show").removeClass("show"),e("html, body").removeClass("neu__noscroll"))}},Finance.Nav._init(),Finance.MobileNav={navicon:e("#neu__navicon-label"),nav:e("#nu__mobile"),_init:function(){Finance.MobileNav.navicon.on("click",Finance.MobileNav._didClickNavicon)},_didClickNavicon:function(n){e("body").toggleClass("neu__noscroll")}},Finance.MobileNav._init(),e(".js-mobile-nav").click(function(n){n.preventDefault();var a=e(this);a.next().hasClass("show")?(a.next().removeClass("show"),a.removeClass("active"),a.next().slideUp(350)):(a.parent().parent().find("li .inner").removeClass("show"),a.hasClass("parent")?a.parents("#nu__mobile > nav ul").find(".toggle").removeClass("active"):a.hasClass("child")?a.parents("#nu__mobile > nav ul").find(".toggle.child").removeClass("active"):a.parents("#nu__mobile > nav ul").find(".toggle.child-child").removeClass("active"),a.parent().parent().find("li .inner").slideUp(350),a.next().toggleClass("show"),a.addClass("active"),a.next().slideToggle(350))}),Finance.JumpNav={_init:function(){e(window).on("hashchange",Finance.JumpNav._doHashHandler)},_doHashHandler:function(n){var a=window.location.hash.substring(1);if(a){var i=e("div#nu__globalheader").height()+e("header").height(),t=e("#"+a).offset().top;e(window).scrollTop(t-i)}}},Finance.JumpNav._init(),Finance.faqs={triggers:e(".js__collapsible_list > li > a"),questions:e(".js__collapsible_list > li"),answers:e(".js__collapsible_list > li > div"),_init:function(){e(window).on("load",Finance.faqs._loadHandler),Finance.faqs.triggers.on("click",Finance.faqs._clickHandler)},_loadHandler:function(e){Finance.faqs.answers.slideUp(0),Finance.JumpNav._doHashHandler()},_clickHandler:function(n){var a="js__collapsible_opened",i=e(this).siblings("div"),t=Finance.faqs.answers.not(i);e(t).removeClass(a),e(t).slideUp(200),Finance.faqs.questions.removeClass("js__collapsible_triggered"),e(i).hasClass(a)?(e(this).parent("li").removeClass("js__collapsible_triggered"),e(i).removeClass(a),e(i).slideUp(200)):(e(this).parent("li").addClass("js__collapsible_triggered"),e(i).addClass(a),e(i).slideDown(200))}},Finance.faqs._init()})}(jQuery,this);