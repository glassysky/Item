var res = {
    background_png : "../res/整体背景.jpg",
    panel_jpg : "../res/playGame/面板背景.jpg",

    //blocks
    paperBlock : "../res/playGame/blocks/paperBlock.png",
    woodBlock : "../res/playGame/blocks/woodBlock.png",
    stoneBlock : "../res/playGame/blocks/stoneBlock.png",
    bomb_plist : "../res/playGame/blocks/炸弹.plist",
    bomb_png : "../res/playGame/blocks/炸弹.png",

    //startPlace
    blueBegin : "../res/playGame/startPlace/蓝队起点.png",
    greenBegin : "../res/playGame/startPlace/绿队起点.png",

    //playerA
    AplayerD_plist : "../res/playGame/player/企鹅正面.plist",
    AplayerD_png : "../res/playGame/player/企鹅正面.png",
    AplayerR_plist : "../res/playGame/player/企鹅右侧.plist",
    AplayerR_png : "../res/playGame/player/企鹅右侧.png",
    AplayerU_plist : "../res/playGame/player/企鹅背面.plist",
    AplayerU_png : "../res/playGame/player/企鹅背面.png",
    AplayerL_plist : "../res/playGame/player/企鹅左侧.plist",
    AplayerL_png : "../res/playGame/player/企鹅左侧.png",

    //playerB
    BplayerD_plist : "../res/playGame/player/大便正面.plist",
    BplayerD_png : "../res/playGame/player/大便正面.png",
    BplayerR_plist : "../res/playGame/player/大便右侧.plist",
    BplayerR_png : "../res/playGame/player/大便右侧.png",
    BplayerU_plist : "../res/playGame/player/大便背面.plist",
    BplayerU_png : "../res/playGame/player/大便背面.png",
    BplayerL_plist : "../res/playGame/player/大便左侧.plist",
    BplayerL_png : "../res/playGame/player/大便左侧.png",

    //playerC
    CplayerD_plist : "../res/playGame/player/外星人正面.plist",
    CplayerD_png : "../res/playGame/player/外星人正面.png",
    CplayerR_plist : "../res/playGame/player/外星人右侧.plist",
    CplayerR_png : "../res/playGame/player/外星人右侧.png",
    CplayerU_plist : "../res/playGame/player/外星人背面.plist",
    CplayerU_png : "../res/playGame/player/外星人背面.png",
    CplayerL_plist : "../res/playGame/player/外星人左侧.plist",
    CplayerL_png : "../res/playGame/player/外星人左侧.png",

    //playerD
    DplayerD_plist : "../res/playGame/player/坏企鹅正面.plist",
    DplayerD_png : "../res/playGame/player/坏企鹅正面.png",
    DplayerR_plist : "../res/playGame/player/坏企鹅右侧.plist",
    DplayerR_png : "../res/playGame/player/坏企鹅右侧.png",
    DplayerU_plist : "../res/playGame/player/坏企鹅背面.plist",
    DplayerU_png : "../res/playGame/player/坏企鹅背面.png",
    DplayerL_plist : "../res/playGame/player/坏企鹅左侧.plist",
    DplayerL_png : "../res/playGame/player/坏企鹅左侧.png",

    //playerE
    EplayerD_plist : "../res/playGame/player/坏大便正面.plist",
    EplayerD_png : "../res/playGame/player/坏大便正面.png",
    EplayerR_plist : "../res/playGame/player/坏大便右侧.plist",
    EplayerR_png : "../res/playGame/player/坏大便右侧.png",
    EplayerU_plist : "../res/playGame/player/坏大便背面.plist",
    EplayerU_png : "../res/playGame/player/坏大便背面.png",
    EplayerL_plist : "../res/playGame/player/坏大便左侧.plist",
    EplayerL_png : "../res/playGame/player/坏大便左侧.png",

    //playerF
    FplayerD_plist : "../res/playGame/player/坏外星人正面.plist",
    FplayerD_png : "../res/playGame/player/坏外星人正面.png",
    FplayerR_plist : "../res/playGame/player/坏外星人右侧.plist",
    FplayerR_png : "../res/playGame/player/坏外星人右侧.png",
    FplayerU_plist : "../res/playGame/player/坏外星人背面.plist",
    FplayerU_png : "../res/playGame/player/坏外星人背面.png",
    FplayerL_plist : "../res/playGame/player/坏外星人左侧.plist",
    FplayerL_png : "../res/playGame/player/坏外星人左侧.png",

};

var resJSON = {
    Map_JSON : "../res/replay.json"
};


var g_resources = [];

for (var i in res) {
    g_resources.push(res[i]);
}

for (var j in resJSON) {
    g_resources.push(resJSON[j]);
}

