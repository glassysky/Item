/**
 * Created by ShenShuhan on 2016/1/7.
 */
define(['config'],function(CONFIG){

    var imgNum = 0;
    //50张图片
    var imgAmount = 50;
    var numArray = [];
    var tempArray = [];
    var count = 1;

    for(var i = 0;i<=imgAmount;i++){
        numArray.push(i);
    }

    return {
        //随机生成图片
        getRandomImgNumber : function(startNumber,endNumber){

            var randomNumber = 0;
            do{
                randomNumber = this.getRandomNumber(startNumber,endNumber);
            }
            while(numArray[randomNumber]);
            numArray[randomNumber] = randomNumber;
            return randomNumber;
        },

        getImageUrl: function(imgNum){
            return CONFIG.imgUrl + imgNum + ".png";
        },
        getRandomText : function(){
            var imgNum = this.getRandomImgNumber(1,imgAmount);
            return imgNum;
        },