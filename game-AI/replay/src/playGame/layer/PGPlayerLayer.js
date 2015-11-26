/**
 * Created by cui on 2015/11/25.
 */
var PGPlayerLayer = cc.Layer.extend({

    _player : null,
    _playerPos : null,
    time : 0,
    _playerArray : [],//玩家角色数组
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


        //加载json
        this._playerPos = cc.loader.getRes(resJSON.Map_JSON);

        //加载精灵
        this.initPlayerA(this._playerPos.player["A1"]);
        this.initPlayerB(this._playerPos.player["A2"]);
        this.initPlayerC(this._playerPos.player["A3"]);

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
        this._playerArray.push(player);
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
        this._playerArray.push(player);
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
        this._playerArray.push(player);
        this.addChild(player);
    },

    update : function(dt){
        this.time += dt;
        if(this.time > 2){
            this.moveSprite();
            //cc.log(this._playerArray);
            this.time = 0;
        }
    },

    //移动角色
    moveSprite : function(){
        //三个角色
        for(var i = 0;i<3;i++){
            var x = 0,
                y = 0,
                direction = "D";
            //获取当前坐标位置
            this._posxBefore = this._playerArray[i]._position.x/256;
            this._posyBefore = this._playerArray[i]._position.y/256;
            //获取下一次坐标位置
            this._posxAfter = this._playerPos.playerMove["A"+this._character][this._step][0];
            this._posyAfter = this._playerPos.playerMove["A"+this._character][this._step][1];

            if(this._posxAfter < 0 && this._posyAfter < 0 ){
                this._character++;
                this._playerArray[i].removeFromParent();
                continue;
            }

            x = Math.round(this._posxAfter) - Math.round(this._posxBefore);
            y = Math.round(this._posyAfter) - Math.round(this._posyBefore);

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
            this.changeImage(this._playerArray[i],direction);

            //每次移动一格
            this._playerArray[i].runAction(new cc.MoveBy(1, cc.p(x*256, y*256)));
            this._character++;

        }
        this._character = 1;
        this._step++;
    },

    changeImage : function(player,direction){

        //set frame

        player.stopActionByTag("before");
        var animFrames = [];

        if (player._typeP == "A") {
            if(direction == "U"){
                for(var i = 1;i<player._imgLength+1;i++){
                    animFrames.push(cc.spriteFrameCache.getSpriteFrame("企鹅背面" + i + ".png"));
                }
            } else if (direction == "D"){
                for(var i = 1;i<player._imgLength+1;i++){
                    animFrames.push(cc.spriteFrameCache.getSpriteFrame("企鹅正面" + i + ".png"));
                }
            } else if (direction == "L"){
                for(var i = 1;i<player._imgLength+1;i++){
                    animFrames.push(cc.spriteFrameCache.getSpriteFrame("企鹅左侧" + i + ".png"));
                }
            } else if (direction == "R"){
                for(var i = 1;i<player._imgLength+1;i++){
                    animFrames.push(cc.spriteFrameCache.getSpriteFrame("企鹅右侧" + i + ".png"));
                }
            }
        } else if (player._typeP == "B") {
            if(direction == "U"){
                for(var i = 1;i<player._imgLength+1;i++){
                    animFrames.push(cc.spriteFrameCache.getSpriteFrame("大便背面" + i + ".png"));
                }
            } else if (direction == "D"){
                for(var i = 1;i<player._imgLength+1;i++){
                    animFrames.push(cc.spriteFrameCache.getSpriteFrame("大便正面" + i + ".png"));
                }
            } else if (direction == "L"){
                for(var i = 1;i<player._imgLength+1;i++){
                    animFrames.push(cc.spriteFrameCache.getSpriteFrame("大便左侧" + i + ".png"));
                }
            } else if (direction == "R"){
                for(var i = 1;i<player._imgLength+1;i++){
                    animFrames.push(cc.spriteFrameCache.getSpriteFrame("大便右侧" + i + ".png"));
                }
            }
        } else if (player._typeP == "C") {
            if(direction == "U"){
                for(var i = 1;i<player._imgLength+1;i++){
                    animFrames.push(cc.spriteFrameCache.getSpriteFrame("外星人背面" + i + ".png"));
                }
            } else if (direction == "D"){
                for(var i = 1;i<player._imgLength+1;i++){
                    animFrames.push(cc.spriteFrameCache.getSpriteFrame("外星人正面" + i + ".png"));
                }
            } else if (direction == "L"){
                for(var i = 1;i<player._imgLength+1;i++){
                    animFrames.push(cc.spriteFrameCache.getSpriteFrame("外星人左侧" + i + ".png"));
                }
            } else if (direction == "R"){
                for(var i = 1;i<player._imgLength+1;i++){
                    animFrames.push(cc.spriteFrameCache.getSpriteFrame("外星人右侧" + i + ".png"));
                }
            }
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