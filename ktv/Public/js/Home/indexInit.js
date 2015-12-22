/**
 * Created by cui on 2015/12/20.
 */
define(['jquery'],function($){
    var judgeInput = [];

    return {
        addClickListener : function(){
            $(".submit-btn").on("click",function(){
                var count = 0;
                if($(this).attr("id") == "reg-btn"){
                    for(var i in judgeInput){
                        if(judgeInput[i]){
                            count++;
                        }
                    }
                    if(count == 4){
                        var email = $("#inputEmail").val(),
                            phone = $("#inputTel").val(),
                            pass = $("#inputPass").val();

                        $.ajax({
                            type : 'post',
                            dataType : 'json',
                            url : 'doReg',
                            data : {
                                "email" : email,
                                "tel" : phone,
                                "pass" : pass
                            },
                            success : function(callback){
                                // if(callback.status == "success"){
                                //     window.location.href = "index";
                                // } else {
                                //     alert(callback.msg);
                                // }
                                console.log(callback);
                            },
                            error : function(){
                                alert("请求失败");
                            }
                        });
                    }
                } else {
                    var email = $("#inputEmail").val(),
                        pass = $("#inputPass").val();

                    $.ajax({
                        type : 'post',
                        dataType : 'json',
                        url : 'doLog',
                        data : {
                            "email" : email,
                            "pass" : pass
                        },
                        success : function(callback){
                            if(callback.status == "success"){
                                console.log("登陆成功！");
                            } else {
                                console.log(callback.msg);
                            }
                        },
                        error : function(){
                            console.log("请求失败");
                        }
                    });
                }
            });
        },

        //表单验证
        formJudge : function(){
            var self = this;
            $("form").find("input").each(function(){
                $(this).blur(function(){
                    switch ($(this).attr("id")){
                        case "inputEmail":
                        case "inputTel":
                            self.markError($(this));
                            break;
                        case "inputPass":
                            if(!$(this).val()){
                                $(this).addClass("input-error")
                                    .removeClass("input-right");
                                judgeInput[$(this).attr("id")] = 0;
                            } else if ($(this).val() != $("#confirmPass").val()){
                                $(this).addClass("input-right")
                                    .removeClass("input-error");
                                $("#confirmPass").addClass("input-error")
                                    .removeClass("input-right");
                                judgeInput[$(this).attr("id")] = 1;
                                judgeInput["confirmPass"] = 0;
                            } else {
                                $(this).addClass("input-right")
                                    .removeClass("input-error");
                                $("#confirmPass").addClass("input-right")
                                    .removeClass("input-error");
                                judgeInput[$(this).attr("id")] = 1;
                                judgeInput["confirmPass"] = 1;
                            }
                            break;
                        case "confirmPass":
                            if($(this).val() && ($(this).val() == $("#inputPass").val())){
                                $(this).addClass("input-right")
                                    .removeClass("input-error");
                                judgeInput[$(this).attr("id")] = 1;
                            } else {
                                $(this).addClass("input-error")
                                    .removeClass("input-right");
                                judgeInput[$(this).attr("id")] = 0;
                            }
                            break;
                    }
                });
            });
        },

        //标记问题输入框
        markError : function(obj){
            if(!obj.val()){
                obj.addClass("input-error")
                    .removeClass("input-right");
                judgeInput[obj.attr("id")] = 0;
            } else {
                obj.addClass("input-right")
                    .removeClass("input-error");
                judgeInput[obj.attr("id")] = 1;
            }
        }

    };
});