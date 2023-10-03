function adjustHeightOfPage(pageNo) {

    var offset = 80;
    var pageContentHeight = 0;

    var pageType = $('div[data-page-no="' + pageNo + '"]').data("page-type");

    if (pageType != undefined && pageType == "gallery") {
        pageContentHeight = $(".cd-hero-slider li:nth-of-type(" + pageNo + ") .tm-img-gallery-container").height();
    } else {
        pageContentHeight = $(".cd-hero-slider li:nth-of-type(" + pageNo + ") .js-tm-page-content").height();
    }

    if ($(window).width() >= 992) {
        offset = 120;
    } else if ($(window).width() < 480) {
        offset = 40;
    }

    // Get the page height
    var totalPageHeight = 15 + $('.cd-slider-nav').height() +
        pageContentHeight + offset +
        $('.tm-footer').height();

    // Adjust layout based on page height and window height
    if (totalPageHeight > $(window).height()) {
        $('.cd-hero-slider').addClass('small-screen');
        $('.cd-hero-slider li:nth-of-type(' + pageNo + ')').css("min-height", totalPageHeight + "px");
    } else {
        $('.cd-hero-slider').removeClass('small-screen');
        $('.cd-hero-slider li:nth-of-type(' + pageNo + ')').css("min-height", "100%");
    }
}

/*
	Everything is loaded including images.
*/
$(window).load(function() {

    adjustHeightOfPage(1); // Adjust page height

    /* Gallery One pop up
    -----------------------------------------*/
    $('.gallery-one').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        },
        showCloseBtn: false
    });

    $('.gallery-two').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        },
        showCloseBtn: false
    });

    /*
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    	disableOn: 700,
    	type: 'iframe',
    	removalDelay: 160,
    	preloader: false,

    	fixedContentPos: false
    });*/

    /* Collapse menu after click 
    -----------------------------------------*/
    $('#tmNavbar a').click(function() {
        $('#tmNavbar').collapse('hide');

        adjustHeightOfPage($(this).data("no")); // Adjust page height       
    });

    /* Browser resized 
    -----------------------------------------*/
    $(window).resize(function() {
        var currentPageNo = $(".cd-hero-slider li.selected .js-tm-page-content").data("page-no");

        // wait 3 seconds
        setTimeout(function() {
            adjustHeightOfPage(currentPageNo);
        }, 1000);

    });

    // Remove preloader (https://ihatetomatoes.net/create-custom-preloading-screen/)
    $('body').addClass('loaded');

});


$(document).ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',

        removalDelay: 160,
        preloader: false,

        showCloseBtn: false,

        fixedContentPos: false
    });

    /*
    this is for popup text
    */
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
        showCloseBtn: false,
		image: {
			verticalFit: true
		}
		
	});

    $('.gallery').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
              enabled:true
            },
            showCloseBtn: false
        });
    });
});