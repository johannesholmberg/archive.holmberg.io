element = document.getElementById("body");
trigger = document.getElementById("js-menu-trigger");

trigger.addEventListener('click', function(e) {
  e.preventDefault();
  element.classList.toggle('menu-active');
});