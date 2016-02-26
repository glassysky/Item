/**
 * Created by Administrator on 2015/11/26.
 */

define([],function(){
    var trainTypeAry = {
        "1" : "数字记忆",
        "2" : "字母记忆",
        "3" : "二进制记忆",
        "4" : "颜色记忆",
        "5" : "词语记忆",
        "6" : "抽象图形",
        "7" : "电阻记忆",
        "8" : "人名头像",
        "9" : "商品价格",
        "10" : "人物信息"
    }
    var trainTypeStr = {
        "1" : "numberMemory",
        "2" : "letterMemory",
        "3" : "binaryMemory",
        "4" : "colorMemory",
        "5" : "termsMemory",
        "6" : "abstractMemory",
        "7" : "resistanceMemory",
        "8" : "portraitMemory",
        "9" : "priceMemory",
        "10" : "infoMemory"
    }

    //训练数据初始化
    var trainInitConfig = new Array();
    //数字
    trainInitConfig[1] = {
        textPreg : /[^0-9]*/g,//只允用户输入的字符类型
        eachColNum : 2,//每列显示X个字符
        inputLength : 2,//允许输入框输入长度
        isInputJudge : true  //是否需要对输入框进行判断
    };
    //字母
    trainInitConfig[2] = {
        textPreg : /[^A-Za-z]*/g,
        eachColNum : 1,
        inputLength : 1,
        isInputJudge : true
    };
    //二进制
    trainInitConfig[3] = {
        textPreg : /[^0-1]*/g,
        eachColNum : 3,
        inputLength : 3,
        isInputJudge : true
    };
    //颜色
    trainInitConfig[4] = {
        textPreg : /[^A-Z]*/g,
        eachColNum : 1,
        inputLength : 1,
        isInputJudge : false
    };
    //词语
    trainInitConfig[5] = {
        textPreg : /[^A-Za-z\u4e00-\u9fa5]+$/g,
        eachColNum : 4,
        inputLength : 4,
        isInputJudge : false
    };
    //抽象图形
    trainInitConfig[6] = {
        textPreg : /[^1-5]*/g,
        eachColNum : 1,
        inputLength : 1,
        isInputJudge : true
    };
    //电阻
    trainInitConfig[7] = {
        textPreg : /[^1-5]*/g,
        eachColNum : 1,
        inputLength : 1,
        isInputJudge : true
    };
    //人物头像
    trainInitConfig[8] = {
        textPreg : /[^A-Za-z\u4e00-\u9fa5]+$/g,
        eachColNum : 1,
        inputLength : 20,
        isInputJudge : true
    };
    //价格
    trainInitConfig[9] = {
        textPreg : /[^0-9]*/g,
        eachColNum : 1,
        inputLength : 6,
        isInputJudge : true
    };
    //人物信息
    trainInitConfig[10] = {
        //textPreg : /[^A-Za-z0-9\u4e00-\u9fa5\uFE30-\uFFA0]+$/g,
        eachColNum : 1,
        //inputLength : 6,
        isInputJudge : true
    };

    var memoryTypeAry = {
        "1" : "倒计时",
        "2" : "正计时"
    }
    var widthCorreClass = {
        "1" : "widthFirst bfO",
        "2" : "widthTwo bfO",
        "4" : "widthF bfO",
        "5" : "widthFour bfO",
        "6" : "widthS bfO",
        "8" : "widthE bfO",
        "10" : "widthT bfO",
        "15" : "widthFifteen bfO",
        "20" : "widthTT bfT",
        "40" : "widthFT bfT",
    };//根据一行数量选择CLASS名字

    var mTCorreAT =  {
        "5" : "10",
        "60" : "180",
        "300" : "600",
        "600" : "1200",
        "900" : "1800"
    };//根据记忆时间选择答题时间
    var mNCorreAT =  {
        "30" : "60",
        "40" : "60",
        "60" : "120",
        "80" : "120",
        "120" : "180",
        "240" : "600",
        "300" : "600",
        "320" : "600",
        "360" : "600",
        "480" : "600",
        "900" : "3600",
        "1000" : "3600"
    };//根据记忆数量选择答题时间
    return {
        trainTypeAry : trainTypeAry,
        trainTypeStr : trainTypeStr,
        trainInitConfig : trainInitConfig,
        memoryTypeAry : memoryTypeAry,
        widthCorreClass : widthCorreClass,
        mTCorreAT : mTCorreAT,
        mNCorreAT : mNCorreAT,
        imgUrl : '/Public/image/memory/'
    }
});