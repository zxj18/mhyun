//本规则仅限规则爱好者交流使用，请下载后于24h内删除
const movielists = [{title:'极品影视', reg: 'jpys', search: 'https://www.jpysvip.net/vodsearch/关键词----------fypage---.html'},{title:'电影淘淘', reg: 'taotao', search:'http://www.flvwec.com/index.php/vod/search/page/fypage/wd/关键词.html'},{title:'555', reg: 'fivefive', search:'https://www.o8tv.com/index.php/vod/search/page/fypage/wd/关键词.html'},{ title:'奈菲影视', reg: 'nfmovie', search:'https://www.nfmovies.com/search.php?page=fypage&searchword=关键词&searchtype='},{ title:'奈菲星', reg: 'nfx', search:'https://nfxhd.com/vodsearch/关键词----------fypage---/'},{ title:'美剧网', reg: 'mjhd', search:'https://mjhd.tv/vodsearch/关键词----------fypage---.html'},{title:'新动漫', reg:'xsj', search: 'https://m.dm45.com/search/关键词-fypage.html'},{ title:'美剧虫', reg: 'mjc', search:'https://www.meijuchong.com/vodsearch/-------------.html?wd=关键词&submit='},{ title:'冷月', reg: 'lengyue', search:'https://www.lengyue.app/index.php/vod/search/page/fypage/wd/关键词.html'},{ title:'179', reg: 'ge179', search:'http://www.179u.com/s/关键词----------fypage---.html'}];
const data = {
    mjc: {
        index:'https://www.meijuchong.com',
        router: ['hiker://empty','https://www.meijuchong.com/vodshow/1-分类-排序------fypage---.html','https://www.meijuchong.com/vodshow/2-分类-排序------fypage---.html', 'https://www.meijuchong.com/vodshow/4-分类-排序------fypage---.html', 'https://www.meijuchong.com/vodshow/3-分类-排序------fypage---.html'],
        type: [{},
            {
                fyclass:{
                    conts: '电影片库&大陆电影&美国电影&香港电影&韩国电影&英国电影&台湾&日本&法国&意大利&德国&西班牙&泰国&其它',
                    lists: '&%E5%A4%A7%E9%99%86&%E7%BE%8E%E5%9B%BD&%E9%A6%99%E6%B8%AF&%E9%9F%A9%E5%9B%BD&%E8%8B%B1%E5%9B%BD&%E5%8F%B0%E6%B9%BE&%E6%97%A5%E6%9C%AC&%E6%B3%95%E5%9B%BD&%E6%84%8F%E5%A4%A7%E5%88%A9&%E5%BE%B7%E5%9B%BD&%E8%A5%BF%E7%8F%AD%E7%89%99&%E6%B3%B0%E5%9B%BD&%E5%85%B6%E5%AE%83',
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
                    conts: '全部&大陆&美国&韩国&英国&香港&台湾&日本&泰国&新加坡&其他&香港地区',
                    lists: '&%E5%A4%A7%E9%99%86&%E7%BE%8E%E5%9B%BD&%E9%9F%A9%E5%9B%BD&%E8%8B%B1%E5%9B%BD&%E9%A6%99%E6%B8%AF&%E5%8F%B0%E6%B9%BE&%E6%97%A5%E6%9C%AC&%E6%B3%B0%E5%9B%BD&%E6%96%B0%E5%8A%A0%E5%9D%A1&%E5%85%B6%E4%BB%96&%E9%A6%99%E6%B8%AF%E5%9C%B0%E5%8C%BA',
                    def: 3
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'mjc_2'
            },
            {
                fyclass:{
                    conts: '全部&大陆&日本&欧美&其他',
                    lists:'&%E5%A4%A7%E9%99%86&%E6%97%A5%E6%9C%AC&%E6%AC%A7%E7%BE%8E&%E5%85%B6%E4%BB%96',
                    def: 0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'mjc_3'
            },
            {
                fyclass: {
                    conts: '全部&大陆&韩国&香港&台湾&美国&其它',
                    lists: '&%E5%A4%A7%E9%99%86&%E9%9F%A9%E5%9B%BD&%E9%A6%99%E6%B8%AF&%E5%8F%B0%E6%B9%BE&%E7%BE%8E%E5%9B%BD&%E5%85%B6%E5%AE%83',
                    def: 0
                },
                fysort:{
                    conts: '最新&人气&推荐',
                    lists: 'time&hits&score'
                },
                pageType: '1---.html',
                index:'mjc_4'
            }
            
        ],
        nav:[{},{title:'电影片库', url: 'https://qiu522.github.io/blog/img/dianying.png'},{title:'电视剧', url: 'https://qiu522.github.io/blog/img/dianshiju.png'},{title:'动漫', url: 'https://qiu522.github.io/blog/img/dongman.png'},{title:'综艺', url: 'https://qiu522.github.io/blog/img/zongyi.png'}]
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
        nav:[{},{},{},{title:'电视剧', url: 'https://qiu522.github.io/blog/img/dianshiju.png'},{title:'电影片库', url: 'https://qiu522.github.io/blog/img/dianying.png'},{title:'综艺', url: 'https://qiu522.github.io/blog/img/zongyi.png'},{title:'动漫', url: 'https://qiu522.github.io/blog/img/dongman.png'}]
    },
    fivefive:{
        index:'https://www.o8tv.com',
        router:['https://www.o8tv.com/index.php/vod/show/by/排序/年代/id/分类/page/fypage.html','https://www.o8tv.com/index.php/vod/show/by/排序/年代/id/分类/page/fypage.html','https://www.o8tv.com/index.php/vod/show/by/排序/年代/id/分类/page/fypage.html','https://www.o8tv.com/index.php/vod/show/by/排序/年代/id/分类/page/fypage.html','https://www.o8tv.com/index.php/vod/show/by/排序/年代/id/分类/page/fypage.html','https://www.o8tv.com/index.php/vod/show/by/排序/id/分类/page/fypage.html'],
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
                pageType: '1.html',
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
                pageType: '1.html',
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
                pageType: '1.html',
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
                pageType: '1.html',
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
                pageType: '1.html',
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
                pageType: '1.html',
                index: 'five_6'
            }
        ],
        nav:[{title:'蓝光片库', url: 'https://qiu522.github.io/blog/img/languang.png'},{title:'电影片库', url: 'https://qiu522.github.io/blog/img/dianying.png'},{title:'电视剧', url: 'https://qiu522.github.io/blog/img/dianshiju.png'},{title:'动漫', url: 'https://qiu522.github.io/blog/img/dongman.png'},{title:'综艺', url: 'https://qiu522.github.io/blog/img/zongyi.png'},{title:'纪录片', url: 'https://qiu522.github.io/blog/img/jilupian.png'}]
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
        nav: [{},{},{},{title:'电视剧', url: 'https://qiu522.github.io/blog/img/dianshiju.png'},{title:'电影片库', url: 'https://qiu522.github.io/blog/img/dianying.png'},{title:'综艺', url: 'https://qiu522.github.io/blog/img/zongyi.png'},{title:'动漫', url: 'https://qiu522.github.io/blog/img/dongman.png'}]
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
        nav: [{},{title:'电影片库', url: 'https://qiu522.github.io/blog/img/dianying.png'},{title:'电视剧', url: 'https://qiu522.github.io/blog/img/dianshiju.png'},{title:'综艺', url: 'https://qiu522.github.io/blog/img/zongyi.png'},{title:'动漫', url: 'https://qiu522.github.io/blog/img/dongman.png'},{title:'bilibili', url: 'https://qiu522.github.io/blog/img/bili.png'}]
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
        nav: [{},{title:'电影片库', url: 'https://qiu522.github.io/blog/img/dianying.png'},{title:'电视剧', url: 'https://qiu522.github.io/blog/img/dianshiju.png'},{title:'综艺', url: 'https://qiu522.github.io/blog/img/zongyi.png'},{title:'动漫', url: 'https://qiu522.github.io/blog/img/dongman.png'}]
    },
    nfmovie:{
        index:'https://www.nfmovies.com',
        router:['https://www.nfmovies.com/search.php?page=fypage&searchtype=5&order=排序&tid=0&area=地区&year=年代&letter=&yuyan=&state=&money=&ver=&jq=&player=分类','hiker://empty','https://www.nfmovies.com/search.php?page=fypage&searchtype=5&order=排序&tid=分类&area=地区year=年代&letter=&yuyan=&state=&money=&ver=&jq=&player=', 'https://www.nfmovies.com/search.php?page=fypage&searchtype=5&order=排序&tid=分类&area=地区&year=年代&letter=&yuyan=&state=&money=&ver=&jq=&player=', 'https://www.nfmovies.com/search.php?page=fypage&searchtype=5&order=排序&tid=3&area=地区&year=年代&letter=&yuyan=&state=&money=&ver=&jq=&player=', 'https://www.nfmovies.com/search.php?page=1&searchtype=5&order=排序&tid=4&area=地区&year=年代&letter=&yuyan=&state=&money=&ver=&jq=&player='],
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
        nav: [{},{},{title:'电影片库', url: 'https://qiu522.github.io/blog/img/dianying.png'},{title:'电视剧', url: 'https://qiu522.github.io/blog/img/dianshiju.png'},{title:'综艺', url: 'https://qiu522.github.io/blog/img/zongyi.png'},{title:'动漫', url: 'https://qiu522.github.io/blog/img/dongman.png'}]
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
        nav: [{title:'美剧', url: 'https://qiu522.github.io/blog/img/meiju.png'},{title:'电影', url: 'https://qiu522.github.io/blog/img/dianying.png'}]
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
                    lists: '&&%E9%AD%94%E5%B9%BB&%E9%9D%92%E6%98%A5&%E9%83%BD%E5%B8%82&%E8%B0%8D%E6%88%98&%E8%AE%B0%E5%BD%95&%E8%A5%BF%E9%83%A8&%E8%A1%80%E8%85%A5&%E7%BD%AA%E6%A1%88&%E7%BB%BC%E8%89%BA&%E7%A7%91%E5%B9%BB&%E7%9C%9F%E4%BA%BA%E7%A7%80&%E7%88%B1%E6%83%85&%E6%AD%8C%E8%88%9E&%E6%9A%B4%E5%8A%9B&%E6%94%BF%E6%B2%BB&%E6%88%98%E4%BA%89&%E6%83%8A%E6%82%9A&%E6%82%AC%E7%96%91&%E5%BE%8B%E6%94%BF&%E5%AE%B6%E5%BA%AD&%E5%A5%87%E5%B9%BB&%E5%96%9C%E5%89%A7&%E5%90%B8%E8%A1%80%E9%AC%BC&%E5%90%8C%E6%80%A7&%E5%8F%B2%E8%AF%97&%E5%8F%A4%E8%A3%85&%E5%8E%86%E5%8F%B2&%E5%8C%BB%E5%8A%A1&%E5%8A%A8%E7%94%BB&%E5%8A%A8%E4%BD%9C&%E5%89%A7%E6%83%85&%E5%86%92%E9%99%A9&%E4%BC%A0%E8%AE%B0&%E4%B8%A7%E5%B0%B8&%E6%83%85%E6%99%AF%E5%96%9C%E5%89%A7',
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
                    lists: '&&%E9%AD%94%E5%B9%BB&%E9%9D%92%E6%98%A5&%E9%83%BD%E5%B8%82&%E8%B0%8D%E6%88%98&%E8%AE%B0%E5%BD%95&%E8%A5%BF%E9%83%A8&%E8%A1%80%E8%85%A5&%E7%BD%AA%E6%A1%88&%E7%BB%BC%E8%89%BA&%E7%A7%91%E5%B9%BB&%E7%9C%9F%E4%BA%BA%E7%A7%80&%E7%88%B1%E6%83%85&%E6%AD%8C%E8%88%9E&%E6%9A%B4%E5%8A%9B&%E6%94%BF%E6%B2%BB&%E6%88%98%E4%BA%89&%E6%83%8A%E6%82%9A&%E6%82%AC%E7%96%91&%E5%BE%8B%E6%94%BF&%E5%AE%B6%E5%BA%AD&%E5%A5%87%E5%B9%BB&%E5%96%9C%E5%89%A7&%E5%90%B8%E8%A1%80%E9%AC%BC&%E5%90%8C%E6%80%A7&%E5%8F%B2%E8%AF%97&%E5%8F%A4%E8%A3%85&%E5%8E%86%E5%8F%B2&%E5%8C%BB%E5%8A%A1&%E5%8A%A8%E7%94%BB&%E5%8A%A8%E4%BD%9C&%E5%89%A7%E6%83%85&%E5%86%92%E9%99%A9&%E4%BC%A0%E8%AE%B0&%E4%B8%A7%E5%B0%B8&%E6%83%85%E6%99%AF%E5%96%9C%E5%89%A7',
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
        nav:[{},{title:'科幻', url: 'https://qiu522.github.io/blog/img/kehuan.png'},{title:'都市', url: 'https://qiu522.github.io/blog/img/dushi.png'},{title:'综艺', url: 'https://qiu522.github.io/blog/img/zongyi.png'},{title:'电影片库', url: 'https://qiu522.github.io/blog/img/dianying.png'}]
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
        nav: [{},{},{},{},{title:'动漫', url: 'https://qiu522.github.io/blog/img/dongman.png'},{title:'动漫电影', url: 'https://qiu522.github.io/blog/img/dianying.png'},{title:'影视', url: 'https://qiu522.github.io/blog/img/languang.png'},{title:'日韩剧', url: 'https://qiu522.github.io/blog/img/dianshiju.png'}]
    }
}
//首页解析
//HOMEPAGE
var hikerHomePage = (lazyData)=>{
    var d = [];
    var{jpys_lazy, taotao_lazy, five_lazy, mjc_lazy, lengyue_lazy} = lazyData;
    
    for(var i in movielists){
        d.push({
            title: getVar('nowPage', movielists[0].reg)==movielists[i].reg? ("““””<b>"+'<span style="color: #f9906f">'+ movielists[i].title +'</span></b>') : movielists[i].title ,
            url: $("#noLoading#").lazyRule((movieitem, data)=>{
                putVar('nowPage', movieitem.reg)
                putVar('pageUrl', data[movieitem.reg].index);
                refreshPage(false);
                return "hiker://empty"
                }, movielists[i], data),
            col_type:'scroll_button'
        });
    }
    d.push({
        desc: '100&&float',
        url: 'file:///storage/emulated/0/Android/data/com.example.hikerview/files/Documents/rules/zyf/tc.html',
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
            nfmovieindex(d,data);
        }else if(/nfxhd/.test(getVar('pageUrl', data.jpys.index))){
            nfxindex(d,data);
        }else if(/mjhd/.test(getVar('pageUrl', data.jpys.index))){
            mjhdindex(d,data);
        }else if(/dm45/.test(getVar('pageUrl', data.jpys.index))){//新世界动漫
            xsjindex(d,data);
        }
    }else{
        searchmovie( lazyData, getVar('searchKeyword'));
    }

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
    var conts = parseDomForArray(html, 'body&&.pannel:contains(更多)'); //第一个不要

    for(var i=1; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index, lazyRule) => {
                var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.vodlist_wi&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.vodlist_thumb&&title'),
                            img: parseDom(list[i], '.vodlist_thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic_text&&i,1&&Text'),
                            url: $(parseDom(list[i], '.vodlist_thumb&&href')).rule((lazyRule) => { eval(fetch('hiker://files/rules/zyf/B_play.js')); lazyRule!=undefined? jx_mjc(lazyRule): jx_mjc()}, lazyRule),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i, lazyRule),
            col_type:'icon_small_4'
        });
    }

    for (var i =0; i<conts.length-1; i++) {
        var list = parseDomForArray(conts[i], '.vodlist_wi&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h2&&Text').replace("", "") + (i==0?'' : " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: i==0?'':$(router[i]).rule((type, index, lazyRule) => {
            var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.vodlist_wi&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.vodlist_thumb&&title'),
                        img: parseDom(list[i], '.vodlist_thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic_text&&i,1&&Text'),
                        url: $(parseDom(list[i], '.vodlist_thumb&&href')).rule((lazyRule) => { eval(fetch('hiker://files/rules/zyf/B_play.js'));lazyRule!=undefined? jx_mjc(lazyRule): jx_mjc()}, lazyRule),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i, lazyRule),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.vodlist_thumb&&title'),
                img: parseDom(list[j], '.vodlist_thumb&&data-original')+'@Referer=',
                desc: parseDomForHtml(list[j], '.pic_text&&i,1&&Text'),
                url: $(parseDom(list[j], '.vodlist_thumb&&href')).rule((lazyRule) => { eval(fetch('hiker://files/rules/zyf/B_play.js'));  lazyRule!=undefined? jx_mjc(lazyRule): jx_mjc()}, lazyRule),
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
                var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.myui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.title&&Text'),
                            img: parseDom(list[i], '.myui-vodlist__thumb&&data-original'),
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: 
        $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_taotao() }),
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
            var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.myui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.title&&Text'),
                        img: parseDom(list[i], '.myui-vodlist__thumb&&data-original'),
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: 
    $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_taotao() }),
                        col_type: "movie_3"
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.title&&Text'),
                img: parseDom(list[j], '.myui-vodlist__thumb&&data-original'),
                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                url: 
