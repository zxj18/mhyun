const walllists = [{title:'必应壁纸', reg: 'bybz'},{title:'森林集', reg: 'slj'},{title:'4K超清', reg: 'cq4k'},{title:'图虫摄影', reg: 'tcsy'},{title:'360壁纸', reg: 'bz360'},{title:'绝对领域', reg: 'jdly'},{title:'安卓壁纸', reg: 'azbz'},{title:'MM范', reg: 'mmf'},{title:'彼岸图网', reg: 'batw'}];
const data = {
    bybz: {
        index: 'https://bing.ioliu.cn/',
        router: 'https://bing.ioliu.cn/分类?p=fypage',
        type: {
                fyclass:{
                    conts: '首页&下载榜',
                    lists: '&ranking',
                    def:0
                },
                pageType: 'p=1',
                index: 'bybz_1'
            }
    },
    slj: {
        index: 'https://senlinjimore.com/?gallery-category=所有壁纸&paged=1',
        router: 'https://senlinjimore.com/?gallery-category=年代&paged=fypage',
        type: {
            fyyear:{
                conts: '所有壁纸&深色系列&浅色系列&感受自然&我很快乐&天气很烂&小动物们&简约背景&换个脑袋',
                lists: '所有壁纸&深色系列&浅色系列&感受自然&我很快乐&天气很烂&小动物们&简约背景&换个脑袋',
            },
            pageType: 'paged=1',
            index: 'slj_1'
        }
    },
    tcsy: {
        index: 'https://api.tuchong.com/discover/-1/category?os_api=25&device_type=MI&device_platform=android&ssmix=a&manifest_version_code=232&dpi=450&abflag=0&uuid=329642135962135&version_code=232&count=20&app_name=tuchong&version_name=2.3.2&openudid=53fa4df32154dfa3&resolution=1280*1000&os_version=5.0.1&ac=wifi&aid=0&page=1',
        router: 'https://api.tuchong.com/discover/分类/category?os_api=25&device_type=MI&device_platform=android&ssmix=a&manifest_version_code=232&dpi=450&abflag=0&uuid=329642135962135&version_code=232&count=20&app_name=tuchong&version_name=2.3.2&openudid=53fa4df32154dfa3&resolution=1280*1000&os_version=5.0.1&ac=wifi&aid=0&page=fypage',
        type: {
            fyclass:{
                conts: '热门&最新&精选&风光&旅行&建筑&人文&人像&美女&日系&小清新&cos',
                lists: '-1&-2&-3&693&743&767&133&131&564&2511&7471&3573',
                def:0
            },
            pageType: 'page=1',
            index: 'tcsy_1'
        }
    },
    azbz: {
        index: 'http://service.picasso.adesk.com/v1/vertical/category/fyclass/vertical?limit=30&skip=0&adult=false&first=0&order=fysort',
        router: 'http://service.picasso.adesk.com/v1/vertical/category/分类/vertical?limit=30&skip=fypage&adult=false&first=0&order=排序',
        type: {
            fyclass:{
                conts: '美女&动漫&风景&游戏&文字&视觉&情感&设计&明星&物语&艺术&男人&卡通&机械&城市&动物&运动&影视',
                lists: '4e4d610cdf714d2966000000&4e4d610cdf714d2966000003&4e4d610cdf714d2966000002&4e4d610cdf714d2966000007&5109e04e48d5b9364ae9ac45&4fb479f75ba1c65561000027&4ef0a35c0569795756000000&4fb47a195ba1c60ca5000222&5109e05248d5b9368bb559dc&4fb47a465ba1c65561000028&4ef0a3330569795757000000&4e4d610cdf714d2966000006&4e4d610cdf714d2966000004&4e4d610cdf714d2966000005&4fb47a305ba1c60ca5000223&4e4d610cdf714d2966000001&4ef0a34e0569795757000001&4e58c2570569791a19000000',
                def:0
            },
            fysort:{
                conts: '最新&热门',
                lists: 'new&hot'
            },
            pageType: 'skip=0',
            index: 'azbz_1'
        }
    },
    mmf: {
        index: 'https://www.95mm.net/category-1/list-1/index.html?append=list-home&paged=1&pos=cate&page=1',
        router: 'https://www.95mm.net/category-分类/list-1/index.html?append=list-home&paged=fypage&pos=cate&page=fypage',
        type: {
            fyclass:{
                conts: '清纯唯美&摄影私房&性感妖姬&明星写真&三次元&游戏主题&美女壁纸',
                lists: '1&2&7&4&5&9&11',
                def:0
            },
            pageType: 'page=1',
            index: 'mmf_1'
        }
    },
    batw: {
        index: 'https://pic.netbian.com/分类/index.html',
        router: 'https://pic.netbian.com/分类/index_fypage.html',
        type: {
            fyclass:{
                conts: '4K风景&4K美女&4K游戏&4k动漫&4K影视&4K明星&4K汽车&4K动物&4K人物&4K美食&4K宗教&4K背景',
                lists: '4kfengjing&4kmeinv&4kyouxi&4kdongman&4kyingshi&4kmingxing&4kqiche&4kdongwu&4krenwu&4kmeishi&4kzongjiao&4kbeijing',
                def:0
            },
            pageType: 'index.html',
            index: 'batw_1'
        }
    },
    cq4k: {
        index: 'http://api.wallpaperscraft.com/images?screen[width]=1080&screen[height]=2248&types[]=free&offset=0&&&sort=date&lang=en&limit=60&offset=1@*60@-60@?_t=0',
        router: 'http://api.wallpaperscraft.com/images?screen[width]=1080&screen[height]=2248&types[]=free&offset=0&分类&sort=排序&lang=en&limit=60&offset=fypage@*60@-60@?_t=0',
        type: {
            fyclass:{
                conts: '全部&3D&60 Favorites&Abstract&Alone&Animals&Anime&Art&Black&Cars&City&Dark&Fantasy&Flowers&Food&Girls&Holidays&Love&Macro&Masks&Men&Minimalism&Motorcycles&Music&Nature&Neon&Other&Predators&Smilies&Space&Sport&Summer&Technologies&Textures&Vector&White&Winter&Words',
                lists: '&＆＆category_id=1&＆＆category_id=170&＆＆category_id=54&＆＆category_id=176&＆＆category_id=55&＆＆category_id=56&＆＆category_id=65&＆＆category_id=68&＆＆category_id=34&＆＆category_id=35&＆＆category_id=66&＆＆category_id=36&＆＆category_id=37&＆＆category_id=38&＆＆category_id=40&＆＆category_id=42&＆＆category_id=60&＆＆category_id=43&＆＆category_id=173&＆＆category_id=44&＆＆category_id=61&＆＆category_id=64&＆＆category_id=46&＆＆category_id=47&＆＆category_id=175&＆＆category_id=48&＆＆category_id=177&＆＆category_id=187&＆＆category_id=49&＆＆category_id=51&＆＆category_id=183&＆＆category_id=41&＆＆category_id=52&＆＆category_id=59&＆＆category_id=185&＆＆category_id=179&＆＆category_id=63',
                def:0
            },
            fysort:{
                conts: 'NEW&RATING&POPULAR',
                lists: 'date&rating&download'
            },
            pageType: 'offset=1',
            index: 'cq4k_1'
        }
    },
    bz360: {
        index: 'http://wallpaper.apc.360.cn/index.php?c=WallPaper&start=0&count=12&from=360chrome&a=getAppsByCategory&cid=36',
        router: 'http://wallpaper.apc.360.cn/index.php?c=WallPaper&start=fypage&count=12&from=360chrome&a=getAppsByCategory&cid=分类',
        type: {
            fyclass:{
                conts: '4K专区&美女模特&爱情美图&风景大片&小清新&动漫卡通&明星风尚&萌宠动物&游戏壁纸&汽车天下&炫酷时尚&月历壁纸&影视剧照&节日美图&军事天地&劲爆体育&BABY秀',
                lists: '36&6&30&9&15&26&11&14&5&12&10&29&7&13&22&16&18',
                def:0
            },
            pageType: 'start=0',
            index: 'bz360_1'
        }
    },
    jdly: {
        index: 'https://www.ababbb.com/hent/page/1',
        router: 'https://www.ababbb.com/分类/page/fypage',
        type: {
            fyclass:{
                conts: '精品写真&妹子图&汉服控&萌兔在线&COS套图&ins美女&M站分享&清纯妹子&会员专享&性感美腿',
                lists: 'hent/jingp&ymm/mzt&ymm/hfk&hent/mtzx&hent/cost&ymm/ins&tag/m站分享&tag/清纯妹子&tag/会员专享&tag/性感美腿',
                def:0
            },
            pageType: 'page/1',
            index: 'jdly_1'
        }
    }

};


