/* preloader */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(320).slideUp('slow');
});

/* team */

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* progress bar */

$(function () {

    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});
 /* Responsive tabs */
 $(function (){
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
 });

 /* Portfolio */
 $(window).on('load',function (){
    $("#isotope-container").isotope({
        
      });

      // filters
      $("#isotope-filters").on('click','button',function(){
        var filterValue = $(this).attr('data-filter');
        $("#isotope-container").isotope({
        filter : filterValue
        });
        $("#isotope-filters").find(".active").removeClass('active');
        $(this).addClass('active');
    });
 });

 /* Magnifier */
 $(function (){
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  },
        gallery: {
            enabled: true
        }
        // other options
      });
 });

 /* Testimonial slider */
 
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: false,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});