//555影视
var jx_555 = ()=>{
    var res ,d ,html, jsUrl, setUrl; 
    eval(fetch('hiker://files/rules/black/black.js'));
    init({isDn: true});
    eval(fetch(jsUrl));
   
    //影片详情
    var details = parseDomForHtml(html, 'body&&#desc&&Html'); //影片信息
    var _img = 'https://github.com/Qiu522/blog/blob/master/img/yy.jpg?raw=true'; //图片

    var _title = parseDomForHtml(details,     'p,0&&Text') + '\n' + parseDomForHtml(details, 'p,1&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details,      'p,-1&&Text').replace('简介:',''); //简介
    var dataLine = details.match(/<p[\s\S]*?<\/p>/g)
    dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });
    var moviename = parseDomForHtml(html, '.title&&Text')
    searchMovie(moviename);

    //线路
    try{
    var conts = parseDomForArray(html,'body&&.myui-content__list');
    var linelist = parseDomForArray(html, 'body&&.nav&&.item&&li');
    var tabs = [];
    for (var i in linelist) {
        tabs.push(parseDomForHtml(linelist[i], 'a&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'five_line', setUrl]);
    //选集
    var lists =[];
    for (var i in conts) {
        lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
        lists: lists,
        index: getVar('five_line', '0'),
        //lazy: lazy
        _dnPar: 'body&&.embed-responsive&&script&&Html'
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    }catch(e){ }

    var rule = $("").rule(() => {
        var html = getResCode();

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
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}


//taotao
var jx_taotao=()=>{
    var res ,d ,html, jsUrl, setUrl; 
    eval(fetch('hiker://files/rules/black/black.js'));
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
    var moviename = parseDomForHtml(html, '.title&&Text')
    searchMovie(moviename);

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
                    url: $(parseDom(likeList[i], '.myui-vodlist__thumb&&href')).rule(() => { eval(fetch('hiker://files/rules/black/B_play.js')); jx_taotao() }),
                    col_type: "movie_3"
                });
            
        }
    //}catch(e){ }

    var rule = $("").rule(() => {
        var html = getResCode();

        var time = parseDomForHtml(html, '.myui-content__detail&&p,1&&Text');
        setResult(time);
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

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

    eval(fetch('hiker://files/rules/black/black.js').split('//BLDETAIL')[1].split('//BLDETAIL')[0]);
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

    eval(fetch('hiker://files/rules/black/black.js'));
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
    var moviename = parseDomForHtml(html, '.title&&Text')
    searchMovie(moviename);

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
    var rule = $("").rule(() => {
        var html = getResCode();

        // 播放列表的列表的定位
        var conts = parseDomForArray(html,'body&&.playlist')[0];
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
        var time = parseDomForHtml(html, "body&&.stui-content__detail&&p,-2&&Text").replace("更新：", "");
        setResult("更新至: " + title + " | " + time);
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXDGDY
//JXMJC
var jx_mjc = (lazyRule)=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isX5: true,
    isDn: true
    });
    eval(fetch(jsUrl));

    var lazy =lazyRule!=undefined? lazyRule: `@lazyRule=.embed-responsive&&script&&Html.js:eval(input);var url=player_data.url;var pn=player_data.from;if(pn=='alizy'|pn=='xin'){var html = fetch('https://api.xkvideo.design/m3u8.php?url='+url);var urll=html.match(/"url":"(.*?)"/)[1];var bt_token = html.match(/bt_token = "(.*?)"/)[1];eval(base64Decode('ZXZhbChnZXRDcnlwdG9KUygpKTsKIAkJCQogIAkJCXZhciB0b2tlbl9rZXk9Q3J5cHRvSlMuZW5jLlV0ZjgucGFyc2UoImR2eVlSUWxuUFJDTWRRU2UiKTsKICAJCQl2YXIgdG9rZW5faXYgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZShidF90b2tlbik7CgogZnVuY3Rpb24gRGVjcnlwdCh3b3JkKSB7CiAgICB2YXIgdyA9IHdvcmQ7CiAgICB2YXIgZGVjcnlwdGVkID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQodywgdG9rZW5fa2V5LAogICAgICAgIHsKICAgICAgICAgJ2l2Jzp0b2tlbl9pdiwKICAgICAgICAnbW9kZSc6Q3J5cHRvSlMubW9kZS5DQkMKICAgICAgICB9KTsKICAgICByZXR1cm4gZGVjcnlwdGVkLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTsKfQ=='));Decrypt(urll)}else if(pn == 'xigua'){refreshX5WebView('https://vip.parwix.com:4433/player/?url='+url);'toast://播放中'}else{url+'#isVideo=true#';}`;

    //影片详情
    var details = parseDomForHtml(html, 'body&&#desc&&Html'); //影片信息
    var _img = parseDomForHtml(html, 'body&&.myui-vodlist__thumb&&img&&data-original'); //图片

    var _title = parseDomForHtml(details, 'p,0&&Text') + '\n' + parseDomForHtml(details, 'p,1&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details, '.data&&Text'); //简介
    var dataLine = details.match(/<p[\s\S]*?<\/p>/g);
    //dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img + '@Referer=',
        dataLine: dataLine
    });
    var moviename = parseDomForHtml(html, '.myui-vodlist__thumb&&title')
    searchMovie(moviename);

    //线路
    var conts = parseDomForArray(html,'body&&.myui-content__list');
    var linelist = parseDomForArray(html, 'body&&.myui-panel-box,2&&.nav&&li');
    var tabs = [];
    for (var i in linelist) {
        tabs.push(parseDomForHtml(linelist[i], 'a&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'mjc_line', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
        lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
        lists: lists,
        index: getVar('mjc_line', '0'),
        lazy:lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }
    var rule = $("").rule(() => {
        var html = getResCode();

        var title = parseDomForHtml(html, '.myui-content__detail&&p,2&&Text');
        setResult(title);
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXMJC
//JXJPYS
var jx_jpys = (lazyRule)=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
      isDn: true
    });
    eval(fetch(jsUrl));

    var lazy =lazyRule!=undefined? lazyRule: `@lazyRule=.js:var get =fetch(input,{headers:{"User-Agent":PC_UA,"Referer":"https://www.jpysvip.net"}});var js = parseDomForHtml(get,".myui-player__box&&script&&Html");eval(js.replace(/player_.*?={/,'player_data={'));var url=player_data.url;var fro=player_data.from;if(url.indexOf('html')>0){var jsUrl=getVar('jsUrl');eval(fetch(jsUrl));aytmParse(url);}else if(fro=='xinm3u8'){var play=fetch('https://jxn.dxsdkw.cn/x2.php?id='+url,{}).match(/url: \'(.*?)\'/)[1];play;}else{url}`;

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
    var moviename = parseDomForHtml(html, '.title&&Text')
    searchMovie(moviename);

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
    var rule = $("").rule(() => {
        var html = getResCode();

        var title = parseDomForHtml(html, '.myui-content__detail&&p,1&&Text');
        setResult(title);
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXJPYS
//JXLENGYUE
var jx_lengyue = (lazyRule)=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
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
    var moviename = parseDomForHtml(html, '.title&&Text')
    searchMovie(moviename);


    //线路
    var conts = parseDomForArray(html,'body&&.tab-content:has(.myui-content__list)&&ul');
    var linelist = parseDomForArray(html, 'body&&.nav&&li');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'a&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, MY_URL, setUrl]);

    var lazy =lazyRule!=undefined? lazyRule: `@lazyRule=.embed-responsive&&script&&Html.js:eval(input.replace(/player_.*?={/,'player_aaaa={'));var url=decodeURIComponent(base64Decode(player_aaaa.url));if(url.indexOf('.m3u8')==-1){var jsUrl=getVar('jsUrl');eval(fetch(jsUrl));aytmParse(url)}else{url}`;

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
    var rule = $("").rule(() => {
        var html = getResCode();

        var title = parseDomForHtml(html, '.myui-content__detail&&p,2&&Text');
        setResult(title);
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXLENGYUE
//JXGE179
var jx_ge179 = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
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
    var moviename = parseDomForHtml(html, 'h1&&Text')
    searchMovie(moviename);

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
    var rule = $("").rule(() => {
        var html = getResCode();

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
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXGE179
//JXNFMOVIE
var jx_nfmovie = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
        isX5: true,
    });
    eval(fetch(jsUrl));
    html =fetch(MY_URL,{headers:{'User-Agent':'Mozilla/5.0','Cookie':getVar('hikernfcookie')}});
    var lazy= `@lazyRule=.js:var get =fetch(input.replace(/player_.*?={/,'player_data={'),{});var js = parseDomForHtml(get,".embed-responsive&&script&&Html");eval(js); now`;

    //影片详情
    var details = parseDomForHtml(html, 'body&&.myui-content__detail&&Html'); //影片信息
    var _img = parseDom(html, '.myui-vodlist__thumb&&img&&data-original'); //图片

    var _title = parseDomForHtml(details, 'p,3&&Text') + '\n' + parseDomForHtml(details, 'p,2&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details, 'p,-2&&Text'); //简介
    var dataLine = details.match(/<p[\s\S]*?<\/p>/g)
    dataLine.pop();
    dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img+'@Referer=',
        dataLine: dataLine
    });
    var moviename = parseDomForHtml(html, '.myui-vodlist__thumb&&title')
    searchMovie(moviename);

    //线路
    var conts = parseDomForArray(html,'body&&.myui-content__list');
    var linelist = parseDomForArray(html, 'body&&.nav&&li');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'a&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'nf_line', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
    lists: lists,
    index: getVar('nf_line', '0'),
    lazy: lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }
    var rule = $("").rule(() => {
        var html = getResCode();

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
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXNFMOVIE
//JXNFX
var jx_nfx = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isX5: true,
    });
    eval(fetch(jsUrl));

    var lazy =  `@lazyRule=body&&.myui-player__box&&script&&Html.js:eval(input.replace(/player_.*?={/,'player_aaaa={'));player_aaaa.url`

    //影片详情
    var details = parseDomForHtml(html, 'body&&.myui-content__detail&&Html'); //影片信息
    var _img = parseDomForHtml(html, 'body&&.myui-vodlist__thumb&&img&&data-original'); //图片

    var _title = parseDomForHtml(details, 'p,-2&&Text') + '\n' + parseDomForHtml(details, 'p,-3&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details, 'p,-1&&Text'); //简介
    var dataLine = details.match(/<p[\s\S]*?<\/p>/g);
    dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });
    var moviename = parseDomForHtml(html, '.myui-vodlist__thumb&&title')
    searchMovie(moviename);

    //线路
    var conts = parseDomForArray(html,'body&&.myui-content__list');
    var linelist = parseDomForArray(html, 'body&&.myui-panel__head:contains(排序)');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'h3&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'nfx_line', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
    lists: lists,
    index: getVar('nfx_line', '0'),
    lazy: lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }
    var rule = $("").rule(() => {
        var html = getResCode();

        var time = parseDomForHtml(html, '.myui-content__detail&&p,1&&Text');
        setResult(time);
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXNFX
//JXMJHD
var jx_mjhd = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isX5: true,
    });
    eval(fetch(jsUrl));

    var lazy =  `@lazyRule=.myui-player__box&&script&&Html.js:eval(input.replace(/player_.*?={/,'player_aaaa={'));player_aaaa.url`

    //影片详情
    var details = parseDomForHtml(html, 'body&&.myui-content__detail&&Html'); //影片信息
    var _img = parseDom(html, 'body&&.myui-vodlist__thumb&&img&&data-original'); //图片

    var _title = parseDomForHtml(details, 'p,-2&&Text') + '\n' + parseDomForHtml(details, 'p,-3&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details, 'p,-1&&Text'); //简介
    var dataLine = parseDomForArray(html, 'body&&.myui-content__detail&&.data')
    dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });
    var moviename = parseDomForHtml(html, '.myui-vodlist__thumb&&title')
    searchMovie(moviename);

    //线路
    var conts = parseDomForArray(html,'body&&.myui-content__list');
    var linelist = parseDomForArray(html, 'body&&.nav&&li');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'a&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'mjhd_line', setUrl]);
    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
    lists: lists,
    index: getVar('mjhd_line', '0'),
    lazy: lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }
    var rule = $("").rule(() => {
        var html = getResCode();

        var time = parseDomForHtml(html, '.myui-content__detail&&p,2&&Text');
        setResult(time);
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXMJHD
//JXXSJ
var jx_xsj = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isX5: true,
    });
    eval(fetch(jsUrl));

    //影片详情
    var details = parseDomForHtml(html, 'body&&.leo-detail-wrap&&ul&&Html'); //影片信息
    var _img = parseDomForHtml(html, 'body&&.leo-lazy&&data-original'); //图片

    var _title = parseDomForHtml(details, 'li,-2&&Text') + '\n' + parseDomForHtml(details, 'li,-1&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(html, '#leo-detail-info&&p,0&&Text'); //简介
    var dataLine = details.match(/<li[\s\S]*?<\/li>/g)
    //dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });
    var moviename = parseDomForHtml(html, '.leo-detail-cover&&alt')
    searchMovie(moviename);

    //线路
    var conts = parseDomForArray(html,'body&&.leo-play-num');
    var linelist = parseDomForArray(html, 'body&&.leo-source-cho&&li');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'li&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'xsj_line', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
    lists: lists,
    index: getVar('xsj_line', '0'),
    lazy: '@lazyRule=#zanpiancms_player&&script&&src.js:eval(fetch("https:"+input,{}).split("document")[0]);zanpiancms_player.url+"#isVideo=true#"'
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }
    var rule = $("").rule(() => {
        var html = getResCode();

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
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXXSJ
//JXYYJC
var jx_yyjc = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isDn: true
    });
    eval(fetch(jsUrl));
    //var jsUrl=getVar('jsUrl');eval(fetch(jsUrl));aytmParse(url);

    var nl_lazy= `@lazyRule=.embed-responsive&&script&&Html.js:eval(input.replace(/player_.*?={/,'player_aaaa={'));var url=decodeURIComponent(base64Decode(player_aaaa.url));if(url.indexOf('html')>-1){eval(fetch('hiker://files/rules/js/Messy-parsing.js'));player(url)}else if(url.indexOf('alizy')>-1){eval(fetch('hiker://files/rules/js/Messy-parsing.js'));player(url)}else if (url.indexOf('share')>-1){url.split('/share')[0]+fetch(url,{}).match(/main = "(.*?)"/)[1]}else{url}`;

    var dn_lazy= `@lazyRule=.embed-responsive&&script&&Html.js:eval(input.replace(/player_.*?={/,'player_aaaa={'));var url=decodeURIComponent(base64Decode(player_aaaa.url));if(url.indexOf('html')>-1){var jsUrl=getVar('jsUrl');eval(fetch(jsUrl));aytmParse(url);}else if(url.indexOf('alizy')>-1){eval(fetch('hiker://files/rules/js/Messy-parsing.js'));player(url)}else if (url.indexOf('share')>-1){url.split('/share')[0]+fetch(url,{}).match(/main = "(.*?)"/)[1]}else{url}`;

    //影片详情
    var details = parseDomForHtml(html, 'body&&.detail_list&&Html'); //影片信息
    var _img = parseDom(html, '.lazyload&&data-original'); //图片

    var _title = parseDomForHtml(details, '.data,2&&Text') + '\n' + parseDomForHtml(details, '.data,3&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details, '.desc&&Text'); //简介
    var dataLine = details.match(/<li class="data">[\s\S]*?<\/li>/g)
    //dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });
    var moviename = parseDomForHtml(html, '.title&&Text')
    searchMovie(moviename);

    //线路
    var conts = parseDomForArray(html,'body&&.playlist_notfull:has(.content_playlist)');
    var linelist = parseDomForArray(html, 'body&&#NumTab&&a');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'a&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'yyjc_link', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
    lists: lists,
    index: getVar('yyjc_link', '0'),
    lazy: dn_lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }
    var rule = $("").rule(() => {
        var html = getResCode();

        var time = parseDomForHtml(html, '.content_detail,1&&li,1&&Text');
        setResult(time);
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXYYJC
//JXQIMI
var jx_qimi = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isX5: true,
    });
    eval(fetch(jsUrl));

    var lazy='@lazyRule=.js:var src=parseDom(fetch(input,{}),"#bofang_box&&script&&Html");eval(src);decodeURIComponent(base64Decode(player_data.url))+"#isVideo=true#"';

    //影片详情
    var details = parseDomForHtml(html, 'body&&.info&&Html'); //影片信息
    var _img = parseDom(html, 'body&&.detail-pic&&img&&src'); //图片

    var _title = parseDomForHtml(details, 'dl,0&&Text') + '\n' + parseDomForHtml(details, 'dl,2&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details, 'dl,-1&&Text'); //简介
    var dataLine = details.match(/<dl[\s\S]*?<\/dl>/g)
    dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });
    var moviename = parseDomForHtml(html, '.detail-title&&Text')
    searchMovie(moviename);

    //线路
    var conts = parseDomForArray(html,'body&&.video_list');
    var linelist = parseDomForArray(html, 'body&&.down-title');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'h2&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'qimi_link', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<a[\s\S]*?<\/a>/g));
    }

    setLists({
    lists: lists,
    index: getVar('qimi_link', '0'),
    lazy: lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }
    var rule = $("").rule(() => {
        var html = getResCode();

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
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXQIMI
//JXJJYS
var jx_jjys = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    });
    //eval(fetch(jsUrl));
    var lazy =`@lazyRule=.MacPlayer&&script&&src.js:var jurl=fetch('https://www.jiujiuyingsi.com'+input);if(jurl.indexOf('new.79da')!=-1){var v=jurl.match(/url=(.*?)"/)[1];var jxurl=fetch('https://new.79da.com/api.php', {headers:{'x-requested-with':'XMLHttpRequest','Origin':'https://new.79da.com'}, body:'v='+v,method:'POST'});JSON.parse(jxurl).url}else if(jurl.indexOf('play.79da')!=-1){var v=jurl.match(/src="(.*?)"/)[1];var jxurl = fetch(v,{headers:{'Referer':'https://www.jiujiuyingsi.com'}});jxurl.match(/var vid="(.*?)"/)[1];}`;

    //影片详情
    var details = parseDomForArray(html, 'body&&.video-info&&.video-info-items'); //影片信息
    var _img = parseDom(html, 'body&&.lazyload&&data-src'); //图片
    //var dataLine = details.match(/<tr[\s\S]*?<\/tr>/g)
    var _title = parseDomForHtml(details[0], 'Text') +'\n'+ parseDomForHtml(details[1], 'Text'); //电影信息 导演 + 主演
    var _desc = parseDomForHtml(html, 'body&&.zkjj_a&&Text'); //简介

    details.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: details
    });
    var moviename = parseDomForHtml(html, 'h1&&Text')
    searchMovie(moviename);

    //线路
    var conts = parseDomForArray(html,'body&&.scroll-content');
    var linelist = parseDomForArray(html, 'body&&.module-tab-content&&.module-tab-item');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'span&&Text').replace(/《.*》 - /,'') );
    }
    setTabs([tabs, 'jj_line', setUrl]);
    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<a[\s\S]*?<\/a>/g));
    }

    setLists({
    lists: lists,
    index: getVar('jj_line', '0'),
    lazy: lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }
    var rule = $("").rule(() => {
        var html = getResCode();

        var title = parseDomForHtml(html, '.video-info&&.video-info-item,-2&&Text');
        var time = parseDomForHtml(html, '.video-info&&.video-info-item,-3&&Text');
        setResult("更新至: " + title + " | " + time);
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXJJYS
//JXNQY
var jx_nqy = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isX5: true,
    });
    eval(fetch(jsUrl));

    //影片详情
    var details = parseDomForHtml(html, 'body&&.content-info&&Html'); //影片信息
    var _img = parseDomForHtml(html, 'body&&.content-info&&img&&data-image'); //图片

    var _title = parseDomForHtml(details, 'p,1&&Text') + '\n' + parseDomForHtml(details, 'p,2&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details, '.movie-detail&&Text'); //简介
    var dataLine = details.match(/<p[\s\S]*?<\/p>/g)
    //dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });
    var moviename = parseDomForHtml(html, 'h2&&Text')
    searchMovie(moviename);

    var lazy =  `@lazyRule=.play-window&&script&&Html.js:eval(input.replace(/player_.*?={/,'player_aaaa={'));var url=decodeURIComponent(base64Decode(player_aaaa.url));if(url.indexOf('.m3u8')!=-1){url}`;

    //线路
    var conts = parseDomForArray(html,'body&&.play-list');
    var linelist = parseDomForArray(html, 'body&&.play-list');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], '.pull-left&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'xqy_line', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
    lists: lists,
    index: getVar('xqy_line', '0'),
    lazy: lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }
    var rule = $("").rule(() => {
        var html = getResCode();

        var time = parseDomForHtml(html, '.panel&&p,-2&&Text');
        setResult(time);
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXNQY
//JXHJW97
var jx_hjw97 = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isX5: true,
    });
    eval(fetch(jsUrl));

    var lazy =  `@lazyRule=.myui-player__box&&script&&Html.js:eval(input.replace(/player_.*?={/,'player_aaaa={'));var url=player_aaaa.url;if(url.indexOf('.m3u8')==-1){refreshX5WebView('https://jx.m3u8.tv/jiexi/?url='+url);'toast://已切换选集！'}else{url}`;

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
    var moviename = parseDomForHtml(html, 'h1&&Text')
    searchMovie(moviename);

    //线路
    var conts = parseDomForArray(html,'body&&.tab-pane&&ul');
    var linelist = parseDomForArray(html, 'body&&.nav&&li');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'a&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, MY_URL, setUrl]);

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
    var rule = $("").rule(() => {
        var html = getResCode();

        var title = parseDomForHtml(html, '.myui-panel-box&&p,0&&Text').replace("备注：", '');
        var time = parseDomForHtml(html, '.myui-panel-box&&p,2&&Text');
        setResult( title + " | " + time);
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXHJW97
//JXBX
var jx_bx = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isX5: true,
    isDn: true
    });
    eval(fetch(jsUrl));

    var lazy=`@lazyRule=.js:var js = request(input);var jsUrl = base64Decode(parseDomForHtml(js, '.fed-play-iframe&&data-play').slice(3));var jx = parseDomForHtml(js, '.fed-play-iframe&&data-pars');if(jsUrl.match(/html/)){var dnUrl=getVar('jsUrl');eval(fetch(dnUrl));aytmParse(jsUrl);}else if(jx.indexOf(\'mifengw\')!=-1){var html = fetch('https://api.xkvideo.design/m3u8.php?url='+jsUrl);var urll=html.match(/"url":"(.*?)"/)[1];var bt_token = html.match(/bt_token = "(.*?)"/)[1];eval(base64Decode('ZXZhbChnZXRDcnlwdG9KUygpKTsKIAkJCQogIAkJCXZhciB0b2tlbl9rZXk9Q3J5cHRvSlMuZW5jLlV0ZjgucGFyc2UoImR2eVlSUWxuUFJDTWRRU2UiKTsKICAJCQl2YXIgdG9rZW5faXYgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZShidF90b2tlbik7CgogZnVuY3Rpb24gRGVjcnlwdCh3b3JkKSB7CiAgICB2YXIgdyA9IHdvcmQ7CiAgICB2YXIgZGVjcnlwdGVkID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQodywgdG9rZW5fa2V5LAogICAgICAgIHsKICAgICAgICAgJ2l2Jzp0b2tlbl9pdiwKICAgICAgICAnbW9kZSc6Q3J5cHRvSlMubW9kZS5DQkMKICAgICAgICB9KTsKICAgICByZXR1cm4gZGVjcnlwdGVkLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTsKfQ=='));Decrypt(urll)}else{jsUrl}`

    //影片详情
    var details = parseDomForHtml(html, 'body&&.fed-main-info&&ul,0&&Html'); //影片信息
    var _img = parseDom(html, 'body&&.fed-main-info&&.fed-list-pics&&data-original'); //图片

    var _title = parseDomForHtml(details, 'li,1&&Text') + '\n' + parseDomForHtml(details, 'li,0&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details, 'li,-1&&Text'); //简介
    var dataLine = details.match(/<li[\s\S]*?<\/li>/g)
    dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });
    var moviename = parseDomForHtml(html, 'h1&&Text')
    searchMovie(moviename);

    //线路
    var conts = parseDomForArray(html,'body&&.fed-play-item');
    var linelist = parseDomForArray(html, 'body&&.fed-tabs-boxs,0&&.fed-part-rows&&li');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'a&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'bx_line', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(parseDomForArray(conts[i],'ul,-1&&li'));
    }

    setLists({
    lists: lists,
    index: getVar('bx_line', '0'),
    lazy: lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }
    var rule = $("").rule(() => {
        var html = getResCode();

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
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXBX
//JXSAOHUO
var jx_saohuo = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isX5: true,
    });
    eval(fetch(jsUrl));
    //免嗅部分参考自香佬
    var lazy = `@lazyRule=.js:var get =fetch(input,{headers:{'User-Agent':MOBILE_UA}});var src = parseDomForHtml(get,"body&&iframe&&src");var cc=parseDomForHtml(fetch(src,{}),'body&&script,0&&Html').split('endebug()\;')[1].split('var act')[0];eval(cc);var cs='url='+url+'&t='+t+'&key='+key+'&act=0&play=1';var fc=fetch('https://play.hhplayer.com/hhjx/api.php',{headers:{'User-Agent':MOBILE_UA,'referer':'http://play.hhplayer.com/'},body:cs,method:'POST'});var playlink=JSON.parse(fc).url;playlink.indexOf('http')!=-1?playlink+'#isVideo=true':'http://play.hhplayer.com'+playlink`;

    //影片详情
    var details = parseDomForHtml(html, 'body&&.v_info_box&&Html'); //影片信息
    var _img = parseDom(html, ".m_background&&style") //图片

    var _title = parseDomForHtml(details, 'h1&&Text') + '\n' + parseDomForHtml(details, 'p&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(html, '.p_txt&&Text'); //简介
    var dataLine = parseDomForArray(details, 'p')
    //dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });
    var moviename = parseDomForHtml(html, 'h1&&Text')
    searchMovie(moviename);

    //线路
    var conts = parseDomForArray(html,'body&&.play_list||.large_list&&li');
    var linelist = parseDomForArray(html, 'body&&.play_from&&li');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'saohuo_line', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<a[\s\S]*?<\/a>/g));
    }

    setLists({
    lists: lists,
    index: getVar('saohuo_line', '0'),
    lazy: lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }
    var rule = $("").rule(() => {
        var html = getResCode();

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
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXSAOHUO
//JXK1080
var jx_k1080 = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isX5: true,
    });
    eval(fetch(jsUrl));

    var lazy=`@lazyRule=.js:var js = request(input);var url = base64Decode(parseDomForHtml(js, '.mo-play-load&&data-play').slice(3));var jx = parseDomForHtml(js, '.mo-play-load&&data-parse');if(jx.indexOf(\'mm\')!=-1){request(jx+url).match(/"url": "(.*?)"/)[1]}else{url}`

    //影片详情
    var details = parseDomForHtml(html, 'body&&.mo-deta-info&&Html'); //影片信息
    var _img = parseDom(html, 'body&&.mo-situ-pics&&img&&src'); //图片

    var _title = parseDomForHtml(details, 'ul&&li,1&&Text') + '\n' + parseDomForHtml(details, 'ul&&li,0&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details, 'ul&&li,-1&&Text'); //简介
    var dataLine = parseDomForArray(details, 'ul&&li')
    dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });
    var moviename = parseDomForHtml(html, 'h1&&Text')
    searchMovie(moviename);

    //线路
    var conts = parseDomForArray(html,'body&&.mo-movs-item');
    var linelist = parseDomForArray(html, 'body&&.mo-sort-head&&h2&&a');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'a&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'k1080_line', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
    lists: lists,
    index: getVar('k_1080', '0'),
    lazy: lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }
    var rule = $("").rule(() => {
        var html = getResCode();

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
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXK1080
//JXAIDI
var jx_aidi = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isX5: true,
    });
    //eval(fetch(jsUrl));

    var lazy =  `@lazyRule=.embed-responsive&&script&&Html.js:eval(input.replace(/player_.*?={/,'player_aaaa={'));player_aaaa.url+'#isVideo=true#'`;

    //影片详情
    var details = parseDomForHtml(html, 'body&&.content_detail:has(.data)&&Html'); //影片信息
    var _img = parseDomForHtml(html, 'body&&.vodlist_thumb&&img&&data-original'); //图片

    var _title = parseDomForHtml(details, 'li,-2&&Text') + '\n' + parseDomForHtml(details, 'li,-3&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details, 'li,-1&&Text'); //简介
    var dataLine = details.match(/<li[\s\S]*?<\/li>/g)
    dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });
    var moviename = parseDomForHtml(html, '.title&&Text')
    searchMovie(moviename);

    //线路
    var conts = parseDomForArray(html,'body&&.playlist_full:has(.content_playlist)');
    var linelist = parseDomForArray(html, 'body&&.play_source_tab&&a');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'a&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, MY_URL, setUrl]);

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
    var rule = $("").rule(() => {
        var html = getResCode();

        var title = parseDomForHtml(html, '.detail_list_box&&.content_detail,1&&ul&&li,1&&.data_style&&Text');
        var time = parseDomForHtml(html, '.detail_list_box&&.content_detail,1&&ul&&li,1&&em&&Text');
        setResult( title + " | " + time);
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXAIDI
//JXMOGU
var jx_mogu = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isX5: true,
    });
    eval(fetch(jsUrl));

    var lazy =  `@lazyRule=.macplus-player__video&&script&&Html.js:eval(input.replace(/player_.*?={/,'player_aaaa={'));var url=player_aaaa.url;var fr=player_aaaa.from;if(url.indexOf('http')==-1){if(fr=='y1y'){'https://v5.sd7755.xyz/'+url}else if(fr=='y2y'){'https://v1.887yz.xyz/'+url}}else{url}`;

    //影片详情
    var details = parseDomForHtml(html, 'body&&.stui-content&&Html'); //影片信息
    var _img = parseDomForHtml(html, 'body&&.stui-vodlist__thumb&&img&&data-original'); //图片

    var _title = parseDomForHtml(details, 'p,1&&Text') + '\n' + parseDomForHtml(details, 'p,0&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details, 'p,-1&&Text'); //简介
    var dataLine = details.match(/<p[\s\S]*?<\/p>/g)
    dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });
    var moviename = parseDomForHtml(html, 'h1&&Text')
    searchMovie(moviename);

    //线路
    var conts = parseDomForArray(html,'body&&.playlist&&ul');
    var linelist = parseDomForArray(html, 'body&&#playTab&&li');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'a&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'mg_line', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
    lists: lists,
    index: getVar('mg_line', '0'),
    lazy: lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }
    var rule = $("").rule(() => {
        var html = getResCode();

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
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXMOGU
//JXYS757
var jx_ys757 = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isX5: true,
    });
    //eval(fetch(jsUrl));

    var lazy=`@lazyRule=.js:JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]).url`
    //影片详情
    var details = parseDomForHtml(html, 'body&&.play-ail&&Html'); //影片信息
    var _img = parseDomForHtml(html, 'body&&.macplus-vodlist__thumb&&img&&data-original'); //图片

    var _title = parseDomForHtml(details, 'p,0&&Text') + '\n' + parseDomForHtml(details, 'p,4&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details, 'p,-1&&Text'); //简介
    var dataLine = details.match(/<p[\s\S]*?<\/p>/g)
    dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });
    var moviename = parseDomForHtml(html, 'h1&&Text')
    searchMovie(moviename);

    //线路
    var conts = parseDomForArray(html,'body&&.playlist&&ul');
    var linelist = parseDomForArray(html, 'body&&#playTab&&li');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'a&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'ys_757', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
    lists: lists,
    index: getVar('ys_757', '0'),
    lazy: lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }
    var rule = $("").rule(() => {
        var html = getResCode();

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
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXYS757
//JXSKYS
var jx_skys = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isX5: true,
    });
    eval(fetch(jsUrl));

    var lazy=`@lazyRule=.js:var html=parseDomForHtml(request(input),'body&&iframe&&src');if(html.search('xigua')!=-1){var url=parseDomForHtml(fetch(html,{headers:{'Referer':'https://api.sukhd.com'}}),'script&&Html');eval(url.replace('window.location.href','var a'));var html=JSON.parse(request(url)).data.video_list.video_1;try{base64Decode(html.main_url)}catch(e){base64Decode(html.backup_url_1)}}else if(html.search('jxjm')!=-1){let htmls=fetch(html,{headers:{'Referer':'https://www.sukhd.com'}});eval('let url'+htmls.split('var urld')[1].split('var videoUrl')[0]);url}else{''}`

    //影片详情
    var details = parseDomForArray(html, 'body&&.stui-content__detail&&.data'); //影片信息
    var _img = parseDomForHtml(html, 'body&&.pic&&img&&data-original'); //图片

    var _title = parseDomForHtml(details[2], 'Text') + '\n' + parseDomForHtml(details[3], 'Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(html, 'body&&.stui-content__detail&&.desc&&Text'); //简介
    var dataLine = details;
    //dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });
    var moviename = parseDomForHtml(html, 'h3&&Text')
    searchMovie(moviename);

    //线路
    var conts = parseDomForArray(html,'body&&.stui-content__playlist');
    var linelist = parseDomForArray(html, 'body&&.stui-pannel__headnr');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'h3&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'skyy_line', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
    lists: lists,
    index: getVar('skyy_line', '0'),
    lazy: lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }
    var rule = $("").rule(() => {
        var html = getResCode();

        var title = parseDomForHtml(html, '.stui-content__detail&&p,1&&Text');
        setResult(title);
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);


    res.data=d;
    setHomeResult(res);
}
//JXSKYS
//JXMHDY
var jx_mhdy = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isX5: true,
    });
    //eval(fetch(jsUrl));
    var lazy= `@lazyRule=.js:JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]).url`;
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
    var moviename = parseDomForHtml(html, '.title&&Text')
    searchMovie(moviename);
    //线路
    var conts = parseDomForArray(html,'body&&.myui-content__list');
    var linelist = parseDomForArray(html, 'body&&.nav-tabs&&.item&&li');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'a&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'mhys_line', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
    lists: lists,
    index: getVar('mhys_line', '0'),
    lazy: lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }
    var rule = $("").rule(() => {
        var html = getResCode();

        var time = parseDomForHtml(html, '.myui-content__detail&&p,2&&Text');
        setResult(time);
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXMHDY
//JXNNM
var jx_nnm = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isX5: true,
    });
    eval(fetch(jsUrl));
    var lazy=`@lazyRule=#ageframediv&&script&&Html.js:eval(input);player_aaaa.url`;
    //影片详情
    var details = parseDomForHtml(html, 'body&&.baseblock2,0&&Html'); //影片信息
    var _img = parseDom(html, 'body&&.poster&&src'); //图片

    var _title = parseDomForHtml(details, 'li,3&&Text') + '\n' + parseDomForHtml(details, 'li,5&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(html, 'body&&.detail_imform_desc_pre&&Text'); //简介
    var dataLine = details.match(/<li[\s\S]*?<\/li>/g)
    dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });
    var moviename = parseDomForHtml(html, '.detail_imform_name&&Text')
    searchMovie(moviename);
    //线路
    var conts = parseDomForArray(html,'body&&.movurl');
    var linelist = parseDomForArray(html, 'body&&#menu0&&li');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'li&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'nnm_line', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
    lists: lists,
    index: getVar('nnm_line', '0'),
    lazy: lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }
    var rule = $("").rule(() => {
        var html = getResCode();

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
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXNNM
//JXGPZJ
var jx_gpzj = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isX5: true,
    });
    eval(fetch(jsUrl));
    var lazy =  `@lazyRule=.play&&script&&Html.js:eval(input);var url=now;var from = pn;var jxUrl;if(url.indexOf('.m3u8')==-1){if(from=='kbzy'){var res = request(now).match(/main = "(.*?)"/);if(res!=null){jxUrl=res[1];}else{var res = request(now).match(/url:'(.*?)'/);jxUrl=res[1];}'https://vod.bunediy.com'+jxUrl;}else if(from=='bjyun'){var res = request(now).match(/url: '(.*?)'/);if(res!=null){jxUrl=res[1];}url.split('/share')[0]+jxUrl}else if(from=='dbyun'){var res = request(now).match(/main = "(.*?)"/);if(res!=null){jxUrl=res[1];}url.split('/share')[0]+jxUrl}}else{url}`;

    //影片详情
    var details = parseDomForHtml(html, '.content&&Html'); //影片信息
    var _img = parseDomForHtml(details, '.cover&&style').match(/url\((.*?)\)/); //图片

    var _title = parseDomForHtml(details, 'p,0&&Text') + '\n' + parseDomForHtml(details, 'p,1&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(html, '.content-des&&Text'); //简介
    var dataLine = details.match(/<p[\s\S]*?<\/p>/g)
    //dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: 'https://www.guipian456.com'+(_img!=null?_img[1]:'')+'@Referer=',
        dataLine: dataLine
    });
    var moviename = parseDomForHtml(html, '.media-heading&&Text')
    searchMovie(moviename);

    //线路
    var conts = parseDomForArray(html,'body&&.layout:has(.playlist)');
    var linelist = parseDomForArray(html, 'body&&.layout:has(.playlist)');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'h4&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'gpzj_line', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
    lists: lists,
    index: getVar('gpzj_line', '0'),
    lazy: lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }
    var rule = $("").rule(() => {
        var html = getResCode();

       // 播放列表的列表的定位
       var conts = parseDomForArray(html,'body&&.layout:has(.playlist)')[0];
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
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXGPZJ
//JXSUSOU
var jx_susou = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isX5: true,
    });
    eval(fetch(jsUrl));

    //影片详情
    var details = parseDomForHtml(html, 'body&&.detail-a&&Html'); //影片信息
    var _img = parseDomForHtml(html, 'body&&.detail-a&&.lazy&&data-original'); //图片

    var _title = parseDomForHtml(details, 'li,-1&&Text') + '\n' + parseDomForHtml(details, 'li,-2&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(html, 'body&&.ecshow&&Text'); //简介
    var dataLine = details.match(/<li[\s\S]*?<\/li>/g)
    //dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });
    var moviename = parseDomForHtml(html, '.dt-info-box&&h2&&Text')
    searchMovie(moviename);

    var lazy=`@lazyRule=#bofang_box&&script&&Html.js:eval(input);var jsurl=player_aaaa.url;if('zizhi|qq|alizy|qiyi|youku|bilibili|letv|sohu|wasu|migu|pptv|m1095|xigua'.split('|').indexOf(player_aaaa.from)>-1){var jxUrl=request('https://vip.susou.tv/player/?url='+jsurl).match(/"url": "(.*?)"/)[1];jxUrl}else if(/mgtv/.test(player_aaaa.from)){var jxUrl=request('https://titan.mgtv.com.susou.tv/player/?url='+jsurl).match(/"url": "(.*?)"/)[1];jxUrl;}else{jsurl}`;

    //线路
    var conts = parseDomForArray(html,'body&&.play_source&&.content_playlist');
    var linelist = parseDomForArray(html, 'body&&.play_source&&#tag&&a');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'a&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'susou_line', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
    lists: lists,
    index: getVar('susou_line', '0'),
    lazy: lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }
    var rule = $("").rule(() => {
        var html = getResCode();

       // 播放列表的列表的定位
       var conts = parseDomForArray(html,'body&&.play_source&&.content_playlist')[0];
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
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXSUSOU
//JXKBY
var jx_kby = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isX5: true,
    });
    eval(fetch(jsUrl));

    //影片详情
    var details = parseDomForHtml(html, 'body&&.video-info&&Html'); //影片信息
    var _img = parseDomForHtml(html, 'body&&.lazyload&&data-src'); //图片

    var _title = parseDomForHtml(details, '.video-info-items,0&&Text') + '\n' + parseDomForHtml(details, '.video-info-items,1&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details, '.video-info-items,-1&&Text'); //简介
    var dataLine = parseDomForArray(html, 'body&&.video-info&&.video-info-items')
    //dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });
    var moviename = parseDomForHtml(html, 'h1&&Text')
    searchMovie(moviename);

    //线路
    var conts = parseDomForArray(html,'body&&.module-tab-content:has(.sort-item)');
    var linelist = parseDomForArray(html, 'body&&.module-tab-content:has(.tab-item)&&.tab-item');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], '.tab-item&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, '4ky_line', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<a[\s\S]*?<\/a>/g));
    }
    //免嗅直接套的墙佬的偷懒了
    var lazy =`@lazyRule=.js:try{var url = unescape(JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]).url);url.search(/m3u8|mp4/) >= 0 ? url:JSON.parse(fetch(url,{headers:{'User-Agent':'Mozilla/5.0'},redirect:false, withHeaders:true})).headers.location[0]+'#isVideo=true#'}catch(e){input}`;
    setLists({
    lists: lists,
    index: getVar('4ky_line', '0'),
    lazy: lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }

    res.data=d;
    setHomeResult(res);
}
//JXKBY
//JXDIDI
var jx_didi = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isDn: true,
    });
    eval(fetch(jsUrl));

    var lazy =  `@lazyRule=.myui-player__video&&script&&Html.js:eval(input.replace(/player_.*?={/,'player_aaaa={'));var url=player_aaaa.url;var fr=player_aaaa.from; if(fr=='alizy'){var html = fetch('https://api.xkvideo.design/m3u8.php?url='+url);var urll=html.match(/"url":"(.*?)"/)[1];var bt_token = html.match(/bt_token = "(.*?)"/)[1];eval(base64Decode('ZXZhbChnZXRDcnlwdG9KUygpKTsKIAkJCQogIAkJCXZhciB0b2tlbl9rZXk9Q3J5cHRvSlMuZW5jLlV0ZjgucGFyc2UoImR2eVlSUWxuUFJDTWRRU2UiKTsKICAJCQl2YXIgdG9rZW5faXYgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZShidF90b2tlbik7CgogZnVuY3Rpb24gRGVjcnlwdCh3b3JkKSB7CiAgICB2YXIgdyA9IHdvcmQ7CiAgICB2YXIgZGVjcnlwdGVkID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQodywgdG9rZW5fa2V5LAogICAgICAgIHsKICAgICAgICAgJ2l2Jzp0b2tlbl9pdiwKICAgICAgICAnbW9kZSc6Q3J5cHRvSlMubW9kZS5DQkMKICAgICAgICB9KTsKICAgICByZXR1cm4gZGVjcnlwdGVkLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTsKfQ=='));Decrypt(urll)}else if(url.match(/youku|mgtv|ixigua|qq.com|qiyi|migu|bili|sohu|pptv|letv|le/)){var jsUrl=getVar('jsUrl');eval(fetch(jsUrl));aytmParse(url)}else{url}`;
    //影片详情
    var details = parseDomForHtml(html, '.myui-content__detail&&Html'); //影片信息
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
    var moviename = parseDomForHtml(html, 'h1&&Text');
    searchMovie(moviename);

    //线路
    var conts = parseDomForArray(html,'body&&.myui-content__list');
    var linelist = parseDomForArray(html, 'body&&.nav&&li');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'a&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'ddyy_line', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
    lists: lists,
    index: getVar('ddyy_line', '0'),
    lazy: lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }
    var rule = $("").rule(() => {
        var html = getResCode();

        var time = parseDomForHtml(html, '.myui-content__detail&&p,-4&&Text');
        setResult(time);
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXDIDI
//JXYMYS
var jx_ymys = ()=>{
    var res ,d ,html, jsUrl, setUrl; 

    eval(fetch('hiker://files/rules/black/black.js'));
    init({
    isX5: true,
    isDn: true
    });
    eval(fetch(jsUrl));

    var lazy = `@lazyRule=.mo-play-load&&data-play.js:url = base64Decode(input.slice(3));if(url.match(/youku|mgtv|ixigua|qq.com|qiyi|migu|bili|sohu|pptv|letv|le/)){var jsUrl=getVar('jsUrl');eval(fetch(jsUrl));aytmParse(url)}else if(url.match(/.html/)){var input=url;`+lazy+`}else{url}`;//ayt断念插件

    //影片详情
    var details = parseDomForHtml(html, 'body&&.mo-main-info&&dd&&ul&&Html'); //影片信息
    var _img = parseDomForHtml(html, 'body&&.mo-main-info&&.mo-situ-pics&&img&&src'); //图片

    var _title = parseDomForHtml(details, 'li,0&&Text') + '\n' + parseDomForHtml(details, 'li,1&&Text') + '\n'; //电影信息 导演 + 主演
    var _desc = parseDomForHtml(details, 'li,-1&&Text'); //简介
    var dataLine = details.match(/<li[\s\S]*?<\/li>/g)
    dataLine.pop();
    setMovieDetail({
        _title: _title,
        _desc: _desc,
        _img: _img,
        dataLine: dataLine
    });
    //body&&.mo-main-info&&dd&&h1
    var moviename = parseDomForHtml(html, 'body&&.mo-main-info&&dd&&h1&&Text');
    searchMovie(moviename);


    //线路
    var conts = parseDomForArray(html,'body&&.mo-cols-lays:has(.mo-movs-item)&&.mo-movs-item');
    var linelist = parseDomForArray(html, 'body&&.mo-cols-lays:has(.mo-movs-item)&&h2&&a');
    var tabs = [];
    for (var i in linelist) {
    tabs.push(parseDomForHtml(linelist[i], 'a&&Text').replace(/.*独家专用线路/,'') );
    }
    setTabs([tabs, 'ymys_line', setUrl]);

    //选集
    var lists =[];
    for (var i in conts) {
    lists.push(conts[i].match(/<li[\s\S]*?<\/li>/g));
    }

    setLists({
    lists: lists,
    index: getVar('ymys_line', '0'),
    lazy: lazy
    });

    d.push({title: '<br>', col_type: 'rich_text'});
    //}catch(e){ }
    //body&&.mo-main-info&&dd&&ul&&li,-2
    var rule = $("").rule(() => {
        var html = getResCode();

        // 播放列表的列表的定位
        var conts = parseDomForArray(html,'body&&.mo-cols-lays:has(.mo-movs-item)&&.mo-movs-item')[0];
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
        var time = parseDomForHtml(html, "body&&.mo-main-info&&dd&&ul&&li,-2&&Text").replace("时间：", "");
        setResult("更新至: " + title + " | " + time);
    }).replace("@rule=", "");
    // setError(rule)
    setLastChapterRule(rule);

    res.data=d;
    setHomeResult(res);
}
//JXYMYS