var hikerHomePage = ()=>{
    var d = [];
    if(MY_URL.split('$$$')[1] == 1){
        for(var i in walllists){
            d.push({
                title: getVar('nowPage', walllists[0].reg)==walllists[i].reg? ("““””<b>"+'<span style="color: #1db69a">'+ walllists[i].title +'</span></b>') : walllists[i].title ,
                url: $("#noLoading#").lazyRule((movieitem, data)=>{
                    putVar('nowPage', movieitem.reg)
                    putVar('pageUrl', data[movieitem.reg].index);
                    refreshPage(false);
                    return "hiker://empty"
                    }, walllists[i], data),
                col_type:'scroll_button'
            });
        }
    }
    if( /bing/.test( getVar('pageUrl', data.bybz.index) ) ){
        bybzindex(d, data);
    }else if(/senlinjimore/.test( getVar('pageUrl', data.bybz.index))){
        sljindex(d, data);
    }else if(/tuchong/.test( getVar('pageUrl', data.bybz.index))){
        tcsyindex(d, data);
    }else if(/picasso/.test( getVar('pageUrl', data.bybz.index))){
        azbzindex(d,data);
    }else if(/95mm/.test( getVar('pageUrl', data.bybz.index))){
        mmfindex(d,data);
    }else if(/netbian/.test( getVar('pageUrl', data.bybz.index))){
        batwindex(d,data);
    }else if(/wallpaperscraft/.test( getVar('pageUrl', data.bybz.index))){
        cq4kindex(d,data);
    }else if(/360/.test( getVar('pageUrl', data.bybz.index))){
        bz360index(d,data);
    }else if(/ababbb/.test( getVar('pageUrl', data.bybz.index))){
        jdlyindex(d,data);
    }
    

    //d.push({ col_type: 'line_blank' });
    setResult(d)
}

