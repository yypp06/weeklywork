$(document).ready(function(){
    $(".mb_button, .start").click(function(){
        $(".snowman").hide();
        $(".sloganback").hide();
        $(".slogan1").hide();
        $(".slogan2").hide();
        $(".text").hide();
        $(".start").hide();
        $(".mb_button").hide();
        $(".globe img").css("animation","null");
        $(".circle").show();
        $(".question").show();
 
    });
    
    $(".answer p").click(function(){
        $(".question2").show();
        $(".question").hide();
    
    });
    $(".answer2 p").click(function(){
        $(".question3").show();
        $(".question2").hide();
    
    });
    $(".answer3 p").click(function(){
        $(".question4").show();
        $(".question3").hide();
        
    });
    $(".answer4 p:first-child").click(function(){
        $(".item").show();
        $(".question4").hide();
        $(".circle").hide();
        $("html,body").animate({scrollTop:$('.result').offset().top},800);

    });
    $(".answer4 p:nth-child(2)").click(function(){
        $(".item").show();
        $(".question4").hide();
        $(".circle").hide();
        $("html,body").animate({scrollTop:$('.result2').offset().top},800);

    });
    $(".answer4 p:nth-child(3)").click(function(){
        $(".item").show();
        $(".question4").hide();
        $(".circle").hide();
        $("html,body").animate({scrollTop:$('.result3').offset().top},800);

    });
    $(".answer4 p:nth-child(4)").click(function(){
        $(".item").show();
        $(".question4").hide();
        $(".circle").hide();
        $("html,body").animate({scrollTop:$('.result4').offset().top},800);

    });
    $(".home").click(function(){
        $(".item").hide();
        $(".snowman").show();
        $(".sloganback").show();
        $(".slogan1").show();
        $(".slogan2").show();
        $(".text").show();
        $(".start").show();
        $(".mb_button").show();
        $(".globe img").css("animation","180s linear 0s infinite rotate");
        $(".globe img").css("-webkit-animation","180s linear 0s infinite rotate");

         
            

        });

    






});

 

