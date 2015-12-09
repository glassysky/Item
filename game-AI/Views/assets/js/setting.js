/**
 * Created by cui on 2015/12/2.
 */
define(['jquery'],function(){

    return {
        preFillInfo : function(){
            $.ajax({
                type : 'json',
                url : '../User/Info/getUserInfo',
                success : function(callback){
                    var msg = callback.msg;

                    console.log(callback);
                    if(callback.status == "success"){
                        var details = $(".info-details");
                        details.find(".nickname").find(".info-body").html(msg.nickname)
                            .end().end()
                            .find(".school").find(".info-body").html(msg.school)
                            .end().end()
                            .find(".entrance").find(".info-body").html(msg.entrance)
                            .end().end()
                            .find(".email").find(".info-body").html(msg.email);
                    } else {
                        console.log(msg);
                    }
                },
                error : function(){
                    console.log("失败");
                }
            });
        },
        editInfo : function(){
            //切换按钮
            $("#changeInfo").on("click",function(){
                $(".btn-hidden").each(function(){
                    $(this).removeClass("btn-hidden");
                });
                $("#changeInfo").addClass("btn-hidden");
                $(".info-details").addClass("hidden");
                $(".change-form").removeClass("hidden");
            });
            //保存修改
            $("#saveChange").on("click",function(){
                var nickname = $("#inputNickname").val(),
                    school = $("#inputSchool").val(),
                    year = $("#inputYear").val(),
                    secondPlayer = $("#inputSecond").val(),
                    thirdPlayer = $("#inputThird").val();

                $.ajax({
                    type : 'post',
                    url : '../User/Info/edit',
                    dataType : 'json',
                    data : {
                        'nickname' : nickname,
                        'school' : school,
                        'entrance' : year,
                        'secondPlayer' : secondPlayer,
                        'thirdPlayer' : thirdPlayer
                    },
                    success : function(callback){
                        if(callback.status == "success"){
                            alert("修改成功");
                            window.location.href = "setting.html";
                        } else {
                            console.log("修改失败");
                        }
                    },
                    error : function(){
                        console.log("请求失败");
                    }
                });
            });

            //取消修改
            $("#cancelChange").on("click",function(){
                $(".btn").each(function(){
                    $(this).addClass("btn-hidden");
                });
                $("#changeInfo").removeClass("btn-hidden");
                $(".info-details").removeClass("hidden");
                $(".change-form").addClass("hidden");
            });

            //验证码
            $("#checkpic").on("click",function(){
                $("#checkpic").attr("src","../User/Login/verify");
            });
        }
    }
})