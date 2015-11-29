/**
 * Created by cui on 2015/11/30.
 */
define(['jquery'],function(){
    return {
        battleChoose : function(){
            $(document).ready(function(){
                var str = "",
                    tpl = "",
                    length = 0;

                $.ajax({
                    type : 'post',
                    url : 'http://localhost/playai/test/enemy.json',
                    success : function(callback){
                        for(var i in callback){
                            if(callback.hasOwnProperty(i)){
                                length++;
                            }
                        }

                        for(var i = 1;i<length+1;i++){
                            tpl = "<option value='" + i + "'>" + callback[i] + "</option>";

                            str = str + tpl;
                        }

                        $("#enemy-choose").append(str);
                    },
                    error : function(){
                        console.log("失败");
                    }
                });
            });
        },
        battleHistory : function(){
            $(document).ready(function(){
                var str = "",
                    tpl = "",
                    lenght = 0;

                $.ajax({
                    type : 'post',
                    url : 'http://localhost/playai/test/battle.json',
                    success : function(callback){
                        var msg = callback["msg"];

                        console.log(msg);

                        for(var i = 0;i<msg.length;i++){
                            switch (msg[i].result){
                                case "1":
                                    msg[i].result = msg[i].uid + "胜";
                                    break;
                                case "0.5":
                                    msg[i].result = msg[i].oid + "胜";
                                    break;
                                case "0":
                                    msg[i].result = "平局";
                                    break;
                                default:
                                    break;
                            }

                            tpl = "<tr>"+
                                "<td>" + (i+1) + "</td>" +
                                "<td>" + msg[i].uid + "</td>" +
                                "<td>" + msg[i].oid + "</td>" +
                                "<td>" + msg[i].result + "</td>" +
                                "<td>" + msg[i].begintime + "</td>" +
                                "<td><a href='" + msg[i].process + "' class='btn btn-primary battle-replay' id='" + msg[i].id + "detail'>对战细节</a></td>" +
                                "</tr>";
                            str = str + tpl;
                        }

                        $("#battleTable").find("tbody").html(str);
                    },
                    error : function(){
                        console.log('error');
                    }
                });
            });
        },
        rank : function(){
            $(document).ready(function(){
                var str = "",
                    tpl = "",
                    length = 0;
                $.ajax({
                    type : 'post',
                    url : 'http://localhost/playai/test/rank.json',
                    success : function(callback){
                        var msg = callback["msg"];

                        for(var i = 0;i<msg.length;i++){
                            tpl = "<tr>" +
                                "<td>" + (i+1) + "</td>" +
                                "<td>" + msg[i].nickname + "</td>" +
                                "<td>" + msg[i].score + "</td>" +
                                "<td><a href='' class='btn btn-primary' id='" + msg[i].id + "PK'>PK一下</a></td>" +
                                "</tr>";
                            str = str + tpl;
                        }

                        $("#rankTable").find("tbody").append(str);
                    },
                    error : function(){
                        console.log("error");
                    }
                })
            });
        },
        codeVersion : function(){
            var str = "",
                tpl = "",
                length = 0;

            $.ajax({
                type : 'post',
                url : 'http://localhost/playai/test/codeversion.json',
                success : function(callback){
                    var msg = callback["msg"];

                    console.log(msg);

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
        uploadCode : function(){

            $("#submitCode").on("click",function(){
                var file = $("#file-select").val(),
                    filetype = $("#filetype-select").val();
                $.ajax({
                    type : 'post',
                    url : 'http://localhost/playai/game.php/User/Upload/userUpload',
                    dataType : 'json',
                    data : {
                        "file" : file,
                        "filetype" : filetype
                    },
                    success : function(callback){

                    }
                });
            });
        }
    }
});