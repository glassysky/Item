<?php if (!defined('THINK_PATH')) exit();?> <!DOCTYPE html>
 <html lang="en">
 <head>
 	<meta charset="UTF-8">
 	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
 	<title>Document</title>
 	<link href="/Public/css/lib/bootstrap.min.css" rel="stylesheet">
 	<link href="/Public/css/style.css" rel="stylesheet">
 	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
 </head>
 <body>
 <div class="all-wrap">
 	<nav class="navbar navbar-inverse">
 		<div class="container-fluid">
 			<div class="navbar-header">
 				<button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#mynav" aria-expanded="false">
 					<span class="sr-only">Toggle navigation</span>
 					<span class="icon-bar"></span>
 					<span class="icon-bar"></span>
 					<span class="icon-bar"></span>
 				</button>
 				<a href="/index.php/Home/Index/index" class="navbar-brand">Sermay</a>
 			</div>

 			<div class="collapse navbar-collapse" id="mynav">
 				<ul class="nav navbar-nav">
 					<li><a href="/index.php/Home/Index/index">首页</a></li>
 					<li><a href="/index.php/Home/Index/news">新闻</a></li>
 					<li><a href="/index.php/Home/Index/activity">活动优惠</a></li>
 					<!--<li class="dropdown">-->
 						<!--<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>-->
 						<!--<ul class="dropdown-menu">-->
 							<!--<li><a href="#"></a></li>-->
 							<!--<li><a href="#"></a></li>-->
 							<!--<li><a href="#"></a></li>-->
 							<!--<li><a href="#"></a></li>-->
 							<!--<li><a href="#"></a></li>-->
 						<!--</ul>-->
 					<!--</li>-->
 				</ul>
 				<ul class="nav navbar-nav navbar-right">
 					<!--<li><a href="#">Link</a></li>-->
 					<li class="dropdown">
 						<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">请先登录 <span class="caret"></span></a>
 						<ul class="dropdown-menu">
 							<li><a href="/index.php/Home/Index/log">登陆</a></li>
 							<li><a href="/index.php/Home/Index/reg">注册</a></li>
 						</ul>
 					</li>
 				</ul>
 			</div>
 		</div>
 	</nav>
<div id="activity" class="container">
    <div class="panel panel-default">
        <div class="panel-heading">公司新闻</div>
        <div class="panel-body">
            <ul class="article-wrap">
                <li><a href="#">活动活动活动活动</a><span class="publish-date">2015-12-20</span></li>
                <li><a href="#">活动活动活动活动</a><span class="publish-date">2015-12-20</span></li>
                <li><a href="#">活动活动活动活动</a><span class="publish-date">2015-12-20</span></li>
                <li><a href="#">活动活动活动活动</a><span class="publish-date">2015-12-20</span></li>
                <li><a href="#">活动活动活动活动</a><span class="publish-date">2015-12-20</span></li>
            </ul>
        </div>
    </div>
</div>
	<footer>
		<div class="copy-right">
			Copyright © 2011 - 2015 sermay KTV, All Rights Reserved
		</div>
	</footer>
</div>
	<script src="/Public/js/lib/require.js" data-main="/Public/js/index.js"></script>
 </body>
 </html>