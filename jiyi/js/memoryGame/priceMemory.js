/**
 * Created by cui on 2015/12/6.
 */
require.config({
    baseUrl : "/Public/js/memoryGame",
    urlArgs: "bust=" + (new Date()).getTime(),//防止缓存
    paths : {
        "jquery" : "/Public/js/jquery.min",
        'init' : 'priceInit',
        'string' : 'priceString',
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