$(document).ready(function(){
    
    $(".yes_cover").hover(function(){
        $(".clock_yes img").css("display", "block");
        $(".girlcover").css("opacity", "0");
        $(".clock_blue img").css("animation", "none");
        }, function(){
            $(".clock_yes img").css("display", "none");
            $(".girlcover").css("opacity", "0.4");
            $(".clock_blue img").css("display", "1.2s linear 0.5s infinite blink");
        
       
    });

    $(".no_cover").hover(function(){
        $(".clock_no img").css("display", "block");
        $(".mancover").css("opacity", "0");
        $(".clock_blue img").css("display", "none");
        }, function(){
            $(".clock_no img").css("display", "none");
            $(".mancover").css("opacity", "0.4");
            $(".clock_blue img").css("display", "block");
        
       
    });

    function scrollToAnchor(el){
        var top = $(el).offset().top;
        $('html,body').animate({scrollTop: top},'slow');
    }
    $(window).scroll(function () {
        var thisTop = $(this).scrollTop();
        var top1 = $('.suitcase').offset().top;
        var top2 = $('.clothes').offset().top - 110;
         
        if(thisTop > top1 && thisTop < top2) {
            $('.btn2_2').css({opacity:'0'});
            $('.btn3_3').css({opacity:'1'});
        }
            else if(thisTop > top2) {
                $('.btn3_3').css({opacity:'0'});
                $('.btn2_2').css({opacity:'1'});
                
            }
     });

    $(".btn2_2").click(function(){
        $("html,body").animate({scrollTop:$('.restPage').offset().top},800);
        $(".btn2_2").css("opacity", "0");
        $(".btn3_3").css("opacity", "1");
    });
    $(".btn3_3").click(function(){
        $("html,body").animate({scrollTop:$('.clothes').offset().top},800);
        $(".btn2_2").css("opacity", "1");
        $(".btn3_3").css("opacity", "0");
    });
    
     

        





});
     

        




 