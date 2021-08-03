function detailPage() {
    d = [];
    var mgdbId = MY_PARAMS.mgdbId;
    var baseUrl = 'https://app-sc.miguvideo.com/vms-match/v3/staticcache/basic/basic-data/' + mgdbId + '/3000060800'
    var url = 'https://app-sc.miguvideo.com/vms-worldcup/v3/basic-data/all-view-list/' + mgdbId + '/2/3000060800';

    var res_base = JSON.parse(fetch(baseUrl, {}));
    if (res_base.code == 200) {
        var data = res_base.body.commentaryList;
        for (let i in data) {
            let info = data[i];
            d.push({
                col_type: 'movie_1_left_pic',
                img: info.h5pic.highResolutionH,
                title: '[LIVE] ' + info.name,
                url: $('https://webapi.miguvideo.com/gateway/playurl/v3/play/playurl?contId=' + info.pID + '&rateType=3').lazyRule(() => {
                    eval(fetch('hiker://files/rules/quietboy/miguog/main.js', {}));
                    try {
                        return getVideoUrl(input);
                    } catch (e) {
                        log(e);
                        return "toast://请重试";
                    }
                })
            });
        }
    }
    else {
        d.push({
            col_type: 'text_1',
            title: 'error'
        });
    }

    var res = JSON.parse(fetch(url, {}));
    if (res.code == 200) {
        var data = res.body.replayList;
        for (let i in data) {
            let info = data[i];
            d.push({
                col_type: 'movie_1_left_pic',
                img: info.h5pic.highResolutionH,
                title: info.name,
                url: $('https://webapi.miguvideo.com/gateway/playurl/v3/play/playurl?contId=' + info.pID + '&rateType=3').lazyRule(() => {
                    eval(fetch('hiker://files/rules/quietboy/miguog/main.js', {}));
                    try {
                        return getVideoUrl(input);
                    } catch (e) {
                        log(e);
                        return "toast://请重试";
                    }
                })
            });
        }
    }
    else {
        d.push({
            col_type: 'text_1',
            title: 'error'
        });
    }

    setResult(d);
}
function medalPage() {
    const _medal_url = 'https://app-sc.miguvideo.com/vms-livedata/olympic-medal/total-table/15/110000004609';
    var res = JSON.parse(fetch(_medal_url, {}));
    if (res.code == 200) {
        var data = res.body.allMedalData;
        putVar('xjj-medal-info', JSON.stringify(data));
        setResult([{
            col_type: 'x5_webview_single',
            url: 'http://f11st.gitee.io/hiker/miguog/page/#/medal',
            desc: '100%&&float'
        }]);
    }
    else {
        setResult([{
            col_type: 'text_1',
            title: 'error'
        }]);
    }
}
function matchPage() {
    function timeFormat(times) {
        var time = new Date(times);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return m + '-' + d + ' ' + h + ':' + mm;
    }
    function addTabBtn(page, res, tabs) {
        var tab = getVar('og-time');
        if (tab == '') {
            var now = new Date();
            var m = now.getMonth() + 1;
            var d = (now.getDate() < 10) ? ('0' + now.getDate()) : now.getDate();
            tab = '20210' + m + d;
        }
        if (page != 1) {
            return tab;
        }
        for (let name of tabs) {
            var btn = {};
            btn.col_type = 'scroll_button';
            btn.url = $('hiker://empty#noLoading#').lazyRule((obj) => {
                putVar('og-time', obj.name);
                refreshPage();
                return 'hiker://empty';
            }, { name: name });
            if (tab == name) {
                btn.title = '““””<strong><font color="#44BB44">xjjkey</font></strong>'.replace('xjjkey', name);
            }
            else {
                btn.title = '““””<strong><font color="black">xjjkey</font></strong>'.replace('xjjkey', name);
            }
            res.push(btn);
        }
        res.push({
            col_type: 'blank_block'
        });
        return tab;
    }

    var d = [];
    var tabs = ['20210721', '20210722', '20210723', '20210724', '20210725', '20210726', '20210727', '20210728', '20210729', '20210730', '20210731', '20210801', '20210802', '20210803', '20210804', '20210805', '20210806', '20210807', '20210808'];
    var tab = addTabBtn(1, d, tabs);
    var matchListUrl = 'https://app-sc.miguvideo.com/vms-worldcup/v1/olympic/project/match-list/' + tab + '/all';
    var res = JSON.parse(fetch(matchListUrl, {}));

    if (res.code == 200) {
        var onlyChina = (MY_PARAMS.xjjchina == 1) ? true : false;
        var data = res.body.matchList;
        var now = new Date().getTime();
        for (let i of data) {
            let img = '';
            for (let j in i.majorTermLogo) {
                img = i.majorTermLogo[j];
                break;
            }
            let title = '';
            if (i.chinaTag == 1) {
                title = '““' + i.majorTermName + '””-';
            } else {
                title = '‘‘' + i.majorTermName + '’’-';
            }
            if ((onlyChina == false) || i.chinaTag == 1) {
                d.push({
                    col_type: 'movie_1_left_pic',
                    img: img,
                    title: title + i.modifyTitle,
                    desc: '开始时间：' + timeFormat(i.startTime),
                    url: (now < i.startTime) ? 'toast://还没开始哦' : 'hiker://page/detail.html',
                    extra: JSON.stringify({
                        mgdbId: i.mgdbId
                    })
                });
            }
        }

    }
    else {
        d.push({
            col_type: 'text_1',
            title: 'error'
        });
    }
    setResult(d);
}
function getVideoUrl(url) {
    function getReallyUrl(e) {
        var t = getQueryString("userid", e) || "eeeeeeeee"
            , r = getQueryString("timestamp", e) || "tttttttttttttt"
            , n = getQueryString("ProgramID", e) || "ccccccccc"
            , a = getQueryString("Channel_ID", e) || "nnnnnnnnnnnnnnnn"
            , o = getQueryString("puData", e) || "";
        if (!o)
            return e;
        var s = "2624";
        s = s.split("");
        for (var u = t.split("")[s[0]] || "e", l = r.split("")[s[1]] || "t", c = n.split("")[s[2]] || "c", f = a.split("")[a.split("").length - s[3]] || "n", d = o.split(""), h = [], p = 0; 2 * p < d.length; p++)
            switch (h.push(d[d.length - p - 1]),
            p < d.length - p - 1 && h.push(o[p]),
            p) {
                case 1:
                    h.push(u);
                    break;
                case 2:
                    h.push(l);
                    break;
                case 3:
                    h.push(c);
                    break;
                case 4:
                    h.push(f)
            }
        var v = h.join("");
        return e + "&ddCalcu=" + v
    }
    function getQueryString(e, t) {
        var r, n = new RegExp("(^|\\?|&|#)" + e + "=([^&#]*)(&|#|$)", "i");
        r = t.match(n);
        return null != r ? decodeURIComponent(r[2]) : null
    }
    var res = JSON.parse(fetch(url, {
        headers: {
            'terminalId': 'www'
        }
    }));
    var ret = '';
    if (res.code == 200) {
        var oriUrl = res.body.urlInfo.url;
        ret = getReallyUrl(oriUrl);
    }
    else {
        ret = '';
    }
    return ret
}
function main() {
    function addTabBtn(page, res, tabs) {
        var tab = getVar('og-tab');
        if (tab == '') {
            tab = tabs[0];
        }
        if (page != 1) {
            return tab;
        }
        for (let name of tabs) {
            var btn = {};
            btn.col_type = 'scroll_button';
            btn.url = $('hiker://empty#noLoading#').lazyRule((obj) => {
                putVar('og-tab', obj.name);
                refreshPage();
                return 'hiker://empty';
            }, { name: name });
            if (tab == name) {
                btn.title = '““””<strong><font color="#44BB44">xjjkey</font></strong>'.replace('xjjkey', name);
            }
            else {
                btn.title = '““””<strong><font color="black">xjjkey</font></strong>'.replace('xjjkey', name);
            }
            res.push(btn);
        }
        res.push({
            col_type: 'blank_block'
        });
        return tab;
    }
    var ret = [];
    let xjjpage = MY_URL.split('##')[1];
    var tabs = ['首页', '赛程分类'];
    // var tab = addTabBtn(xjjpage, ret, tabs);

    // switch (tab) {
    //     case '首页':
    //         if (xjjpage != 1) break;
    //         ret.push({
    //             col_type: 'icon_4_card',
    //             title: '奖牌榜',
    //             url: 'hiker://page/medal.html',
    //             img: 'https://img.cmvideo.cn/publish/noms/2021/07/13/1O329KOS78BRA.png'
    //         });
    //         ret.push({
    //             col_type: 'icon_4_card',
    //             title: '全部赛程',
    //             url: 'hiker://page/match.html',
    //             img: 'https://img.cmvideo.cn/publish/noms/2021/07/13/1O329KOS78BRA.png'
    //         });
    //         break;
    //     case '赛程分类':
    //         if (xjjpage != 1) break;
    //         break;
    //     default:
    //         break;
    // }
    if (xjjpage == 1) {
        ret.push({
            col_type: 'icon_4_card',
            title: '奖牌榜',
            url: 'hiker://page/medal.html#noHistory#',
            img: 'https://img.cmvideo.cn/publish/noms/2021/07/13/1O329KOS78BRA.png'
        });
        ret.push({
            col_type: 'icon_4_card',
            title: '全部赛程',
            url: 'hiker://page/match.html#noHistory#',
            img: 'https://img.cmvideo.cn/publish/noms/2021/07/13/1O329KOS78BRA.png',
            extra: JSON.stringify({
                xjjchina: 0
            })
        });
        ret.push({
            col_type: 'icon_4_card',
            title: '中国赛程',
            url: 'hiker://page/match.html#noHistory#',
            img: 'https://img.cmvideo.cn/publish/noms/2021/07/13/1O329KOS78BRA.png',
            extra: JSON.stringify({
                xjjchina: 1
            })
        });
    }
    setResult(ret);
}