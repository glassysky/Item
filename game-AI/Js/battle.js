/**
 * Created by cui on 2015/11/20.
 */
define(['jquery','ajax'],function($,ajax){

    ajax.battleHistory();
    ajax.battleChoose();

    var replayBtn = $(".battle-replay"),
        fight = $("#fight");

    replayBtn.on("click",function(){
        $.ajax({
            url : "data.json",
            type : "GET",
            success : function(back){
                window.location.href="replay/index.html";
            },
            error : function(back){
                console.log("error " + back);
            }
        })
    });

    fight.on("click",function(){
        var enemy = $("#enemy-choose").val();
        console.log("fight");

        $.ajax({
            type : 'post',
            url : "",
            dataType : 'json',
            data : {
                "enemy" : enemy
            }
        });
    });

});