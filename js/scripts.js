$('.toggle-btn').click(function() {
    $(this).toggleClass('opened');
    if($(this).hasClass('opened')) {
     $(this).css('margin-top', '10px');
     $('.navbar-brand').css('margin-top', '10px');
    } else {
     $(this).css('margin-top', '0px');
     $('.navbar-brand').css('margin-top', '0px');
    }
 });

 $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('static', $(this).scrollTop() > $nav.height());
    });
});