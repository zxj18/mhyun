function setting() {
    var d = [];
    var get = request('hiker://files/rules/js/Gy-logfile.js', {});
    if (get != '') {
        var logfile = JSON.parse(get);
        if (logfile.isnew != 1) {
            logfile.playermode = logfile.mode;
            logfile.isnew = 1;
            logfile.parsemode = '0';
            logfile.parselist = ['','','','','','','','','',''];
            logfile.edition = '1';
            logfile.indent='';
            writeFile('hiker://files/rules/js/Gy-logfile.js', JSON.stringify(logfile));
        }
    } else {
        var logfile = {};
        logfile.history = [{}];
        logfile.isnew = 1;
        logfile.playermode = '1';
        logfile.parsemode = '1';
        logfile.parselist = ['','','','','','','','','',''];
        logfile.edition = '1';
        logfile.indent='';
        writeFile('hiker://files/rules/js/Gy-logfile.js', JSON.stringify(logfile));
    }
    d.push({
        title: '““当前插件版本:' + logfile.edition + '””',
        desc:'点此清空光影数据以修复光影数据与插件不匹配的异常(如出现各种莫名其妙的undefined)',
        url:`confirm://注意：此操作不可逆，且仅能修复光影数据与插件不匹配的异常，请慎重选择！.js:writeFile('hiker://files/rules/js/Gy-logfile.js', '');refreshPage();'toast://已清空光影数据'`,
        col_type: 'text_center_1'
    });
    d.push({
        title: '‘‘当前共有' + (logfile.history.length - 1) + '条片源记录’’',
        desc: '点此清空记录',
        url:`confirm://注意：此操作不可逆，片源记录仅会在记录数据较多的情况下略微影响页面加载速度，请慎重选择！.js:var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile.js',{}));logfile.history=[{}];writeFile('hiker://files/rules/js/Gy-logfile.js', JSON.stringify(logfile));refreshPage();'toast://已清空记录！'`,
        col_type: 'text_1'
    });
    d.push({
        title: '‘‘豆瓣评分缩进设置’’',
        desc:'点此输入',
        url: "input://////豆瓣评分缩进量.js:var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile.js',{}));logfile.indent='';for(var i=0;i<Number(input);i++){logfile.indent=logfile.indent+'\t'}writeFile('hiker://files/rules/js/Gy-logfile.js', JSON.stringify(logfile));refreshPage();'toast://已设置为'+input",
        col_type: 'text_1'
    })
    var playername = ['X5播放器', '默认播放器'];
    d.push({
        title: '‘‘当前播放器:' + playername[logfile.playermode] + '’’',
        desc: '点此切换',
        url: 'hiker://empty' + "@lazyRule=.js:var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile.js',{}));logfile.playermode=='0'?logfile.playermode='1':logfile.playermode='0';writeFile('hiker://files/rules/js/Gy-logfile.js', JSON.stringify(logfile));refreshPage();'toast://已切换播放器！'",
        col_type: 'text_1'
    });
    var parsename = ['无解析', '断念插件', '努力插件', '自定义解析'];
    d.push({
        title: '‘‘当前解析模式:' + parsename[logfile.parsemode] + '’’',
        desc: '点击下方按钮切换',
        url: 'hiker://empty',
        col_type: 'text_1'
    });
    for (var i in parsename) {
        d.push({
            title: parsename[i],
            url: 'hiker://empty#' + i + "@lazyRule=.js:var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile.js',{}));logfile.parsemode=input.split('#')[1];writeFile('hiker://files/rules/js/Gy-logfile.js', JSON.stringify(logfile));refreshPage();'toast://已切换！'",
            col_type: 'text_2'
        });
    }
    var sourcesname = ['', '腾讯视频', '', '优酷视频', '', '', '', '', '哔哩哔哩', '爱奇艺视频'];
    d.push({
        title: '‘‘自定义解析设置’’',
        url: 'hiker://empty',
        col_type: 'text_1'
    });
    d.push({
        title: '腾讯视频',
        url: "input://"+logfile.parselist[1]+"////腾讯视频接口地址.js:var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile.js',{}));logfile.parselist[1]=input;writeFile('hiker://files/rules/js/Gy-logfile.js', JSON.stringify(logfile));refreshPage();'toast://已设置为'+input",
        col_type: 'text_2'
    })
    d.push({
        title: '优酷视频',
        url: "input://"+logfile.parselist[3]+"////优酷视频接口地址.js:var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile.js',{}));logfile.parselist[3]=input;writeFile('hiker://files/rules/js/Gy-logfile.js', JSON.stringify(logfile));refreshPage();'toast://已设置为'+input",
        col_type: 'text_2'
    })
    d.push({
        title: '哔哩哔哩',
        url: "input://"+logfile.parselist[8]+"////哔哩哔哩接口地址.js:var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile.js',{}));logfile.parselist[8]=input;writeFile('hiker://files/rules/js/Gy-logfile.js', JSON.stringify(logfile));refreshPage();'toast://已设置为'+input",
        col_type: 'text_2'
    })
    d.push({
        title: '爱奇艺视频',
        url: "input://"+logfile.parselist[9]+"////爱奇艺视频接口地址.js:var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile.js',{}));logfile.parselist[9]=input;writeFile('hiker://files/rules/js/Gy-logfile.js', JSON.stringify(logfile));refreshPage();'toast://已设置为'+input",
        col_type: 'text_2'
    })
    d.push({
        title: '‘‘更多相关设置’’',
        url: 'hiker://empty',
        col_type: 'text_1'
    });
    var config = fetch('hiker://files/cache/MyParseSet.json');
    var jsUrl = 'https://code.aliyun.com/AI957/Hiker/raw/master/v/CloudParse-V2_Dn.js';
    if (config && fetch(JSON.parse(config).cj)) {
        jsUrl = JSON.parse(config).cj;
    }
    eval(fetch(jsUrl));
    d.push({
        title: '断插设置',
        url: setUrl,
        pic_url: '',
        col_type: 'text_2'
    });
    setResult(d);
}
function aggregate() {
    var res = {};
    var items = [];
    //设置首页二级同时搜索接口数量
    var ssxc = '6';
    //设置超时时间，越小越快，单位毫秒
    var timeou = 2000;
    var ss = MY_URL.split('###')[1];
    var num = MY_URL.split('###')[2];
    var le = num * ssxc;
    //setError(le);
    if (num == '1') {
        putVar({
            key: 'fany',
            value: ''
        });
        //设置搜索远程文件地址
        var src = fetch('https://codeberg.org/lzk23559/PublicRule/raw/branch/master/ZYWCJ.txt', {});
        //设置搜索本地文件地址
        //var src=fetch('hiker://files/rules/资源网采集.txt',{});
        putVar({
            key: 'fany',
            value: src
        });
    }
    if (num == '1') {
        src = src;
    } else {
        src = getVar('fany')
    };
    var cc = src.indexOf('http') != -1 ? src.match(/[\S]*?,.*?[\s]/g) : base64Decode(src).match(/[\S]*?,.*?[\s]/g);
    var Data = [];
    var Tit = [];
    var Ost = [];
    for (var i = le - ssxc; i < le; i++) {
        if (i < cc.length) {
            var arr = cc[i].split(',')[1];
            var arrt = cc[i].split(',')[0];
            //var html=fetch(cc[i].split(',')[1]+ss,{});
            //setError(html);
            var link = cc[i].split(',')[1] + ss;
            //Data.push({url:link});
            Data.push({
                url: link,
                options: {
                    timeout: timeou
                }
            });
            Tit.push({
                tit: arrt
            });
            Ost.push({
                url: arr
            });
        }
    }
    //批量发送请求
    if (Data != '') {
        var html = batchFetch(Data);
        //setError(Tit);
        for (var k = 0; k < html.length; k++) {
            if (html[k] != null) {
                if (html[k].indexOf('<video>') == -1) {
                    items.push({
                        title: Tit[k].tit + '““' + '未搜索到' + '””' + '相关资源',
                        col_type: 'text_center_1'
                    });;
                } else {
                    var list = parseDomForHtml(html[k], 'rss&&Html').match(/<video>[\s\S]*?<\/video>/g);
                    //setError(list[0]);
                    for (var j = 0; j < list.length; j++) {
                        var title = parseDomForHtml(list[j], 'body&&name&&Text');
                        var url = parseDomForHtml(list[j], 'body&&id&&Text');
                        var note = parseDomForHtml(list[j], 'body&&note&&Text');
                        var last = parseDomForHtml(list[j], 'body&&dt&&Text');
                        var typ = parseDomForHtml(list[j], 'body&&type&&Text');
                        items.push({
                            title: title + ' ' + ' • ' + note,
                            desc: '““' + Tit[k].tit + '””' + ' · ' + typ + ' ·  ' + last,
                            url: Ost[k].url + '?ac=videolist&ids=' + url + "@rule=js:var erj=fetch('https://codeberg.org/lzk23559/PublicRule/raw/branch/master/doub.js',{});eval(erj);doub();",
                            col_type: 'text_center_1'
                        });
                    }
                }
            }
        }
    }
    res.data = items;
    setHomeResult(res);
}
function main() {
    var d = [];
    var html = getResCode();
    var get = request('hiker://files/rules/js/Gy-logfile.js', {});
    if (get != '') {
        var logfile = JSON.parse(get);
        if (logfile.isnew != 1) {
            logfile.playermode = logfile.mode;
            logfile.isnew = 1;
            logfile.parsemode = '0';
            logfile.parselist = ['','','','','','','','','',''];
            logfile.edition = '1';
            logfile.indent='';
            writeFile('hiker://files/rules/js/Gy-logfile.js', JSON.stringify(logfile));
        }
    } else {
        var logfile = {};
        logfile.history = [{}];
        logfile.isnew = 1;
        logfile.playermode = '1';
        logfile.parsemode = '1';
        logfile.parselist = ['','','','','','','','','',''];
        logfile.edition = '1';
        logfile.indent='';
        writeFile('hiker://files/rules/js/Gy-logfile.js', JSON.stringify(logfile));
    }
    var sources_title = ['', '腾讯视频', '', '优酷视频', '', '', '', '', '哔哩哔哩', '爱奇艺视频'];
    d.push({
        desc: '200&&float',
        col_type: 'x5_webview_single'
    });
    try {
        var content = JSON.parse(unescape(parseDomForHtml(html, 'html&&script[type="application/ld+json"]&&Html').replace(/\u0000|\u0001|\u0002|\u0003|\u0004|\u0005|\u0006|\u0007|\u0008|\u0009|\u000a|\u000b|\u000c|\u000d|\u000e|\u000f|\u0010|\u0011|\u0012|\u0013|\u0014|\u0015|\u0016|\u0017|\u0018|\u0019|\u001a|\u001b|\u001c|\u001d|\u001e|\u001f|\u007F/g, '').replace(/\\u/g, '%u')));
    } catch (e) {
        var content = {}
    }
    var id = content.url.replace(/[^0-9]/g, '');
    for (var i = logfile.history.length; i--; i > 0) {
        if (logfile.history[i].id == id) {
            var record = logfile.history[i].sources
            break;
        }
    }
    if (getVar('sources', '0') == '0') {
        putVar('sources', record)
    }
    var director = '';
    for (var i in content.director) {
        var director = director + content.director[i].name.replace(/[^\u4e00-\u9fa5·]/g, '') + '/';
    }
    var director = '导演:' + director.slice(0, director.length - 1);
    var actor = '';
    for (var i in content.actor) {
        var actor = actor + content.actor[i].name.replace(/[^\u4e00-\u9fa5·]/g, '') + '/';
    }
    var actor = '主演:' + actor.slice(0, actor.length - 1);
    d.push({
        title: getUrl().split('#')[1] + '(' + content.datePublished+')'+'\n类型:'+content.genre,
        desc: director + '\n' + actor,
        url: 'https://movie.douban.com' + content.url,
        pic_url: content.image,
        col_type: 'movie_1_vertical_pic'
    });
    d.push({
        title: '演职员详情',
        pic_url: 'https://z3.ax1x.com/2021/06/04/28DcG9.png',
        url: 'https://movie.douban.com' + content.url + 'celebrities' + "@rule=js:var d = [];var list = parseDomForArray(getResCode(), 'body&&#content&&.list-wrapper');for(var i in list){try{d.push({title:parseDomForHtml(list[i],'h2&&Text'),col_type: 'long_text'});}catch(e){}var personnel_list = parseDomForArray(list[i], 'ul&&li');for(var j in personnel_list){try{d.push({title:parseDomForHtml(personnel_list[j],'a&&title'),desc:parseDomForHtml(personnel_list[j],'.works&&Text'),pic_url:parseDomForHtml(personnel_list[j],'.avatar&&style'),url:parseDomForHtml(personnel_list[j],'.avatar&&style'),col_type:'movie_1_vertical_pic'})}catch(e){}}}setResult(d);",
        col_type: 'icon_small_4'
    });
    d.push({
        title: '预告花絮',
        pic_url: 'https://z3.ax1x.com/2021/06/04/28Dg2R.png',
        url: 'https://movie.douban.com' + content.url + 'trailer' + "@rule=js:var get=fetch('hiker://files/rules/js/Gy-extensions.js',{});eval(get);trailer();",
        col_type: 'icon_small_4'
    });
    d.push({
        title: '影片剧照',
        pic_url: 'https://z3.ax1x.com/2021/06/04/28D2x1.png',
        url: 'https://movie.douban.com' + content.url + 'photos?type=S&start=fypage@-1@*30@&sortby=like&size=a&subtype=a' + "@rule=js:var html=getResCode();var d = [];var pics_list = parseDomForArray(getResCode(), 'body&&.article&&li');for(var i in pics_list){d.push({pic_url:parseDomForHtml(pics_list[i],'img&&src').replace('sqxs', 'l'),url:parseDomForHtml(pics_list[i],'img&&src').replace('sqxs', 'l'),col_type:'pic_2'});}setResult(d);",
        col_type: 'icon_small_4'
    });
    d.push({
        title: '影片短评',
        pic_url: 'https://z3.ax1x.com/2021/06/04/28DWKx.png',
        url: 'https://movie.douban.com' + content.url + 'comments?start=fypage@-1@*20@&limit=20&sort=new_score&status=P&percent_type=' + "@rule=js:var d = [];var list = parseDomForArray(getResCode(), 'body&&#comments&&.comment-item');for(var i in list){try{d.push({title:parseDomForHtml(list[i],'a&&title'),pic_url:parseDomForHtml(list[i],'img&&src'),url:parseDomForHtml(list[i],'img&&src'),col_type: 'avatar'});d.push({col_type:'line'});}catch(e){}try{d.push({title:parseDomForHtml(list[i],'.comment-content&&Text'),col_type: 'long_text'});}catch(e){}d.push({col_type:'line_blank'});}setResult(d);",
        col_type: 'icon_small_4'
    });
    d.push({
        title: '搜索本片',
        pic_url: 'https://z3.ax1x.com/2021/06/04/28DhqK.png',
        url: 'hiker://search?s=' + getUrl().split('#')[1],
        col_type: 'icon_small_4'
    })
    d.push({
        title: '香情影视',
        pic_url: 'https://z3.ax1x.com/2021/06/04/28D5VO.png',
        url: 'hiker://empty$$$hiker://files/rules/xyq/hikermovie.json$$$' + getUrl().split('#')[1] + '$$$fypage$$$#noHistory#' + "@rule=js:var get=fetch('hiker://files/rules/xyq/hikermovie.js',{});eval(get);hiksearch();",
        col_type: 'icon_small_4'
    })
    d.push({
        title: '资源网聚合',
        pic_url: 'https://z3.ax1x.com/2021/06/04/28DIaD.png',
        url: 'hiker://empty###?wd=' + getUrl().split('#')[1] + '&pg=1&ac=list###fypage#noHistory#' + "@rule=js:var get=fetch('hiker://files/rules/js/Gy-extensions.js',{});eval(get);aggregate();",
        col_type: 'icon_small_4'
    })
    d.push({
        title: '规则设置',
        pic_url: 'https://z3.ax1x.com/2021/06/04/28DoIe.png',
        url: 'hiker://empty' + "@rule=js:var get=fetch('hiker://files/rules/js/Gy-extensions.js',{});eval(get);setting();",
        col_type: 'icon_small_4'
    })
    d.push({
        col_type: 'line_blank'
    });
    var source_list = parseDomForArray(html, 'body&&.bs&&li');
    if (JSON.stringify(source_list).indexOf('腾讯视频') != -1 || JSON.stringify(source_list).indexOf('优酷视频') != -1 || JSON.stringify(source_list).indexOf('爱奇艺视频') != -1 || JSON.stringify(source_list).indexOf('哔哩哔哩') != -1) {
        d.push({
            title: '影片片源',
            url: 'hiker://empty',
            col_type: 'text_center_1'
        });
        var script_list = parseDomForArray(html, 'body&&script:not([src])');
        for (var i in script_list) {
            var sources_url = parseDomForHtml(script_list[i], 'script&&Html');
            if (sources_url.indexOf('Do.ready') != -1) {
                var judge = 0;
                var sources_list = sources_url.match(/sources\[[1-9]\][\s\S]*?\]/g)
                var sources = {};
                for (var i in sources_list) {
                    eval(sources_list[i]);
                }
                if (sources[1] != sources[99]) {
                    d.push({
                        title: '腾讯视频',
                        pic_url: 'https://s1.ax1x.com/2020/11/06/BhRK91.jpg',
                        url: 'hiker://empty' + "@lazyRule=.js:putVar('sources', '1');refreshPage();'toast://正在加载中!'",
                        col_type: 'icon_4'
                    })
                }
                if (sources[3] != sources[99]) {
                    d.push({
                        title: '优酷视频',
                        pic_url: 'https://s1.ax1x.com/2020/11/06/BhRmN9.png',
                        url: 'hiker://empty' + "@lazyRule=.js:putVar('sources', '3');refreshPage();'toast://正在加载中!'",
                        col_type: 'icon_4'
                    })
                }
                if (sources[8] != sources[99]) {
                    d.push({
                        title: '哔哩哔哩',
                        pic_url: 'https://s1.ax1x.com/2020/11/06/BhReAJ.png',
                        url: 'hiker://empty' + "@lazyRule=.js:putVar('sources', '8');refreshPage();'toast://正在加载中!'",
                        col_type: 'icon_4'
                    })
                }
                if (sources[9] != sources[99]) {
                    d.push({
                        title: '爱奇艺视频',
                        pic_url: 'https://s1.ax1x.com/2020/11/06/BhRAnU.png',
                        url: 'hiker://empty' + "@lazyRule=.js:putVar('sources', '9');refreshPage();'toast://正在加载中!'",
                        col_type: 'icon_4'
                    })
                }
                if (getVar('sources', '0') != 0) {
                    d.push({
                        col_type: 'line_blank'
                    });
                    d.push({
                        title: '当前:' + sources_title[getVar('sources', '0')],
                        url: 'hiker://empty',
                        col_type: 'text_center_1'
                    })
                    for (var i in sources[getVar('sources', '0')]) {
                        d.push({
                            title: '第' + sources[getVar('sources', '0')][i].ep + '集',
                            url: unescape(sources[getVar('sources', '0')][i].play_link.replace('https://www.douban.com/link2/?url=', '').split('.html')[0] + '.html') + "@lazyRule=.js:var config = fetch('hiker://files/cache/MyParseSet.json');var jsUrl = 'https://code.aliyun.com/AI957/Hiker/raw/master/v/CloudParse-V2_Dn.js';if (config && fetch(JSON.parse(config).cj)) {jsUrl = JSON.parse(config).cj;}eval(fetch(jsUrl));eval(fetch('hiker://files/rules/js/Messy-parsing.js'));var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile.js',{}));if(logfile.parsemode=='0'){var url=input}else if(logfile.parsemode=='1'){var url=aytmParse(input)}else if(logfile.parsemode=='2'){var url=player(input)}else if(logfile.parsemode=='3'){if(input.indexOf('qq.com')!=-1){var url=logfile.parselist[1]+input}else if(input.indexOf('youku.com')!=-1){var url=logfile.parselist[3]+input}else if(input.indexOf('bilibili.com')!=-1){var url=logfile.parselist[8]+input}else if(input.indexOf('iqiyi.com')!=-1){var url=logfile.parselist[9]+input}};if(logfile.playermode=='0'){refreshX5WebView(url);'toast://正在加载中！'}else{url}",
                            col_type: 'text_4'
                        })
                    }
                }
                break;
            } else {
                var judge = 1;
            }
        }
        if (judge) {
            var script_list = parseDomForArray(html, 'body&&script[src]');
            for (var i in script_list) {
                var url = parseDomForHtml(script_list[i], 'script&&src');
                if (url.indexOf('mixed_static') != -1) {
                    var sources_url = url;
                }
            }
            for (var i in source_list) {
                var sources_name = parseDomForHtml(source_list[i], 'a&&data-cn')
                if (sources_name == '腾讯视频') {
                    d.push({
                        title: sources_name,
                        pic_url: 'https://s1.ax1x.com/2020/11/06/BhRK91.jpg',
                        url: 'hiker://empty' + "@lazyRule=.js:putVar('sources', '1');refreshPage();'toast://正在加载中!'",
                        col_type: 'icon_4'
                    })
                } else if (sources_name == '爱奇艺视频') {
                    d.push({
                        title: sources_name,
                        pic_url: 'https://s1.ax1x.com/2020/11/06/BhRAnU.png',
                        url: 'hiker://empty' + "@lazyRule=.js:putVar('sources', '9');refreshPage();'toast://正在加载中!'",
                        col_type: 'icon_4'
                    })
                } else if (sources_name == '优酷视频') {
                    d.push({
                        title: sources_name,
                        pic_url: 'https://s1.ax1x.com/2020/11/06/BhRmN9.png',
                        url: 'hiker://empty' + "@lazyRule=.js:putVar('sources', '3');refreshPage();'toast://正在加载中!'",
                        col_type: 'icon_4'
                    })
                }
            }
            var sources_list = request(sources_url, {}).match(/sources\[[1-9]\][\s\S]*?\]/g);
            var sources = {};
            for (var i in sources_list) {
                eval(sources_list[i]);
            }
            if (getVar('sources', '0') != 0) {
                d.push({
                    col_type: 'line_blank'
                });
                d.push({
                    title: '当前:' + sources_title[getVar('sources', '0')],
                    url: 'hkier://empty',
                    col_type: 'text_center_1'
                })
            }
            for (var i in sources[getVar('sources', '0')]) {
                d.push({
                    title: '第' + sources[getVar('sources', '0')][i].ep + '集',
                    url: unescape(sources[getVar('sources', '0')][i].play_link.replace('http://www.douban.com/link2/?url=', '').split('.html')[0] + '.html') + "@lazyRule=.js:var config = fetch('hiker://files/cache/MyParseSet.json');var jsUrl = 'https://code.aliyun.com/AI957/Hiker/raw/master/v/CloudParse-V2_Dn.js';if (config && fetch(JSON.parse(config).cj)) {jsUrl = JSON.parse(config).cj;}eval(fetch(jsUrl));eval(fetch('hiker://files/rules/js/Messy-parsing.js'));var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile.js',{}));if(logfile.parsemode=='0'){var url=input}else if(logfile.parsemode=='1'){var url=aytmParse(input)}else if(logfile.parsemode=='2'){var url=player(input)}else if(logfile.parsemode=='3'){if(input.indexOf('qq.com')!=-1){var url=logfile.parselist[1]+input}else if(input.indexOf('youku.com')!=-1){var url=logfile.parselist[3]+input}else if(input.indexOf('bilibili.com')!=-1){var url=logfile.parselist[8]+input}else if(input.indexOf('iqiyi.com')!=-1){var url=logfile.parselist[9]+input}};if(logfile.playermode=='0'){refreshX5WebView(url);'toast://正在加载中！'}else{url}",
                    col_type: 'text_4'
                })
            }
        }
        for (var i = logfile.history.length; i--; i > 0) {
            if (logfile.history[i].id == id) {
                var num = i
                break;
            } else {
                var num = ''
            }
        }
        if (num != '') {
            logfile.history[i].sources = getVar('sources', '0')
        } else if (getVar('sources', '0') != '0') {
            logfile.history.push({
                id: id,
                sources: getVar('sources', '0')
            });
        }
        writeFile('hiker://files/rules/js/Gy-logfile.js', JSON.stringify(logfile));
        putVar('sources', '0');
        d.push({
            col_type: 'line_blank'
        });
    }
    try {
        d.push({
            title: '豆瓣评分:' + content.aggregateRating.ratingValue,
            url: 'hiker://empty',
            col_type: 'text_center_1'
        });
    } catch (e) {}
    var score = '<body>' + parseDom(html, 'body&&.ratings-on-weight&&Html') + '</body>';
    var score_list = parseDomForArray(score, 'body&&.item');
    var score_html = '';
    for (var s in score_list) {
        if (s == 0) {
            var score_star = logfile.indent+'力荐  ★★★★★';
        } else if (s == 1) {
            var score_star = logfile.indent+'推荐  ★★★★☆';
        } else if (s == 2) {
            var score_star = logfile.indent+'一般  ★★★☆☆';
        } else if (s == 3) {
            var score_star = logfile.indent+'还行  ★★☆☆☆';
        } else if (s == 4) {
            var score_star = logfile.indent+'较差  ★☆☆☆☆';
        }
        var score_num = parseDomForHtml(score_list[s], '.rating_per&&Text').split('%')[0];
        var score_text_1 = '';
        var score_text_2 = '';
        for (var n = 0; n < Math.ceil(score_num / 10); n++) {
            var score_text_1 = score_text_1 + '▇';
        }
        for (var n = 0; n < 10 - (Math.ceil(score_num / 10)); n++) {
            var score_text_2 = score_text_2 + '▇';
        }
        var score_html = score_html + '<font color="#7c7a7b">' + score_star + '</font>&nbsp;<font color="#ffac2d">' + score_text_1 + '</font><font color="#e5e1e4">' + score_text_2 + '</font>&nbsp;<font color="grey">&nbsp;' + score_num + '%</font><br/>';
    }
    d.push({
        title: score_html.slice(0, (score_html.length - 5)),
        col_type: 'rich_text'
    });
    try {
        var video_brief = parseDomForHtml(html, 'body&&#link-report&&Text').replace(/[(©豆瓣)(\s)]/g, '');
    } catch (e) {}
    try {
        var video_brief = parseDomForHtml(html, 'body&&#link-report&&.all&&Text').replace(/[(©豆瓣)(\s)]/g, '');
    } catch (e) {}
    if (video_brief == undefined) {
        var video_brief = '';
    }
    d.push({
        col_type: 'line_blank'
    });
    d.push({
        title: '剧情简介',
        url: 'hiker://empty',
        col_type: 'text_center_1'
    })
    d.push({
        title: '\t\t\t\t\t\t\t\t' + video_brief,
        col_type: 'long_text'
    })
    var pics_list = parseDomForArray(html, 'body&&.related-pic-bd&&li');
    d.push({
        col_type: 'line_blank'
    });
    d.push({
        title: '影片预览',
        url: 'hiker://empty',
        col_type: 'text_center_1'
    });
    for (var i in pics_list) {
        if (pics_list[i].indexOf('label-trailer') !== -1) {
            d.push({
                title: '预告片',
                pic_url: parseDomForHtml(pics_list[i], 'a&&style'),
                url: parseDomForHtml(pics_list[i], 'a&&href') + "@lazyRule=.js:refreshX5WebView(parseDomForHtml(request(input,{}), 'body&&source&&src'));'toast://正在加载中!'",
                col_type: 'pic_2'
            });
        } else if (pics_list[i].indexOf('label-short-video') !== -1) {
            d.push({
                title: '视频评论',
                pic_url: parseDomForHtml(pics_list[i], 'a&&style'),
                url: parseDomForHtml(pics_list[i], 'a&&href') + "@lazyRule=.js:refreshX5WebView(parseDomForHtml(request(input,{}), 'body&&source&&src'));'toast://正在加载中!'",
                col_type: 'pic_2'
            });
        } else {
            d.push({
                title: '剧照',
                pic_url: parseDomForHtml(pics_list[i], 'img&&src').replace('sqxs', 'l').replace('img1', 'img9'),
                url: parseDomForHtml(pics_list[i], 'img&&src').replace('sqxs', 'l').replace('img1', 'img9'),
                col_type: 'pic_2'
            });
        }
    }
    setResult(d);
}