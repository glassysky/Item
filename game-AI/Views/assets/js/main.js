requirejs.config({
    //forbid cache
    urlArgs: "bust=" + (new Date()).getTime(),

    //baseUrl: './',
    paths: {
        jquery: 'lib/jquery.min',
        bootstrap: 'lib/bootstrap.min',
        jquerycolor: 'lib/jquery.color',
        reg: 'reg',
        login: 'login',
        common: 'common',
        style: 'style',
        battle: 'battle',
        bootstrapSelect: 'lib/bootstrap-select',
        describe : 'describe',
        dividepage : 'dividepage',
        code : 'code',
        rank : 'rank',
        setting : 'setting'
    },
    shim: {
        'jquery' : { exports : 'jquery' },
        'bootstrap' : {
            deps : ['jquery'],
            exports : 'bootstrap'
        },
        'jquerycolor' : {
            deps : ['jquery'],
            exports : 'jquerycolor'
        }
    }
});

requirejs(['reg','login','common','rank','battle','code','setting','dividepage','style','bootstrap'],function(reg,login,common,rank,battle,code,setting){
    common.logStatus();
    common.logOut();

    var section = $("body").attr("id");

    switch(section){
        case "homepageLoc":
            break;
        case "previewLoc":
            break;
        case "rankLoc":
            rank.rankTable();
            rank.rankPK();
            break;
        case "battleLoc":
            battle.battleHistory();
            battle.fightWith();
            break;
        case "downLoc":
            break;
        case "noticeLoc":
            break;
        case "aboutLoc":
            break;
        case "logLoc":
            login.login();
            break;
        case "regLoc":
            reg.reg();
            break;
        case "settingLoc":
            setting.preFillInfo();
            setting.editInfo();
            break;
        case "codeLoc":
            code.codeVersion();
            code.submitCode();
            break;
        default:
            break;
    }
});
