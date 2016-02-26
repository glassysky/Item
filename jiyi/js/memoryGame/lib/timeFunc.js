/**
 * Created by Administrator on 2015/12/4.
 */
define([],function(){
    return {
        getTimeHour : function(t){
            var Hour = Math.floor(t / 60 / 60);
            if(Hour < 10){
                Hour = "0" + Hour;
            }
            return Hour;
        },
        getTimeMinute : function(t){
            var Minute = Math.floor(t / 60 % 60);
            if(Minute < 10){
                Minute = "0" + Minute;
            }
            return Minute;
        },
        getTimeSecond : function (t){
            var Second = Math.floor(t % 60);
            if(Second < 10){
                Second = "0" + Second;
            }
            return Second;
        },
        getTimeStr : function(time){
            var time = parseInt(time) ? parseInt(time) : 0;
            if(!time){
                return 0;
            }
            var timeStr = "";

            var conHour = parseInt(this.getTimeHour(time));
            var conMinute = parseInt(this.getTimeMinute(time));
            var conSecond = parseInt(this.getTimeSecond(time));
            if(conHour > 0){
                timeStr = conHour + " 时 ";
            }
            if(conMinute > 0){
                timeStr += conMinute + " 分 ";
            }
            if(conSecond > 0){
                timeStr += conSecond + " 秒 ";
            }
            return timeStr;
        }
    }
});
