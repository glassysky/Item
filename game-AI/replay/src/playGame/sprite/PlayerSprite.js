/**
 * Created by cui on 2015/11/24.
 */
//角色A
var PlayerSpriteA = cc.Sprite.extend({
    _x : null,
    _y : null,
    _sptPlayer : null,
    active : true,
    _typeP : "A",
    _imgLength : 45,

    ctor : function(aTexture){
        this._super(aTexture);

        cc.spriteFrameCache.addSpriteFrames(res.AplayerD_plist);
        cc.textureCache.addImage(res.AplayerD_png);
        cc.spriteFrameCache.addSpriteFrames(res.AplayerU_plist);
        cc.textureCache.addImage(res.AplayerU_png);
        cc.spriteFrameCache.addSpriteFrames(res.AplayerR_plist);
        cc.textureCache.addImage(res.AplayerR_png);
        cc.spriteFrameCache.addSpriteFrames(res.AplayerL_plist);
        cc.textureCache.addImage(res.AplayerL_png);


        //set frame
        var animFrames = [];
        for(var i = 1;i<46;i++){
            animFrames.push(cc.spriteFrameCache.getSpriteFrame("企鹅正面" + i + ".png"));
        }

        //player animate
        var animation = new cc.Animation(animFrames, 0.1);
        var animate = cc.animate(animation);
        var action = animate.repeatForever();
        action.setTag("before");
        this.runAction(action);
    },

});

//角色B
var PlayerSpriteB = cc.Sprite.extend({
    _x : null,
    _y : null,
    _sptPlayer : null,
    active : true,
    _typeP : "B",
    _imgLength : 28,

    ctor : function(aTexture){
        this._super(aTexture);

        cc.spriteFrameCache.addSpriteFrames(res.BplayerD_plist);
        cc.textureCache.addImage(res.BplayerD_png);
        cc.spriteFrameCache.addSpriteFrames(res.BplayerU_plist);
        cc.textureCache.addImage(res.BplayerU_png);
        cc.spriteFrameCache.addSpriteFrames(res.BplayerR_plist);
        cc.textureCache.addImage(res.BplayerR_png);
        cc.spriteFrameCache.addSpriteFrames(res.BplayerL_plist);
        cc.textureCache.addImage(res.BplayerL_png);

        //set frame
        var animFrames = [];
        for(var i = 1;i<29;i++){
            animFrames.push(cc.spriteFrameCache.getSpriteFrame("大便正面" + i + ".png"));
        }

        //player animate
        var animation = new cc.Animation(animFrames, 0.1);
        var animate = cc.animate(animation);
        var action = animate.repeatForever();
        action.setTag("before");
        this.runAction(action);
    },

});

//角色C
var PlayerSpriteC = cc.Sprite.extend({
    _x : null,
    _y : null,
    _sptPlayer : null,
    active : true,
    _typeP : "C",
    _imgLength : 40,

    ctor : function(aTexture){
        this._super(aTexture);

        cc.spriteFrameCache.addSpriteFrames(res.CplayerD_plist);
        cc.textureCache.addImage(res.CplayerD_png);
        cc.spriteFrameCache.addSpriteFrames(res.CplayerU_plist);
        cc.textureCache.addImage(res.CplayerU_png);
        cc.spriteFrameCache.addSpriteFrames(res.CplayerR_plist);
        cc.textureCache.addImage(res.CplayerR_png);
        cc.spriteFrameCache.addSpriteFrames(res.CplayerL_plist);
        cc.textureCache.addImage(res.CplayerL_png);

        //set frame
        var animFrames = [];
        for(var i = 1;i<41;i++){
            animFrames.push(cc.spriteFrameCache.getSpriteFrame("外星人正面" + i + ".png"));
        }

        //player animate
        var animation = new cc.Animation(animFrames, 0.1);
        var animate = cc.animate(animation);
        var action = animate.repeatForever();
        action.setTag("before");
        this.runAction(action);
    },

});
//
//角色D
var PlayerSpriteD = cc.Sprite.extend({
    _x : null,
    _y : null,
    _sptPlayer : null,
    active : true,

    ctor : function(aTexture){
        this._super(aTexture);

        cc.spriteFrameCache.addSpriteFrames(res.DplayerD_plist);
        cc.textureCache.addImage(res.DplayerD_png);
        cc.spriteFrameCache.addSpriteFrames(res.DplayerU_plist);
        cc.textureCache.addImage(res.DplayerU_png);
        cc.spriteFrameCache.addSpriteFrames(res.DplayerR_plist);
        cc.textureCache.addImage(res.DplayerR_png);
        cc.spriteFrameCache.addSpriteFrames(res.DplayerL_plist);
        cc.textureCache.addImage(res.DplayerL_png);

        //set frame
        var animFrames = [];
        for(var i = 1;i<46;i++){

            animFrames.push(cc.spriteFrameCache.getSpriteFrame("坏企鹅正面" + i + ".png"));
        }

        //player animate
        var animation = new cc.Animation(animFrames, 0.1);
        var animate = cc.animate(animation);
        var action = animate.repeatForever();
        action.setTag("before");
        this.runAction(action);
    },

});

