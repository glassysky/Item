/**
 * Created by cui on 2015/11/28.
 */
define(['jquery'],function($){
    var emailPattern = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
        password = /./,
        nickname = /./,
        repassword = /./,
        school = /./,
        stuID = /./,
        name = /./,
        year = /./,
        patternArray = [];

    var page = 1,
        currentPage = 1;

    patternArray["email"] = emailPattern;
    patternArray["password"] = password;
    patternArray["nickname"] = nickname;
    patternArray["repassword"] = repassword;
    patternArray["school"] = school;
    patternArray["stuID"] = stuID;
    patternArray["name"] = name;
    patternArray["year"] = year;


    return {
        check : function(type,str){
            if(patternArray[type].test(str)){
                if(type == "repassword"){
                    if($("#inputPassword").val() == $("#repeatPassword").val()){
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return true;
                }
            } else {
                return false;
            }
        },

        logOut : function(){
            $("#logOut").ready(function(){
                var logOutBtn = $("#logOut");
                logOutBtn.on("click",function(){
                    console.log(1);
                    $.ajax({
                        type : 'post',
                        url : '../User/Login/logout',
                        success : function(callback){
                            if(callback.status == "success"){
                                alert("成功注销");
                            } else {
                                console.log("error");
                            }
                        },
                        error : function(){
                            alert("注销失败");
                        }
                    });
                });
            });

        },

        logStatus : function(){
            var self = this;
            $.ajax({
                type : 'post',
                url : '../User/Login/loginStatus',
                success : function(callback){
                    if(callback.status == "success"){
                        $("#toSelf").removeClass("hidden");
                        $("#toReg").addClass("hidden");
                        $("#username").html("您好," + callback.msg.nickname + "<span class='caret'></span>");
                        self.showCodeManage();
                    }
                },
                error : function(){
                    console.log("请求失败");
                }
            });
        },

        showCodeManage : function(){
            $("#banner").append('<li><a href="./code.html">代码管理</a></li>');
        },

        RdividePage : function(){
            $(".pagination").find("a").each(function(){
                $(this).on("click",function(){
                    var id = $(this).attr("id"),
                        totalPage = $(".pagination").attr("data-count");

                    currentPage = $(".active").find("a").html();

                    if(id == "Rprevious") {
                        if(currentPage > 1){
                            page--;
                            $(".active").prev().addClass("active")
                                .end()
                                .removeClass("active");
                        } else {
                            page = currentPage;
                        }
                    } else if (id == "Rnext") {
                        if(currentPage < totalPage){
                            page++;
                            $(".active").next().addClass("active")
                                .end()
                                .removeClass("active");
                        } else {
                            page = currentPage;
                        }
                    } else {
                        page = $(this).html();

                        $(".pagination").find(".active").removeClass("active");
                        $(this).parent().addClass("active");

                    }

                    console.log(page);

                    $.ajax({
                        type : 'post',
                        url : '../Home/Index/userRank',
                        dataType : 'json',
                        data : {
                            "page" : page
                        },
                        success : function(callback){
                            var tableList = $("#rankTable"),
                                tbody = tableList.find("tbody"),
                                length = 0,
                                page = 0,
                                str = "",
                                msg = callback.msg,
                                rank = null;

                            page = Math.floor(msg.page);
                            length = msg.rank.length;
                            rank = msg.rank;

                            for(var i = 0;i<length;i++){
                                tpl = "<tr data-uid='" + rank[i].id + "'>" +
                                    "<td>" + (20*(page-1)+i+1) + "</td>" +
                                    "<td>" + rank[i].nickname + "</td>" +
                                    "<td>" + rank[i].score + "</td>" +
                                    "<td><a class='btn btn-primary pk-btn' id='" + rank[i].id + "PK'>PK一下</a></td>" +
                                    "</tr>";
                                str = str + tpl;
                            }

                            tbody.html(str);
                        }
                    });

                });
            });
        },

        BdividePage : function(){
            $(".pagination").find("a").each(function(){
                $(this).on("click",function(){
                    var id = $(this).attr("id"),
                        totalPage = $(".pagination").attr("data-count");

                    currentPage = $(".active").find("a").html();

                    if(id == "Bprevious") {
                        if(currentPage > 1){
                            page--;
                            $(".active").prev().addClass("active")
                                .end()
                                .removeClass("active");
                        } else {
                            page = currentPage;
                        }
                    } else if (id == "Bnext") {
                        console.log("next");
                        if(currentPage < totalPage){
                            page++;
                            $(".active").next().addClass("active")
                                .end()
                                .removeClass("active");
                        } else {
                            page = currentPage;
                        }
                    } else {
                        page = $(this).html();

                        $(".pagination").find(".active").removeClass("active");
                        $(this).parent().addClass("active");

                    }

                    console.log(page);
                    $.ajax({
                        type : 'post',
                        url : '../Home/Index/getBattles',
                        dataType : 'json',
                        data : {
                            "page" : page
                        },
                        success : function(callback){
                            var tableList = $("#battleTable"),
                                tbody = tableList.find("tbody"),
                                length = 0,
                                str = "",
                                msg = callback.msg,
                                list = null;

                            length = msg.list.length;
                            list = msg.list;

                            console.log(msg);

                            for(var i = 0;i<length;i++){
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

                            tbody.html(str);
                        }
                    });

                });
            });
        }

    };
});