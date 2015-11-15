define(['jquery','startGame'],function($,startGame){
	
	return {
		/**
		 * 监听开始按钮
		 * @return {[type]}
		 */
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
					startGame.startGame(timePrepare,timeInterval,digitShow);
				}
			});
		}
	};
});