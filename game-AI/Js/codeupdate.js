/**
 * Created by cui on 2015/11/29.
 */
define(['jquery'],function(){
    $("#submitCode").on("click",function(){
        var codeLang = $("select").val(),
            file = $("input").val();

        $.ajax({
            type : "post",
            url : "",
            dataType : 'json',
            data : {
                "codeLang" : codeLang,
                "file" : file
            }
        });
    });
});