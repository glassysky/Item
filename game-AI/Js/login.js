/**
 * Created by cui on 2015/11/28.
 */
define(['jquery','common'],function($,common){
    return {
        login : function(){
            check();

            $("#login-btn").on("click",function(){
                var email = $("#inputEmail").val(),
                    password = $("#inputPassword").val(),
                    checked = false;

                // 信息是否完整
                if(email && password){
                    $.ajax({
                        type : 'post',
                        dataType : 'json',
                        url : '',
                        data : {
                            'email' : email,
                            'password' : password
                        },
                        success : function(){
                            window.location.href = "homepage/homepage.html";
                        },
                        error : function(){
                            console.log('请求失败');
                        }
                    });
                } else {
                    $("form").find("input").each(function(){
                        if($(this).val()){
                            $(this).css("border-color","green");
                        } else {
                            $(this).css("border-color","red");
                        }
                    });
                    alert("请补全信息");
                }
            });

            function check(){
                $("form").find("input").each(function(){
                    $(this).blur(function(){
                        checked = common.check($(this).attr("data-name"),$(this).val());
                        if(checked){
                            $(this).css("border-color","green");
                        } else {
                            $(this).css("border-color","red");
                        }
                    });
                });
            }
        }
    };
});