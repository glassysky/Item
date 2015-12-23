define(['jquery'],function($){
    return {
        addButtonListener : function(){
            $(".panel-collapse").find(".select-btn")
                .each(function(){
                    $(this).on("click",function(){
                        var id = $(this).attr("id"),
                            infoArray = id.split("-");
                            console.log(infoArray);
                        window.location.href = 
                        "/index.php/Admin/Index/" + infoArray[0] + "List";
                    });
                });
        }
    }
});