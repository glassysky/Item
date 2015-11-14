define(['jquery'],function($){
	var cacheArray = [];
	return {
		btnClickListener : function(){
			var that = this;
			$("#start-btn").on("click",function(){
				var timeInterval = $("#time-interval").val(),
					timePrepare = $("#time-prepare").val(),
					check = false;

				if(timeInterval<=10 && timeInterval>=0.2 && timePrepare){
					check = true;
				}

				if(check){
					$("header").css("display","none");
					$(".select-part").css("display","none");
					$(".prepare-part").css("display","block");
					that.startGame(timePrepare,timeInterval);
				}
			});
		},
		startGame : function(timePrepare,timeInterval){
			var text = $("#prepare-text"),
				time = timePrepare,
				interval = timeInterval,
				that = this,
				t,Ttemp;

			if(timePrepare<10){
				time = "0" + time;
			}
			text.html(time);

			t = setTimeout(function(){
				time = parseInt(time) - 1;
				Ttemp = that.startGame(time,interval);
				console.log(time);
				if(time<0){
					stopCount(Ttemp);
					that.timerUpdate();
					that.flashUpdate(interval);
				}
			},1000);

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

			function addZero(num){
				if(num<10){
					num = "0" + num;
				}
				return num;
			}
		},
		flashUpdate : function(interval){
			var t2,
				randomNum,
				showNum,
				numArray = [],
				flashNum = $("#num-flash").find("span"),
				that = this;

			for(var i = 0;i<10;i++){
				numArray.push(i);
			}

			console.log(cacheArray);
			t2 = setTimeout(function(){
				if(!cacheArray){
					randomNum = Math.ceil(Math.random()*9);
					showNum = numArray[randomNum];
					cacheArray.push(showNum);
				} else {
					console.log("else");
					do {
						randomNum = Math.ceil(Math.random()*9);
						showNum = numArray[randomNum];
					} while (cacheArray[cacheArray.length-1] == showNum);
					cacheArray.push(showNum);
				}
				flashNum.html(showNum);
				that.flashUpdate(interval)
			},interval*1000);
		}
	};
});