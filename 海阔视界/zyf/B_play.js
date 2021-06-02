//555影视
var jx_555 = ()=>{
    var res ,d ,html, jsUrl, setUrl; 
    eval(fetch('hiker://files/rules/zyf/black.js'));
    init({isDn: true});
    eval(fetch(jsUrl));

    //影片详情
    var details = parseDomForHtml(html, 'body&&.hl-vod-data&&Html'); //影片信息
    var _img = parseDomForHtml(html, '.hl-vod-data&&.hl-item-thumb&&data-original'); //图片

    var _title = parseDomForHtml(details,     'ul&&li:contains(导演)&&Text') + '\n' + parseDomForHtml(details, 'ul&&li:contains(主演)&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details,      'ul&&li:contains(简介)&&Text').replace('简介:',''); //简介
    var dataLine = details.match(/<li[\s\S]*?<\/li>/g)
    dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });

    //线路
    var conts = parseDomForArray(html,'body&&.hl-plays-list');
    var linelist = parseDomForArray(html, 'body&&.hl-plays-from&&a');
    var tabs = [];
    for (var i in linelist) {
        tabs.push(parseDomForHtml(linelist[i], 'a&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'my_line', setUrl]);
    //选集
    var lists =[];
    for (var i in conts) {
        lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
        lists: lists,
        index: getVar('my_line', '0'),
        _dnPar: 'body&&#conch-content&&script&&Html'
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }

    res.data=d;
    setHomeResult(res);
}


//taotao
var jx_taotao=()=>{
    var res ,d ,html, jsUrl, setUrl; 
    eval(fetch('hiker://files/rules/zyf/black.js'));
    init({
    isDn: true,
    });
    eval(fetch(jsUrl));

    var lazy =  `@lazyRule=.myui-player__video&&script&&Html.js:eval(input.replace(/player_.*?={/,'player_aaaa={'));var url=player_aaaa.url;if(url.indexOf('.m3u8')==-1){refreshX5WebView('https://jx.m3u8.tv/jiexi/?url='+url);'toast://已切换选集！'}else{url}`;

    //影片详情
    var details = parseDomForArray(html, 'body&&.myui-content__detail&&.data'); //影片信息
    var _img = parseDomForHtml(html, 'body&&.myui-content__thumb&&.lazyload&&data-original'); //图片

    var _title = parseDomForHtml(details[2], 'Text')+ '\n' + parseDomForHtml(details[3], 'Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details[4], 'Text'); //简介
    var dataLine = details;
    dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: details
    });


    //线路
    var conts = parseDomForArray(html,'body&&.myui-content__list');
    var linelist = parseDomForArray(html, 'body&&.bottom-line:has(.sort-button)');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'h3&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'my_line', setUrl]);
    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
    lists: lists,
    index: getVar('my_line', '0'),
    _dnPar: '.myui-player__video&&script&&Html'
    });


    var likeTab=parseDomForArray(html, 'body&&.myui-panel:contains(猜你喜欢)&&.nav&&a');
    var likeTabs = [];
    for(var l in likeTab){
        likeTabs.push(parseDomForHtml(likeTab[l], 'Text'));        
    }
    setLikeTabs(likeTabs, 'my_like');

    //喜欢列表
        var likeconts = parseDomForArray(html, 'body&&.tab-content&&ul');
        var likelists =[];
    for (var i in likeconts) {
        likelists.push(likeconts[i].match(/<li[\s\S]*?<\/li>/g));
    }
        var likeList = likelists[getVar('my_like', '0')];
        for(var i in likeList){
            
                d.push({
                    title: parseDomForHtml(likeList[i], '.title&&Text'),
                    img: parseDom(likeList[i], '.myui-vodlist__thumb&&style'),
                    desc: parseDomForHtml(likeList[i], '.pic-text&&Text'),
                    url: $(parseDom(likeList[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/zyf/B_play.js')); jx_taotao() }),
                    col_type: "movie_3"
                });
            
        }
    //}catch(e){ }

    d.push({title: '<br>', col_type: 'rich_text'});
    res.data=d;
    setHomeResult(res);
}

//JX360
function setItem(list,type,d){
    var jurl;var _title;
    var lazy = `@lazyRule=.js:var jx = 'https://jxx.smys8.cn/index.php?url=';refreshX5WebView(jx+input);'toast://播放中'`;
    if(type == 0) {
        jurl = list.match(/data-url="[\s\S]*?"/)[0].split('\"')[1];  
        _title = parseDomForHtml(list, 'Text');
    }else{
        jurl = parseDom(list, 'a&&href').replace(/\?.*/, '');
        _title = parseDomForHtml(list,'a&&Text');
    }
    var play;
    if(/le/.test(jurl)){
        play =jurl+lazy
    }else{
        play =$(jurl).lazyRule((k)=>{
            eval(fetch(k)); //eval传入的插件链接，传入的数据被命名为k
            return aytmParse(input); //用插件里的函数解析选集链接，input就是传入的选集链接
        }, getVar('jsUrl'))//jsUrl的位置传入插件链接，注意格式 符号不要错,
    }
    d.push({
        title: _title,
        //url:
        url: play,
        col_type: list.length >3?'text_3':'text_2'
    });
}

var jx_360 = ()=>{
    var res = {}; var d = []; 
    var html = getResCode();
    var config = fetch('hiker://files/cache/MyParseSet.json');
    if(config == '' || !fetch(JSON.parse(config).cj)){
        var jsUrl = 'https://code.aliyun.com/AI957/Hiker/raw/master/v/CloudParse-V2_Dn.js';
    }else{
        var jsUrl = JSON.parse(config).cj;
    } eval(fetch(jsUrl));

    d.push({
    desc:'240&&float',
            col_type: 'x5_webview_single'
    });

    /**
     *@desc: 设置线路标题
    *@param: tabs 线路标题的数组，如tabs=['线路一','线路二','线路三']
    *@param: vari 自定义的全局变量名称，建议使用MY_URL，避免出现重复变量造成未知bug
    *@warning: 里面代码无需更改，只传递参数调用即可
    */
    function setTabs(tabs, vari) {
        d.push({
            title: '‘‘📺点击切换线路’’',
            url: setUrl,
            col_type: 'text_center_1'
        })
        var title = '';
        for (var i = 0; i < tabs.length; i++) {
            var url = "hiker://empty@lazyRule=.js:putVar('"+vari+"', '"+i+"');refreshPage();'toast://切换成功！'";
            d.push({
                title: (getVar(vari, '0')==i?'🍓':'') + tabs[i],
                url: url,
                col_type: tabs.length>2?'text_3':'text_2'
            })
        }
    }


    /**
     *@desc: 设置线路列表
    *@param: lists 线路列表数组的数组，如list1=[a,b,c] list2=[a,b,c] lists=[list1,list2]
    *@param: index 自定义全局变量的值，为空默认0
    *@warning: for循环内容自己编写，自己确定列表显示以及动态解析等
    */
    function setLists(lists, type) {
        let hUrl = `@lazyRule=.js:let conf = getVar('shsort');if(conf==' - 正序'){putVar({key:'shsort', value:' - 逆序'});}else{putVar({key:'shsort', value:' - 正序'})};refreshPage(false);'toast://切换排序成功'`;
        d.push({
            title: '‘‘选集(点我)’’',
            url: hUrl,
            col_type: 'text_center_1'
        })
        var list = lists;
        if (getVar('shsort') == ' - 逆序') {
            for (var j = list.length - 1; j >= 0; j--) {
                //eval(base64Decode(getVar('setItem')))
                setItem(list[j], type, d);
            }
        } else {
            for (var j = 0; j < list.length; j++) {
                //eval(base64Decode(getVar('setItem')))
                setItem(list[j], type, d);
            }
        }
    }

    eval(fetch('hiker://files/rules/zyf/black.js').split('//BLDETAIL')[1].split('//BLDETAIL')[0]);
    //影片信息
    try{
        var details = parseDomForHtml(html, 'body&&.box&&Html'); //影片信息
        var _img = parseDomForHtml(html, '.box&&.img&&img&&src'); //图片
        var _title = parseDomForHtml(details, '.cp-info-main&&p,-3&&Text') + '\n' + parseDomForHtml(details, '.cp-info-main&&p,-2&&Text') + '\n'; //电影信息 导演 + 主演
        var _desc = parseDomForHtml(details, '.cp-info-main&&p,0&&Text'); //简介
        var movieName = parseDomForHtml(details, 'h3&&Text');
        var dataLine =  parseDomForArray(details, '.cp-info-main&&p');
        setMovieDetail({
            _title: _title,
            _desc: _desc,
            _img: _img,
            dataLine: dataLine,
            hasStore: true,
            movieName: movieName
        });
    }catch(e){ }

    //线路和选集
    //try{
        var conts = parseDomForArray(html, '.cp-dsseries||.p-dianying-wrap||.cp-zyseries&&a:not(:contains(集)):not(:contains(月)):not(:contains(展开))');
        var linelist = parseDomForArray(html, 'body&&.cp-sitebar-main&&.wrap&&.item');
        var linelisthead = parseDomForHtml(html, 'body&&.cp-sitebar-main&&.wrap&&Html');
        var scriptObj = parseDomForHtml(html, 'body&&script,1&&Html');
        eval(scriptObj);
        var dataUrl = serverdata.tongji.split('.html')[0]; // http://m.360kan.com/coverpage/dongman";
        var tabs = [];
        
        for (var i in linelist) {
            tabs.push(parseDomForHtml(linelist[i], 'Text').replace(/.*独家专用线路/,'') );
        }
        if(tabs.length>0) setTabs(tabs, 'my_line');
        
        var  lists = [];
        if(linelist.length>1){
            
            if(conts.length > 1){
                // setLists(conts[i], getVar(MY_TYPE, '1'));//电视剧多线路
                var id = linelisthead.match(/data-id="[\s\S]*?"/)[0].split('"')[1];
                var cat = linelisthead.match(/data-cat="[\s\S]*?"/)[0].split('"')[1];
                for(var i in linelist){
                    var data_site = linelist[i].match(/data-site="[\s\S]*?"/)[0].split('"')[1];
                    var fetUrl = dataUrl + 'LinksBySite?id='+ id +'&cat=' + cat +'&site=' + data_site;
                    var mydata =JSON.parse(fetch(fetUrl.replace(/coverpage\/d/,'coverpage/getD')));
                    var listObj = parseDomForArray(mydata.data, '.cp-dsseries&&a:not(:contains(集)):not(:contains(月)):not(:contains(展开))');
                    var titleObj = parseDomForHtml(linelist[i], 'Text') 
                // if(titleObj == '') continue;
                    // d.push({title: titleObj, col_type: 'rich_text'});
                    lists.push(listObj);
                    // setLists(listObj, getVar(MY_TYPE, '1'));
                }
                var index = getVar('my_line', '0');
                setLists(lists[index],getVar(MY_TYPE, '1'));
            }else{
                setLists(linelist, getVar(MY_TYPE, '0')); //电影多线路
            }
        }else{
            var line=[];
            line[0] = parseDomForHtml(html, 'body&&.cp-sitebar-main&&.wrap&&Text');
            setTabs(line, "my_line");
            setLists(conts, getVar(MY_TYPE, '1')); //电视单线路
        }

    /*var id = linelisthead.match(/data-id="[\s\S]*?"/)[0].split('"')[1];
            var cat = linelisthead.match(/data-cat="[\s\S]*?"/)[0].split('"')[1];
    
        var data_site = linelist[i].match(/data-site="[\s\S]*?"/)[0].split('"')[1];
            var fetUrl = dataUrl + 'LinksBySite?id='+ id +'&cat=' + cat +'&site=' + data_site;
            var mydata =fetch(fetUrl.replace(/coverpage\/d/,'coverpage/getD'));*/


    //d.push({title:fetUrl, col_type: 'rich_text'});
        d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }

    res.data=d;
    setHomeResult(res);
}
//JX360

//JXDGDY
var jx_dgdy = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/zyf/black.js'));
    init({isDn:true});
    eval(fetch(jsUrl));

    //影片详情
    var details = parseDomForHtml(html, 'body&&.stui-content__detail&&Html'); //影片信息
    var _img = parseDomForHtml(html, 'body&&.stui-vodlist__thumb&&img&&data-original'); //图片

    var _title = parseDomForHtml(details, 'p,1&&Text') + '\n' + parseDomForHtml(details, 'p,2&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details, 'p,-1&&Text'); //简介
    var dataLine = details.match(/<p[\s\S]*?<\/p>/g);
    dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });

    //线路
    var conts = parseDomForArray(html,'body&&.playlist');
    var linelist = parseDomForArray(html, 'body&&.playlist');
    var tabs = [];
    for (var i in linelist) {
        tabs.push(parseDomForHtml(linelist[i], 'h3&&Text').replace(/.*独家专用线路/,''));
    }
    setTabs([tabs, 'my_line', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
        lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
        lists: lists,
        index: getVar('my_line', '0'),
        _dnPar: '.stui-player__video&&script&&Html'
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }

    res.data=d;
    setHomeResult(res);
}
//JXDGDY
//JXMJC
var jx_mjc = (lazyRule)=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/zyf/black.js'));
    init({
    isX5: true,
    isDn: true
    });
    eval(fetch(jsUrl));

    var lazy =lazyRule!=undefined? lazyRule: `@lazyRule=.player_video&&script&&Html.js:eval(input);var url=player_data.url;var pn=player_data.from;if(pn=='alizy'){var jurl= fetch('https://foubin.com/jiexi.php?url='+url,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://foubin.com"}}).match(/"url":"(.*?)"/)[1];refreshX5WebView('https://foubin.com/jiexi.php?url='+url);'toast://播放中'}else if(pn == 'xigua'){refreshX5WebView('https://vip.parwix.com:4433/player/?url='+url);'toast://播放中'}else{eval(fetch(getVar('jsUrl')));aytmParse(url);}`;

    //影片详情
    var details = parseDomForHtml(html, 'body&&.player&&Html'); //影片信息
    var _img = parseDomForHtml(html, 'body&&.play_infobox&&.play_vlist_thumb,0&&data-original'); //图片

    var _title = parseDomForHtml(details, 'p,2&&Text') + '\n' + parseDomForHtml(details, 'p,3&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details, 'p,-1&&Text'); //简介
    var dataLine = details.match(/<p[\s\S]*?<\/p>/g);
    dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img + '@Referer=',
        dataLine: dataLine
    });

    //线路
    var conts = parseDomForArray(html,'body&&.playlist&&.playlist_full');
    var linelist = parseDomForArray(html, '.play_source_tab&&a');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'a&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'my_line', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
    lists: lists,
    index: getVar('my_line', '0'),
    lazy:lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }

    res.data=d;
    setHomeResult(res);
}
//JXMJC
//JXJPYS
var jx_jpys = (lazyRule)=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/zyf/black.js'));
    init({
      isDn: true
    });
    eval(fetch(jsUrl));

    var lazy =lazyRule!=undefined? lazyRule: `@lazyRule=.js:var get =fetch(input,{headers:{"User-Agent":PC_UA,"Referer":"https://www.jpysvip.net"}});var js = parseDomForHtml(get,".myui-player__box&&script&&Html");eval(js);var url=player_data.url;var fro=player_data.from;if(url.indexOf('html')>0){var jsUrl=getVar('jsUrl');eval(fetch(jsUrl));aytmParse(url);}else if(fro=='xinm3u8'){var play=fetch('https://jxn.dxsdkw.cn/x2.php?id='+url,{}).match(/url: \'(.*?)\'/)[1];play;}else{url}`;

    //影片详情
    var details = parseDomForHtml(html, 'body&&.myui-content__detail&&Html'); //影片信息
    var _img = parseDomForHtml(html, 'body&&.myui-vodlist__thumb,0&&img&&data-original'); //图片

    var _title = parseDomForHtml(details, 'p,-2&&Text') + '\n' + parseDomForHtml(details, 'p,-3&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details, 'p,-1&&Text'); //简介
    var dataLine = details.match(/<p[\s\S]*?<\/p>/g);
    dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img + '@Referer=',
        dataLine: dataLine
    });

    //线路
    var conts = parseDomForArray(html,'body&&.myui-content__list');
    var linelist = parseDomForArray(html, '.nav&&li');
    var tabs = [];
    for (var i in linelist) {
        tabs.push(parseDomForHtml(linelist[i], 'a&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'jpys_line', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
        lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
        lists: lists,
        index: getVar('jpys_line', '0'),
        lazy:lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }

    res.data=d;
    setHomeResult(res);
}
//JXJPYS
//JXLENGYUE
var jx_lengyue = (lazyRule)=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/zyf/black.js'));
    init({
    isDn: true,
    });
    eval(fetch(jsUrl));

    //影片详情
    var details = parseDomForHtml(html, 'body&&.myui-content__detail&&Html'); //影片信息
    var _img = parseDomForHtml(html, 'body&&.myui-vodlist__thumb&&img&&data-original'); //图片

    var _title = parseDomForHtml(details, 'p,-2&&Text') + '\n' + parseDomForHtml(details, 'p,-3&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details, 'p,-1&&Text'); //简介
    var dataLine = details.match(/<p[\s\S]*?<\/p>/g)
    dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });

    //线路
    var conts = parseDomForArray(html,'body&&.tab-content:has(.myui-content__list)&&ul');
    var linelist = parseDomForArray(html, 'body&&.nav&&li');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'a&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, MY_URL, setUrl]);

    var lazy =lazyRule!=undefined? lazyRule: `@lazyRule=iframe&&src.js:if(/m3u8/.test(input)){input;}else{var jsUrl=getVar('jsUrl');eval(fetch(jsUrl));var url= input.split('url=')[1]; aytmParse(url)}`;

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
    lists: lists,
    index: getVar(MY_URL, '0'),
    lazy: lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }

    res.data=d;
    setHomeResult(res);
}
//JXLENGYUE
//JXGE179
var jx_ge179 = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/zyf/black.js'));
    init({
    isX5: true,
    });
    //eval(fetch(jsUrl));

    var lazy=`@lazyRule=.js:JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]).url`

    //影片详情
    var details = parseDomForHtml(html, 'body&&.myui-content__detail&&Html'); //影片信息
    var _img = parseDomForHtml(html, 'body&&.myui-vodlist__thumb&&img&&data-original'); //图片

    var _title = parseDomForHtml(details, 'p,-4&&Text') + '\n' + parseDomForHtml(details, 'p,-3&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details, 'p,-1&&Text'); //简介
    var dataLine = details.match(/<p[\s\S]*?<\/p>/g)
    dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });

    //线路
    var conts = parseDomForArray(html,'body&&.myui-content__list');
    var linelist = parseDomForArray(html, 'body&&.nav&&li');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'a&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'ge179_line', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
    lists: lists,
    index: getVar('ge179_line', '0'),
    lazy: lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }

    res.data=d;
    setHomeResult(res);
}
//JXGE179