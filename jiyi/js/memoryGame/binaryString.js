/**
 * Created by Administrator on 2015/11/26.
 */

define([],function(){

    return {
        //随机数字
        getRandomNumber : function(startNumber,endNumber){
            var startNumber = startNumber ? startNumber : 0;
            var endNumber = endNumber ? endNumber : 100;
            var numberDiff = parseInt(endNumber - startNumber);
            return Math.floor(Math.random() * numberDiff + startNumber);
        },
        //随机读取字母
        getRandomText : function(){
            var randomNumber = this.getRandomNumber(0,2);
            return randomNumber;
        },
    }
});