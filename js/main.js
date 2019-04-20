'use strict';

$('.communication-platform__content').on('click', '.communication-platform__block:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });