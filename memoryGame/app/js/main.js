requirejs.config({
    //forbid cache
    urlArgs: "bust=" + (new Date()).getTime(),

    baseUrl: 'js',
    paths: {
        jquery : 'lib/jquery.min',
        bootstrap : 'lib/bootstrap.min',
        app : 'app'
    },
    shim: {
        
    }
});

requirejs(['jquery','app'],function($,init,render,update){

});