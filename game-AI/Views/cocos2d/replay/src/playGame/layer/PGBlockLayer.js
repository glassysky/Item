/**
 * Created by cui on 2015/11/21.
 */

var PGBlockLayer = cc.Layer.extend({
    _sptPaperBlock : null,
    _sptWoodBlock : null,
    _sptStoneBlock : null,
    _sptMap : null,
    //方块对象组
    _sptBlockArray : [],
    _step : 0,
    time : 0,
    maxLength : 0,

    ctor : function(){
        this._super();

        //加载res 里的图片列表
        cc.spriteFrameCache.addSpriteFrames(res.bomb_plist);
        cc.textureCache.addImage(res.bomb_png);

        this._sptMap = cc.loader.getRes(resJSON.Map_JSON);

        this.initBlock();

        this.calculateMax();

        this.scheduleUpdate();

        //this.changeBlock();

        //this.removeBlock();
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
                } else {
                    this._sptBlockArray.push(null);
                }
            }
        }
        //cc.log(this._sptBlockArray);

    },

    update : function(dt){
        this.time += dt;
        if(this.time > 2){
            this._step++;
            this.changeBlock();
            //cc.log(this._playerArray);
            this.time = 0;
            if(this._step == this._sptMap.round){
                this.unscheduleUpdate();
            }
        }
    },

    //改变精灵图像
    //changeBlock : function(){
    //    this._sptBlockArray[0].setTexture(res.blueBegin);
    //},

    changeBlock : function(){
        var data = this._sptMap.blocks,
            position = null,
            status = null,
            block = null;
        if(data[this._step]){
            //console.log(data[this._step].length);
            for(var i = 0;i<data[this._step].length;i++){
                position = data[this._step][i]["position"];
                status = data[this._step][i]["status"];
                //删除原位置精灵
                if(this._sptBlockArray[(position[0])+Math.round((position[1]))*17]){
                    this.removeChild(this._sptBlockArray[(position[0])+Math.round((position[1]))*17]);
                }
                //添加新精灵
                this._sptBlockArray[(position[0])+Math.round((position[1]))*17] = this.makeBlock(status,position[0],position[1]);
                block = this._sptBlockArray[(position[0])+Math.round((position[1]))*17];

                this.addChild(block);

                //如果是爆炸，默认1.5秒后自动删除精灵
                if(status == "5"){
                    this.scheduleOnce(function(){this.removeChild(block)},1.5);
                }

            }
        }

    },

    calculateMax : function(){
        for(var i in this._sptMap.blocks){
            if(i > this.maxLength){
                this.maxLength = i;
            }
        }
    },

    makeBlock : function(number,x,y){
        var block = null;
        switch(number){
            case 0: //null
                block = null;
                break;
            case 1: //paper
                block = new cc.Sprite(res.paperBlock);
                block.attr({
                    anchorX : 0,
                    anchorY : 0,
                    x : x*256,
                    y : y*256
                });
                return block;
            case 2: //wood
                block = new cc.Sprite(res.woodBlock);
                block.attr({
                    anchorX : 0,
                    anchorY : 0,
                    x : x*256,
                    y : y*256
                });
                return block;
            case 3: //stone
                block = new cc.Sprite(res.stoneBlock);
                block.attr({
                    anchorX : 0,
                    anchorY : 0,
                    x : x*256,
                    y : y*256
                });
                return block;
            case 4: //bomb
                block = new BombSprite("#1.png");
                block.attr({
                    anchorX : 0,
                    anchorY : 0,
                    x : x*256,
                    y : y*256
                });
                return block;
            case 5: //booming
                block = new BoomSprite("#炸弹效果1.png");
                block.attr({
                    anchorX : 0,
                    anchorY : 0,
                    x : (x-1)*256,
                    y : (y-1)*256
                });
                return block;
            default:
                break;
        }
    },

    //删除精灵节点
    removeBlock : function(){
        this.removeChild(this._sptBlockArray[0]);
    }

});