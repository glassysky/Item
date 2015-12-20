/**
 * Created by cui on 2015/12/20.
 */
requirejs.config({
    urlArgs : "bust=" + (new Date()).getTime(),

    baseUrl : "/Public/js",

    paths : {
        jquery : "lib/jquery.min",
        bootstrap : "lib/bootstrap.min",
        Init : "Home/indexInit"
    },

    shim : {
        'bootstrap' : {
            deps : ['jquery']
        }
    }
});

requirejs(['Init','jquery','bootstrap'],function(Init){

});