$(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_taotao() }),
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
    var conts = parseDomForArray(html, 'body&&.conch-ctwrap&&.container:contains(更多)'); 

    for(var i=0; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index) => {
                var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '#conch-content&&.hl-row-box,-1&&.hl-vod-list&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.hl-item-title&&a&&Text'),
                            img: parseDom(list[i], '.hl-item-thumb&&data-original'),
                            desc: parseDomForHtml(list[i], '.hl-pic-text&&Text'),
                            url: $(parseDom(list[i], '.hl-item-thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_555() }),
                            col_type: "movie_3"
                        })
                    }
                    setResult(d)
                },type, i),
            col_type:'icon_small_4'
        });
    }

    for (var i =0; i<conts.length; i++) {
        var list = parseDomForArray(conts[i], 'ul&&li');
        d.push({
            title: '‘‘’’' + parseDomForHtml(conts[i], 'h2&&Text').replace("更多>", "") + " <small><small><font color='#1db69a'>更多></font></small></small>",
            url: $(router[i]).rule((type, index) => {
                var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);

                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '#conch-content&&.hl-row-box,-1&&.hl-vod-list&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.hl-item-title&&a&&Text'),
                        img: parseDom(list[i], '.hl-item-thumb&&data-original'),
                        desc: parseDomForHtml(list[i], '.hl-pic-text&&Text'),
                        url: $(parseDom(list[i], '.hl-item-thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_555() }),
                        col_type: 'movie_3'
                    })
                }
                setResult(d)
            },type, i),
            col_type: "text_center_1"
        });
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.hl-item-title&&a&&Text'),
                img: parseDom(list[j], '.hl-item-thumb&&data-original'),
                desc: parseDomForHtml(list[j], '.hl-pic-text&&Text'),
                url: $(parseDom(list[j], '.hl-item-thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_555() }),
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
                   var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.myui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                            img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: 
        $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule((lazyRule) => { eval(fetch('hiker://files/rules/zyf/B_play.js')); lazyRule!=undefined? jx_jpys(lazyRule): jx_jpys() }, lazyRule),
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
               var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.myui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                        img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: 
    $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule((lazyRule) => { eval(fetch('hiker://files/rules/zyf/B_play.js')); lazyRule!=undefined? jx_jpys(lazyRule): jx_jpys();}, lazyRule),
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
                url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule((lazyRule) => { eval(fetch('hiker://files/rules/zyf/B_play.js')); lazyRule!=undefined? jx_jpys(lazyRule): jx_jpys();}, lazyRule),
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

    //refreshX5WebView('file:///storage/emulated/0/Android/data/com.example.hikerview/files/Documents/rules/zyf/Slider2.html');

    for(var i=1; i<nav.length; i++){
        var j=i+1;
        d.push({
            title:nav[i].title , pic_url: nav[i].url, url:$(router[i]).rule((type, index, lazyRule) => {
                   var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.myui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                            img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: 
        $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule((lazyRule) => { eval(fetch('hiker://files/rules/zyf/B_play.js'));lazyRule!=undefined? jx_lengyue(lazyRule): jx_lengyue() }, lazyRule),
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
               var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.myui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                        img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                         url: 
        $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule((lazyRule) => { eval(fetch('hiker://files/rules/zyf/B_play.js'));lazyRule!=undefined? jx_lengyue(lazyRule): jx_lengyue() }, lazyRule),
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
                url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule((lazyRule) => { eval(fetch('hiker://files/rules/zyf/B_play.js'));lazyRule!=undefined? jx_lengyue(lazyRule): jx_lengyue() }, lazyRule),
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
                   var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.myui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                            img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: 
        $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_ge179() }),
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
               var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.myui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                        img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: 
    $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_ge179() }),
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
                url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_ge179() }),
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
                   var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    
                    var html =fetch(getVar('pageUrl'),{headers:{'User-Agent':'Mozilla/5.0','Cookie':getVar('hikernfcookie')}});
                    var list = parseDomForArray(html, '.myui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                            img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: 
        $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_nfmovie() }),
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
               var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =fetch(getVar('pageUrl'),{headers:{'User-Agent':'Mozilla/5.0','Cookie':getVar('hikernfcookie')}});
                var list = parseDomForArray(html, '.myui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                        img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: 
    $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_nfmovie() }),
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
                url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_nfmovie() }),
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
                   var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.myui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                            img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_nfx() }),
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
               var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.myui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                        img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: 
    $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_nfx() }),
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
                url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_nfx() }),
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
                   var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, '.myui-vodlist&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                            img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                            url: 
        $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_mjhd() }),
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
               var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, '.myui-vodlist&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.myui-vodlist__thumb&&title'),
                        img: parseDom(list[i], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.pic-text&&Text'),
                        url: 
    $(parseDom(list[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_mjhd() }),
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
                url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_mjhd() }),
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
                   var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                    setNav(type[index]);
                    
                    var html =request(getVar('pageUrl'));
                    var list = parseDomForArray(html, 'ul:has(.leo-video-item)&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], '.leo-show&&title'),
                            img: parseDom(list[i], '.leo-lazy&&data-original')+'@Referer=',
                            desc: parseDomForHtml(list[i], '.leo-video-remark&&Text'),
                            url: 
        $(parseDom(list[i], '.leo-show&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_xsj() }),
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
               var d = []; eval(fetch('hiker://files/rules/zyf/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
                setNav(type[index]);
                
                
                var html =request(getVar('pageUrl'));
                var list = parseDomForArray(html, 'ul:has(.leo-video-item)&&li');
                for (var i in list) {
                    d.push({
                        title: parseDomForHtml(list[i], '.leo-show&&title'),
                        img: parseDom(list[i], '.leo-lazy&&data-original')+'@Referer=',
                        desc: parseDomForHtml(list[i], '.leo-video-remark&&Text'),
                        url: 
    $(parseDom(list[i], '.leo-show&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_xsj() }),
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
                $(parseDom(list[j], '.leo-show&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_xsj() }),
                col_type: "movie_3"
            });
        }
    }    
}

var searchmovie = (lazyData, keydata)=>{
    var d = [];
    var key = keydata!=undefined? keydata : MY_URL.split('$$$')[1];
    var{jpys_lazy, taotao_lazy, five_lazy, mjc_lazy, lengyue_lazy} = lazyData;
    //var searchType = [{name:'', key: ''}, {name:'', key: ''}]
    var searchType = getVar('searchTypeword', '全部');
    for(var i in movielists){
        d.push({
            title:keydata==undefined? movielists[i].title : ('‘‘’’' +  movielists[i].title + " <small><small><font color='#f9906f'>更多></font></small></small>"),
            url: $(movielists[i].search.replace('关键词', key)).rule((lazyData)=>{
                var d = []
                var html=getResCode();
                var{jpys_lazy, taotao_lazy, five_lazy, mjc_lazy, lengyue_lazy} = lazyData;
                if(/meijuchong/.test(MY_URL)){
                    var list = parseDom(html, 'body&&.search_box&&.vodlist&&Html').match(/<li[\s\S]*?<\/li/g);
                    for (var j = 0; j < list.length; j++) {
                        d.push({
                            title: parseDomForHtml(list[j], '.vodlist_thumb&&title'),
                            desc: parseDomForHtml(list[j], '.pic_text&&Text'),
                            pic_url: parseDom(list[j], '.vodlist_thumb&&data-original'),
                            content:parseDomForHtml(list[j], '.searchlist_titbox&&Text'),
                            url:$(parseDom(list[j], '.vodlist_thumb&&href')).rule((mjc_lazy) => { eval(fetch('hiker://files/rules/zyf/B_play.js')); mjc_lazy!=undefined? jx_mjc(mjc_lazy) : jx_mjc() }, mjc_lazy),
                        });
                    }
                }else if(/flvwec/.test(MY_URL)){
                    var content = '<body>' + parseDom(getResCode(), 'body&&#searchList&&Html') + '</body>';
                    var list = parseDomForArray(content, 'body&&li');
                    for(var i in list){
                        d.push({
                            title:parseDomForHtml(list[i],'a&&title'),
                            desc:parseDomForHtml(list[i],'.pic-tag&&Text'),
                            pic_url:parseDomForHtml(list[i],'a&&data-original'),
                            url:$(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_taotao() }),
                            content:parseDomForHtml(list[i],'p.hidden-xs&&Text')
                        });
                    }
                }else if(/o8tv/.test(MY_URL)){
                    var list = parseDomForArray(html, '.hl-one-list&&li');
                    for (var j in list) {
                    d.push({
                        title: parseDomForHtml(list[j], 'a&&title'),
                        desc: parseDomForHtml(list[j], '.hl-item-sub&&Text'),
                        content: parseDomForHtml(list[j], 'p,2&&Text'),
                        pic_url: parseDom(list[j], 'a&&data-original'),
                        url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_555() }),
                    });
                    }
                }else if(/jpysvip/.test(MY_URL)){
                    var list = parseDom(html, '.myui-vodlist__media&&Html').match(/<li[\s\S]*?<\/li/g);
                    for (var j = 0; j < list.length; j++) {
                        d.push({
                            title: parseDomForHtml(list[j], 'h4&&Text'),
                            desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                            pic_url: parseDom(list[j], '.lazyload&&data-original'),
                            content:parseDomForHtml(list[j], '.detail--h4&&Text'),
                            url: $(parseDom(list[j], 'h4&&a&&href')).rule((jpys_lazy) => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jpys_lazy!=undefined? jx_jpys(jpys_lazy) : jx_jpys();},jpys_lazy),
                        });
                    }
                }else if(/lengyue/.test(MY_URL)){
                    var list = parseDom(html, '.myui-vodlist__media&&Html').match(/<li[\s\S]*?<\/li/g);
                    for (var j = 0; j < list.length; j++) {
                        d.push({
                            title: parseDomForHtml(list[j], 'a&&title'),
                            desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                            pic_url: parseDom(list[j], '.lazyload&&data-original'),
                            content: parseDomForHtml(list[j], 'p,-2&&Text'),
                            url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_ge179() })
                        });
                    }
                }else if(/179u/.test(MY_URL)){
                    var list = parseDomForArray(html, '.myui-vodlist__media&&li');//列表
                    for(var j in list){
                        d.push({
                            title:parseDomForHtml(list[j],'a&&title'),//标题
                            desc:parseDomForHtml(list[j],'.pic-text&&Text'),//描述
                            content:parseDomForHtml(list[j],'.detail&&p,-2&&Text'),//详情
                            pic_url:parseDom(list[j],'.lazyload&&data-original'),//图片
                            url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_ge179() })
                        });
                    }
                }else if(/nfmovie/.test(MY_URL)){
                    html = fetch(MY_URL,{headers:{'User-Agent':'Mozilla/5.0','Cookie':getVar('hikernfcookie')}});;
                    var list = parseDom(html, '#searchList&&Html').match(/<li[\s\S]*?<\/li/g);
                    for (var j = 0; j < list.length; j++) {
                        d.push({
                             title: parseDomForHtml(list[j], '.myui-vodlist__thumb&&title'),
                             desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                             pic_url: parseDom(list[j], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                             url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_nfmovie() })
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
                            url: $(parseDom(list[j],'a&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_nfx() })
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
                        url: $(parseDom(list[j],'h4&&a&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_mjhd() })
                    });
                    }
                }else if(/dm45/.test(MY_URL)){
                    var list = parseDomForArray(html, 'body&&.leo-detail-wrap');
                    for (var j = 0; j < list.length; j++) {
                        d.push({
                             title: parseDomForHtml(list[j], 'h1&&Text'),
                             desc: parseDomForHtml(list[j], '.leo-color-a,1&&Text'),
                             pic_url: parseDom(list[j], 'img&&data-original'),
                             url: $(parseDom(list[j],'a,-2&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_xsj() })
                        });
                    }
                }
                setResult(d)
            },lazyData),
            col_type: "text_1"
        });

        if(keydata!=undefined){
            d.push({
                desc: '100&&float',
                url: 'file:///storage/emulated/0/Android/data/com.example.hikerview/files/Documents/rules/zyf/tc.html',
                col_type: 'x5_webview_single'
            })
            
            var search_case = 'k_'+i;
            switch (search_case) {
                case 'k_0':
                    MY_URL = data.jpys.index;
                    if(searchType=='全部' || searchType=='影视' || searchType=='极品') {
                        var html = request(movielists[i].search.replace('关键词', key).replace('fypage','1'));
                        var list = parseDomForArray(html, '.myui-vodlist__media&&li');    
                        if(list == null) continue;            
                        var len = list.length>6 ? 6 : list.length;
                        for (var j = 0; j < len; j++) {
                            d.push({
                                title: parseDomForHtml(list[j], 'h4&&Text'),
                                desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                pic_url: parseDom(list[j], '.lazyload&&data-original'),
                                content:parseDomForHtml(list[j], '.detail--h4&&Text'),
                                url: $(parseDom(list[j], 'h4&&a&&href')).rule((jpys_lazy) => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jpys_lazy!=undefined? jx_jpys(jpys_lazy) : jx_jpys();},jpys_lazy),
                            });
                        } 
                    }
                    break;
                case 'k_1':
                    MY_URL = data.taotao.index;
                    if(searchType=='全部' || searchType=='影视' || searchType=='淘淘') { 
                    var html = request(movielists[i].search.replace('关键词', key).replace('fypage','1'));
                    var content = '<body>' + parseDom(html, 'body&&#searchList&&Html') + '</body>';
                    var list = parseDomForArray(content, 'body&&li');    
                    if(list == null) continue;        
                    var len = list.length>6 ? 6 : list.length;
                    for(var j = 0; j < len; j++){
                        d.push({
                            title:parseDomForHtml(list[j],'a&&title'),
                            desc:parseDomForHtml(list[j],'.pic-tag&&Text'),
                            pic_url:parseDomForHtml(list[j],'a&&data-original'),
                            url:$(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_taotao() }),
                            content:parseDomForHtml(list[j],'p.hidden-xs&&Text')
                        });
                    }}
                    break;
                case 'k_2':
                    MY_URL = data.fivefive.index;
                    if(searchType=='全部' || searchType=='影视' || searchType=='555') {
                        var html = request(movielists[i].search.replace('关键词', key).replace('fypage','1')); 
                        var list = parseDomForArray(html, '.hl-one-list&&li');
                        if(list == null) continue;                
                        var len = list.length>6 ? 6 : list.length;
                        for (var j = 0; j < len; j++) {
                        d.push({
                            title: parseDomForHtml(list[j], 'a&&title'),
                            desc: parseDomForHtml(list[j], '.hl-item-sub&&Text'),
                            content: parseDomForHtml(list[j], 'p,2&&Text'),
                            pic_url: parseDom(list[j], 'a&&data-original'),
                            url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_555() }),
                        });
                    }}
                    break;
                    case 'k_3':
                        MY_URL = data.nfmovie.index;
                        if(searchType=='全部' || searchType=='美剧' || searchType=='奈非') {
                            var html = fetch(movielists[i].search.replace('关键词', key).replace('fypage','1'), {headers:{'User-Agent':'Mozilla/5.0','Cookie':getVar('hikernfcookie')}});;
                            var list = parseDom(html, '#searchList&&Html').match(/<li[\s\S]*?<\/li/g);
                            if(list == null) continue;
                            var len = list.length>6 ? 6 : list.length;
                            for (var j = 0; j < len; j++) {
                                d.push({
                                    title: parseDomForHtml(list[j], '.myui-vodlist__thumb&&title'),
                                    desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                    pic_url: parseDom(list[j], '.myui-vodlist__thumb&&data-original')+'@Referer=',
                                    url: $(parseDom(list[j], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_nfmovie() })
                                });
                            }
                        }
                        break;
                    case 'k_4':
                        MY_URL = data.nfx.index;
                        if(searchType=='全部' || searchType=='美剧' || searchType=='奈非星') {
                            var html = request(movielists[i].search.replace('关键词', key).replace('fypage','1')); 
                            var list = parseDomForArray(html, '#searchList&&li');
                            if(list == null) continue;
                            var len = list.length>6 ? 6 : list.length;
                            for (var j = 0; j < len; j++) {
                                d.push({
                                    title: parseDomForHtml(list[j], 'a&&title'),
                                    desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                    content: parseDomForHtml(list[j], 'p,1&&Text'),
                                    img: parseDom(list[j], '.lazyload&&data-original'),
                                    url: $(parseDom(list[j],'a&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_nfx() })
                                });
                            }
                        }
                        break;
                    case 'k_5':
                        MY_URL = data.mjhd.index;
                        if(searchType=='全部' || searchType=='美剧' || searchType=='美剧网') {
                        var html = request(movielists[i].search.replace('关键词', key).replace('fypage','1')); 
                        var list = parseDomForArray(html, '.myui-panel_bd&&li');//列表
                            if(list == null) continue;
                            var len = list.length>6 ? 6 : list.length;
                            for(var j in list){
                                d.push({
                                    title:parseDomForHtml(list[j],'h4&&a&&Text'),
                                    desc:parseDomForHtml(list[j],'.pic-text&&Text'),
                                    content:parseDomForHtml(list[j],'.detail--h4&&Text'),
                                    pic_url:parseDom(list[j],'.lazyload&&data-original'),
                                    url: $(parseDom(list[j],'h4&&a&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_mjhd() })
                                });
                            }
                        }
                        break;
                    case 'k_6':
                        MY_URL = data.xsj.index;
                        if(searchType=='全部' || searchType=='动漫' || searchType=='新动漫') {
                        var html = request(movielists[i].search.replace('关键词', key).replace('fypage','1')); 
                        var list = parseDomForArray(html, 'body&&.leo-detail-wrap');//列表
                            if(list == null) continue;
                            var len = list.length>6 ? 6 : list.length;
                            for (var j = 0; j < len; j++) {
                                d.push({
                                     title: parseDomForHtml(list[j], 'h1&&Text'),
                                     desc: parseDomForHtml(list[j], '.leo-color-a,1&&Text'),
                                     pic_url: parseDom(list[j], 'img&&data-original'),
                                     url: $(parseDom(list[j],'a,-2&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_xsj() })
                                });
                            }
                        }
                        break;
                    case 'k_7':
                        MY_URL = data.mjc.index;
                        if(searchType=='全部' || searchType=='美剧' || searchType=='美剧虫') {
                            var html = request(movielists[i].search.replace('关键词', key).replace('fypage','1'));
                            var list = parseDom(html, 'body&&.search_box&&.vodlist&&Html').match(/<li[\s\S]*?<\/li/g);
                            if(list == null) continue;
                            var len = list.length>6 ? 6 : list.length;
                            for (var j = 0; j < len; j++) {
                                d.push({
                                    title: parseDomForHtml(list[j], '.vodlist_thumb&&title'),
                                    desc: parseDomForHtml(list[j], '.pic_text&&Text'),
                                    pic_url: parseDom(list[j], '.vodlist_thumb&&data-original'),
                                    content:parseDomForHtml(list[j], '.searchlist_titbox&&Text'),
                                    url:$(parseDom(list[j], '.vodlist_thumb&&href')).rule((mjc_lazy) => { eval(fetch('hiker://files/rules/zyf/B_play.js')); mjc_lazy!=undefined? jx_mjc(mjc_lazy) : jx_mjc() }, mjc_lazy),
                                });
                            }
                        }
                        break;
                    case 'k_8':
                        MY_URL = data.lengyue.index;
                        if(searchType=='全部' || searchType=='影视' || searchType=='冷月') {
                            var html = request(movielists[i].search.replace('关键词', key).replace('fypage','1'));
                            var list = parseDomForArray(html, '.myui-vodlist__media&&li');   
                            if(list == null) continue;             
                            var len = list.length>6 ? 6 : list.length;
                            for (var j = 0; j < len; j++) {
                                d.push({
                                    title: parseDomForHtml(list[j], 'a&&title'),
                                    desc: parseDomForHtml(list[j], '.pic-text&&Text'),
                                    pic_url: parseDom(list[j], '.lazyload&&data-original'),
                                    content: parseDomForHtml(list[j], 'p,-2&&Text'),
                                    url: $(parseDom(list[j],'a&&href')).rule((lengyue_lazy) => { eval(fetch('hiker://files/rules/zyf/B_play.js')); lengyue_lazy!=undefined? jx_lengyue(lengyue_lazy) : jx_lengyue();},lengyue_lazy),
                                });
                            } 
                        }
                        break;
                    case 'k_9':
                        MY_URL = data.ge179.index;
                        if(searchType=='全部' || searchType=='影视' || searchType=='179') {
                            var html = request(movielists[i].search.replace('关键词', key).replace('fypage','1'));
                            var list = parseDomForArray(html, '.myui-vodlist__media&&li');    
                            if(list == null) continue;            
                            var len = list.length>6 ? 6 : list.length;
                            for (var j = 0; j < len; j++) {
                                d.push({
                                    title:parseDomForHtml(list[j],'a&&title'),//标题
                                    desc:parseDomForHtml(list[j],'.pic-text&&Text'),//描述
                                    content:parseDomForHtml(list[j],'.detail&&p,-2&&Text'),//详情
                                    pic_url:parseDom(list[j],'.lazyload&&data-original'),//图片
                                    url: $(parseDom(list[j], 'a&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_ge179() })
                                });
                            } 
                        }
                        break;
                default:
                    break;
            }
        }
    }

    setResult(d);
}