//收藏 -- start
//MYSTORE
var hisData = {
    'taotao': [{title:'',url:'', img:''}]
}
var iniHisData = ()=>{
    var myStore = fetch("hiker://files/cache/MyStoreData.json",{});
    hisData = myStore == '' ? {} : JSON.parse(myStore);
}

var saveHisData = ()=>{
    writeFile("hiker://files/cache/MyStoreData.json", JSON.stringify(hisData, null, 4));
}

var topItem = (page_key, val)=>{
    var item, index;
    for(var i in hisData[page_key]){
        if(hisData[page_key][i].title == val){
            item = hisData[page_key][i];
            index = i;
            break;
        }
    }

    hisData[page_key].splice(index, 1);
    hisData[page_key].unshift(item);
    saveHisData();
}


var addPageItem = (page_key, data)=>{
    if(hisData[page_key] ==undefined) { 
        hisData[page_key] = [];
    }
    for(var i in hisData[page_key]){
        if(hisData[page_key][i].title == data.title){
            return false;
        } 
    }
    hisData[page_key].unshift(data);
    saveHisData();
    return true;
}

var delPageItem = (page_key, val)=>{
    for(var i in hisData[page_key]){
        if(hisData[page_key][i].title == val){
            item = hisData[page_key][i];
            index = i;
            break;
        }
    }
    hisData[page_key].splice(index, 1); 
    saveHisData();
}
//MYSTORE
//收藏 -- end

/**
 *@desc: 初始化 
 */
var init = (iniData)=>{
    var{ isX5, isDn } = iniData;
    res = {}; d = [];
    html = getResCode();
    if(isDn!=undefined){
        config = fetch('hiker://files/cache/MyParseSet.json');
        if(config == '' || !fetch(JSON.parse(config).cj)){
             jsUrl = 'https://code.aliyun.com/AI957/Hiker/raw/master/v/CloudParse-V2_Dn.js';
        }else{
             jsUrl = JSON.parse(config).cj;
        }  
    }
    if(isX5!=undefined){
        d.push({
            desc:'240&&float',
            col_type: 'x5_webview_single'
        });
    }
 }

/**
 *@desc: 设置线路标题
 *@param: tabs 线路标题的数组，如tabs=['线路一','线路二','线路三']
 *@param: vari 自定义的全局变量名称，建议使用MY_URL，避免出现重复变量造成未知bug
 *@param: setUrl 切换插件的链接，一般默认使用断佬插件
 *@warning: 里面代码无需更改，只传递参数调用即可
 */
var setTabs = ([tabs, vari, setUrl])=>{
    d.push({
        title: '‘‘📺点击切换线路’’',
        url:setUrl!=undefined?setUrl:'toast://阿巴阿巴😮😮😵',
        col_type: 'text_center_1'
    });
    for (var i = 0; i < tabs.length; i++) {
        var url = "hiker://empty@lazyRule=.js:putVar('"+vari+"', '"+i+"');refreshPage();'toast://切换成功！'";
        d.push({
            title: (getVar(vari, '0')==i?'❣️':'') + tabs[i],
            url: url,
            col_type: tabs.length>2?'text_3':'text_2'
        });
    }
}

/**
 *@desc: 设置线路列表
 _dnPar 使用先导入断佬插件 ，play__data节点
 */
