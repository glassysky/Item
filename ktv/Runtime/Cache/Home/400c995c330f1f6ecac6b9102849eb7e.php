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
 	<div class="container" id="homepage">
 		<!-- 轮播图 -->
 		<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
 			<ol class="carousel-indicators">
 				<li data-target="#carousel-example-generic" data-slide-to=""></li>
 				<li data-target="#carousel-example-generic" data-slide-to=""></li>
 				<li data-target="#carousel-example-generic" data-slide-to=""></li>
 			</ol>

 			<div class="carousel-inner" role="listbox">
 				<div class="item active">
 					<img src="/Public/image/pic1.jpg" alt="">
 					<div class="carousel-caption">
 						...
 					</div>
 				</div>
 				<div class="item">
 					<img src="/Public/image/pic2.jpg" alt="">
 					<div class="carousel-caption">
 						...
 					</div>
 				</div>
 			</div>

 			<a href="#carousel-example-generic" role="button" data-slide="prev" class="left carousel-control">
 				<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
 				<span class="sr-only">Previous</span>
 			</a>
 			<a href="#carousel-example-generic" role="button" data-slide="next" class="right carousel-control">
 				<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
 				<span class="sr-only">Next</span>
 			</a>
 		</div>
 		<!-- 轮播图 -->

		<!-- 活动 -->
		<div class="activity-info">
			<!--<div class="activity-info-head"></div>-->
			<div class="row">
				<div class="col-md-6">
					<div class="panel panel-default">
						<div class="panel-heading">
							<h3 class="panel-title">近期活动</h3>
							<a href="/index.php/Home/Index/activity" class="more-info">更多></a>
						</div>
						<div class="panel-body">
							<ul>
								<li><a href="#">活动</a><span class="publish-date">2015-12-19</span></li>
								<li><a href="#">活动</a><span class="publish-date">2015-12-19</span></li>
								<li><a href="#">活动</a><span class="publish-date">2015-12-19</span></li>
								<li><a href="#">活动</a><span class="publish-date">2015-12-19</span></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="panel panel-default">
						<div class="panel-heading">
							<h3 class="panel-title">公司新闻</h3>
							<a href="/index.php/Home/Index/news" class="more-info">更多></a>
						</div>
						<div class="panel-body">
							<ul>
								<li><a href="#">新闻</a><span class="publish-date">2015-12-19</span></li>
								<li><a href="#">新闻</a><span class="publish-date">2015-12-19</span></li>
								<li><a href="#">新闻</a><span class="publish-date">2015-12-19</span></li>
								<li><a href="#">新闻</a><span class="publish-date">2015-12-19</span></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 活动 -->

 		<!-- 门店信息 -->
 		<div class="ktv-info">
 			<div class="ktv-info-head">
 				<h2>门店信息</h2>
 			</div>
 			<div class="row">
 				<div class="col-md-4">
 					<img src="/Public/image/build1.jpg" alt="" class="img-thumbnail">
 					<div class="ktv-details">
 						<div class="ktv-name"><h4>门店1</h4></div>
 						<div class="ktv-intro">
 							<p>ktv是Karaoke Television。Karaok是个日英文的杂名，Kara 是日文“空”的意思。KTV，从狭义的理解为：提供卡拉ok影音设备与视唱空间的场所。广义理解为集合卡拉ok、慢摇、HI房、背景音乐并提供酒水服务的主营业为夜间的娱乐场。</p>
 						</div>
 						<div class="ktv-location">
 							地址：<span>南京市汉中门金鹰特惠对面</span>
 						</div>
 						<div class="ktv-tel">
 							联系电话：<span>138-8888-8888</span>
 						</div>
 					</div>
 				</div>
 				<div class="col-md-4">
 					<img src="/Public/image/build2.jpg" alt="" class="img-thumbnail">
 					<div class="ktv-details">
 						<div class="ktv-name"><h4>门店2</h4></div>
 						<div class="ktv-intro">
 							<p>ktv是Karaoke Television。Karaok是个日英文的杂名，Kara 是日文“空”的意思。KTV，从狭义的理解为：提供卡拉ok影音设备与视唱空间的场所。广义理解为集合卡拉ok、慢摇、HI房、背景音乐并提供酒水服务的主营业为夜间的娱乐场。</p>
 						</div>
 						<div class="ktv-location">
 							地址：<span>南京市汉中门金鹰特惠对面</span>
 						</div>
 						<div class="ktv-tel">
 							联系电话：<span>138-8888-8888</span>
 						</div>
 					</div>
 				</div>
 				<div class="col-md-4">
 					<img src="/Public/image/build3.jpg" alt="" class="img-thumbnail">
 					<div class="ktv-details">
 						<div class="ktv-name"><h4>门店3</h4></div>
 						<div class="ktv-intro">
 							<p>ktv是Karaoke Television。Karaok是个日英文的杂名，Kara 是日文“空”的意思。KTV，从狭义的理解为：提供卡拉ok影音设备与视唱空间的场所。广义理解为集合卡拉ok、慢摇、HI房、背景音乐并提供酒水服务的主营业为夜间的娱乐场。</p>
 						</div>
 						<div class="ktv-location">
 							地址：<span>南京市汉中门金鹰特惠对面</span>
 						</div>
 						<div class="ktv-tel">
 							联系电话：<span>138-8888-8888</span>
 						</div>
 					</div>
 				</div>
 			</div>
 		</div>
 		<!-- 门店信息 -->

 		<!-- 公司领导 -->
 		<div class="leader-info">
 			<div class="leader-info-head">
 				<h2>公司领导</h2>
 			</div>
 			<div class="row">
 				<div class="col-md-4">
 					<img src="/Public/image/leader.jpg" alt="" class="img-circle">
 					<div class="leader-info-details">
 						<h4>领导</h4>
 						<p>领导是领导者为实现组织的目标而运用权力向其下属施加影响力的一种行为或行为过程。领导工作包括五个必不可少的要素：领导者、被领导者、作用对象（即客观环境）、职权和领导行为。</p>
 					</div>
 				</div>
 				<div class="col-md-4">
 					<img src="/Public/image/leader.jpg" alt="" class="img-circle">
 					<div class="leader-info-details">
 						<h4>领导</h4>
 						<p>领导是领导者为实现组织的目标而运用权力向其下属施加影响力的一种行为或行为过程。领导工作包括五个必不可少的要素：领导者、被领导者、作用对象（即客观环境）、职权和领导行为。</p>
 					</div>
 				</div>
 				<div class="col-md-4">
 					<img src="/Public/image/leader.jpg" alt="" class="img-circle">
 					<div class="leader-info-details">
 						<h4>领导</h4>
 						<p>领导是领导者为实现组织的目标而运用权力向其下属施加影响力的一种行为或行为过程。领导工作包括五个必不可少的要素：领导者、被领导者、作用对象（即客观环境）、职权和领导行为。</p>
 					</div>
 				</div>
 			</div>
 		</div>
 		<!-- 公司领导 -->
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