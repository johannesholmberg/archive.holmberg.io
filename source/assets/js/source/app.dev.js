
// Disable hover events while scrolling the website
var body = document.body, timer;
window.addEventListener('scroll', function() {
  clearTimeout(timer);
  if(!body.classList.contains('disable-hover')) {
    body.classList.add('disable-hover')
  }
  timer = setTimeout(function(){
    body.classList.remove('disable-hover')
  }, 100);
}, false);


var identifiers = document.querySelectorAll('.s-main-content h2, .s-main-content h3,  .s-main-content h4');

identifiers.forEach(identifier => {
  var id = identifier.id;
  if (id) {
    var link = `<a href="#${id}" class="fragment-identifier">
                  <svg viewBox="0 0 96 96" class="icon" width="24" height="24">
                    <use xlink:href="#link"></use>
                  </svg>
                </a>`;
    identifier.innerHTML += link;
  }

});