var setLists = (dataObj)=>{
    let hUrl = `@lazyRule=.js:let conf = getVar('shsort');if(conf==' - 正序'){putVar({key:'shsort', value:' - 逆序'});}else{putVar({key:'shsort', value:' - 正序'})};refreshPage(false);'toast://切换排序成功'`;
    //var lazy =  `@lazyRule=body&&.player_video&&script&&Html.js:eval(input.replace(/player_.*?={/,'player_aaaa={'));var url=player_aaaa.url;var jx='https://ssl.vip.cqzyw.net:11551/?url='+url;refreshX5WebView(jx);'toast://播放中';`;
    var { lists, _text , _url , index, _dnPar, lazy } = dataObj;
    var _text = _text || 'a&&Text';
    var _url = _url || 'a&&href';

    d.push({
        title: '‘‘选〰️集’’',
        url: hUrl,
        col_type: 'text_center_1'
    });
    var list = lists[index];
    if (getVar('shsort') == ' - 逆序') {
        for (var j = list.length - 1; j >= 0; j--) {
            var jurl = parseDom(list[j], _url);
            d.push({
                title: parseDomForHtml(list[j],_text),
                url:_dnPar!=undefined?playParse.player_xx(jurl, _dnPar) : jurl+lazy,
                col_type: list.length >3?'text_3':'text_2'
            });
        }
    } else {
        for (var j = 0; j < list.length; j++) {
            var jurl = parseDom(list[j], _url);
            d.push({
                title: parseDomForHtml(list[j], _text),
                url: _dnPar!=undefined?playParse.player_xx(jurl, _dnPar) : jurl+lazy,
                col_type: list.length >3?'text_3':'text_2'
            });
        }
    }
}

/**
 *@desc: 生成影片信息 
 */
//BLDETAIL
var setMovieDetail = (dataObj)=>{
    var { _title, _desc, _img, dataLine, hasStore, movieName} = dataObj;
    var sUrl, data={};
    if(hasStore!=undefined){
        data={
            title: movieName,
            url: MY_URL,
            img: _img
        };
        putVar('temp_data', JSON.stringify(data))
        sUrl=`@lazyRule=.js:eval(fetch('hiker://files/rules/zyf/black.js'));iniHisData();var r=addPageItem(getVar('page_key'), JSON.parse(getVar('temp_data')));refreshPage(false);r?'toast://收藏成功😮😮😮' :'toast://已存在😮😮😵'`
        
    }
    d.push({
        title: _title,
        desc: _desc.substr(0,20),
        img: _img,
        url: hasStore!=undefined? sUrl : _img + '#.jpg',
        col_type: 'movie_1_vertical_pic'
    });

    d.push({
        title: '‘‘’’<small><font color="#585858">简介：' + _desc.substr(0, 30).replace('简介：', '') + '...</font><small><font color="blue">查看详情</font></small></small>',
        url: $('hiker://empty#').rule((data)=>{
            var nRes = {};
            var nd=[];
            var detailList = data[0];
            for(var i = 0; i < detailList.length - 1; i++){
                nd.push({
                    title: parseDomForHtml(detailList[i], 'Text'), 
                    col_type: 'text_1'
                })
            }
            nd.push({
                title: "影片简介: " + data[1].replace('简介：', ''), 
                col_type: 'long_text'
            });
            nRes.data = nd;
            setHomeResult( nRes )
         }, [dataLine, _desc]),
        col_type: 'text_1'
    });
}
//BLDETAIL
/**
 * 获取Url参数
*/
var getParam = function (url, name) {
    //alert(search);
    var pattern = new RegExp("[?&]" + name + "\=([^&]+)", "g");
    var matcher = pattern.exec(url);
    var items = null;
    if (null != matcher) {
        try {
            items = decodeURIComponent(decodeURIComponent(matcher[1]));
        } catch (e) {
            try {
                items = decodeURIComponent(matcher[1]);
            } catch (e) {
                items = matcher[1];
            }
        }
    }
    return items;
}

/**
 *@desc: 设置喜欢
 */
var setLikeTabs = (tabs, vari)=>{
    d.push({
        title: '‘‘猜你●‿●喜欢’’',
        url: 'toast://我猜你喜欢小黑',
        col_type: 'text_center_1'
    })
    var title = '';
    for (var i = 0; i < tabs.length; i++) {
        var url = "hiker://empty@lazyRule=.js:putVar('"+vari+"', '"+i+"');refreshPage();'toast://切换成功！'";
        d.push({
            title: (getVar(vari, '0')==i?'❣️':'') + tabs[i],
            url: url,
            col_type: tabs.length>2?'text_3':'text_2'
        })
    }
    d.push({title: '<br>', col_type: 'rich_text'});
}