//角色E
var PlayerSpriteE = cc.Sprite.extend({
    _x : null,
    _y : null,
    _sptPlayer : null,
    active : true,

    ctor : function(aTexture){
        this._super(aTexture);

        cc.spriteFrameCache.addSpriteFrames(res.EplayerD_plist);
        cc.textureCache.addImage(res.EplayerD_png);
        cc.spriteFrameCache.addSpriteFrames(res.EplayerU_plist);
        cc.textureCache.addImage(res.EplayerU_png);
        cc.spriteFrameCache.addSpriteFrames(res.EplayerR_plist);
        cc.textureCache.addImage(res.EplayerR_png);
        cc.spriteFrameCache.addSpriteFrames(res.EplayerL_plist);
        cc.textureCache.addImage(res.EplayerL_png);

        //set frame
        var animFrames = [];
        for(var i = 1;i<29;i++){

            animFrames.push(cc.spriteFrameCache.getSpriteFrame("坏大便正面" + i + ".png"));
        }

        //player animate
        var animation = new cc.Animation(animFrames, 0.1);
        var animate = cc.animate(animation);
        var action = animate.repeatForever();
        action.setTag("before");
        this.runAction(action);
    },

});

//角色F
var PlayerSpriteF = cc.Sprite.extend({
    _x : null,
    _y : null,
    _sptPlayer : null,
    active : true,

    ctor : function(aTexture){
        this._super(aTexture);

        cc.spriteFrameCache.addSpriteFrames(res.FplayerD_plist);
        cc.textureCache.addImage(res.FplayerD_png);
        cc.spriteFrameCache.addSpriteFrames(res.FplayerU_plist);
        cc.textureCache.addImage(res.FplayerU_png);
        cc.spriteFrameCache.addSpriteFrames(res.FplayerR_plist);
        cc.textureCache.addImage(res.FplayerR_png);
        cc.spriteFrameCache.addSpriteFrames(res.FplayerL_plist);
        cc.textureCache.addImage(res.FplayerL_png);

        //set frame
        var animFrames = [];
        for(var i = 1;i<41;i++){

            animFrames.push(cc.spriteFrameCache.getSpriteFrame("坏外星人正面" + i + ".png"));
        }

        //player animate
        var animation = new cc.Animation(animFrames, 0.1);
        var animate = cc.animate(animation);
        var action = animate.repeatForever();
        action.setTag("before");
        this.runAction(action);
    },

});
//
////角色G
//var PlayerSpriteG = cc.Sprite.extend({
//    _x : null,
//    _y : null,
//    _sptPlayer : null,
//    active : true,
//
//    ctor : function(aTexture){
//        this._super(aTexture);
//
//        cc.spriteFrameCache.addSpriteFrames(res.playerD_plist);
//        cc.textureCache.addImage(res.playerD_png);
//
//        //set frame
//        var animFrames = [];
//        for(var i = 1;i<43;i++){

//            animFrames.push(cc.spriteFrameCache.getSpriteFrame("企鹅正面" + i + ".png"));
//        }
//
//        //player animate
//        var animation = new cc.Animation(animFrames, 0.1);
//        var animate = cc.animate(animation);
//        var action = animate.repeatForever();
//        action.setTag("before");
//        this.runAction(action);
//    },
//
//});