/**
 * Created by cui on 2015/11/30.
 */
define(['jquery'],function(){
    return {
        battleChoose : function(){
            $(document).ready(function(){
                var str = "",
                    tpl = "",
                    length = 0;

                $.ajax({
                    type : 'post',
                    url : '/playai/test/enemy.json',
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
                    url : '/playai/test/battle.json',
                    success : function(callback){
                        for(var i in callback){
                            if(callback.hasOwnProperty(i)){
                                length++;
                            }
                        }

                        for(var i = 1;i<length+1;i++){
                            tpl = "<tr>"+
                                "<td>" + i + "</td>" +
                                "<td>" + callback[i].attacker + "</td>" +
                                "<td>" + callback[i].defender + "</td>" +
                                "<td>" + callback[i].result +"胜" + "</td>" +
                                "<td>" + callback[i].date + "</td>" +
                                "<td><a class='btn btn-primary battle-replay' id='" + i + "detail'>对战细节</a></td>" +
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
        rank : function(){
            $(document).ready(function(){
                var str = "",
                    tpl = "",
                    length = 0;
                $.ajax({
                    type : 'post',
                    url : '/playai/test/rank.json',
                    success : function(callback){

                        for(var i in callback){
                            if(callback.hasOwnProperty(i)){
                                length ++;
                            }
                        }

                        for(var i = 0;i<length;i++){
                            tpl = "<tr>" +
                                "<td>" + (i+1) + "</td>" +
                                "<td>" + callback[i+1].nickname + "</td>" +
                                "<td>" + callback[i+1].score + "</td>" +
                                "<td><a href='' class='btn btn-primary' id='" + (i+1) + "PK'>PK一下</a></td>" +
                                "</tr>";
                            str = str + tpl;
                        }

                        $("#rankTable").find("tbody").append(str);
                    },
                    error : function(){
                        console.log("error");
                    }
                })
            });
        }
    }
});