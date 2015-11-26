/**
 * Created by cui on 2015/11/26.
 */
var PGPanelLayer = cc.Layer.extend({

    _sptBg : null,
    _gameInfo : null,
    _rounds : null,
    _gameRounds : null,
    _groupName1 : null,
    _groupName2 : null,
    _score1 : null,
    _score2 : null,
    _playerNum1 : null,
    _playerNum2 : null,
    _player1 : null,
    _player2 : null,
    _posX : 4500,
    _posY : null,

    ctor : function(){

        this._super();

        this._gameInfo = cc.loader.getRes(resJSON.Map_JSON);

        this.initBackground();

        this.initText();

    },

    initBackground : function(){
        this._sptBg = new cc.Sprite(res.panel_jpg);
        this._sptBg.attr({
            anchorX : 0,
            anchorY : 0,
            x : 4352,
            y : 0
        });
        this.addChild(this._sptBg);

    },

    initText : function(){
        var groupInfo = this._gameInfo.group;

        this._version = new cc.LabelTTF("Group1", "Arial", 150);
        this._version.attr({
            anchorX : 0,
            anchorY : 0,
            x : this._posX,
            y : 4100,
            color : cc.color(255, 255, 255)
        });
        this.addChild(this._version, 1000);

        this._gameName = new cc.LabelTTF("groupName: "+groupInfo[0].groupName, "Arial", 130);
        this._gameName.attr({
            anchorX : 0,
            anchorY : 0,
            x : this._posX,
            y : 3900,
            color : cc.color(255, 255, 255)
        });
        this.addChild(this._gameName, 1000);

        this._gameType = new cc.LabelTTF("score: "+groupInfo[0].score, "Arial", 130);
        this._gameType.attr({
            anchorX : 0,
            anchorY : 0,
            x : this._posX,
            y : 3800,
            color : cc.color(255, 255, 255)
        });
        this.addChild(this._gameType, 1000);

        this._gameType = new cc.LabelTTF("playerNumber: "+groupInfo[0].playerNumber, "Arial", 130);
        this._gameType.attr({
            anchorX : 0,
            anchorY : 0,
            x : this._posX,
            y : 3700,
            color : cc.color(255, 255, 255)
        });
        this.addChild(this._gameType, 1000);

        this._gameType = new cc.LabelTTF("player: "+groupInfo[0].player, "Arial", 130);
        this._gameType.attr({
            anchorX : 0,
            anchorY : 0,
            x : this._posX,
            y : 3600,
            color : cc.color(255, 255, 255)
        });
        this.addChild(this._gameType, 1000);

    }

});