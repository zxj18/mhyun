//本规则仅限规则爱好者交流使用，请下载后于24h内删除
//SEARCHALL
const allList =  ["极品", "淘淘", "555", "奈菲", "奈非星", "美剧网", "新动漫", "奇米", "影映", "韩剧网", "奇遇", "白熊", "骚火", "闪电", "美剧虫", "冷月", "179", "久久", "爱迪","蘑菇","757",'速看','麻花','妮妮萌','鬼片之家','速搜','恐怖鸭','冬瓜','迪迪','忆漫'];
//SEARCHALL
const movielists = [{title:'极品影视', reg: 'jpys', search: 'https://www.jpysvip.net/vodsearch/关键词----------fypage---.html',key:'极品'},{title:'电影淘淘', reg: 'taotao', search:'http://www.flvwec.com/index.php/vod/search/page/fypage/wd/关键词.html', key:'淘淘'},{title:'555', reg: 'fivefive', search:'https://www.o8tv.com/vodsearch/关键词----------fypage---.html', key:'555'},{ title:'爱迪影视', reg: 'aidi', search:'https://aidi.tv/vsearch/关键词----------fypage---.html', key:'爱迪'},{ title:'恐怖鸭', reg: 'kby', search:'https://yanetflix.com/index.php/vod/search/page/fypage/wd/关键词.html', key:'恐怖鸭'},{ title:'奈菲影视', reg: 'nfmovie', search:'https://www.nfmovies.com/search.php?page=fypage&searchword=关键词&searchtype=', key:'奈菲'},{ title:'奈非星', reg: 'nfx', search:'https://nfxhd.com/vodsearch/关键词----------fypage---/', key:'奈非星'},{ title:'美剧网', reg: 'mjhd', search:'https://mjhd.tv/vodsearch/关键词----------fypage---.html', key:'美剧网'},{title:'新动漫', reg:'xsj', search: 'https://m.dm45.com/search/关键词-fypage.html', key:'新动漫'},{title:'奇米动漫', reg: 'qimi', search: 'http://www.qimiqimi.co/vod/search/wd/关键词/page/fypage.html', key:'奇米'},{title:'妮妮萌', reg: 'nnm', search: 'https://www.ninimeng.com/vodsearch/关键词----------fypage---.html', key:'妮妮萌'},{title: '鬼片之家', reg: 'gpzj', search: 'https://www.guipian456.com/search.php?page=fypage&searchword=关键词&searchtype=', key:'鬼片之家'},{title: '麻花电影', reg: 'mhdy', search: 'https://www.ubo110.com/search/关键词----------fypage---.html', key:'麻花'},{title: '影映剧场', reg: 'yyjc', search: 'https://www.acmdy.com/vodsearch/page/fypage/wd/关键词.html', key:'影映'},{ title:'新奇遇', reg: 'nqy', search:'https://www.newqiyu.com/search/关键词----------fypage---.html', key:'奇遇'},{title: '韩剧网', reg:'hjw97', search:'http://www.97hanju.co/vodsearch/关键词----------fypage---/', key:'韩剧网'},{ title:'白熊', reg: 'bx', search:'https://www.woobm.cn/vod/search/page/fypage/wd/关键词.html', key:'白熊'},{ title:'骚火', reg: 'saohuo', search:'https://v.saohuo.la/search.php?page=fypage&searchword=关键词&searchtype=', key:'骚火'},{title:'闪电影院', reg: 'k1080', search:'https://www.ak1080.com/vodsearch/关键词----------fypage---.html', key:'闪电'},{ title:'蘑菇', reg: 'mogu', search:'http://www.mogu11.com/sosuo/page/fypage/wd/关键词/', key:'蘑菇'},{ title:'冬瓜电影', reg: 'dgdy', search:'https://www.dgyytv.com/vodsearch/wd/关键词-fypage.html', key:'冬瓜'},{ title:'757', reg: 'ys757', search:'https://www.757vcd.com/vod/search/page/fypage/wd/关键词.html', key:'757'},{ title:'速看影视', reg: 'skys', search:'https://www.sukhdw.com/search/wd/关键词/page/fypage.html', key:'速看'},{title: '速搜', reg: 'susou', search: 'https://www.susou.tv/index.php/vod/search/page/fypage/wd/关键词.html', key:'速搜'},{ title:'迪迪影院', reg: 'didi', search:'https://www.4ytv.com/index.php/vod/search/page/fypage/wd/关键词.html', key:'迪迪'},{ title:'美剧虫', reg: 'mjc', search:'https://www.meijuchong.com/vodsearch/关键词----------fypage---.html', key:'美剧虫'},{ title:'冷月', reg: 'lengyue', search:'https://www.lengyue.app/index.php/vod/search/page/fypage/wd/关键词.html', key:'冷月'},{ title:'179', reg: 'ge179', search:'http://www.179u.com/s/关键词----------fypage---.html', key:'179'},{ title:'久久影院', reg: 'jjys', search:'https://www.jiujiuyingsi.com/s/关键词/fypage.html', key:'久久'},{ title:'忆漫影视', reg: 'ymys', search:'https://kan.yimmh.com/vodsearchy/关键词----------fypage---.html', key:'忆漫'}];
const data = {
    mjc: {
        index:'https://www.meijuchong.com',
        router: ['','https://www.meijuchong.com/vodshow/1--排序-分类-----fypage---.html','https://www.meijuchong.com/vodshow/2-地区-排序-分类-----fypage---.html', 'https://www.meijuchong.com/vodshow/3-地区-排序------fypage---.html'],
        type: [{},
            {
                fyclass:{
                    conts: '全部&科幻&剧情&喜剧&悬疑&历史&谍战&青春&家庭&动作',
                    lists: '&科幻&剧情&喜剧&悬疑&历史&谍战&青春&家庭&动作',
                    def:0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index: 'mjc_1'
            },
            {
                fyclass:{
                    conts: '全部&科幻&剧情&悬疑&家庭&动作&喜剧&青春',
                    lists: '&科幻&剧情&悬疑&家庭&动作&喜剧&青春',
                    def: 3
                },
                fyarea:{
                    conts: '全部&英国&意大利&西班牙&泰国&新加坡',
                    lists: '&英国&意大利&西班牙&泰国&新加坡'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'mjc_2'
            },
            {
                fyarea:{
                    conts: '全部&日本&韩国',
                    lists:'&日本&韩国',
                    def: 0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'mjc_3'
            }
        ],
        nav:[{},{title:'欧美剧', url: 'https://z3.ax1x.com/2021/06/09/2sz3Bn.png'},{title:'海外剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'日韩剧', url: 'https://z3.ax1x.com/2021/06/17/2vvBdS.png'}]
    },
    taotao:{
        index:'http://www.flvwec.com/',
        router: ['','http://www.flvwec.com/index.php/vod/show/by/排序/id/分类/page/fypage.html', 'http://www.flvwec.com/index.php/vod/show/by/排序/id/分类/page/fypage.html', 'http://www.flvwec.com/index.php/vod/show/by/排序/年代id/分类/page/fypage.html', 'http://www.flvwec.com/index.php/vod/show/by/排序/id/分类/page/fypage.html', 'http://www.flvwec.com/index.php/vod/show/by/排序/年代id/3/page/fypage.html' ,'http://www.flvwec.com/index.php/vod/show/by/排序/年代id/4/page/fypage.html'],
        type: [{},
            {
                fyclass:{
                    conts: '全部&纪录片&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片',
                    lists: '1&32&6&7&8&9&10&11&12',
                    def: 2
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page/1.html',
                index:'tao_1'
            },
            {
                fyclass:{
                    conts: '全部&纪录片&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片',
                    lists: '1&32&6&7&8&9&10&11&12',
                    def: 3
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page/1.html',
                index:'tao_2'
            },
            {
                fyclass:{
                    conts: '全部&泰国剧&国产剧&港台剧&日韩剧&欧美剧',
                    lists:'2&38&13&14&15&16',
                    def: 0
                },
                fyyear:{
                    conts: '全部&古装&战争&青春偶像&喜剧&家庭&犯罪&动作&奇幻&剧情&历史&经典&乡村&情景&商战&网剧&其他',
                    lists: '&class/%E5%8F%A4%E8%A3%85/&class/%E6%88%98%E4%BA%89/&class/%E9%9D%92%E6%98%A5%E5%81%B6%E5%83%8F/&class/%E5%96%9C%E5%89%A7/&class/%E5%AE%B6%E5%BA%AD/&class/%E7%8A%AF%E7%BD%AA/&class/%E5%8A%A8%E4%BD%9C/&class/%E5%A5%87%E5%B9%BB/&class/%E5%89%A7%E6%83%85/&class/%E5%8E%86%E5%8F%B2/&class/%E7%BB%8F%E5%85%B8/&class/%E4%B9%A1%E6%9D%91/&class/%E6%83%85%E6%99%AF/&class/%E5%95%86%E6%88%98/&class/%E7%BD%91%E5%89%A7/&class/%E5%85%B6%E4%BB%96/'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page/1.html',
                index:'tao_3'
            },
            {
                fyclass: {
                    conts: '全部&纪录片&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片',
                    lists: '1&32&6&7&8&9&10&11&12',
                    def: 0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page/1.html',
                index:'tao_4'
            },
            {
                fyyear:{
                    conts: '全部&选秀&情感&访谈&播报&旅游&音乐&美食&纪实&曲艺&生活&游戏互动&财经&求职',
                    lists: '&class/%E9%80%89%E7%A7%80/&class/%E6%83%85%E6%84%9F/&class/%E8%AE%BF%E8%B0%88/&class/%E6%92%AD%E6%8A%A5/&class/%E6%97%85%E6%B8%B8/&class/%E9%9F%B3%E4%B9%90/&class/%E7%BE%8E%E9%A3%9F/&class/%E7%BA%AA%E5%AE%9E/&class/%E6%9B%B2%E8%89%BA/&class/%E7%94%9F%E6%B4%BB/&class/%E6%B8%B8%E6%88%8F%E4%BA%92%E5%8A%A8/&class/%E8%B4%A2%E7%BB%8F/&class/%E6%B1%82%E8%81%8C/',
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page/1.html',
                index:'tao_5'
            },
            {
                fyyear:{
                    conts: '全部&情感&科幻&热血&推理&搞笑&冒险&萝莉&校园&动作&机战&运动&战争&少年&少女&社会&原创&亲子&益智&励志&其他',
                    lists: '&class/%E6%83%85%E6%84%9F/&class/%E7%A7%91%E5%B9%BB/&class/%E7%83%AD%E8%A1%80/&class/%E6%8E%A8%E7%90%86/&class/%E6%90%9E%E7%AC%91/&class/%E5%86%92%E9%99%A9/&class/%E8%90%9D%E8%8E%89/&class/%E6%A0%A1%E5%9B%AD/&class/%E5%8A%A8%E4%BD%9C/&class/%E6%9C%BA%E6%88%98/&class/%E8%BF%90%E5%8A%A8/&class/%E6%88%98%E4%BA%89/&class/%E5%B0%91%E5%B9%B4/&class/%E5%B0%91%E5%A5%B3/&class/%E7%A4%BE%E4%BC%9A/&class/%E5%8E%9F%E5%88%9B/&class/%E4%BA%B2%E5%AD%90/&class/%E7%9B%8A%E6%99%BA/&class/%E5%8A%B1%E5%BF%97/&class/%E5%85%B6%E4%BB%96/',
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page/1.html',
                index:'tao_6'
            }
            
        ],
        nav:[{},{},{},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'综艺', url: 'https://z3.ax1x.com/2021/06/09/2yS3xe.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'}]
    },
    fivefive:{
        index:'https://www.o8tv.com',
        router:['https://www.o8tv.com/vodshow/分类--排序-年代-----fypage---.html','https://www.o8tv.com/vodshow/分类--排序-年代-----fypage---.html','https://www.o8tv.com/vodshow/分类--排序-年代-----fypage---.html','https://www.o8tv.com/vodshow/分类--排序-年代-----fypage---.html','https://www.o8tv.com/vodshow/分类--排序-年代-----fypage---.html','https://www.o8tv.com/vodshow/分类--排序------fypage---.html'],
        type:[
            {
                fyclass:{
                    conts: '蓝光片库&蓝光电影&蓝光连续剧&蓝光动漫&蓝光综艺&蓝光纪录片',
                    lists: '78&106&107&108&109&110',
                    def:0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                fyyear:{
                    conts:'全部&喜剧&动作&爱情&惊悚&犯罪&冒险&科幻&悬疑&剧情&动画&武侠&战争&歌舞&奇幻&传记&警匪&历史&运动&伦理&灾难&西部&魔幻&枪战&恐怖&记录',
                    lists:'&class/%E5%96%9C%E5%89%A7&class/%E5%8A%A8%E4%BD%9C&class/%E7%88%B1%E6%83%85&class/%E6%83%8A%E6%82%9A&class/%E7%8A%AF%E7%BD%AA&class/%E5%86%92%E9%99%A9&class/%E7%A7%91%E5%B9%BB&class/%E6%82%AC%E7%96%91&class/%E5%89%A7%E6%83%85&class/%E5%8A%A8%E7%94%BB&class/%E6%AD%A6%E4%BE%A0&class/%E6%88%98%E4%BA%89&class/%E6%AD%8C%E8%88%9E&class/%E5%A5%87%E5%B9%BB&class/%E4%BC%A0%E8%AE%B0&class/%E8%AD%A6%E5%8C%AA&class/%E5%8E%86%E5%8F%B2&class/%E8%BF%90%E5%8A%A8&class/%E4%BC%A6%E7%90%86&class/%E7%81%BE%E9%9A%BE&class/%E8%A5%BF%E9%83%A8&class/%E9%AD%94%E5%B9%BB&class/%E6%9E%AA%E6%88%98&class/%E6%81%90%E6%80%96&class/%E8%AE%B0%E5%BD%95'
                },
                pageType: '1---.html',
                index: 'five_1'
            },
            {
                fyclass:{
                    conts: '电影片库&精品推荐&喜剧片&仙侠修真&爱情片&恐龙怪兽&科幻片&犯罪片&动作片&恐怖片&战争片&剧情片',
                    lists: '1&79&80&120&81&121&82&83&84&85&86&87',
                    def:0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                fyyear:{
                    conts:'全部&动作&喜剧&爱情&科幻&恐怖&剧情&战争&惊悚&奇幻&犯罪&悬疑&动画&文艺&传记&古装&历史&歌舞&纪录',
                    lists:'&class/%E5%8A%A8%E4%BD%9C&class/%E5%96%9C%E5%89%A7&class/%E7%88%B1%E6%83%85&class/%E7%A7%91%E5%B9%BB&class/%E6%81%90%E6%80%96&class/%E5%89%A7%E6%83%85&class/%E6%88%98%E4%BA%89&class/%E6%83%8A%E6%82%9A&class/%E5%A5%87%E5%B9%BB&class/%E7%8A%AF%E7%BD%AA&class/%E6%82%AC%E7%96%91&class/%E5%8A%A8%E7%94%BB&class/%E6%96%87%E8%89%BA&class/%E4%BC%A0%E8%AE%B0&class/%E5%8F%A4%E8%A3%85&class/%E5%8E%86%E5%8F%B2&class/%E6%AD%8C%E8%88%9E&class/%E7%BA%AA%E5%BD%95'
                },
                pageType: '1---.html',
                index: 'five_2'
            },
            {
                fyclass:{
                    conts: '电视剧&热剧推荐&国产剧&港台剧&日韩剧&欧美剧',
                    lists: '2&88&13&15&44&45',
                    def:0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                fyyear:{
                    conts:'全部&古装&言情&武侠&偶像&家庭&青春&都市&喜剧&战争&军旅&谍战&悬疑&罪案&穿越&宫廷',
                    lists:'&class/%E5%8F%A4%E8%A3%85&class/%E8%A8%80%E6%83%85&class/%E6%AD%A6%E4%BE%A0&class/%E5%81%B6%E5%83%8F&class/%E5%AE%B6%E5%BA%AD&class/%E9%9D%92%E6%98%A5&class/%E9%83%BD%E5%B8%82&class/%E5%96%9C%E5%89%A7&class/%E6%88%98%E4%BA%89&class/%E5%86%9B%E6%97%85&class/%E8%B0%8D%E6%88%98&class/%E6%82%AC%E7%96%91&class/%E7%BD%AA%E6%A1%88&class/%E7%A9%BF%E8%B6%8A&class/%E5%AE%AB%E5%BB%B7'
                },
                pageType: '1---.html',
                index: 'five_3'
            },
            {
                fyclass:{
                    conts: '动漫&热漫推荐&国产动漫&日本动漫&欧美动漫',
                    lists: '4&94&96&97&98',
                    def:0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                fyyear:{
                    conts:'全部&热血&科幻&美少女&魔幻&经典&励志&少儿&冒险&搞笑&推理&恋爱&治愈&幻想&校园&动物&机战&亲子&儿歌&运动&悬疑&怪物&战争&益智&青春&童话&竞技&动作&社会&友情&真人版&电影版&OVA版&TV版&新番动画&完结动画',
                    lists:'&class/%E7%83%AD%E8%A1%80&class/%E7%A7%91%E5%B9%BB&class/%E7%BE%8E%E5%B0%91%E5%A5%B3&class/%E9%AD%94%E5%B9%BB&class/%E7%BB%8F%E5%85%B8&class/%E5%8A%B1%E5%BF%97&class/%E5%B0%91%E5%84%BF&class/%E5%86%92%E9%99%A9&class/%E6%90%9E%E7%AC%91&class/%E6%8E%A8%E7%90%86&class/%E6%81%8B%E7%88%B1&class/%E6%B2%BB%E6%84%88&class/%E5%B9%BB%E6%83%B3&class/%E6%A0%A1%E5%9B%AD&class/%E5%8A%A8%E7%89%A9&class/%E6%9C%BA%E6%88%98&class/%E4%BA%B2%E5%AD%90&class/%E5%84%BF%E6%AD%8C&class/%E8%BF%90%E5%8A%A8&class/%E6%82%AC%E7%96%91&class/%E6%80%AA%E7%89%A9&class/%E6%88%98%E4%BA%89&class/%E7%9B%8A%E6%99%BA&class/%E9%9D%92%E6%98%A5&class/%E7%AB%A5%E8%AF%9D&class/%E7%AB%9E%E6%8A%80&class/%E5%8A%A8%E4%BD%9C&class/%E7%A4%BE%E4%BC%9A&class/%E5%8F%8B%E6%83%85&class/%E7%9C%9F%E4%BA%BA%E7%89%88&class/%E7%94%B5%E5%BD%B1%E7%89%88&class/OVA%E7%89%88&class/TV%E7%89%88&class/%E6%96%B0%E7%95%AA%E5%8A%A8%E7%94%BB&class/%E5%AE%8C%E7%BB%93%E5%8A%A8%E7%94%BB'
                },
                pageType: '1---.html',
                index: 'five_4'
            },
            {
                fyclass:{
                    conts: '综艺&热综推荐&内地综艺&日韩综艺&港台综艺&欧美综艺',
                    lists: '3&90&77&60&62&61',
                    def:0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                fyyear:{
                    conts:'全部&脱口秀&真人秀&选秀&八卦&访谈&情感&生活&晚会&搞笑&音乐&时尚&游戏&少儿&体育&纪实&科教&曲艺&歌舞&财经&汽车&播报&其他',
                    lists:'&class/%E8%84%B1%E5%8F%A3%E7%A7%80&class/%E7%9C%9F%E4%BA%BA%E7%A7%80&class/%E9%80%89%E7%A7%80&class/%E5%85%AB%E5%8D%A6&class/%E8%AE%BF%E8%B0%88&class/%E6%83%85%E6%84%9F&class/%E7%94%9F%E6%B4%BB&class/%E6%99%9A%E4%BC%9A&class/%E6%90%9E%E7%AC%91&class/%E9%9F%B3%E4%B9%90&class/%E6%97%B6%E5%B0%9A&class/%E6%B8%B8%E6%88%8F&class/%E5%B0%91%E5%84%BF&class/%E4%BD%93%E8%82%B2&class/%E7%BA%AA%E5%AE%9E&class/%E7%A7%91%E6%95%99&class/%E6%9B%B2%E8%89%BA&class/%E6%AD%8C%E8%88%9E&class/%E8%B4%A2%E7%BB%8F&class/%E6%B1%BD%E8%BD%A6&class/%E6%92%AD%E6%8A%A5&class/%E5%85%B6%E4%BB%96'
                },
                pageType: '1---.html',
                index: 'five_5'
            },
            {
                fyclass:{
                    conts: '纪录片库&纪录片&热片推荐',
                    lists: '91&92&111',
                    def:0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index: 'five_6'
            }
        ],
        nav:[{title:'蓝光片库', url: 'https://z3.ax1x.com/2021/06/09/2szQXj.png'},{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'},{title:'综艺', url: 'https://z3.ax1x.com/2021/06/09/2yS3xe.png'},{title:'纪录片', url: 'https://z3.ax1x.com/2021/06/09/2szK1g.png'}]
    },
    jpys:{
        index: 'https://www.jpysvip.net',
        router: ['hiker://empty','https://www.jpysvip.net/vodshow/分类--排序-年代-----fypage---.html','https://www.jpysvip.net/vodshow/分类--排序-年代-----fypage---.html','https://www.jpysvip.net/vodshow/分类--排序-年代-----fypage---.html','https://www.jpysvip.net/vodshow/分类--排序-年代-----fypage---.html', 'https://www.jpysvip.net/vodshow/3-分类-排序------fypage---.html', 'https://www.jpysvip.net/vodshow/4-分类-排序------fypage---.html','https://www.jpysvip.net/vodshow/分类--排序-年代-----fypage---.html'],
        type:[{},
            {
                fyclass:{
                    conts: '全部&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片',
                    lists: '1&6&7&8&9&10&11&12',
                    def:1
                },
                fyyear:{
                    conts:'全部&喜剧&爱情&恐怖&动作&科幻&剧情&战争&警匪&犯罪&动画&奇幻&武侠&冒险&枪战&恐怖&悬疑&惊悚&经典&青春&文艺&微电影&古装&历史&运动&农村&儿童&网络电影',
                    lists:'&%E5%96%9C%E5%89%A7&%E7%88%B1%E6%83%85&%E6%81%90%E6%80%96&%E5%8A%A8%E4%BD%9C&%E7%A7%91%E5%B9%BB&%E5%89%A7%E6%83%85&%E6%88%98%E4%BA%89&%E8%AD%A6%E5%8C%AA&%E7%8A%AF%E7%BD%AA&%E5%8A%A8%E7%94%BB&%E5%A5%87%E5%B9%BB&%E6%AD%A6%E4%BE%A0&%E5%86%92%E9%99%A9&%E6%9E%AA%E6%88%98&%E6%81%90%E6%80%96&%E6%82%AC%E7%96%91&%E6%83%8A%E6%82%9A&%E7%BB%8F%E5%85%B8&%E9%9D%92%E6%98%A5&%E6%96%87%E8%89%BA&%E5%BE%AE%E7%94%B5%E5%BD%B1&%E5%8F%A4%E8%A3%85&%E5%8E%86%E5%8F%B2&%E8%BF%90%E5%8A%A8&%E5%86%9C%E6%9D%91&%E5%84%BF%E7%AB%A5&%E7%BD%91%E7%BB%9C%E7%94%B5%E5%BD%B1'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'jpys_1'
            },
            {
                fyclass:{
                    conts: '全部&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片',
                    lists: '1&6&7&8&9&10&11&12',
                    def:2
                },
                fyyear:{
                    conts:'全部&喜剧&爱情&恐怖&动作&科幻&剧情&战争&警匪&犯罪&动画&奇幻&武侠&冒险&枪战&恐怖&悬疑&惊悚&经典&青春&文艺&微电影&古装&历史&运动&农村&儿童&网络电影',
                    lists:'&%E5%96%9C%E5%89%A7&%E7%88%B1%E6%83%85&%E6%81%90%E6%80%96&%E5%8A%A8%E4%BD%9C&%E7%A7%91%E5%B9%BB&%E5%89%A7%E6%83%85&%E6%88%98%E4%BA%89&%E8%AD%A6%E5%8C%AA&%E7%8A%AF%E7%BD%AA&%E5%8A%A8%E7%94%BB&%E5%A5%87%E5%B9%BB&%E6%AD%A6%E4%BE%A0&%E5%86%92%E9%99%A9&%E6%9E%AA%E6%88%98&%E6%81%90%E6%80%96&%E6%82%AC%E7%96%91&%E6%83%8A%E6%82%9A&%E7%BB%8F%E5%85%B8&%E9%9D%92%E6%98%A5&%E6%96%87%E8%89%BA&%E5%BE%AE%E7%94%B5%E5%BD%B1&%E5%8F%A4%E8%A3%85&%E5%8E%86%E5%8F%B2&%E8%BF%90%E5%8A%A8&%E5%86%9C%E6%9D%91&%E5%84%BF%E7%AB%A5&%E7%BD%91%E7%BB%9C%E7%94%B5%E5%BD%B1'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'jpys_2'
            },
            {
                fyclass:{
                    conts: '全部&国产剧&香港剧&韩国剧&欧美剧&日本剧&台湾剧&泰国剧',
                    lists: '2&13&14&15&16&20&21&22',
                    def:0
                },
                fyyear:{
                    conts:'全部&古装&战争&青春偶像&喜剧&家庭&犯罪&动作&奇幻&剧情&历史&经典&乡村&情景&商战&网剧&其他',
                    lists:'&%E5%8F%A4%E8%A3%85&%E6%88%98%E4%BA%89&%E9%9D%92%E6%98%A5%E5%81%B6%E5%83%8F&%E5%96%9C%E5%89%A7&%E5%AE%B6%E5%BA%AD&%E7%8A%AF%E7%BD%AA&%E5%8A%A8%E4%BD%9C&%E5%A5%87%E5%B9%BB&%E5%89%A7%E6%83%85&%E5%8E%86%E5%8F%B2&%E7%BB%8F%E5%85%B8&%E4%B9%A1%E6%9D%91&%E6%83%85%E6%99%AF&%E5%95%86%E6%88%98&%E7%BD%91%E5%89%A7&%E5%85%B6%E4%BB%96'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'jpys_3'
            },
            {
                fyclass:{
                    conts: '全部&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片',
                    lists: '1&6&7&8&9&10&11&12',
                    def:0
                },
                fyyear:{
                    conts:'全部&喜剧&爱情&恐怖&动作&科幻&剧情&战争&警匪&犯罪&动画&奇幻&武侠&冒险&枪战&恐怖&悬疑&惊悚&经典&青春&文艺&微电影&古装&历史&运动&农村&儿童&网络电影',
                    lists:'&%E5%96%9C%E5%89%A7&%E7%88%B1%E6%83%85&%E6%81%90%E6%80%96&%E5%8A%A8%E4%BD%9C&%E7%A7%91%E5%B9%BB&%E5%89%A7%E6%83%85&%E6%88%98%E4%BA%89&%E8%AD%A6%E5%8C%AA&%E7%8A%AF%E7%BD%AA&%E5%8A%A8%E7%94%BB&%E5%A5%87%E5%B9%BB&%E6%AD%A6%E4%BE%A0&%E5%86%92%E9%99%A9&%E6%9E%AA%E6%88%98&%E6%81%90%E6%80%96&%E6%82%AC%E7%96%91&%E6%83%8A%E6%82%9A&%E7%BB%8F%E5%85%B8&%E9%9D%92%E6%98%A5&%E6%96%87%E8%89%BA&%E5%BE%AE%E7%94%B5%E5%BD%B1&%E5%8F%A4%E8%A3%85&%E5%8E%86%E5%8F%B2&%E8%BF%90%E5%8A%A8&%E5%86%9C%E6%9D%91&%E5%84%BF%E7%AB%A5&%E7%BD%91%E7%BB%9C%E7%94%B5%E5%BD%B1'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'jpys_4'
            },
            {
                fyclass:{
                    conts: '全部&内地&港台&日韩&欧美',
                    lists: '&%E5%86%85%E5%9C%B0&%E6%B8%AF%E5%8F%B0&%E6%97%A5%E9%9F%A9&%E6%AC%A7%E7%BE%8E',
                    def:0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'jpys_5'
            },
            {
                fyclass:{
                    conts: '全部&国产&日本&欧美&其他',
                    lists: '&%E5%9B%BD%E4%BA%A7&%E6%97%A5%E6%9C%AC&%E6%AC%A7%E7%BE%8E&%E5%85%B6%E4%BB%96',
                    def:0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'jpys_6'
            },
            {
                fyclass:{
                    conts: '全部&国产剧&香港剧&韩国剧&欧美剧&日本剧&台湾剧&泰国剧',
                    lists: '2&13&14&15&16&20&21&22',
                    def:2
                },
                fyyear:{
                    conts:'全部&古装&战争&青春偶像&喜剧&家庭&犯罪&动作&奇幻&剧情&历史&经典&乡村&情景&商战&网剧&其他',
                    lists:'&%E5%8F%A4%E8%A3%85&%E6%88%98%E4%BA%89&%E9%9D%92%E6%98%A5%E5%81%B6%E5%83%8F&%E5%96%9C%E5%89%A7&%E5%AE%B6%E5%BA%AD&%E7%8A%AF%E7%BD%AA&%E5%8A%A8%E4%BD%9C&%E5%A5%87%E5%B9%BB&%E5%89%A7%E6%83%85&%E5%8E%86%E5%8F%B2&%E7%BB%8F%E5%85%B8&%E4%B9%A1%E6%9D%91&%E6%83%85%E6%99%AF&%E5%95%86%E6%88%98&%E7%BD%91%E5%89%A7&%E5%85%B6%E4%BB%96'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'jpys_7'
            }
        ],
        nav: [{},{},{},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'综艺', url: 'https://z3.ax1x.com/2021/06/09/2yS3xe.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'}]
    },
    lengyue:{
        index: 'https://www.lengyue.app/',
        router: ['hiker://empty','https://www.lengyue.app/index.php/vod/show/by/排序/分类/id/1/page/fypage.html','https://www.lengyue.app/index.php/vod/show/by/排序/分类/id/2/page/fypage.html','https://www.lengyue.app/index.php/vod/show/by/排序/分类/id/3/page/fypage.html','https://www.lengyue.app/index.php/vod/show/by/排序/分类/id/4/page/fypage.html','https://www.lengyue.app/index.php/vod/show/by/排序/分类/id/34/page/fypage.html'],
        type: [{},
            {
                fyclass:{
                    conts: '全部&喜剧&动作&爱情&惊悚&犯罪&冒险&科幻&悬疑&剧情&动画&武侠&战争&歌舞&奇幻&传记&警匪&历史&运动&伦理&灾难&西部&魔幻&枪战&恐怖&记录',
                    lists: '&class/%E5%96%9C%E5%89%A7&class/%E5%8A%A8%E4%BD%9C&class/%E7%88%B1%E6%83%85&class/%E6%83%8A%E6%82%9A&class/%E7%8A%AF%E7%BD%AA&class/%E5%86%92%E9%99%A9&class/%E7%A7%91%E5%B9%BB&class/%E6%82%AC%E7%96%91&class/%E5%89%A7%E6%83%85&class/%E5%8A%A8%E7%94%BB&class/%E6%AD%A6%E4%BE%A0&class/%E6%88%98%E4%BA%89&class/%E6%AD%8C%E8%88%9E&class/%E5%A5%87%E5%B9%BB&class/%E4%BC%A0%E8%AE%B0&class/%E8%AD%A6%E5%8C%AA&class/%E5%8E%86%E5%8F%B2&class/%E8%BF%90%E5%8A%A8&class/%E4%BC%A6%E7%90%86&class/%E7%81%BE%E9%9A%BE&class/%E8%A5%BF%E9%83%A8&class/%E9%AD%94%E5%B9%BB&class/%E6%9E%AA%E6%88%98&class/%E6%81%90%E6%80%96&class/%E8%AE%B0%E5%BD%95',
                    def:0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'lengyue_1'
            },
            {
                fyclass:{
                    conts: '全部&古装&喜剧&偶像&家庭&警匪&言情&军事&武侠&悬疑&历史&农村&都市&神话&科幻&少儿&搞笑&谍战&战争&年代&犯罪&恐怖&惊悚&爱情&剧情&奇幻',
                    lists: '&class/%E5%8F%A4%E8%A3%85&class/%E5%96%9C%E5%89%A7&class/%E5%81%B6%E5%83%8F&class/%E5%AE%B6%E5%BA%AD&class/%E8%AD%A6%E5%8C%AA&class/%E8%A8%80%E6%83%85&class/%E5%86%9B%E4%BA%8B&class/%E6%AD%A6%E4%BE%A0&class/%E6%82%AC%E7%96%91&class/%E5%8E%86%E5%8F%B2&class/%E5%86%9C%E6%9D%91&class/%E9%83%BD%E5%B8%82&class/%E7%A5%9E%E8%AF%9D&class/%E7%A7%91%E5%B9%BB&class/%E5%B0%91%E5%84%BF&class/%E6%90%9E%E7%AC%91&class/%E8%B0%8D%E6%88%98&class/%E6%88%98%E4%BA%89&class/%E5%B9%B4%E4%BB%A3&class/%E7%8A%AF%E7%BD%AA&class/%E6%81%90%E6%80%96&class/%E6%83%8A%E6%82%9A&class/%E7%88%B1%E6%83%85&class/%E5%89%A7%E6%83%85&class/%E5%A5%87%E5%B9%BB',
                    def:0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'lengyue_2'
            },
            {
                fyclass:{
                    conts: '全部&真人秀&访谈&情感&选秀&旅游&美食&口秀&曲艺&搞笑&游戏&歌舞&生活&音乐&时尚&益智&职场&少儿&纪实&盛会',
                    lists: '&class/%E7%9C%9F%E4%BA%BA%E7%A7%80&class/%E8%AE%BF%E8%B0%88&class/%E6%83%85%E6%84%9F&class/%E9%80%89%E7%A7%80&class/%E6%97%85%E6%B8%B8&class/%E7%BE%8E%E9%A3%9F&class/%E5%8F%A3%E7%A7%80&class/%E6%9B%B2%E8%89%BA&class/%E6%90%9E%E7%AC%91&class/%E6%B8%B8%E6%88%8F&class/%E6%AD%8C%E8%88%9E&class/%E7%94%9F%E6%B4%BB&class/%E9%9F%B3%E4%B9%90&class/%E6%97%B6%E5%B0%9A&class/%E7%9B%8A%E6%99%BA&class/%E8%81%8C%E5%9C%BA&class/%E5%B0%91%E5%84%BF&class/%E7%BA%AA%E5%AE%9E&class/%E7%9B%9B%E4%BC%9A',
                    def:0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'lengyue_3'
            },
            {
                fyclass:{
                    conts: '全部&热血&科幻&推理&搞笑&冒险&校园&动作&机战&运动&战争&少年&少女&社会&原创&亲子&益智&励志&其他',
                    lists: '&class/%E7%83%AD%E8%A1%80&class/%E7%A7%91%E5%B9%BB&class/%E6%8E%A8%E7%90%86&class/%E6%90%9E%E7%AC%91&class/%E5%86%92%E9%99%A9&class/%E6%A0%A1%E5%9B%AD&class/%E5%8A%A8%E4%BD%9C&class/%E6%9C%BA%E6%88%98&class/%E8%BF%90%E5%8A%A8&class/%E6%88%98%E4%BA%89&class/%E5%B0%91%E5%B9%B4&class/%E5%B0%91%E5%A5%B3&class/%E7%A4%BE%E4%BC%9A&class/%E5%8E%9F%E5%88%9B&class/%E4%BA%B2%E5%AD%90&class/%E7%9B%8A%E6%99%BA&class/%E5%8A%B1%E5%BF%97&class/%E5%85%B6%E4%BB%96',
                    def:0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'lengyue_4'
            },
            {
                fyclass:{
                    conts: '全部&番剧&动漫&国创&b电影&b国产&b日韩&b欧美&b港台&b纪录&放映厅',
                    lists: '&class/%E7%95%AA%E5%89%A7&class/%E5%8A%A8%E6%BC%AB&class/%E5%9B%BD%E5%88%9B&class/b%E7%94%B5%E5%BD%B1&class/b%E5%9B%BD%E4%BA%A7&class/b%E6%97%A5%E9%9F%A9&class/b%E6%AC%A7%E7%BE%8E&class/b%E6%B8%AF%E5%8F%B0&class/b%E7%BA%AA%E5%BD%95&class/%E6%94%BE%E6%98%A0%E5%8E%85',
                    def:0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'lengyue_5'
            }
        ],
        nav: [{},{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'综艺', url: 'https://z3.ax1x.com/2021/06/09/2yS3xe.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'},{title:'bilibili', url: 'https://z3.ax1x.com/2021/06/09/2szmh8.png'}]
    },
    ge179:{
        index: 'http://www.179u.com',
        router: ['hiker://empty','http://www.179u.com/ms/分类--排序-年代-----fypage---.html','http://www.179u.com/ms/分类-地区-排序------fypage---.html', 'http://www.179u.com/ms/3-分类-排序------fypage---.html', 'http://www.179u.com/ms/4-地区-排序-分类-----fypage---.html'],
        type : [{},
            {
                fyclass:{
                    conts: '电影片库&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&微电影',
                    lists: '1&6&7&8&9&10&11&12&22',
                    def:0
                },
                fyyear: {
                    conts: '全部&动作&喜剧&爱情&科幻&恐怖&剧情&战争&微电影&儿童&武侠&鬼怪&同性&歌舞&冒险&惊悚&奇幻&悬疑&古装&历史&灾难&犯罪&家庭&传记&情色',
                    lists: '&%E5%8A%A8%E4%BD%9C&%E5%96%9C%E5%89%A7&%E7%88%B1%E6%83%85&%E7%A7%91%E5%B9%BB&%E6%81%90%E6%80%96&%E5%89%A7%E6%83%85&%E6%88%98%E4%BA%89&%E5%BE%AE%E7%94%B5%E5%BD%B1&%E5%84%BF%E7%AB%A5&%E6%AD%A6%E4%BE%A0&%E9%AC%BC%E6%80%AA&%E5%90%8C%E6%80%A7&%E6%AD%8C%E8%88%9E&%E5%86%92%E9%99%A9&%E6%83%8A%E6%82%9A&%E5%A5%87%E5%B9%BB&%E6%82%AC%E7%96%91&%E5%8F%A4%E8%A3%85&%E5%8E%86%E5%8F%B2&%E7%81%BE%E9%9A%BE&%E7%8A%AF%E7%BD%AA&%E5%AE%B6%E5%BA%AD&%E4%BC%A0%E8%AE%B0&%E6%83%85%E8%89%B2'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'ge179_1'
            },
            {
                fyclass:{
                    conts: '电视片库&国产剧&港台剧&日韩剧&欧美剧',
                    lists: '2&13&14&15&16',
                    def: 0
                },
                fyarea: {
                    conts: '全部&大陆&香港&台湾&美国&韩国&日本&泰国&印度&英国&法国&加拿大&西班牙&欧美',
                    lists: '&%E5%A4%A7%E9%99%86&%E9%A6%99%E6%B8%AF&%E5%8F%B0%E6%B9%BE&%E7%BE%8E%E5%9B%BD&%E9%9F%A9%E5%9B%BD&%E6%97%A5%E6%9C%AC&%E6%B3%B0%E5%9B%BD&%E5%8D%B0%E5%BA%A6&%E8%8B%B1%E5%9B%BD&%E6%B3%95%E5%9B%BD&%E5%8A%A0%E6%8B%BF%E5%A4%A7&%E8%A5%BF%E7%8F%AD%E7%89%99&%E6%AC%A7%E7%BE%8E'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'ge179_2'
            },
            {
                fyclass:{
                    conts: '全部&大陆&香港&台湾&美国&韩国&日本&泰国&印度&英国&法国&加拿大&西班牙&欧美',
                    lists:'&%E5%A4%A7%E9%99%86&%E9%A6%99%E6%B8%AF&%E5%8F%B0%E6%B9%BE&%E7%BE%8E%E5%9B%BD&%E9%9F%A9%E5%9B%BD&%E6%97%A5%E6%9C%AC&%E6%B3%B0%E5%9B%BD&%E5%8D%B0%E5%BA%A6&%E8%8B%B1%E5%9B%BD&%E6%B3%95%E5%9B%BD&%E5%8A%A0%E6%8B%BF%E5%A4%A7&%E8%A5%BF%E7%8F%AD%E7%89%99&%E6%AC%A7%E7%BE%8E',
                    def: 0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'ge179_3'
            },
            {
                fyclass: {
                    conts: '全部&动漫&动画',
                    lists: '&%E5%8A%A8%E6%BC%AB&%E5%8A%A8%E7%94%BB',
                    def: 0
                },
                fyarea: {
                    conts: '全部&大陆&香港&台湾&美国&韩国&日本&泰国&印度&英国&法国&加拿大&西班牙&欧美',
                    lists: '&%E5%A4%A7%E9%99%86&%E9%A6%99%E6%B8%AF&%E5%8F%B0%E6%B9%BE&%E7%BE%8E%E5%9B%BD&%E9%9F%A9%E5%9B%BD&%E6%97%A5%E6%9C%AC&%E6%B3%B0%E5%9B%BD&%E5%8D%B0%E5%BA%A6&%E8%8B%B1%E5%9B%BD&%E6%B3%95%E5%9B%BD&%E5%8A%A0%E6%8B%BF%E5%A4%A7&%E8%A5%BF%E7%8F%AD%E7%89%99&%E6%AC%A7%E7%BE%8E'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'ge179_4'
            }
        ],
        nav: [{},{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'综艺', url: 'https://z3.ax1x.com/2021/06/09/2yS3xe.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'}]
    },
    nfmovie:{
        index:'https://www.nfmovies.com',
        router:['https://www.nfmovies.com/search.php?page=fypage&searchtype=5&order=排序&tid=0&area=地区&year=年代&letter=&yuyan=&state=&money=&ver=&jq=&player=分类','hiker://empty','https://www.nfmovies.com/search.php?page=fypage&searchtype=5&order=排序&tid=分类&area=地区&year=年代&letter=&yuyan=&state=&money=&ver=&jq=&player=', 'https://www.nfmovies.com/search.php?page=fypage&searchtype=5&order=排序&tid=分类&area=地区&year=年代&letter=&yuyan=&state=&money=&ver=&jq=&player=', 'https://www.nfmovies.com/search.php?page=fypage&searchtype=5&order=排序&tid=3&area=地区&year=年代&letter=&yuyan=&state=&money=&ver=&jq=&player=', 'https://www.nfmovies.com/search.php?page=1&searchtype=5&order=排序&tid=4&area=地区&year=年代&letter=&yuyan=&state=&money=&ver=&jq=&player='],
        type: [
            {
                fyclass:{
                    conts: '全部&奈非独家&kuyun&ckm3u8&33uu&33uuck&奈非独家2&蔷薇',
                    lists: '&%E5%A5%88%E8%8F%B2%E7%8B%AC%E5%AE%B6%E9%AB%98%E6%B8%85%E7%89%87%E6%BA%90&kuyun&ckm3u8&33uu&33uuck&%E5%A5%88%E8%8F%B2%E7%8B%AC%E5%AE%B6%E9%AB%98%E6%B8%85%E7%89%87%E6%BA%902&%E8%94%B7%E8%96%87ASMR%E4%B8%93%E5%B1%9E%E7%89%87%E6%BA%90',
                    def:1
                },
                fyyear: {
                    conts: '全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999',
                    lists: '&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999'
                },
                fyarea:{
                    conts: '全部&大陆&香港&台湾&日本&韩国&欧美&泰国&其他',
                    lists: '&%E5%A4%A7%E9%99%86&%E9%A6%99%E6%B8%AF&%E5%8F%B0%E6%B9%BE&%E6%97%A5%E6%9C%AC&%E9%9F%A9%E5%9B%BD&%E6%AC%A7%E7%BE%8E&%E6%B3%B0%E5%9B%BD&%E5%85%B6%E4%BB%96'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page=1',
                index:'nf_1'
            },{},
            {
                fyclass:{
                    conts: '全部&动作片&爱情片&科幻片&恐怖片&战争片&喜剧片&纪录片&剧情片',
                    lists: '1&5&6&7&8&9&10&11&12',
                    def:0
                },
                fyyear: {
                    conts: '全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999',
                    lists: '&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999'
                },
                fyarea:{
                    conts: '全部&大陆&香港&台湾&日本&韩国&欧美&泰国&其他',
                    lists: '&%E5%A4%A7%E9%99%86&%E9%A6%99%E6%B8%AF&%E5%8F%B0%E6%B9%BE&%E6%97%A5%E6%9C%AC&%E9%9F%A9%E5%9B%BD&%E6%AC%A7%E7%BE%8E&%E6%B3%B0%E5%9B%BD&%E5%85%B6%E4%BB%96'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page=1',
                index:'nf_2'
            },
            {
                fyclass:{
                    conts: '全部&大陆剧&港台剧&欧美剧&日韩剧',
                    lists: '2&13&14&15&16',
                    def:0
                },
                fyyear: {
                    conts: '全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999',
                    lists: '&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999'
                },
                fyarea:{
                    conts: '全部&大陆&香港&台湾&日本&韩国&欧美&泰国&其他',
                    lists: '&%E5%A4%A7%E9%99%86&%E9%A6%99%E6%B8%AF&%E5%8F%B0%E6%B9%BE&%E6%97%A5%E6%9C%AC&%E9%9F%A9%E5%9B%BD&%E6%AC%A7%E7%BE%8E&%E6%B3%B0%E5%9B%BD&%E5%85%B6%E4%BB%96'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page=1',
                index:'nf_3'
            },
            {
                fyyear: {
                    conts: '全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999',
                    lists: '&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999'
                },
                fyarea:{
                    conts: '全部&大陆&香港&台湾&日本&韩国&欧美&泰国&其他',
                    lists: '&%E5%A4%A7%E9%99%86&%E9%A6%99%E6%B8%AF&%E5%8F%B0%E6%B9%BE&%E6%97%A5%E6%9C%AC&%E9%9F%A9%E5%9B%BD&%E6%AC%A7%E7%BE%8E&%E6%B3%B0%E5%9B%BD&%E5%85%B6%E4%BB%96'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page=1',
                index:'nf_4'
            },
            {
                fyyear: {
                    conts: '全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999',
                    lists: '&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999'
                },
                fyarea:{
                    conts: '全部&大陆&香港&台湾&日本&韩国&欧美&泰国&其他',
                    lists: '&%E5%A4%A7%E9%99%86&%E9%A6%99%E6%B8%AF&%E5%8F%B0%E6%B9%BE&%E6%97%A5%E6%9C%AC&%E9%9F%A9%E5%9B%BD&%E6%AC%A7%E7%BE%8E&%E6%B3%B0%E5%9B%BD&%E5%85%B6%E4%BB%96'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page=1',
                index:'nf_5'
            },
            
        ],
        nav: [{},{},{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'综艺', url: 'https://z3.ax1x.com/2021/06/09/2yS3xe.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'}]
    },
    nfx:{
        index:'https://nfxhd.com/',
        router:['https://nfxhd.com/vodshow/tvplay--排序-分类-----fypage---/','https://nfxhd.com/vodshow/movie--排序-分类-----fypage---/'],
        type:[
            {
                fyclass:{
                    conts: '全部&剧情&喜剧&动作&爱情&科幻&动画&悬疑&惊悚&恐怖&犯罪&同性&传记&历史&战争&西部&奇幻&冒险&灾难&情色',
                    lists: '&%E5%89%A7%E6%83%85&%E5%96%9C%E5%89%A7&%E5%8A%A8%E4%BD%9C&%E7%88%B1%E6%83%85&%E7%A7%91%E5%B9%BB&%E5%8A%A8%E7%94%BB&%E6%82%AC%E7%96%91&%E6%83%8A%E6%82%9A&%E6%81%90%E6%80%96&%E7%8A%AF%E7%BD%AA&%E5%90%8C%E6%80%A7&%E4%BC%A0%E8%AE%B0&%E5%8E%86%E5%8F%B2&%E6%88%98%E4%BA%89&%E8%A5%BF%E9%83%A8&%E5%A5%87%E5%B9%BB&%E5%86%92%E9%99%A9&%E7%81%BE%E9%9A%BE&%E6%83%85%E8%89%B2',
                    def:0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---/',
                index:'nfx_1'
            },
            {
                fyclass:{
                    conts: '全部&剧情&喜剧&动作&爱情&科幻&动画&悬疑&惊悚&恐怖&犯罪&同性&音乐&歌舞&传记&历史&战争&西部&奇幻&冒险&灾难&武侠&情色',
                    lists: '&%E5%89%A7%E6%83%85&%E5%96%9C%E5%89%A7&%E5%8A%A8%E4%BD%9C&%E7%88%B1%E6%83%85&%E7%A7%91%E5%B9%BB&%E5%8A%A8%E7%94%BB&%E6%82%AC%E7%96%91&%E6%83%8A%E6%82%9A&%E6%81%90%E6%80%96&%E7%8A%AF%E7%BD%AA&%E5%90%8C%E6%80%A7&%E9%9F%B3%E4%B9%90&%E6%AD%8C%E8%88%9E&%E4%BC%A0%E8%AE%B0&%E5%8E%86%E5%8F%B2&%E6%88%98%E4%BA%89&%E8%A5%BF%E9%83%A8&%E5%A5%87%E5%B9%BB&%E5%86%92%E9%99%A9&%E7%81%BE%E9%9A%BE&%E6%AD%A6%E4%BE%A0&%E6%83%85%E8%89%B2',
                    def:0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---/',
                index:'nfx_2'
            },
        ],
        nav: [{title:'美剧', url: 'https://z3.ax1x.com/2021/06/09/2sz3Bn.png'},{title:'电影', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'}]
    },
    mjhd:{
        index:'https://mjhd.tv/',
        router:['hiker://empty','https://mjhd.tv/vodshow/分类--排序-年代-----fypage---.html','https://mjhd.tv/vodshow/分类--排序-年代-----fypage---.html', 'https://mjhd.tv/vodshow/21--排序-分类-----fypage---.html', 'https://mjhd.tv/vodshow/23--排序-分类-----fypage---.html'],
        type:[{},
            {
                fyclass:{
                    conts: '科幻&都市&惊悚&犯罪&动漫',
                    lists: '1&2&20&3&4',
                    def:0
                },
                fyyear: {
                    conts: '全部&魔幻&青春&都市&谍战&记录&西部&血腥&罪案&综艺&科幻&真人秀&爱情&歌舞&暴力&政治&战争&惊悚&悬疑&律政&家庭&奇幻&喜剧&吸血鬼&同性&史诗&古装&历史&医务&动画&动作&剧情&冒险&传记&丧尸&情景喜剧',
                    lists: '&%E9%AD%94%E5%B9%BB&%E9%9D%92%E6%98%A5&%E9%83%BD%E5%B8%82&%E8%B0%8D%E6%88%98&%E8%AE%B0%E5%BD%95&%E8%A5%BF%E9%83%A8&%E8%A1%80%E8%85%A5&%E7%BD%AA%E6%A1%88&%E7%BB%BC%E8%89%BA&%E7%A7%91%E5%B9%BB&%E7%9C%9F%E4%BA%BA%E7%A7%80&%E7%88%B1%E6%83%85&%E6%AD%8C%E8%88%9E&%E6%9A%B4%E5%8A%9B&%E6%94%BF%E6%B2%BB&%E6%88%98%E4%BA%89&%E6%83%8A%E6%82%9A&%E6%82%AC%E7%96%91&%E5%BE%8B%E6%94%BF&%E5%AE%B6%E5%BA%AD&%E5%A5%87%E5%B9%BB&%E5%96%9C%E5%89%A7&%E5%90%B8%E8%A1%80%E9%AC%BC&%E5%90%8C%E6%80%A7&%E5%8F%B2%E8%AF%97&%E5%8F%A4%E8%A3%85&%E5%8E%86%E5%8F%B2&%E5%8C%BB%E5%8A%A1&%E5%8A%A8%E7%94%BB&%E5%8A%A8%E4%BD%9C&%E5%89%A7%E6%83%85&%E5%86%92%E9%99%A9&%E4%BC%A0%E8%AE%B0&%E4%B8%A7%E5%B0%B8&%E6%83%85%E6%99%AF%E5%96%9C%E5%89%A7'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'mjhd_1'
            },
            {
                fyclass:{
                    conts: '科幻&都市&惊悚&犯罪&动漫',
                    lists: '1&2&20&3&4',
                    def:1
                },
                fyyear: {
                    conts: '全部&魔幻&青春&都市&谍战&记录&西部&血腥&罪案&综艺&科幻&真人秀&爱情&歌舞&暴力&政治&战争&惊悚&悬疑&律政&家庭&奇幻&喜剧&吸血鬼&同性&史诗&古装&历史&医务&动画&动作&剧情&冒险&传记&丧尸&情景喜剧',
                    lists: '&%E9%AD%94%E5%B9%BB&%E9%9D%92%E6%98%A5&%E9%83%BD%E5%B8%82&%E8%B0%8D%E6%88%98&%E8%AE%B0%E5%BD%95&%E8%A5%BF%E9%83%A8&%E8%A1%80%E8%85%A5&%E7%BD%AA%E6%A1%88&%E7%BB%BC%E8%89%BA&%E7%A7%91%E5%B9%BB&%E7%9C%9F%E4%BA%BA%E7%A7%80&%E7%88%B1%E6%83%85&%E6%AD%8C%E8%88%9E&%E6%9A%B4%E5%8A%9B&%E6%94%BF%E6%B2%BB&%E6%88%98%E4%BA%89&%E6%83%8A%E6%82%9A&%E6%82%AC%E7%96%91&%E5%BE%8B%E6%94%BF&%E5%AE%B6%E5%BA%AD&%E5%A5%87%E5%B9%BB&%E5%96%9C%E5%89%A7&%E5%90%B8%E8%A1%80%E9%AC%BC&%E5%90%8C%E6%80%A7&%E5%8F%B2%E8%AF%97&%E5%8F%A4%E8%A3%85&%E5%8E%86%E5%8F%B2&%E5%8C%BB%E5%8A%A1&%E5%8A%A8%E7%94%BB&%E5%8A%A8%E4%BD%9C&%E5%89%A7%E6%83%85&%E5%86%92%E9%99%A9&%E4%BC%A0%E8%AE%B0&%E4%B8%A7%E5%B0%B8&%E6%83%85%E6%99%AF%E5%96%9C%E5%89%A7'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'mjhd_2'
            },
            {
                fyclass:{
                    conts: '全部&魔幻&青春&都市&谍战&记录&西部&血腥&罪案&综艺&科幻&真人秀&爱情&歌舞&暴力&政治&战争&惊悚&悬疑&律政&家庭&奇幻&喜剧&吸血鬼&同性&史诗&古装&历史&医务&动画&动作&剧情&冒险&传记&丧尸&情景喜剧',
                    lists: '&%E9%AD%94%E5%B9%BB&%E9%9D%92%E6%98%A5&%E9%83%BD%E5%B8%82&%E8%B0%8D%E6%88%98&%E8%AE%B0%E5%BD%95&%E8%A5%BF%E9%83%A8&%E8%A1%80%E8%85%A5&%E7%BD%AA%E6%A1%88&%E7%BB%BC%E8%89%BA&%E7%A7%91%E5%B9%BB&%E7%9C%9F%E4%BA%BA%E7%A7%80&%E7%88%B1%E6%83%85&%E6%AD%8C%E8%88%9E&%E6%9A%B4%E5%8A%9B&%E6%94%BF%E6%B2%BB&%E6%88%98%E4%BA%89&%E6%83%8A%E6%82%9A&%E6%82%AC%E7%96%91&%E5%BE%8B%E6%94%BF&%E5%AE%B6%E5%BA%AD&%E5%A5%87%E5%B9%BB&%E5%96%9C%E5%89%A7&%E5%90%B8%E8%A1%80%E9%AC%BC&%E5%90%8C%E6%80%A7&%E5%8F%B2%E8%AF%97&%E5%8F%A4%E8%A3%85&%E5%8E%86%E5%8F%B2&%E5%8C%BB%E5%8A%A1&%E5%8A%A8%E7%94%BB&%E5%8A%A8%E4%BD%9C&%E5%89%A7%E6%83%85&%E5%86%92%E9%99%A9&%E4%BC%A0%E8%AE%B0&%E4%B8%A7%E5%B0%B8&%E6%83%85%E6%99%AF%E5%96%9C%E5%89%A7',
                    def:0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'mjhd_3'
            },
            {
                fyclass:{
                    conts: '全部&魔幻&青春&都市&谍战&记录&西部&血腥&罪案&综艺&科幻&真人秀&爱情&歌舞&暴力&政治&战争&惊悚&悬疑&律政&家庭&奇幻&喜剧&吸血鬼&同性&史诗&古装&历史&医务&动画&动作&剧情&冒险&传记&丧尸&情景喜剧',
                    lists: '&%E9%AD%94%E5%B9%BB&%E9%9D%92%E6%98%A5&%E9%83%BD%E5%B8%82&%E8%B0%8D%E6%88%98&%E8%AE%B0%E5%BD%95&%E8%A5%BF%E9%83%A8&%E8%A1%80%E8%85%A5&%E7%BD%AA%E6%A1%88&%E7%BB%BC%E8%89%BA&%E7%A7%91%E5%B9%BB&%E7%9C%9F%E4%BA%BA%E7%A7%80&%E7%88%B1%E6%83%85&%E6%AD%8C%E8%88%9E&%E6%9A%B4%E5%8A%9B&%E6%94%BF%E6%B2%BB&%E6%88%98%E4%BA%89&%E6%83%8A%E6%82%9A&%E6%82%AC%E7%96%91&%E5%BE%8B%E6%94%BF&%E5%AE%B6%E5%BA%AD&%E5%A5%87%E5%B9%BB&%E5%96%9C%E5%89%A7&%E5%90%B8%E8%A1%80%E9%AC%BC&%E5%90%8C%E6%80%A7&%E5%8F%B2%E8%AF%97&%E5%8F%A4%E8%A3%85&%E5%8E%86%E5%8F%B2&%E5%8C%BB%E5%8A%A1&%E5%8A%A8%E7%94%BB&%E5%8A%A8%E4%BD%9C&%E5%89%A7%E6%83%85&%E5%86%92%E9%99%A9&%E4%BC%A0%E8%AE%B0&%E4%B8%A7%E5%B0%B8&%E6%83%85%E6%99%AF%E5%96%9C%E5%89%A7',
                    def:0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'mjhd_4'
            } 
        ],
        nav:[{},{title:'科幻', url: 'https://z3.ax1x.com/2021/06/09/2szMcQ.png'},{title:'都市', url: 'https://z3.ax1x.com/2021/06/09/2szE7t.png'},{title:'综艺', url: 'https://z3.ax1x.com/2021/06/09/2yS3xe.png'},{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'}]
    },
    xsj: {
        index: 'https://m.dm45.com/',
        router: ['hiker://empty','','','https://m.dm45.com/list/ribendongman__地区___排序_fypage.html','https://m.dm45.com/list/dongman1_年代_地区___排序_fypage.html', 'https://m.dm45.com/list/dongmandianying_年代_地区___排序_fypage.html', 'https://m.dm45.com/list/move_分类_地区___排序_fypage.html', 'https://m.dm45.com/list/tv__地区___排序_fypage.html','https://m.dm45.com/list/bufantuijian__地区___排序_fypage.html'],
        type: [{},{},{},
            {
                fyarea:{
                    conts: '全部&大陆&香港&台湾&美国&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大',
                    lists: '&dalu&xianggang&taiwan&meiguo&hanguo&riben&taiguo&xinjiapo&malaixiya&yindu&yingguo&faguo&jianada'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'addtime&hits&gold'
                },
                pageType: '1.html',
                index:'xsj_1'
            },
            {
                /*fyclass:{
                    conts:'全部&日本动漫&国产动漫&欧美动漫',
                    lists: 'dongman1&ribendongman&guochandongman&oumeidongman',
                    def:1
                },*/
                fyarea: {
                    conts: '全部&大陆&香港&台湾&美国&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大',
                    lists: '&dalu&xianggang&taiwan&meiguo&hanguo&riben&taiguo&xinjiapo&malaixiya&yindu&yingguo&faguo&jianada'
                },
                fyyear: {
                    conts: '全部&热血&无修&百合&战斗&运动&肉片&战争&冒险&搞笑&装逼&剧情&青春&后宫&校园&励志&恋爱&百合&动作&战机&科幻&萝莉&奇幻&魔法&动画&治愈&美食&萌系&偶像&泡面&漫改&轻改',
                    lists: '&61&176&170&172&173&175&171&62&63&64&65&66&67&68&69&70&71&72&73&74&75&76&77&78&79&80&81&82&83&84&85'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'addtime&hits&gold'
                },
                pageType: '1.html',
                index:'xsj_2'
            },
            {
                /*fyclass:{
                    conts: '全部&日本动漫&国产动漫&欧美动漫',
                    lists: 'dongman1&ribendongman&guochandongman&oumeidongman',
                    def:0
                },*/
                fyarea: {
                    conts: '全部&大陆&香港&台湾&美国&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大',
                    lists: '&dalu&xianggang&taiwan&meiguo&hanguo&riben&taiguo&xinjiapo&malaixiya&yindu&yingguo&faguo&jianada'
                },
                fyyear: {
                    conts: '全部&热血&冒险&搞笑&装逼&剧情&青春&后宫&校园&励志&恋爱&百合&动作&战机&科幻&萝莉&奇幻&魔法&动画&治愈&美食&萌系&偶像&泡面&漫改&轻改&催泪&日常&少儿&少女&社团&推理',
                    lists: '&94&95&96&97&98&99&100&101&102&103&104&105&106&107&108&109&110&111&112&113&114&115&116&117&118&119&120&121&122&123&124'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'addtime&hits&gold'
                },
                pageType: '1.html',
                index:'xsj_3'
            },
            {
                fyclass:{
                    conts: '全部&喜剧&爱情&恐怖&动作&科幻&剧情&战争&警匪&犯罪&动画&奇幻&武侠&冒险&枪战&恐怖&悬疑&惊悚&经典&青春&文艺&微电影&古装&历史&运动&农村&儿童&网络电影&神魔&恐怖',
                    lists: '&34&35&36&37&38&39&40&41&42&43&44&45&46&47&48&49&50&51&52&53&54&55&56&57&58&59&60&163&168',
                    def:0
                },
                fyarea: {
                    conts: '全部&大陆&香港&台湾&美国&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大',
                    lists: '&dalu&xianggang&taiwan&meiguo&hanguo&riben&taiguo&xinjiapo&malaixiya&yindu&yingguo&faguo&jianada'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'addtime&hits&gold'
                },
                pageType: '1.html',
                index:'xsj_4'
            },
            {
                fyarea: {
                    conts: '全部&大陆&香港&台湾&美国&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大',
                    lists: '&dalu&xianggang&taiwan&meiguo&hanguo&riben&taiguo&xinjiapo&malaixiya&yindu&yingguo&faguo&jianada'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'addtime&hits&gold'
                },
                pageType: '1.html',
                index:'xsj_5'
            },
            {
                fyarea: {
                    conts: '全部&大陆&香港&台湾&美国&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大',
                    lists: '&dalu&xianggang&taiwan&meiguo&hanguo&riben&taiguo&xinjiapo&malaixiya&yindu&yingguo&faguo&jianada'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'addtime&hits&gold'
                },
                pageType: '1.html',
                index:'xsj_6'
            }
        ],
        nav: [{},{},{},{},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'},{title:'动漫电影', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'影视', url: 'https://z3.ax1x.com/2021/06/09/2szQXj.png'},{title:'日韩剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'}]
    },
    yyjc: {
        index:'https://www.acmdy.com',
        router: ['hiker://empty','https://www.acmdy.com/vodshow/地区/by/排序/分类/id/dianying/年代/page/fypage.html','https://www.acmdy.com/vodshow/地区/by/排序/分类/id/dianshiju/年代/page/fypage.html', 'https://www.acmdy.com/vodshow/地区/分类/id/zongyi/年代/page/fypage.html', 'https://www.acmdy.com/vodshow/地区/by/排序/分类/id/dongmanfanju/年代/page/fypage.html'],
        type: [{},
            {
                fyclass:{
                    conts: '全部&喜剧&动作&爱情&惊悚&犯罪&冒险&科幻&悬疑&剧情&动画&武侠&战争&歌舞&奇幻&传记&警匪&历史&运动&伦理&灾难&西部&魔幻&枪战&恐怖&记录&其它',
                    lists: '&class/%E5%96%9C%E5%89%A7&class/%E5%8A%A8%E4%BD%9C&class/%E7%88%B1%E6%83%85&class/%E6%83%8A%E6%82%9A&class/%E7%8A%AF%E7%BD%AA&class/%E5%86%92%E9%99%A9&class/%E7%A7%91%E5%B9%BB&class/%E6%82%AC%E7%96%91&class/%E5%89%A7%E6%83%85&class/%E5%8A%A8%E7%94%BB&class/%E6%AD%A6%E4%BE%A0&class/%E6%88%98%E4%BA%89&class/%E6%AD%8C%E8%88%9E&class/%E5%A5%87%E5%B9%BB&class/%E4%BC%A0%E8%AE%B0&class/%E8%AD%A6%E5%8C%AA&class/%E5%8E%86%E5%8F%B2&class/%E8%BF%90%E5%8A%A8&class/%E4%BC%A6%E7%90%86&class/%E7%81%BE%E9%9A%BE&class/%E8%A5%BF%E9%83%A8&class/%E9%AD%94%E5%B9%BB&class/%E6%9E%AA%E6%88%98&class/%E6%81%90%E6%80%96&class/%E8%AE%B0%E5%BD%95&class/%E5%85%B6%E5%AE%83/',
                    def:0
                },
                fyarea: {
                    conts:'全部&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他',
                    lists: '&area/大陆&area/香港&area/台湾&area/美国&area/法国&area/英国&area/日本&area/韩国&area/德国&area/泰国&area/印度&area/意大利&area/西班牙&area/加拿大&area/其他'
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'yyjc_1'
            },
            {
                fyclass:{
                    conts: '全部&古装&喜剧&偶像&家庭&警匪&言情&军事&武侠&悬疑&历史&农村&都市&神话&科幻&少儿&搞笑&谍战&战争&年代&犯罪&恐怖&惊悚&爱情&剧情&奇幻&其它',
                    lists: '&&class/%E5%8F%A4%E8%A3%85&class/%E5%96%9C%E5%89%A7&class/%E5%81%B6%E5%83%8F&class/%E5%AE%B6%E5%BA%AD&class/%E8%AD%A6%E5%8C%AA&class/%E8%A8%80%E6%83%85&class/%E5%86%9B%E4%BA%8B&class/%E6%AD%A6%E4%BE%A0&class/%E6%82%AC%E7%96%91&class/%E5%8E%86%E5%8F%B2&class/%E5%86%9C%E6%9D%91&class/%E9%83%BD%E5%B8%82&class/%E7%A5%9E%E8%AF%9D&class/%E7%A7%91%E5%B9%BB&class/%E5%B0%91%E5%84%BF&class/%E6%90%9E%E7%AC%91&class/%E8%B0%8D%E6%88%98&class/%E6%88%98%E4%BA%89&class/%E5%B9%B4%E4%BB%A3&class/%E7%8A%AF%E7%BD%AA&class/%E6%81%90%E6%80%96&class/%E6%83%8A%E6%82%9A&class/%E7%88%B1%E6%83%85&class/%E5%89%A7%E6%83%85&class/%E5%A5%87%E5%B9%BB&class/%E5%85%B6%E5%AE%83',
                    def:0
                },
                fyarea: {
                    conts:'全部&内地&韩国&香港&台湾&日本&美国&泰国&英国&新加坡&其他',
                    lists: '&area/%E5%86%85%E5%9C%B0&area/%E9%9F%A9%E5%9B%BD&area/%E9%A6%99%E6%B8%AF&area/%E5%8F%B0%E6%B9%BE&area/%E6%97%A5%E6%9C%AC&area/%E7%BE%8E%E5%9B%BD&area/%E6%B3%B0%E5%9B%BD&area/%E8%8B%B1%E5%9B%BD&area/%E6%96%B0%E5%8A%A0%E5%9D%A1&area/%E5%85%B6%E4%BB%96'
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'yyjc_2'
            },
            {
                fyclass:{
                    conts: '全部&真人秀&访谈&情感&选秀&旅游&美食&口秀&曲艺&搞笑&游戏&歌舞&生活&音乐&时尚&益智&职场&少儿&纪实&盛会',
                    lists: '&class/%E7%9C%9F%E4%BA%BA%E7%A7%80&class/%E8%AE%BF%E8%B0%88&class/%E6%83%85%E6%84%9F&class/%E9%80%89%E7%A7%80&class/%E6%97%85%E6%B8%B8&class/%E7%BE%8E%E9%A3%9F&class/%E5%8F%A3%E7%A7%80&class/%E6%9B%B2%E8%89%BA&class/%E6%90%9E%E7%AC%91&class/%E6%B8%B8%E6%88%8F&class/%E6%AD%8C%E8%88%9E&class/%E7%94%9F%E6%B4%BB&class/%E9%9F%B3%E4%B9%90&class/%E6%97%B6%E5%B0%9A&class/%E7%9B%8A%E6%99%BA&class/%E8%81%8C%E5%9C%BA&class/%E5%B0%91%E5%84%BF&class/%E7%BA%AA%E5%AE%9E&class/%E7%9B%9B%E4%BC%9A',
                    def:0
                },
                fyarea: {
                    conts:'全部&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他',
                    lists: '&area/大陆&area/香港&area/台湾&area/美国&area/法国&area/英国&area/日本&area/韩国&area/德国&area/泰国&area/印度&area/意大利&area/西班牙&area/加拿大&area/其他'
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'yyjc_3'
            },
            {
                fyclass:{
                    conts: '全部&里番&热血&科幻&美少女&魔幻&经典&励志&少儿&冒险&搞笑&推理&恋爱&治愈&幻想&校园&动物&机战&亲子&儿歌&运动&悬疑&怪物&战争&益智&青春&童话&竞技&动作&社会&友情&真人版&电影版&OVA版&完结动画&H动画&成人动画&成人动漫',
                    lists: '&class/%E9%87%8C%E7%95%AA&class/%E7%83%AD%E8%A1%80&class/%E7%A7%91%E5%B9%BB&class/%E7%BE%8E%E5%B0%91%E5%A5%B3&class/%E9%AD%94%E5%B9%BB&class/%E7%BB%8F%E5%85%B8&class/%E5%8A%B1%E5%BF%97&class/%E5%B0%91%E5%84%BF&class/%E5%86%92%E9%99%A9&class/%E6%90%9E%E7%AC%91&class/%E6%8E%A8%E7%90%86&class/%E6%81%8B%E7%88%B1&class/%E6%B2%BB%E6%84%88&class/%E5%B9%BB%E6%83%B3&class/%E6%A0%A1%E5%9B%AD&class/%E5%8A%A8%E7%89%A9&class/%E6%9C%BA%E6%88%98&class/%E4%BA%B2%E5%AD%90&class/%E5%84%BF%E6%AD%8C&class/%E8%BF%90%E5%8A%A8&class/%E6%82%AC%E7%96%91&class/%E6%80%AA%E7%89%A9&class/%E6%88%98%E4%BA%89&class/%E7%9B%8A%E6%99%BA&class/%E9%9D%92%E6%98%A5&class/%E7%AB%A5%E8%AF%9D&class/%E7%AB%9E%E6%8A%80&class/%E5%8A%A8%E4%BD%9C&class/%E7%A4%BE%E4%BC%9A&class/%E5%8F%8B%E6%83%85&class/%E7%9C%9F%E4%BA%BA%E7%89%88&class/%E7%94%B5%E5%BD%B1%E7%89%88&class/OVA%E7%89%88&class/%E5%AE%8C%E7%BB%93%E5%8A%A8%E7%94%BB&class/H%E5%8A%A8%E7%94%BB&class/%E6%88%90%E4%BA%BA%E5%8A%A8%E7%94%BB&class/%E6%88%90%E4%BA%BA%E5%8A%A8%E6%BC%AB',
                    def:0
                },
                fyarea: {
                    conts:'全部&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他',
                    lists: '&area/大陆&area/香港&area/台湾&area/美国&area/法国&area/英国&area/日本&area/韩国&area/德国&area/泰国&area/印度&area/意大利&area/西班牙&area/加拿大&area/其他'
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'yyjc_4'
            }
        ],
        nav: [{},{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'综艺', url: 'https://z3.ax1x.com/2021/06/09/2yS3xe.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'}]
    },
    qimi: {
        index: 'http://www.qimiqimi.co/',
        router: ['http://www.qimiqimi.co/show/xinfan/by/排序/分类/年代/page/fypage.html','http://www.qimiqimi.co/show/riman/by/排序/分类/年代/page/fypage.html','http://www.qimiqimi.co/show/wuxiu/by/排序/分类/年代/page/fypage.html', 'http://www.qimiqimi.co/show/guoman/by/排序/分类/年代/page/fypage.html', 'http://www.qimiqimi.co/show/jcdm/by/排序/分类/年代/page/fypage.html'],
        type: [
            {
                fyclass:{
                    conts: '全部&冒险&热血&奇幻&恋爱&校园&后宫&搞笑&治愈&神魔&魔法&百合&推理&科幻&竞技&悬疑&青春&战争&萝莉&魔幻&战斗&日常',
                    lists: '&class/%E5%86%92%E9%99%A9&class/%E7%83%AD%E8%A1%80&class/%E5%A5%87%E5%B9%BB&class/%E6%81%8B%E7%88%B1&class/%E6%A0%A1%E5%9B%AD&class/%E5%90%8E%E5%AE%AB&class/%E6%90%9E%E7%AC%91&class/%E6%B2%BB%E6%84%88&class/%E7%A5%9E%E9%AD%94&class/%E9%AD%94%E6%B3%95&class/%E7%99%BE%E5%90%88&class/%E6%8E%A8%E7%90%86&class/%E7%A7%91%E5%B9%BB&class/%E7%AB%9E%E6%8A%80&class/%E6%82%AC%E7%96%91&class/%E9%9D%92%E6%98%A5&class/%E6%88%98%E4%BA%89&class/%E8%90%9D%E8%8E%89&class/%E9%AD%94%E5%B9%BB&class/%E6%88%98%E6%96%97&class/%E6%97%A5%E5%B8%B8',
                    def:0
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'qimi_1'
            },
            {
                fyclass:{
                    conts: '全部&冒险&热血&奇幻&恋爱&校园&后宫&搞笑&治愈&神魔&魔法&百合&推理&科幻&竞技&悬疑&青春&战争&萝莉&魔幻&战斗&日常',
                    lists: '&class/%E5%86%92%E9%99%A9&class/%E7%83%AD%E8%A1%80&class/%E5%A5%87%E5%B9%BB&class/%E6%81%8B%E7%88%B1&class/%E6%A0%A1%E5%9B%AD&class/%E5%90%8E%E5%AE%AB&class/%E6%90%9E%E7%AC%91&class/%E6%B2%BB%E6%84%88&class/%E7%A5%9E%E9%AD%94&class/%E9%AD%94%E6%B3%95&class/%E7%99%BE%E5%90%88&class/%E6%8E%A8%E7%90%86&class/%E7%A7%91%E5%B9%BB&class/%E7%AB%9E%E6%8A%80&class/%E6%82%AC%E7%96%91&class/%E9%9D%92%E6%98%A5&class/%E6%88%98%E4%BA%89&class/%E8%90%9D%E8%8E%89&class/%E9%AD%94%E5%B9%BB&class/%E6%88%98%E6%96%97&class/%E6%97%A5%E5%B8%B8',
                    def:0
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'qimi_2'
            },
            {
                fyclass:{
                    conts: '全部&冒险&热血&奇幻&恋爱&校园&后宫&搞笑&治愈&神魔&魔法&百合&推理&科幻&竞技&悬疑&青春&战争&萝莉&魔幻&战斗&日常',
                    lists: '&class/%E5%86%92%E9%99%A9&class/%E7%83%AD%E8%A1%80&class/%E5%A5%87%E5%B9%BB&class/%E6%81%8B%E7%88%B1&class/%E6%A0%A1%E5%9B%AD&class/%E5%90%8E%E5%AE%AB&class/%E6%90%9E%E7%AC%91&class/%E6%B2%BB%E6%84%88&class/%E7%A5%9E%E9%AD%94&class/%E9%AD%94%E6%B3%95&class/%E7%99%BE%E5%90%88&class/%E6%8E%A8%E7%90%86&class/%E7%A7%91%E5%B9%BB&class/%E7%AB%9E%E6%8A%80&class/%E6%82%AC%E7%96%91&class/%E9%9D%92%E6%98%A5&class/%E6%88%98%E4%BA%89&class/%E8%90%9D%E8%8E%89&class/%E9%AD%94%E5%B9%BB&class/%E6%88%98%E6%96%97&class/%E6%97%A5%E5%B8%B8',
                    def:0
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'qimi_3'
            },
            {
                fyclass:{
                    conts: '全部&冒险&热血&奇幻&恋爱&校园&后宫&搞笑&治愈&神魔&魔法&百合&推理&科幻&竞技&悬疑&青春&战争&萝莉&魔幻&战斗&日常',
                    lists: '&class/%E5%86%92%E9%99%A9&class/%E7%83%AD%E8%A1%80&class/%E5%A5%87%E5%B9%BB&class/%E6%81%8B%E7%88%B1&class/%E6%A0%A1%E5%9B%AD&class/%E5%90%8E%E5%AE%AB&class/%E6%90%9E%E7%AC%91&class/%E6%B2%BB%E6%84%88&class/%E7%A5%9E%E9%AD%94&class/%E9%AD%94%E6%B3%95&class/%E7%99%BE%E5%90%88&class/%E6%8E%A8%E7%90%86&class/%E7%A7%91%E5%B9%BB&class/%E7%AB%9E%E6%8A%80&class/%E6%82%AC%E7%96%91&class/%E9%9D%92%E6%98%A5&class/%E6%88%98%E4%BA%89&class/%E8%90%9D%E8%8E%89&class/%E9%AD%94%E5%B9%BB&class/%E6%88%98%E6%96%97&class/%E6%97%A5%E5%B8%B8',
                    def:0
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'qimi_4'
            },
            {
                fyclass:{
                    conts: '全部&冒险&热血&奇幻&恋爱&校园&后宫&搞笑&治愈&神魔&魔法&百合&推理&科幻&竞技&悬疑&青春&战争&萝莉&魔幻&战斗&日常',
                    lists: '&class/%E5%86%92%E9%99%A9&class/%E7%83%AD%E8%A1%80&class/%E5%A5%87%E5%B9%BB&class/%E6%81%8B%E7%88%B1&class/%E6%A0%A1%E5%9B%AD&class/%E5%90%8E%E5%AE%AB&class/%E6%90%9E%E7%AC%91&class/%E6%B2%BB%E6%84%88&class/%E7%A5%9E%E9%AD%94&class/%E9%AD%94%E6%B3%95&class/%E7%99%BE%E5%90%88&class/%E6%8E%A8%E7%90%86&class/%E7%A7%91%E5%B9%BB&class/%E7%AB%9E%E6%8A%80&class/%E6%82%AC%E7%96%91&class/%E9%9D%92%E6%98%A5&class/%E6%88%98%E4%BA%89&class/%E8%90%9D%E8%8E%89&class/%E9%AD%94%E5%B9%BB&class/%E6%88%98%E6%96%97&class/%E6%97%A5%E5%B8%B8',
                    def:0
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'qimi_5'
            }
        ],
        nav: [{title:'新番连载', url: 'https://z3.ax1x.com/2021/06/11/24AZOH.png'},{title:'完结日漫', url: 'https://z3.ax1x.com/2021/06/11/24AV6e.png'},{title:'BD番组', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'热门国漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'},{title:'剧场OVA', url: 'https://z3.ax1x.com/2021/06/11/24Ammd.png'}]
    },
    nqy:{
        index:'https://www.newqiyu.com/',
        router:['hiker://empty','https://www.newqiyu.com/show/dianying-地区-排序------fypage---.html','https://www.newqiyu.com/show/dianshiju-地区-排序------fypage---.html', 'https://www.newqiyu.com/show/zongyi-地区-排序------fypage---.html', 'https://www.newqiyu.com/show/dongman-地区-排序------fypage---.html'],
        type:[{},
            {
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&日本&韩国&英国&法国&西班牙&印度&泰国&俄罗斯&伊朗&加拿大&澳大利亚',
                    lists:'&%E5%A4%A7%E9%99%86&%E9%A6%99%E6%B8%AF&%E5%8F%B0%E6%B9%BE&%E7%BE%8E%E5%9B%BD&%E6%97%A5%E6%9C%AC&%E9%9F%A9%E5%9B%BD&%E8%8B%B1%E5%9B%BD&%E6%B3%95%E5%9B%BD&%E8%A5%BF%E7%8F%AD%E7%89%99&%E5%8D%B0%E5%BA%A6&%E6%B3%B0%E5%9B%BD&%E4%BF%84%E7%BD%97%E6%96%AF&%E4%BC%8A%E6%9C%97&%E5%8A%A0%E6%8B%BF%E5%A4%A7&%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'nqy_1'
            },
            {
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&日本&韩国&英国&法国&西班牙&印度&泰国&俄罗斯&伊朗&加拿大&澳大利亚',
                    lists:'&%E5%A4%A7%E9%99%86&%E9%A6%99%E6%B8%AF&%E5%8F%B0%E6%B9%BE&%E7%BE%8E%E5%9B%BD&%E6%97%A5%E6%9C%AC&%E9%9F%A9%E5%9B%BD&%E8%8B%B1%E5%9B%BD&%E6%B3%95%E5%9B%BD&%E8%A5%BF%E7%8F%AD%E7%89%99&%E5%8D%B0%E5%BA%A6&%E6%B3%B0%E5%9B%BD&%E4%BF%84%E7%BD%97%E6%96%AF&%E4%BC%8A%E6%9C%97&%E5%8A%A0%E6%8B%BF%E5%A4%A7&%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'nqy_2'
            },
            {
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&日本&韩国',
                    lists:'&%E5%A4%A7%E9%99%86&%E9%A6%99%E6%B8%AF&%E5%8F%B0%E6%B9%BE&%E7%BE%8E%E5%9B%BD&%E6%97%A5%E6%9C%AC&%E9%9F%A9%E5%9B%BD'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'nqy_3'
            },
            {
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&日本&韩国',
                    lists:'&%E5%A4%A7%E9%99%86&%E9%A6%99%E6%B8%AF&%E5%8F%B0%E6%B9%BE&%E7%BE%8E%E5%9B%BD&%E6%97%A5%E6%9C%AC&%E9%9F%A9%E5%9B%BD'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'nqy_4'
            }
        ],
        nav:[{},{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'综艺', url: 'https://z3.ax1x.com/2021/06/09/2yS3xe.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'}]
    },
    jjys:{
        index: 'https://www.jiujiuyingsi.com/',
        router: ['hiker://empty','https://www.jiujiuyingsi.com/type/1/fypage.html','https://www.jiujiuyingsi.com/type/2/fypage.html', 'https://www.jiujiuyingsi.com/type/3/排序/fypage.html', 'https://www.jiujiuyingsi.com/type/4/fypage.html','https://www.jiujiuyingsi.com/type/5/fypage.html','https://www.jiujiuyingsi.com/type/6/fypage.html'],
        type:[{},
            {
                pageType: '1.html',
                index:'jjys_1'
            },
            {
                pageType: '1.html',
                index:'jjys_2'
            },
            {
                pageType: '1.html',
                index:'jjys_3'
            },
            {
                pageType: '1.html',
                index:'jjys_4'
            },
            {
                pageType: '1.html',
                index:'jjys_5'
            },
            {
                pageType: '1.html',
                index:'jjys_6'
            },
        ],
        nav:[{},{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'综艺', url: 'https://z3.ax1x.com/2021/06/09/2yS3xe.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'}]
    },
    hjw97:{
        index: 'http://www.97hanju.co/',
        router: ['http://www.97hanju.co/vodshow/dianshiju--排序------fypage---/','http://www.97hanju.co/vodshow/zongyi--排序------fypage---/','http://www.97hanju.co/vodshow/dianying--排序------fypage---/'],
        type: [
            {
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---/',
                index:'hjw_2'
            },
            {
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---/',
                index:'hjw_2'
            },
            {
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---/',
                index:'hjw_3'
            }
        ],
        nav:[{title:'韩剧', url: 'https://z3.ax1x.com/2021/06/17/2vvBdS.png'},{title:'综艺', url: 'https://qiu522.github.io/blog/img/movie2.png'},{title:'电影片库', url: 'https://qiu522.github.io/blog/img/dianying_icon.gif'}]
    },
    bx: {
        index: 'https://www.woobm.cn/',
        router: ['hiker://empty','hiker://empty','hiker://empty','https://www.woobm.cn/vod/show/地区/分类/by/排序/id/1/年代/page/fypage.html','https://www.woobm.cn/vod/show/地区/分类/by/排序/id/2/年代/page/fypage.html', 'https://www.woobm.cn/vod/show/地区/分类/by/排序/id/4/年代/page/fypage.html', 'https://www.woobm.cn/vod/show/地区/分类/by/排序/id/3/年代/page/fypage.html','https://www.woobm.cn/vod/show/地区/分类/by/排序/id/32/年代/page/fypage.html','https://www.woobm.cn/vod/show/地区/分类/by/排序/id/34/年代/page/fypage.html'],
        type: [{},{},{},
            {
                fyclass:{
                    conts: '全部&喜剧&爱情&动作&恐怖&科幻&剧情&犯罪&奇幻&战争&悬疑&动画&文艺&伦理&纪录&传记 歌舞&古装&历史&惊悚&其他',
                    lists: '&class/喜剧&class/爱情&class/动作&class/恐怖&class/科幻&class/剧情&class/犯罪&class/奇幻&class/战争&class/悬疑&class/动画&class/文艺&class/伦理&class/纪录&class/传记 歌舞&class/古装&class/历史&class/惊悚&class/其他',
                    def:0
                },
                fyarea:{
                    conts: '全部&大陆&美国&中国香港&韩国&日本&法国&英国&德国&中国台湾&泰国&印度&其他',
                    lists: '&area/大陆&area/美国&area/中国香港&area/韩国&area/日本&area/法国&area/英国&area/德国&area/中国台湾&area/泰国&area/印度&area/其他' 
                },
                fyyear:{
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists:'&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'bx_1'
            },
            {
                fyclass:{
                    conts: '全部&言情&剧情&伦理&喜剧&悬疑&都市&偶像&古装&军事&警匪&历史&励志&神话&谍战&青春&家庭&动作&情景&武侠&科幻&其他',
                    lists: '&class/言情&class/剧情&class/伦理&class/喜剧&class/悬疑&class/都市&class/偶像&class/古装&class/军事&class/警匪&class/历史&class/励志&class/神话&class/谍战&class/青春&class/家庭&class/动作&class/情景&class/武侠&class/科幻&class/其他',
                    def:0
                },
                fyarea:{
                    conts: '全部&大陆&中国香港&中国台湾&韩国&泰国&日本&美国&英国&新加坡',
                    lists: '&area/大陆&area/中国香港&area/中国台湾&area/韩国&area/泰国&area/日本&area/美国&area/英国&area/新加坡' 
                },
                fyyear:{
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists:'&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'bx_2'
            },
            {
                fyclass:{
                    conts: '全部&热血&科幻&美少女&魔幻&经典&励志&少儿&冒险&搞笑&推理&恋爱&治愈&幻想&校园&动物&机战&亲子&儿歌&运动&悬疑&怪物&战争&益智&青春&童话&竞技&动作&社会&友情&真人版&电影版&OVA版&TV版&新番动画&完结动画',
                    lists: '&class/热血&class/科幻&class/美少女&class/魔幻&class/经典&class/励志&class/少儿&class/冒险&class/搞笑&class/推理&class/恋爱&class/治愈&class/幻想&class/校园&class/动物&class/机战&class/亲子&class/儿歌&class/运动&class/悬疑&class/怪物&class/战争&class/益智&class/青春&class/童话&class/竞技&class/动作&class/社会&class/友情&class/真人版&class/电影版&class/OVA版&class/TV版&class/新番动画&class/完结动画',
                    def:0
                },
                fyarea:{
                    conts: '全部&大陆&&日本&美国',
                    lists: '&area/大陆&area/日本&area/美国' 
                },
                fyyear:{
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists:'&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'bx_3'
            },
            {
                fyclass:{
                    conts: '全部&脱口秀&真人秀&搞笑&选秀&八卦&访谈&情感&生活&晚会&音乐&职场&美食&时尚&游戏&少儿&体育&纪实&科教&曲艺&歌舞&财经&汽车&播报&其他',
                    lists: '&class/脱口秀&class/真人秀&class/搞笑&class/选秀&class/八卦&class/访谈&class/情感&class/生活&class/晚会&class/音乐&class/职场&class/美食&class/时尚&class/游戏&class/少儿&class/体育&class/纪实&class/科教&class/曲艺&class/歌舞&class/财经&class/汽车&class/播报&class/其他',
                    def:0
                },
                fyarea:{
                    conts: '全部&大陆&中国香港&中国台湾&韩国&日本&欧美',
                    lists: '&area/大陆&area/中国香港&area/中国台湾&area/韩国&area/日本&area/欧美' 
                },
                fyyear:{
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists:'&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'bx_4'
            },
            {
                fyclass:{
                    conts: '全部&喜剧&爱情&动作&恐怖&科幻&剧情&犯罪&奇幻&战争&悬疑&动画&文艺&伦理&纪录&传记 歌舞&古装&历史&惊悚&其他',
                    lists: '&class/喜剧&class/爱情&class/动作&class/恐怖&class/科幻&class/剧情&class/犯罪&class/奇幻&class/战争&class/悬疑&class/动画&class/文艺&class/伦理&class/纪录&class/传记 歌舞&class/古装&class/历史&class/惊悚&class/其他',
                    def:0
                },
                fyyear:{
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists:'&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'bx_5'
            },
            {
                fyclass:{
                    conts: '全部&喜剧&爱情&动作&恐怖&科幻&剧情&犯罪&奇幻&战争&悬疑&动画&文艺&伦理&纪录&传记 歌舞&古装&历史&惊悚&其他',
                    lists: '&class/喜剧&class/爱情&class/动作&class/恐怖&class/科幻&class/剧情&class/犯罪&class/奇幻&class/战争&class/悬疑&class/动画&class/文艺&class/伦理&class/纪录&class/传记 歌舞&class/古装&class/历史&class/惊悚&class/其他',
                    def:0
                },
                fyyear:{
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists:'&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'bx_6'
            }
        ],
        nav: [{},{},{},{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'},{title:'综艺', url: 'https://z3.ax1x.com/2021/06/09/2yS3xe.png'},{title:'韩剧', url: 'https://z3.ax1x.com/2021/06/17/2vvBdS.png'},{title:'美剧', url: 'https://z3.ax1x.com/2021/06/09/2sz3Bn.png'}]
    },
    saohuo: {
        index: 'https://v.saohuo.la/',
        router: ['hiker://empty','https://v.saohuo.la/search.php?page=fypage&searchtype=5&order=排序&tid=分类&area=地区&year=年代&letter=&yuyan=&state=&money=&ver=&jq=','https://v.saohuo.la/search.php?page=fypage&searchtype=5&order=排序&tid=分类&area=&year=年代&letter=&yuyan=&state=&money=&ver=&jq=','https://v.saohuo.la/search.php?page=fypage&searchtype=5&order=排序&tid=分类&area=地区&year=年代&letter=&yuyan=&state=&money=&ver=&jq='],
        type: [{},
            {
                fyclass:{
                    conts: '全部&喜剧&爱情&恐怖&动作&科幻&战争&犯罪&动画&奇幻&剧情&冒险&悬疑&惊悚&其它',
                    lists: '1&6&7&8&9&10&11&12&13&14&15&16&17&18&19',
                    def:0
                },
                fyarea:{
                    conts: '全部&大陆&美国&中国香港&韩国&日本&法国&英国&德国&中国台湾&泰国&印度&其他',
                    lists: '&大陆&美国&中国香港&韩国&日本&法国&英国&德国&中国台湾&泰国&印度&其他' 
                },
                fyyear:{
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists:'&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page=1',
                index:'saohuo_1'
            },
            {
                fyclass:{
                    conts: '全部&大陆&TVB&韩剧&美剧&日剧&英剧&台剧&其它',
                    lists: '2&20&21&22&23&24&25&26&27',
                    def:0
                },
                fyyear:{
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists:'&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page=1',
                index:'saohuo_2'
            },
            {
                fyclass:{
                    conts: '全部&搞笑&恋爱&热血&格斗&美少女&魔法&机战&校园&亲子&童话&冒险&真人&LOLI&其它',
                    lists: '4&38&39&40&41&42&43&44&45&46&47&48&49&50&51',
                    def:0
                },
                fyarea:{
                    conts: '全部&大陆&美国&日本',
                    lists: '&大陆&美国&日本' 
                },
                fyyear:{
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists:'&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page=1',
                index:'saohuo_3'
            },
            
        ],
        nav: [{},{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'}]
    },
    k1080: {
        index: 'https://www.ak1080.com/',
        router: ['hiker://empty','https://www.ak1080.com/vodshow/1-地区-排序-分类-----fypage---.html','https://www.ak1080.com/vodshow/2-地区-排序-分类-----fypage---.html','https://www.ak1080.com/vodshow/3-地区-排序-分类-----fypage---.html','https://www.ak1080.com/vodshow/4-地区-排序-分类-----fypage---.html'],
        type: [{},
            {
                fyclass:{
                    conts: '全部&喜剧&爱情&恐怖&动作&科幻&剧情&战争&警匪&犯罪&动画&奇幻&武侠&冒险&枪战&恐怖&悬疑&惊悚&经典&青春&文艺&微电影&古装&历史&运动&农村&儿童&网络电影',
                    lists: '&喜剧&爱情&恐怖&动作&科幻&剧情&战争&警匪&犯罪&动画&奇幻&武侠&冒险&枪战&恐怖&悬疑&惊悚&经典&青春&文艺&微电影&古装&历史&运动&农村&儿童&网络电影',
                    def:0
                },
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他',
                    lists:'&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'k1080_1'
            },
            {
                fyclass:{
                    conts: '全部&古装&战争&青春偶像&喜剧&家庭&犯罪&动作&奇幻&剧情&历史&经典&乡村&情景&商战&网剧&其他',
                    lists: '&古装&战争&青春偶像&喜剧&家庭&犯罪&动作&奇幻&剧情&历史&经典&乡村&情景&商战&网剧&其他',
                    def:0
                },
                fyarea:{
                    conts:'全部&内地&韩国&香港&台湾&日本&美国&泰国&英国&新加坡&其他',
                    lists:'&内地&韩国&香港&台湾&日本&美国&泰国&英国&新加坡&其他'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'k1080_2'
            },
            {
                fyclass:{
                    conts: '全部&选秀&情感&访谈&播报&旅游&音乐&美食&纪实&曲艺&生活&游戏互动&财经&求职',
                    lists: '&选秀&情感&访谈&播报&旅游&音乐&美食&纪实&曲艺&生活&游戏互动&财经&求职',
                    def:0
                },
                fyarea:{
                    conts:'全部&内地&港台&日韩&欧美',
                    lists:'&内地&港台&日韩&欧美'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'k1080_3'
            },
            {
                fyclass:{
                    conts: '全部&情感&科幻&热血&推理&搞笑&冒险&萝莉&校园&动作&机战&运动&战争&少年&少女&社会&原创&其他',
                    lists: '&情感&科幻&热血&推理&搞笑&冒险&萝莉&校园&动作&机战&运动&战争&少年&少女&社会&原创&其他',
                    def:0
                },
                fyarea:{
                    conts:'全部&国产&日本&欧美&其他',
                    lists:'&国产&日本&欧美&其他'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'k1080_4'
            },
        ],
        nav: [{},{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'综艺', url: 'https://z3.ax1x.com/2021/06/09/2yS3xe.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'}]
    },
    aidi: {
        index: 'https://aidi.tv/',
        router: ['hiker://empty','https://aidi.tv/show/dianying-地区-排序-分类-----fypage---.html','https://aidi.tv/show/lianxuju-地区-排序-分类-----fypage---.html','https://aidi.tv/show/zongyi-地区-排序-分类-----fypage---.html','https://aidi.tv/show/hanguodianying--排序------fypage---.html', 'https://aidi.tv/show/dongman-地区-排序-分类-----fypage---.html', 'https://aidi.tv/show/jilu--排序------fypage---.html'],
        type: [{},
            {
                fyclass:{
                    conts: '全部&喜剧&爱情&恐怖&动作&科幻&剧情&战争&警匪&犯罪&动画&奇幻&武侠&冒险&枪战&恐怖&悬疑&惊悚&经典&青春&文艺&微电影&古装&历史&运动&农村&儿童&网络电影&情色',
                    lists: '&喜剧&爱情&恐怖&动作&科幻&剧情&战争&警匪&犯罪&动画&奇幻&武侠&冒险&枪战&恐怖&悬疑&惊悚&经典&青春&文艺&微电影&古装&历史&运动&农村&儿童&网络电影&情色',
                    def:0
                },
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他',
                    lists:'&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'aidi_1'
            },
            {
                fyclass:{
                    conts: '全部&古装&战争&青春偶像&喜剧&家庭&犯罪&动作&奇幻&剧情&历史&经典&乡村&情景&商战&网剧&其他',
                    lists: '&古装&战争&青春偶像&喜剧&家庭&犯罪&动作&奇幻&剧情&历史&经典&乡村&情景&商战&网剧&其他',
                    def:0
                },
                fyarea:{
                    conts:'全部&内地&韩国&香港&台湾&日本&美国&泰国&英国&新加坡&其他',
                    lists:'&内地&韩国&香港&台湾&日本&美国&泰国&英国&新加坡&其他'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'aidi_2'
            },
            {
                fyclass:{
                    conts: '全部&选秀&情感&访谈&播报&旅游&音乐&美食&纪实&曲艺&生活&游戏互动&财经&求职',
                    lists: '&选秀&情感&访谈&播报&旅游&音乐&美食&纪实&曲艺&生活&游戏互动&财经&求职',
                    def:0
                },
                fyarea:{
                    conts:'全部&内地&港台&日韩&欧美',
                    lists:'&内地&港台&日韩&欧美'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'aidi_3'
            },
            {
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'aidi_4'
            },
            {
                fyclass:{
                    conts: '全部&情感&科幻&热血&推理&搞笑&冒险&萝莉&校园&动作&机战&运动&战争&少年&少女&社会&原创&亲子&益智&励志&其他',
                    lists: '&情感&科幻&热血&推理&搞笑&冒险&萝莉&校园&动作&机战&运动&战争&少年&少女&社会&原创&亲子&益智&励志&其他',
                    def:0
                },
                fyarea:{
                    conts:'全部&国产&日本&欧美&其他',
                    lists:'&国产&日本&欧美&其他'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'aidi_5'
            },
            {
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'aidi_6'
            }
        ],
        nav: [{},{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'综艺', url: 'https://z3.ax1x.com/2021/06/09/2yS3xe.png'},{title:'韩影', url: 'https://z3.ax1x.com/2021/06/17/2vvBdS.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'},{title:'纪录片', url: 'https://z3.ax1x.com/2021/06/09/2szK1g.png'}]
    },
    mogu: {
        index: 'http://www.mogu11.com/',
        router: ['http://www.mogu11.com/fenye/分类-地区-排序-fypage-/','http://www.mogu11.com/fenye/分类-地区-排序-fypage-/','http://www.mogu11.com/fenye/zongyi2-地区-排序-fypage-/','http://www.mogu11.com/fenye/dongman2-地区-排序-fypage-/'],
        type: [
            {
                fyclass:{
                    conts: '全部&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&纪录片',
                    lists: 'v&dz2&xj2&aq2&kh2&kb2&jq2&zz2&jl2',
                    def:0
                },
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他',
                    lists:'&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1-/',
                index:'mogu_1'
            },
            {
                fyclass:{
                    conts: '全部&大陆剧&香港剧&台湾剧&日本剧&韩国剧&欧美剧&海外剧',
                    lists: 'tv&dl2&xg2&tww2&rb2&hg2&om2&hw2',
                    def:0
                },
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他',
                    lists:'&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1-/',
                index:'mogu_2'
            },
            {
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他',
                    lists:'&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1-/',
                index:'mogu_3'
            },
            {
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他',
                    lists:'&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1-/',
                index:'mogu_4'
            }
        ],
        nav: [{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'综艺', url: 'https://z3.ax1x.com/2021/06/09/2yS3xe.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'}]
    },
    ys757: {
        index:'https://www.757vcd.com/',
        router: ['hiker://empty','https://www.757vcd.com/vod/show/地区/by/排序/id/分类/年代/page/fypage.html','https://www.757vcd.com/vod/show/地区/by/排序/id/分类/年代/page/fypage.html','https://www.757vcd.com/vod/show/地区/by/排序/id/3/年代/page/fypage.html','https://www.757vcd.com/vod/show/地区/by/排序/id/4/年代/page/fypage.html'],
        type: [{},
            {
                fyclass:{
                    conts: '全部&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片',
                    lists: '1&18&19&20&21&22&23',
                    def:0
                },
                fyarea: {
                    conts: '全部&大陆&香港&美国&台湾&日本&韩国&泰国&印度&法国&英国&德国&其他',
                    lists: '&area/大陆&area/香港&area/美国&area/台湾&area/日本&area/韩国&area/泰国&area/印度&area/法国&area/英国&area/德国&area/其他',
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'ys757_1'
            },
            {
                fyclass:{
                    conts: '全部&大陆剧&港台剧&日韩剧&欧美剧&新马泰',
                    lists: '2&6&7&8&9&459',
                    def:0
                },
                fyarea: {
                    conts: '全部&大陆&香港&美国&台湾&日本&韩国&泰国&印度&法国&英国&德国&其他',
                    lists: '&area/大陆&area/香港&area/美国&area/台湾&area/日本&area/韩国&area/泰国&area/印度&area/法国&area/英国&area/德国&area/其他',
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'ys757_2'
            },
            {
                fyarea: {
                    conts: '全部&大陆&韩国',
                    lists: '&area/大陆&area/韩国',
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'ys757_3'
            },
            {
                fyarea: {
                    conts: '全部&大陆&日本&美国',
                    lists: '&area/大陆&area/日本&area/美国',
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'ys757_4'
            }
        ],
        nav: [{},{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'综艺', url: 'https://z3.ax1x.com/2021/06/09/2yS3xe.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'}]
    },
    skys: {
        index: 'https://www.sukhdw.com/',
        router: ['hiker://empty','https://www.sukhdw.com/show/dianshiju/地区/by/排序/年代/page/fypage.html','https://www.sukhdw.com/show/dianying/地区/by/排序/年代/page/fypage.html','https://www.sukhdw.com/show/dongman/by/排序/分类/page/fypage.html','https://www.sukhdw.com/show/zongyi/by/排序/分类/page/fypage.html'],
        type: [{},
            {
                fyarea:{
                    conts:'全部&大陆&韩国&香港&台湾&日本&美国&泰国&英国&新加坡&其他',
                    lists:'&area/大陆&area/韩国&area/香港&area/台湾&area/日本&area/美国&area/泰国&area/英国&area/新加坡&area/其他'
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'sk_1'
            },
            {
                fyarea:{
                    conts:'全部&大陆&韩国&香港&台湾&日本&美国&泰国&英国&新加坡&其他',
                    lists:'&area/大陆&area/韩国&area/香港&area/台湾&area/日本&area/美国&area/泰国&area/英国&area/新加坡&area/其他'
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'sk_2'
            },
            {
                fyclass:{
                    conts: '全部&热血&爱情&搞笑&美女&少儿&亲子&魔法&运动&机战&科幻&校园&动物&冒险&神话&推理&剧情&历史&战争&经典',
                    lists: '&class/热血&class/爱情&class/搞笑&class/美女&class/少儿&class/亲子&class/魔法&class/运动&class/机战&class/科幻&class/校园&class/动物&class/冒险&class/神话&class/推理&class/剧情&class/历史&class/战争&class/经典',
                    def:0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'sk_3'
            },
            {
                fyclass:{
                    conts: '全部&选秀&情感&访谈&搞笑&游戏&职场&娱乐&真人秀&生活&体育&盛会&财经&亲子&纪实&脱口秀&网络节目&美食',
                    lists: '&class/选秀&class/情感&class/访谈&class/搞笑&class/游戏&class/职场&class/娱乐&class/真人秀&class/生活&class/体育&class/盛会&class/财经&class/亲子&class/纪实&class/脱口秀&class/网络节目&class/美食',
                    def:0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'sk_4'
            }
        ],
        nav: [{},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'},{title:'综艺', url: 'https://z3.ax1x.com/2021/06/09/2yS3xe.png'}]
    },
    mhdy: {
        index: 'https://www.ubo110.com/',
        router: ['hiker://empty','hiker://empty','https://www.ubo110.com/show/daludianshiju-地区-排序-分类-----fypage---.html','https://www.ubo110.com/show/xianggangdianshiju-地区-排序-分类-----fypage---.html','https://www.ubo110.com/show/hanguodianshiju-地区-排序-分类-----fypage---.html','https://www.ubo110.com/show/oumeidianshiju-地区-排序-分类-----fypage---.html', 'https://www.ubo110.com/show/1-地区-排序-分类-----fypage---.html', 'https://www.ubo110.com/show/dongman-地区-排序-分类-----fypage---.html'],
        type: [{},{},
            {
                fyclass:{
                    conts: '全部&古装&战争&青春&偶像&喜剧&家庭&犯罪&动作&奇幻&剧情&历史&经典&乡村&情景&商战&网剧&其他',
                    lists: '&古装&战争&青春&偶像&喜剧&家庭&犯罪&动作&奇幻&剧情&历史&经典&乡村&情景&商战&网剧&其他',
                    def:0
                },
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&欧美&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大&西班牙&俄罗斯&其它',
                    lists:'&大陆&香港&台湾&美国&欧美&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大&西班牙&俄罗斯&其它'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'mhdy_1'
            },
            {
                fyclass:{
                    conts: '全部&古装&战争&青春&偶像&喜剧&家庭&犯罪&动作&奇幻&剧情&历史&经典&乡村&情景&商战&网剧&其他',
                    lists: '&古装&战争&青春&偶像&喜剧&家庭&犯罪&动作&奇幻&剧情&历史&经典&乡村&情景&商战&网剧&其他',
                    def:0
                },
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&欧美&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大&西班牙&俄罗斯&其它',
                    lists:'&大陆&香港&台湾&美国&欧美&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大&西班牙&俄罗斯&其它'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'mhdy_2'
            },
            {
                fyclass:{
                    conts: '全部&古装&战争&青春&偶像&喜剧&家庭&犯罪&动作&奇幻&剧情&历史&经典&乡村&情景&商战&网剧&其他',
                    lists: '&古装&战争&青春&偶像&喜剧&家庭&犯罪&动作&奇幻&剧情&历史&经典&乡村&情景&商战&网剧&其他',
                    def:0
                },
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&欧美&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大&西班牙&俄罗斯&其它',
                    lists:'&大陆&香港&台湾&美国&欧美&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大&西班牙&俄罗斯&其它'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'mhdy_3'
            },
            {
                fyclass:{
                    conts: '全部&古装&战争&青春&偶像&喜剧&家庭&犯罪&动作&奇幻&剧情&历史&经典&乡村&情景&商战&网剧&其他',
                    lists: '&古装&战争&青春&偶像&喜剧&家庭&犯罪&动作&奇幻&剧情&历史&经典&乡村&情景&商战&网剧&其他',
                    def:0
                },
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&欧美&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大&西班牙&俄罗斯&其它',
                    lists:'&大陆&香港&台湾&美国&欧美&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大&西班牙&俄罗斯&其它'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'mhdy_4'
            },
            {
                fyclass:{
                    conts: '全部&喜剧&爱情&恐怖&动作&科幻&剧情&战争&警匪&犯罪&动画&奇幻&武侠&冒险&枪战&恐怖&悬疑&惊悚&经典&青春&文艺&微电影&古装&历史&运动&农村&儿童&网络电影',
                    lists: '&喜剧&爱情&恐怖&动作&科幻&剧情&战争&警匪&犯罪&动画&奇幻&武侠&冒险&枪战&恐怖&悬疑&惊悚&经典&青春&文艺&微电影&古装&历史&运动&农村&儿童&网络电影',
                    def:0
                },
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&欧美&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大&西班牙&俄罗斯&其它',
                    lists:'&大陆&香港&台湾&美国&欧美&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大&西班牙&俄罗斯&其它'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'mhdy_5'
            },
            {
                fyclass:{
                    conts: '全部&情感&科幻&热血&推理&搞笑&冒险&萝莉&校园&动作&机战&运动&战争&少年&少女&社会&原创&亲子&益智&励志&其 他',
                    lists: '&情感&科幻&热血&推理&搞笑&冒险&萝莉&校园&动作&机战&运动&战争&少年&少女&社会&原创&亲子&益智&励志&其 他',
                    def:0
                },
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&欧美&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大&西班牙&俄罗斯&其它',
                    lists:'&大陆&香港&台湾&美国&欧美&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大&西班牙&俄罗斯&其它'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'mhdy_6'
            },
        ],
        nav: [{},{},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'港剧', url: 'https://z3.ax1x.com/2021/06/24/RQkuKx.png'},{title:'韩剧', url: 'https://z3.ax1x.com/2021/06/17/2vvBdS.png'},{title:'美剧', url: 'https://z3.ax1x.com/2021/06/09/2sz3Bn.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'}]
    },
    nnm: {
        index: 'https://www.ninimeng.com/',
        router: ['https://www.ninimeng.com/vodshow/4-地区-排序------fypage---.html'],
        type: [
            {
                fyarea:{
                    conts:'全部&国产&日本&欧美',
                    lists:'&国产&日本&欧美'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'nnm_1'
            }
        ],
        nav: [{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'}]
    },
    gpzj: {
        index: 'https://www.guipian456.com/',
        router: ['https://www.guipian456.com/search.php?page=fypage&searchtype=5&order=排序&tid=1&area=地区&year=年代&letter=&yuyan=&state=&money=&ver=&jq=分类&tid=1','https://www.guipian456.com/search.php?page=fypage&searchtype=5&order=排序&tid=1&area=地区&year=年代&letter=&yuyan=&state=&money=&ver=&jq=分类&tid=11','https://www.guipian456.com/search.php?page=fypage&searchtype=5&order=排序&tid=1&area=地区&year=年代&letter=&yuyan=&state=&money=&ver=&jq=&tid=42','https://www.guipian456.com/search.php?page=fypage&searchtype=5&order=排序&tid=1&area=地区&year=年代&letter=&yuyan=&state=&money=&ver=&jq=分类&tid=2'],
        type: [
            {
                fyclass:{
                    conts: '全部&怪兽&僵尸&鬼&杀人&尸体&搞笑&恐怖&杀手&惊悚&鬼魂&复仇&恐惧&自杀&谋杀&医院&悬疑&古装&残忍&噩梦&吸血鬼&诅咒&妖&怪物&丧尸&病毒&精神病&诡异事件&鬼屋',
                    lists: '&怪兽&僵尸&鬼&杀人&尸体&搞笑&恐怖&杀手&惊悚&鬼魂&复仇&恐惧&自杀&谋杀&医院&悬疑&古装&残忍&噩梦&吸血鬼&诅咒&妖&怪物&丧尸&病毒&精神病&诡异事件&鬼屋',
                    def:0
                },
                fyarea: {
                    conts: '全部&大陆&香港&台湾&日本&韩国&欧美&泰国&其他',
                    lists: '&大陆&香港&台湾&日本&韩国&欧美&泰国&其他'
                },
                fyyear: {
                    conts: '全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999',
                    lists: '&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page=1',
                index:'gpzj_1'
            },
            {
                fyclass:{
                    conts: '全部&怪兽&僵尸&鬼&杀人&尸体&搞笑&恐怖&杀手&惊悚&鬼魂&复仇&恐惧&自杀&谋杀&医院&悬疑&古装&残忍&噩梦&吸血鬼&诅咒&妖&怪物&丧尸&病毒&精神病&诡异事件&鬼屋',
                    lists: '&怪兽&僵尸&鬼&杀人&尸体&搞笑&恐怖&杀手&惊悚&鬼魂&复仇&恐惧&自杀&谋杀&医院&悬疑&古装&残忍&噩梦&吸血鬼&诅咒&妖&怪物&丧尸&病毒&精神病&诡异事件&鬼屋',
                    def:0
                },
                fyarea: {
                    conts: '全部&大陆&香港&台湾&日本&韩国&欧美&泰国&其他',
                    lists: '&大陆&香港&台湾&日本&韩国&欧美&泰国&其他'
                },
                fyyear: {
                    conts: '全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999',
                    lists: '&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page=1',
                index:'gpzj_2'
            },
            {
                fyarea: {
                    conts: '全部&大陆&香港&台湾&日本&韩国&欧美&泰国&其他',
                    lists: '&大陆&香港&台湾&日本&韩国&欧美&泰国&其他'
                },
                fyyear: {
                    conts: '全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999',
                    lists: '&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page=1',
                index:'gpzj_3'
            },
            {
                fyclass:{
                    conts: '全部&怪兽&僵尸&鬼&杀人&尸体&搞笑&恐怖&杀手&惊悚&鬼魂&复仇&恐惧&自杀&谋杀&医院&悬疑&古装&残忍&噩梦&吸血鬼&诅咒&妖&怪物&丧尸&病毒&精神病&诡异事件&鬼屋',
                    lists: '&怪兽&僵尸&鬼&杀人&尸体&搞笑&恐怖&杀手&惊悚&鬼魂&复仇&恐惧&自杀&谋杀&医院&悬疑&古装&残忍&噩梦&吸血鬼&诅咒&妖&怪物&丧尸&病毒&精神病&诡异事件&鬼屋',
                    def:0
                },
                fyarea: {
                    conts: '全部&大陆&香港&台湾&日本&韩国&欧美&泰国&其他',
                    lists: '&大陆&香港&台湾&日本&韩国&欧美&泰国&其他'
                },
                fyyear: {
                    conts: '全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999',
                    lists: '&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: 'page=1',
                index:'gpzj_4'
            }
        ],
        nav : [{title:'鬼片', url: 'https://z3.ax1x.com/2021/06/27/RJLME4.png'},{title:'电视', url: 'https://z3.ax1x.com/2021/06/27/RJvDw8.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/27/RJxY7T.png'},{title:'英叔', url: 'https://z3.ax1x.com/2021/06/27/RJx7Hf.png'}]
    },
    susou: {
        index: 'https://www.susou.tv/',
        router: ['hiker://empty','https://www.susou.tv/index.php/vod/show/地区/分类/id/1/年代/page/fypage.html','https://www.susou.tv/index.php/vod/show/地区/id/2/年代/page/fypage.html','https://www.susou.tv/index.php/vod/show/地区/分类/id/3/年代/page/fypage.html','https://www.susou.tv/index.php/vod/show/地区/分类/id/4/年代/page/fypage.html'],
        type: [{},
            {
                fyclass:{
                    conts: '全部&动作&喜剧&爱情&科幻&恐怖&剧情&战争&魔幻&悬疑&犯罪&灾难&冒险',
                    lists: '&class/动作&class/喜剧&class/爱情&class/科幻&class/恐怖&class/剧情&class/战争&class/魔幻&class/悬疑&class/犯罪&class/灾难&class/冒险',
                    def:0
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他',
                    lists:'&area/大陆&area/香港&area/台湾&area/美国&area/法国&area/英国&area/日本&area/韩国&area/德国&area/泰国&area/印度&area/意大利&area/西班牙&area/加拿大&area/其他'
                },
                pageType: '1.html',
                index:'susou_1'
            },
            {
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fyarea:{
                    conts:'全部&大陆&韩国&香港&台湾&日本&美国&泰国&英国&新加坡&其它',
                    lists:'&area/大陆&area/韩国&area/香港&area/台湾&area/日本&area/美国&area/泰国&area/英国&area/新加坡&area/其它'
                },
                pageType: '1.html',
                index:'susou_2'
            },
            {
                fyclass:{
                    conts: '全部&晚会&音乐&游戏&八卦&生活&真人秀',
                    lists: '&class/晚会&class/音乐&class/游戏&class/八卦&class/生活&class/真人秀',
                    def:0
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fyarea:{
                    conts:'全部&大陆&港台&日韩&欧美',
                    lists:'&area/大陆&area/港台&area/日韩&area/欧美'
                },
                pageType: '1.html',
                index:'susou_3'
            },
            {
                fyclass:{
                    conts: '全部&番剧&侦探&热血&搞笑&科幻&剧情&恋爱&古风&武侠',
                    lists: '&class/番剧&class/侦探&class/热血&class/搞笑&class/科幻&class/剧情&class/恋爱&class/古风&class/武侠',
                    def:0
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fyarea:{
                    conts:'全部&大陆&日本&欧美&其他',
                    lists:'&area/大陆&area/日本&area/欧美&area/其他'
                },
                pageType: '1.html',
                index:'susou_4'
            }
        ],
        nav: [{},{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'综艺', url: 'https://z3.ax1x.com/2021/06/09/2yS3xe.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'}]
    },
    kby: {
        index: 'https://yanetflix.com/',
        router: ['hiker://empty','https://yanetflix.com/index.php/vod/show/地区/by/排序/分类/id/1/年代/page/fypage.html','https://yanetflix.com/index.php/vod/show/地区/by/排序/分类/id/2/年代/page/fypage.html','https://yanetflix.com/index.php/vod/show/地区/by/排序/分类/id/3/年代/page/fypage.html','https://yanetflix.com/index.php/vod/show/地区/by/排序/分类/id/4/年代/page/fypage.html'],
        type: [{},
            {
                fyclass:{
                    conts: '全部&喜剧&爱情&恐怖&动作&科幻&剧情&战争&警匪&犯罪&动画&奇幻&武侠&冒险&枪战&恐怖&悬疑&惊悚&经典&青春&文艺&微电影&古装&历史&运动&农村&儿童&网络电影',
                    lists: '&class/喜剧&class/爱情&class/恐怖&class/动作&class/科幻&class/剧情&class/战争&class/警匪&class/犯罪&class/动画&class/奇幻&class/武侠&class/冒险&class/枪战&class/恐怖&class/悬疑&class/惊悚&class/经典&class/青春&class/文艺&class/微电影&class/古装&class/历史&class/运动&class/农村&class/儿童&class/网络电影',
                    def:0
                },
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&韩国&日本&泰国&新加坡&马来西亚&印度&英国&法国&加拿大&西班牙&俄罗斯&其它',
                    lists:'&area/大陆&area/香港&area/台湾&area/美国&area/韩国&area/日本&area/泰国&area/新加坡&area/马来西亚&area/印度&area/英国&area/法国&area/加拿大&area/西班牙&area/俄罗斯&area/其它'
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'4ky_1'
            },
            {
                fyclass:{
                    conts: '全部&古装&战争&青春偶像&喜剧&家庭&犯罪&动作&奇幻&剧情&历史&经典&乡村&情景&商战&网剧&其他',
                    lists: '&class/古装&class/战争&class/青春偶像&class/喜剧&class/家庭&class/犯罪&class/动作&class/奇幻&class/剧情&class/历史&class/经典&class/乡村&class/情景&class/商战&class/网剧&class/其他',
                    def:0
                },
                fyarea:{
                    conts:'全部&内地&韩国&香港&台湾&日本&美国&泰国&英国&新加坡&其他',
                    lists:'&area/内地&area/韩国&area/香港&area/台湾&area/日本&area/美国&area/泰国&area/英国&area/新加坡&area/其他'
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'4ky_2'
            },
            {
                fyclass:{
                    conts: '全部&选秀&情感&访谈&播报&旅游&音乐&美食&纪实&曲艺&生活&游戏互动&财经&求职',
                    lists: '&class/选秀&class/情感&class/访谈&class/播报&class/旅游&class/音乐&class/美食&class/纪实&class/曲艺&class/生活&class/游戏互动&class/财经&class/求职',
                    def:0
                },
                fyarea:{
                    conts:'全部&内地&港台&日韩&欧美',
                    lists:'&area/内地&area/港台&area/日韩&area/欧美'
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'4ky_3'
            },
            {
                fyclass:{
                    conts: '全部&情感&科幻&热血&推理&搞笑&冒险&萝莉&校园&动作&机战&运动&战争&少年&少女&社会&原创&亲子&益智&励志&其他',
                    lists: '&class/情感&class/科幻&class/热血&class/推理&class/搞笑&class/冒险&class/萝莉&class/校园&class/动作&class/机战&class/运动&class/战争&class/少年&class/少女&class/社会&class/原创&class/亲子&class/益智&class/励志&class/其他',
                    def:0
                },
                fyarea:{
                    conts:'全部&国产&日本&欧美&其他',
                    lists:'&area/国产&area/日本&area/欧美&area/其他'
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'4ky_1'
            }
        ],
        nav: [{},{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'综艺', url: 'https://z3.ax1x.com/2021/06/09/2yS3xe.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'}]
    },
    dgdy: {
        index: 'https://www.dgyytv.com/',
        router: ['https://www.dgyytv.com/vodshow-分类/by/排序/年代/page/fypage.html','https://www.dgyytv.com/vodshow-分类/by/排序/年代/page/fypage.html','https://www.dgyytv.com/vodshow-分类/by/排序/年代/page/fypage.html','https://www.dgyytv.com/vodshow-分类/by/排序/年代/page/fypage.html','https://www.dgyytv.com/vodshow-49/by/排序/年代/page/fypage.html'],
        type: [
            {
                fyclass:{
                    conts: '全部&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&纪录片',
                    lists: '20&24&25&26&27&28&29&30&31',
                    def:0
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'dgdy_1'
            },
            {
                fyclass:{
                    conts: '全部&国产剧&香港剧&韩国剧&欧美剧&台湾剧&日本剧&海外剧',
                    lists: '21&33&34&35&36&37&38',
                    def:0
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'dgdy_2'
            },
            {
                fyclass:{
                    conts: '全部&内地综艺&港台综艺&日韩综艺&欧美综艺',
                    lists: '22&39&40&41&42',
                    def:0
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'dgdy_3'
            },
            {
                fyclass:{
                    conts: '全部&国产动漫&日韩动漫&欧美动漫&港台动漫&海外动漫',
                    lists: '23&43&44&45&46&47',
                    def:0
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'dgdy_4'
            },
            {
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'dgdy_5'
            }
        ],
        nav: [{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'综艺', url: 'https://z3.ax1x.com/2021/06/09/2yS3xe.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'}]
    },
    didi: {
        index: 'https://www.4ytv.com/',
        router: ['hiker://empty','https://www.4ytv.com/index.php/vod/show/年代/地区/by/排序/id/6/page/fypage.html','https://www.4ytv.com/index.php/vod/show/年代/地区/by/排序/id/7/page/fypage.html','https://www.4ytv.com/index.php/vod/show/分类/年代/地区/by/排序/id/2/page/fypage.html','https://www.4ytv.com/index.php/vod/show/分类/年代/地区/by/排序/id/1/page/fypage.html', 'https://www.4ytv.com/index.php/vod/show/分类/年代/地区/by/排序/id/3/page/fypage.html', 'https://www.4ytv.com/index.php/vod/show/分类/年代/地区/by/排序/id/4/page/fypage.html'],
        type: [{},
            {
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他',
                    lists:'&area/大陆&area/香港&area/台湾&area/美国&area/法国&area/英国&area/日本&area/韩国&area/德国&area/泰国&area/印度&area/意大利&area/西班牙&area/加拿大&area/其他'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'didi_1'
            },
            {
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他',
                    lists:'&area/大陆&area/香港&area/台湾&area/美国&area/法国&area/英国&area/日本&area/韩国&area/德国&area/泰国&area/印度&area/意大利&area/西班牙&area/加拿大&area/其他'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'didi_2'
            },
            {
                fyclass:{
                    conts: '全部&古装&战争&青春偶像&喜剧&家庭&犯罪&动作&奇幻&剧情&历史&经典&乡村&情景&商战&网剧&其他',
                    lists: '&class/古装&class/战争&class/青春偶像&class/喜剧&class/家庭&class/犯罪&class/动作&class/奇幻&class/剧情&class/历史&class/经典&class/乡村&class/情景&class/商战&class/网剧&class/其他',
                    def:0
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fyarea:{
                    conts:'全部&内地&韩国&香港&台湾&日本&美国&泰国&英国&新加坡&其他',
                    lists:'&area/内地&area/韩国&area/香港&area/台湾&area/日本&area/美国&area/泰国&area/英国&area/新加坡&area/其他'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'didi_3'
            },
            {
                fyclass:{
                    conts: '全部&喜剧&爱情&恐怖&动作&科幻&剧情&战争&警匪&犯罪&动画&奇幻&武侠&冒险&枪战&恐怖&悬疑&惊悚&经典&青春&文艺&微电影&古装&历史&运动&农村&儿童&网络电影',
                    lists: '&class/喜剧&class/爱情&class/恐怖&class/动作&class/科幻&class/剧情&class/战争&class/警匪&class/犯罪&class/动画&class/奇幻&class/武侠&class/冒险&class/枪战&class/恐怖&class/悬疑&class/惊悚&class/经典&class/青春&class/文艺&class/微电影&class/古装&class/历史&class/运动&class/农村&class/儿童&class/网络电影',
                    def:0
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他',
                    lists:'&area/大陆&area/香港&area/台湾&area/美国&area/法国&area/英国&area/日本&area/韩国&area/德国&area/泰国&area/印度&area/意大利&area/西班牙&area/加拿大&area/其他'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'didi_4'
            },
            {
                fyclass:{
                    conts: '全部&选秀&情感&访谈&播报&旅游&音乐&美食&纪实&曲艺&生活&游戏互动&财经&求职',
                    lists: '&class/选秀&class/情感&class/访谈&class/播报&class/旅游&class/音乐&class/美食&class/纪实&class/曲艺&class/生活&class/游戏互动&class/财经&class/求职',
                    def:0
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fyarea:{
                    conts:'全部&内地&港台&日韩&欧美',
                    lists:'&class/内地&class/港台&class/日韩&class/欧美'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'didi_5'
            },
            {
                fyclass:{
                    conts: '全部&情感&科幻&热血&推理&搞笑&冒险&萝莉&校园&动作&机战&运动&战争&少年&少女&社会&原创&亲子&益智&励志&其他',
                    lists: '&class/情感&class/科幻&class/热血&class/推理&class/搞笑&class/冒险&class/萝莉&class/校园&class/动作&class/机战&class/运动&class/战争&class/少年&class/少女&class/社会&class/原创&class/亲子&class/益智&class/励志&class/其他',
                    def:0
                },
                fyyear: {
                    conts:'全部&2021&2020&2019&2018&2017&2016&2015&2014&2013&2012&2011&2010&2009&2008&2007&2006&2005&2004&2003&2002&2001&2000&1999&1998&1997&1996',
                    lists: '&year/2021&year/2020&year/2019&year/2018&year/2017&year/2016&year/2015&year/2014&year/2013&year/2012&year/2011&year/2010&year/2009&year/2008&year/2007&year/2006&year/2005&year/2004&year/2003&year/2002&year/2001&year/2000&year/1999&year/1998&year/1997&year/1996'
                },
                fyarea:{
                    conts:'全部&内地&港台&日韩&欧美',
                    lists:'&class/内地&class/港台&class/日韩&class/欧美'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1.html',
                index:'didi_6'
            },
        ],
        nav: [{},{},{},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'综艺', url: 'https://z3.ax1x.com/2021/06/09/2yS3xe.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'}]
    },
    ymys: {
        index: 'https://kan.yimmh.com/',
        router: ['hiker://empty','hiker://empty','hiker://empty','https://kan.yimmh.com/vodshowy/1-地区-排序-分类-----fypage---.html','https://kan.yimmh.com/vodshowy/2-地区-排序-分类-----fypage---.html','https://kan.yimmh.com/vodshowy/3-地区-排序-分类-----fypage---.html','https://kan.yimmh.com/vodshowy/4-地区-排序-分类-----fypage---.html'],
        type: [{},{},{},
            {
                fyclass:{
                    conts: '全部&喜剧&爱情&恐怖&动作&科幻&剧情&战争&警匪&犯罪&动画&奇幻&武侠&冒险&枪战&恐怖&悬疑&惊悚&经典&青春&文艺&微电影&古装&历史&运动&农村&儿童&网络电影',
                    lists: '&喜剧&爱情&恐怖&动作&科幻&剧情&战争&警匪&犯罪&动画&奇幻&武侠&冒险&枪战&恐怖&悬疑&惊悚&经典&青春&文艺&微电影&古装&历史&运动&农村&儿童&网络电影',
                    def:0
                },
                fyarea:{
                    conts:'全部&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他',
                    lists:'&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'ymys_1'
            },
            {
                fyclass:{
                    conts: '全部&古装&战争&青春偶像&喜剧&家庭&犯罪&动作&奇幻&剧情&历史&经典&乡村&情景&商战&网剧&其他',
                    lists: '&古装&战争&青春偶像&喜剧&家庭&犯罪&动作&奇幻&剧情&历史&经典&乡村&情景&商战&网剧&其他',
                    def:0
                },
                fyarea:{
                    conts:'全部&内地&韩国&香港&台湾&日本&美国&泰国&英国&新加坡&其他',
                    lists:'&内地&韩国&香港&台湾&日本&美国&泰国&英国&新加坡&其他'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'ymys_2'
            },
            {
                fyclass:{
                    conts: '全部&选秀&情感&访谈&播报&旅游&音乐&美食&纪实&曲艺&生活&游戏互动&财经&求职',
                    lists: '&选秀&情感&访谈&播报&旅游&音乐&美食&纪实&曲艺&生活&游戏互动&财经&求职',
                    def:0
                },
                fyarea:{
                    conts:'全部&内地&港台&日韩&欧美',
                    lists:'&内地&港台&日韩&欧美'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'ymys_3'
            },
            {
                fyclass:{
                    conts: '全部&情感&科幻&热血&推理&搞笑&冒险&萝莉&校园&动作&机战&运动&战争&少年&少女&社会&原创&亲子&益智&励志&其他',
                    lists: '&情感&科幻&热血&推理&搞笑&冒险&萝莉&校园&动作&机战&运动&战争&少年&少女&社会&原创&亲子&益智&励志&其他',
                    def:0
                },
                fyarea:{
                    conts:'全部&国产&日本&欧美&其他',
                    lists:'&国产&日本&欧美&其他'
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'ymys_4'
            }
        ],
        nav: [{},{},{},{title:'电影片库', url: 'https://z3.ax1x.com/2021/06/09/2szetf.png'},{title:'电视剧', url: 'https://z3.ax1x.com/2021/06/09/2szu9S.png'},{title:'综艺', url: 'https://z3.ax1x.com/2021/06/09/2yS3xe.png'},{title:'动漫', url: 'https://z3.ax1x.com/2021/06/09/2szZAP.png'}]
    }
}
//首页解析
//HOMEPAGE
var hikerHomePage = (lazyData)=>{
    var d = [];
    var{jpys_lazy, taotao_lazy, five_lazy, mjc_lazy, lengyue_lazy} = lazyData;
    
    for(var i in movielists){
        d.push({
            title: getVar('nowPage', movielists[0].reg)==movielists[i].reg? ("““””<b>"+'<span style="color: #1db69a">'+ movielists[i].title +'</span></b>') : movielists[i].title ,
            url: $("#noLoading#").lazyRule((movieitem, data)=>{
                putVar('nowPage', movieitem.reg)
                putVar('pageUrl', data[movieitem.reg].index);
                refreshPage(false);
                return "hiker://empty"
                }, movielists[i], data),
            col_type:'scroll_button'
        });
    }
    var searchData=JSON.parse( fetch('hiker://files/rules/black/data.js') );
    d.push({
        desc: (searchData.x5Height!=undefined ? searchData.x5Height: 100) +'&&float',
        url: 'file:///storage/emulated/0/Android/data/com.example.hikerview/files/Documents/rules/black/search.html',
        col_type: 'x5_webview_single'
    })

    if (getVar('searchKeyword') == "") {
        if( /meijuchong/.test( getVar('pageUrl', data.jpys.index) ) ){
            mjc_lazy!=undefined? mjcindex(d, data, mjc_lazy) : mjcindex(d, data);
        }else if( /flvwec/.test( getVar('pageUrl', data.jpys.index) ) ){
            taotaoindex(d,data);
        }else if(/o8tv/.test(getVar('pageUrl', data.jpys.index))){
            fiveindex(d,data);
        }else if(/jpysvip/.test(getVar('pageUrl', data.jpys.index))){
            jpys_lazy!=undefined? jpysindex(d,data, jpys_lazy) : jpysindex(d,data);
        }else if(/lengyue/.test(getVar('pageUrl', data.jpys.index))){
            lengyue_lazy!=undefined? lengyueindex(d,data, lengyue_lazy) : lengyueindex(d,data);
        }else if(/179u/.test(getVar('pageUrl', data.jpys.index))){
            ge179index(d,data);
        }else if(/nfmovie/.test(getVar('pageUrl', data.jpys.index))){
            hikerpre();
            nfmovieindex(d,data);
        }else if(/nfxhd/.test(getVar('pageUrl', data.jpys.index))){
            nfxindex(d,data);
        }else if(/mjhd/.test(getVar('pageUrl', data.jpys.index))){
            mjhdindex(d,data);
        }else if(/dm45/.test(getVar('pageUrl', data.jpys.index))){//新世界动漫
            xsjindex(d,data);
        }else if(/acmdy/.test(getVar('pageUrl', data.jpys.index))){//影映剧场
            testUrl(data.yyjc.index);
            yyjcindex(d,data);
        }else if(/qimiqimi/.test(getVar('pageUrl', data.jpys.index))){
            qimiindex(d,data);
        }else if(/newqiyu/.test(getVar('pageUrl', data.jpys.index))){
            nqyindex(d,data);
        }else if(/jiujiuying/.test(getVar('pageUrl', data.jpys.index))){
            jjysindex(d,data);
        }else if(/97hanju/.test(getVar('pageUrl', data.jpys.index))){
            hjwindex(d,data);
        }else if(/woobm/.test(getVar('pageUrl', data.jpys.index))){
            bxindex(d,data);
        }else if(/saohuo/.test(getVar('pageUrl', data.jpys.index))){
            saohuoindex(d,data);
        }else if(/ak1080/.test(getVar('pageUrl', data.jpys.index))){
            k1080index(d, data);
        }else if(/aidi/.test(getVar('pageUrl', data.jpys.index))){
            aidi(d, data);
        }else if(/mogu/.test(getVar('pageUrl', data.jpys.index))){
            mogu(d, data);
        }else if(/757vcd/.test(getVar('pageUrl', data.jpys.index))){
            ys757(d, data);
        }else if(/sukhdw/.test(getVar('pageUrl', data.jpys.index))){
            skysindex(d, data);
        }else if(/ubo110/.test(getVar('pageUrl', data.jpys.index))){
            mhdyindex(d, data);
        }else if(/ninimeng/.test(getVar('pageUrl', data.jpys.index))){
            nnmindex(d, data);
        }else if(/guipian456/.test(getVar('pageUrl', data.jpys.index))){
            gpzjindex(d, data);
        }else if(/susou/.test(getVar('pageUrl', data.jpys.index))){
            susouindex(d, data);
        }else if(/yanetflix/.test(getVar('pageUrl', data.jpys.index))){
            kbyindex(d, data);
        }else if(/dgyytv/.test(getVar('pageUrl', data.jpys.index))){
            dgdyindex(d, data);
        }else if(/4ytv/.test(getVar('pageUrl', data.jpys.index))){
            didiindex(d, data);
        }else if(/yimmh/.test(getVar('pageUrl', data.jpys.index))){
            ymysindex(d, data);
        }
    }else{
        hikerpre();
        searchmovie( lazyData, getVar('searchKeyword'));
    }
    
    /*if(getVar('setting', '0') == 1){
        settingPage(allList);
    }*/

    d.push({ col_type: 'line_blank' });
    d.push({ title: "<h4 style='text-align:center;'><font color='#b36d61'>到底了呢！</font></h4>", col_type: "rich_text" });
    setResult(d)
}
//HOMEPAGE

var mjcindex = (d, data, lazyRule)=>{
    MY_URL = data.mjc.index;
    var router = data.mjc.router;
    var type = data.mjc.type;
    var nav = data.mjc.nav;
    var html = request(getVar('pageUrl', data.mjc.index));
    var conts = parseDomForArray(html, 'body&&.myui-panel:has(.myui-vodlist)'); //第一个不要

    for(var i=1; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index, lazyRule) => {
                var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.myui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                            img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule((lazyRule) => { eval(fetch('hiker://files/rules/black/B_play.js'));  lazyRule!=undefined? jx_mjc(lazyRule): jx_mjc()}, lazyRule),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i, lazyRule),
            col_type:'icon_small_4'
        });
    }

    for (var i =0; i<conts.length-1; i++) {
        var list = parseDomForArray(conts[i], '.myui-vodlist&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h3&&Text').replace("", "") + (i==0?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0?'':$(router[i]).rule((type, index, lazyRule) => {
            var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.myui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                        img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule((lazyRule) => { eval(fetch('hiker://files/rules/black/B_play.js'));  lazyRule!=undefined? jx_mjc(lazyRule): jx_mjc()}, lazyRule),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i, lazyRule),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.myui-vodlist__thumb&&title'),
                img: parseDom(list[j], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule((lazyRule) => { eval(fetch('hiker://files/rules/black/B_play.js'));  lazyRule!=undefined? jx_mjc(lazyRule): jx_mjc()}, lazyRule),
                col_type: "movie_3"
            });
        }
    }
}

var taotaoindex = (d, data)=>{
    MY_URL = data.taotao.index;
    var router = data.taotao.router;
    var type = data.taotao.type;
    var nav = data.taotao.nav;
    var html = request(getVar('pageUrl', data.taotao.index));
    var conts = parseDomForArray(html, 'body&&.myui-panel:has(.myui-vodlist)'); //第一个不要

    for(var i=3; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.myui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], 'a&&title'),
                            img: parseDom(list[i], 'a&&data-original'),
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: 
        $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_taotao() }),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }

    for (var i =1; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.myui-vodlist&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h3&&Text').replace("更多", "") + " <small><small><font color='#f9906f'>更多></font></small></small>",
            url: $(router[i]).rule((type, index) => {
            var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.myui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], 'a&&title'),
                        img: parseDom(list[i], 'a&&data-original'),
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: 
    $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_taotao() }),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], 'a&&title'),
                img: parseDom(list[j], 'a&&data-original'),
                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                url: 
$(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_taotao() }),
                col_type: "movie_3"
            });
        }
    }
}

var fiveindex = (d, data)=>{
    MY_URL = data.fivefive.index;
    var router = data.fivefive.router;
    var type = data.fivefive.type;
    var nav = data.fivefive.nav;
    var html = request(getVar('pageUrl', data.fivefive.index));
    var conts = parseDomForArray(html, 'body&&.myui-panel:has(.myui-vodlist)'); 

    for(var i=0; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.myui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                            img: parseDom(list[i], '.myui-vodlist__thumb&&data-original'),
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_555() }),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }

    for (var i =0; i<conts.length; i++) {
        var j=i;
        j>3? j=j-1:j=j+1; 
        var list = parseDomForArray(conts[i], 'ul&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h3&&Text').replace("更多>", "") + (i==2||i==3?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: $(router[j]).rule((type, index) => {
                var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);

                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.myui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                        img: parseDom(list[i], '.myui-vodlist__thumb&&data-original'),
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_555() }),
                        col_type: 'movie_3'
                    })
                }
                setResult(d)
            },type, j),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.myui-vodlist__thumb&&title'),
                img: parseDom(list[j], '.myui-vodlist__thumb&&data-original'),
                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_555() }),
                col_type: "movie_3"
            });
        }
    }
}
var jpysindex = (d,data, lazyRule)=>{
    MY_URL = data.jpys.index;
    var router = data.jpys.router;
    var type = data.jpys.type;
    var nav = data.jpys.nav;
    var html = request(getVar('pageUrl', data.jpys.index));
    var conts = parseDomForArray(html, 'body&&.myui-panel:has(.myui-vodlist)'); //第一个不要

    for(var i=3; i<7; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index, lazyRule) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.myui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                            img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: 
        $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule((lazyRule) => { eval(fetch('hiker://files/rules/black/B_play.js')); lazyRule!=undefined? jx_jpys(lazyRule): jx_jpys() }, lazyRule),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i, lazyRule),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length-1; i++) {
        var list = parseDomForArray(conts[i], '.myui-vodlist&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h3&&Text').replace("", "") + (i==0?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0?'':$(router[i]).rule((type, index, lazyRule) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.myui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                        img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: 
    $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule((lazyRule) => { eval(fetch('hiker://files/rules/black/B_play.js')); lazyRule!=undefined? jx_jpys(lazyRule): jx_jpys();}, lazyRule),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i, lazyRule),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.myui-vodlist__thumb&&title'),
                img: parseDom(list[j], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule((lazyRule) => { eval(fetch('hiker://files/rules/black/B_play.js')); lazyRule!=undefined? jx_jpys(lazyRule): jx_jpys();}, lazyRule),
                col_type: "movie_3"
            });
        }
    }
}
var lengyueindex = (d,data, lazyRule)=>{
    MY_URL = data.lengyue.index;
    var router = data.lengyue.router;
    var type = data.lengyue.type;
    var nav = data.lengyue.nav;
    var html = request(getVar('pageUrl', data.lengyue.index));
    var conts = parseDomForArray(html, 'body&&.myui-panel:has(.myui-vodlist)'); //第一个不要

    //refreshX5WebView('file:///storage/emulated/0/Android/data/com.example.hikerview/files/Documents/rules/black/Slider2.html');

    for(var i=1; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index, lazyRule) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.myui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                            img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: 
        $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule((lazyRule) => { eval(fetch('hiker://files/rules/black/B_play.js'));lazyRule!=undefined? jx_lengyue(lazyRule): jx_lengyue() }, lazyRule),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i, lazyRule),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.myui-vodlist&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h3&&Text').replace("", "") + (i==0?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0?'':$(router[i]).rule((type, index, lazyRule) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.myui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                        img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                         url: 
        $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule((lazyRule) => { eval(fetch('hiker://files/rules/black/B_play.js'));lazyRule!=undefined? jx_lengyue(lazyRule): jx_lengyue() }, lazyRule),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i, lazyRule),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.myui-vodlist__thumb&&title'),
                img: parseDom(list[j], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule((lazyRule) => { eval(fetch('hiker://files/rules/black/B_play.js'));lazyRule!=undefined? jx_lengyue(lazyRule): jx_lengyue() }, lazyRule),
                col_type: "movie_3"
            });
        }
    }
}

var ge179index = (d, data)=>{
    MY_URL = data.ge179.index;
    var router = data.ge179.router;
    var type = data.ge179.type;
    var nav = data.ge179.nav;
    var html = request(getVar('pageUrl', data.ge179.index));
    var conts = parseDomForArray(html, 'body&&.myui-panel:has(.myui-vodlist)'); //第一个不要 

    for(var i=1; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.myui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                            img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: 
        $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_ge179() }),
                                col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.myui-vodlist&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h3&&Text').replace("", "") + (i==0?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.myui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                        img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: 
    $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_ge179() }),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.myui-vodlist__thumb&&title'),
                img: parseDom(list[j], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_ge179() }),
                col_type: "movie_3"
            });
        }
    }
}

var nfmovieindex = (d, data)=>{
    MY_URL = data.nfmovie.index;
    var router = data.nfmovie.router;
    var type = data.nfmovie.type;
    var nav = data.nfmovie.nav;
    var html = fetch(getVar('pageUrl', data.nfmovie.index),{headers:{'User-Agent':'Mozilla/5.0','Cookie':getVar('hikernfcookie')}});;
    var conts = parseDomForArray(html, 'body&&.myui-panel:has(.myui-vodlist)');  //第一个不要 

    for(var i=2; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =fetch(getVar('pageUrl'),{headers:{'User-Agent':'Mozilla/5.0','Cookie':getVar('hikernfcookie')}});
                    var list = parseDomForArray(html, '.myui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                            img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: 
        $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_nfmovie() }),
                                col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.myui-vodlist&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h3&&Text').replace("", "") + (i==1?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==1?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =fetch(getVar('pageUrl'),{headers:{'User-Agent':'Mozilla/5.0','Cookie':getVar('hikernfcookie')}});
                var list = parseDomForArray(html, '.myui-vodlist&&li'); 
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                        img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: 
    $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_nfmovie() }),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.myui-vodlist__thumb&&title'),
                img: parseDom(list[j], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_nfmovie() }),
                col_type: "movie_3"
            });
        }
    }
}

var nfxindex = (d,data)=>{
    MY_URL = data.nfx.index;
    var router = data.nfx.router;
    var type = data.nfx.type;
    var nav = data.nfx.nav;
    var html = request(getVar('pageUrl', data.nfx.index));
    var conts = parseDomForArray(html, 'body&&.myui-panel:has(.myui-vodlist)'); //第一个不要

    for(var i=0; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.myui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                            img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_nfx() }),
                                col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.myui-vodlist&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h3&&Text').replace("", "") + (i==10?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==10?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.myui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                        img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: 
    $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_nfx() }),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.myui-vodlist__thumb&&title'),
                img: parseDom(list[j], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_nfx() }),
                col_type: "movie_3"
            });
        }
    }
}

var mjhdindex = (d, data)=>{
    MY_URL = data.mjhd.index;
    var router = data.mjhd.router;
    var type = data.mjhd.type;
    var nav = data.mjhd.nav;
    var html = request(getVar('pageUrl', data.mjhd.index));
    var conts = parseDomForArray(html, 'body&&.myui-panel:has(.myui-vodlist)'); //第一个不要

    for(var i=1; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.myui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                            img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: 
        $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_mjhd() }),
                                col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length-1; i++) {
        var list = parseDomForArray(conts[i], '.myui-vodlist&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h3&&Text').replace("", "") + (i==0?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.myui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                        img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: 
    $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_mjhd() }),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.myui-vodlist__thumb&&title'),
                img: parseDom(list[j], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_mjhd() }),
                col_type: "movie_3"
            });
        }
    }
}

var xsjindex = (d, data)=>{
    MY_URL = data.xsj.index;
    var router = data.xsj.router;
    var type = data.xsj.type;
    var nav = data.xsj.nav;
    var html = request(getVar('pageUrl', data.xsj.index));
    var conts = parseDomForArray(html, 'body&&.leo-mod:has(ul)'); //第一个不要

    for(var i=4; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, 'ul:has(.leo-video-item)&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.leo-show&&title'),
                            img: parseDom(list[i], '.leo-lazy&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.leo-video-remark&&Text'),
                            url: 
        $(parseDom(list[i], '.leo-show&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_xsj() }),
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =1; i<conts.length-1; i++) {
        var list = parseDomForArray(conts[i], 'ul:has(.leo-video-item)&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], '.leo-mod-title&&Text').replace("查看更多", "") + (i==1||i==2?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, 'ul:has(.leo-video-item)&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.leo-show&&title'),
                        img: parseDom(list[i], '.leo-lazy&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.leo-video-remark&&Text'),
                        url: 
    $(parseDom(list[i], '.leo-show&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_xsj() }),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.leo-show&&title'),
                img: parseDom(list[j], '.leo-lazy&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.leo-video-remark&&Text'),
                url: 
                $(parseDom(list[j], '.leo-show&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_xsj() }),
                col_type: "movie_3"
            });
        }
    }    
}

var yyjcindex = (d,data)=>{
    MY_URL = data.yyjc.index;
    var router = data.yyjc.router;
    var type = data.yyjc.type;
    var nav = data.yyjc.nav;
    var html = request(getVar('pageUrl', data.yyjc.index));
    var conts = parseDomForArray(html, 'body&&.pannel:has(.cbox1):has(.vodlist)'); //第一个不要

    for(var i=1; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.vodlist_thumb&&title'),
                            img: parseDom(list[i], '.vodlist_thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic_text&&Text'),
                            url: 
        $(parseDom(list[i], '.vodlist_thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_yyjc() }),
                                col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.vodlist&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h2&&Text').replace("", "") + (i==0?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.vodlist_thumb&&title'),
                        img: parseDom(list[i], '.vodlist_thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic_text&&Text'),
                        url: 
    $(parseDom(list[i], '.vodlist_thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_yyjc() }),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.vodlist_thumb&&title'),
                img: parseDom(list[j], '.vodlist_thumb&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.pic_text&&Text'),
                url: $(parseDom(list[j], '.vodlist_thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_yyjc() }),
                col_type: "movie_3"
            });
        }
    }
}

var qimiindex = (d,data)=>{
    MY_URL = data.qimi.index;
    var router = data.qimi.router;
    var type = data.qimi.type;
    var nav = data.qimi.nav;
    var html = fetch(getVar('pageUrl', data.qimi.index));
    var conts =  parseDomForArray(html, 'body&&.channel-item:has(.img-list)'); //第一个不要

    for(var i=0; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.img-list&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], 'h2&&Text'),
                            img: parseDom(list[i], 'img&&src')+'@Referer=',
                            desc: parseDomForHtml(list[i], 'i&&Text'),
                            url: 
        $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_qimi() }),
                                col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.img-list&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], '.ui-title&&h2&&Text').replace("", "") + (i==99?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==99?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.img-list&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], 'h2&&Text'),
                        img: parseDom(list[i], 'img&&src')+'@Referer=',
                        desc: parseDomForHtml(list[i], 'i&&Text'),
                        url: 
    $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_qimi() }),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], 'h2&&Text'),
                img: parseDom(list[j], 'img&&src')+'@Referer=',
                desc: parseDomForHtml(list[j], 'i&&Text'),
                url: 
    $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_qimi() }),
                col_type: "movie_3"
            });
        }
    }
}

var nqyindex = (d,data)=>{
    MY_URL = data.nqy.index;
    var router = data.nqy.router;
    var type = data.nqy.type;
    var nav = data.nqy.nav;
    var html = fetch(getVar('pageUrl', data.nqy.index));
    var conts = parseDomForArray(html, 'body&&.panel:has(.video-list)'); //第一个不要

    for(var i=1; i<nav.length; i++){
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =fetch(getVar('pageUrl'),{});
                    var list = parseDomForArray(html, '.video-list&&.card');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.lazy&&alt'),
                            img: parseDom(list[i], '.lazy&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.label&&Text'),
                            url: 
        $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_nqy() }),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.video-list&&.card');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], '.name&&Text').replace("", "") + (i==0?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =fetch(getVar('pageUrl'),{});
                var list = parseDomForArray(html, '.video-list&&.card');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.lazy&&alt'),
                        img: parseDom(list[i], '.lazy&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.label&&Text'),
                        url: 
    $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_nqy() }),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.lazy&&alt'),
                img: parseDom(list[j], '.lazy&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.label&&Text'),
                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_nqy() }),
                col_type: "movie_3"
            });
        }
    }
}

var jjysindex = (d,data)=>{
    MY_URL = data.jjys.index;
    var router = data.jjys.router;
    var type = data.jjys.type;
    var nav = data.jjys.nav;
    var html = fetch(getVar('pageUrl', data.jjys.index));
    var conts = parseDomForArray(html, 'body&&.module'); //第一个不要

    for(var i=1; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.module-list&&.module-item');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], 'a&&title'),
                            img: parseDom(list[i], '.lazy&&data-src')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.module-item-text&&Text'),
                            url: 
        $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_jjys() }),
                                col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.module-list&&.module-item');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h2&&Text').replace("", "") + (i==0?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.module-list&&.module-item');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], 'a&&title'),
                        img: parseDom(list[i], '.lazy&&data-src')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.module-item-text&&Text'),
                        url: 
    $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_jjys() }),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], 'a&&title'),
                img: parseDom(list[j], '.lazy&&data-src')+'@Referer=',
                desc: parseDomForHtml(list[j], '.module-item-text&&Text'),
                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_jjys() }),
                col_type: "movie_3"
            });
        }
    }
}
//韩剧网97
var hjwindex = (d,data)=>{
    MY_URL = data.hjw97.index;
    var router = data.hjw97.router;
    var type = data.hjw97.type;
    var nav = data.hjw97.nav;
    var html = fetch(getVar('pageUrl', data.hjw97.index));
    var conts = parseDomForArray(html, 'body&&.myui-panel:has(.myui-vodlist)'); //第一个不要

    for(var i=0; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.myui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                            img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: 
                            $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));jx_hjw97();}),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.myui-vodlist&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h3&&Text').replace("", "") + (i==99?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==99?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.myui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                        img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: 
    $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));jx_hjw97();}),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.myui-vodlist__thumb&&title'),
                img: parseDom(list[j], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));jx_hjw97();}),
                col_type: "movie_3"
            });
        }
    }
}
//白熊
var bxindex = (d,data)=>{
    MY_URL = data.bx.index;
    var router = data.bx.router;
    var type = data.bx.type;
    var nav = data.bx.nav;
    var html = fetch(getVar('pageUrl', data.bx.index));
    var conts = parseDomForArray(html, 'body&&.fed-part-layout:has(.fed-list-info)'); //第一个不要

    for(var i=3; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.fed-list-info&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.fed-list-title&&Text'),
                            img: parseDom(list[i], '.fed-list-pics&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.fed-list-score||.fed-list-remarks&&Text'),
                            url: 
        $(parseDom(list[i], '.fed-list-pics&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));jx_bx();}),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length; i++) {
        if(i==2) continue ;
        var list = parseDomForArray(conts[i], '.fed-list-info&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h2&&Text').replace("", "") + (i==0||i==1?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0||i==1?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.fed-list-info&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.fed-list-title&&Text'),
                        img: parseDom(list[i], '.fed-list-pics&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.fed-list-score||.fed-list-remarks&&Text'),
                        url: 
    $(parseDom(list[i], '.fed-list-pics&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));jx_bx();}),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.fed-list-title&&Text'),
                img: parseDom(list[j], '.fed-list-pics&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.fed-list-score||.fed-list-remarks&&Text'),
                url: $(parseDom(list[j], '.fed-list-pics&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));jx_bx();}),
                col_type: "movie_3"
            });
        }
    }
}
//骚火
var saohuoindex = (d, data)=>{
    MY_URL = data.saohuo.index;
    var router = data.saohuo.router;
    var type = data.saohuo.type;
    var nav = data.saohuo.nav;
    var html = request(getVar('pageUrl', data.saohuo.index));
    var conts = parseDomForArray(html, 'body&&.grid_box:has(.v_list)'); //第一个不要

    for(var i=1; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.v_list&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], 'a&&title'),
                            img: parseDom(list[i], '.lazyload&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.v_note&&Text'),
                            url: 
        $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));jx_saohuo();}),
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.v_list&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h3&&Text').replace("", "") + (i==0?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.v_list&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], 'a&&title'),
                        img: parseDom(list[i], '.lazyload&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.v_note&&Text'),
                        url: 
    $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));jx_saohuo();}),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], 'a&&title'),
                img: parseDom(list[j], '.lazyload&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.v_note&&Text'),
                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));jx_saohuo();}),
                col_type: "movie_3"
            });
        }
    }
}
//闪电
var k1080index = (d,data)=>{
    MY_URL = data.k1080.index;
    var router = data.k1080.router;
    var type = data.k1080.type;
    var nav = data.k1080.nav;
    var html = request(getVar('pageUrl', data.k1080.index));
    var conts = parseDomForArray(html, 'body&&.mo-cols-lays:has(.mo-cols-rows):contains(更多)'); //第一个不要

    for(var i=1; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.mo-cols-lays,1&&ul,-1&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.mo-situ-name&&Text'),
                            img: parseDom(list[i], '.mo-situ-pics&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.mo-situ-rema&&Text'),
                            url: 
        $(parseDom(list[i], '.mo-situ-pics&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));jx_k1080();}),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], 'ul,-1&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h2&&Text').replace("", "") + (i==0?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.mo-cols-lays,1&&ul,-1&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.mo-situ-name&&Text'),
                        img: parseDom(list[i], '.mo-situ-pics&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.mo-situ-rema&&Text'),
                        url: 
    $(parseDom(list[i], '.mo-situ-pics&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));jx_k1080();}),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.mo-situ-name&&Text'),
                img: parseDom(list[j], '.mo-situ-pics&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.mo-situ-rema&&Text'),
                url: $(parseDom(list[j], '.mo-situ-pics&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));jx_k1080();}),
                col_type: "movie_3"
            });
        }
    }
}
//爱迪
var aidi = (d, data)=>{
    MY_URL = data.aidi.index;
    var router = data.aidi.router;
    var type = data.aidi.type;
    var nav = data.aidi.nav;
    var html = request(getVar('pageUrl', data.aidi.index));
    var conts =  parseDomForArray(html, 'body&&.pannel:has(.vodlist)'); //第一个不要

    for(var i=1; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.vodlist_thumb&&title'),
                            img: parseDom(list[i], '.vodlist_thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic_text&&Text'),
                            url: 
        $(parseDom(list[i], '.vodlist_thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_aidi();}),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.vodlist&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h2&&Text').replace("", "") + (i==0?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.vodlist_thumb&&title'),
                        img: parseDom(list[i], '.vodlist_thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic_text&&Text'),
                        url: 
    $(parseDom(list[i], '.vodlist_thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_aidi();}),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.vodlist_thumb&&title'),
                img: parseDom(list[j], '.vodlist_thumb&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.pic_text&&Text'),
                url: $(parseDom(list[j], '.vodlist_thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_aidi();}),
                col_type: "movie_3"
            });
        }
    }
}
//蘑菇
var mogu = (d, data)=>{
    MY_URL = data.mogu.index;
    var router = data.mogu.router;
    var type = data.mogu.type;
    var nav = data.mogu.nav;
    var html = request(getVar('pageUrl', data.mogu.index));
    var conts =  parseDomForArray(html, 'body&&.stui-pannel:has(.stui-vodlist)'); //第一个不要

    for(var i=0; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.stui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.stui-vodlist__thumb&&title'),
                            img: parseDom(list[i], '.stui-vodlist__thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: 
        $(parseDom(list[i], '.stui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));jx_mogu();}),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.stui-vodlist&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h3&&Text').replace("", "") + (i==99?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==99?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.stui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.stui-vodlist__thumb&&title'),
                        img: parseDom(list[i], '.stui-vodlist__thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: 
    $(parseDom(list[i], '.stui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));jx_mogu();}),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.stui-vodlist__thumb&&title'),
                img: parseDom(list[j], '.stui-vodlist__thumb&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                url: $(parseDom(list[j], '.stui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));jx_mogu();}),
                col_type: "movie_3"
            });
        }
    }
}
//757影视
var ys757 = (d, data)=>{
    MY_URL = data.ys757.index;
    var router = data.ys757.router;
    var type = data.ys757.type;
    var nav = data.ys757.nav;
    var html = request(getVar('pageUrl', data.ys757.index));
    var conts =  parseDomForArray(html, 'body&&.macplus-pannel:has(.macplus-vodlist)'); //第一个不要

    for(var i=1; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.macplus-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.macplus-vodlist__thumb&&title'),
                            img: parseDom(list[i], '.macplus-vodlist__thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: 
        $(parseDom(list[i], '.macplus-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_ys757();}),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.macplus-vodlist&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h3&&Text').replace("", "") + (i==0?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.macplus-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.macplus-vodlist__thumb&&title'),
                        img: parseDom(list[i], '.macplus-vodlist__thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: 
    $(parseDom(list[i], '.macplus-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_ys757();}),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.macplus-vodlist__thumb&&title'),
                img: parseDom(list[j], '.macplus-vodlist__thumb&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                url: $(parseDom(list[j], '.macplus-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_ys757();}),
                col_type: "movie_3"
            });
        }
    }
}
//速看影视
var skysindex = (d, data)=>{
    MY_URL = data.skys.index;
    var router = data.skys.router;
    var type = data.skys.type;
    var nav = data.skys.nav;
    var html = request(getVar('pageUrl', data.skys.index));
    var conts =  parseDomForArray(html, 'body&&.stui-pannel:has(.stui-vodlist)'); //第一个不要

    for(var i=1; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.stui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.stui-vodlist__thumb&&title'),
                            img: parseDom(list[i], '.stui-vodlist__thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: 
        $(parseDom(list[i], '.stui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_skys();}),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =1; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.stui-vodlist&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h3&&Text').replace("", "") + (i==0?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.stui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.stui-vodlist__thumb&&title'),
                        img: parseDom(list[i], '.stui-vodlist__thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: 
    $(parseDom(list[i], '.stui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_skys();}),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.stui-vodlist__thumb&&title'),
                img: parseDom(list[j], '.stui-vodlist__thumb&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                url: $(parseDom(list[j], '.stui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_skys();}),
                col_type: "movie_3"
            });
        }
    }
}
//麻花
var mhdyindex = (d, data)=>{
    MY_URL = data.mhdy.index;
    var router = data.mhdy.router;
    var type = data.mhdy.type;
    var nav = data.mhdy.nav;
    var html = request(getVar('pageUrl', data.mhdy.index));
    var conts =  parseDomForArray(html, 'body&&.myui-panel:has(.myui-vodlist)'); //第一个不要

    for(var i=2; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.myui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                            img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: 
        $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));jx_mhdy();}),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.myui-vodlist&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h3&&Text').replace("", "") + (i==0||i==1?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0||i==1?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.myui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                        img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: 
    $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));jx_mhdy();}),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.myui-vodlist__thumb&&title'),
                img: parseDom(list[j], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));jx_mhdy();}),
                col_type: "movie_3"
            });
        }
    }
}
//妮妮萌
var nnmindex = (d, data)=>{
    MY_URL = data.nnm.index;
    var router = data.nnm.router;
    var type = data.nnm.type;
    var nav = data.nnm.nav;
    var html = request(getVar('pageUrl', data.nnm.index));
    var conts =  parseDomForArray(html, 'body&&.div_left:has(.ul_li_a5)'); //第一个不要

    for(var i=0; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.blockcontent1&&.cell');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], 'img&&alt'),
                            img: parseDom(list[i], 'img&&src')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.newname&&Text'),
                            url:  $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_nnm();}),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.ul_li_a5,-1&&li');
        d.push({
            title: '‘‘’’' + '最新动漫' + (i==99?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==99?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.blockcontent1&&.cell');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], 'img&&alt'),
                        img: parseDom(list[i], 'img&&src')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.newname&&Text'),
                        url:  $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_nnm();}),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], 'img&&alt'),
                img: parseDom(list[j], 'img&&src')+'@Referer=',
                desc: parseDomForHtml(list[j], '.anime_icon1_name1&&Text'),
                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_nnm();}),
                col_type: "movie_3"
            });
        }
    }
}
//鬼片之家
var gpzjindex = (d, data)=>{
    MY_URL = data.gpzj.index;
    var router = data.gpzj.router;
    var type = data.gpzj.type;
    var nav = data.gpzj.nav;
    var html = request(getVar('pageUrl', data.gpzj.index));
    var conts =  parseDomForArray(html, 'body&&.layout:has(.carousel)'); //第一个不要

    for(var i=0; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.video-list1&&.item');
                    for (var i in list) {
                        var imgsrc=parseDomForHtml(list[i], 'span&&style').match(/url\((.*?)\)/);
                        d.push({
                            title: parseDomForHtml(list[i], 'a&&title'),
                            img: 'https://www.guipian456.com'+(imgsrc!=null?imgsrc[1]:'')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.score&&Text'),
                            url: 
        $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_gpzj() }),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.carousel&&.video-list');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h4&&Text').replace("", "") + (i==0?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.myui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                        img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: 
    $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));
    jx_jpys();}),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
             var imgsrc=parseDomForHtml(list[j], 'a&&style').match(/url\((.*?)\)/);
            d.push({
                title: parseDomForHtml(list[j], 'a&&title'),
                img: 'https://www.guipian456.com'+(imgsrc!=null?imgsrc[1]:'')+'@Referer=',
                desc: parseDomForHtml(list[j], '.bottomtext&&Text'),
                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_gpzj() }),
                col_type: "movie_3"
            });
        }
    }
    
    d.push({ col_type: 'line_blank' });
    d.push({ title: "<h4 style='text-align:center;'><font color='#b36d61'>到底了呢！</font></h4>", col_type: "rich_text" });
    setResult(d)
}
//速搜
var susouindex = (d, data)=>{
    MY_URL = data.susou.index;
    var router = data.susou.router;
    var type = data.susou.type;
    var nav = data.susou.nav;
    var html = request(getVar('pageUrl', data.susou.index));
    var conts =  parseDomForArray(html, 'body&&.box:has(.list-a)'); //第一个不要

    for(var i=1; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.list-a&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.img&&title'),
                            img: parseDom(list[i], '.lazy&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.list-remarks&&Text'),
                            url: 
        $(parseDom(list[i], '.img&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_susou();}),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.list-a&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h2&&Text').replace("", "") + (i==0?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.list-a&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.img&&title'),
                        img: parseDom(list[i], '.lazy&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.list-remarks&&Text'),
                        url: 
    $(parseDom(list[i], '.img&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_susou();}),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.img&&title'),
                img: parseDom(list[j], '.lazy&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.list-remarks&&Text'),
                url: $(parseDom(list[j], '.img&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_susou();}),
                col_type: "movie_3"
            });
        }
    }
}
//恐怖鸭
var kbyindex = (d, data)=>{
    MY_URL = data.kby.index;
    var router = data.kby.router;
    var type = data.kby.type;
    var nav = data.kby.nav;
    var html = fetch(getVar('pageUrl', data.kby.index),{headers:{'User-Agent':MOBILE_UA}});
    var conts =  parseDomForArray(html, 'body&&.module:has(.module-item)'); //第一个不要

    for(var i=1; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =fetch(getVar('pageUrl'),{headers:{'User-Agent':MOBILE_UA}});
                    var list = parseDomForArray(html, '.module-items&&.module-item');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], 'a&&title'),
                            img: parseDom(list[i], 'img&&data-src')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.module-item-text&&Text'),
                            url: 
        $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));jx_kby();}),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length-1; i++) {
        var list = parseDomForArray(conts[i], '.module-items&&.module-item');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h2&&Text').replace("", "") + (i==0?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =fetch(getVar('pageUrl'),{headers:{'User-Agent':MOBILE_UA}});
                var list = parseDomForArray(html, 'body&&.module-items&&.module-item');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], 'a&&title'),
                        img: parseDom(list[i], 'img&&data-src')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.module-item-text&&Text'),
                        url: 
    $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));jx_kby();}),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], 'a&&title'),
                img: parseDom(list[j], 'img&&data-src')+'@Referer=',
                desc: parseDomForHtml(list[j], '.module-item-text&&Text'),
                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js'));jx_kby();}),
                col_type: "movie_3"
            });
        }
    }
}
//冬瓜电影
var dgdyindex = (d,data)=>{
    MY_URL = data.dgdy.index;
    var router = data.dgdy.router;
    var type = data.dgdy.type;
    var nav = data.dgdy.nav;
    var html = fetch(getVar('pageUrl', data.dgdy.index),{headers:{'User-Agent':MOBILE_UA}});
    var conts =  parseDomForArray(html, 'body&&.stui-pannel:has(.stui-vodlist)'); //第一个不要

    for(var i=0; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.stui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], 'a&&title'),
                            img: parseDom(list[i], 'a&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: 
        $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_dgdy();}),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.stui-vodlist&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h3&&Text').replace("", "") + (i==99?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==99?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.stui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], 'a&&title'),
                        img: parseDom(list[i], 'a&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: 
    $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_dgdy();}),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], 'a&&title'),
                img: parseDom(list[j], 'a&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_dgdy();}),
                col_type: "movie_3"
            });
        }
    }
}
//迪迪影院
var didiindex = (d,data)=>{
    MY_URL = data.didi.index;
    var router = data.didi.router;
    var type = data.didi.type;
    var nav = data.didi.nav;
    var html = fetch(getVar('pageUrl', data.didi.index),{headers:{'User-Agent':MOBILE_UA}});
    var conts =  parseDomForArray(html, 'body&&.myui-panel:has(.myui-vodlist)'); //第一个不要

    for(var i=3; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.myui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], 'a&&title'),
                            img: parseDom(list[i], 'a&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: 
        $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_didi();}),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], '.myui-vodlist&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h3&&Text').replace("", "") + (i==0?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.myui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], 'a&&title'),
                        img: parseDom(list[i], 'a&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: 
    $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_didi();}),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], 'a&&title'),
                img: parseDom(list[j], 'a&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_didi();}),
                col_type: "movie_3"
            });
        }
    }
}
//忆漫影视
var ymysindex = (d, data)=>{
    MY_URL = data.ymys.index;
    var router = data.ymys.router;
    var type = data.ymys.type;
    var nav = data.ymys.nav;
    var html = fetch(getVar('pageUrl', data.ymys.index),{headers:{'User-Agent':MOBILE_UA}});
    var conts =  parseDomForArray(html, 'body&&.mo-cols-lays:has(.mo-cols-rows)'); //第一个不要

    for(var i=3; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                   var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, 'body&&.mo-cols-lays:has(.mo-cols-rows)&&ul,-1&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.mo-situ-name&&Text'),
                            img: parseDom(list[i], 'a&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.mo-situ-rema&&Text'),
                            url: 
        $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_ymys();}),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }
    
    for (var i =0; i<conts.length-1; i++) {
        if(i==2) continue;
        var list = parseDomForArray(conts[i], 'ul,-1&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h2&&Text').replace("", "") + (i==0||i==1?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0||i==1?'':$(router[i]).rule((type, index) => {
               var d = []; eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, 'body&&.mo-cols-lays:has(.mo-cols-rows)&&ul,-1&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.mo-situ-name&&Text'),
                        img: parseDom(list[i], 'a&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.mo-situ-rema&&Text'),
                        url: 
    $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_ymys();}),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.mo-situ-name&&Text'),
                img: parseDom(list[j], 'a&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.mo-situ-rema&&Text'),
                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_ymys();}),
                col_type: "movie_3"
            });
        }
    }
}
var searchmovie = (lazyData, keydata)=>{
    var d = [];
    var batData = [];var searchReg = [];var searchTitle=[];
    var tout = '2000';
    var key = keydata!=undefined? keydata : MY_URL.split('$$$')[1];
    var{jpys_lazy, taotao_lazy, five_lazy, mjc_lazy, lengyue_lazy} = lazyData;
    //var searchType = [{name:'', key: ''}, {name:'', key: ''}]
    /*var searchType = getVar('searchTypeword', '全部');
    var condSearch = "";
    var searchPage = -1;*/
    //eval(fetch('hiker://files/rules/black/search.js'));
    var searchData=JSON.parse( fetch('hiker://files/rules/black/data.js') );
    

    if(keydata!=undefined){
        d.push({
            desc: (searchData.x5Height!=undefined? searchData.x5Height: 100) +'&&float',
            url: 'file:///storage/emulated/0/Android/data/com.example.hikerview/files/Documents/rules/black/search.html',
            col_type: 'x5_webview_single'
        })
    }

    for(var i in movielists){
        if(searchData.searchMode == 0){
        d.push({
            title:keydata==undefined? movielists[i].title : ('‘‘’’' +  movielists[i].title + " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: $(movielists[i].search.replace('关键词', key)).rule((lazyData,testUrl)=>{
                var d = []
                var html=getResCode();
                var{jpys_lazy, taotao_lazy, five_lazy, mjc_lazy, lengyue_lazy} = lazyData;
                if(/meijuchong/.test(MY_URL)){
                    try{
                        var list = parseDomForArray(html, 'body&&.myui-vodlist__media&&li');
                        for (var j = 0; j < list.length; j++) {
                            d.push({
                                title: parseDomForHtml(list[j], '.myui-vodlist__thumb&&title'),
                                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                pic_url: parseDom(list[j], '.myui-vodlist__thumb&&data-original'),
                                content:parseDomForHtml(list[j], '.hidden-xs&&Text'),
                                url:$(parseDom(list[j], '.btn&&href')).rule((mjc_lazy) => { eval(fetch('hiker://files/rules/black/B_play.js')); mjc_lazy!=undefined? jx_mjc(mjc_lazy) : jx_mjc() }, mjc_lazy),
                            });
                        }
                    }catch(e){}
                }else if(/flvwec/.test(MY_URL)){
                    try{
                        var content = '<body>' + parseDom(getResCode(), 'body&&#searchList&&Html') + '</body>';
                        var list = parseDomForArray(content, 'body&&li');
                        for(var i in list){
                            d.push({
                                title:parseDomForHtml(list[i],'a&&title'),
                                desc:parseDomForHtml(list[i],'.pic-tag&&Text'),
                                pic_url:parseDomForHtml(list[i],'a&&data-original'),
                                url:$(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_taotao() }),
                                content:parseDomForHtml(list[i],'p.hidden-xs&&Text')
                            });
                        }
                    }catch(e){}
                }else if(/o8tv/.test(MY_URL)){
                    try{
                        var list = parseDomForArray(html, 'body&&.myui-vodlist__media&&li');
                        for (var j in list) {
                            d.push({
                                title: parseDomForHtml(list[j], '.myui-vodlist__thumb&&title'),
                                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                content: parseDomForHtml(list[j], 'p,-2&&Text'),
                                pic_url: parseDom(list[j], '.myui-vodlist__thumb&&data-original'),
                                url: $(parseDom(list[j], '.btn-warm&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_555() })
                           });
                        }
                    }catch(e){}
                }else if(/jpysvip/.test(MY_URL)){
                    var list = parseDom(html, '.myui-vodlist__media&&Html').match(/<li[\s\S]*?<\/li/g);
                    for (var j = 0; j < list.length; j++) {
                        d.push({
                            title: parseDomForHtml(list[j], 'h4&&Text'),
                            desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                            pic_url: parseDom(list[j], '.lazyload&&data-original'),
                            content:parseDomForHtml(list[j], '.detail--h4&&Text'),
                            url: $(parseDom(list[j], 'h4&&a&&href')).rule((jpys_lazy) => { eval(fetch('hiker://files/rules/black/B_play.js')); jpys_lazy!=undefined? jx_jpys(jpys_lazy) : jx_jpys();},jpys_lazy),
                        });
                    }
                }else if(/lengyue/.test(MY_URL)){
                    try{
                        var list = parseDom(html, '.myui-vodlist__media&&Html').match(/<li[\s\S]*?<\/li/g);
                        for (var j = 0; j < list.length; j++) {
                            d.push({
                                title: parseDomForHtml(list[j], 'a&&title'),
                                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                pic_url: parseDom(list[j], '.lazyload&&data-original'),
                                content: parseDomForHtml(list[j], 'p,-2&&Text'),
                                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_ge179() })
                            });
                        }
                    }catch(e){}
                }else if(/179u/.test(MY_URL)){
                    var list = parseDomForArray(html, '.myui-vodlist__media&&li');//列表
                    for(var j in list){
                        d.push({
                            title:parseDomForHtml(list[j],'a&&title'),//标题
                            desc:parseDomForHtml(list[j],'.pic-text&&Text'),//描述
                            content:parseDomForHtml(list[j],'.detail&&p,-2&&Text'),//详情
                            pic_url:parseDom(list[j],'.lazyload&&data-original'),//图片
                            url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_ge179() })
                        });
                    }
                }else if(/nfmovie/.test(MY_URL)){
                    html = fetch(MY_URL,{headers:{'User-Agent':'Mozilla/5.0','Cookie':getVar('hikernfcookie')}});
                    var list = parseDom(html, '#searchList&&Html').match(/<li[\s\S]*?<\/li/g);
                    for (var j = 0; j < list.length; j++) {
                        d.push({
                             title: parseDomForHtml(list[j], '.myui-vodlist__thumb&&title'),
                             desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                             pic_url: parseDom(list[j], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                             url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_nfmovie() })
                        });
                      }
                }else if(/nfxhd/.test(MY_URL)){
                    if (getResCode().indexOf('检测中') != -1) {
                        html=fetch(MY_URL + '?btwaf'+ html.match(/btwaf(.*?)\"/)[1], {});
                    }
                    var list = parseDomForArray(html, '#searchList&&li');
                    for (var j in list) {
                        d.push({
                            title: parseDomForHtml(list[j], 'a&&title'),
                            desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                            content: parseDomForHtml(list[j], 'p,1&&Text'),
                            img: parseDom(list[j], '.lazyload&&data-original'),
                            url: $(parseDom(list[j],'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_nfx() })
                        });
                    }
                }else if(/mjhd/.test(MY_URL)){
                    var list = parseDomForArray(html, '.myui-panel_bd&&li');//列表
                    for(var j in list){
                    d.push({
                        title:parseDomForHtml(list[j],'h4&&a&&Text'),
                        desc:parseDomForHtml(list[j],'.pic-text&&Text'),
                        content:parseDomForHtml(list[j],'.detail--h4&&Text'),
                        pic_url:parseDom(list[j],'.lazyload&&data-original'),
                        url: $(parseDom(list[j],'h4&&a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_mjhd() })
                    });
                    }
                }else if(/dm45/.test(MY_URL)){
                    var list = parseDomForArray(html, 'body&&.leo-detail-wrap');
                    for (var j = 0; j < list.length; j++) {
                        d.push({
                             title: parseDomForHtml(list[j], 'h1&&Text'),
                             desc: parseDomForHtml(list[j], '.leo-color-a,1&&Text'),
                             pic_url: parseDom(list[j], 'img&&data-original'),
                             url: $(parseDom(list[j],'a,-2&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_xsj() })
                        });
                    }
                }else if(/acmdy/.test(MY_URL)){
                    testUrl('https://www.acmdy.com');
                    var list = parseDomForArray(html, '.vodlist&&li');//列表
                    for(var j in list){
                        try{
                            d.push({
                                title:parseDomForHtml(list[j],'a&&title'),//标题
                                desc:parseDomForHtml(list[j],'.pic_text&&Text'),//描述
                                content:parseDomForHtml(list[j],'p,-1&&Text'),//详情
                                pic_url:parseDom(list[j],'a&&data-original'),//图片
                                url:$(parseDom(list[j],'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_yyjc() })//链接
                            });
                        }catch(e){''}
                    }
                }else if(/qimi/.test(MY_URL)){
                    try{
                        html = fetch(MY_URL);
                        var list = parseDom(html, 'body&&.show-list&&Html').match(/<li[\s\S]*?<\/li/g);
                        for (var j = 0; j < list.length; j++) {
                            d.push({
                                title: parseDomForHtml(list[j], 'h2&&a&&Text'),
                                desc: parseDomForHtml(list[j], '.color&&Text'),
                                pic_url: parseDom(list[j], 'img&&src'),
                                content:parseDomForHtml(list[j], '.juqing&&dd&&Text'),
                                url: $(parseDom(list[j],'h2&&a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_qimi() })
                            });
                    }}catch(e){} 
                }else if(/newqiyu/.test(MY_URL)){
                    try{
                        html = fetch(MY_URL);
                        var list = parseDomForArray(html, 'body&&.card')//列表
                        for (var j = 0; j < list.length; j++) {
                            d.push({
                                title: parseDomForHtml(list[j], '.lazy&&alt'),
                                desc: parseDomForHtml(list[j], '.label&&Text'),
                                pic_url: parseDom(list[j], '.lazy&&data-original'),
                                content:parseDomForHtml(list[j], '.card-content&&Text'),
                                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_nqy() })
                           });
                    }}catch(e){} 
                }else if(/jiujiuying/.test(MY_URL)){
                    try{
                        html = fetch(MY_URL);
                        var list = parseDomForArray(html, 'body&&.module-list&&.module-search-item');
                        for (var j = 0; j < list.length; j++) {
                            d.push({
                                title: parseDomForHtml(list[j], '.lazyload&&alt'),
                                desc: parseDomForHtml(list[j], '.video-serial&&Text'),
                                pic_url: parseDom(list[j], '.lazyload&&data-src'),
                                content:parseDomForHtml(list[j], '.video-info-item&&Text'),
                                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_jjys() })
                           });
                    }}catch(e){} 
                }else if(/97hanju/.test(MY_URL)){
                    try{
                        html = fetch(MY_URL);
                        var list = parseDom(html, 'body&&body&&.myui-vodlist__media&&Html').match(/<li[\s\S]*?<\/li/g);
                        for (var j = 0; j < list.length; j++) {
                            d.push({
                                title: parseDomForHtml(list[j], '.myui-vodlist__thumb&&title'),
                                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                pic_url: parseDom(list[j], '.myui-vodlist__thumb&&data-original'),
                                content:parseDomForHtml(list[j], 'p,-2&&Text'),
                                url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_hjw97() })
                            });
                    }}catch(e){} 
                }else if(/woobm/.test(MY_URL)){
                    try{
                        html = fetch(MY_URL);
                        var list = parseDomForArray(html, 'body&&.fed-deta-info');;
                        for (var j = 0; j < list.length; j++) {
                            d.push({
                                title: parseDomForHtml(list[j], 'h1&&Text'),
                                desc: parseDomForHtml(list[j], '.fed-list-remarks&&Text'),
                                pic_url: parseDom(list[j], 'a&&data-original')+'@Referer=',
                                content:parseDomForHtml(list[j], '.fed-part-esan&&Text'),
                                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_bx() })
                            });
                    }}catch(e){} 
                }else if(/saohuo/.test(MY_URL)){
                    try{
                        html = request(MY_URL);
                        var list = parseDom(html, 'body&&.v_list&&Html').match(/<li[\s\S]*?<\/li/g);
                        for (var j = 0; j < list.length; j++) {
                            d.push({
                                title: parseDomForHtml(list[j], 'a&&title'),
                                desc: parseDomForHtml(list[j], '.v_note&&Text'),
                                pic_url: parseDom(list[j], 'img&&data-original'),
                                content:parseDomForHtml(list[j], 'Text'),
                                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_saohuo() })
                            });
                    }}catch(e){} 
                }else if(/ak1080/.test(MY_URL)){
                    try{
                        //html = request(MY_URL);
                        var list = parseDomForArray(html, 'body&&dl:has(dd)');
                        for (var j = 0; j < list.length; j++) {
                            d.push({
                                title: parseDomForHtml(list[j], 'h1&&Text'),
                                desc: parseDomForHtml(list[j], '.mo-coxs-center&&Text'),
                                content: parseDomForHtml(list[j], '.mo-cols-lg10--h1&&Text'),
                                img: parseDom(list[j], 'a&&data-original'),
                                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_k1080() })
                            });
                    }}catch(e){} 
                }else if(/aidi/.test(MY_URL)){
                    try{
                        //html = request(MY_URL);
                        var list =  parseDom(html, 'body&&.vodlist&&Html').match(/<li[\s\S]*?<\/li/g);
                        for (var j = 0; j < list.length; j++) {
                            d.push({
                                title: parseDomForHtml(list[j], '.searchlist_titbox&&a&&title'),
                                desc: parseDomForHtml(list[j], '.pic_text&&Text'),
                                pic_url: parseDom(list[j], '.vodlist_thumb&&data-original'),
                                content:parseDomForHtml(list[j], '.vodlist_sub,-1&&Text'),
                                url: $(parseDom(list[j], '.vodlist_thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_aidi() })
                            });
                    }}catch(e){} 
                }else if(/mogu/.test(MY_URL)){
                    try{
                        //html = request(MY_URL);
                        var list =  parseDom(html, 'body&&.stui-vodlist__media&&Html').match(/<li[\s\S]*?<\/li/g);
                        for (var j = 0; j < list.length; j++) {
                            d.push({
                                title: parseDomForHtml(list[j], '.v-thumb&&title'),
                                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                pic_url: parseDomForHtml(list[j], '.v-thumb&&style').match(/url\('(.*?)'/)[1]+'@Referer=',
                                content:parseDomForHtml(list[j], '.hidden-mi&&Text'),
                                url: $(parseDom(list[j], '.v-thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_mogu() })
                            });
                    }}catch(e){} 
                }else if(/757vcd/.test(MY_URL)){
                    try{
                        //html = request(MY_URL);
                        var list =  parseDomForArray(html,'body&&.macplus-vodlist__media&&li');
                        for (var j = 0; j < list.length; j++) {
                            d.push({
                                title: parseDomForHtml(list[j], 'a&&title'),
                                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                pic_url: parseDom(list[j], '.lazyload&&data-original')+'@Referer=',
                                content:parseDomForHtml(list[j], '.detail&&Text'),
                                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_ys757() })
                            });
                    }}catch(e){} 
                }else if(/sukhdw/.test(MY_URL)){
                    try{
                        //html = request(MY_URL);
                        var list =  parseDomForArray(html, 'body&&.stui-vodlist&&li');
                        for (var j = 0; j < list.length; j++) {
                            d.push({
                                title:parseDomForHtml(list[j],'h4&&Text'),
                                desc:parseDomForHtml(list[j],'.pic-text&&Text'),
                                pic_url:parseDom(list[j],'.lazyload&&data-original'),
                                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_skys() })
                            });
                    }}catch(e){} 
                }else if(/ubo110/.test(MY_URL)){
                    try{
                        //html = request(MY_URL);
                        var list =  parseDom(html, 'body&&.myui-vodlist__media&&Html').match(/<li[\s\S]*?<\/li/g);
                        for (var j = 0; j < list.length; j++) {
                            d.push({
                                title: parseDomForHtml(list[j], 'a&&title'),
                                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                pic_url: parseDom(list[j], 'a&&data-original'),
                                content:parseDomForHtml(list[j], '.detail--h4&&Text'),
                                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_mhdy() })
                            });
                    }}catch(e){} 
                }else if(/ninimeng/.test(MY_URL)){
                    try{
                        //html = request(MY_URL);
                        var list =  parseDomForArray(html, 'body&&.cell');
                        for (var j = 0; j < list.length; j++) {
                            d.push({
                                title: parseDomForHtml(list[j], '.cell_imform_name&&Text'),
                                desc: parseDomForHtml(list[j], 'span&&Text'),
                                pic_url: parseDom(list[j], 'img&&src'),
                                content:parseDomForHtml(list[j], '.cell_imform_desc&&Text'),
                                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_nnm() })
                            });
                    }}catch(e){} 
                }else if(/guipian456/.test(MY_URL)){
                    try{
                        //html = request(MY_URL);
                        var list =  parseDomForArray(html, 'body&&.col-md-12');
                        for (var j = 0; j < list.length; j++) {
                            d.push({
                                title: parseDomForHtml(list[j], 'a&&title'),
                                desc: parseDomForHtml(list[j], '.text-overflow&&span&&Text'),
                                pic_url: 'https://www.guipian456.com'+parseDom(list[j], 'span&&style').match(/url\((.*?)\)/)[1],
                                content:parseDomForHtml(list[j], '.subtitle&&Text'),
                                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_gpzj() })
                            });
                    }}catch(e){} 
                }else if(/susou/.test(MY_URL)){
                    try{
                        //html = request(MY_URL);
                        var list =  parseDom(html, '.searchlilst&&ul&&Html').match(/<li[\s\S]*?<\/li/g);
                        for (var j = 0; j < list.length; j++) {
                            d.push({
                                title: parseDomForHtml(list[j], 'a&&title'),
                                desc: parseDomForHtml(list[j], '.list-remarks&&Text'),
                                pic_url: parseDom(list[j], 'a&&data-original'),
                                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_susou() })
                            });
                    }}catch(e){} 
                }else if(/yanetflix/.test(MY_URL)){
                    try{
                        //html = request(MY_URL);
                        var list =  parseDomForArray(html, 'body&&.module-items&&.module-search-item');
                        for (var j = 0; j < list.length; j++) {
                            d.push({
                                title: parseDomForHtml(list[j], 'a&&title'),
                                desc: parseDomForHtml(list[j], '.video-serial&&Text'),
                                pic_url: parseDom(list[j], '.lazy&&data-src'),
                                content:parseDomForHtml(list[j], '.video-info-item,-1&&Text'),
                                url: $(parseDom(list[j], '.video-serial&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_kby() })
                            });
                    }}catch(e){} 
                }else if(/dgyytv/.test(MY_URL)){
                    try{
                        //html = request(MY_URL);
                        var list =  parseDom(html, '.stui-vodlist__media&&Html').match(/<li[\s\S]*?<\/li/g);
                        for (var j = 0; j < list.length; j++) {
                            d.push({
                                title: parseDomForHtml(list[j], '.stui-vodlist__thumb&&title'),
                                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                pic_url: parseDom(list[j], '.stui-vodlist__thumb&&data-original'),
                                url: $(parseDom(list[j], '.stui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_dgdy() })
                            });
                    }}catch(e){} 
                }else if(/4ytv/.test(MY_URL)){
                    try{
                        //html = request(MY_URL);
                        var list = parseDom(html, 'body&&.myui-vodlist__media&&Html').match(/<li[\s\S]*?<\/li/g);
                        for (var j = 0; j < list.length; j++) {
                            d.push({
                                title: parseDomForHtml(list[j], 'a&&title'),
                                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                pic_url: parseDom(list[j], 'a&&data-original'),
                                content:parseDomForHtml(list[j], 'p,-2&&Text'),
                                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_didi() })
                            });
                    }}catch(e){} 
                }else if(/yimmh/.test(MY_URL)){
                    try{
                        //html = request(MY_URL);
                        var list = parseDomForArray(html, '.mo-main-info&&.mo-deta-info:has(.mo-cols-rows)');
                        for (var j = 0; j < list.length; j++) {
                            d.push({
                                title: parseDomForHtml(list[j], 'h1&&Text'),
                                desc: parseDomForHtml(list[j], '.mo-situ-rema&&Text'),
                                pic_url: parseDom(list[j], '.mo-situ-pics&&data-original'),
                                content:parseDomForHtml(list[j], 'dd--h1&&Text'),
                                url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_ymys() })
                            });
                    }}catch(e){} 
                }
                setResult(d)
            },lazyData,testUrl),
            col_type: "text_1"
        });
        }
        
            //eval(fetch('hiker://files/rules/black/search.js'));
            /*d.push({
                desc: (x5Height!=undefined? x5Height: 100) +'&&float',
                url: 'file:///storage/emulated/0/Android/data/com.example.hikerview/files/Documents/rules/black/tc.html',
                col_type: 'x5_webview_single'
            })*/
            //if(searchPage!=-1 && searchPage-1 < i) continue;
            //var search_case = 'k_'+i;
            //var search_case = movielists[i].reg; 
    }
    var spage = keydata!=undefined? MY_URL.split('$$$')[1] : MY_URL.split("$$$")[2];
    var length = spage*searchData.searchPageNum;
    var end = length>movielists.length? movielists.length: length;
    if(searchData.searchMode != 0){
        if(searchData.searchMode == 1){
            for(var i = length - searchData.searchPageNum; i<end; i++){
                var batUrl = movielists[i].search.replace('关键词', key).replace('fypage','1');
                if(movielists[i].reg == 'nfmovie'){
                    batData.push({url:batUrl, options:{headers:{"User-Agent":"Mozilla/5.0","Cookie":getVar("hikernfcookie")},timeout:tout}});
                }else{
                    batData.push({url: batUrl, options:{headers:{"User-Agent":MOBILE_UA},timeout:tout}});
                }
                searchReg.push(movielists[i].reg);
                searchTitle.push(movielists[i].title);
            }
        }else if(searchData.searchMode == 2){
            var ysList = searchData.ysStr.split('&');
            
            for(var i in ysList){
                for(var j in movielists){
                    if(movielists[j].key == ysList[i]){
                        var batUrl = movielists[j].search.replace('关键词', key).replace('fypage','1');
                        if(movielists[j].reg == 'nfmovie'){
                            batData.push({url:batUrl, options:{headers:{"User-Agent":"Mozilla/5.0","Cookie":getVar("hikernfcookie")},timeout:tout}});
                        }else{
                            batData.push({url: batUrl, options:{headers:{"User-Agent":MOBILE_UA},timeout:tout}});
                        }
                        searchReg.push(movielists[j].reg);
                        searchTitle.push(movielists[j].title);
                        break;  
                    }
                }
            }
        }

        if(batData!=''){
            var bHtmlList=batchFetch(batData);
            for(var k=0;k<bHtmlList.length;k++){
                var html=bHtmlList[k];
                
                d.push({
                    title: searchTitle[k],
                    col_type: 'text_1'
                });
            
                switch (searchReg[k]) {
                    case 'jpys':
                        MY_URL = data.jpys.index;
                        try{
                            var list = parseDomForArray(html, '.myui-vodlist__media&&li');
                            if(list == null) continue;            
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                d.push({
                                    title: parseDomForHtml(list[j], 'h4&&Text'),
                                    desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                    pic_url: parseDom(list[j], '.lazyload&&data-original'),
                                    content:parseDomForHtml(list[j], '.detail--h4&&Text'),
                                    url: $(parseDom(list[j], 'h4&&a&&href')).rule((jpys_lazy) => { eval(fetch('hiker://files/rules/black/B_play.js')); jpys_lazy!=undefined? jx_jpys(jpys_lazy) : jx_jpys();},jpys_lazy),
                                });
                            }
                        }catch(e){} 
                        break;
                    case 'taotao':
                        MY_URL = data.taotao.index; 
                        try{
                            var content = '<body>' + parseDom(html, 'body&&#searchList&&Html') + '</body>';
                            var list = parseDomForArray(content, 'body&&li');    
                            if(list == null) continue;        
                            var len = list.length>9 ? 9 : list.length;
                            for(var j = 0; j < len; j++){
                                d.push({
                                    title:parseDomForHtml(list[j],'a&&title'),
                                    desc:parseDomForHtml(list[j],'.pic-tag&&Text'),
                                    pic_url:parseDomForHtml(list[j],'a&&data-original'),
                                    url:$(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_taotao() }),
                                    content:parseDomForHtml(list[j],'p.hidden-xs&&Text')
                                });
                            }
                        }catch(e){}
                        break;
                    case 'fivefive':
                        MY_URL = data.fivefive.index;
                        try{
                            var list = parseDomForArray(html, 'body&&.myui-vodlist__media&&li');
                            if(list == null) continue;                
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                d.push({
                                    title: parseDomForHtml(list[j], '.myui-vodlist__thumb&&title'),
                                    desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                    content: parseDomForHtml(list[j], 'p,-2&&Text'),
                                    pic_url: parseDom(list[j], '.myui-vodlist__thumb&&data-original'),
                                    url: $(parseDom(list[j], '.btn-warm&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_555() })
                                });
                            }
                            }catch(e){}
                        break;
                    case 'nfmovie':
                        MY_URL = data.nfmovie.index;
                        try{
                            //var html = fetch(movielists[i].search.replace('关键词', key).replace('fypage','1'), {headers:{'User-Agent':'Mozilla/5.0','Cookie':getVar('hikernfcookie')}});;
                            var list = parseDom(html, '#searchList&&Html').match(/<li[\s\S]*?<\/li/g);
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                d.push({
                                    title: parseDomForHtml(list[j], '.myui-vodlist__thumb&&title'),
                                    desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                    pic_url: parseDom(list[j], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                                    url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_nfmovie() })
                                });
                            }
                        }catch(e){}
                        break;
                    case 'nfx':
                        MY_URL = data.nfx.index;
                        try{ 
                            var list = parseDomForArray(html, '#searchList&&li');
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                d.push({
                                    title: parseDomForHtml(list[j], 'a&&title'),
                                    desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                    content: parseDomForHtml(list[j], 'p,1&&Text'),
                                    img: parseDom(list[j], '.lazyload&&data-original'),
                                    url: $(parseDom(list[j],'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_nfx() })
                                });
                            }
                        }catch(e){}
                        break;
                    case 'mjhd':
                        MY_URL = data.mjhd.index;
                        try{ 
                            var list = parseDomForArray(html, '.myui-panel_bd&&li');//列表
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for(var j in list){
                                d.push({
                                    title:parseDomForHtml(list[j],'h4&&a&&Text'),
                                    desc:parseDomForHtml(list[j],'.pic-text&&Text'),
                                    content:parseDomForHtml(list[j],'.detail--h4&&Text'),
                                    pic_url:parseDom(list[j],'.lazyload&&data-original'),
                                    url: $(parseDom(list[j],'h4&&a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_mjhd() })
                                });
                            }
                        }catch(e){}
                        break;
                    case 'xsj':
                        MY_URL = data.xsj.index;
                        try{
                            var list = parseDomForArray(html, 'body&&.leo-detail-wrap');//列表
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                d.push({
                                        title: parseDomForHtml(list[j], 'h1&&Text'),
                                        desc: parseDomForHtml(list[j], '.leo-color-a,1&&Text'),
                                        pic_url: parseDom(list[j], 'img&&data-original'),
                                        url: $(parseDom(list[j],'a,-2&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_xsj() })
                                });
                            }
                        }catch(e){}
                        break;
                    case 'qimi':
                        MY_URL = data.qimi.index;
                        try{
                            var list = parseDom(html, 'body&&.show-list&&Html').match(/<li[\s\S]*?<\/li/g);
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                d.push({
                                    title: parseDomForHtml(list[j], 'h2&&a&&Text'),
                                    desc: parseDomForHtml(list[j], '.color&&Text'),
                                    pic_url: parseDom(list[j], 'img&&src'),
                                    content:parseDomForHtml(list[j], '.juqing&&dd&&Text'),
                                    url: $(parseDom(list[j],'h2&&a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_qimi() })
                                });
                            }
                        }catch(e){}
                        break;
                    case 'yyjc':
                        MY_URL = data.yyjc.index;
                        try{
                            testUrl(data.yyjc.index);
                            var list = parseDomForArray(html, '.vodlist&&li');//列表
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                d.push({
                                    title:parseDomForHtml(list[j],'a&&title'),//标题
                                    desc:parseDomForHtml(list[j],'.pic_text&&Text'),//描述
                                    content:parseDomForHtml(list[j],'p,-1&&Text'),//详情
                                    pic_url:parseDom(list[j],'a&&data-original'),//图片
                                    url:$(parseDom(list[j],'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_yyjc() })//链接
                                });
                            }
                        }catch(e){}
                        break;
                    case 'nqy':
                        MY_URL = data.nqy.index;
                        try{
                            var list = parseDomForArray(html, 'body&&.card')//列表
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                try{
                                    d.push({
                                        title: parseDomForHtml(list[j], '.lazy&&alt'),
                                        desc: parseDomForHtml(list[j], '.label&&Text'),
                                        pic_url: parseDom(list[j], '.lazy&&data-original'),
                                        content:parseDomForHtml(list[j], '.card-content&&Text'),
                                        url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_nqy() })
                                    });
                                }catch(e){''}
                            }
                        }catch(e){}
                        break;
                    case 'hjw97':
                        MY_URL = data.hjw97.index;
                        try{
                            var list = parseDom(html, 'body&&body&&.myui-vodlist__media&&Html').match(/<li[\s\S]*?<\/li/g);
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                try{
                                    d.push({
                                        title: parseDomForHtml(list[j], '.myui-vodlist__thumb&&title'),
                                        desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                        pic_url: parseDom(list[j], '.myui-vodlist__thumb&&data-original'),
                                        content:parseDomForHtml(list[j], 'p,-2&&Text'),
                                        url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_hjw97() })
                                    });
                                }catch(e){''}
                            }
                        }catch(e){}
                        break;
                    case 'bx':
                        MY_URL = data.bx.index;
                        try{
                            var list = parseDomForArray(html, 'body&&.fed-deta-info');
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                try{
                                    d.push({
                                        title: parseDomForHtml(list[j], 'h1&&Text'),
                                        desc: parseDomForHtml(list[j], '.fed-list-remarks&&Text'),
                                        pic_url: parseDom(list[j], 'a&&data-original')+'@Referer=',
                                        content:parseDomForHtml(list[j], '.fed-part-esan&&Text'),
                                        url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_bx() })
                                    });
                                }catch(e){''}
                            }
                        }catch(e){}
                        break;
                    case 'saohuo':
                        MY_URL = data.saohuo.index;
                        try{
                            var list = parseDom(html, 'body&&.v_list&&Html').match(/<li[\s\S]*?<\/li/g);
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                try{
                                    d.push({
                                        title: parseDomForHtml(list[j], 'a&&title'),
                                        desc: parseDomForHtml(list[j], '.v_note&&Text'),
                                        pic_url: parseDom(list[j], 'img&&data-original'),
                                        content:parseDomForHtml(list[j], 'Text'),
                                        url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_saohuo() })
                                    });
                                }catch(e){''}
                            }
                        }catch(e){}
                        break;
                    case 'k1080':
                        MY_URL = data.k1080.index; 
                        try{
                            var list = parseDomForArray(html, 'body&&dl:has(dd)');
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                try{
                                    d.push({
                                        title: parseDomForHtml(list[j], 'h1&&Text'),
                                        desc: parseDomForHtml(list[j], '.mo-coxs-center&&Text'),
                                        content: parseDomForHtml(list[j], '.mo-cols-lg10--h1&&Text'),
                                        img: parseDom(list[j], 'a&&data-original'),
                                        url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_k1080() })
                                    });
                                }catch(e){''}
                            }
                        }catch(e){}
                        break;
                    case 'mjc':
                        MY_URL = data.mjc.index;
                        try{
                            var list = parseDomForArray(html, 'body&&.myui-vodlist__media&&li');
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                d.push({
                                    title: parseDomForHtml(list[j], '.myui-vodlist__thumb&&title'),
                                    desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                    pic_url: parseDom(list[j], '.myui-vodlist__thumb&&data-original'),
                                    content:parseDomForHtml(list[j], '.hidden-xs&&Text'),
                                    url:$(parseDom(list[j], '.btn&&href')).rule((mjc_lazy) => { eval(fetch('hiker://files/rules/black/B_play.js')); mjc_lazy!=undefined? jx_mjc(mjc_lazy) : jx_mjc() }, mjc_lazy),
                                });
                            }
                        }catch(e){}
                        break;
                    case 'lengyue':
                        MY_URL = data.lengyue.index;
                        try{
                            var list = parseDomForArray(html, '.myui-vodlist__media&&li');   
                            if(list == null) continue;             
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                d.push({
                                    title: parseDomForHtml(list[j], 'a&&title'),
                                    desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                    pic_url: parseDom(list[j], '.lazyload&&data-original'),
                                    content: parseDomForHtml(list[j], 'p,-2&&Text'),
                                    url: $(parseDom(list[j],'a&&href')).rule((lengyue_lazy) => { eval(fetch('hiker://files/rules/black/B_play.js')); lengyue_lazy!=undefined? jx_lengyue(lengyue_lazy) : jx_lengyue();},lengyue_lazy),
                                });
                            }
                        }catch(e){} 
                        break;
                    case 'ge179':
                        MY_URL = data.ge179.index;
                        try{
                            var list = parseDomForArray(html, '.myui-vodlist__media&&li');    
                            if(list == null) continue;            
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                d.push({
                                    title:parseDomForHtml(list[j],'a&&title'),//标题
                                    desc:parseDomForHtml(list[j],'.pic-text&&Text'),//描述
                                    content:parseDomForHtml(list[j],'.detail&&p,-2&&Text'),//详情
                                    pic_url:parseDom(list[j],'.lazyload&&data-original'),//图片
                                    url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_ge179() })
                                });
                            } 
                        }catch(e){}
                        break;
                    case 'jjys':
                        MY_URL = data.jjys.index;
                        try{
                            var list = parseDomForArray(html, 'body&&.module-list&&.module-search-item');
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                try{
                                    d.push({
                                        title: parseDomForHtml(list[j], '.lazyload&&alt'),
                                        desc: parseDomForHtml(list[j], '.video-serial&&Text'),
                                        pic_url: parseDom(list[j], '.lazyload&&data-src'),
                                        content:parseDomForHtml(list[j], '.video-info-item&&Text'),
                                        url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_jjys() })
                                    });
                                }catch(e){''}
                            }
                        }catch(e){}
                        
                        break;
                    case 'aidi':
                        MY_URL = data.aidi.index;
                        try{
                            var list = parseDom(html, 'body&&.vodlist&&Html').match(/<li[\s\S]*?<\/li/g);
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                try{
                                    d.push({
                                        title: parseDomForHtml(list[j], '.searchlist_titbox&&a&&title'),
                                        desc: parseDomForHtml(list[j], '.pic_text&&Text'),
                                        pic_url: parseDom(list[j], '.vodlist_thumb&&data-original'),
                                        content:parseDomForHtml(list[j], '.vodlist_sub,-1&&Text'),
                                        url: $(parseDom(list[j], '.vodlist_thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_aidi() })
                                    });
                                }catch(e){''}
                            }
                        }catch(e){}
                        break;
                    case 'mogu':
                        MY_URL = data.mogu.index;
                        try{
                            var list = parseDom(html, 'body&&.stui-vodlist__media&&Html').match(/<li[\s\S]*?<\/li/g);
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                try{
                                    d.push({
                                        title: parseDomForHtml(list[j], '.v-thumb&&title'),
                                        desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                        pic_url: parseDomForHtml(list[j], '.v-thumb&&style').match(/url\('(.*?)'/)[1]+'@Referer=',
                                        content:parseDomForHtml(list[j], '.hidden-mi&&Text'),
                                        url: $(parseDom(list[j], '.v-thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_mogu() })
                                    });
                                }catch(e){''}
                            }
                        }catch(e){}
                        break;
                    case 'ys757':
                        MY_URL = data.ys757.index;
                        try{
                            var list =  parseDomForArray(html,'body&&.macplus-vodlist__media&&li');
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                try{
                                    d.push({
                                        title: parseDomForHtml(list[j], 'a&&title'),
                                        desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                        pic_url: parseDom(list[j], '.lazyload&&data-original')+'@Referer=',
                                        content:parseDomForHtml(list[j], '.detail&&Text'),
                                        url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_ys757() })
                                    });
                                }catch(e){''}
                            }
                        }catch(e){}
                        break;
                    case 'skys':
                        MY_URL = data.skys.index;
                        try{
                            var list =  parseDomForArray(html, 'body&&.stui-vodlist&&li');
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                try{
                                    d.push({
                                        title:parseDomForHtml(list[j],'h4&&Text'),
                                        desc:parseDomForHtml(list[j],'.pic-text&&Text'),
                                        pic_url:parseDom(list[j],'.lazyload&&data-original'),
                                        url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_skys() })
                                    });
                                }catch(e){''}
                            }
                        }catch(e){}
                        break;
                    case 'mhdy':
                        MY_URL = data.mhdy.index;
                        try{
                            var list =  parseDom(html, 'body&&.myui-vodlist__media&&Html').match(/<li[\s\S]*?<\/li/g);
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                try{
                                    d.push({
                                        title: parseDomForHtml(list[j], 'a&&title'),
                                        desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                        pic_url: parseDom(list[j], 'a&&data-original'),
                                        content:parseDomForHtml(list[j], '.detail--h4&&Text'),
                                        url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_mhdy() })
                                    });
                                }catch(e){''}
                            }
                        }catch(e){}
                        break;
                    case 'nnm':
                        MY_URL = data.nnm.index;
                        try{
                            var list =  parseDomForArray(html, 'body&&.cell');
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                try{
                                    d.push({
                                        title: parseDomForHtml(list[j], '.cell_imform_name&&Text'),
                                        desc: parseDomForHtml(list[j], 'span&&Text'),
                                        pic_url: parseDom(list[j], 'img&&src'),
                                        content:parseDomForHtml(list[j], '.cell_imform_desc&&Text'),
                                        url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_nnm() })
                                    });
                                }catch(e){''}
                            }
                        }catch(e){}
                        break;
                    case 'gpzj':
                        MY_URL = data.gpzj.index;
                        try{
                            var list =  parseDomForArray(html, 'body&&.col-md-12');
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                try{
                                    d.push({
                                        title: parseDomForHtml(list[j], 'a&&title'),
                                        desc: parseDomForHtml(list[j], '.text-overflow&&span&&Text'),
                                        pic_url: 'https://www.guipian456.com'+parseDom(list[j], 'span&&style').match(/url\((.*?)\)/)[1],
                                        content:parseDomForHtml(list[j], '.subtitle&&Text'),
                                        url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_gpzj() })
                                    });
                                }catch(e){''}
                            }
                        }catch(e){}
                        break;
                    case 'susou':
                        MY_URL = data.susou.index;
                        try{
                            var list = parseDom(html, '.searchlilst&&ul&&Html').match(/<li[\s\S]*?<\/li/g);
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                try{
                                    d.push({
                                        title: parseDomForHtml(list[j], 'a&&title'),
                                        desc: parseDomForHtml(list[j], '.list-remarks&&Text'),
                                        pic_url: parseDom(list[j], 'a&&data-original'),
                                        url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_susou() })
                                    });
                                }catch(e){''}
                            }
                        }catch(e){}
                    break;
                    case 'kby':
                        MY_URL = data.kby.index;
                        try{
                            var list = parseDomForArray(html, 'body&&.module-items&&.module-search-item');
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                try{
                                    d.push({
                                        title: parseDomForHtml(list[j], 'a&&title'),
                                        desc: parseDomForHtml(list[j], '.video-serial&&Text'),
                                        pic_url: parseDom(list[j], '.lazy&&data-src'),
                                        content:parseDomForHtml(list[j], '.video-info-item,-1&&Text'),
                                        url: $(parseDom(list[j], '.video-serial&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_kby() })
                                    });
                                }catch(e){''}
                            }
                        }catch(e){}
                    break;
                    case 'dgdy':
                        MY_URL = data.dgdy.index;
                        try{
                            var list = parseDom(html, '.stui-vodlist__media&&Html').match(/<li[\s\S]*?<\/li/g);
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                try{
                                    d.push({
                                        title: parseDomForHtml(list[j], '.stui-vodlist__thumb&&title'),
                                        desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                        pic_url: parseDom(list[j], '.stui-vodlist__thumb&&data-original'),
                                        url: $(parseDom(list[j], '.stui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_dgdy() })
                                    });
                                }catch(e){''}
                            }
                        }catch(e){}
                    break;
                    case 'didi':
                        MY_URL = data.didi.index;
                        try{
                            var list = parseDom(html, 'body&&.myui-vodlist__media&&Html').match(/<li[\s\S]*?<\/li/g);
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                try{
                                    d.push({
                                        title: parseDomForHtml(list[j], 'a&&title'),
                                        desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                        pic_url: parseDom(list[j], 'a&&data-original'),
                                        content:parseDomForHtml(list[j], 'p,-2&&Text'),
                                        url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_didi() })
                                    });
                                }catch(e){''}
                            }
                        }catch(e){}
                    break;
                    case 'ymys':
                        MY_URL = data.ymys.index;
                        try{
                            var list = parseDomForArray(html, '.mo-main-info&&.mo-deta-info:has(.mo-cols-rows)');
                            if(list == null) continue;
                            var len = list.length>9 ? 9 : list.length;
                            for (var j = 0; j < len; j++) {
                                try{
                                    d.push({
                                        title: parseDomForHtml(list[j], 'h1&&Text'),
                                        desc: parseDomForHtml(list[j], '.mo-situ-rema&&Text'),
                                        pic_url: parseDom(list[j], '.mo-situ-pics&&data-original'),
                                        content:parseDomForHtml(list[j], 'dd--h1&&Text'),
                                        url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_ymys() })
                                    });
                                }catch(e){''}
                            }
                        }catch(e){}
                    break;
                    default:
                        break;
                }

            }
        }
    }

    setResult(d);
}

