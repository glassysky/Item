/**
 * Created by cui on 2015/11/20.
 */
define(['jquery'],function($){
    var replayBtn = $(".battle-replay");

    replayBtn.on("click",function(){
        $.ajax({
            url : "data.json",
            type : "GET",
            success : function(back){
                window.location.href="replay.html";
            },
            error : function(back){
                console.log("error " + back);
            }
        })
    })
});