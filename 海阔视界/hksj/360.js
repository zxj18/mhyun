function EJ() {
    var d = [];
    var html = getResCode();
    d.push({
        desc: '240&&float',
        col_type: 'x5_webview_single'
    });

    var config = fetch('hiker://files/cache/MyParseSet.json');
    var jsUrl = 'https://code.aliyun.com/AI957/Hiker/raw/master/v/CloudParse-V2_Dn.js';
    if (config && fetch(JSON.parse(config).cj)) {
        jsUrl = JSON.parse(config).cj;
    } eval(fetch(jsUrl));
    var 解析口 = `hiker://empty#noHistory#@rule=js:var d = [];d.push({desc: '200',url: 'file:///storage/emulated/0/Android/data/com.example.hikerview/files/Documents/jiexi/jiexi.html',col_type: 'x5_webview_single'});var titles = fetch("hiker://files/jiexi/jiexi.txt", {}).split(/\\n/);for(var i = 0; i < titles.length; i++){var t = titles[i].split("&&");d.push({title:fetch("hiker://files/jx_cache.txt",{}) == t[1] ? t[0] + "‘‘（当前）’’" : t[0],desc:t[1],url:t[1] + '@lazyRule=.js:writeFile("hiker://files/jx_cache.txt",input);refreshPage();"toast://修改成功"',col_type: 'text_1'});}setResult(d)`;
    putVar('解析口', 解析口);

    var title = parseDomForHtml(html, '.cp-info-main&&p,3&&p&&Text').substring(0, 15) + '\n' + parseDomForHtml(html, '.cp-info-main&&p,2&&p&&Text').substring(0, 15) + '\n' + parseDomForHtml(html, '.cp-info-main&&p,1&&p&&Text').substring(0, 15);

    d.push({
        title: parseDomForHtml(html, '.cp-info-main&&p,3&&p&&Text').substring(0, 15) + '\n' + parseDomForHtml(html, '.cp-info-main&&p,2&&p&&Text').substring(0, 15) + '\n' + parseDomForHtml(html, '.cp-info-main&&p,1&&p&&Text').substring(0, 15),
        desc: parseDomForHtml(html, '.cp-info-main&&p,0&&p&&Text') + "\t\t\t点击修改解析口",
        img: parseDom(html, '.img&&img&&src'),
        url: (getVar('bfq') == '1' ? setUrl : getVar('解析口')),
        col_type: 'movie_1_vertical_pic'
    });
    d.push({ col_type: "rich_text", title: `当前模式为：<a href="hiker://empty@lazyRule=.js:putVar('bfq',getVar('bfq')=='1'?'0':'1');refreshPage();if(getVar('bfq')=='1'){refreshX5WebView('')}'toast://已切换模式';">` + (getVar('bfq') == '1' ? "默认播放器" : "X5播放器") + "</a>" });
    d.push({ col_type: 'blank_block' });

    /*
    var des_desc = parseDomForHtml(html, '.cp-describe&&Text');
        if (des_desc.length > 60) {
                des_desc = des_desc.replace(des_desc, des_desc.substring(0, 60) + "......");
          }
    
    d.push({
              title: des_desc,
              col_type: 'long_text'
    });
    */

    var lazy = `@lazyRule=.js:if(getVar('bfq')=='0'){var jx = fetch("hiker://files/jx_cache.txt",{});refreshX5WebView(jx+input);'toast://播放中'}else{refreshX5WebView('');` + lazy + `}`;
    //var lazy = `@lazyRule=.js:if(getVar('bfq')=='0'){var jx = fetch("hiker://files/jx_cache.txt",{});refreshX5WebView(jx+input);'toast://播放中'}else{refreshX5WebView('');JSON.parse(request('http://www.dtjug.cn/home/api?type=ys&uid=22486&key=cdegmqxyEGHJMPQRV5&url='+input)).url}`;

    try {
        if (html.includes('data-cat')) {

            var aaa = (parseDomForArray(html, '#js-sitebar&&select') + '').match(/data-cat=\"(.*?)\" data-id=\"(.*?)\"/);
            var bbb = (parseDomForArray(html, '#js-sitebar&&select') + '').match(/data-site=\"(.*?)\"/g);
            var urls = [];
            for (let b of bbb) {
                var tongji = 'http://m.360kan.com/coverpage/get' + html.match(/coverpage\/(.*?)\./)[1].replace('dianying', 'Dianshi') + 'LinksBySite?id=';
                urls.push({ url: tongji + aaa[2] + '&cat=' + aaa[1] + '&site=' + b.match(/data-site=\"(.*?)\"/)[1] });
            }
            var batchResult = batchFetch(urls);

            var tabs = [];
            var lists = [];
            var conts = parseDomForArray(html, '#js-sitebar&&.item');
            for (var i in batchResult) {
                tabs.push(parseDomForHtml(conts[i], '.item&&Text'))
                lists.push(parseDomForArray(JSON.parse(batchResult[i]).data, '.items&&li'))
            }
            function setTabs(tabs, vari) {
                d.push({
                    title: '‘‘线路’’',
                    url: `#noLoading#@lazyRule=.js:let conf = getVar('折叠');if(conf=='关'){putVar({key:'折叠', value:'开'});}else{putVar({key:'折叠', value:'关'})};refreshPage(false);'toast://切换成功';'#noHistory#hiker://empty'`,
                    col_type: 'text_center_1'
                })
                if (getVar('折叠') == '开' || getVar('折叠') == '') {
                    for (var i = 0; i < tabs.length; i++) {
                        var url = "#noLoading#@lazyRule=.js:putVar('" + vari + "', '" + i + "');refreshPage(false);'toast://切换成功！';'#noHistory#hiker://empty'";
                        var title = tabs[i].length > 0 ? tabs[i] : '风行网';
                        d.push({
                            title: getVar(vari, '0') == i ? '““' + title + '””' : title,
                            url: url,
                            col_type: 'text_2'
                        })
                    }
                    d.push({
                        col_type: 'line_blank'
                    })
                }
            }
            function setLists(lists, index) {
                d.push({
                    title: '‘‘选集’’',
                    url: `#noLoading#@lazyRule=.js:let conf = getVar('shsort');if(conf==' - 逆序'){putVar({key:'shsort', value:' - 正序'});}else{putVar({key:'shsort', value:' - 逆序'})};refreshPage(false);'toast://切换排序成功';'#noHistory#hiker://empty'`,
                    col_type: 'text_center_1'
                })
                var list = lists[index];
                if (getVar('shsort') == ' - 逆序') {

                    for (var j = list.length - 1; j >= 0; j--) {
                        d.push({
                            title: parseDomForHtml(list[j], 'Text'),
                            url: parseDom(list[j], 'a&&href') + lazy,
                            col_type: list.length > 3 ? 'text_4' : 'text_2'
                        });
                    }
                } else {
                    for (var j = 0; j < list.length; j++) {
                        d.push({
                            title: parseDomForHtml(list[j], 'Text'),
                            url: parseDom(list[j], 'a&&href') + lazy,
                            col_type: list.length > 3 ? 'text_4' : 'text_2'
                        });
                    }
                }
                if (html.includes('观看正片')) {
                    d.push({
                        title: '观看正片',
                        url: parseDomForHtml(conts[index], '.item&&data-url') + lazy,
                        col_type: list.length > 3 ? 'text_3' : 'text_2'
                    });
                }
            }
            setTabs(tabs, MY_URL);
            setLists(lists, getVar(MY_URL, '0'));

            /*
                    for (var i in batchResult) {
                        var conts = parseDomForArray(html, '#js-sitebar&&.item');
                        var list = parseDomForArray(JSON.parse(batchResult[i]).data, '.items&&li');
                        var title = parseDomForHtml(conts[i], '.item&&Text');
                        d.push({
                            title: title.length > 0 ? title : '风行网',
                            url: parseDomForHtml(conts[i], '.item&&data-url'),
                            col_type: 'text_1'
                        });
                        for (var j in list) {
                            d.push({
                                title: parseDomForHtml(list[j], 'Text'),
                                url: parseDom(list[j], 'a&&href') + lazy,
                                col_type: list.length > 3 ? 'text_4' : 'text_2'
                            });
                        }
                        if (html.includes('观看正片')) {
                            d.push({
                                title: '观看正片',
                                url: parseDomForHtml(conts[i], '.item&&data-url') + lazy,
                                col_type: list.length > 3 ? 'text_3' : 'text_2'
                            });
                        }
                    }
                    */
        } else {
            //        var list = parseDomForArray(html, '.cp-dsseries||.p-dianying-wrap||.cp-zyseries&&a:not(:contains(集)):not(:contains(月)):not(:contains(展开))');
            var list = parseDomForArray(html, '.items||#js-zyseries||.p-dianying-wrap&&a:not(.js-txt):not(.expand-all)');
            for (var j in list) {
                var title = parseDomForHtml(list[j], 'Text');
                d.push({
                    title: title,
                    url: parseDom(list[j], 'a&&href') + lazy,
                    col_type: title.length < 4 ? 'text_4' : 'text_2'
                });
            }
        }
    } catch (e) { }
    setResult(d)
}
function SYYJ() {
    var d = [];
    d.push({
        desc: '60&&float',
        url: 'file:///storage/emulated/0/Android/data/com.example.hikerview/files/Documents/tc.html',
        col_type: 'x5_webview_single'
    })
    //  d.push({ col_type: 'line' });


    if (getVar('searchKeyword') == "") {
        var conts = parseDomForArray(getResCode(), 'body&&.modbox.mb-thi:contains(更多)');
        for (var i in conts) {
            var list = parseDomForArray(conts[i], 'ul&&li');
            d.push({
                title: '‘‘’’' + parseDomForHtml(conts[i], 'h2&&Text').replace("更多>", "") + " <small><small><font color='#1db69a'>更多></font></small></small>",
                url: $(parseDom(conts[i], 'a&&href') + 'Data?pageno=fypage').rule(() => {
                    var d = [];
                    var list = parseDomForArray(JSON.parse(getResCode()).data.list, 'body&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], 'h3&&Text'),
                            img: parseDom(list[i], 'img&&src'),
                            desc: parseDomForHtml(list[i], 'p&&Text').replace('更新至', ''),
                            url: $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/jiexi/360.js')); EJ() }),
                            col_type: 'movie_3'
                        })
                    }
                    setResult(d)
                }),
                col_type: "text_center_1"
            });
            for (var j in list) {
                d.push({
                    title: parseDomForHtml(list[j], '.title&&Text'),
                    img: parseDom(list[j], '.mb-img&&style'),
                    desc: parseDomForHtml(list[j], 'span&&Text'),
                    url: parseDom(list[j], 'a&&href'),
                    col_type: "movie_3"
                });
            }
        }
    } else {
        var html = request('http://m.360kan.com/search/index?kw=' + getVar('searchKeyword'));
        var list = parseDomForArray(html, 'body&&.search-item');

        for (var i in list) {

            d.push({
                title: parseDomForHtml(list[i], 'h3&&Text'),
                desc: parseDomForHtml(list[i], '.info-link&&Text'),
                img: parseDom(list[i], 'img&&src'),
                url: parseDom(list[i], 'a&&href')
            });
        }
        d.push({ col_type: 'line_blank' });
        d.push({ title: "<h4 style='text-align:center'>到底了呢！</h4>", col_type: "rich_text" });

    }
    setResult(d)
}

function SSYJ() {
    var d = [];
    var list = parseDomForArray(getResCode(), 'body&&.search-item');
    for (var j in list) {
        d.push({
            title: parseDomForHtml(list[j], 'h3&&Text'),
            desc: parseDomForHtml(list[j], '.base-info&&Text'),
            content: parseDomForHtml(list[j], '.search-item-info&&Text'),
            img: parseDom(list[j], 'img&&src'),
            url: parseDom(list[j], 'a&&href')
        });
    }
    setResult(d);
}