var settingPage = ()=>{
    let res = {};
    let d = [];
    const def = {
        searchMode: 0,
        searchPageNum: 3,
        x5Height: 80,
        ysStr: '极品&影映&179',
        search: [],
        searchtype: 'icon_small_4'
    };
    d.push({
        title: '本规则仅供学习交流',
        desc:'点击获取最新版本！',
        url:`confirm://你确认要更新吗？.js:let localHtml=fetch('hiker://files/rules/black/black.js');let gitHtml = fetch('http://82.156.222.77/black/black.js');if (!localHtml || localHtml != gitHtml) {writeFile("hiker://files/rules/black/black.js", gitHtml);}let B_play=fetch('hiker://files/rules/black/B_play.js');let git_play=fetch('http://82.156.222.77/black/B_play.js');if (!B_play || B_play != git_play) {writeFile("hiker://files/rules/black/B_play.js", git_play);}let blackmovie=fetch('hiker://files/rules/black/blackmovie.js');let git_movie=fetch('http://82.156.222.77/black/blackmovie.js');if (!blackmovie || blackmovie != git_movie) {writeFile("hiker://files/rules/black/blackmovie.js", git_movie); }let tc=fetch('hiker://files/rules/black/search.html');let git_tc = fetch('http://82.156.222.77/black/search.html');if (!tc || tc != git_tc){writeFile("hiker://files/rules/black/search.html", git_tc); }refreshPage(false);'toast://应该是最新了吧'`,
        col_type: 'text_center_1'
    });
    d.push({
        col_type:"line"
    });
    
    var get = fetch('hiker://files/rules/black/data.js');
    var data;
    if(get != ''){
        data = JSON.parse(get);
    }else{
        data = def;
        writeFile("hiker://files/rules/black/data.js", JSON.stringify(data));
    }
    eval(fetch('hiker://files/rules/black/blackmovie.js').split('//SEARCHALL')[1].split('//SEARCHALL')[0]);
    
    var stitle = ['列表搜索', '聚合搜索', '自定义搜索'];
    //var allList = allStr.split('&');
    var ysList = data.ysStr.split('&');
    var other = [];

    d.push({
        title: '‘‘当前的搜索模式为：’’' + stitle[ data.searchMode ],
        desc: '点击切换',
        url: 'hiker://empty',
        col_type: 'text_1'
    });
    for(var i = 0; i < 3; i++){
        d.push({
            title:stitle[ i ],
            url: $("#noLoading#").lazyRule((data,index)=>{
            
                data.searchMode = index;
                writeFile("hiker://files/rules/black/data.js", JSON.stringify(data));
                
                refreshPage(false);
                return 'toast://切换成功';
                },data,i),
            col_type:'text_4'
        });
    }

    d.push({
        col_type:"line"
    });

    if(data.searchMode == 1){//聚合搜索
        d.push({
            title: '‘‘默认聚合搜索线程数（按序搜索）：’’'+ data.searchPageNum,
            desc:'tips：搜索线程越多搜索越久！',
            url:"input://"+data.searchPageNum+"////全部搜索线程数.js:var data=JSON.parse( fetch('hiker://files/rules/black/data.js') );data.searchPageNum=parseInt(input);writeFile('hiker://files/rules/black/data.js', JSON.stringify(data));refreshPage(false);'toast://你输入的是'+input",
            col_type: 'text_1'
        });
        d.push({
            col_type:"line"
        });
    }else if(data.searchMode==2){//自定义搜索
        try{
        d.push({
            title: '‘‘当前按 影视 搜索的频道为（点击从列表删除）：’’',
            url: 'hiker://empty',
            col_type: 'text_1'
        });
        
        for (var i in ysList){
            d.push({
                title:ysList[i],
                url: $("#noLoading#").lazyRule((data,ysList,index)=>{
                    var obj =ysList.splice(index,1);
                
                    data.ysStr = ysList.join('&');
                    writeFile("hiker://files/rules/black/data.js", JSON.stringify(data));
                    refreshPage(false);
                    return 'toast://取消成功';
                    },data,ysList,i),
                col_type:'flex_button'
            });
        }
        
        d.push({
            title: '‘‘按 影视 搜索未添加的频道（点击添加）：’’',
            url: 'hiker://empty',
            col_type: 'text_1'
        });
        
        for(var i in allList){
            for(var j in ysList){
                if(ysList[j] == allList[i]) break;
                if(j == ysList.length - 1){
                    other.push(allList[i])
                }
            }
        }
        for (var i in other){
            d.push({
                title:other[i],
                url: $("#noLoading#").lazyRule((data, ysList,other, index)=>{
                    ysList.push(other[index]);
                    
                    data.ysStr = ysList.join('&');
                    writeFile("hiker://files/rules/black/data.js", JSON.stringify(data));
                    
                    refreshPage(false);
                    return 'toast://添加成功';
                    },data,ysList, other, i),
                col_type:'flex_button'
            });
        }
        }catch(e){}
    }
    d.push({
        col_type:"line"
    });
    d.push({
        title: '‘‘主页搜索框高度（默认100）：’’'+ data.x5Height,
        desc:'tips：慎重填写，玩坏不包赔！',
        url:"input://"+data.x5Height+"////主页搜索框高度.js:var data=JSON.parse( fetch('hiker://files/rules/black/data.js') );data.x5Height=parseInt(input);writeFile('hiker://files/rules/black/data.js', JSON.stringify(data));refreshPage(false);'toast://你输入的是'+input",
        col_type: 'text_1'
    });
    
    d.push({
        col_type:"line"
    });
    d.push({
        title: '‘‘添加快捷搜索小程序’’',
        desc:'点此输入(请严格按照格式来)',
        url: "input://显示名@@小程序名@@图片链接////快捷搜索设置.js:var data=JSON.parse( fetch('hiker://files/rules/black/data.js') );data.search.push(input);writeFile('hiker://files/rules/black/data.js', JSON.stringify(data));refreshPage();'toast://已添加'+input.split('@@')[1]+'为快捷搜索'",
        col_type: 'text_1'
    })
    d.push({
        title: '‘‘修改快捷搜索小程序’’',
        desc:'请点击下方按钮进行修改',
        url: 'hiker://empty',
        col_type: 'text_1'
    })
    for(var i in data.search){
      if(data.search[i]!=''){
        try{
          d.push({
            title:data.search[i].split('@@')[0],
            url: "input://"+data.search[i]+"////修改内容.js:var data=JSON.parse( fetch('hiker://files/rules/black/data.js') );data.search["+i+"]=input;writeFile('hiker://files/rules/black/data.js', JSON.stringify(data));refreshPage();'toast://修改成功！'",col_type:'flex_button'
          });
        }catch(e){}
      }
    }
    d.push({
        title: '‘‘删除快捷搜索小程序’’',
        desc:'仅在本程序中删除快捷搜索，不影响原有小程序',
        url: 'hiker://empty',
        col_type: 'text_1'
    })
    for(var i in data.search){
       if(data.search[i]!=''){
         try{
           d.push({
             title:data.search[i].split('@@')[0],
             url:`confirm://是否确认删除.js:var data=JSON.parse( fetch('hiker://files/rules/black/data.js') );data.search.splice(`+i+`,1);writeFile('hiker://files/rules/black/data.js', JSON.stringify(data));refreshPage();'toast://已删除！'`,
             col_type:'flex_button'
           });
         }catch(e){}
       }
    }
    d.push({
        title: '‘‘设置快捷搜索显示样式’’',
        desc:'当前:'+data.searchtype,
        url: "input://"+data.searchtype+"////快捷搜索显示样式设置.js:var data=JSON.parse( fetch('hiker://files/rules/black/data.js') );data.searchtype=input;writeFile('hiker://files/rules/black/data.js', JSON.stringify(data));refreshPage();'toast://已设置为'+input",
        col_type: 'text_1'
    })


    d.push({
        col_type:"line"
    });
    d.push({
        title: '‘‘点击获取默认配置’’',
        desc:'tips：点击后不可恢复！',
        url:$("#noLoading#").lazyRule((def)=>{
                var data =def;
                writeFile("hiker://files/rules/black/data.js", JSON.stringify(data));;
                
                refreshPage(false);
                return 'toast://恢复成功';
                },def),
        col_type: 'text_1'
    })

    res.data = d;
    setHomeResult(res);
}

