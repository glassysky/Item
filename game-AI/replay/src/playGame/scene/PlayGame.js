/**
 * Created by cui on 2015/11/20.
 */

var PlayGameLayer = cc.Layer.extend({
    _backgroundLayer : null,
    _touchLayer : null,
    ctor : function(){
        this._super();

        this.addBackgroundLayer();

        //this.addTouchLayer();
    },

    addBackgroundLayer : function(){
        this._backgroundLayer = new PGBackgroundLayer();
        this.addChild(this._backgroundLayer);
    },

    addTouchLayer : function(){
        this._touchLayer = new PGTouchLayer();
        this.addChild(this._touchLayer);
    },

});

var PlayGameScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer = new PlayGameLayer();
        this.addChild(layer);

        var blockLayer = new PGBlockLayer();
        this.addChild(blockLayer);
    }
});