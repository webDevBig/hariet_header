'use strict';

var unilyPillarPageNav = {

    pillarPageNavSelector: '[data-pillar-page-nav]',
    //pillarPageSectionSelector: '.c-category-nav__content',
    scrollPositionOffset: 115, // TODO - Make this dynamic?
    //navigateInProgress: false,
    init: function init() { 

        $(unilyPillarPageNav.pillarPageNavSelector + ' a').on('click', function () {

            //unilyPillarPageNav.navigateInProgress = true;

            //$(unilyPillarPageNav.pillarPageNavSelector + ' a').removeClass('active');
            //$(this).addClass('active');

            const $target = $($(this).attr('href'));
            $('html, body').animate({
                scrollTop: $target.offset().top - unilyPillarPageNav.scrollPositionOffset
            }, {
                duration: 1000, // Allow for lazy loading to complete
                step: (now, fx) => {

                    //  location will change as images etc. are lazy loaded
                    //  Where is the target now located on the page?
                    let realPos = $target.offset().top - unilyPillarPageNav.scrollPositionOffset;
                    if (fx.end !== realPos) {
                        fx.end = realPos;
                    }

                }
                //,
                //complete: function () {
                //    unilyPillarPageNav.navigateInProgress = false;
                //}

            });
        });

        // TODO - Delete? Removed at request of Chris Saville (29/06/2021) as dynamic highlighting no longer wn
        //$(window).on('scroll', function () {
        //    if (!unilyPillarPageNav.navigateInProgress) { // Prevent whilst nav in progress to avoid activating each item on the way through the nav action
        //        $(unilyPillarPageNav.pillarPageSectionSelector).each(function () {
        //            if ($(window).scrollTop() >= $(this).offset().top - (2 * unilyPillarPageNav.scrollPositionOffset)) { // 2*unilyPillarPageNav.scrollPositionOffset for better user experience
        //                var id = $(this).attr('id');
        //                $(unilyPillarPageNav.pillarPageNavSelector + ' a').removeClass('active');
        //                $(unilyPillarPageNav.pillarPageNavSelector + ' a[href=\\#' + id + ']').addClass('active');
        //            }
        //        });
        //    }
        //});
    }
}

unilyPillarPageNav.init();
