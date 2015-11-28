/**
 * Created by cui on 2015/11/28.
 */
define(['jquery'],function($){
    var emailPattern = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
        password = /./,
        patternArray = [];

    patternArray["email"] = emailPattern;
    patternArray["password"] = password;

    return {
        check : function(type,str){
            if(patternArray[type].test(str)){
                return true;
            } else {
                return false;
            }
        }
    }
});