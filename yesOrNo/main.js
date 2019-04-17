$(document).ready(function(){
    
    $(".yes_cover").hover(function(){
        $(".clock_yes img").css("display", "block");
        $(".girlcover").css("opacity", "0");
        $(".clock_blue img").css("animation", "none");
        }, function(){
            $(".clock_yes img").css("display", "none");
            $(".girlcover").css("opacity", "0.4");
            $(".clock_blue img").css("animation", "1.2s linear 0.5s infinite blink");
        
       
    });

    $(".no_cover").hover(function(){
        $(".clock_no img").css("display", "block");
        $(".mancover").css("opacity", "0");
        $(".clock_blue img").css("display", "none");
        }, function(){
            $(".clock_no img").css("display", "none");
            $(".mancover").css("opacity", "0.4");
            $(".clock_blue img").css("display", "block");
            $(".clock_blue img").css("animation", "1.2s linear 0.5s infinite blink");
        
       
    });

    $(".yes_cover").click(function(){        
        $(".main").fadeOut().delay(6000);
        $(".restPage").css("display","block")

    });

    $(".btn1_1").click(function(){ 
        $(".main").fadeIn();
        $(".restPage").css("display","none")

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
                $(".shoes_viewpo img").fadeOut(function() {
                    $(this).attr("src","img/clothes/shoes_L1.png").fadeIn("slow");
                  });
 
            }if(idName === 'shoes2'){
                $(".shoes div").removeClass("active") 
                $(this).addClass("active");
                $("p#TagWord").text("米奇厚底休閒涼鞋");
                $(".shoes_viewpo img").fadeOut(function() {
                    $(this).attr("src","img/clothes/shoes_L2.png").fadeIn("slow");
                  });
            }if(idName === 'shoes3'){
                $(".shoes div").removeClass("active") 
                $(this).addClass("active");
                $("p#TagWord").text("米奇飾扣厚底涼鞋");
                $(".shoes_viewpo img").fadeOut(function() {
                    $(this).attr("src","img/clothes/shoes_L3.png").fadeIn("slow");
                  });
            }if(idName === 'shoes4'){
                $(".shoes div").removeClass("active") 
                $(this).addClass("active");
                $("p#TagWord").text("米奇厚底海灘涼鞋");
                $(".shoes_viewpo img").fadeOut(function() {
                    $(this).attr("src","img/clothes/shoes_L4.png").fadeIn("slow");
                  });
            }if(idName === 'shoes5'){
                $(".shoes div").removeClass("active") 
                $(this).addClass("active");
                $("p#TagWord").text("米奇寬帶楔型涼鞋");
                $(".shoes_viewpo img").fadeOut(function() {
                    $(this).attr("src","img/clothes/shoes_L5.png").fadeIn("slow");
                  });
                  
            } 
        


    });

        $(".clothes_item").on("click", '#clothes_item1, #clothes_item2, #clothes_item3, #clothes_item4, #clothes_item5', function () {
        let idName = this.getAttribute('id');
        if( idName === 'clothes_item1'){
            $(".clothes_item div").removeClass("active")  
            $(this).addClass("active");
            $(".sc3").css("display","block");
            $("p#TagWord2").text("刷色無袖丹寧背心");
            $("p#TagWord3").text("一字領雪紡褲裝");
            $(".clothes_viewpo img").fadeOut(function() {
                    $(this).attr("src","img/clothes/clothes_L1.png").fadeIn("slow");
                  });
        }if(idName === 'clothes_item2'){
            $(".clothes_item div").removeClass("active") 
            $(this).addClass("active");
            $(".sc3").css("display","block");
            $("p#TagWord2").text("V 領網眼透視上衣");
            $("p#TagWord3").text(" 一字領連身牛仔短褲");
            $(".clothes_viewpo img").fadeOut(function() {
                    $(this).attr("src","img/clothes/clothes_L2.png").fadeIn("slow");
                  });
        }if(idName === 'clothes_item3'){
            $(".clothes_item div").removeClass("active") 
            $(this).addClass("active");
            $(".sc3").css("display","block");
            $("p#TagWord2").text("不規則無袖長上衣");
            $("p#TagWord3").text("鬆緊包臀牛仔褲");
            $(".clothes_viewpo img").fadeOut(function() {
                    $(this).attr("src","img/clothes/clothes_L3.png").fadeIn("slow");

                  });
        }if(idName === 'clothes_item4'){
            $(".clothes_item div").removeClass("active") 
            $(this).addClass("active");
            $(".sc3").css("display","block");
            $("p#TagWord2").text("刷色無袖丹寧背心");
            $("p#TagWord3").text("波希米亞雪紡洋裝");
            $(".clothes_viewpo img").fadeOut(function() {
                    $(this).attr("src","img/clothes/clothes_L4.png").fadeIn("slow");
                  });
        }if(idName === 'clothes_item5'){
            $(".clothes_item div").removeClass("active") 
            $(this).addClass("active");
            $("p#TagWord2").text("不規則無袖長上衣");
            $(".sc3").css("display","none");
            $(".clothes_viewpo img").fadeOut(function() {
                    $(this).attr("src","img/clothes/clothes_L5.png").fadeIn("slow");
                  });
            } 



    });

    $(".tag div").hover(function(){
        $(".tag img").css("display", "block");
        $("p#TagWord").css("display", "block");
        }, function(){
            $(".tag img").css("display", "none");
            $("p#TagWord").css("display", "none");
        
       
    });

        $(".tag2 div").hover(function(){
        $(".tag2 img").css("display", "block");
        $("p#TagWord2").css("display", "block");
        }, function(){
            $(".tag2 img").css("display", "none");
            $("p#TagWord2").css("display", "none");
        
       
    });

        $(".tag3 div").hover(function(){
        $(".tag3 img").css("display", "block");
        $("p#TagWord3").css("display", "block");
        }, function(){
            $(".tag3 img").css("display", "none");
            $("p#TagWord3").css("display", "none");
        
       
    });


 
     

        





});
     

        




 