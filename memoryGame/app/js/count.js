define(['jquery'],function(){
	return {
		/**
		 * 指数计算
		 * @param  {num}
		 * @return {num}
		 */
		indexCalculate : function(index){
			var num = 1;
			for(var i = 0;i<index;i++){
				num *= 10;
			}
			return num;
		},
		/**
		 * 生成随机数
		 * @param  {number}
		 * @return {number}
		 */
		makeRandomNumber : function(digit){
			var randomNum = 0,
				indexNum = 1;
			if(!digit){
				randomNum = Math.floor(Math.random()*9);
			} else {
				indexNum = this.indexCalculate(digit);
				randomNum = Math.floor(Math.random()*indexNum);
				randomNum = this.completeNumber(randomNum,digit);
			}
			return randomNum;
		},
		/**
		 * 补全数字
		 * @param  {number}
		 * @param  {number}
		 * @return {number}
		 */
		completeNumber : function(num,digit){
			var i = "",
				consultNum = this.indexCalculate(digit);

			if(num<consultNum){
				i = num.toString();
				for(var j = 0;j<(digit-i.length);j++){
					num = "0" + num;
				}
			}

			return num;
		}
	};
});