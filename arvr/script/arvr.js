$(document).ready(function () {
  $('.bg_wrap').fadeIn(1500);
  $('.scroll,.box')
    .animate(
      {
        left: 0,
      },
      1000,
      'linear'
    )
    .css({
      opacity: 1,
    });
  $('.slide__project').click(function () {
    let a = $(this).closest('article');
    let i = a.index();
    // alert(i)
    $('.video_box').eq(i).slideDown(500);
    $('.scroll').css({
      opacity: 0.2,
    });
  });
  $('.close_but').click(function () {
    $('.video_box').fadeOut(500);
    $('.scroll').css({
      opacity: 1,
    });
  });
  let click_num = 0;
  $('.toggle').click(function () {
    $(this).toggleClass('active');
    if (click_num == 0) {
      $('.menu_wrap').fadeIn();
      click_num++;
    } else {
      $('.menu_wrap').fadeOut();
      click_num--;
    }
  });
});
