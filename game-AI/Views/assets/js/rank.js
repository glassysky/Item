/**
 * Created by cui on 2015/11/30.
 */
define(['jquery','common'],function($,common){

    return {
        rankTable : function(){
            var self = this;

            $(document).ready(function(){
                var listStr = "",
                    dividepageStr = "",
                    listTpl = "",
                    dividepageTpl = "",
                    length = 0;

                $.ajax({
                    type : 'post',
                    url : '/Home/Index/userRank',
                    success : function(callback){
                        if(callback.status == "success"){
                            var rank = callback.msg.rank,
                                //每页多少人
                                length = callback.msg.rank.length,
                                //一共多少页
                                page = callback.msg.count;

                            console.log(callback);

                            for(var i = 0;i<length;i++){
                                listTpl = "<tr data-uid='" + rank[i].id + "'>" +
                                    "<td>" + (i+1) + "</td>" +
                                    "<td>" + rank[i].nickname + "</td>" +
                                    "<td>" + rank[i].score + "</td>" +
                                    "<td><a class='btn btn-primary pk-btn' id='" + rank[i].id + "PK'>PK一下</a></td>" +
                                    "</tr>";
                                listStr = listStr + listTpl;
                            }

                            for(var j = 0;j<page;j++){

                                if(j == 0){
                                    dividepageTpl = "<li class='active'><a href='javascript:void(0)'>" + (j+1) + "</a></li>";
                                } else {
                                    dividepageTpl = "<li><a href='javascript:void(0)'>" + (j+1) + "</a></li>";
                                }

                                dividepageStr = dividepageStr + dividepageTpl;
                            }

                            dividepageStr = "<li><a aria-label='Previous' id='Rprevious' class='director'><span aria-hidden='true'>&laquo;</span></a></li>" +
                                    dividepageStr +
                                    "<li><a aria-label='Next' id='Rnext' class='director'><span aria-hidden='true'>&raquo;</span></a></li>";

                            $("#rankTable").find("tbody").append(listStr);
                            $(".pagination").html(dividepageStr).
                                attr("data-count",page);

                            self.rankPK();
                            common.RdividePage();

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
                    console.log(1);

                    //用localStorage储存返回的json
                    localStorage.PKobj = uid;

                    window.location.href = "../Views/replay.html";

                    //$.ajax({
                    //    type : 'post',
                    //    url : '',
                    //    dataType : 'json',
                    //    data : {
                    //        "uid" : uid
                    //    },
                    //    success : function(callback){
                    //        if(callback.status == "success"){
                    //            window.location.href = "rank.html";
                    //        } else {
                    //            alert("PK失败");
                    //        }
                    //    },
                    //    error : function(){
                    //        console.log("请求失败");
                    //    }
                    //});

                });
            });
        }


    }
});