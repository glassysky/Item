/**
 * Created by cui on 2015/11/20.
 */
define(['jquery'],function($){

    return {
        enemyChoose : function(){
            $(document).ready(function(){
                var str = "",
                    tpl = "",
                    length = 0;

                $.ajax({
                    type : 'post',
                    //url : 'http://localhost/playai/test/enemy.json',
                    //url : 'http://bomb.play.cn/playai/test/battle.json',
                    success : function(callback){
                        for(var i in callback){
                            if(callback.hasOwnProperty(i)){
                                length++;
                            }
                        }

                        for(var i = 1;i<length+1;i++){
                            tpl = "<option value='" + i + "'>" + callback[i] + "</option>";

                            str = str + tpl;
                        }

                        $("#enemy-choose").append(str);
                    },
                    error : function(){
                        console.log("失败");
                    }
                });
            });
        },
        battleHistory : function(){
            $(document).ready(function(){
                var str = "",
                    tpl = "",
                    lenght = 0;

                $.ajax({
                    type : 'post',
                    url : 'http://bomb.play.cn/User/Upload/getBattles',
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
        }
    }

});