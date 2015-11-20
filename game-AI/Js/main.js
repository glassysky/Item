requirejs.config({
    //forbid cache
    urlArgs: "bust=" + (new Date()).getTime(),

    baseUrl: '/game-AI/Js',
    paths: {
        jquery: 'lib/jquery.min',
        bootstrap: 'lib/bootstrap.min',
        jquerycolor: 'lib/jquery.color',
        reg: 'reg',
        style: 'style',
        battle: 'battle',
        bootstrapSelect: 'lib/bootstrap-select'
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

requirejs(['reg','style','battle'],function(reg,style){
    reg.reg();
});
