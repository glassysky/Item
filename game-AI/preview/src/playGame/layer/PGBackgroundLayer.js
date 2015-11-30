/**
 * Created by cui on 2015/11/20.
 */

 var PGBackgroundLayer = cc.Layer.extend({
    _sptBg : null,
    _sptLogo : null,
    _ship : null,

    ctor : function(){
        this._super();

        //加载res 里的图片列表
        //cc.spriteFrameCache.addSpriteFrames(res.TextureTransparentPack_plist);

        this.initBackground();

    },

    initBackground : function(){
        //加载背景图，设置属性
        this._sptBg = new cc.Sprite(res.background_png);
        this._sptBg.attr({
            anchorX : 0,
            anchorY : 0,
            x: 0,
            y: 0
        });
        this.addChild(this._sptBg);
    },

    //initLogo : function(){
    //    this._sptLogo = new cc.Sprite(res.mm_logo_png);
    //    this._sptLogo.attr({
    //        x : GC.w_2,
    //        y : GC.h - 160
    //    });
    //    this.addChild(this._sptLogo, 1);
    //},
    //initShip : function(){
    //    this._ship = new cc.Sprite("#ship01.png");
    //    this.addChild(this._ship);
    //    this._ship.x = Math.random() * GC.w;
    //    this._ship.y = 0;
    //
    //    this._ship.runAction(cc.moveBy(2, cc.p(Math.random() * GC.w, this._ship.y + GC.h + 100)));
    //
    //    this.schedule(this.update, 0.1);
    //},
    //update : function(){
    //    if(this._ship.y < 480) {
    //        this._ship.x = Math.random() * GC.w;
    //        this._ship.y = 10;
    //        this._ship.runAction(cc.moveBy(
    //            parseInt(5 * Math.random(), 10),
    //            cc.p(Math.random() * GC.w, this._ship.y + 480)
    //        ));
    //    }
    //}

});