/**
 * Created by cui on 2015/11/26.
 */
define(['jquery'],function($){
    $("#Cocos2dGameContainer").ready(function(){
        move();
        function move(){
            $(".text-wrap").animate({top:"-840px"},22000,"linear",function(){
                console.log(1);
                $(this).animate({top:"0"},move());
            });
        }
    });
});