requirejs.config({
    //forbid cache
    urlArgs: "bust=" + (new Date()).getTime(),

    baseUrl: 'Js',
    paths: {
        jquery: 'lib/jquery.min',
        bootstrap: 'lib/bootstrap.min',
        jquerycolor: 'lib/jquery.color',
        reg: 'reg',
        style: 'style',
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

requirejs(['reg','style'],function(reg,style){
    reg.reg();
});
