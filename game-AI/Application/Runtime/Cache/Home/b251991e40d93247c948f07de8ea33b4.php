<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>replay</title>

    <link href="/testplayai/Application/View/View/Css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/testplayai/Application/View/View/Css/style.css">

    <link rel="icon" type="image/GIF" href="res/favicon.ico"/>
    <!--<meta name="viewport" content="width=480, initial-scale=1">-->
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="full-screen" content="yes"/>
    <meta name="screen-orientation" content="portrait"/>
    <meta name="x5-fullscreen" content="true"/>
    <meta name="360-fullscreen" content="true"/>
    <style>
        body, canvas, div {
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            -khtml-user-select: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
    </style>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<div class="cover-layer">
    <div class="progress" style="position:relative;top: 50%;margin: 0 30%;">
        <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width:100%">
            <span class="sr-only">100% Complete</span>
        </div>
    </div>
</div>
<!-- <div id="nav-background"></div> -->
<div class="container" id="ai-game">
    <!-- nav -->
    <nav class="navbar navbar-default" id="navbar">
        <div class="container-fluid">
            <div class="navbar-header">
                <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbar-game" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a href="" class="navbar-brand">
                    <img src="../Image/logo.png" alt="logo">
                </a>
            </div>
            <div class="collapse navbar-collapse" id="navbar-game">
                <ul class="nav navbar-nav">
                    <li><a href="homepage.html">首页</a></li>
                    <li><a href="../rank.html">排行榜</a></li>
                    <li><a href="../battle.html">战役</a></li>
                    <li><a href="../codemanagement.html">下载</a></li>
                    <li><a href="../notice.html">通知公告</a></li>
                    <li><a href="../about.html">关于我们</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="../reg.html">注册/登陆</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- nav over -->
    <!-- replay -->
    <div id="replay" class="second-container">
        <div class="scene-container">
            <canvas id="gameCanvas" width="2304" height="2304">您的浏览器不支持canvas，请更换浏览器后再试</canvas>
        </div>
    </div>
    <!-- replay over -->
    <!--homepage-->
    <div id="homepage"  class="second-container">
        <div id="cocos2dGame"></div>
        <div class="description-text">
            <div class="text-wrap">
                <p>全球气候变暖，冰川融化，最最最喜欢玩儿滑雪溜冰游戏的小企鹅们伐开心了~  这样子下去岂不是没得玩了嘛￣へ￣</p>
                <p>这个时候，企鹅家族展开了对于未来生存地选择的激烈讨论~ 圆头企鹅宝宝们认为应该大家一起共同努力，使企鹅星球恢复成以往美丽的样子↖(^ω^)↗；而另一方的尖头企鹅宝宝们则认为环境已经无法挽救了，应该努力努力找到一个新的星球全体迁移过去...... </p>
                <p>正正好这个时候企鹅星人的好邻居外星人以及便便星人来到了企鹅星球做客，他们也作为了这场讨论的参与者。圆头外星人和圆头便便星人同意圆头企鹅的想法~再怎么样也应该努力一下挽救漂亮的企鹅星球嘛\(≧▽≦)/；尖头外星人和尖头便便星人则觉得大家的生存更重要，得赶快找到下一个星球搬过去~\(≧▽≦)/</p>
                <p>两边吵啊吵啊一直都没有吵出结果~ ~ ~</p>
                <p>那么，当辩论已经不能成为解决问题的有效手段~就应该寻求更直接有效的解决方法......那就是玩！游！戏！！！（啊哈，你说什么？暴力斗殴？？怎么会的~\(≧▽≦)/~啦  这是最最最和谐的宇宙了）</p>
                <p>这是一场基地之间的争夺战，来吧 ~ 丢出你手中的炸弹，尽情的破坏掉挡在你面前的障碍物~我们的眼中只有基地基地~我们的目标只有破坏基地破坏基地~</p>
                <p>胜利的一方理所当然具有更高的智慧以及更高的行动力 ~ 也就具有了生存地选择的决定权O(∩_∩)O  来吧~为了你所坚持的选择而热情高扬的战斗吧~</p>
                <p>这个时候，大家把决定权交给了这个宇宙中最最最最有权威的纸盒神兽~就让神兽大人来替企鹅宝宝们做个选择吧~
                    神兽大人说：企鹅宝宝、外星人宝宝以及便便星人宝宝们，我将会用一场比赛来考验你们~你们各自出不同意见的两个人然后分开组队~我在森林中心等你们~哪对宝宝先找到我我就认可他们的能力以及智慧~同意他们的决定~\(≧▽≦)/~啦啦啦</p>
                <p>为了让纸盒神兽大人同意自己的想法~大家一起努力加油~\(≧▽≦)/
                    朝着神兽大人的家出发吧↖(^ω^)↗  路上还有各种道具记得使用哟~另外要小心来自对方宝宝们的攻击呦</p>
            </div>
        </div>
    </div>
    <!--homepage-over-->
</div>

 <script src="../Js/lib/require.js" data-main="../Js/main.js"></script>
 <script src="frameworks/cocos2d-html5/CCBoot.js"></script>
 <script cocos src="main.js"></script>
</body>
</html>