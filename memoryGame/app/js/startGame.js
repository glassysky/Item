define(['jquery','update'],function($,update){
	return {
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
					update.timerUpdate();
					update.flashUpdate(interval,digit);
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
		}
	};
});