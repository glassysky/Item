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
        this._sptMap = cc.loader.getRes(resJSON.Map_JSON);
        //cc.log(this._sptMap.map[0]["line1"][0]);
    },

    initBlock : function(){
        this._sptPaperBlock = new cc.Sprite(res.paperBlock);
        this._sptWoodBlock = new cc.Sprite(res.woodBlock);
        this._sptStoneBlock = new cc.Sprite(res.stoneBlock);

        var blockStyle = null;

        //for (var i = 0;i<5;i++){
        //    var block = new cc.Sprite(res.paperBlock);
        //    block.attr({
        //        anchorX : 0,
        //        anchorY : 0,
        //        x : Math.random()*1000,
        //        y : Math.random()*1000
        //    });
        //    this.addChild(block);
        //}

        for(var i = 0;i<17;i++){
            for(var j = 0;j<17;j++){
                blockStyle = this._sptMap.map[i*17+j];
                if(blockStyle == 1){
                    var blockPaper = new cc.Sprite(res.paperBlock);
                    blockPaper.attr({
                        anchorX : 0,
                        anchorY : 0,
                        x : i*256,
                        y : j*256
                    });
                    this.addChild(blockPaper);
                    cc.log(blockStyle);
                    cc.log(i*256);
                } else if (blockStyle == 2) {
                    var blockWood = new cc.Sprite(res.woodBlock);
                    blockWood.attr({
                        anchorX : 0,
                        anchorY : 0,
                        x : i*256,
                        y : j*256
                    });
                    this.addChild(blockWood);
                } else if (blockStyle == 3) {
                    var blockStone = new cc.Sprite(res.stoneBlock);
                    blockStone.attr({
                        anchorX : 0,
                        anchorY : 0,
                        x : i*256,
                        y : j*256
                    });
                    this.addChild(blockStone);
                }
            }
        }

    }

})