var bybzindex = (d, data)=>{
    MY_URL = data.bybz.router.replace('fypage',MY_URL.split('$$$')[1]);
    //var router = data.bybz.router;
    var type = data.bybz.type;
    
    d.push({
        col_type:"blank_block"
    });
             
    
    eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
    setNav(type);
    var html =request(getVar('pageUrl'));
    
    var list = parseDomForArray(html, 'body&&.item');  
    for (var i in list) {
        d.push({
            title: parseDomForHtml(list[i], 'h3&&Text'),
            img: parseDom(list[i], 'img&&src'),
            desc: parseDomForHtml(list[i], '.calendar&&Text'),
            url: parseDom(list[i], 'img&&src').replace(/\_\d*x\d*/,'_1920x1080'),
            col_type: "pic_1_card"
        })
    }
    
}
//森林集
var sljindex = (d, data)=>{
    MY_URL = data.slj.router.replace('fypage', MY_URL.split('$$$')[1]);;
    //var router = data.slj.router;
    var type = data.slj.type;

    d.push({
        col_type:"blank_block"
    });
    eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
    setNav(type);
    var html =request(getVar('pageUrl'));
    
    var list = parseDomForArray(html, '#main&&.cards&&.post-card-wrapper');
    for (var i in list) {
        d.push({
            title: parseDomForHtml(list[i], '.meta&&h2&&a&&Text'),
            img: parseDom(list[i], 'img&&src')+'@Referer=',
            url: parseDom(list[i], 'img&&src'),
            col_type: "pic_3"
        })
    }
}
//图虫摄影
var tcsyindex = (d,data)=>{
    MY_URL = data.tcsy.router.replace('fypage', MY_URL.split('$$$')[1]);;
    //var router = data.slj.router;
    var type = data.tcsy.type;

    d.push({
        col_type:"blank_block"
    });
    eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
    setNav(type);
    var html =fetch(getVar('pageUrl'));
    
    var list = JSON.parse(html).post_list;
    for (var i in list) {
        d.push({
            title: list[i].title,
            img: list[i].title_image.url+'@Referer=',
            url: list[i].title_image.url,
            col_type: "pic_3"
        })
    }
}
//安卓壁纸
var azbzindex = (d, data)=>{
    MY_URL = data.azbz.router.replace(/fypage/g, ( parseInt( MY_URL.split('$$$')[1] )-1)*30);
    //var router = data.slj.router;
    var type = data.azbz.type;

    d.push({
        col_type:"blank_block"
    });
    eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
    setNav(type);
    var html =fetch(getVar('pageUrl'));
    
    var list = JSON.parse(html).res.vertical;
    for (var i in list) {
        d.push({
            title: 'rank：'+list[i].rank,
            img: list[i].img+'@Referer=',
            url: list[i].img + '#.jpg',
            col_type: "pic_3"
        })
    }
}
//MM范
var mmfindex = (d, data)=>{
    MY_URL = data.mmf.router.replace(/fypage/g, MY_URL.split('$$$')[1]);
    //var router = data.slj.router;
    var type = data.mmf.type;

    d.push({
        col_type:"blank_block"
    });
    eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
    setNav(type);
    var html =request(getVar('pageUrl'));
    
    var list = parseDomForArray(html, 'body&&.list-item');
    for (var i in list) {
        d.push({
            title: parseDomForHtml(list[i], '.list-title&&Text'),
            img: parseDom(list[i], '.media-content&&data-bg')+'@Referer=',
            url: parseDom(list[i], '.media-content&&data-bg')+ '#.jpg',
            col_type: "pic_3"
        })
    }
}
//彼岸图网
var batwindex = (d, data)=>{
    MY_URL = MY_URL.split('$$$')[1] == '1'? data.batw.index :data.batw.router.replace(/fypage/g, MY_URL.split('$$$')[1]);
    //var router = data.slj.router;
    var type = data.batw.type;

    d.push({
        col_type:"blank_block"
    });
    eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
    setNav(type);
    var html =fetch(getVar('pageUrl'),{headers:{'User-Agent':'Mozilla/5.0','content-type':'gbk','Referer':'https://www.k1080.net/'}});
    
    var list = parseDomForArray(html, '.slist&&li');
    for (var i in list) {
        d.push({
            title: parseDomForHtml(list[i], 'a&&Text'),
            img: parseDom(list[i], 'img&&src')+'@Referer=',
            url: $(parseDom(list[i], 'a&&href')).rule(()=>{
                var d = []
                var html = getResCode();
                var list = parseDomForHtml(html, 'body&&#img&&Html');
                d.push({
                    img: parseDom(list, 'img&&src')+'@Referer=',
                    url: parseDom(list, 'img&&src')+ '#.jpg',
                    col_type: "pic_1_full"
                })
                setResult(d) 
            }),
            col_type: "pic_3"
        })
    }
}

