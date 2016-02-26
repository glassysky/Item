require.config({
    baseUrl : "/Public/js/memoryGame",
    urlArgs: "bust=" + (new Date()).getTime(),//防止缓存
    paths : {
        "jquery" : "/Public/js/jquery.min",
        'init' : 'numberInit',
        'string' : 'numberString',
        'common' : 'lib/common',
        'config' : 'lib/config',
        'createTier' : 'lib/createTier',
		'timeFunc' : 'lib/timeFunc'

    }
});

require(['common'],function(common){
    common.selectChangeLister();
    common.changeButton();
});