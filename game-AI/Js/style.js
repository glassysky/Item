define(['jquery','jquerycolor'],function($){
   $("#navbar-game").find("a").each(function(){
       $(this).hover(function(){
           $(this).animate({"color":"red"},150);
       },function(){
           $(this).animate({"color":"#fff"},150);
       });
   });
});