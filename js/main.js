   $(document).ready(function(){
    $('.nav-togler').click(function(){
      $('.nav-togler').toggleClass('togle-fixed-left-nav');
      $('.left-nav').toggleClass('togle-fixed-left-nav');
      $('.left-nav-body').toggleClass('togle-fixed-left-nav');
    });
  });

      $(document).ready(function(){
    $('.left-nav-body').click(function(){
      $('.nav-togler').removeClass('togle-fixed-left-nav');
      $('.left-nav').removeClass('togle-fixed-left-nav');
      $('.left-nav-body').removeClass('togle-fixed-left-nav');
    });
  });

   $(document).ready(function(){
    $('.top-menuTgl').click(function(){
      $('.left-navMain').slideToggle('1000');
    });
  });