// const _local_config_path = 'hiker://files/quietboy/vipyy/config.json';
// function getSettingObjByID(id) {
//     let settings = JSON.parse(fetch(_local_config_path, {})).setting;
//     let obj = {};
//     settings.some(setting => {
//         if (setting.id == id) {
//             obj = setting;
//             return true;
//         }
//         else {
//             return false;
//         }
//     });
//     return obj;
// }
const _domin = 'https://bukaivip.com/';
eval(getCryptoJS());
function jiexi() {
    let res = {};
    let d = [];
    let xjjclass = MY_URL.split('#')[1];
    let xjjpage = MY_URL.split('#')[2];
    let resCode = fetch(_domin + 'index.php/vod/show/id/' + xjjclass + '/page/' + xjjpage + '.html', {});
    if (resCode.indexOf('检测中') > 0) {
        resCode = fetch(_domin + parseDomForHtml(resCode, "script&&Html").split('"')[1], {});
    }
    let list = parseDomForArray(resCode, '.stui-vodlist&&li');
    for (let i of list) {
        d.push({
            title: parseDomForHtml(i, 'a&&title'),
            desc: parseDomForHtml(i, '.pic-text&&Text'),
            img: parseDom(i, 'a&&data-original'),
            url: _domin + parseDomForHtml(i, 'a&&href'),
            col_type: 'movie_3'
        });
    }
    res.data = d;
    setResult(res);
}
function search() {
    let res = {};
    let d = [];
    let resCode = getResCode();
    if (resCode.indexOf('检测中') > 0) {
        resCode = fetch(_domin + parseDomForHtml(resCode, "script&&Html").split('"')[1], {});
    }
    if (resCode.indexOf('验证页面') >= 0) {
        d.push({
            title: '点击进行验证',
            url: MY_URL
        });
    } else {
        let list = parseDomForArray(resCode, '.stui-vodlist__media&&.active');
        for (let i of list) {
            d.push({
                title: parseDomForHtml(i, '.title&&Text'),
                img: parseDomForHtml(i, '.thumb&&a&&data-original'),
                url: _domin + parseDomForHtml(i, '.thumb&&a&&href')
            });
        }
    }
    res.data = d;
    setResult(res);
}
function erji() {
    let res = {};
    let d = [];
    if (MY_URL.indexOf('haikuoshijie') >= 0 || MY_URL.indexOf('search.html') >= 0) {
        d.push({
            desc: 'auto',
            col_type: 'x5_webview_single',
            url: MY_URL
        });
        res.data = d;
        setResult(res);
        return;
    }
    var html = getResCode();
    if (html.indexOf('检测中') > 0) {
        html = fetch(_domin + parseDomForHtml(html, "script&&Html").split('"')[1], {});
    }
    let img = parseDom(html, 'body&&.stui-content__thumb&&img&&data-original');
    let desc = parseDom(html, 'body&&.desc--span&&Text').replace(getUrl() + "/", "");
    let Rule = 'hiker://empty#' + MY_URL + `@rule=js:eval(fetch('hiker://files/quietboy/vipyy/main.js',{}));Rule_1()`;
    d.push({
        title: "点我查看详情",
        col_type: 'movie_1_vertical_pic',
        url: Rule,
        img: img,
        desc: desc
    });
    d.push({
        col_type: 'line_blank'
    });
    d.push({
        desc: 'float',
        col_type: 'x5_webview_single',
        url: ''
    });
    let tabs = parseDomForArray(getResCode(), 'body&&.playlist');
    for (let tab of tabs) {
        d.push(
            {
                title: parseDomForHtml(tab, '.title&&Text'),
                col_type: 'text_1'
            }
        );
        let playlists = parseDomForArray(tab, '.stui-content__playlist&&li');
        for (let playlist of playlists) {
            d.push(
                {
                    title: parseDomForHtml(playlist, 'li&&Text'),
                    url: parseDom(playlist, 'a&&href') + `@lazyRule=.js:eval(fetch('hiker://files/quietboy/vipyy/main.js',{}));lazyRule_1()`,
                    col_type: 'text_3'
                }
            );
        }
    }
    res.data = d;
    setResult(res);
}
var vip = {
    'parwix': function (url) {
        let tools = {
            secret: function (n, e, t) {
                e = CryptoJS.MD5(e).toString();
                let o = CryptoJS.enc.Utf8.parse(e.substring(0, 16)), i = CryptoJS.enc.Utf8.parse(e.substring(16));
                return t ? CryptoJS.AES.decrypt(n, i, {
                    iv: o,
                    padding: CryptoJS.pad.Pkcs7
                }).toString(CryptoJS.enc.Utf8) : CryptoJS.AES.encrypt(n, i, {
                    iv: o,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                }).toString();
            },
            compare: function (t) {
                return function (n, e) {
                    return n[t] - e[t];
                };
            }
        }
        let ret = '';
        let resCodeJx = fetch('https://vip.parwix.com:4433/player/?url=' + url, {});
        if (resCodeJx.indexOf('检测中') > 0) {
            resCodeJx = fetch('https://vip.parwix.com:4433' + parseDomForHtml(resCodeJx, "script&&Html").split('"')[1], {});
        }
        let iframeSrc = parseDomForHtml(resCodeJx, "iframe&&src");
        if (iframeSrc.indexOf('parwix.com') < 0) {
            iframeSrc = 'https://vip.parwix.com:4433/player/' + iframeSrc;
        }
        let resCodeJx1 = fetch(iframeSrc, {
            headers: {
                'Referer': 'https://vip.parwix.com:4433'
            }
        });
        if (resCodeJx1.indexOf('解析失败') >= 0) {
            return 'toast://解析失败，请稍后重试！';
        }
        let _pr = parseDomForHtml(resCodeJx1, 'meta,0&&id').replace('vod_', '');
        let _pu = parseDomForHtml(resCodeJx1, 'meta,1&&id').replace('vod_', '');
        let urlSecret = resCodeJx1.match(/"url":[\s\S]*?"(.*?)", \/\/视频链接/)[1];
        let _puArr = [];
        let _newArr = [];
        let _code = '';
        for (let i = 0; i < _pu.length; i++) {
            _puArr.push({ 'id': _pu[i], 'text': _pr[i] });
        }
        _newArr = _puArr.sort(tools.compare("id"));
        for (let i = 0; i < _newArr.length; i++) {
            _code += _newArr[i]['text'];
        }
        ret = tools.secret(urlSecret, _code, true);
        if (ret.indexOf('mgtv.com') > 0) {
            ret += ';{User-Agent@Mozilla/5.0 (Windows NT 10.0；； WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36&&Referer@https://www.mgtv.com}';
        }
        return ret;
    }
}
function Rule_1() {
    let res = {};
    let d = [];
    let resOri = fetch(MY_URL.split('#')[1], {});
    let otherInfo = parseDomForArray(resOri, '.stui-content__detail&&p');
    for (let i = 0; i < otherInfo.length; i++) {
        if (i == 0) {
            let setInfo = parseDomForHtml(otherInfo[i], 'p&&Text').match(/(类型：.*)(地区：.*)(年份：.*)/);
            for (let j = 1; j < setInfo.length; j++) {
                d.push(
                    {
                        title: setInfo[j],
                        col_type: 'long_text'
                    }
                );
            }
        }
        else if (i == otherInfo.length - 1) {
            d.push(
                {
                    title: parseDomForHtml(otherInfo[i], 'p&&Text').match(/(简介.*)详情/)[1],
                    col_type: 'long_text'
                }
            );
        }
        else {
            d.push(
                {
                    title: parseDomForHtml(otherInfo[i], 'p&&Text'),
                    col_type: 'long_text'
                }
            );
        }
    }
    res.data = d;
    setResult(res);
}
function lazyRule_1() {
    var tools = {
        getBkn: function (key) {
            let hash = 6492;
            for (let i = 0, len = key.length; i < len; ++i) {
                hash += (hash << 5) + key[i].charCodeAt()
            }
            return (hash & 0x7fffffff)
        },
        getGtk: function (key) {
            let partres_0 = 0;
            let partres_1 = 0;
            for (let i = 0; i < key.length; i = i + 4) {
                partres_0 += parseInt(key[i] + key[i + 1] + key[i + 2] + key[i + 3], 16);
                partres_0 = partres_0 % 16384
            }
            partres_1 = partres_0 % 10;
            let partres_2 = 0;
            for (let i = 0; i < key.length; i++) {
                partres_2 += key[i].charCodeAt() * (i + partres_1);
                partres_2 = partres_2 % partres_0
            }
            return partres_2
        }
    };
    var vipyy = {
        getPlay: function (url) {
            let play = url;
            let rescode = fetch(url, {
                // headers: {
                //     'cookie': fetch('hiker://files/quietboy/zbkcookie.txt', {})
                // }
            });
            // if (rescode.indexOf('该视频需要登录后才能观看') >= 0 || rescode.indexOf('权限') >= 0) {
            //     return "https://www.zhenbuka.com/user/login.html";
            // }
            eval(parseDom(rescode, "body&&.stui-player__video&&script&&Html"));
            if (player_data["from"] == "qqpic") {
                let _domin_zbk = 'https://cq.mmiyue.com/';
                play = 'x5://' + _domin_zbk + 'zhenbuka/player/resourceServerPlayer.php?id=' + player_data["url"];
                // let resCodeQqpic = fetch(_domin_zbk + "zhenbuka/api/resMid.php?id=" + player_data["url"], {
                //     headers: {
                //         "Referer": _domin_zbk
                //     },
                //     method: "GET"
                // });

                // const key = CryptoJS.enc.Utf8.parse('1234567898882222');
                // const iv = CryptoJS.enc.Utf8.parse('8NONwyJtHesysWpM');
                // let decrypted = CryptoJS.AES.decrypt(resCodeQqpic, key, { iv: iv, padding: CryptoJS.pad.Pkcs7 });
                // writeFile('hiker://files/tmp/tmp.m3u8', decrypted.toString(CryptoJS.enc.Utf8));
                // play = 'file:///storage/emulated/0/Android/data/com.example.hikerview/files/Documents/tmp/tmp.m3u8#'+player_data["url"];
            } else if (player_data["from"].search(/qq|qiyi|youku|mgtv/) >= 0) {
                refreshX5WebView('');
                play = vip.parwix(player_data["url"]);
            } else {
                refreshX5WebView('');
                play = player_data["url"]
            }
            return play;
        }
    };
    return vipyy.getPlay(input);
}