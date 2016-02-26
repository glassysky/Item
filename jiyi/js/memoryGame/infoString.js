/**
 * Created by cui on 2015/12/17.
 */
define(['config'],function(CONFIG){

    var imgNum = 0;
    var personID = 0;
    //274张图片
    var imgAmount = 100;
    var nameAmount = 100;
    var numArray = [];

    for(var i = 0;i<=imgAmount;i++){
        numArray.push(i);
    }

    return {
        //生成随机数字
        getRandomNumber : function(startNumber,endNumber){
            var startNumber = startNumber ? startNumber : 0;
            var endNumber = endNumber ? endNumber : 100;
            var numberDiff = parseInt(endNumber - startNumber);
            var randomNumber = 0;
            do{
                randomNumber = Math.floor(Math.random() * numberDiff + startNumber);
            }
            while(!numArray[randomNumber]);
            //防止被重选
            numArray[randomNumber] = null;

            return randomNumber;
        },
        getImageNum : function(){
            var imgNum = this.getRandomNumber(1,100);
            return imgNum;
        },
        getImageUrl: function(imgNum){
            return CONFIG.imgUrl + "info/" + imgNum + ".png";
        },
        getRandomText : function(){
            var imgNum = this.getRandomNumber(1,100);
            return imgNum;
        },
        personInfo : {
            "msg" : [
                {
                    "NO" : 1,
                    "name" : "穆罕默德",
                    "nationality" : "印度",
                    "birth" : "1643",
                    "achieve" : "创建伊斯兰教",
                    "saying" : "无知识的热心，犹如在黑暗中远征。"
                },
                {
                    "NO" : 2,
                    "name" : "贝多芬",
                    "nationality" : "芬兰",
                    "birth" : "1827",
                    "achieve" : "《田园交响曲》",
                    "saying" : "天才不过是不断的思索，凡是有脑子的人，都有天才。"
                },
                {
                    "NO" : 3,
                    "name" : "牛顿",
                    "nationality" : "法国",
                    "birth" : "1850",
                    "achieve" : "经典力学三定律",
                    "saying" : "即使为了国王的宝座，也永远不要欺骗、违背真理。"
                },
                {
                    "NO" : 4,
                    "name" : "莫泊桑",
                    "nationality" : "英国",
                    "birth" : "1570",
                    "achieve" : "《包法利夫人》",
                    "saying" : "请宣读吧！"
                },
                {
                    "NO" : 5,
                    "name" : "肖邦",
                    "nationality" : "波兰",
                    "birth" : "1871",
                    "achieve" : "浪漫主义音乐代表人物",
                    "saying" : "真理，哪怕只见到一线，我们也不能让它的光辉变得暗淡。"
                },
                {
                    "NO" : 6,
                    "name" : "莱特",
                    "nationality" : "美国",
                    "birth" : "1810",
                    "achieve" : "发明第一架实用飞机",
                    "saying" : "创造-这就是人类精神最高表现，是欢乐和幸福的源泉！"
                },
                {
                    "NO" : 7,
                    "name" : "孔子",
                    "nationality" : "中国",
                    "birth" : "公元前1000年",
                    "achieve" : "经典力学三定律",
                    "saying" : "即使为了国王的宝座，也永远不要欺骗、违背真理。"
                },
                {
                    "NO" : 8,
                    "name" : "李四光",
                    "nationality" : "波兰",
                    "birth" : "1945",
                    "achieve" : "《地震地质》",
                    "saying" : "爱祖国高于一切。"
                },
                {
                    "NO" : 9,
                    "name" : "李斯特",
                    "nationality" : "罗马",
                    "birth" : "1969",
                    "achieve" : "世界历史上第一位尊崇基督教的罗马皇帝",
                    "saying" : "人生就像是一匹用善恶的丝线交错织成的。"
                },
                {
                    "NO" : 10,
                    "name" : "舒马赫",
                    "nationality" : "英格兰",
                    "birth" : "1969",
                    "achieve" : "7次一级方程式赛车总冠军",
                    "saying" : "尽日谁与我共浴血，他就是我的兄弟。"
                },
                {
                    "NO" : 11,
                    "name" : "君士但丁大帝",
                    "nationality" : "埃及",
                    "birth" : "1386",
                    "achieve" : "击溃法兰西军队",
                    "saying" : "对我怀有善意的人，应该重视的是我的才能和精神内涵，而不是外表现象。"
                },
                {
                    "NO" : 12,
                    "name" : "亨利五世",
                    "nationality" : "德国",
                    "birth" : "272",
                    "achieve" : "钢琴之王",
                    "saying" : "我已经不止一次说过,我并不觉得自己老,所以我不觉得他年轻。"
                },
                {
                    "NO" : 13,
                    "name" : "普希金",
                    "nationality" : "俄罗斯",
                    "birth" : "1699",
                    "achieve" : "《致大海》",
                    "saying" : "假如生活欺骗了你，不要悲伤不要心急。"
                },
                {
                    "NO" : 14,
                    "name" : "笛卡尔",
                    "nationality" : "英国",
                    "birth" : "1569",
                    "achieve" : "笛卡尔坐标系",
                    "saying" : "无法做出决策的人,或欲望过大,或觉悟不足。"
                },
                {
                    "NO" : 15,
                    "name" : "拿破仑",
                    "nationality" : "法国",
                    "birth" : "1800",
                    "achieve" : "建立法兰西第一帝国",
                    "saying" : "胜利与我同在。"
                },
                {
                    "NO" : 16,
                    "name" : "欧拉",
                    "nationality" : "瑞士",
                    "birth" : "1707",
                    "achieve" : "《无穷大分析引论》",
                    "saying" : "宇宙的结构是最完善的而且是最明智的上帝的创造。"
                },
                {
                    "NO" : 17,
                    "name" : "尼米兹",
                    "nationality" : "美国",
                    "birth" : "1900",
                    "achieve" : "《海权》",
                    "saying" : "信心是黑暗中的灯塔。任何时候,决不能失掉信心。"
                },
                {
                    "NO" : 18,
                    "name" : "伏尔泰",
                    "nationality" : "法国",
                    "birth" : "1694",
                    "achieve" : "《老实人》",
                    "saying" : "读书使人心明眼亮。"
                },
                {
                    "NO" : 19,
                    "name" : "伊丽莎白一世",
                    "nationality" : "英格兰",
                    "birth" : "1555",
                    "achieve" : "建立了英国历史上的黄金时代",
                    "saying" : "不是君主宽恕人民，而是人民理解君主。"
                },
                {
                    "NO" : 20,
                    "name" : "卓别林",
                    "nationality" : "瑞士",
                    "birth" : "1889",
                    "achieve" : "学院奖",
                    "saying" : "你们不是机器,也不是牛马,你们是人!!!"
                },
                {
                    "NO" : 21,
                    "name" : "李白",
                    "nationality" : "中国",
                    "birth" : "701",
                    "achieve" : "诗仙",
                    "saying" : "银鞍照白马，飒沓如流星。"
                },
                {
                    "NO" : 22,
                    "name" : "哥伦布",
                    "nationality" : "葡萄牙",
                    "birth" : "1452",
                    "achieve" : "发现美洲",
                    "saying" : "言语无法做到的事情,金子可以做。"
                },
                {
                    "NO" : 23,
                    "name" : "伽利略",
                    "nationality" : "意大利",
                    "birth" : "1564",
                    "achieve" : "发明温度计",
                    "saying" : "经验是知识的唯一源泉。"
                },
                {
                    "NO" : 24,
                    "name" : "车尔尼",
                    "nationality" : "奥地利",
                    "birth" : "1791",
                    "achieve" : "《钢琴理论及演奏大全》",
                    "saying" : "闭嘴，你只需要音乐就行了。"
                },
                {
                    "NO" : 25,
                    "name" : "麦卡锡",
                    "nationality" : "美国",
                    "birth" : "1907",
                    "achieve" : "麦卡锡主义",
                    "saying" : "自由不需要被评论。"
                },
                {
                    "NO" : 26,
                    "name" : "祖冲之",
                    "nationality" : "中国",
                    "birth" : "420",
                    "achieve" : "创立《大明历》",
                    "saying" : "迟序之数，非出神怪，有形可检，有数可推。"
                },
                {
                    "NO" : 27,
                    "name" : "达尔文",
                    "nationality" : "英国",
                    "birth" : "1809",
                    "achieve" : "《物种起源》",
                    "saying" : "寿命的缩短与思想的虚耗成正比。"
                },
                {
                    "NO" : 28,
                    "name" : "欧几里得",
                    "nationality" : "希腊",
                    "birth" : "324",
                    "achieve" : "《几何原本》",
                    "saying" : "在几何里，没有专门为国王铺设的大道。"
                },
                {
                    "NO" : 29,
                    "name" : "陈景润",
                    "nationality" : "中国",
                    "birth" : "1933",
                    "achieve" : "“1+1”哥德巴赫猜想研究",
                    "saying" : "无论成败如何,都要不惜一切地去努力。"
                },
                {
                    "NO" : 30,
                    "name" : "高尔基",
                    "nationality" : "苏联",
                    "birth" : "1868",
                    "achieve" : "《海燕》",
                    "saying" : "科学家的成果是全人类的财产，而科学是最无私的领域。"
                },
                {
                    "NO" : 31,
                    "name" : "麦哲伦",
                    "nationality" : "西班牙",
                    "birth" : "1521",
                    "achieve" : "证明地球是圆的",
                    "saying" : "我自己是凡人,我只要求凡人的幸福。"
                },
                {
                    "NO" : 32,
                    "name" : "契诃夫",
                    "nationality" : "俄国",
                    "birth" : "1860",
                    "achieve" : "《变色龙》",
                    "saying" : "人在智慧上应当是明豁的，道德上应该是清白的，身体上应该是清洁的。"
                },
                {
                    "NO" : 33,
                    "name" : "拉格朗日",
                    "nationality" : "意大利",
                    "birth" : "1736",
                    "achieve" : "拉格朗日中值定理",
                    "saying" : "死亡并不可怕 他只不过是我要遇到的最后一个函数。"
                },
                {
                    "NO" : 34,
                    "name" : "司马迁",
                    "nationality" : "中国",
                    "birth" : "145",
                    "achieve" : "编写第一部纪传体通史",
                    "saying" : "一死一生,乃知交情。"
                },
                {
                    "NO" : 35,
                    "name" : "莫顿",
                    "nationality" : "美国",
                    "birth" : "1819",
                    "achieve" : "推广麻醉剂",
                    "saying" : "医生的职责远不止救助病人。"
                },
                {
                    "NO" : 36,
                    "name" : "列文虎克",
                    "nationality" : "瑞典",
                    "birth" : "1723",
                    "achieve" : "首次发现微生物",
                    "saying" : "我‘最大的优点’，是保护指甲干净。"
                },
                {
                    "NO" : 37,
                    "name" : "柏拉图",
                    "nationality" : "雅典",
                    "birth" : "公元前427",
                    "achieve" : "《理想国》",
                    "saying" : "尊重人不应该胜于尊重真理。"
                },
                {
                    "NO" : 38,
                    "name" : "马丁路德",
                    "nationality" : "德国",
                    "birth" : "1483",
                    "achieve" : "《95条论纲》",
                    "saying" : "我的话就是上帝的话"
                },
                {
                    "NO" : 39,
                    "name" : "李世民",
                    "nationality" : "中国",
                    "birth" : "539",
                    "achieve" : "开创唐朝的“贞观之治”时期",
                    "saying" : "水能载舟，亦能覆舟。"
                },
                {
                    "NO" : 40,
                    "name" : "莎士比亚",
                    "nationality" : "英国",
                    "birth" : "1661",
                    "achieve" : "《王子复仇记》",
                    "saying" : "笨蛋自以为聪明，聪明人才知道自己是笨蛋。"
                },
                {
                    "NO" : 41,
                    "name" : "尼采",
                    "nationality" : "德国",
                    "birth" : "1744",
                    "achieve" : "《疯狂的意义》",
                    "saying" : "人并不平等，他们也不会变平等！"
                },
                {
                    "NO" : 42,
                    "name" : "管谟业",
                    "nationality" : "中国",
                    "birth" : "1955",
                    "achieve" : "诺贝尔文学奖",
                    "saying" : "中国文学的环境只差一个“静”字。"
                },
                {
                    "NO" : 43,
                    "name" : "金大中",
                    "nationality" : "韩国",
                    "birth" : "1924",
                    "achieve" : "诺贝尔和平奖",
                    "saying" : "我活下来了，我还要一直活下去，我坚信上帝与我同在，个人的经历使我坚信这一点。"
                },
                {
                    "NO" : 44,
                    "name" : "安培",
                    "nationality" : "法国",
                    "birth" : "1908",
                    "achieve" : "楞次定律",
                    "saying" : "我该回去实验室了。"
                },
                {
                    "NO" : 45,
                    "name" : "瓦特",
                    "nationality" : "英国",
                    "birth" : "1776",
                    "achieve" : "制造出第一台有实用价值的蒸汽机",
                    "saying" : "书是我的努力，应该要服从我的意志。"
                },
                {
                    "NO" : 46,
                    "name" : "高行健",
                    "nationality" : "法国",
                    "birth" : "1949",
                    "achieve" : "诺贝尔文学奖",
                    "saying" : "我可以没有房子，但是我不能停止创作。"
                },
                {
                    "NO" : 47,
                    "name" : "华盛顿",
                    "nationality" : "美国",
                    "birth" : "1732",
                    "achieve" : "美国的第一任总统",
                    "saying" : "真正的友情，是一株成长缓慢的植物。"
                },
                {
                    "NO" : 48,
                    "name" : "诺贝尔",
                    "nationality" : "瑞士",
                    "birth" : "1833",
                    "achieve" : "发明炸药",
                    "saying" : "科学研究的进展及其日益扩充的领域将唤起我们的希望。"
                },
                {
                    "NO" : 49,
                    "name" : "莫扎特",
                    "nationality" : "神圣罗马帝国",
                    "birth" : "1791",
                    "achieve" : "《安魂曲》",
                    "saying" : "你们都看到了我的天份,但不看到我的勤恳。"
                },
                {
                    "NO" : 50,
                    "name" : "贝尔",
                    "nationality" : "加拿大",
                    "birth" : "1887",
                    "achieve" : "发明电话",
                    "saying" : "喂，芝加哥。"
                },
                {
                    "NO" : 51,
                    "name" : "习近平",
                    "nationality" : "中国",
                    "birth" : "1953",
                    "achieve" : "中华人民共和国主席",
                    "saying" : "敢问路在何方，路在脚下。"
                },
                {
                    "NO" : 52,
                    "name" : "雨果",
                    "nationality" : "法国",
                    "birth" : "1820",
                    "achieve" : "《巴黎圣母院》",
                    "saying" : "即使是一个智慧的地狱，也比一个愚昧的天堂好些。"
                },
                {
                    "NO" : 53,
                    "name" : "肯尼迪",
                    "nationality" : "美国",
                    "birth" : "1917",
                    "achieve" : "解决“古巴导弹危机”",
                    "saying" : "最大的危险是无所行动"
                },
                {
                    "NO" : 54,
                    "name" : "马可尼",
                    "nationality" : "意大利",
                    "birth" : "1847",
                    "achieve" : "无线电之父",
                    "saying" : "受苦是考验,是磨炼,是咬紧牙关挖掉自己心灵上的污点。"
                },
                {
                    "NO" : 55,
                    "name" : "福特",
                    "nationality" : "美国",
                    "birth" : "1863",
                    "achieve" : "普及“福特T型车”",
                    "saying" : "设身处地的为员工着想，才能赢取他们的信任。"
                },
                {
                    "NO" : 56,
                    "name" : "卓别林",
                    "nationality" : "英国",
                    "birth" : "1810",
                    "achieve" : "奥斯卡金像奖终身成就",
                    "saying" : "只要有权势就能获得成功。"
                },
                {
                    "NO" : 57,
                    "name" : "麦克斯韦",
                    "nationality" : "苏格兰",
                    "birth" : "1831",
                    "achieve" : "统计物理学奠基人",
                    "saying" : "能够数是属统治着整个量的世界，而算数的四则运算则能够看作是数学家的全部装备。"
                },
                {
                    "NO" : 58,
                    "name" : "荷马",
                    "nationality" : "雅典",
                    "birth" : "公元前873",
                    "achieve" : "《荷马史诗》",
                    "saying" : "必须肯定人的尊严、价值和力量。"
                },
                {
                    "NO" : 59,
                    "name" : "老子",
                    "nationality" : "中国",
                    "birth" : "公元前571",
                    "achieve" : "道家学派创始人",
                    "saying" : "无为而治。"
                },
                {
                    "NO" : 60,
                    "name" : "凯撒",
                    "nationality" : "罗马共和国",
                    "birth" : "公元前102",
                    "achieve" : "统一罗马",
                    "saying" : "我看见，我来到，我征服。"
                },
                {
                    "NO" : 61,
                    "name" : "高斯",
                    "nationality" : "德国",
                    "birth" : "1777",
                    "achieve" : "证明代数基本定理",
                    "saying" : "数学是科学的女王，而数论是数学的女王。"
                },
                {
                    "NO" : 62,
                    "name" : "海顿",
                    "nationality" : "神圣罗马帝国",
                    "birth" : "1890",
                    "achieve" : "交响曲之父",
                    "saying" : "艺术的真正意义在于使人幸福,使人得到鼓舞和力量。"
                },
                {
                    "NO" : 63,
                    "name" : "培根",
                    "nationality" : "英国",
                    "birth" : "1645",
                    "achieve" : "《学术的进步》",
                    "saying" : "知识就是力量。"
                },
                {
                    "NO" : 64,
                    "name" : "马克思",
                    "nationality" : "俄国",
                    "birth" : "1818",
                    "achieve" : "创建共产党",
                    "saying" : "一门科学，只有当它成功地运用数学时，才能到达真正完善的地步。"
                },
                {
                    "NO" : 65,
                    "name" : "卢梭",
                    "nationality" : "法国",
                    "birth" : "1712",
                    "achieve" : "《社会契约论》",
                    "saying" : "社会就是书，事实就是教材。"
                },
                {
                    "NO" : 66,
                    "name" : "马勒",
                    "nationality" : "奥地利",
                    "birth" : "1860",
                    "achieve" : "《大地之歌》",
                    "saying" : "相信吧,一切都不会是徒劳——你的诞生,你的生命,你的苦难。"
                },
                {
                    "NO" : 67,
                    "name" : "伏打",
                    "nationality" : "意大利",
                    "birth" : "1744",
                    "achieve" : "发明伏打电堆",
                    "saying" : "瞧，放电来了。"
                },
                {
                    "NO" : 68,
                    "name" : "毛泽东",
                    "nationality" : "中国",
                    "birth" : "1893",
                    "achieve" : "毛泽东思想的主要创建者",
                    "saying" : "人类的历史，就是一个不断地从必然王国向自由王国发展的历史。"
                },
                {
                    "NO" : 69,
                    "name" : "玻尔",
                    "nationality" : "丹麦",
                    "birth" : "1885",
                    "achieve" : "创建玻尔模型",
                    "saying" : "我们意见不一的关键是，它是否疯狂到有正确的可能。"
                },
                {
                    "NO" : 70,
                    "name" : "开普勒",
                    "nationality" : "普鲁士",
                    "birth" : "1571",
                    "achieve" : "发现并提出行星运动规律",
                    "saying" : "数学对观察自然做出重要的贡献，它解释了规律结构中简单的原始元素。"
                },
                {
                    "NO" : 71,
                    "name" : "爱迪生",
                    "nationality" : "美国",
                    "birth" : "1847",
                    "achieve" : "发明大王",
                    "saying" : "当你希望成功，当以恒心为良友。"
                },
                {
                    "NO" : 72,
                    "name" : "杨振宁",
                    "nationality" : "美国",
                    "birth" : "1922",
                    "achieve" : "诺贝尔物理学奖",
                    "saying" : "成功的奥秘在于多动手。"
                },
                {
                    "NO" : 73,
                    "name" : "马拉拉",
                    "nationality" : "巴基斯坦",
                    "birth" : "1997",
                    "achieve" : "诺贝尔和平奖",
                    "saying" : "追求自由的心不会畏惧。"
                },
                {
                    "NO" : 74,
                    "name" : "薛定谔",
                    "nationality" : "奥地利",
                    "birth" : "1887",
                    "achieve" : "薛定谔的猫假说",
                    "saying" : "事实揭开它的面纱之前，一切都只是猜想。"
                },
                {
                    "NO" : 75,
                    "name" : "达芬奇",
                    "nationality" : "弗洛伦撒共和国",
                    "birth" : "1352",
                    "achieve" : "《蒙娜丽莎》",
                    "saying" : "勤劳一日，可得一夜安眠；勤劳一生，可得幸福长眠。"
                },
                {
                    "NO" : 76,
                    "name" : "惠更斯",
                    "nationality" : "荷兰",
                    "birth" : "1629",
                    "achieve" : "提出向心力定律",
                    "saying" : "学习知识要善于思考，思考，再思考。"
                },
                {
                    "NO" : 77,
                    "name" : "海森堡",
                    "nationality" : "德国",
                    "birth" : "1901",
                    "achieve" : "不定性理论",
                    "saying" : "我要做的只是以我微薄的绵力来为真理和正义服务。"
                },
                {
                    "NO" : 78,
                    "name" : "林肯",
                    "nationality" : "美国",
                    "birth" : "1809",
                    "achieve" : "废除奴隶制",
                    "saying" : "给别人自由和维护自己的自由，两者同样是崇高的事业。"
                },
                {
                    "NO" : 79,
                    "name" : "袁隆平",
                    "nationality" : "中国",
                    "birth" : "1930",
                    "achieve" : "研发“籼型杂交水稻”",
                    "saying" : "喜看稻菽千重浪，遍地英雄下夕烟。"
                },
                {
                    "NO" : 80,
                    "name" : "郑和",
                    "nationality" : "中国",
                    "birth" : "1271",
                    "achieve" : "七下西洋",
                    "saying" : "国家欲富强,不能置海洋于不顾。"
                },
                {
                    "NO" : 81,
                    "name" : "阿基米德",
                    "nationality" : "古希腊",
                    "birth" : "287",
                    "achieve" : "几何体表面积和体积的计算方法",
                    "saying" : "给我一个支点，我能翘起地球。"
                },
                {
                    "NO" : 82,
                    "name" : "欧几里得",
                    "nationality" : "雅典",
                    "birth" : "公元前265",
                    "achieve" : "几何之父",
                    "saying" : "不要动我的图！"
                },
                {
                    "NO" : 83,
                    "name" : "哈维",
                    "nationality" : "英国",
                    "birth" : "1578",
                    "achieve" : "发现血液循环和心脏的功能",
                    "saying" : "比荣誉美酒爱情和智慧更宝贵更使人幸福的东西是我的友谊。"
                },
                {
                    "NO" : 84,
                    "name" : "梵高",
                    "nationality" : "西班牙",
                    "birth" : "1853",
                    "achieve" : "《向日葵》",
                    "saying" : "让我沿着我自己的道路奋斗吧，千万不要丧失勇气，不要松劲。"
                },
                {
                    "NO" : 85,
                    "name" : "彼得一世",
                    "nationality" : "俄罗斯帝国",
                    "birth" : "1672",
                    "achieve" : "使俄罗斯现代化",
                    "saying" : "有勇气在生活中尝试和解决人生新问题的人让社会变得伟大。"
                },
                {
                    "NO" : 86,
                    "name" : "沈从文",
                    "nationality" : "中国",
                    "birth" : "1902",
                    "achieve" : "是现代作家中成书最多的一个",
                    "saying" : "热情既使人疯狂糊涂，也使人明澈深思。"
                },
                {
                    "NO" : 87,
                    "name" : "巴赫",
                    "nationality" : "日耳曼",
                    "birth" : "1685",
                    "achieve" : "《b小调弥撒曲》",
                    "saying" : "利益是人类行动的一切动力。"
                },
                {
                    "NO" : 88,
                    "name" : "特雷莎",
                    "nationality" : "阿尔巴尼亚",
                    "birth" : "1910",
                    "achieve" : "诺贝尔和平奖",
                    "saying" : "如果我们的行动可以使世界多一点笑颜，那便是值得的。"
                },
                {
                    "NO" : 89,
                    "name" : "华罗庚",
                    "nationality" : "中国",
                    "birth" : "1910",
                    "achieve" : "中国解析数论创始人和开拓者",
                    "saying" : "天才是不足恃的，聪明是不可靠的，要想顺手拣来的伟大科学发明是不可想象的。"
                },
                {
                    "NO" : 90,
                    "name" : "托尔斯泰",
                    "nationality" : "俄罗斯帝国",
                    "birth" : "1722",
                    "achieve" : "《战争与和平》",
                    "saying" : "英雄主义是在于为信仰和真理而牺牲自己。"
                },
                {
                    "NO" : 91,
                    "name" : "普朗克",
                    "nationality" : "德国",
                    "birth" : "1858",
                    "achieve" : "发现量子力学",
                    "saying" : "理想的书籍是智慧的钥匙。"
                },
                {
                    "NO" : 92,
                    "name" : "汪曾祺",
                    "nationality" : "中国",
                    "birth" : "1920",
                    "achieve" : "《葡萄月令》",
                    "saying" : "气，水也；言，浮物也。"
                },
                {
                    "NO" : 93,
                    "name" : "玛丽居里",
                    "nationality" : "法国",
                    "birth" : "1867",
                    "achieve" : "两项诺贝尔奖得主",
                    "saying" : "科学的基础是健康的身体。"
                },
                {
                    "NO" : 94,
                    "name" : "哈勃",
                    "nationality" : "美国",
                    "birth" : "1889",
                    "achieve" : "发明哈勃望远镜",
                    "saying" : "人类看不见的世界，并不是空想的幻影，而是被科学的光辉照射的实际存在。"
                },
                {
                    "NO" : 95,
                    "name" : "费米",
                    "nationality" : "美国",
                    "birth" : "1901",
                    "achieve" : "发现100号化学元素镄",
                    "saying" : "如果实验结果符合假设，这就是测量；如果不符合假设，这就是发现。"
                },
                {
                    "NO" : 96,
                    "name" : "柴可夫斯基",
                    "nationality" : "俄罗斯",
                    "birth" : "1840",
                    "achieve" : "《天鹅湖》",
                    "saying" : "灵感全然不是漂亮地挥着手,而是如健牛般竭尽全力工作的心理状态。"
                },
                {
                    "NO" : 97,
                    "name" : "海伦凯勒",
                    "nationality" : "美国",
                    "birth" : "1880",
                    "achieve" : "获得总统自由勋章",
                    "saying" : "只要朝着阳光，便不会看见阴影。"
                },
                {
                    "NO" : 98,
                    "name" : "武则天",
                    "nationality" : "中国",
                    "birth" : "624",
                    "achieve" : "中国历史上唯一的女皇帝",
                    "saying" : "君子虽殒，美名不灭。"
                },
                {
                    "NO" : 99,
                    "name" : "李清照",
                    "nationality" : "中国",
                    "birth" : "1155",
                    "achieve" : "婉约派诗人代表",
                    "saying" : "这次第，怎一个愁字了得！"
                },
                {
                    "NO" : 100,
                    "name" : "赫塔·米勒",
                    "nationality" : "德国",
                    "birth" : "1953",
                    "achieve" : "诺贝尔文学奖",
                    "saying" : "不需要那么多理由，就像你为什么要呼吸，为什么要吃饭一样。"
                }

            ]
        }
    }
});