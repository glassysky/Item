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
                        url : '/User/Login/logout',
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
                url : '/User/Login/loginStatus',
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
        }

    };
});