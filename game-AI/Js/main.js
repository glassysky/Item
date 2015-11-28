requirejs.config({
    //forbid cache
    urlArgs: "bust=" + (new Date()).getTime(),

    //baseUrl: '/game-AI/Js',
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
        describe : 'describe'
    },
    shim: {
        'jquery' : { exports : 'jquery' },
        'bootstrap' : { exports : 'bootstrap' },
        'jquerycolor' : {
            deps : ['jquery'],
            exports : 'jquerycolor'
        }
    }
});

requirejs(['reg','login','style','battle'],function(reg,login,style){
    reg.reg();
    login.login();
});
