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
                    url : '/Home/Index/userRank',
                    success : function(callback){
                        if(callback.status == "success"){
                            var rank = callback.msg.rank,
                                length = callback.msg.rank.length,
                                page = callback.msg.page;

                            console.log(callback);

                            for(var i = 0;i<length;i++){
                                tpl = "<tr data-uid='" + rank[i].id + "'>" +
                                    "<td>" + (i+1) + "</td>" +
                                    "<td>" + rank[i].nickname + "</td>" +
                                    "<td>" + rank[i].score + "</td>" +
                                    "<td><a class='btn btn-primary pk-btn' id='" + rank[i].id + "PK'>PK一下</a></td>" +
                                    "</tr>";
                                str = str + tpl;
                            }

                            $("#rankTable").find("tbody").append(str);
                        } else {
                            console.log("失败");
                        }
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
            var pageList = $(".pagination").find("a"),
                page = 0,
                lastid = 0;

            pageList.each(function(){
                $(this).on("click",function(){
                    if($(this).attr("id")){

                    } else {
                        page = $(this).html();
                    }
                });
            });

        }


    }
});