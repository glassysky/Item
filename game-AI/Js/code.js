/**
 * Created by cui on 2015/11/29.
 */
define(['jquery'],function($){

    return {
        codeVersion : function(){
            var str = "",
                tpl = "",
                length = 0;

            $.ajax({
                type : 'post',
                url : 'http://bomb.play.cn/User/Upload/getFile',
                success : function(callback){
                    var msg = callback["msg"];

                    for(var i = 0;i<msg.length;i++){
                        tpl = "<div class='ver-item'>" +
                            "<div class='ver-pic'>" +
                            "<p>" + msg[i].filename + "</p>" +
                            "</div>" +
                            "<div class='ver-detail'>" +
                            "<span>版本详细信息：</span>" +
                            "<span>编程语言：" + msg[i].filetype + "</span>" +
                            "<span>文件大小：" + msg[i].filesize + "</span>" +
                                //"<span>提交日期：2015/10/23</span>" +
                                //"<span>对战次数：20</span>" +
                                //"<span>获胜次数：10</span>" +
                                //"<span>Commit: Init. Commit.</span>" +
                            "</div>" +
                            "</div>";

                        str = str + tpl;
                    }

                    $("#verlist").append(str);
                    $("#currentVersion").html("Ver " + msg.length + ".0");
                }
            });
        },
        submitCode : function(){
            $("#submitCode").on("click",function(){
                var codeFile = $("#file-select").val(),
                    codeType = $("#filetype-select").val();

                if(codeFile && codeType){
                    $("form").submit();
                } else if (!codeFile){
                    alert("请选择文件");
                } else if (!codeType){
                    alert("请选择语言类型");
                }
            });
        }
    }

});