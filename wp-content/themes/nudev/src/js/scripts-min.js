var exceedsContainer=!1,Finance={};!function(e,n,i){e((function(){e("html").removeClass("no-js"),e(".js__collapsible_list").length&&(Finance.Collapsibles={_init:function(){e(".js__collapsible_list > li > a").on("click",Finance.Collapsibles._clickHandler)},_clickHandler:function(n){thisAnswer=e(this).siblings("div"),otherAnswers=e(".js__collapsible_list > li > div").not(thisAnswer),e(otherAnswers).parent("li").removeClass("js__collapsible_triggered"),e(otherAnswers).removeClass("js__collapsible_opened"),e(this).parent("li").hasClass("js__collapsible_triggered")?(e(this).siblings("div").removeClass("js__collapsible_opened"),e(this).parent("li").removeClass("js__collapsible_triggered"),e(this).siblings("a.named_anchor").length&&(history.replaceState?history.replaceState(null,null," "):location.hash="")):(e(this).siblings("div").addClass("js__collapsible_opened"),e(this).parent("li").addClass("js__collapsible_triggered"),e(this).siblings("a.named_anchor").length&&(window.location.hash=e(this).siblings("a.named_anchor")[0].id))}},Finance.Collapsibles._init()),window.location.hash&&(Finance.HashHandler={_init:function(){e(window).on("load",(function(n){if(e(".js__collapsible_list").length){var i=e("a.named_anchor:target"),a=e("a.named_anchor:not(:target)");a.parent("li").removeClass("js__collapsible_triggered"),a.siblings("div").removeClass("js__collapsible_opened"),i.parent("li").addClass("js__collapsible_triggered"),i.siblings("div").addClass("js__collapsible_opened"),"hashchange"==n.type&&i.length&&e(window).scrollTop(i.offset().top)}}))}},Finance.HashHandler._init()),Search={toggleOpen:e("#neu__sitesearch-toggle"),form:e("#neu__sitesearch-form"),input:e('#neu__sitesearch-form > input[type="text"]'),toggleClosed:e(".neu__sitesearch-closebutton"),_init:function(){Search.toggleOpen.on("click",Search._doOpenSearchBar),Search.toggleClosed.on("click",Search._doCloseSearchBar),e(document).on("click",(function(n){e(n.target).closest("#header").length||Search._doCloseSearchBar()})),Search.form.on("blur","button",(function(n){e(n.relatedTarget).closest(Search.form).length||Search._doCloseSearchBar()}))},_doOpenSearchBar:function(e){Search.form.addClass("neu__sitesearch-form--shown"),Search.form.find("button, input").attr("tabindex","0"),Search.input.focus()},_doCloseSearchBar:function(e){Search.form.find("button, input").attr("tabindex","-1"),Search.form.removeClass("neu__sitesearch-form--shown")}},Search._init(),Finance.NavHandler={isHomepage:e("main > div#howdoi").length>0,navItems:e("#nu__main-nav-desktop > ul > li > a"),dropdownPanels:e("li.has-children > .neumenu-wrapper"),_init:function(){Finance.NavHandler.navItems.on("focus blur click",Finance.NavHandler._navInteractionHandler),e("#nu__main-nav-desktop > ul > li:last-child > .neumenu-wrapper > div > a:last-child").on("blur",(function(n){0==e(this).parent().find(e(n.relatedTarget)).length&&(Finance.NavHandler.dropdownPanels.hide(),Finance.NavHandler.dropdownPanels.parent("li.has-children").removeClass("neu__showme"))})),e("#howdoi .neumenu-wrapper-inner>div:last-of-type>div>ul>li:last-of-type > a, #howdoi .neumenu-wrapper-inner>div:first-of-type > a").on("blur",(function(n){(e("#nu__main-nav-desktop > ul > li:nth-child(2) > a").is(n.relatedTarget)||e("#nu__main-nav-desktop > ul > li:first-child > a").is(n.relatedTarget))&&Finance.NavHandler._resetHowdoiState()})),Finance.NavHandler.isHomepage&&(e("#howdoi .neumenu-wrapper-inner>div:first-of-type > a").on("blur",(function(n){e("#nu__main-nav-desktop > ul > li:last-child > a").is(n.relatedTarget)&&(e("#nu__main-nav-desktop > ul > li:first-child > a").focus(),Finance.NavHandler._resetHowdoiState())})),e("#howdoi .neumenu-wrapper-inner>div:last-of-type>div>ul>li:last-of-type > a").on("blur",(function(n){e("section.hero > div > a").is(n.relatedTarget)&&(e("#nu__main-nav-desktop > ul > li:nth-child(2) > a").focus(),Finance.NavHandler._resetHowdoiState())})),e("main > #howdoi > div> div:last-child > div:first-child > a").on("blur",(function(n){e("li.has-children:last-child > a").is(n.relatedTarget)&&(e("main > #howdoi > div> div:last-child > div > a").attr("tabindex","-1"),e("li.has-children:first-of-type > a").focus())})),e("main > #howdoi > div> div:last-child > div:last-child > a").on("blur",(function(n){e("section.hero a.nu__content_btn").is(n.relatedTarget)&&(e("main > #howdoi > div> div:last-child > div > a").attr("tabindex","-1"),e("#nu__main-nav-desktop > ul > li:nth-child(2) > a").focus())})))},_navInteractionHandler:function(n){n.stopPropagation(),"click"==n.type?e(this).data("justfocussed")?e(this).data("justfocussed",!1):(Finance.NavHandler.dropdownPanels.hide(),Finance.NavHandler.dropdownPanels.parent("li.has-children").removeClass("neu__showme"),e(this).blur()):"focus"==n.type?(e(this).data("justfocussed",!0),Finance.NavHandler.dropdownPanels.hide(),Finance.NavHandler.dropdownPanels.parent("li.has-children").removeClass("neu__showme"),Finance.NavHandler._resetHowdoiState(),e(this).parent("li.has-children").find(".neumenu-wrapper").show(),e(this).parent("li.has-children").addClass("neu__showme"),e(this).parent().is('[data-id="howdoi"]')&&(e(".neumenu-wrapper#howdoi .neumenu-wrapper-inner>div:first-of-type>a").attr("tabindex","0"),e(".neumenu-wrapper#howdoi .neumenu-wrapper-inner>div:last-of-type>div>ul>li>a").attr("tabindex","0"),e(".neumenu-wrapper#howdoi .neumenu-wrapper-inner>div:last-of-type>div>a").attr("tabindex","0"))):(e(this).data("justfocussed",!1),e("#nu__main-nav-desktop > ul > li.has-children").not(e(this).parent()).find(".neumenu-wrapper").hide(),0==e(this).parent().find(n.relatedTarget).length&&(Finance.NavHandler.dropdownPanels.hide(),Finance.NavHandler.dropdownPanels.parent("li.has-children").removeClass("neu__showme")),Finance.NavHandler.isHomepage&&e(this).parent().is('[data-id="howdoi"]')&&e(n.relatedTarget).is("#nu__main-nav-desktop > ul > li:nth-child(2) > a")&&(e("main > #howdoi > div> div:last-child > div > a").attr("tabindex","0"),e("main > #howdoi > div> div:last-child > div:first-child > a").focus()))},_resetHowdoiState:function(){e(".neumenu-wrapper#howdoi .neumenu-wrapper-inner>div:last-of-type>div").removeClass("theFilter"),e(".neumenu-wrapper#howdoi .neumenu-wrapper-inner").removeClass("isFiltered"),e(".neumenu-wrapper#howdoi .neumenu-wrapper-inner>div:first-of-type>a").attr("tabindex","-1"),e(".neumenu-wrapper#howdoi .neumenu-wrapper-inner>div:last-of-type>div>ul>li>a").attr("tabindex","-1"),e(".neumenu-wrapper#howdoi .neumenu-wrapper-inner>div:last-of-type>div>a").attr("tabindex","-1")}},Finance.NavHandler._init(),Finance.Nav={parentlinks:e("nav.nu__main-nav > ul > li.has-children > a"),dropdowns:e("nav.nu__main-nav > ul > li.has-children"),categories:e("#howdoi.neumenu-wrapper > .neumenu-wrapper-inner > div:last-child > div"),backtocats:e("#howdoi.neumenu-wrapper > .neumenu-wrapper-inner > div:first-child > .removefilter"),_init:function(){e("div.wrapper, footer, div#nu__global-footer").on("click",Finance.Nav._didClickOutsideNav),Finance.Nav.parentlinks.on("click",Finance.Nav._didClickDropdown),Finance.Nav.categories.on("click",Finance.Nav._didClickCategory),Finance.Nav.backtocats.on("click",Finance.Nav._didClickBackToCats)},_didClickBackToCats:function(){Finance.Nav.categories.removeClass("theFilter"),Finance.Nav.categories.parents(".neumenu-wrapper-inner").removeClass("isFiltered"),e("#nu__main-nav-desktop > ul > li:first-child > a").focus()},_didClickCategory:function(n){e(this).parents(".neumenu-wrapper-inner").addClass("isFiltered"),e(this).addClass("theFilter"),e("#howdoi > div > div:first-child > a").attr("tabindex","0"),e(this).find("a").attr("tabindex","0")},_didClickOutsideNav:function(n){0===e("div#nu__globalheader, div#header").has(n.target).length&&(e("li.has-children").find(".neumenu-wrapper").hide(),e("li.has-children").find(".isFiltered").removeClass("isFiltered"),e("li.has-children").find(".theFilter").removeClass("theFilter"),Finance.Nav.dropdowns.removeClass("neu__showme"),e("#neu__navicon").removeAttr("checked"),e("#nu__mobile a.active").removeClass("active"),e("#nu__mobile .show").hide(),e("#nu__mobile .show").removeClass("show"),e("html, body").removeClass("neu__noscroll"))}},Finance.Nav._init(),Finance.MobileNav={navicon:e("#neu__navicon-label"),nav:e("#nu__mobile"),_init:function(){Finance.MobileNav.navicon.on("click",Finance.MobileNav._didClickNavicon)},_didClickNavicon:function(n){e("body").toggleClass("neu__noscroll")}},Finance.MobileNav._init(),e(".js-mobile-nav").click((function(n){n.preventDefault();var i=e(this);i.next().hasClass("show")?(i.next().removeClass("show"),i.removeClass("active"),i.next().slideUp(350)):(i.parent().parent().find("li .inner").removeClass("show"),i.hasClass("parent")?i.parents("#nu__mobile > nav ul").find(".toggle").removeClass("active"):i.hasClass("child")?i.parents("#nu__mobile > nav ul").find(".toggle.child").removeClass("active"):i.parents("#nu__mobile > nav ul").find(".toggle.child-child").removeClass("active"),i.parent().parent().find("li .inner").slideUp(350),i.next().toggleClass("show"),i.addClass("active"),i.next().slideToggle(350))})),Finance.JumpNav={_init:function(){e(window).on("hashchange",Finance.JumpNav._doHashHandler)},_doHashHandler:function(n){var i=window.location.hash.substring(1);if(i){var a=e("div#nu__globalheader").height()+e("header").height(),l=e("#"+i).offset().top;e(window).scrollTop(l-a)}}},Finance.faqs={triggers:e(".js__collapsible_list > li > a"),questions:e(".js__collapsible_list > li"),answers:e(".js__collapsible_list > li > div"),_init:function(){Finance.faqs.triggers.on("click",Finance.faqs._clickHandler)},_loadHandler:function(n){e("a.named_anchor:target").parent("li").addClass("js__collapsible_triggered"),e("a.named_anchor:target").siblings("div").slideDown(200),e("a.named_anchor:target").siblings("div").addClass("js__collapsible_opened")},_clickHandler:function(n){var i="js__collapsible_opened",a=e(this).siblings("div"),l=Finance.faqs.answers.not(a);e(l).removeClass(i),e(l).slideUp(200),Finance.faqs.questions.removeClass("js__collapsible_triggered"),e(a).hasClass(i)?(e(this).parent("li").removeClass("js__collapsible_triggered"),e(a).removeClass(i),e(a).slideUp(200)):(e(this).parent("li").addClass("js__collapsible_triggered"),e(a).addClass(i),e(a).slideDown(200))}}}))}(jQuery,this);