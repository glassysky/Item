define(['jquery','startGame'],function($,startGame){
	
	return {
		/**
		 * 监听开始按钮
		 * @return {[type]}
		 */
		btnClickListener : function(){
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
					startGame.startGame(timePrepare,timeInterval,digitShow);
				}
			});

			$("#start-memory").on("click",function(){
				var prepareTime = $("#time-prepare").val(),
					memoryAmount = $("#memory-amount").val(),
					memoryTime = $("#memory-time").val();

				if(memoryAmount){
					$("header").css("display","none");
					$(".select-part").css("display","none");
					$(".prepare-part").css("display","block");
					startGame.startMemory(prepareTime,memoryTime,memoryAmount);
				}
			});
		}
	};
});