define(['jquery'],function($){
	var cacheArray = [];

	return {
		btnClickListener : function(){
			var that = this;
			$("#start-btn").on("click",function(){
				var timeInterval = $("#time-interval").val(),
					timePrepare = $("#time-prepare").val(),
					digitShow = $("#digit-show").val(),
					check = false;

				if(timeInterval<=10 && timeInterval>=0.2 && timePrepare){
					check = true;
				}

				if(check){
					$("header").css("display","none");
					$(".select-part").css("display","none");
					$(".prepare-part").css("display","block");
					that.startGame(timePrepare,timeInterval,digitShow);
				}
			});
		},
		startGame : function(timePrepare,timeInterval,digitShow){
			var text = $("#prepare-text"),
				time = timePrepare,
				interval = timeInterval,
				digit = digitShow,
				that = this,
				t,Ttemp;

			if(timePrepare<10){
				time = "0" + time;
			}
			text.html(time);

			t = setTimeout(function(){
				time = parseInt(time) - 1;
				Ttemp = that.startGame(time,interval,digit);
				console.log(time);
				if(time<0){
					stopCount(Ttemp);
					that.timerUpdate();
					that.flashUpdate(interval,digit);
				}
			},1000);

			$("#prepare-over").on("click",function(){
				stopCount(t);
				$(".prepare-part").css("display","none");
				$("header").css("display","block");
				$(".select-part").css("display","block");
			});

			function stopCount(t){
				clearTimeout(t);
			}

			return t;
		},
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
		flashUpdate : function(interval,digit){
			var t2,
				showNum,
				flashNum = $("#num-flash").find("span"),
				that = this;

			// console.log(cacheArray);
			t2 = setTimeout(function(){
				if(!cacheArray){

					showNum = that.makeRandomNumber(digit);
					cacheArray.push(showNum);

				} else {

					do {
						showNum = that.makeRandomNumber(digit);
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
		countCancel : function(t){
			function stopCount(t){
				clearTimeout(t);
			}
		},
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
		},
		indexCalculate : function(index){
			var num = 1;
			for(var i = 0;i<index;i++){
				num *= 10;
			}
			return num;
		},
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