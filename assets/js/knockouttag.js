var unilyKnockoutTag = {

    init: function init() {
        document.fonts.ready.then(function () {
            $('.svg-transparent-tag-placeholder').each(function () {
                var width = $('.svg-transparent-tag-placeholder').outerWidth();
                var height = $('.svg-transparent-tag-placeholder').outerHeight();
                var svg = $(this).closest('.d-card-tag').find('svg');
                svg.width(width);
                svg.height(height);
            })
            /** Safari aligmnet **/
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                $('.display-after-font').find('text').attr('dx', '0.5');
            }
            $('.display-after-font').show();
        });
    }
}

unilyKnockoutTag.init();