$(document).ready(function(){
    $(".about_img_box,.vfx").css({
    transitionDuration: "3s"
    })
    $(".bg_wrap").fadeIn(1000)
    $(".wrap").animate({
        left:0
    },1000,'linear',function(){
        
        AOS.init();
        $(".left_but,.scroll_img").fadeIn(500)
        

    })
    AOS.init();

    let click_num=0;
    $('.toggle').click(function(){
        $(this).toggleClass('active');
        if(click_num == 0){
            $(".menu_wrap").fadeIn();
            click_num++;
        }else{
            $(".menu_wrap").fadeOut();
            click_num--;
        }
        
    });
    
})