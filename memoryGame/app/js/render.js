define(['jquery','update'],function($,update){
	return {
		makeNumberTable : function(amount,time){
			var numTable = $("#num-table"),
					tpl = "",
					row = 0,
					randomNum = 0,
					randomArray = [];

			row = Math.ceil(amount/20);

			for(var i = 0;i<row;i++){
				for(var j = 0;j<20;j++){
					if(i*20+j+1 > amount){
						break;
					} else {
						randomNum = Math.floor(Math.random()*9);
						randomArray.push(randomNum);
						tpl = tpl + "<div class='table-block pos-"+ i + "-" + j + "'>" + randomNum + "</div>"
					}
				}
			}

			console.log(randomArray);
			tpl = tpl + "<div class='clear'></div>"
			numTable.html(tpl);

			$("#show-result").on("click",function(){
				console.log(1);
				update.showResult(randomArray);
			});
		}
	};
});