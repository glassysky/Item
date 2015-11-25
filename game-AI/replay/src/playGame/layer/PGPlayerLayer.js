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
    _direction : "B",

    ctor : function(){
        this._super();

        //加载res 里的图片列表
        cc.spriteFrameCache.addSpriteFrames(res.playerD_plist);
        cc.textureCache.addImage(res.playerD_png);
        //cc.spriteFrameCache.addSpriteFrames(res.playerU_plist);
        //cc.textureCache.addImage(res.playerU_png);
        cc.spriteFrameCache.addSpriteFrames(res.playerR_plist);
        cc.textureCache.addImage(res.playerR_png);
        cc.spriteFrameCache.addSpriteFrames(res.playerL_plist);
        cc.textureCache.addImage(res.playerL_png);

        //加载json
        this._playerPos = cc.loader.getRes(resJSON.Map_JSON);

        for(var i = 1;i<4;i++){
            this.initPlayer(this._playerPos.player["A"+i]);
        }

        this.scheduleUpdate();

        //cc.log(this._playerPos.playerMove["A"+1][1]);
        cc.log(this._playerArray);

    },

    initPlayer : function(pos){
        var player = null;
        //加载背景图，设置属性
        player = new PlayerSprite("#企鹅正面跳动0001.png");
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
            this._posxBefore = this._playerArray[i]._position.x/256;
            this._posyBefore = this._playerArray[i]._position.y/256;
            this._posxAfter = this._playerPos.playerMove["A"+this._character][this._step][0];
            this._posyAfter = this._playerPos.playerMove["A"+this._character][this._step][1];

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

            this._playerArray[i].runAction(new cc.MoveBy(1, cc.p(x*256, y*256)));
            this._character++;

            //console.log([this._posxAfter,this._posyAfter]);
            //console.log([this._posxBefore,this._posyBefore]);
            //console.log([x,y]);
        }
        this._character = 1;
        this._step++;
    },

    changeImage : function(player,direction){

        //set frame

        player.stopActionByTag("before");
        var animFrames = [];
        for(var i = 1;i<43;i++){
            if(i<10){
                i = "0" + i;
            }
            if(direction == "U"){
                animFrames.push(cc.spriteFrameCache.getSpriteFrame("小企鹅背面00" + i + ".png"));
            } else if (direction == "D") {
                animFrames.push(cc.spriteFrameCache.getSpriteFrame("企鹅正面跳动00" + i + ".png"));
            } else if (direction == "R") {
                animFrames.push(cc.spriteFrameCache.getSpriteFrame("小企鹅右侧" + i + ".png"));
            } else if (direction == "L") {
                animFrames.push(cc.spriteFrameCache.getSpriteFrame("企鹅左侧" + i + ".png"));
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