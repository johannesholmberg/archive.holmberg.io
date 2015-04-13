(function ($) {
  
  "use strict";
  
  $(function() {

    // Increasing performance by disabling hover state on scrolling
    var body = document.body,
        timer;

    window.addEventListener('scroll', function() {
      clearTimeout(timer);
      if(!body.classList.contains('disable-hover')) {
        body.classList.add('disable-hover')
      }
      
      timer = setTimeout(function(){
        body.classList.remove('disable-hover')
      },300);
    }, false);

  });
}(jQuery));