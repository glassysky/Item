/**
 * Created by cui on 2015/11/25.
 */
var PGPlayerLayer = cc.Layer.extend({

    _player : null,

    ctor : function(){
        this._super();

        //加载res 里的图片列表
        cc.spriteFrameCache.addSpriteFrames(res.player01_plist);
        cc.textureCache.addImage(res.player01_png);

        this.initPlayer();

    },

    initPlayer : function(){
        //加载背景图，设置属性
        this._player = new PlayerSprite("#企鹅正面跳动0001.png");
        this._player.attr({
            anchorX : 0,
            anchorY : 0,
            x: 0,
            y: 0
        });
        this.addChild(this._player);
    }

});