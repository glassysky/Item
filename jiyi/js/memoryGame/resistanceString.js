/**
 * Created by cui on 2015/12/15.
 */
define(['config'],function(CONFIG){

    var imgNum = 0;
    //54张图片
    var imgAmount = 54;
    var numArray = [];
    var tempArray = [];
    var count = 1;

    for(var i = 0;i<=imgAmount;i++){
        numArray.push(i);
    }

    return {
        //每行5个不重复
        getRandomNumber : function(startNumber,endNumber){
            var startNumber = startNumber ? startNumber : 0;
            var endNumber = endNumber ? endNumber : 100;
            var numberDiff = parseInt(endNumber - startNumber);
            var randomNumber = 0;
            do{
                randomNumber = Math.floor(Math.random() * numberDiff + startNumber);
            }
            while(!numArray[randomNumber]);
            numArray[randomNumber] = null;

            if(count<5){
                count++;
            } else {
                for(var i = 0;i<=imgAmount;i++){
                    tempArray.push(i);
                }
                numArray = tempArray;
                tempArray = [];
                count = 1;
            }

            return randomNumber;
        },
        getImageNum : function(){
            var imgNum = this.getRandomNumber(0,54);
            return imgNum;
        },
        getImageUrl: function(imgNum){
            return CONFIG.imgUrl + "resistance/" + imgNum + ".jpg";
        },
        getRandomText : function(){
            var imgNum = this.getRandomNumber(0,54);
            return imgNum;
        },
    }
});