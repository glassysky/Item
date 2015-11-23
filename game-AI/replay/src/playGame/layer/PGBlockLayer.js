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
    _sptMap : null,

    ctor : function(){
        this._super();

        //加载res 里的图片列表
        //cc.spriteFrameCache.addSpriteFrames(res.TextureTransparentPack_plist);

        this.addJson();

        this.initBlock();
    },

    addJson : function(){
        _sptMap = cc.loader.getRes(resJSON.Map_JSON);
        cc.log(_sptMap);
    },

    initBlock : function(){
        this._sptPaperBlock = new cc.Sprite(res.paperBlock);
        this._sptWoodBlock = new cc.Sprite(res.woodBlock);
        this._sptStoneBlock = new cc.Sprite(res.stoneBlock);
        this._sptPaperBlock.attr({
            anchorX : 0,
            anchorY : 0,
            x: 0,
            y: 0
        });
        this.addChild(this._sptPaperBlock);
    }

})