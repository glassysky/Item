/**
 * Created by cui on 2015/11/24.
 */
var PlayerSprite = cc.Sprite.extend({
    _x : null,
    _y : null,
    _sptPlayer : null,
    active : true,

    ctor : function(aTexture){
        this._super(aTexture);

        cc.spriteFrameCache.addSpriteFrames(res.playerD_plist);
        cc.textureCache.addImage(res.playerD_png);

        //set frame
        var animFrames = [];
        for(var i = 1;i<43;i++){
            if(i<10){
                i = "0" + i;
            }
            animFrames.push(cc.spriteFrameCache.getSpriteFrame("企鹅正面跳动00" + i + ".png"));
        }

        //player animate
        var animation = new cc.Animation(animFrames, 0.1);
        var animate = cc.animate(animation);
        var action = animate.repeatForever();
        action.setTag("before");
        this.runAction(action);
    },

    PlayerSpriteMove : function(){

    }
});