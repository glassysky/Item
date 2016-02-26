/**
 * Created by Administrator on 2015/11/26.
 */

define(['jquery','init','string','config','timeFunc'],function($,init,stringObj,CONFIG,timeFunc){
    var memoryAry = [];
    var tempAry = [];
    var playerAnswer = [];
    var priceAry = [];
    var rightCount = 0;
    var score = 0;
    var personMsg = null;
    var personCollect = null;
    var personTempAry = [];

    return {
        /*
        ** parmar element 要插入所在的父节点
        ** parmar type 1 = 显示随机  2=显示输入框 3=对比
         */
        createBox : function(element,Rowi,Colj,type){
            var getInputLength = CONFIG.trainInitConfig[init.trainType].eachColNum;
            var Rowi = parseInt(Rowi) ? parseInt(Rowi) : 1;
            var Colj = parseInt(Colj  / getInputLength) ? parseInt(Colj / getInputLength) : 10;
            var HTML = "";

            var className = CONFIG.widthCorreClass[Colj];
            HTML += '<div class="memory-number" id="memory-number" >';
            switch(type){
                case 1 :
                    HTML += this.createBox_startMemory(element,Rowi,Colj,className,getInputLength);
                break;
                case 2 :
                    HTML += this.createBox_startAnswer(element,Rowi,Colj,className,getInputLength);
                break;
                case 3 :
                    HTML += this.createBox_compare(element,Rowi,Colj,className,getInputLength);
                break;
                default:
                    HTML += this.createBox_startMemory(element,Rowi,Colj,className,getInputLength);
                break;
            }
            HTML += '</div>';
            element.html(HTML);
            var getWidth = element.children().find("div:eq(0)").width();
            switch(init.trainType){
                case 5 :
                    var Split = getInputLength >= 2 ? parseFloat(getInputLength - 2) : getInputLength;
                    $("#memory-number").find("div").css({"height":parseInt(getWidth / Split) + "px"});
                    break;
                case 1 :
                    var Split = Colj ==20 ? 1 : 2;
                    $("#memory-number").find("div").css({"height":parseInt(getWidth / Split) + "px"});
                    break;
                case 4 :
                    $("#memory-number").find("div").css({"height":parseInt(getWidth / 2) + "px"});
                    break;
                case 6 :
                case 7 :
                case 8 :
                case 9 :
                    if(init.trainType == 8 && Colj == 2){
                        $("#memory-number").find("div").css({"font-size":"1em"});
                    }
                    $("#memory-number").find("div").find(".memory-input").css({"height":"40px","line-height":"40px"});
                    break;
                case 10:
                    break;
                default:
                    var Split = getInputLength > 2 ? 2 : getInputLength;
                    $("#memory-number").find("div").css({"height":parseInt(getWidth / Split) + "px"});
                    break;
            }
            return false;
        },
        createBox_startMemory : function(element,Rowi,Colj,className,getInputLength){
            var i, j;
            var HTML = "";
            switch (init.trainType){
                case 10 :
                    personMsg = stringObj.personInfo.msg;
                    break;
            }

            for(i = 0;i < Rowi;i++){
                for(j = 0;j < Colj;j++){
                    switch(init.trainType){
                        case 4 :
                            var inputText = this.getInputText(getInputLength);
                            memoryAry.push('color-'+inputText);
                            HTML += '<div class="'+ className +' color-'+inputText+'"></div>';
                            break;
                        case 6 :
                        case 7 :
                            var inputText = this.getInputText(init.inputLength);
                            var imgSrc = stringObj.getImageUrl(inputText);
                            memoryAry[i*Colj+j] = inputText;
                            HTML += "<div class='" + className + "' data-img='" + inputText + "'><img src='" + imgSrc + "' alt=''><div class='memory-input input-readonly'>"+ (j+1) + "</div></div>";
                            //每五个一组打乱之后放在tempAry里
                            if(j == 0){
                                tempAry[i] = [];
                            }
                            tempAry[i][j] = inputText;
                            tempAry[i].sort(function(){
                                return 0.2-Math.random();
                            });
                            break;
                        case 8 :
                            var inputText = this.getInputText(init.inputLength);
                            var imgSrc = stringObj.getImageUrl(inputText);
                            var inputName = stringObj.getInputName();
                            memoryAry[inputText] = inputName;
                            HTML += "<div class='" + className + "' data-img='" + inputText + "'><img src='" + imgSrc + "' alt=''><div class='memory-input input-readonly'>"+ inputName + "</div></div>";
                            var crTotal = parseInt((Colj-1)*(Rowi-1));
                            if(i*j == crTotal){
                                var countImg = 0;
                                for(var x in memoryAry){
                                    tempAry[countImg] = x;
                                    countImg++;
                                }
                            }
                            break;
                        case 9 :
                            var priceRandom = stringObj.getRandomPrice();
                            var inputText = this.getInputText(init.inputLength);
                            var imgSrc = stringObj.getImageUrl(inputText);
                            //放入图片对应价格
                            priceAry[inputText] = priceRandom;
                            HTML += "<div class='" + className + "' data-img='" + inputText + "'><img src='" + imgSrc + "' alt=''><div class='memory-input input-readonly'>￥"+ priceRandom + "</div></div>"
                            tempAry[i*Colj+j] = inputText;
                            break;
                        case 10 :
                            var inputText = this.getInputText(init.inputLength);
                            var imgSrc = stringObj.getImageUrl(inputText);
                            memoryAry.push(inputText);
                            tempAry.push(inputText);
                            HTML += "<div class='" + className + " memory-info-wrap' data-img='" + inputText + "'>" +
                                    "<div class='info-img-wrap'><img src='" + imgSrc + "' alt=''></div>" +
                                    "<div class='memory-input input-readonly'>"+
                                    "<div class='info-name'>姓名：" + personMsg[inputText-1].name  + "</div>" +
                                    "<div class='info-nationality'>国籍：" + personMsg[inputText-1].nationality  + "</div>" +
                                    "<div class='info-birth'>生日：" + personMsg[inputText-1].birth  + "</div>" +
                                    "<div class='info-achieve'>成就：" + personMsg[inputText-1].achieve  + "</div>" +
                                    "<div class='info-saying'>名言：" + personMsg[inputText-1].saying  + "</div>" +
                                "</div>" +
                                "</div>";
                            break;
                        default :
                            HTML += '<div class="'+ className +'">';
                            var inputText = this.getInputText(getInputLength);
                            memoryAry.push(inputText);
                            HTML += '<input type="text" class="memory-input input-readonly" value="'+inputText+'" readonly>';
                            HTML += '</div>';
                        break;
                    }
                }

            }
            switch(init.trainType){
                //所有数组打乱顺序
                case 9 :
                    tempAry = tempAry.sort(function(){
                        return 0.5 - Math.random();
                    });
                    //根据打乱顺序后的数组整理价格数组顺序
                    var tempLen = tempAry.length;
                    for(i = 0;i < tempLen;i++){
                        memoryAry[i] = priceAry[tempAry[i]];
                    }
                    break;
                case 10 :
                    tempAry = tempAry.sort(function(){
                        return 0.5 - Math.random();
                    });
                    //展开tempAry->personTempAry
                    for(var m = 0;m<tempAry.length;m++){
                        personTempAry[m] = [];
                        for(var n in personMsg[tempAry[m]-1]){
                            personTempAry[m].push(personMsg[tempAry[m]-1][n]);
                        }
                    }
                    break;

            }
            return HTML;
        },
        createBox_startAnswer : function(element,Rowi,Colj,className,getInputLength){
            var i, j;
            var HTML = "";
            var limitLength = CONFIG.trainInitConfig[init.trainType].inputLength;
            for(i = 0;i < Rowi;i++){
                for(j = 0;j < Colj;j++){
                    switch(init.trainType){
                        case 4:
                            HTML += '<div class="'+ className +'"><a href="javascript:void(0);" class="colorInput memory-input" color=""></a></div>';
                        break;
                        case 6:
                        case 7:
                            var imgSrc = stringObj.getImageUrl(tempAry[i][j]);
                            HTML += "<div class='"+ className +" img-"+memoryAry[i][j]+"'><img src='" + imgSrc + "' alt=''><input class='memory-input input' type='text' maxlength='" + limitLength + "'></div>";
                        break;
                        case 8:
                            var imgSrc = stringObj.getImageUrl(tempAry[i*Colj + j]);
                            HTML += "<div class='"+ className +"'><img src='" + imgSrc + "' alt=''><input class='memory-input input' type='text'></div>";
                            break;
                        case 9:
                            var imgSrc = stringObj.getImageUrl(tempAry[i*Colj+j]);
                            HTML += "<div class='"+ className +" img-"+tempAry[i*Colj+j]+"'><img src='" + imgSrc + "' alt=''><div class='memory-input input'>￥<input class='memory-price-width' type='text' maxlength='" + limitLength + "'></div></div>";
                            break;
                        case 10 :
                            var imgSrc = stringObj.getImageUrl(tempAry[i*Colj + j]);
                            HTML += "<div class='" + className + " memory-info-wrap'>" +
                                "<div class='info-img-wrap'><img src='" + imgSrc + "' alt=''></div>" +
                                "<div class='memory-input input-readonly'>"+
                                "<div class='info-id'><input value='" + tempAry[i*Colj + j] + "' class='id-record'></div>" +
                                "<div class='info-name'>姓名：<input class='memory-info-input' type='text' maxlength='" + limitLength + "'></div>" +
                                "<div class='info-nationality'>国籍：<input class='memory-info-input' type='text' maxlength='" + limitLength + "'></div>" +
                                "<div class='info-birth'>生日：<input class='memory-info-input' type='text' maxlength='" + limitLength + "'></div>" +
                                "<div class='info-achieve'>成就：<input class='memory-info-input' type='text' maxlength='" + limitLength + "'></div>" +
                                "<div class='info-saying'>名言：<input class='memory-info-input' type='text' maxlength='" + limitLength + "'></div>" +
                                "</div>" +
                                "</div>";
                            break;
                        default :
                            HTML += '<div class="'+ className +'">';
                            HTML += '<input type="text" name="newMemory_' + i + '_' + j +'" class="memory-input input" value="" maxlength='+limitLength;
                            if(init.trainType == 2){
                                HTML += 'style=" text-transform: uppercase"';
                            }
                            HTML += ' > ';
                            HTML += '</div>';
                        break;
                    }

                }
            }
            return HTML;
        },
        createBox_compare : function(element,Rowi,Colj,className,getInputLength){
            var i, k;
            var HTML = "";
            var rightCount = [];
            var eachRightNum = 0;
            var zhName = ["姓名","国籍","生日","成就","名言"];
            var enName = ["name","nationality","birth","achieve","saying"];
            for(i = 0;i < Rowi;i++){
                for(k = 0;k < Colj;k++){
                    var kindex =  parseInt(i * Colj + k);
                    var isRight = 1;
                    switch(init.trainType){
                        case 6 :
                        case 7 :
                            if(playerAnswer[kindex] == "" || memoryAry[(playerAnswer[kindex]-1)+Colj*i] != tempAry[i][kindex-Colj*i] || playerAnswer[kindex]==undefined){
                                isRight = 0;
                            }
                            break;
                        case 8 :
                            if(playerAnswer[kindex] == "" || memoryAry[tempAry[kindex]] != playerAnswer[kindex] || playerAnswer[kindex]==undefined){
                                isRight = 0;
                            }
                            break;
                        case 10 :
                            //console.log(playerAnswer);
                            //console.log(personTempAry);
                            isRight = 0;
                            rightCount = [];
                            eachRightNum = 0;
                            for(var s = 1;s<6;s++){
                                if(personTempAry[kindex][s] == playerAnswer[kindex*6+s]){
                                    rightCount[s] = 1;
                                    eachRightNum++;
                                } else {
                                    rightCount[s] = 0;
                                }
                            }
                            if(eachRightNum == 5){
                                isRight = 1;
                            }
                            //console.log(isRight);
                            break;
                        default :
                            if(playerAnswer[kindex] == "" || playerAnswer[kindex] != memoryAry[kindex] || playerAnswer[kindex]==undefined){
                                isRight = 0;
                            }
                            break;
                    }
                    //计算得分
                    if(isRight){
                        rightCount++;
                        switch(init.trainType){
                            case 6:
                            case 7:
                                if(parseInt(rightCount / Colj) == 1){
                                    score += 1;
                                }
                                if(k == (Colj - 1)){
                                    rightCount = 0;
                                }
                                break;
                            case 5 :
                            case 10 :
                                score++;
                                break;
                            default:
                                score += getInputLength;
                                break;

                        }
                    }
                    switch(init.trainType){
                        case 4 :
                            HTML += '<div class="'+ className +' '+memoryAry[kindex]+'"></div>';
                            continue;
                            break;
                        case 10 :
                            HTML += '<div class="'+ className +' memory-info-wrap">';
                            break;
                        default : {
                            HTML += '<div class="'+ className +'">';
                        }
                    }

                    if(!isRight){
                        switch(init.trainType){
                            case 6 :
                            case 7 :
                                rightCount = 0;//一行中其中一个答错不得分
                                var value = 0;
                                for(var m = 0;m < Colj;m++){
                                    if(memoryAry[i*Colj+m] == tempAry[i][k]){
                                        value = m+1;
                                    }
                                }
                                var imgSrc = stringObj.getImageUrl(tempAry[i][k]);
                                HTML += "<img src='" + imgSrc + "' alt=''>";
                                HTML += '<input type="text" name="" class="memory-input input-error" value="'+ value +'" readonly>';
                                break;
                            case 8 :
                                //rightCount = 0;//一行中其中一个答错不得分
                                var imgSrc = stringObj.getImageUrl(tempAry[i*Colj + k]);
                                HTML += "<img src='" + imgSrc + "' alt=''>";
                                HTML += '<input type="text" name="" class="memory-input input-error" value="'+ memoryAry[tempAry[i*k + k]] +'" readonly>';
                                break;
                            case 9 :
                                var imgSrc = stringObj.getImageUrl(tempAry[kindex]);
                                HTML += "<img src='" + imgSrc + "' alt=''>";
                                HTML += '<input type="text" name="" class="memory-input input-error" value="￥'+ memoryAry[kindex] +'" readonly>';
                                break;
                            case 10 :
                                var imgSrc = stringObj.getImageUrl(personTempAry[kindex][0]);
                                HTML +=
                                    "<div class='info-img-wrap'><img src='" + imgSrc + "' alt=''></div>" +
                                    "<div class='memory-input input-readonly'>"+
                                    "<div class='info-id'><input value='" + tempAry[i*Colj + k] + "' class='id-record'></div>";
                                for(var s = 1;s<6;s++){
                                    if(rightCount[s] == 1){
                                        HTML += "<div class='info-" + enName[s-1] + " input-right'>" + zhName[s-1] + "：" + personTempAry[kindex][s] + "</div>";
                                    } else {
                                        HTML += "<div class='info-" + enName[s-1] + " input-error'>" + zhName[s-1] + "：" + personTempAry[kindex][s] + "</div>";
                                    }
                                }
                                HTML += "</div>";
                                break;
                            default :
                                HTML += '<input type="text" name="" class="memory-input input-error" value="'+memoryAry[kindex]+'" readonly>';
                                break;
                        }

                    }else{
                        switch(init.trainType) {
                            case 6 :
                            case 7 :
                                var value = 0;
                                for (var m = 0; m < Colj; m++) {
                                    if (memoryAry[i * Colj + m] == tempAry[i][k]) {
                                        value = m + 1;
                                    }
                                }
                                var imgSrc = stringObj.getImageUrl(tempAry[i][k]);
                                HTML += "<img src='" + imgSrc + "' alt=''>";
                                HTML += '<input type="text" name="" class="memory-input input-right" value="' + value + '" readonly>';
                                break;
                            case 8 :
                                var imgSrc = stringObj.getImageUrl(tempAry[i*Colj + k]);
                                HTML += "<img src='" + imgSrc + "' alt=''>";
                                HTML += '<input type="text" name="" class="memory-input input-right" value="'+ memoryAry[tempAry[i*5 + k]] +'" readonly>';
                                break;
                            case 9 :
                                var imgSrc = stringObj.getImageUrl(tempAry[kindex]);
                                HTML += "<img src='" + imgSrc + "' alt=''>";
                                HTML += '<input type="text" name="" class="memory-input input-right" value="￥' + memoryAry[kindex] + '" readonly>';
                                break;
                            case 10 :
                                //console.log(tempAry[kindex]);
                                var imgSrc = stringObj.getImageUrl(personTempAry[kindex][0]);
                                HTML +=
                                    "<div class='info-img-wrap'><img src='" + imgSrc + "' alt=''></div>" +
                                    "<div class='memory-input input-readonly'>"+
                                    "<div class='info-id'><input value='" + tempAry[i*Colj + k] + "' class='id-record'></div>" +
                                    "<div class='info-name input-right'>姓名：" + personTempAry[kindex][1] + "</div>" +
                                    "<div class='info-nationality input-right'>国籍：" + personTempAry[kindex][2] + "</div>" +
                                    "<div class='info-birth input-right'>生日：" + personTempAry[kindex][3] + "</div>" +
                                    "<div class='info-achieve input-right'>成就：" + personTempAry[kindex][4] + "</div>" +
                                    "<div class='info-saying input-right'>名言：" + personTempAry[kindex][5] + "</div>" +
                                    "</div>";
                                break;
                            default :
                                HTML += '<input type="text" name="" class="memory-input input-right" value="' + memoryAry[kindex] + '" readonly>';
                                break;
                        }
                    }
                    HTML += '</div>';

                }
                for(k = 0;k < Colj;k++){
                    var kindex =  parseInt(i * Colj + k);
                    switch(init.trainType){
                        case 4 :
                            if(playerAnswer[kindex] == "" || playerAnswer[kindex]==undefined){
                                HTML += '<div class="'+ className +' color-ashy"></div>';
                            }else{
                                HTML += '<div class="'+ className +' '+playerAnswer[kindex]+'"></div>';
                            }
                            break;
                        case 9:
                            HTML += '<div class="' + className + '">';
                            HTML += '<input type="text" name="" class="memory-input input" value="￥' + playerAnswer[kindex] + '" readonly>';
                            HTML += '</div>';
                            break;
                        case 10 :
                            var imgSrc = stringObj.getImageUrl(personTempAry[kindex][0]);
                            HTML += "<div class='" + className + " memory-info-wrap'>" +
                                "<div class='info-img-wrap'><img src='" + imgSrc + "' alt=''></div>" +
                                "<div class='memory-input input-readonly'>"+
                                "<div class='info-id'><input value='" + tempAry[i*Colj + k] + "' class='id-record'></div>" +
                                "<div class='info-name'>姓名：" + playerAnswer[kindex*6+1] + "</div>" +
                                "<div class='info-nationality'>国籍：" + playerAnswer[kindex*6+2] + "</div>" +
                                "<div class='info-birth'>生日：" + playerAnswer[kindex*6+3] + "</div>" +
                                "<div class='info-achieve'>成就：" + playerAnswer[kindex*6+4] + "</div>" +
                                "<div class='info-saying'>名言：" + playerAnswer[kindex*6+5] + "</div>" +
                                "</div>" +
                                "</div>";
                            break;
                        default :
                            HTML += '<div class="' + className + '">';
                            HTML += '<input type="text" name="" class="memory-input input" value="' + playerAnswer[kindex] + '" readonly>';
                            HTML += '</div>';
                            break;
                    }

                }

            }

            return HTML;
        },
        /*
        ** parmar element 节点
        * 收集答案
         */
        collectAnswer : function(element){
            var inputs = element.find("input");
            var inputTextLength = inputs.length;
            var j = 0;
            switch(init.trainType){
                case 2:
                    for(var i = 0; i < inputTextLength;i++) {
                        var val = this.trim(inputs[i].value);
                        playerAnswer.push(val.toLocaleUpperCase());
                    }
                    break;
                case 4:
                    var a = element.find(".colorInput");
                    var aTextLength = a.length;

                    for(var i = 0; i < aTextLength;i++) {
                        var val = this.trim(element.find(".colorInput:eq("+i+")").attr("color"));
                        playerAnswer.push(val);
                    }
                    break;
                default:
                    for(var i = 0; i < inputTextLength;i++) {
                        var val = this.trim(inputs[i].value);
                        playerAnswer.push(val);
                    }


            }

        },

        //去掉前后空格
        trim : function(str){
            return str.replace(/(^\s*)|(\s*$)/g, "");
        },
        //获取字符串
        getInputText : function(lenth){
            var inputText = "";
            if(init.trainType == 5){
                inputText = stringObj.getRandomText().toString();
            } else{
                var l;
                var lenth = parseInt(lenth) ? parseInt(lenth) : 1;
                for(l = 0;l < lenth;l++){
                    inputText += stringObj.getRandomText().toString();
                }
            }

            return inputText;
        },
        //成绩记录层
        createScoreHtml : function(element,memoryType,memoryTime,memoryNumber){
            var $gamehead = $("#gamehead");
            $gamehead.html("成绩记录").addClass("scorehead");
            var scoreName = "得分";
            switch(init.trainType){
                case 6:
                case 7:
                //case 8:
                //case 9:
                    memoryNumber = parseInt(memoryNumber/5);
                    scoreName = "正确行数";break;

            }
            var tpl = "<div id='score-wrap'>" +
                "<div class='train-item info-wrap'>" +
                "<div class='info-head'>训练项目</div>" +
                "<div class='info-body'>" + CONFIG.trainTypeAry[init.trainType] + "</div>" +
                "</div>" +
                "<div class='train-way-info info-wrap'>" +
                "<div class='info-head'>训练方式</div>" +
                "<div class='info-body'>" + CONFIG.memoryTypeAry[memoryType] + "</div>" +
                "</div>" +
                "<div class='momory-time-info info-wrap'>" +
                "<div class='info-head'>记忆时间</div>" +
                "<div class='info-body'>" + timeFunc.getTimeStr(memoryTime) + "</div>" +
                "</div>" +
                "<div class='momory-number-info info-wrap'>" +
                "<div class='info-head'>记忆数量</div>" +
                "<div class='info-body'>" + this.setAmountUnit(memoryNumber) + "</div>" +
                "</div>" +
                "<div class='correct-number info-wrap'>" +
                "<div class='info-head'>"+scoreName+"</div>" +
                "<div class='info-body'>" + this.setScoreUnit(score) + "</div>" +
                "</div>" +
                "<div class='button-wrap info-wrap'>" +
                "<a class='btn btn-primary' id='confirm-record'>确认记录</a>" +
                    //"<a class='btn btn-default' id='cancel-record'>取消记录</a>" +
                "<button type='button' class='btn btn-default' data-toggle='modal' data-target='#gameModal'>取消记录</button>"+
                "</div>" +
                "</div>";

            element.html(tpl);
            var info = {
                score :　score,
            };
            return info;
        },
        setAmountUnit : function(amount){
            switch (init.trainType){
                case 6:
                case 7:
                    amount = amount + "行";
                    break;
                default:
                    amount = amount + "个";
            }
            return amount;
        },
        setScoreUnit : function(score){
            switch (init.trainType){
                case 6:
                case 7:
                    score = score + "行";
                    break;
                default:
                    score = score + "分";
            }
            return score;
        }

    }
});
