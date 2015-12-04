/**
 * Created by cui on 2015/11/20.
 */
define(['jquery','common'],function($,common){
    var page = 1,
        currentPage = 1;

    return {
        battleHistory : function(){
            var str = "",
                tpl = "",
                pageStr = "",
                pageTpl = "",
                length = 0,
                totalPage = 0,
                list = null;

            $.ajax({
                type : 'post',
                url : '/Home/Index/getBattles',
                success : function(callback){

                    var msg = callback["msg"],
                        totalPage = callback["msg"].count;
                    console.log(msg);

                    list = msg.list;
                    length = msg.list.length;
                    totalPage = msg.count;

                    for(var i = 0;i<length;i++){
                        switch (list[i].result){
                            case "1":
                                list[i].result = list[i].uid + "胜";
                                break;
                            case "0.5":
                                list[i].result = list[i].oid + "胜";
                                break;
                            case "0":
                                list[i].result = "平局";
                                break;
                            default:
                                break;
                        }

                        tpl = "<tr>"+
                            "<td>" + list[i].id + "</td>" +
                            "<td>" + list[i].uid + "</td>" +
                            "<td>" + list[i].oid + "</td>" +
                            "<td>" + list[i].result + "</td>" +
                            "<td>" + list[i].begintime + "</td>" +
                            "<td><a href='" + list[i].process + "' class='btn btn-primary battle-replay' id='" + list[i].id + "detail'>对战细节</a></td>" +
                            "</tr>";
                        str = str + tpl;
                    }

                    for(var j = 0;j<totalPage;j++){

                        if(j == 0){
                            pageTpl = "<li class='active'><a href='javascript:void(0)'>" + (j+1) + "</a></li>";
                        } else {
                            pageTpl = "<li><a href='javascript:void(0)'>" + (j+1) + "</a></li>";
                        }

                        pageStr = pageStr + pageTpl;
                    }

                    pageStr = "<li><a aria-label='Previous' id='Bprevious' class='director'><span aria-hidden='true'>&laquo;</span></a></li>" +
                        pageStr +
                        "<li><a aria-label='Next' id='Bnext' class='director'><span aria-hidden='true'>&raquo;</span></a></li>";

                    $("#battleTable").find("tbody").html(str);
                    $(".pagination").html(pageStr)
                        .attr("data-count",totalPage);

                    common.BdividePage();

                },
                error : function(){
                    console.log('error');
                }
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