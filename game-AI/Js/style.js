define(['jquery','jquerycolor'],function($){
   $("#navbar-game").find("a").each(function(){
       $(this).hover(function(){
           $(this).animate({"color":"#FF873F"},150);
       },function(){
           $(this).animate({"color":"#fff"},150);
       });
   });
});