define(['jquery','jquerycolor'],function($){
   $("#navbar-game").find("a").each(function(){
       $(this).hover(function(){
           $(this).animate({"color":"#fff"},150)
               .css({"text-shadow":"1px 1px 1px #eee"});
       },function(){
           $(this).animate({"color":"#eee"},150)
               .css({"text-shadow":"none"});
       });
   });
    $(".ver-item").each(function(){
        $(this).css("cursor","pointer");
        $(this).hover(function(){
            $(this).css("background-color","rgba(255,158,50,1)");
        },function(){
            $(this).css("background-color","rgba(255,158,50,0.7)");
        });
    });
    $("#Cocos2dGameContainer").ready(function(){
        $(".cover-layer").css("display","none");
    });
});