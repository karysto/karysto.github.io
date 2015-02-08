$("#loader").show();
  $("#wholething").hide();
  $(window).load(function() {
      $("#loader").hide();
      $("#wholething").show();
  });
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

  $(function() {
    document.getElementById('em').innerHTML =
    document.getElementById('em').innerHTML.replace(/#_AT_#/g, '@').replace(/#_DOT_#/g, '.');
  });
