!function(e,o,s){e(function(){Finance.Glossary={offsetHeader:e("div#nu__globalheader").outerHeight()+e("header.header").outerHeight(),offsetHeroAndHeader:e("div#nu__globalheader").outerHeight()+e("header.header").outerHeight()+e("section.hero").outerHeight(),offsetHero:e("section.hero").outerHeight(),jumpNav:e("div.glossary-jumpnav"),jumpLinks:e("div.glossary-jumpnav > span > a"),_init:function(){e(window).on("scroll",Finance.Glossary._scrollHandler),e(window).on("load",Finance.Glossary._loadHandler),Finance.Glossary.jumpLinks.on("click",Finance.Glossary._jumpHandler)},_loadHandler:function(o){e(window).scrollTop()>=Finance.Glossary.offsetHero&&Finance.Glossary.jumpNav.addClass("js__glossnav_sticky")},_scrollHandler:function(o){e(window).scrollTop()>=Finance.Glossary.offsetHero?Finance.Glossary.jumpNav.addClass("js__glossnav_sticky"):Finance.Glossary.jumpNav.removeClass("js__glossnav_sticky")},_jumpHandler:function(o){o.preventDefault();var s=e(this).attr("href"),a=e("div.glossary-content > ul"+s).offset().top;e("html, body").scrollTop(a-Finance.Glossary.offsetHeader-Finance.Glossary.jumpNav.outerHeight())}},Finance.Glossary._init()})}(jQuery,this);