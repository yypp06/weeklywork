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
    

     

    $(".shoes").on("click", '#shoes1, #shoes2, #shoes3, #shoes4, #shoes5', function () {
        let idName = this.getAttribute('id');
        if( idName === 'shoes1'){
            $(".shoes div").removeClass("active")  
            $(this).addClass("active");
            $(".shoes_viewpo img").attr("src","img/clothes/shoes_L1.png");
        }if(idName === 'shoes2'){
            $(".shoes div").removeClass("active") 
            $(this).addClass("active");
            $(".shoes_viewpo img").attr("src","img/clothes/shoes_L2.png");
        }if(idName === 'shoes3'){
            $(".shoes div").removeClass("active") 
            $(this).addClass("active");
            $(".shoes_viewpo img").attr("src","img/clothes/shoes_L3.png");
        }if(idName === 'shoes4'){
            $(".shoes div").removeClass("active") 
            $(this).addClass("active");
            $(".shoes_viewpo img").attr("src","img/clothes/shoes_L4.png");
        }if(idName === 'shoes5'){
            $(".shoes div").removeClass("active") 
            $(this).addClass("active");
            $(".shoes_viewpo img").attr("src","img/clothes/shoes_L5.png");
        } 



    });

        $(".clothes_item").on("click", '#clothes_item1, #clothes_item2, #clothes_item3, #clothes_item4, #clothes_item5', function () {
        let idName = this.getAttribute('id');
        if( idName === 'clothes_item1'){
            $(".clothes_item div").removeClass("active")  
            $(this).addClass("active");
            $(".clothes_viewpo img").attr("src","img/clothes/clothes_L1.png");
        }if(idName === 'clothes_item2'){
            $(".clothes_item div").removeClass("active") 
            $(this).addClass("active");
            $(".clothes_viewpo img").attr("src","img/clothes/clothes_L2.png");
        }if(idName === 'clothes_item3'){
            $(".clothes_item div").removeClass("active") 
            $(this).addClass("active");
            $(".clothes_viewpo img").attr("src","img/clothes/clothes_L3.png");
        }if(idName === 'clothes_item4'){
            $(".clothes_item div").removeClass("active") 
            $(this).addClass("active");
            $(".clothes_viewpo img").attr("src","img/clothes/clothes_L4.png");
        }if(idName === 'clothes_item5'){
            $(".clothes_item div").removeClass("active") 
            $(this).addClass("active");
            $(".clothes_viewpo img").attr("src","img/clothes/clothes_L5.png");
        } 



    });

 
     

        





});
     

        




 