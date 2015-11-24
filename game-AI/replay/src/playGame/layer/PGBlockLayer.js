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
    _sptBlockArray : [],

    ctor : function(){
        this._super();

        //加载res 里的图片列表
        //cc.spriteFrameCache.addSpriteFrames(res.TextureTransparentPack_plist);

        this.addJson();

        this.initBlock();

        this.changeBlock();

        this.removeBlock();
    },

    //获取json文件（需要预加载）
    addJson : function(){
        this._sptMap = cc.loader.getRes(resJSON.Map_JSON);
        //cc.log(this._sptMap.map[0]["line1"][0]);
    },

    //初始化精灵
    initBlock : function(){
        this._sptPaperBlock = new cc.Sprite(res.paperBlock);
        this._sptWoodBlock = new cc.Sprite(res.woodBlock);
        this._sptStoneBlock = new cc.Sprite(res.stoneBlock);

        var blockStyle = null;

        for(var i = 0;i<17;i++){
            for(var j = 0;j<17;j++){
                blockStyle = this._sptMap.map[i*17+j];
                if(blockStyle == 1){
                    var blockPaper = new cc.Sprite(res.paperBlock);
                    blockPaper.attr({
                        anchorX : 0,
                        anchorY : 0,
                        x : j*256,
                        y : i*256
                    });
                    this.addChild(blockPaper);
                    this._sptBlockArray.push(blockPaper);
                } else if (blockStyle == 2) {
                    var blockWood = new cc.Sprite(res.woodBlock);
                    blockWood.attr({
                        anchorX : 0,
                        anchorY : 0,
                        x : j*256,
                        y : i*256
                    });
                    this.addChild(blockWood);
                    this._sptBlockArray.push(blockWood);
                } else if (blockStyle == 3) {
                    var blockStone = new cc.Sprite(res.stoneBlock);
                    blockStone.attr({
                        anchorX : 0,
                        anchorY : 0,
                        x : j*256,
                        y : i*256
                    });
                    this.addChild(blockStone);
                    this._sptBlockArray.push(blockStone);
                } else if (blockStyle == 4) {
                    var blueStart = new cc.Sprite(res.blueBegin);
                    blueStart.attr({
                        anchorX : 0,
                        anchorY : 0,
                        x : j*256,
                        y : i*256
                    });
                    this.addChild(blueStart);
                    this._sptBlockArray.push(blueStart);
                } else if (blockStyle == 5) {
                    var greenStart = new cc.Sprite(res.greenBegin);
                    greenStart.attr({
                        anchorX : 0,
                        anchorY : 0,
                        x : j*256,
                        y : i*256
                    });
                    this.addChild(greenStart);
                    this._sptBlockArray.push(greenStart);
                }
            }
        }

        console.log(this._sptBlockArray);

    },

    //改变精灵图像
    changeBlock : function(){
        this._sptBlockArray[0].setTexture(res.blueBegin);
    },

    //删除精灵节点
    removeBlock : function(){
        this.removeChild(this._sptBlockArray[0]);
    }

})