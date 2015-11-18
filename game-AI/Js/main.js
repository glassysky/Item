requirejs.config({
    //forbid cache
    urlArgs: "bust=" + (new Date()).getTime(),

    baseUrl: 'Js',
    paths: {
        jquery: 'lib/jquery.min',
        bootstrap: 'lib/bootstrap.min',
        reg: 'reg'
    },
    shim: {
        'jquery' : { exports : 'jquery' },
        'bootstrap' : { exports : 'bootstrap' },
    }
});

requirejs(['reg'],function(reg){
    reg.reg();
});
