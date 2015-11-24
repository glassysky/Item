/**
 * Created by cui on 2015/11/24.
 */
var PlayerSprite = cc.Sprite.extend({
    _x : null,
    _y : null,
    _sptPlayer : null,

    ctor : function(aTexture){
        this._super(aTexture);

        this._sptPlayer = new cc.Sprite(res.player);
        this.addChild(this._sptPlayer);
    },

    PlayerSpriteMove : function(){

    }
})