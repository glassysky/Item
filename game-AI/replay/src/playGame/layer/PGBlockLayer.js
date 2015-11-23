/**
 * Created by cui on 2015/11/21.
 */
/**
 * Created by cui on 2015/11/20.
 */

var PGBlockLayer = cc.Layer.extend({
    _sptPaperBlock : null,
    _sptWoodBlock : null,
    _sptStoneBlock : null,

    ctor : function(){
        this._super();

        //加载res 里的图片列表
        //cc.spriteFrameCache.addSpriteFrames(res.TextureTransparentPack_plist);

        this.initBlock();

        this.addJson();
    },

    initBlock : function(){

    },

    addJson : function(){
        var json = cc.loader.getRes(resJSON.Map_JSON);
        cc.log(json);
    }

})