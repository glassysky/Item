define(['jquery'],function(){
	return {
		makeNumberTable : function(amount,time){
			var headTpl = "";

			for(var i = 0;i<21;i++){
				if(i == 0){
					headTpl = "<th>#</th>";
				} else {
					headTpl += "<th>" + i + "</th>";
				}
			}
			$("#num-table").find("thead").find("tr").html(headTpl);
		}
	};
});