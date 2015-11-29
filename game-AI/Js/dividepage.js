/**
 * Created by cui on 2015/11/29.
 */
define(['jquery'],function(){
    $("#Bprevious").on("click",function(){
        var lastid = 1;
        $.ajax({
            type : "post",
            //url : "http://bomb.play.cn/playai/game.php/Home/Index/getBattles",
            url : "/playai/game.php/Home/Index/getBattles",
            dataType : 'json',
            data : {
                "lastid" : lastid
            },
            success : function(callback){
                console.log(callback.status);
            },
            error : function(){
                console.log("失败");
            }
        });
    });
    $("#Bnext").on("click",function(){
        $.ajax({
            type : "post",
            url : "http://bomb.play.cn/playai/game.php/Home/Index/getBattles",
            success : function(callback){
                console.log(callback.status);
            }
        });
    });
    return {
    }
});