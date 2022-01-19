var unilyCookieBanner = {
    setup: function setup() {
        if ($('#onetrust-banner-sdk:visible').length) {

            // Pin to top of page
            $('#onetrust-banner-sdk').css('top', '0px');
            $('#onetrust-banner-sdk').css('bottom', 'auto');

            // Send to back on consent update (prevents nav overlay)
            if (typeof Optanon !== 'undefined') {
                Optanon.OnConsentChanged(function () {
                    $('#onetrust-banner-sdk').css('z-index', '-999');
                });
            }

            // Set resize callback
            $(window).resize(function () {
                unilyCookieBanner.setHeight();
            });
            unilyCookieBanner.setHeight();
        }
    },

    setHeight: function setHeight() {
        var headHeight = $('.c-head').outerHeight();
        $('#onetrust-banner-sdk').css('min-height', headHeight);
    }
};