//4K超清
var cq4kindex = (d, data)=>{
    MY_URL = data.cq4k.router.replace(/fypage/g, MY_URL.split('$$$')[1]);
    //var router = data.slj.router;
    var type = data.cq4k.type;

    d.push({
        col_type:"blank_block"
    });
    eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
    setNav(type);
    var html =fetch(getVar('pageUrl'));
    
    var list = JSON.parse(html).items;
    for (var i in list) {
        d.push({
            title: list[i].author,
            img: list[i].variations.preview_small.url+'@Referer=',
            url: list[i].variations.adapted.url + '#.jpg',
            col_type: "pic_3"
        })
    }
}

//360壁纸
var bz360index = (d, data)=>{
    MY_URL = data.bz360.router.replace(/fypage/g, ( parseInt( MY_URL.split('$$$')[1] )-1)*12);
    //var router = data.slj.router;
    var type = data.bz360.type;

    d.push({
        col_type:"blank_block"
    });
    eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
    setNav(type);
    var html =fetch(getVar('pageUrl'));
    
    var list = JSON.parse(html).data;
    for (var i in list) {
        d.push({
            title: list[i].title,
            img: list[i].url+'@Referer=',
            url: list[i].url + '#.jpg',
            col_type: "pic_3"
        })
    }
}
//绝对领域
var jdlyindex=(d, data)=>{
    MY_URL = data.jdly.router.replace(/fypage/g, MY_URL.split('$$$')[1] );
    //var router = data.slj.router;
    var type = data.jdly.type;

    d.push({
        col_type:"blank_block"
    });
    eval(fetch('hiker://files/rules/black/black.js').split('//MYNAV')[1].split('//MYNAV')[0]);
    setNav(type);
    var html =fetch(getVar('pageUrl'));
    
    var list = parseDomForArray(html, '.b2_gap&&.item-in');
    for (var j in list) {
        d.push({
            title: parseDomForHtml(list[j], '.post-excerpt&&Text'),
            desc: parseDomForHtml(list[j], 'time&&Text'),
            pic_url: parseDom(list[j], 'img&&src'),
            url: parseDom(list[j],'a&&href') + `@lazyRule=.js:var url = parseDom(fetch(input,{}),'.entry-content&&p&&Html');'pics://'+url.match(/http.*?jpg/g).join('&&')`,
            col_type: "pic_2"
        })
    }
}