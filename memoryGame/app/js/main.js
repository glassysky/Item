requirejs.config({
    //forbid cache
    urlArgs: "bust=" + (new Date()).getTime(),

    baseUrl: 'js',
    paths: {
        jquery : 'lib/jquery.min',
        bootstrap : 'lib/bootstrap.min',
        app : 'app',
        startGame : 'startGame',
        count : 'count',
        update : 'update'
    },
    shim: {
        
    }
});

requirejs(['jquery','app'],function($,app){
    app.btnClickListener();
});