/**
 * Created by cui on 2015/11/25.
 */
var PGPlayerLayer = cc.Layer.extend({

    _player : null,
    _playerPos : null,
    time : 0,
    _playerArrayA : [],//A组玩家角色数组
    _playerArrayB : [],//B组玩家角色数组
    _step : 0,
    _character : 1,
    _posxBefore : 0,
    _posyBefore : 0,
    _posxAfter : 0,
    _posyAfter : 0,
    _direction : "D",

    ctor : function(){
        this._super();

        //加载res 里的图片列表
        cc.spriteFrameCache.addSpriteFrames(res.AplayerD_plist);
        cc.textureCache.addImage(res.AplayerD_png);

        cc.spriteFrameCache.addSpriteFrames(res.BplayerD_plist);
        cc.textureCache.addImage(res.BplayerD_png);

        cc.spriteFrameCache.addSpriteFrames(res.CplayerD_plist);
        cc.textureCache.addImage(res.CplayerD_png);

        cc.spriteFrameCache.addSpriteFrames(res.DplayerD_plist);
        cc.textureCache.addImage(res.DplayerD_png);

        cc.spriteFrameCache.addSpriteFrames(res.EplayerD_plist);
        cc.textureCache.addImage(res.EplayerD_png);

        cc.spriteFrameCache.addSpriteFrames(res.FplayerD_plist);
        cc.textureCache.addImage(res.FplayerD_png);


        //加载json
        this._playerPos = cc.loader.getRes(resJSON.Map_JSON);

        //加载精灵
        this.initPlayerA(this._playerPos.player["A1"]);
        this.initPlayerB(this._playerPos.player["A2"]);
        this.initPlayerC(this._playerPos.player["A3"]);
        this.initPlayerD(this._playerPos.player["B1"]);
        this.initPlayerE(this._playerPos.player["B2"]);
        this.initPlayerF(this._playerPos.player["B3"]);

        this.scheduleUpdate();

        //cc.log(this._playerPos.playerMove["A"+1][1]);
        //cc.log(this._playerArray);

    },

    initPlayerA : function(pos){
        var player = null;
        //加载背景图，设置属性
        player = new PlayerSpriteA("#企鹅正面1.png");
        player.attr({
            anchorX : 0,
            anchorY : 0,
            x: pos[0]*256,
            y: pos[1]*256
        });
        this._playerArrayA.push(player);
        this.addChild(player);
    },

    initPlayerB : function(pos){
        var player = null;
        //加载背景图，设置属性
        player = new PlayerSpriteB("#大便正面1.png");
        player.attr({
            anchorX : 0,
            anchorY : 0,
            x: pos[0]*256,
            y: pos[1]*256
        });
        this._playerArrayA.push(player);
        this.addChild(player);
    },

    initPlayerC : function(pos){
        var player = null;
        //加载背景图，设置属性
        player = new PlayerSpriteC("#外星人正面1.png");
        player.attr({
            anchorX : 0,
            anchorY : 0,
            x: pos[0]*256,
            y: pos[1]*256
        });
        this._playerArrayA.push(player);
        this.addChild(player);
    },

    initPlayerD : function(pos){
        var player = null;
        //加载背景图，设置属性
        player = new PlayerSpriteD("#坏企鹅正面1.png");
        player.attr({
            anchorX : 0,
            anchorY : 0,
            x: pos[0]*256,
            y: pos[1]*256
        });
        this._playerArrayB.push(player);
        this.addChild(player);
    },

    initPlayerE : function(pos){
        var player = null;
        //加载背景图，设置属性
        player = new PlayerSpriteE("#坏大便正面1.png");
        player.attr({
            anchorX : 0,
            anchorY : 0,
            x: pos[0]*256,
            y: pos[1]*256
        });
        this._playerArrayB.push(player);
        this.addChild(player);
    },

    initPlayerF : function(pos){
        var player = null;
        //加载背景图，设置属性
        player = new PlayerSpriteF("#坏外星人正面1.png");
        player.attr({
            anchorX : 0,
            anchorY : 0,
            x: pos[0]*256,
            y: pos[1]*256
        });
        this._playerArrayB.push(player);
        this.addChild(player);
    },

    update : function(dt){
        this.time += dt;
        if(this.time > 2){
            this.moveSpriteA();
            this.moveSpriteB();
            this.time = 0;
            this._step++;
            if(this._step == this._playerPos.round){
                this.unscheduleUpdate();
            }
        }
    },

    //移动角色
    moveSpriteA : function(){
        //三个角色
        for(var i = 0;i<3;i++){
            var x = 0,
                y = 0,
                direction = "D",
                posxBefore = 0,
                posyBefore = 0,
                posxAfter = 0,
                posyAfter = 0;
            //获取当前坐标位置
            posxBefore = this._playerArrayA[i]._position.x/256;
            posyBefore = this._playerArrayA[i]._position.y/256;

            //获取下一次坐标位置
            posxAfter = this._playerPos.playerMove["A"+this._character][this._step][0];
            posyAfter = this._playerPos.playerMove["A"+this._character][this._step][1];

            //位置坐标[-1,-1]则清除节点
            if(posxAfter < 0 && posyAfter < 0 ){
                this._character++;
                this._playerArrayA[i].removeFromParent();
                continue;
            }

            x = Math.round(posxAfter) - Math.round(posxBefore);
            y = Math.round(posyAfter) - Math.round(posyBefore);

            //转向判断 ↑U →R ↓D ←L
            if(x == 0 && y > 0){
                direction = "U";
            } else if (x == 0 && y < 0){
                direction = "D";
            } else if (y == 0 && x > 0){
                direction = "R";
            } else if (y == 0 && x < 0){
                direction = "L";
            }

            //待加转向改图片
            this.changeImage(this._playerArrayA[i],direction);

            //每次移动一格
            this._playerArrayA[i].runAction(new cc.MoveBy(1, cc.p(x*256, y*256)));
            this._character++;
        }
        this._character = 1;
    },

    moveSpriteB : function(){
        //三个角色
        for(var i = 0;i<3;i++){
            var x = 0,
                y = 0,
                direction = "D",
                posxBefore = 0,
                posyBefore = 0,
                posxAfter = 0,
                posyAfter = 0;
            //获取当前坐标位置
            posxBefore = this._playerArrayB[i]._position.x/256;
            posyBefore = this._playerArrayB[i]._position.y/256;

            //获取下一次坐标位置
            posxAfter = this._playerPos.playerMove["B"+this._character][this._step][0];
            posyAfter = this._playerPos.playerMove["B"+this._character][this._step][1];

            //位置坐标[-1,-1]则清除节点
            if(posxAfter < 0 && posyAfter < 0 ){
                this._character++;
                this._playerArrayB[i].removeFromParent();
                continue;
            }

            x = Math.round(posxAfter) - Math.round(posxBefore);
            y = Math.round(posyAfter) - Math.round(posyBefore);

            //转向判断 ↑U →R ↓D ←L
            if(x == 0 && y > 0){
                direction = "U";
            } else if (x == 0 && y < 0){
                direction = "D";
            } else if (y == 0 && x > 0){
                direction = "R";
            } else if (y == 0 && x < 0){
                direction = "L";
            }

            //待加转向改图片
            this.changeImage(this._playerArrayB[i],direction);

            cc.log(this._playerArrayB[i]._typeP);

            //每次移动一格
            this._playerArrayB[i].runAction(new cc.MoveBy(1, cc.p(x*256, y*256)));
            this._character++;
        }
        this._character = 1;
    },

    changeImage : function(player,direction){

        player.stopActionByTag("before");
        var animFrames = [],
            directionTemp = "",
            typeTemp = "";

        switch(player._typeP){
            case "A":
                typeTemp = "企鹅";
                break;
            case "B":
                typeTemp = "大便";
                break;
            case "C":
                typeTemp = "外星人";
                break;
            case "D":
                typeTemp = "坏企鹅";
                break;
            case "E":
                typeTemp = "坏大便";
                break;
            case "F":
                typeTemp = "坏外星人";
                break;
            default:
                return "error";
        }

        switch(direction){
            case "U":
                directionTemp = "背面";
                break;
            case "D":
                directionTemp = "正面";
                break;
            case "R":
                directionTemp = "右侧";
                break;
            case "L":
                directionTemp = "左侧";
                break;
        }

        for(var i = 1;i<player._imgLength+1;i++){
            animFrames.push(cc.spriteFrameCache.getSpriteFrame(typeTemp + directionTemp + i + ".png"));
        }

        //player animate
        var animation = new cc.Animation(animFrames, 0.1);
        var animate = cc.animate(animation);
        var action = animate.repeatForever();
        action.setTag("before");
        player.runAction(action);

    },

    test : function(){
        console.log(this._playerPos.player["A1"]);
    }

});