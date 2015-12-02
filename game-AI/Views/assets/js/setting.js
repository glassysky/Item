/**
 * Created by cui on 2015/12/2.
 */
define(['jquery'],function(){

    return {
        preFillInfo : function(){

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
                    thirdPlayer = $("#inputThird").val(),
                    validate = $("#inputValidate");

                $.ajax({
                    type : 'post',
                    url : '',
                    dataType : 'json',
                    data : {
                        'nickname' : nickname,
                        'school' : school,
                        'entrance' : year,
                        'secondPlayer' : secondPlayer,
                        'thirdPlayer' : thirdPlayer,
                        'validate' : validate
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
        }
    }
})