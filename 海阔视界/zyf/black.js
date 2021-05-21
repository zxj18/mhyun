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

 var setNav = (navData)=>{
    /*模板参考晓大佬，也可能是另一个大佬，在此致谢*/
    var {fycalss, fyarea, fyyear, fysort, myurl, pageType} = navData;
    //---------点击折叠位置的名称----------------//
    const fyclass_1 = ["分类"];
    const fyarea_1= ["地区"];
    const fyyear_1= ["类型"];
    const fysort_1= ["排序"];


    //----------------------分类组-----------------------//
    const fyclass_cont='电影&电视剧&动漫&综艺';
    const fyclass_list='1&2&3&4';

    //-----------------------地区组----------------------//
    const fyarea_cont='全部&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他';

    const fyarea_list='&大陆&香港&台湾&美国&法国&英国&日本&韩国&德国&泰国&印度&意大利&西班牙&加拿大&其他';

    //---------------------年代组------------------------//
    const fyyear_cont='全部&剧情&喜剧&爱情&恐怖&动作&科幻&剧情&战争&警匪&犯罪&动画&奇幻&武侠&冒险&枪战&恐怖&悬疑&惊悚&经典&青春&文艺&微电影&古装&历史&运动&农村&儿童&网络电影';

    const fyyear_list='&剧情&喜剧&爱情&恐怖&动作&科幻&剧情&战争&警匪&犯罪&动画&奇幻&武侠&冒险&枪战&恐怖&悬疑&惊悚&经典&青春&文艺&微电影&古装&历史&运动&农村&儿童&网络电影';

    //-----------------------排序组----------------------//
    const fysort_cont ='最新&人气&推荐';
    const fysort_list ='time&hits&score'; 
    //-----------------------第一页页码----------------------//
    /****
    *  如不填会不显示页面
    *  根据链接实际修改，
    *  例如
    *     const pageType='-1---/';  
    *     const pageType='page=1';  
    ****/
    

    //分类用的
    const fyclass_conts =fycalss.conts.split('&');
    const fyclass_lists =fyclass.list.split('&');

    var fyclass_data =[];
    for (var i in fyclass_conts) {
        fyclass_data.push(fyclass_conts[i]);
    }
    var fyclass_jsda =[];
    for (var i in fyclass_lists) {
        fyclass_jsda.push(fyclass_lists[i]);
    }

    //链接网址，不需要修改
    /*myurl = 'https://zhuiju.xkvideo.club/vodshow/分类-地区-排序-年代-----fypage---/';*/
    var urll=myurl.replace('分类',getVar('fyClass_jsda', fyclass_jsda[0])).replace('年代',fyyear_se).replace('排序',fysort_se).replace('地区',fyarea_se);

    //初始化分类
    if(MY_URL.indexOf(pageType)>-1){ //判断页码是否是第一页
        if(fycalss!=undefined){
            var title = '';
            for (var i = 0; i < fyclass_1.length; i++) {
                var url = "hiker://empty@lazyRule=.js:putVar('fyClass', getVar('fyClass', ' 已折叠') == ' 已展开' ? ' 已折叠': ' 已展开');refreshPage();'toast://切换成功！'";
                var flag= getVar('fyClass', ' 已折叠')== ' 已展开'?'  🙉':'  🙈';
                d.push({
                    title: "““””<b>"+'<span style="color: #48D1CC">'+fyclass_1[i] + flag+'</span></b>',
                    url: url,
                    col_type:'flex_button'
                })
                if (getVar('fyClass', ' 已折叠') == ' 已展开') {
                    for (var a = 0; a < fyclass_data.length; a++) {
                            
                        var title=fyclass_data[a]==getVar('fyClass_data', fyclass_data[0])?"““””<b>"+'<span style="color: #48D1CC">'+fyclass_data[a]+'</span></b>':fyclass_data[a];
                            d.push({
                                title:title,
                                url: $("#noLoading#").lazyRule((fyclass_data,fyclass_jsda)=>{
                                    putVar("fyClass_data",fyclass_data);
                                    putVar("fyClass_jsda",fyclass_jsda);
                                    refreshPage(false);
                                    return "hiker://empty"
                                    }, fyclass_data[a],fyclass_jsda[a]),
                            col_type:'flex_button'
                            });
                    }
                }else{
                    d.push({
                            title: "““””<b>"+'<span style="color: #48D1CC">'+getVar('fyClass_data', fyclass_data[0])+'</span></b>',
                            col_type:'flex_button'
                    });
                }
            }
        }
    }


    putVar('pageUrl', urll);

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
