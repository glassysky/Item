/**
 * Created by Administrator on 2015/10/28.
 */
"use strict";
$(document).ready(function(){
    //$('#photoimg').die('click').live('change', function(){
      $('#photoimg').change(function(){
        var status = $("#up_status");
        var btn = $("#up_btn");
       // var showimage=$('$showimage');
        $("#imageform").ajaxForm({
            //target: '', 
            // beforeSubmit:function(){
            //     //console.log('11111');return false;
            //     status.show();
            //     btn.hide();
            // }, 
            success:function(data){   
               if(data.status==0){    
                 status.hide();
                 btn.show();
                 location.href="user_avatar";  
              }
            }, 
            error:function(){
                status.hide();
                btn.show();        
            }
    }).submit();

    });

});
   
   
// var phone_preg = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
// var email_preg = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
// $(document).ready(function(){
    // $(".saveuserinfobtn > .btn").click(function(){
    //     console.log("123");
    //     return false;

    // });
    //$(".login-btn > .btn").click(function(){
    //    var username = $("#username").val();
    //    var username_len = username.length;
    //    var password = $("#password").val();
    //    var password_len = password.length;
    //    var remerberme = 0;
    //    var is_error = 0;
    //    var errorsmg = "";
    //    if(username=="" || username_len <= 0 ){
    //        errorsmg = "错误：用户名不能空";
    //        show_errormsg(errorsmg);
    //        return false;
    //    }
    //    if(password==""|| password_len <= 0){
    //        errorsmg = "错误：密码不能空";
    //        show_errormsg(errorsmg);
    //        return false;
    //    }
    //    if(username_len < 6){
    //        errorsmg = "错误：用户名长度不能少于6";
    //        show_errormsg(errorsmg);
    //        return false;
    //    }
    //    if(password_len < 6){
    //        errorsmg = "错误：密码长度不能少于6";
    //        show_errormsg(errorsmg);
    //        return false;
    //    }
    //    var username_preg = /^[0-9A-Za-z_]+$/;
    //    if(username_preg.test(username)){
    //        //show_errormsg("用户名符合登录标准");
    //    }else{
    //        errorsmg = "错误：用户名只由用英文或数字或下划线组成";
    //        show_errormsg(errorsmg);
    //        return false;
    //    }
    //    if($("input[type=checkbox]").is(":checked")){
    //        remerberme = 1;
    //    }
    //    $.post("__URL__/load",{"username":username,"password"
    //        :password,"remerberme":remerberme},function(data){
    //        if(data.status==0){
    //            show_errormsg(data.msg);
    //            return false;
    //        }else if(data.status==1){
    //            show_errormsg(data.msg);
    //            location.href="__URL__/index";
    //        }else if(data.status=2){
    //            show_errormsg(data.msg);
    //            location.href="__URL__/login";
    //        }
    //    },"json");
    //    return false;
    //});
    //$(".register-btn > .btn").click(function(){
    //    var phone = $("#phone").val();
    //    var phone_len = phone.length;
    //    var username = $("#username").val();
    //    var username_len = username.length;
    //    var password = $("#password").val();
    //    var password_len = password.length;
    //    var repassword = $("#repassword").val();
    //    var repassword_len = repassword.length;
    //    var code = $("#code").val();
    //    var code_len = code.length;
    //    var email = $("#email").val();
    //    var email_len = email.length;
    //    var allow = 0;
    //    var errorsmg = "";
    //    if(phone=="" || phone_len <= 0 ){
    //        errorsmg = "错误：手机号码不能空";
    //        show_errormsg(errorsmg);
    //        return false;
    //    }
    //
    //    if(!phone_preg.test(phone)){
    //        errorsmg = "错误：手机号码格式不对";
    //        show_errormsg(errorsmg);
    //        return false;
    //    }
    //
    //    if(username=="" || username_len <= 0 ){
    //        errorsmg = "错误：用户名不能空";
    //        show_errormsg(errorsmg);
    //        return false;
    //    }
    //    if(password=="" || password_len <= 0){
    //        errorsmg = "错误：密码不能空";
    //        show_errormsg(errorsmg);
    //        return false;
    //    }
    //    if(repassword=="" || repassword_len <= 0){
    //        errorsmg = "错误：重复密码不能空";
    //        show_errormsg(errorsmg);
    //        return false;
    //    }
    //
    //    if(username_len < 6){
    //        errorsmg = "错误：用户名长度不能少于6";
    //        show_errormsg(errorsmg);
    //        return false;
    //    }
    //    if(password_len < 6){
    //        errorsmg = "错误：密码长度不能少于6";
    //        show_errormsg(errorsmg);
    //        return false;
    //    }
    //    var username_preg = /^[0-9A-Za-z_]+$/;
    //    if(!username_preg.test(username)){
    //        errorsmg = "错误：用户名只由用英文或数字或下划线组成";
    //        show_errormsg(errorsmg);
    //        return false;
    //    }
    //    if(password != repassword){
    //        errorsmg = "错误：两次密码不一样";
    //        show_errormsg(errorsmg);
    //        return false;
    //    }
    //    // if(code=="" || code_len <= 0){
    //    //     errorsmg = "错误：验证码不能空";
    //    //     show_errormsg(errorsmg);
    //    //     return false;
    //    // }
    //     if(email!="" || email_len > 0){
    //         if(!email_preg.test(email)){
    //             errorsmg = "错误：邮箱格式错误";
    //             show_errormsg(errorsmg);
    //             return false;
    //         }
    //     }
    //    if($("input[type=checkbox]").is(":checked")){
    //        allow = 1;
    //    }
    //    // console.log("phone"+phone+"username"+username+"password"+password+"allow"+allow+"repassword"+repassword);
    //    // return false;
    //    $.post("__URL__/add",{"phone":phone,"username":username,"password":password,"allow":allow,"repassword":repassword,"code":code,"email":email},function(data){ if(data.status==0){
    //        show_errormsg(data.msg);
    //        return false;
    //    }else if(data.status==1){
    //        show_errormsg(data.msg);
    //        return false;
    //    }else if(data.status==2){
    //        show_errormsg(data.msg);
    //        return false;
    //    }else if(data.status==3){
    //        show_errormsg(data.msg);
    //        location.href="__URL__/index";
    //    }else if(data.status==4){
    //        show_errormsg(data.msg);
    //        location.href="__URL__/register";
    //    }else if(data.status==5){
    //        show_errormsg(data.msg);
    //        return false;
    //    }else if(data.status==6){
    //        show_errormsg(data.msg);
    //        return false;
    //    }
    //
    //    },"json");
    //
    //    return false;
    //});
    //$(".getcode-btn").click(function(){
    //    var phone = $("#phone").val();
    //    var phone_len = phone.length;
    //    var errorsmg="";
    //    if(phone=="" || phone_len <= 0 ){
    //        errorsmg = "错误：手机号码不能空";
    //        show_errormsg(errorsmg);
    //        return false;
    //    }
    //    if(!phone_preg.test(phone)){
    //        errorsmg = "错误：手机号码格式不对";
    //        show_errormsg(errorsmg);
    //        return false;
    //    }
    //    $.post("__URL__/send",{phone:phone},
    //        function(data,textStatus){
    //
    //            alert(data);
    //        });
    //});
    ////忘记密码第一步
    //$(".forgetpwd-phone-btn > .btn").click(function(){
    //
    //
    //});
    ////忘记密码第二步
    //$(".forgetpwd-code-btn > .btn").click(function(){
    //
    //
    //});
    ////忘记密码第三步
    //$(".forgetpwd-reset-btn > .btn").click(function(){
    //
    //
    //});

// });


function show_errormsg(msg){
    $(".errormsg").html(msg);
    $(".form-errortip").show();
}