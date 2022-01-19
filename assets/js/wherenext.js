'use strict';

var unilyWhereNext = {

    init: function init(element) {

        var carouselWrap = $(element);

        var nodeId = carouselWrap.attr('data-node-id');
        var page = 1;
        var simplebar = new SimpleBar(carouselWrap[0]);
        var scrollElement = simplebar.getScrollElement();
        var scrollWidth = $(scrollElement)[0].scrollWidth;
        var scrollEndThreshold = 200;
        var itemsParent = carouselWrap.find("li.c-articles__item").parent();

        var isLoading = false;

        scrollElement.addEventListener('scroll', function () {

            if ($(scrollElement).scrollLeft() + $(scrollElement).innerWidth() >= scrollWidth - scrollEndThreshold && !isLoading) {

                isLoading = true;

                $.ajax({
                    method: 'GET',
                    url: '/umbraco/api/insights/GetWhereNextContent?nodeId=' + nodeId + '&page=' + page,
                    success: function success(data) {
                        itemsParent.append($(data));
                        unilyLazyLoading.refresh();
                        scrollWidth = $(scrollElement)[0].scrollWidth;
                        page++;
                        isLoading = false;
                    }
                });
            }
        });
    }
};
