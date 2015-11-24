var res = {
    HelloWorld_png : "res/HelloWorld.png",

    background_png : "res/整体背景.jpg",

    //testpart
    TextureTransparentPack_png : "res/playGame/textureTransparentPack.png",

    //blocks
    paperBlock : "res/playGame/blocks/paperBlock.png",
    woodBlock : "res/playGame/blocks/woodBlock.png",
    stoneBlock : "res/playGame/blocks/stoneBlock.png",

    //player
    player : "res/playGame/player/player01.png"

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

