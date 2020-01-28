function class_carousel() {

  // If there is no target element, return
  var is_carousel = jQuery('.class-carousel').length;
  if(!is_carousel) return;

  // Loading slick.js default css from cdnjs
  var link = document.createElement( "link" );
  link.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css";
  link.type = "text/css";
  link.rel = "stylesheet";
  link.media = "screen,print";

  // Add it to DOM <head> section
  document.getElementsByTagName( "head" )[0].appendChild( link );

  // Loading slick.min.js using jQuery's getScript method, no need to load the script via backend
  jQuery.getScript("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js", function(data, textStatus, jqxhr) {
  
    // Initializing the carousel: the exact selector depends on your HTML markup. The one below applies to SiteOrigin Page Builder.
    jQuery('.class-carousel > div').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
  });

}
