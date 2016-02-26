/**
 * Created by Administrator on 2015/11/26.
 */

define([],function(){
    var letterAry = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var letterLen = letterAry.length;
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
            return letterAry[this.getRandomNumber(0 , letterLen - 1)];
        },
    }
});