function hikerpre(){
    if(!getVar('hikernfcookie')){
    var nfcookie = JSON.parse(fetchCookie('https://www.nfmovies.com/search.php',{headers:{'User-Agent':'Mozilla/5.0'}})).join(';');
    putVar2('hikernfcookie',nfcookie)}
}

var testUrl = function(url){
    try{
        var host = url;
        var html = request(host);
        var jiance = parseDomForHtml(html,"title&&Text");
        if(jiance.indexOf('检测中')!=-1){
            request(host + html.match(/location.href ="(.*?)"/)[1]);
        }
    }catch(e){ }
}

var getUpdateInfo = ()=>{
    var html = getResCode();

    if(/jpysvip/.test(MY_URL)){
        var title = parseDomForHtml(html, '.myui-content__detail&&p,1&&Text');
        setResult(title);
    }else if(/flvwec/.test(MY_URL)){
        var time = parseDomForHtml(html, '.myui-content__detail&&p,1&&Text');
        setResult(time);
    }else if(/o8tv/.test(MY_URL)){
        var time = parseDomForHtml(html, '.myui-player__data&&p&&Text').split('/')[0].replace("更新",'');

        var conts = parseDomForArray(html,'body&&.myui-content__list')[0];
        var list=parseDomForArray(conts, 'ul&&li');
        var title="";
        // 过滤掉含番外和特别等字眼为最后一集的选集，避免有更新的选集无法被感知
        for(let i = 1; i < list.length; i++) {
            let index = list.length-i;
            title = parseDomForHtml(list[index],'a&&Text');
            if(title.search(/番外|特别/) == -1) break;
        }
        setResult("更新至: " + title + " | " + time);

    }else if(/aidi/.test(MY_URL)){
        var title = parseDomForHtml(html, '.detail_list_box&&.content_detail,1&&ul&&li,1&&.data_style&&Text');
        var time = parseDomForHtml(html, '.detail_list_box&&.content_detail,1&&ul&&li,1&&em&&Text');
        setResult( title + " | " + time);
    }else if(/nfmovie/.test(MY_URL)){
        // 播放列表的列表的定位
        var conts = parseDomForArray(html, 'body&&.myui-content__list')[0];
        // 选集列表的定位
        var list=parseDomForArray(conts, 'ul&&li');
        var title="";
        // 过滤掉含番外和特别等字眼为最后一集的选集，避免有更新的选集无法被感知
        for(let i = 1; i < list.length; i++) {
            let index = list.length-i;
            title = parseDomForHtml(list[index],'a&&Text');
            if(title.search(/番外|特别/) == -1) break;
        }
        // 获取更新时间，确保有更新时能正常提示
        var time = parseDomForHtml(html, ".myui-content__detail&&p,4&&Text").replace("更新：", "");
        setResult("更新至: " + title + " | " + time);
    }else if(/nfxhd/.test(MY_URL)){
        var time = parseDomForHtml(html, '.myui-content__detail&&p,1&&Text');
        setResult(time);
    }else if(/mjhd/.test(MY_URL)){
        var time = parseDomForHtml(html, '.myui-content__detail&&p,2&&Text');
        setResult(time);
    }else if(/dm45/.test(MY_URL)){
        // 播放列表的列表的定位
        var conts = parseDomForArray(html,'body&&.leo-play-num')[0];
        // 选集列表的定位
        var list=parseDomForArray(conts, 'ul&&li');
        var title="";
        // 过滤掉含番外和特别等字眼为最后一集的选集，避免有更新的选集无法被感知
        for(let i = 1; i < list.length; i++) {
            let index = list.length-i;
            title = parseDomForHtml(list[index],'a&&Text');
            if(title.search(/番外|特别/) == -1) break;
        }
        // 获取更新时间，确保有更新时能正常提示
        //var time = parseDomForHtml(html, ".myui-content__detail&&p,4&&Text").replace("更新：", "");
        setResult("更新至: " + title );
    }else if(/qimiqimi/.test(MY_URL)){
        // 播放列表的列表的定位
        var conts = parseDomForArray(html,'body&&.video_list')[0];
        // 选集列表的定位
        var list=conts.match(/<a[\s\S]*?<\/a>/g);
        var title="";
        // 过滤掉含番外和特别等字眼为最后一集的选集，避免有更新的选集无法被感知
        for(let i = 1; i < list.length; i++) {
            let index = list.length-i;
            title = parseDomForHtml(list[index],'a&&Text');
            if(title.search(/番外|特别/) == -1) break;
        }
        // 获取更新时间，确保有更新时能正常提示
        var time = parseDomForHtml(html, "#addtime&&Text").replace("更新：", "");
        setResult("更新至: " + title + " | " + time);
    }else if(/ninimeng/.test(MY_URL)){
        // 播放列表的列表的定位
        var conts = parseDomForArray(html,'body&&.movurl')[0];
        // 选集列表的定位
        var list=parseDomForArray(conts, 'ul&&li');
        var title="";
        // 过滤掉含番外和特别等字眼为最后一集的选集，避免有更新的选集无法被感知
        for(let i = 1; i < list.length; i++) {
            let index = list.length-i;
            title = parseDomForHtml(list[index],'a&&Text');
            if(title.search(/番外|特别/) == -1) break;
        }
        // 获取更新时间，确保有更新时能正常提示
        //var time = parseDomForHtml(html, ".myui-content__detail&&p,4&&Text").replace("更新：", "");
        setResult("更新至: " + title );
    }else if(/ubo110/.test(MY_URL)){
        var time = parseDomForHtml(html, '.myui-content__detail&&p,2&&Text');
        setResult(time);
    }else if(/acmdy/.test(MY_URL)){
        var time = parseDomForHtml(html, '.content_detail,1&&li,1&&Text');
        setResult(time);
    }else if(/newqiyu/.test(MY_URL)){
        var time = parseDomForHtml(html, '.panel&&p,-2&&Text');
        setResult(time);
    }else if(/97hanju/.test(MY_URL)){
        var title = parseDomForHtml(html, '.myui-panel-box&&p,0&&Text').replace("备注：", '');
        var time = parseDomForHtml(html, '.myui-panel-box&&p,2&&Text');
        setResult( title + " | " + time);
    }else if(/woobm/.test(MY_URL)){
        // 播放列表的列表的定位
        var conts = parseDomForArray(html,'body&&.fed-play-item')[0];
        // 选集列表的定位
        var list=parseDomForArray(conts,'ul,-1&&li');
        var title="";
        // 过滤掉含番外和特别等字眼为最后一集的选集，避免有更新的选集无法被感知
        for(let i = 1; i < list.length; i++) {
            let index = list.length-i;
            title = parseDomForHtml(list[index],'a&&Text');
            if(title.search(/番外|特别/) == -1) break;
        }
        // 获取更新时间，确保有更新时能正常提示
        var time = parseDomForHtml(html, ".fed-deta-content&&li,-2&&Text").replace("更新：", "");
        setResult("更新至: " + title + " | " + time);
    }else if(/saohuo/.test(MY_URL)){
        // 播放列表的列表的定位
        var conts = parseDomForArray(html,'body&&.play_list||.large_list&&li')[0];
        // 选集列表的定位
        var list=conts.match(/<a[\s\S]*?<\/a>/g);
        var title="";
        // 过滤掉含番外和特别等字眼为最后一集的选集，避免有更新的选集无法被感知
        for(let i = 1; i < list.length; i++) {
            let index = list.length-i;
            title = parseDomForHtml(list[index],'a&&Text');
            if(title.search(/番外|特别/) == -1) break;
        }
        // 获取更新时间，确保有更新时能正常提示
        //var time = parseDomForHtml(html, ".myui-content__detail&&p,4&&Text").replace("更新：", "");
        setResult("更新至: " + title );
    }else if(/ak1080/.test(MY_URL)){
        // 播放列表的列表的定位
        var conts = parseDomForArray(html,'body&&.mo-movs-item')[0];
        // 选集列表的定位
        var list=parseDomForArray(conts,'ul&&li');
        var title="";
        // 过滤掉含番外和特别等字眼为最后一集的选集，避免有更新的选集无法被感知
        for(let i = 1; i < list.length; i++) {
            let index = list.length-i;
            title = parseDomForHtml(list[index],'a&&Text');
            if(title.search(/番外|特别/) == -1) break;
        }
        // 获取更新时间，确保有更新时能正常提示
        var time = parseDomForHtml(html, ".mo-deta-info&&li,-2&&Text").replace("更新：", "");
        setResult("更新至: " + title + " | " + time);
    }else if(/mogu/.test(MY_URL)){
        // 播放列表的列表的定位
        var conts = parseDomForArray(html,'body&&.playlist&&ul')[0];
        // 选集列表的定位
        var list=parseDomForArray(conts,'ul&&li');
        var title="";
        // 过滤掉含番外和特别等字眼为最后一集的选集，避免有更新的选集无法被感知
        for(let i = 1; i < list.length; i++) {
            let index = list.length-i;
            title = parseDomForHtml(list[index],'a&&Text');
            if(title.search(/番外|特别/) == -1) break;
        }
        // 获取更新时间，确保有更新时能正常提示
        var time = parseDomForHtml(html, ".stui-content__detail&&p,4&&Text").replace("时间：", "");
        setResult("更新至: " + title + " | " + time);
    }else if(/757vcd/.test(MY_URL)){
        // 播放列表的列表的定位
        var conts = parseDomForArray(html,'body&&.playlist&&ul')[0];
        // 选集列表的定位
        var list=parseDomForArray(conts,'ul&&li');
        var title="";
        // 过滤掉含番外和特别等字眼为最后一集的选集，避免有更新的选集无法被感知
        for(let i = 1; i < list.length; i++) {
            let index = list.length-i;
            title = parseDomForHtml(list[index],'a&&Text');
            if(title.search(/番外|特别/) == -1) break;
        }
        // 获取更新时间，确保有更新时能正常提示
        var time = parseDomForHtml(html, ".play-ail&&p,-2&&Text").replace("时间：", "");
        setResult("更新至: " + title + " | " + time);
    }else if(/sukhdw/.test(MY_URL)){
        var title = parseDomForHtml(html, '.stui-content__detail&&p,1&&Text');
        setResult(title);
    }else if(/meijuchong/.test(MY_URL)){
        var title = parseDomForHtml(html, '.myui-content__detail&&p,2&&Text');
        setResult(title);
    }else if(/lengyue/.test(MY_URL)){
        var title = parseDomForHtml(html, '.myui-content__detail&&p,2&&Text');
        setResult(title);
    }else if(/179u/.test(MY_URL)){
        // 播放列表的列表的定位
        var conts = parseDomForArray(html,'body&&.myui-content__list')[0];
        // 选集列表的定位
        var list=parseDomForArray(conts,'ul&&li');
        var title="";
        // 过滤掉含番外和特别等字眼为最后一集的选集，避免有更新的选集无法被感知
        for(let i = 1; i < list.length; i++) {
            let index = list.length-i;
            title = parseDomForHtml(list[index],'a&&Text');
            if(title.search(/番外|特别/) == -1) break;
        }
        // 获取更新时间，确保有更新时能正常提示
        var time = parseDomForHtml(html, ".myui-content__detail&&p,-2&&Text").replace("更新：", "");
        setResult("更新至: " + title + " | " + time);
    }else if(/jiujiuying/.test(MY_URL)){
        var title = parseDomForHtml(html, '.video-info&&.video-info-item,-2&&Text');
        var time = parseDomForHtml(html, '.video-info&&.video-info-item,-3&&Text');
        setResult("更新至: " + title + " | " + time);
    }

    
}