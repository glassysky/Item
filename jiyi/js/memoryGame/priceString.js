/**
 * Created by cui on 2015/12/6.
 */
define(['config'],function(CONFIG){

    //300张图片
    var imgAmount = 300;
    var numArray = [];
    return {
        getRandomNumber : function(startNumber,endNumber){
            var startNumber = startNumber ? startNumber : 0;
            var endNumber = endNumber ? endNumber : 100;
            var numberDiff = parseInt(endNumber - startNumber);
            return Math.floor(Math.random() * numberDiff + startNumber);;
        },
        //返回随机生成图片的数字
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
            return CONFIG.imgUrl + "price/" + imgNum + ".png";
        },
        getRandomText : function(){
            var imgNum = this.getRandomImgNumber(1,imgAmount);
            return imgNum;
        },
        getRandomPrice : function(){
            var getIndexRandom = this.getRandomNumber(1,6);
            var price = 0;
            switch(getIndexRandom){
                case 1 : price = this.getRandomNumber(1,9);break;
                case 2 : price = this.getRandomNumber(10,99);break;
                case 3 : price = this.getRandomNumber(100,999);break;
                case 4 : price = this.getRandomNumber(1000,9999);break;
                case 5 : price = this.getRandomNumber(10000,99999);break;
                case 6 : price = this.getRandomNumber(100000,999999);break;
            }
            return price;
        }
    }
});