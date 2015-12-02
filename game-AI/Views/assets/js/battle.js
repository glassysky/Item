/**
 * Created by cui on 2015/11/20.
 */
define(['jquery'],function($){

    return {
        battleHistory : function(){
            $(document).ready(function(){
                var str = "",
                    tpl = "",
                    lenght = 0;

                $.ajax({
                    type : 'post',
                    //待改
                    //url : 'http://localhost/playai/game.php/User/Upload/getBattles',
                    //url : 'http://localhost/playai/test/battle.json',
                    success : function(callback){

                        var msg = callback["msg"];

                        for(var i = 0;i<msg.length;i++){
                            switch (msg[i].result){
                                case "1":
                                    msg[i].result = msg[i].uid + "胜";
                                    break;
                                case "0.5":
                                    msg[i].result = msg[i].oid + "胜";
                                    break;
                                case "0":
                                    msg[i].result = "平局";
                                    break;
                                default:
                                    break;
                            }

                            tpl = "<tr>"+
                                "<td>" + (i+1) + "</td>" +
                                "<td>" + msg[i].uid + "</td>" +
                                "<td>" + msg[i].oid + "</td>" +
                                "<td>" + msg[i].result + "</td>" +
                                "<td>" + msg[i].begintime + "</td>" +
                                "<td><a href='" + msg[i].process + "' class='btn btn-primary battle-replay' id='" + msg[i].id + "detail'>对战细节</a></td>" +
                                "</tr>";
                            str = str + tpl;
                        }

                        $("#battleTable").find("tbody").html(str);
                    },
                    error : function(){
                        console.log('error');
                    }
                });
            });
        },
        fightWith : function(){
            $("#fight").on("click",function(){
                var uid = $("#enemy-choose").val();

                console.log(uid);

                $.ajax({
                    type : 'post',
                    url : '',
                    dataType : 'json',
                    data : {
                        "uid" : uid
                    },
                    success : function(callback){
                        if(callback.status == "success"){
                            console.log("成功");
                        } else {

                        }
                    },
                    error : function(){
                        console.log("请求失败");
                    }
                });
            });
        }
    }

});