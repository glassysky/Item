/**
 * Created by cui on 2015/12/16.
 */
require.config({
    baseUrl : "/Public/js/memoryGame",
    urlArgs: "bust=" + (new Date()).getTime(),//防止缓存
    paths : {
        "jquery" : "/Public/js/jquery.min",
        'init' : 'portraitInit',
        'string' : 'portraitString',
        'config' : 'lib/config',
        'common' : 'lib/common',
        'createTier' : 'lib/createTier',
        'timeFunc' : 'lib/timeFunc'

    }
});

require(['common'],function(common){
    common.selectChangeLister();
    common.changeButton();
});