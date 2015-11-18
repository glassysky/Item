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
        update : 'update',
        render : 'render'
    },
    shim: {
        
    }
});

requirejs(['jquery','app','render'],function($,app,render){
    app.btnClickListener();
    // $("header").css("display","none");
    // $(".select-part").css("display","none");
    // $(".prepare-part").css("display","none");
    // $(".flash-part").css("display","block");
    // render.makeNumberTable(100,10);
});