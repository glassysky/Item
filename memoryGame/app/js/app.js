define(['jquery'],function($){
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
					that.update(interval);
				}
			},1000);

			function stopCount(t){
				clearTimeout(t);
			}

			return t;
		},
		update : function(interval){
			var t1,//timer
				t2,//interval
				second = 0,
				minute = 0,
				timeArray = [],
				timerNum = $("#timer-top").find("span"),
				flashNum = $("#num-flash").find("span");

			$(".prepare-part").css("display","none");
			$(".flash-part").css("display","block");

			timeArray = timerNum.html().split(":");
			console.log(timeArray);

			function addZero(num){
				if(num<10){
					num = "0" + num;
				}
			}
		}
	};
});