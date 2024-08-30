$(document).ready(function () {
  let ww = $(document).width();

  let click_num = 0;
  $('.toggle').click(function () {
    $(this).toggleClass('.active');
    if (click_num == 0) {
      $('.menu_wrap').fadeIn();
      click_num++;
    } else {
      $('.menu_wrap').fadeOut();
      click_num--;
    }
  });

  canvas_view();

  $(window).resize(function () {
    canvas_view();
  });

  function canvas_view() {
    ww = $(window).width();

    if (ww > 979) {
      $('canvas').css({
        display: 'block',
      });
      $('canvas').animate(
        {
          top: 0,
        },
        1000
      );
    } else {
      $('canvas').css({
        display: 'none',
      });
    }
  }
}); //end
