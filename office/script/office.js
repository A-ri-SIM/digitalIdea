$(document).ready(function () {
  $('.box').animate(
    {
      left: 0,
    },
    1000,
    'linear'
  );
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
