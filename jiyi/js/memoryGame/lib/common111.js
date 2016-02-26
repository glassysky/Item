define(['jquery','init','createTier','config','timeFunc'],function($,init,createObj,CONFIG,timeFunc){
    var timeKeepflag;//计时变量
    var memoryTime,saveMemoryTime,answerTime,saveAnswerTime;//各种选择项
    var $memoryForm = $("#memoryForm"),
        $memoryBox = $("#memory-box"),
        $timer = $("#timeing");
    var memoryNumber,colNumber,memoryTypeVal,memoryTime,inputNumber;
    var Rowi,Colj,info;//X行X列
    var getInputLength = CONFIG.trainInitConfig[init.trainType].inputLength;
    return {
        getMemoryData : function(){
            memoryNumber = $("#memoryNumber").val();
            colNumber = $("#colNumber").val();
            memoryTypeVal = $("#memoryType").val();
            memoryTime = $("#memoryTime").val();
            inputNumber = $("#inputNumber").val();

        },
        //清除HTML
        clearHtml : function(selector){
            selector.html("");
        },
        //时间初始化
        initTime : function(){
            $timer.html("00:00");
        },
        //清除时间
        stopMtime : function(){
            clearInterval(timeKeepflag);
        },

        //解除当前绑定事件而修改按钮名字
        updateButtonEvent : function(obj,idName,text){
            obj.off("click");
            obj.attr("id",idName);
            obj.html(text);
        },
        //设置各种选项为禁用
        selectDisabled : function(){
            $memoryForm.find("select").attr("disabled","disabled");
        },
        //记忆倒计时
        countDownMemoryTime : function(){
            var self = this;
            timeKeepflag = setInterval(function(){
                if(memoryTime < 0){
                    self.stopMtime();
                    self.clearHtml($memoryBox);
                    self.updateButtonEvent($memoryForm.find(".submit"),"endAnsweryBtn","确认答题");
                    createObj.createBox($memoryBox,Rowi,Colj,2);
                    self.countDownAnswertime();

                    return false;
                }
                $timer.html(timeFunc.getTimeMinute(memoryTime) + ":" + timeFunc.getTimeSecond(memoryTime));
                memoryTime = memoryTime - 1;
            },1000);
            return timeKeepflag;

        },
        //答题倒计时
       countDownAnswertime : function(){
           var self = this;
           timeKeepflag = setInterval(function(){
               if(answerTime < 0){
                   self.stopMtime();
                   createObj.collectAnswer($memoryBox);
                   self.clearHtml($memoryBox);
                   self.updateButtonEvent($memoryForm.find(".submit"),"scoreBtn","提交成绩");
                   createObj.createBox($memoryBox,Rowi,Colj,3);

                   return false;
               }
               $timer.html(timeFunc.getTimeMinute(answerTime) + ":" + timeFunc.getTimeSecond(answerTime));
               answerTime = answerTime - 1;
            },1000);
            return timeKeepflag;
        },
        //记忆正计时
        countUpMemoryTime : function(){
            timeKeepflag = setInterval(function(){
                $timer.html(timeFunc.getTimeMinute(memoryTime) + ":" + timeFunc.getTimeSecond(memoryTime));
                memoryTime = memoryTime + 1;
            },1000);
            return timeKeepflag;
        },
        //输入框事件
        inputTextLister : function(){
           
            var inputs = $memoryBox.find("input");
            var inputTextLength = inputs.length;
            if(inputTextLength > 0){
                inputs[0].focus();
				if(!CONFIG.trainInitConfig[init.trainType].isInputJudge){
					return false;
				}
                for(var i = 0; i < inputTextLength;i++) {
                    var t = inputs[i];
                    t.index = i;
                    t.onkeyup = function (e) {
                        this.value = this.value.replace(CONFIG.trainInitConfig[init.trainType].textPreg,'');
                        if(e.keyCode == 8){
                            var last = this.index - 1;
                            if (last < 0) return;
                            if(this.value == ""){
                                inputs[last].focus();
                            }
                        }else{
                            var next = this.index + 1;
                            if (next > inputTextLength - 1) return;
                            if(this.value.length >= getInputLength){
                                inputs[next].focus();
                            }
                        }

                    }
                }
            }

        },
        selectChangeLister : function(){

            $memoryForm.find("select").removeAttr("disabled");
            var $memoryType = $("#memoryType");
            if($memoryType.val() == 2){
                $memoryForm.find(">div:eq(1)").hide();
            }
            $memoryType.change(function(){

                if($(this).val() == 2){
                    $memoryForm.find(">div:eq(1)").hide();
                }else{
                    $memoryForm.find(">div:eq(1)").show();
                }
            });


        },

        //监听各种按钮事件
        changeButton : function(){
            var self = this;

            $memoryForm.on("click","#startMemoryBtn",function(){
                self.getMemoryData();
                self.selectDisabled();
                Rowi = parseInt(memoryNumber / colNumber);
                Colj = parseInt(colNumber);
                self.clearHtml($memoryBox);
                createObj.createBox($memoryBox,Rowi,Colj,1);
                self.updateButtonEvent($(this),"stratAnsweryBtn","开始答题");
                answerTime = memoryTypeVal == 2 ?  CONFIG.mNCorreAT[memoryNumber] : CONFIG.mTCorreAT[memoryTime];
                saveAnswerTime = answerTime;
                if(memoryTypeVal == 1){
                    saveMemoryTime = memoryTime;
                    self.countDownMemoryTime();
                }else{
                    memoryTime = 0;
                    self.countUpMemoryTime();
                }

                return false;
            });
            //$memoryForm.on("click","#endMemoryBtn",function(){
            //    this.stopMtime();
            //    this.clearHtml($memoryForm);
            //    this.initTime();
            //    saveMemoryTime -= memoryTime;
            //    console.log("结束记忆+花掉时间:"+saveMemoryTime);
            //    clearMemoryBoxHtml();
            //    updateBtn($(this),"stratAnsweryBtn","开始答题");
            //    return false;
            //});
            $memoryForm.on("click","#stratAnsweryBtn",function(){
                //console.log(answerTime);
                self.stopMtime();
                if(memoryTypeVal == 1){
                    saveMemoryTime -= memoryTime;
                }else{
                    saveMemoryTime = memoryTime;
                }

                self.initTime();
                createObj.createBox($memoryBox,Rowi,Colj,2);
                self.inputTextLister();
                self.updateButtonEvent($(this),"endAnsweryBtn","确认答题");
                self.countDownAnswertime();
                if(init.trainType == 4){
                    $(window).click(function(e){
                        e.stopPropagation();
                        e.preventDefault();

                        $("#colorBox").remove();
                        return false;
                    });
                }
                return false;
            });
            $memoryForm.on("click","#endAnsweryBtn",function(){
                if(init.trainType == 4){
                    $(window).off("click");
                }
                self.stopMtime();
                createObj.collectAnswer($memoryBox);
                self.initTime();
                self.clearHtml($memoryBox);
                saveAnswerTime -= answerTime;
                createObj.createBox($memoryBox,Rowi,Colj,3);
                self.updateButtonEvent($(this),"scoreBtn","提交成绩");
                return false;
            });
            $memoryForm.on("click","#scoreBtn",function(){


                self.clearHtml($memoryBox);
                info = createObj.createScoreHtml($memoryBox,memoryTypeVal,saveMemoryTime,memoryNumber);
                return false;
            });
            $memoryBox.on("click","#confirm-record",function(){
                $.ajax({
                    url : '',
                    type : "POST",
                    dataType : "json",
                    data : {
                        "memoryType" : memoryTypeVal,
                        "memoryTime" : saveMemoryTime,
                        "memoryNumber" : memoryNumber,
                        "rightCount" : info.score,

                    },
                    success : function(){
                        alert("传递给后台");
                        window.location.href = "memoryGame.php";
                    },
                    error : function(back){
                        console.log(back);
                    }
                });
            });
        }



    }
});