window.onload = function(){

  // Is this browser sufficiently modern to continue?
  if ( ! ( "querySelector" in document 
    && "addEventListener" in window 
    && "getComputedStyle" in window ) ) {
  return; 
  }
  
  window.document.documentElement.className += " enhanced";

  var nav = document.querySelector( ".nav-primary ul" ),
  navToggle = document.querySelector( ".js-mobile-menu-trigger" );

  if ( navToggle ) {
    navToggle.addEventListener( "click",
      function( e ) {
      if ( nav.className == "open" ) {
        nav.className = "";
      } else {
      nav.className = "open";
      }
      e.preventDefault();
    }, false );
  }


}