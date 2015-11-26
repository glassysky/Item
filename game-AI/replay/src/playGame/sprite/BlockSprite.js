/**
 * Created by cui on 2015/11/24.
 */
var BombSprite = cc.Sprite.extend({

    ctor : function(aTexture){
        this._super(aTexture);

        var animFrames = [];
        for(var i = 1;i<8;i++){
            animFrames.push(cc.spriteFrameCache.getSpriteFrame( i + ".png"));
        }

        //player animate
        var animation = new cc.Animation(animFrames, 0.1);
        var animate = cc.animate(animation);
        var action = animate.repeatForever();
        action.setTag("before");
        this.runAction(action);
    }
});

var BoomSprite = cc.Sprite.extend({

    ctor : function(aTexture){
        this._super(aTexture);

        var animFrames = [];
        for(var i = 1;i<10;i++){
            animFrames.push(cc.spriteFrameCache.getSpriteFrame("炸弹效果" + i + ".png"));
        }

        //player animate
        var animation = new cc.Animation(animFrames, 0.2);
        var animate = cc.animate(animation);
        var action = animate.repeat(1);
        action.setTag("before");
        this.runAction(action);


    }
});