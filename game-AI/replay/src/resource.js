var res = {
    background_png : "res/整体背景.jpg",

    //blocks
    paperBlock : "res/playGame/blocks/paperBlock.png",
    woodBlock : "res/playGame/blocks/woodBlock.png",
    stoneBlock : "res/playGame/blocks/stoneBlock.png",

    //startPlace
    blueBegin : "res/playGame/startPlace/蓝队起点.png",
    greenBegin : "res/playGame/startPlace/绿队起点.png",

    //player
    playerD_plist : "res/playGame/player/企鹅正面.plist",
    playerD_png : "res/playGame/player/企鹅正面.png",
    playerR_plist : "res/playGame/player/企鹅右侧.plist",
    playerR_png : "res/playGame/player/企鹅右侧.png",
    playerU_plist : "res/playGame/player/企鹅背面.plist",
    playerU_png : "res/playGame/player/企鹅背面.png",
    playerL_plist : "res/playGame/player/企鹅左侧.plist",
    playerL_png : "res/playGame/player/企鹅左侧.png",

};

var resJSON = {
    Map_JSON : "res/data.json"
};


var g_resources = [];

for (var i in res) {
    g_resources.push(res[i]);
}

for (var j in resJSON) {
    g_resources.push(resJSON[j]);
}

