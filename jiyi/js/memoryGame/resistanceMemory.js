/**
 * Created by cui on 2015/12/15.
 */
require.config({
    baseUrl : "/Public/js/memoryGame/",
    urlArgs: "bust=" + (new Date()).getTime(),//防止缓存
    paths : {
        "jquery" : "/Public/js/jquery.min",
        'init' : 'resistanceInit',
        'string' : 'resistanceString',
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