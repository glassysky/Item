define(['jquery'],function($){
    $(document).ready(function(){
        var pathName = window.location.pathname,
            location = "",
            url = "",
            idName = "",
            urlArr = [],
            self = this;

        pathName = pathName.split("/");
        location = pathName[pathName.length-1];

        urlArr = location.split("");
        urlArr[0] = urlArr[0].toUpperCase();
        url = urlArr.join("");
        url = "get" + url;

        for(var i = 0;i<location.length;i++){
            if(location[i] == location[i].toUpperCase()){
                idName = location.slice(0,i);
            }
        }

        idName = idName+"-list-table";
        
        if(location != "welcome"){
            $.ajax({
                type : 'post',
                url : url,
                success : function(callback){
                    var msg = callback.msg,
                        html = "",
                        count = 1;
                    console.log(msg);
                    for(var i in msg){
                        console.log(i);
                        html += "<tr id=" + msg[i].id + "><th>#</th><th>" + (parseInt(i)+1) + "</th><th>" + msg[i].user_email + "</th><th></th></tr>";
                    }
                    $("#"+idName).html(html);
                },
                error : function(){
                    alert("请求失败");
                }
            });
        }
    });

    return {
        addButtonListener : function(){
            $(".panel-collapse").find(".select-btn")
                .each(function(){
                    $(this).on("click",function(){
                        var id = $(this).attr("id"),
                            infoArray = id.split("-"),
                            url = infoArray[0] + "List";

                            window.location.href = "/index.php/Admin/Index/" + url;
                    });
                });
        },
    }
});