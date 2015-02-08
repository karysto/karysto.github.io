// Scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Email protection
$(function() {
  $('#em')[0].innerHTML =
  $('#em')[0].innerHTML.replace(/#_AT_#/g, '@').replace(/#_DOT_#/g, '.');
});

// Active nav tab
$('.navitem').click(function(e) {
  e.preventDefault();
  $('#sidebar-wrapper').toggleClass('active');
});

$('#menu-toggle').click(function(e) {
  e.preventDefault();
  $('#sidebar-wrapper').toggleClass('active');
});
