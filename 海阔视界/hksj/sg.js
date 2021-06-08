function EJ() {

    var d = [];

        var config = fetch('hiker://files/cache/MyParseSet.json');

        var jsUrl = 'https://code.aliyun.com/AI957/Hiker/raw/master/v/CloudParse-V2_Dn.js';

        if (config && fetch(JSON.parse(config).cj)) {

            jsUrl = JSON.parse(config).cj;
        }
        eval(fetch(jsUrl));
//    if (!getVar('fftq')) {
   //     var lazy = `@lazyRule=.js:var html = fetch(input).match(/window.open\\('(.*?)'/)[1];if(html.indexOf('sa.sogou')!=-1){parseDomForHtml(fetch(html),'video&&src')}else if(html.indexOf('xigua')!=-1){html}else{eval(fetch('hiker://files/rules/js/Messy-parsing.js'));player(html)}`;
 //   } else {
        var lazy = `@lazyRule=.js:var html = fetch(input).match(/window.open\\('(.*?)'/)[1];if(html.indexOf('sa.sogou')!=-1){parseDomForHtml(fetch(html),'video&&src')}else if(html.indexOf('xigua')!=-1){html}else{var input = html;` + lazy + `}`;
 //   }
    var html = JSON.parse(getResCode().split('window.__INITIAL_STATE__=')[1].split(';(function(){var s;')[0]).detail.itemData;

    d.push({
        title: ((html.score ? '评分：' + html.score + '\t\t\t' : html.emcee ? '主持：' + html.emcee : '') + (html.year ? '年代：' + html.year : '') + '\n' + (html.zone + '\t' + html.style).substring(0, 15) + '\n' + (html.starring ? '主演：' + html.starring.substring(0, 15) : '')).replace(/undefined/g, ''),
        desc: html.release_time || html.update_wordstr || html.introduction,
        img: html.v_picurl,
        url: setUrl,
        col_type: 'movie_1_vertical_pic'
    })
    try {
        var tabs = [];
        var lists = [];

        var conts = html.play.item_list;

        for (var i in conts) {
            lists.push(conts[i].info)
            tabs.push(conts[i].sitename[0])
        }

        function setTabs(tabs, vari) {
            /*
            d.push({
                title: '‘‘线路’’',
                url: `#noLoading#@lazyRule=.js:let conf = getVar('折叠');if(conf=='关'){putVar({key:'折叠', value:'开'});}else{putVar({key:'折叠', value:'关'})};refreshPage(false);'toast://切换成功';'#noHistory#hiker://empty'`,
                col_type: 'text_center_1'
            })
            if (getVar('折叠') == '开' || getVar('折叠') == '') {
*/
            for (var i in tabs) {
                var url = "#noLoading#@lazyRule=.js:putVar('" + vari + "', '" + i + "');refreshPage(false);'toast://切换成功！';'#noHistory#hiker://empty'";
                d.push({
                    title: getVar(vari, '0') == i ? '‘‘' + tabs[i] + '’’' : tabs[i],
                    //     title: tabs[i] + (getVar(vari, '0') == i ? '✅' : ''),
                    url: url,
                    col_type: 'text_3'
                })
            }
            d.push({ col_type: 'line_blank' })
            //         }
        }

        function setLists(lists, index) {
            d.push({
                title: '‘‘选集’’',
                url: `#noLoading#@lazyRule=.js:let conf = getVar('shsort');if(conf==' - 逆序'){putVar({key:'shsort', value:' - 正序'});}else{putVar({key:'shsort', value:' - 逆序'})};refreshPage(false);'toast://切换排序成功';'#noHistory#hiker://empty'`,
                col_type: 'text_center_1'
            })
            if (conts[i].info || html.play_from_open_index) {
                var list = lists[index];
                if (list) {
                    if (getVar('shsort') == ' - 逆序') {

                        for (var j = list.length - 1; j >= 0; j--) {
                            if (!list[j].index == '0') {
                                d.push({
                                    title: list[j].index,
                                    url: 'https://v.sogou.com' + list[j].url + lazy,
                                    col_type: "text_4"
                                })
                            }
                        }
                    } else {
                        for (var j = 0; j < list.length; j++) {
                            if (!list[j].index == '0') {
                                d.push({
                                    title: list[j].index,
                                    url: 'https://v.sogou.com' + list[j].url + lazy,
                                    col_type: "text_4"
                                })
                            }
                        }
                    }
                }
                if (html.play_from_open_index) {
                    var arr = [];
                    zy = html.play_from_open_index.item_list[index];

                    for (var ii in zy.date) {

                        date = zy.date[ii];

                        day = zy.date[ii].day;

                        for (j in day) {

                            dayy = day[j][0] >= 10 ? day[j][0] : "0" + day[j][0];

                            Tdate = date.year + date.month + dayy;

                            arr.push(Tdate);
                            arr.sort(function (a, b) { return b - a });
                        }
                    }
                    for (var k = 0; k < arr.length; k++) {
                        url = "https://v.sogou.com/vc/eplay?query=" + arr[k] + "&date=" + arr[k] + "&key=" + html.dockey + "&st=5&tvsite=" + conts[index].site;

                        d.push({
                            title: "第" + arr[k] + "期",
                            col_type: "text_2",
                            url: url + lazy
                        });
                    }
                }
            } else if (conts[index].site) {
                d.push({
                    title: conts[index].sitename[0],
                    img: conts[index].picurl || 'http://dlweb.sogoucdn.com/video/wap/static/img/logo/' + conts[index].sitename[1],
                    url: 'https://v.sogou.com' + conts[index].url + lazy,
                    col_type: !conts[index].picurl ? "icon_2" : "movie_2"
                })
            }
        }
        setTabs(tabs, MY_URL);
        setLists(lists, getVar(MY_URL, '0'));
    } catch (e) {
        var img = html.photo.item_list;
        d.push({
            title: '‘‘本片无选集’’',
            col_type: "text_center_1"
        })
        for (var i in img) {
            d.push({
                img: img[i],
                col_type: "pic_1_full"
            })
        }
    }
    setResult(d)
}

