define(['jquery','count'],function($,count){
	var cacheArray = [];

	return {
		/**
		 * 顶部计时器
		 * @return {t1(object)}
		 */
		timerUpdate : function(){
			var t1,//timer
				t2,//interval
				timerText = "",
				timeArray = [],
				timerNum = $("#timer-top").find("span"),
				that = this;

			$(".prepare-part").css("display","none");
			$(".flash-part").css("display","block");

			timeArray = timerNum.html().split(":");

			t1 = setTimeout(function(){
				if(timeArray[1]<60){
					timeArray[1] = addZero(parseInt(timeArray[1])+1);
				} else {
					timeArray[1] = "00";
					timeArray[0] = addZero(parseInt(timeArray[0])+1);
				}
				// console.log(timeArray);
				timerText = timeArray.join(":");
				timerNum.html(timerText);
				that.timerUpdate();
			},1000);

			this.stopBtnListener(t1);

			function addZero(num){
				if(num<10){
					num = "0" + num;
				}
				return num;
			}

			return t1;
		},
		/**
		 * 页面闪烁更新
		 * @param  {number}
		 * @param  {number}
		 * @return {t2:object}
		 */
		flashUpdate : function(interval,digit){
			var t2,
				showNum,
				flashNum = $("#num-flash").find("span"),
				that = this;

			// console.log(cacheArray);
			t2 = setTimeout(function(){
				if(!cacheArray){

					showNum = count.makeRandomNumber(digit);
					cacheArray.push(showNum);

				} else {

					do {
						showNum = count.makeRandomNumber(digit);
					} while (cacheArray[cacheArray.length-1] == showNum);
					cacheArray.push(showNum);

				}

				console.log(cacheArray);

				flashNum.html(showNum);
				that.flashUpdate(interval,digit);
			},interval*1000);

			this.stopBtnListener(t2);

			return t2;
		},
		/**
		 * 监听停止按钮
		 * @param  {object}
		 * @return {[type]}
		 */
		stopBtnListener : function(t){
			$("#flash-over").on("click",function(){
				clearTimeout(t);
				$(".flash-part").css("display","none");
				$("header").css("display","block");
				$(".select-part").css("display","block");
				cacheArray = [];
				$("#timer-top").find("span").html("00:00");
				$("#num-flash").find("span").html("0");
			});
		}
	};
});