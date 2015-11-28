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
        }
    }
});