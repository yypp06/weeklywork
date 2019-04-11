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
        var top1 = $('div .suitcase').offset().top;
        var top2 = $('.clothes').offset().top - 470;
         
        if(thisTop > top1 && thisTop < top2) {
            $('.btn2_2').hide();
            $('.btn3_3').show();
            $('.restPage').css('background-position', 'center');
            $('.restPage').css({'background-attachment':'fixed'});

        }
            else if(thisTop > top2) {
                $('.btn3_3').hide();
                $('.btn2_2').show();
                $('.restPage').css('background-position', '50% 206%');
                $('.restPage').css({'background-attachment':'scroll'});
                
            }
     });

    $(".btn2_2").click(function(){
        $("html,body").animate({scrollTop:$('.restPage').offset().top},800);
        $(".btn2_2").hide();
        $(".btn3_3").show();
    });
    $(".btn3_3").click(function(){
        $("html,body").animate({scrollTop:$('.clothes').offset().top},800);
        $(".btn2_2").show();
        $(".btn3_3").hide();
    });
    


    $(".shoes1").click(function(){                      
        $(".shoes_viewpo img").attr("src","img/clothes/shoes_L1.png");  
        $(".shoes1").toggleClass("opacity","1");     
    });
    $(".shoes2").click(function(){                      
        $(".shoes_viewpo img").attr("src","img/clothes/shoes_L2.png");       
    });
    $(".shoes3").click(function(){                      
        $(".shoes_viewpo img").attr("src","img/clothes/shoes_L3.png");       
    });
    $(".shoes4").click(function(){                      
        $(".shoes_viewpo img").attr("src","img/clothes/shoes_L4.png");       
    });
    $(".shoes5").click(function(){                      
        $(".shoes_viewpo img").attr("src","img/clothes/shoes_L5.png");       
    });
     

        





});
     

        




 