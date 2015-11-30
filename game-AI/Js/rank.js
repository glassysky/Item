/**
 * Created by cui on 2015/11/30.
 */
define(['jquery'],function($){

    return {
        rankTable : function(){
            $(document).ready(function(){
                var str = "",
                    tpl = "",
                    length = 0;
                $.ajax({
                    type : 'post',
                    url : 'http://bomb.play.cn/Home/Index/userRank',
                    success : function(callback){
                        var msg = callback["msg"];

                        for(var i = 0;i<msg.length;i++){
                            tpl = "<tr data-uid='" + msg[i].id + "'>" +
                                "<td>" + (i+1) + "</td>" +
                                "<td>" + msg[i].nickname + "</td>" +
                                "<td>" + msg[i].score + "</td>" +
                                "<td><a class='btn btn-primary' id='" + msg[i].id + "PK' class='pk-btn'>PK一下</a></td>" +
                                "</tr>";
                            str = str + tpl;
                        }

                        $("#rankTable").find("tbody").append(str);
                    },
                    error : function(){
                        console.log("error");
                    }
                });
            });
        },

        rankPK : function(){
            $(".pk-btn").each(function(){
                $(this).on("click",function(){
                    var uid = parseInt($(this).attr("id"));

                    $.ajax({
                        type : 'post',
                        url : '',
                        dataType : 'json',
                        data : {
                            "uid" : uid
                        },
                        success : function(callback){
                            if(callback.status == "success"){
                                window.location.href = "rank.html";
                            } else {
                                alert("PK失败");
                            }
                        },
                        error : function(){
                            console.log("请求失败");
                        }
                    });
                });
            });
        },

        rankDividePage : function(){
            var pageList = $(".pagination"),
                page = 0,
                lastid = 0;

            pageList.each(function(){
                if($(this).attr("id")){
                    if($(this).attr("id") == "Rprevious"){

                    }
                }
            })
        }


    }
});