function SYYJ() {
    var d = [];
    d.push({
        desc: '60&&float',
        url: 'file:///storage/emulated/0/Android/data/com.example.hikerview/files/Documents/tc.html',
        col_type: 'x5_webview_single'
    })

    if (getVar('searchKeyword') == "") {

        var conts = parseDomForArray(getResCode(), '#container&&.section');
        for (var i in conts) {
            var list = parseDomForArray(conts[i], '.sort_lst&&li');
            d.push({
                title: '‘‘’’' + parseDomForHtml(conts[i], '.sort_nav_tit&&Text') + " <small><small><font color='#1db69a'>更多></font></small></small>",
                url: $(parseDom(conts[i], '.sort_nav_more&&href') + '&page=fypage').rule(() => {
                    var d = [];
                    var list = parseDomForArray(getResCode(), '.sort_lst&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], 'img&&alt'),
                            img: parseDom(list[i], 'img&&src'),
                            desc: parseDomForHtml(list[i], 'a&&Text'),
                            url: $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/jiexi/sougou.js')); EJ() }),
                            col_type: 'movie_3'
                        })
                    }
                    setResult(d)
                }),
                col_type: "text_1"
            });
            for (var j in list) {
                d.push({
                    title: parseDomForHtml(list[j], 'img&&alt'),
                    img: parseDom(list[j], 'img&&src'),
                    desc: parseDomForHtml(list[j], 'a&&Text'),
                    url: parseDom(list[j], 'a&&href'),
                    col_type: "movie_3"
                })
            }
        }
        /*
        var tabs = [];
        var lists = [];

        var conts = parseDomForArray(getResCode(), '#container&&.section');

        for (var i in conts) {
            lists.push(parseDomForArray(conts[i], '.sort_lst&&li'))
            tabs.push(parseDomForHtml(conts[i], '.sort_nav_tit&&Text'))
        }

        function setTabs(tabs, vari) {

            for (var i in tabs) {
                var url = "#noLoading#@lazyRule=.js:putVar('" + vari + "', '" + i + "');refreshPage(false);'toast://切换成功！';'#noHistory#hiker://empty'";
                d.push({
                    title: getVar(vari, '0') == i ? '‘‘' + tabs[i] + '’’' : tabs[i],
                    url: url,
                    col_type: 'text_4'
                })
            }
            //         d.push({col_type: 'line_blank'})
        }

        function setLists(lists, index) {

            var list = lists[index];

            for (var j in list) {
                d.push({
                    title: parseDomForHtml(list[j], 'img&&alt'),
                    img: parseDom(list[j], 'img&&src'),
                    desc: parseDomForHtml(list[j], 'a&&Text'),
                    url: parseDom(list[j], 'a&&href'),
                    col_type: "movie_3"
                });
            }
            d.push({
                //         title: '‘‘加载更多’’',
                img: 'https://gitee.com/zbaolin/hksj/raw/master/logo.png',
                url: $(parseDom(conts[index], '.sort_nav_more&&href') + '&page=fypage').rule(() => {
                    var d = [];
                    var list = parseDomForArray(getResCode(), '.sort_lst&&li');
                    for (var i in list) {
                        d.push({
                            title: parseDomForHtml(list[i], 'img&&alt'),
                            img: parseDom(list[i], 'img&&src'),
                            desc: parseDomForHtml(list[i], 'a&&Text'),
                            url: $(parseDom(list[i], 'a&&href')).rule(() => { eval(fetch('hiker://files/jiexi/sougou.js')); EJ() }),
                            col_type: 'movie_3'
                        })
                    }
                    setResult(d)
                }),
                col_type: "movie_3"
            })
        }
        setTabs(tabs, MY_URL);
        setLists(lists, getVar(MY_URL, '0'));
        */
    } else {

        var html = fetch('https://v.sogou.com/v?query=' + getVar('searchKeyword'), { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0)' } });
        var list = JSON.parse(html.split('window.__INITIAL_STATE__=')[1].split(';(function(){var s;')[0]).result.longVideo.results;
        for (var i in list) {

            d.push({
                title: list[i].titleEsc,
                desc: list[i].docname,
                content: list[i].introduction,
                img: list[i].v_picurl,
                url: 'https://v.sogou.com' + list[i].tiny_url
            })
        }
        /*
        d.push({ col_type: 'line_blank' });
        d.push({ title: "<h4 style='text-align:center'>到底了呢！</h4>", col_type: "rich_text" });
        */
    }
    setResult(d)
}

function SSYJ() {
    var d = [];
    var list = JSON.parse(getResCode().split('window.__INITIAL_STATE__=')[1].split(';(function(){var s;')[0]).result.longVideo.results;
    for (var i in list) {
        d.push({
            title: list[i].titleEsc,
            desc: list[i].docname,
            content: list[i].introduction,
            img: list[i].v_picurl,
            url: 'https://v.sogou.com' + list[i].tiny_url
        })
    }
    setResult(d)
}