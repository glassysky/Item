/**
 * Created by Administrator on 2015/11/26.
 */

define(['init','config'],function(init,CONFIG){


    return {
        getAry : function(inputLength){
            var termsAry;
            var inputLength = parseInt(inputLength);
            switch(inputLength){
                case 2 :
                    termsAry = [
                        '电话','贷款','希望','憧憬','友爱','愉快','勤奋','刻苦','认真','专注','钻研','踏实','勤恳','潇洒','坚强','美丽','漂亮','自信','干净','壮观','小巧','玲珑','健壮','慈祥','温柔','赞许','欣喜','安详','坦然','腼腆','害羞','优美','努力','爱心','甜蜜','积极','友好','自信','勇敢','坚定','整齐','俏丽','端庄','文静','动人','典雅','豁达','美满','和谐','尊敬','快乐','舒心','整洁','温暖','舒服','称赞','简洁','秀丽','妩媚','可爱','匀称','标致','喜悦','感激','欣慰','甜美','魅力','优秀','幸福','兴奋','英俊','关切','坚强','清净','欢喜','消瘦','细挑','富态','富相','臃肿','丽质','标致','精悍','短小','粗实','粗犷','笨 重','黑瘦','彪壮','强健','刚健','单薄','憔悴','纤弱','秀丽','巍峨','高耸','陡峭','聪慧','大方','俏丽','俊秀','帅气','潇洒','迷人','魅力','美丽','可爱','陶醉','吟诵','风铃','悦耳','清脆','动听','优美','消瘦','工厂','工地','戒毒','工具','工序','工业','戒烟','戒指','式样','工程','工资','工会','工作','工人','工商','节能','节奏','节目','蒸汽','节省','节日','茁壮','节俭','节约','茅台','苦苦','葫芦','苦难','若干','项目','苦战','若是','苦心','苦练','功臣','功劳','苏联','功能','散布','功力','功夫','散步','功勋','苏丹','散发','功底','菜肴','荔枝','散装','功效','功绩','功课','苏州','功率','散文','勒索','芜湖','鞍山','著名','鞠躬','著称','鞭策','革新','革命','苹果','戈壁','葬礼','荆门','巧妙','邪恶','卧铺','茫茫','落幕','东莞','东欧','落成','薄膜','落脚','落地','东亚','菏泽','落水','落叶','范畴','范围','东山','落后','东西','落入','东部','东北','范例','东侧','东风','东经','薄弱','东京','东方','萌芽','草药','划出','草地','蓝天','昔日','划归','蓝图','萌发','划定','草案','蓝色','慕名','募捐','划拨','草木','蔓延','划分','募集','勤劳','勤奋','或者','匮乏','勤恳','勤俭','或许','苗头','英勇','英雄','英寸','贡献','黄埔','英才','黄河','黄海','黄色','黄金','英镑','黄牛','黄牌','英姿','英语','黄帝','英文','蔬菜','巨大','巨型','世上','世界','巨幅','巨额','蔚然','艺术','芯片','巨资','世代','世俗','世纪','巨变','劳工','荣获','蒙古','劳力','蒙受','劳动','荣幸','营救','荣誉','劳累','荧屏','营业','营长','劳务','营造','营利','营养','葡萄','菊花','警卫','警力','敬爱','获胜','敬献','警惕','警官','警察','警钟','警报','警告','获得','警备','敬意','获奖','获准','敬佩','警方','区划','区区','区县','区域','欧亚','欧洲','区别','殴打','区长','欧美','区间','区分','蓬莱','医药','医院','攻克','医用','攻击','董事','攻占','医治','医学','攻坚','攻势','医务','医生','医科','攻入','医疗','攻关','萎缩','菩萨','薪金','切除','切磋','切断','切割','切实','切身','萧条','花草','荟萃','恐龙','花卉','茶叶','共鸣','巩固','花园','花甲','恐怖','恐惧','花钱','茶馆','花生','花篮','荷兰','花絮','花朵','花费','花纹','共享','共识','蕴藏','药物','药厂','药品','药材','芦苇','芒果','芳香','蓄积','蓄意','陈列','陈旧','陈述','子孙','子弟','子女','子弹','孕育','取出','取胜','盈亏','取暖','聚居','取名','取材','取得','取代','盈余','聚集','取经','取缔','取证','承办','随同','承包','承担','随手','承接','随机','承租','承德','陌生','承诺','承认','阻碍','阻止','阴影','阻挠','阻挡','阴谋','陆地','卫士','耳目','卫冕','卫星','陆军','陕西','卫生','陕北','耳朵','陆续','隔绝','耻辱','孙子','阳台','阳春','阳光','职工','职能','职责','职员','职业','职守','职权','职务','亟待','职称','职位','孟子','阵雨','阵容','阵地','出院','出台','出厂','出面','出力','聘用','出去','出土','出走','出场','出境','出击','出于','出事','出现','出来','出路','出口','出国','出山','出书','出发','出席','出色','出名','出手','出租','出生','出版','出血','出乎','出入','出差','出头','出资','出产','出门','聘任','出售','出线','出纳','皮鞋','孔子','皮肤','皮毛','皮带','孔雀','了解','也门','院落','辽宁','院校','院长','辽阔','耽误','隐藏','隐蔽','聊城','隐形','聊天','陷于','隐瞒','隐患','陶醉','陷入','陶冶','陶瓷','孤寡','孤独','孤立','阿姨','降落','降雨','降水','降温','降临','隆重','隆冬','降低','降价','联邦','联运','聪明','陪同','联网','联席','联赛','联军','联名','联手','联接','联想','联系','隧道','联姻','联合','陪伴','联结','联络','联谊','限期','限量','限度','限定','限额','限制','限产','限价','队友','坠毁','除尘','队员','聆听','阶层','附属','除夕','附近','队长','阶段','队伍','附件','阶级','防范','孩子','防卫','防止','防洪','防治','防水','防汛','及时','防火','防腐','防守','防灾','防空','防护','防务','防御','防病','防盗','防疫','戏曲','戏剧','劲头','劲旅','双边','双轨','双层','双拥','双打','双手','桑拿','双方','参观','参加','参考','参政','参战','参照','劝阻','能力','通用','能耗','能源','能量','通电','通宵','熊猫','通牒','通向','通航','通道','通风','通俗','通货','通缉','熊市','肝胆','肝脏','膨胀','脚步','脚踏','肝炎','脚印','肝癌','助威','肺腑','县城','县志','助理','悬殊','悬浮','悬崖','悬挂','助手','县长','县级','胆子','胆识','加工','架子','加大','驾照','加固','加剧','加快','加以','加热','架构','加重','加入','肿瘤','加倍','加价','贺信','加强','贺词','架设','舆论','力求','力学','力量','力图','力度','力争','甩掉','受阻','受聘','边陲','边防','受骗','爱戴','边境','受到','受理','爱国','边界','受贿','爱民','爱情','爱心','受害','受灾','受损'
                    ];
                    break;
                case 3 :
                    termsAry = [
                        '安徽省','奥运会','八进制','百分比','办公室','办公厅','办事处','办事员','半边天','半成  品','半导体','北冰洋','本报讯','本世纪','必然性','必需品','必要性','编辑部','自尊心','辩证法','标志着','村准化','博物馆','财政部','参考书','参谋长','操作员','常委会','展览会','成品率','乘务员','出版社','出发点','出生率','创造性','炊事员','存储器','打印机','大使馆','大踏步','大西洋','大学生','大洋洲','大自然','代办处','代表团','单方面','党委会','党支部','党中央','德智体','电冰箱','电风扇','电气化','电视机','电视台','电影院','动物园','独创性','对得起','三极管','二进制','发电机','发动机','发言人','反动派','反革命','反作用','房租费','纺织品','废品率','分水岭','缝纫机','服务员','增长率','复印机','负责制','副总理','革命化','革命家','个体户','各部委','各单位','公安部','公使馆','公有制','工程师','工具书','工农兵','工商业','工业化','工业品','工艺品','工作者','共产党','共和国','共青团','购买力','规律性','国防部','国民党','国内外','国庆节','国务院','海南岛','红领巾','后勤部','机器人','机械化','计算机','联合国','理事会','体育馆','天安门','外交部','托儿所','宣传部','留学生','俱乐部','马克思','秘书长','农作物','评论员','普通话','气象台','人民币','日用品','少先队','省军区','铁道部','统计表','图书馆','团支部','拖拉机','托儿所','委员会','无线电','洗衣机','消费品','新产品','新华社','医学院','印度洋','营业员','游泳池','运动员','座右铭','自然界','自动化','自行车'
                    ];
                    break;
                case 4 :
                    termsAry = [
                        '行尸走肉','金蝉脱壳','百里挑一','金玉满堂','背水一战','霸王别姬','天上人间','不吐不快','海阔天空','情非得已','满腹经纶','兵临城下','春暖花开','插翅难逃','黄道吉日','天下无双','偷天换日','两小无猜','卧虎藏龙','珠光宝气','簪缨世族','花花公子','绘声绘影','国色天香','相亲相爱','八仙过海','金玉良缘','掌上明珠','皆大欢喜','逍遥法外','生财有道','极乐世界','情不自禁','愚公移山','魑魅魍魉','龙生九子','精卫填海','海市蜃楼','高山流水','卧薪尝胆','壮志凌云','金枝玉叶','四海一家','穿针引线','无忧无虑','无地自容','三位一体','落叶归根','相见恨晚','惊天动地','滔滔不绝','相濡以沫','长生不死','原来如此','女娲补天','三皇五帝','万箭穿心','水木清华','窈窕淑女','破釜沉舟','天涯海角','牛郎织女','倾国倾城','飘飘欲仙','福星高照','妄自菲薄','永无止境','学富五车','饮食男女','英雄豪杰','国士无双','塞翁失马','万家灯火','石破天惊','精忠报国','养生之道','覆雨翻云','六道轮回','鹰击长空','日日夜夜','厚德载物','亡羊补牢','万里长城','黄金时代','出生入死','一路顺风','随遇而安','千军万马','郑人买履','棋逢对手','叶公好龙','后会无期','守株待兔','凤凰于飞','一生一世','花好月圆','世外桃源','韬光养晦','画蛇添足','青梅竹马','风花雪月','滥竽充数','没完没了','总而言之','欣欣向荣','时光荏苒','差强人意','好好先生','无懈可击','随波逐流','袖手旁观','群雄逐鹿','血战到底','唯我独尊','买椟还珠','龙马精神','一见钟情','喜闻乐见','负荆请罪','三人成虎','河东狮吼','程门立雪','金戈铁马','笑逐颜开','千钧一发','纸上谈兵','风和日丽','邯郸学步','大器晚成','庖丁解牛','甜言蜜语','雷霆万钧','浮生若梦','大开眼界','汗牛充栋','百鸟朝凤','以德服人','白驹过隙','难兄难弟','鬼哭神嚎','声色犬马','指鹿为马','龙争虎斗','雾里看花','男大当婚','未雨绸缪','南辕北辙','三从四德','一丝不挂','高屋建瓴'
                    ];
                    break;
            }
            return termsAry;
        },
        getTermsLen : function(ary){
            return  ary.length;
        },
        //随机数字
        getRandomNumber : function(startNumber,endNumber){
            var startNumber = startNumber ? startNumber : 0;
            var endNumber = endNumber ? endNumber : 100;
            var numberDiff = parseInt(endNumber - startNumber);
            return Math.floor(Math.random() * numberDiff + startNumber);
        },
        //随机读取字母
        getRandomText : function(){
            //var termsAry = this.getAry(CONFIG.trainInitConfig[init.trainType].inputLength);
            var termsAry = this.getAry(2);
            termsAry.push.apply(termsAry,this.getAry(3));
            termsAry.push.apply(termsAry,this.getAry(4));
            var termsLen = this.getTermsLen(termsAry);
            return termsAry[this.getRandomNumber(0 , termsLen - 1)];
        },
    }
});