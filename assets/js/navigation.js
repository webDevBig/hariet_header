var unilyNavigation = {

    bannerSelector: '.c-alert',
    navToggleSelector: '.js-nav-toggle',

    init: function init() {
        $(window).on("scroll", unilyNavigation.setupStickyNav);
        $(unilyNavigation.navToggleSelector).on("click", unilyNavigation.setupStickyNav);
    },

    setupStickyNav: function setupStickyNav() {

        // remove setupStickyNav events, only necessary to fire once
        $(window).off("scroll", unilyNavigation.setupStickyNav);
        $(unilyNavigation.navToggleSelector).off("click", unilyNavigation.setupStickyNav);

        // add sticky-header class to body
        $("body").addClass("sticky-header");

        // finally add dynamic padding adjustment to body 
        // in the case of an announcement banner being present
        $(window).resize(function () {
            if ($(unilyNavigation.bannerSelector + ':visible').length) {
                var alertHeight = $(unilyNavigation.bannerSelector).outerHeight();
                $('body').css('padding-top', alertHeight);
            }
        }).resize();
    }

}

unilyNavigation.init();