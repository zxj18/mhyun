function homepage() {
    var d = [];
    if (getVar('version') == '6') {
        var get = request('hiker://files/rules/js/Gy-logfile2.js', {});
        var logfile = get != '' ? JSON.parse(get) : {};
        logfile.history == null ? (logfile.history = [{}]) : 0;
        logfile.playermode == null ? (logfile.playermode = '1') : 0;
        logfile.parsemode == null ? (logfile.parsemode = '0') : 0;
        logfile.parselist == null ? (logfile.parselist = ['', '', '', '', '', '', '', '', '', '']) : 0;
        logfile.indent == null ? (logfile.indent = '') : 0;
        logfile.search == null ? (logfile.search = []) : 0;
        logfile.searchtype == null ? (logfile.searchtype = 'icon_small_4') : 0;
        logfile.tabcolor == null ? (logfile.tabcolor = '#FA7298') : 0;
        writeFile('hiker://files/rules/js/Gy-logfile2.js', JSON.stringify(logfile));
        var page = MY_URL.split('#')[1];
        var tabs = {};
        tabs.name = ['class', 'area', 'sort', 'year', 'score'];
        tabs.default_value = ['', '', 'genres=', '', '0,10']
        tabs.key = [
            ['全部', '电影', '电视剧', '综艺', '动漫', '纪录片', '短片'],
            ['全部', '中国大陆', '美国', '中国香港', '中国台湾', '日本', '韩国', '英国', '法国', '德国', '意大利', '西班牙', '印度', '泰国', '俄罗斯', '伊朗', '加拿大', '澳大利亚', '爱尔兰', '瑞典', '巴西', '丹麦'],
            ['全部', '新上映', '近期热', '标记多', '评分高', '剧情', '喜剧', '动作', '爱情', '科幻', '动画', '悬疑', '惊悚', '恐怖', '犯罪', '同性', '音乐', '歌舞', '传记', '历史', '战争', '西部', '奇幻', '冒险', '灾难', '武侠', '情 色'],
            ['全部', '2021年', '2020年', '2019年', '2018年', '2010年代', '2000年代', '更早'],
            ['全部', '10分-9分', '9分-8分', '8分-7分', '7分-6分', '6分-5分', '5分-4分', '4分-3分', '3分-2分', ]
        ];
        tabs.value = [
            ['', '电影', '电视剧', '综艺', '动漫', '纪录片', '短片'],
            ['', '中国大陆', '美国', '中国香港', '中国台湾', '日本', '韩国', '英国', '法国', '德国', '意大利', '西班牙', '印度', '泰国', '俄罗斯', '伊朗', '加拿大', '澳大利亚', '爱尔兰', '瑞典', '巴西', '丹麦'],
            ['genres=', 'sort=R', 'sort=U', 'sort=T', 'sort=S', 'genres=剧情', 'genres=喜剧', 'genres=动作', 'genres=爱情', 'genres=科幻', 'genres=动画', 'genres=悬疑', 'genres=惊悚', 'genres=恐怖', 'genres=犯罪', 'genres=同性', 'genres=音乐', 'genres=歌舞', 'genres=传记', 'genres=历史', 'genres=战争', 'genres=西部', 'genres=奇幻', 'genres=冒险', 'genres=灾难', 'genres=武侠', 'genres=%E6%83%85%E8%89%B2'],
            ['', '2021,2021', '2020,2020', '2019,2019', '2018,2018', '2010,2019', '2000,2009', '1,1999'],
            ['0,10', '9,10', '8,9', '7,8', '6,7', '5,6', '4,5', '3,4', '2,3', ]
        ];
        if (page == '0') {
            for (var i in tabs.name) {
                for (var j in tabs.key[i]) {
                    d.push({
                        title: getVar('gy' + tabs.name[i], tabs.default_value[i]) == tabs.value[i][j] ? ('‘‘’’<font color="' + logfile.tabcolor + '"><strong>' + tabs.key[i][j] + '</strong></font>') : tabs.key[i][j],
                        url: 'hiker://empty#noLoading#'+"@lazyRule=.js: putVar('gy" + tabs.name[i] + "','"+tabs.value[i][j]+"');refreshPage();'hiker://empty'",
                        col_type: 'scroll_button'
                    });
                }
                d.push({
                    col_type: 'blank_block'
                });
            }
        }
        var url = 'https://movie.douban.com/j/new_search_subjects?range=' + getVar('gyscore', '0,10') + '&limit=20&start=' + page + '&tags=' + getVar('gyclass', '') + '&' + getVar('gysort', 'genres=') + '&countries=' + getVar('gyarea', '') + '&year_range=' + getVar('gyyear', '');
        var timeNow = new Date().getHours();
        if (timeNow <= 7) {
            if (fileExist('hiker://files/cache/gycache/' + url.split('?')[1] + '.txt')) {
                var content = JSON.parse(request('hiker://files/cache/gycache/' + url.split('?')[1] + '.txt'))
            } else {
                var content = JSON.parse(request(url, {headers: {"User-Agent": ""}})).data;
                if (content != null) {
                    writeFile('hiker://files/cache/gycache/' + url.split('?')[1] + '.txt', JSON.stringify(content));
                }
            }
        } else {
            var content = JSON.parse(request(url, {headers: {"User-Agent": ""}})).data;
            if (content != null) {
                writeFile('hiker://files/cache/gycache/' + url.split('?')[1] + '.txt', JSON.stringify(content));
            }
        }
        if (content != null) {
            for (var i in content) {
                d.push({
                    title: content[i].title,
                    desc: content[i].rate == '' ? '暂无评分' : content[i].rate + '分',
                    pic_url: content[i].cover + '@Referer=',
                    url: content[i].url + '#' + content[i].title,
                    col_type: 'movie_3'
                });
            }
        } else {
            d.push({
                title: '““夜间出现这种情况是正常的，白天就会恢复正常，可以使用搜索功能””',
                desc: '这么晚了，还不睡吗？',
                url: url,
                col_type: 'text_center_1'
            });
            d.push({
                col_type: 'long_text'
            });
        }
    } else {
        d.push({
            title: '更新规则提示',
            url: 'hiker://empty',
            col_type: 'text_center_1'
        });
        d.push({
            title: '没错，我又更新了，上次更新导致了总被封ip,大概是因为我修改了单次加载影片的数量，这次我修改了回来，如果在白天还是一直被封，那应该是原网站修改了计算异常访问的算法，那我就没有办法了！',
            col_type: 'long_text'
        });
        d.push({
            title: '回退旧版插件',
            url: 'hiker://empty' + "@lazyRule=.js: 'rule://' + base64Encode('海阔视界，网页插件￥js_url￥Gy-extensions@http://82.156.222.77/dzqy/old_gyjc_extensions.js')",
            col_type: 'text_2'
        });
        d.push({
            title: '更新新版规则',
            url: 'hiker://empty' + "@lazyRule=.js: 'rule://' + base64Encode(request('http://82.156.222.77/dzqy/GYJC-rule.txt'))",
            col_type: 'text_2'
        });
    }
    setResult(d);
}
function setting() {
    try {
        setPageTitle('规则设置');
    } catch (e) {}
    var d = [];
    var get = request('hiker://files/rules/js/Gy-logfile2.js', {});
    var logfile = get != '' ? JSON.parse(get) : {};
    logfile.history == null ? (logfile.history = [{}]) : 0;
    logfile.playermode == null ? (logfile.playermode = '1') : 0;
    logfile.parsemode == null ? (logfile.parsemode = '0') : 0;
    logfile.parselist == null ? (logfile.parselist = ['', '', '', '', '', '', '', '', '', '']) : 0;
    logfile.indent == null ? (logfile.indent = '') : 0;
    logfile.search == null ? (logfile.search = []) : 0;
    logfile.searchtype == null ? (logfile.searchtype = 'icon_small_4') : 0;
    logfile.tabcolor == null ? (logfile.tabcolor = '#FA7298') : 0;
    writeFile('hiker://files/rules/js/Gy-logfile2.js', JSON.stringify(logfile));
    d.push({
        title: '当前插件版本:3.1',
        desc: '““此规则仅限学习交流使用，请于导入后24小时内删除，任何组织或个人不得以任何方式方法传播此规则的整体或部分！””',
        url: 'hiker://empty',
        col_type: 'text_center_1'
    });
    d.push({
        title: '‘‘当前共有' + (logfile.history.length - 1) + '条片源记录’’',
        desc: '点此清空记录',
        url: "confirm://注意：此操作不可逆，片源记录仅会在记录数据较多的情况下略微影响页面加载速度，请慎重选择！.js:var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile2.js',{}));logfile.history=[{}];writeFile('hiker://files/rules/js/Gy-logfile2.js', JSON.stringify(logfile));refreshPage();'toast://已清空记录！'",
        col_type: 'text_1'
    });
    var playername = ['X5播放器', '默认播放器'];
    d.push({
        title: '‘‘当前播放器:' + playername[logfile.playermode] + '’’',
        desc: logfile.playermode == '0' ? '功能较少，但配合自定义解析简单实用' : '功能强大，推荐配合解析插件使用',
        url: 'hiker://empty' + "@lazyRule=.js:var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile2.js',{}));logfile.playermode=='0'?logfile.playermode='1':logfile.playermode='0';writeFile('hiker://files/rules/js/Gy-logfile2.js', JSON.stringify(logfile));refreshPage();'toast://已切换播放器！'",
        col_type: 'text_1'
    });
    d.push({
        title: '‘‘添加快捷搜索小程序’’',
        desc: '每次一个，按照提示替换显示名小程序名图片链接即可，不要动@@，且显示名小程序名图片链接中不能含有@@',
        url: "input://显示名@@小程序名@@图片链接////快捷搜索设置.js:var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile2.js',{}));logfile.search.push(input);writeFile('hiker://files/rules/js/Gy-logfile2.js', JSON.stringify(logfile));refreshPage();'toast://已添加'+input.split('@@')[1]+'为快捷搜索'",
        col_type: 'text_1'
    })
    d.push({
        title: '‘‘修改快捷搜索小程序’’',
        desc: '请点击下方按钮进行修改',
        url: 'hiker://empty',
        col_type: 'text_1'
    })
    for (var i in logfile.search) {
        if (logfile.search[i] != '') {
            try {
                d.push({
                    title: logfile.search[i].split('@@')[0],
                    url: "input://" + logfile.search[i] + "////修改内容.js:var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile2.js',{}));logfile.search[" + i + "]=input;writeFile('hiker://files/rules/js/Gy-logfile2.js', JSON.stringify(logfile));refreshPage();'toast://修改成功！'",
                    col_type: 'flex_button'
                });
            } catch (e) {}
        }
    }
    d.push({
        title: '‘‘删除快捷搜索小程序’’',
        desc: '仅在光影中快捷搜索删除，不影响原有小程序',
        url: 'hiker://empty',
        col_type: 'text_1'
    })
    for (var i in logfile.search) {
        if (logfile.search[i] != '') {
            try {
                d.push({
                    title: logfile.search[i].split('@@')[0],
                    url: "confirm://是否确认在快捷搜索中删除"+logfile.search[i].split('@@')[0]+".js:var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile2.js',{}));logfile.search["+i+"]='';writeFile('hiker://files/rules/js/Gy-logfile2.js', JSON.stringify(logfile));refreshPage();'toast://已删除！'",
                    col_type: 'flex_button'
                });
            } catch (e) {}
        }
    }
    d.push({
        title: '‘‘设置快捷搜索显示样式’’',
        desc: '当前:' + logfile.searchtype,
        url: "input://" + logfile.searchtype + "////快捷搜索显示样式设置.js:var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile2.js',{}));logfile.searchtype=input;writeFile('hiker://files/rules/js/Gy-logfile2.js', JSON.stringify(logfile));refreshPage();'toast://已设置为'+input",
        col_type: 'text_1'
    })
    d.push({
        title: '‘‘设置tab栏选中颜色’’',
        desc: '当前：‘‘’’<font color="' + logfile.tabcolor + '">' + logfile.tabcolor + '</font>，仅支持16进制颜色代码',
        url: "input://" + logfile.tabcolor + "////tab栏选中颜色16进制代码.js:var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile2.js',{}));logfile.tabcolor=input;writeFile('hiker://files/rules/js/Gy-logfile2.js', JSON.stringify(logfile));refreshPage();'toast://已设置为'+input",
        col_type: 'text_1'
    })
    d.push({
        title: '‘‘评分详情缩进设置’’',
        desc: '此选项会影响评分详情条目缩进长度',
        url: "input://////豆瓣评分缩进量.js:var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile2.js',{}));logfile.indent='';for(var i=0;i<Number(input);i++){logfile.indent=logfile.indent+'\t'}writeFile('hiker://files/rules/js/Gy-logfile2.js', JSON.stringify(logfile));refreshPage();'toast://已设置为'+input",
        col_type: 'text_1'
    })
    var parsename = ['无解析', '断念插件', '努力插件', '自定义解析'];
    d.push({
        title: '‘‘当前解析模式:' + parsename[logfile.parsemode] + '’’',
        url: 'hiker://empty',
        col_type: 'text_1'
    });
    for (var i in parsename) {
        d.push({
            title: parsename[i],
            url: 'hiker://empty#' + i + "@lazyRule=.js:var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile2.js',{}));logfile.parsemode=input.split('#')[1];writeFile('hiker://files/rules/js/Gy-logfile2.js', JSON.stringify(logfile));refreshPage();'toast://已切换！'",
            col_type: 'flex_button'
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
        url: "input://" + logfile.parselist[1] + "////腾讯视频解析接口地址.js:var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile2.js',{}));logfile.parselist[1]=input;writeFile('hiker://files/rules/js/Gy-logfile2.js', JSON.stringify(logfile));refreshPage();'toast://已设置为'+input",
        col_type: 'flex_button'
    })
    d.push({
        title: '优酷视频',
        url: "input://" + logfile.parselist[3] + "////优酷视频解析接口地址.js:var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile2.js',{}));logfile.parselist[3]=input;writeFile('hiker://files/rules/js/Gy-logfile2.js', JSON.stringify(logfile));refreshPage();'toast://已设置为'+input",
        col_type: 'flex_button'
    })
    d.push({
        title: '哔哩哔哩',
        url: "input://" + logfile.parselist[8] + "////哔哩哔哩解析接口地址.js:var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile2.js',{}));logfile.parselist[8]=input;writeFile('hiker://files/rules/js/Gy-logfile2.js', JSON.stringify(logfile));refreshPage();'toast://已设置为'+input",
        col_type: 'flex_button'
    })
    d.push({
        title: '爱奇艺视频',
        url: "input://" + logfile.parselist[9] + "////爱奇艺视频解析接口地址.js:var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile2.js',{}));logfile.parselist[9]=input;writeFile('hiker://files/rules/js/Gy-logfile2.js', JSON.stringify(logfile));refreshPage();'toast://已设置为'+input",
        col_type: 'flex_button'
    })
    d.push({
        title: '‘‘更多相关设置’’',
        url: 'hiker://empty',
        col_type: 'text_1'
    });
    d.push({
        title: '光影规则更新',
        url: 'hiker://empty' + "@lazyRule=.js:'rule://' + base64Encode(request('http://82.156.222.77/dzqy/GYJC-rule.txt'))",
        col_type: 'flex_button'
    });
    d.push({
        title: '光影插件更新',
        url: 'hiker://empty' + "@lazyRule=.js:var get=request('http://82.156.222.77/dzqy/Gy-extensions.js');if(get!=''){writeFile('hiker://files/rules/js/Gy-extensions2.js',get);writeFile('hiker://files/cache/gyupdate2.txt',new Date()+'');refreshPage();'toast://已获取更新！'}else{refreshPage();'toast://暂未获取到更新，请稍后重试！'}",
        col_type: 'flex_button'
    });
    d.push({
        title: '重置光影数据',
        url: "confirm://注意：此操作不可逆，执行后可以修复光影数据与插件不匹配的异常，请慎重选择！.js:writeFile('hiker://files/rules/js/Gy-logfile2.js', '');refreshPage();'toast://已清空光影数据'",
        col_type: 'flex_button'
    });
    try {
        var config = fetch('hiker://files/cache/MyParseSet.json');
        var jsUrl = 'https://code.aliyun.com/AI957/Hiker/raw/master/v/CloudParse-V2_Dn.js';
        if (config && fetch(JSON.parse(config).cj)) {
            jsUrl = JSON.parse(config).cj;
        }
        eval(fetch(jsUrl));
        d.push({
            title: '打开断插设置',
            url: setUrl,
            pic_url: '',
            col_type: 'flex_button'
        });
    } catch (e) {}
    d.push({
        title: '断插设置恢复',
        url: "confirm://此功能用于断插403异常后恢复断插设置页面.js:'rule://'+base64Encode('海阔视界，本地文件￥file_url￥hiker://files/cache/Parse_Dn.html@http://82.156.222.77/dzqy/Parse_Dn.html');",
        col_type: 'flex_button'
    });
    d.push({
        title: '重置断插数据',
        url: "confirm://注意：此操作不可逆，推荐优先使用断插设置恢复功能，请慎重选择！.js:writeFile('hiker://files/cache/MyParseSet.json', '');writeFile('hiker://files/cache/Parse_Dn.html', '');writeFile('hiker://files/cache/Parse_Dn.js', '');refreshPage();'toast://已重置断插设置'",
        col_type: 'flex_button'
    });
    if (fetch('hiker://files/rules/js/Messy-parsing.js') == '') {
        for (var i in d) {
            if (d[i].title == '努力插件') {
                d[i] = '';
                break;
            }
        }
    }
    setResult(d);
}
function main() {
    var d = [];
    var videoname = getUrl().split('#')[1];
    try {
        setPageTitle(videoname);
    } catch (e) {}
    var html = getResCode();
    var get = request('hiker://files/rules/js/Gy-logfile2.js', {});
    var logfile = get != '' ? JSON.parse(get) : {};
    logfile.history == null ? (logfile.history = [{}]) : 0;
    logfile.playermode == null ? (logfile.playermode = '1') : 0;
    logfile.parsemode == null ? (logfile.parsemode = '0') : 0;
    logfile.parselist == null ? (logfile.parselist = ['', '', '', '', '', '', '', '', '', '']) : 0;
    logfile.indent == null ? (logfile.indent = '') : 0;
    logfile.search == null ? (logfile.search = []) : 0;
    logfile.searchtype == null ? (logfile.searchtype = 'icon_small_4') : 0;
    logfile.tabcolor == null ? (logfile.tabcolor = '#FA7298') : 0;
    writeFile('hiker://files/rules/js/Gy-logfile2.js', JSON.stringify(logfile));
    var gyset = 'hiker://empty#noHistory#' + "@rule=js:var get=fetch('hiker://files/rules/js/Gy-extensions2.js',{});eval(get);setting();";
    var openset = 'hiker://empty#noLoading#' + "@lazyRule=.js:var open=getVar('open','0');putVar('open',Number(open)+1);if(open=='7'){putVar('open','0');var logfile = JSON.parse(request('hiker://files/rules/js/Gy-logfile2.js', {}));logfile.openset=1;writeFile('hiker://files/rules/js/Gy-logfile2.js', JSON.stringify(logfile));refreshPage();'toast://已开启设置功能!'}else{'hiker://empty'}"
    var sources_title = ['', '腾讯视频', '', '优酷视频', '', '', '', '', '哔哩哔哩', '爱奇艺视频'];
    var pics_list = parseDomForArray(html, 'body&&.related-pic-bd&&li');
    try {
        var content = JSON.parse(unescape(parseDomForHtml(html, 'html&&script[type="application/ld+json"]&&Html').replace(/\u0000|\u0001|\u0002|\u0003|\u0004|\u0005|\u0006|\u0007|\u0008|\u0009|\u000a|\u000b|\u000c|\u000d|\u000e|\u000f|\u0010|\u0011|\u0012|\u0013|\u0014|\u0015|\u0016|\u0017|\u0018|\u0019|\u001a|\u001b|\u001c|\u001d|\u001e|\u001f|\u007F/g, '').replace(/\\u/g, '%u')));
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
            title: content.datePublished != '' ? (videoname + '(' + content.datePublished + ')' + '\n类型:' + content.genre) : (videoname + '\n类型:' + content.genre),
            desc: director + '\n' + actor,
            url: logfile.openset == 1 ? gyset : openset,
            pic_url: content.image,
            col_type: 'movie_1_vertical_pic'
        });
    } catch (e) {
        var content = {};
    }
    try {
        var id = content.url.replace(/[^0-9]/g, '');
    } catch (e) {
        var id = MY_URL.split('https://movie.douban.com/subject/')[1].split('/')[0]
    }
    for (var i = logfile.history.length; i--; i > 0) {
        if (logfile.history[i].id == id) {
            var record = logfile.history[i].sources
            break;
        }
    }
    if (getVar('sources', '0') == '0') {
        putVar('sources', record)
    }
    d.push({
        title: '演职员详情',
        pic_url: 'https://z3.ax1x.com/2021/06/04/28DcG9.png',
        url: 'https://movie.douban.com' + content.url + 'celebrities#noHistory#' + "@rule=js:eval(fetch('hiker://files/rules/js/Gy-extensions2.js'));actors();",
        col_type: 'icon_small_4'
    });
    d.push({
        title: '预告花絮',
        pic_url: 'https://z3.ax1x.com/2021/06/04/28Dg2R.png',
        url: 'https://movie.douban.com' + content.url + 'trailer#noHistory#' + "@rule=js:eval(fetch('hiker://files/rules/js/Gy-extensions2.js'));notice();",
        col_type: 'icon_small_4'
    });
    d.push({
        title: '影片长评',
        pic_url: 'https://z3.ax1x.com/2021/06/12/25NrNt.png',
        url: 'hiker://empty' + content.url + 'reviews?sort=hotest&start=fypage@-1@*20@#' + "@rule=js:eval(fetch('hiker://files/rules/js/Gy-extensions2.js', {}));reviews_list();",
        col_type: 'icon_small_4'
    });
    d.push({
        title: '影片短评',
        pic_url: 'https://z3.ax1x.com/2021/06/04/28DWKx.png',
        url: 'hiker://empty' + content.url + 'comments?start=fypage@-1@*20@&limit=20&sort=new_score&status=P&percent_type=' + "@rule=js:eval(fetch('hiker://files/rules/js/Gy-extensions2.js', {}));comments();",
        col_type: 'icon_small_4'
    });
    d.push({
        col_type: 'line_blank'
    });
    d.push({
        title: '‘‘⇒\r点此搜索本片\r⇐’’',
        pic_url: 'https://z3.ax1x.com/2021/06/04/28DhqK.png',
        url: 'hiker://search?s=' + videoname,
        col_type: 'text_center_1'
    })
    logfile.searchtype == 'scroll_button' ? d.push({
        col_type: 'big_blank_block'
    }) : 0;
    for (var i in logfile.search) {
        if (logfile.search[i] != '') {
            try {
                d.push({
                    title: logfile.search[i].split('@@')[0],
                    url: 'hiker://search?s=' + videoname + '&rule=' + logfile.search[i].split('@@')[1],
                    pic_url: logfile.search[i].split('@@')[2],
                    col_type: logfile.searchtype,
                });
            } catch (e) {}
        }
    }
    d.push({
        col_type: 'line_blank'
    });
    var lazy = "@lazyRule=.js:try{var input=input.split(';')[0]}catch(e){};var input=input.replace('?bsource=douban&amp','');var config = fetch('hiker://files/cache/MyParseSet.json');var jsUrl = 'https://code.aliyun.com/AI957/Hiker/raw/master/v/CloudParse-V2_Dn.js';if (config && fetch(JSON.parse(config).cj)) {jsUrl = JSON.parse(config).cj;}eval(fetch(jsUrl));eval(fetch('hiker://files/rules/js/Messy-parsing.js'));var logfile=JSON.parse(request('hiker://files/rules/js/Gy-logfile2.js',{}));if(logfile.parsemode=='0'){var url=input}else if(logfile.parsemode=='1'){var url=aytmParse(input)}else if(logfile.parsemode=='2'){var url=player(input)}else if(logfile.parsemode=='3'){if(input.indexOf('qq.com')!=-1){var url=logfile.parselist[1]+input}else if(input.indexOf('youku.com')!=-1){var url=logfile.parselist[3]+input}else if(input.indexOf('bilibili.com')!=-1){var url=logfile.parselist[8]+input}else if(input.indexOf('iqiyi.com')!=-1){var url=logfile.parselist[9]+input}};if(logfile.playermode=='0'){refreshX5WebView(url);'toast://正在加载中！'}else{url}";
    var source_list = parseDomForArray(html, 'body&&.bs&&li');
    if (JSON.stringify(source_list).match(/腾讯视频|优酷视频|爱奇艺视频|哔哩哔哩/g) != null) {
        d.push({
            title: '影片片源',
            desc: getVar('sources', '0') != '0' ? '⇒ 点此折叠选集 ⇐' : '',
            url: getVar('sources', '0') == '0' ? ('hiker://empty') : ('hiker://empty#' + id + "@lazyRule=.js:var id = input.split('#')[1];var logfile = JSON.parse(request('hiker://files/rules/js/Gy-logfile2.js'));for (var i in logfile.history) {if (logfile.history[i].id == id) {var num = i;break;}else{var num = null}}if (num != null) {logfile.history[num].sources = '0';putVar('sources', '0');writeFile('hiker://files/rules/js/Gy-logfile2.js', JSON.stringify(logfile));}refreshPage();'hiker://empty'"),
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
                if (sources[1] != undefined) {
                    d.push({
                        title: '腾讯视频',
                        pic_url: 'https://s1.ax1x.com/2020/11/06/BhRK91.jpg',
                        url: 'hiker://empty' + "@lazyRule=.js:putVar('sources', '1');refreshPage();'toast://正在加载中!'",
                        col_type: 'icon_4'
                    })
                }
                if (sources[3] != undefined) {
                    d.push({
                        title: '优酷视频',
                        pic_url: 'https://s1.ax1x.com/2020/11/06/BhRmN9.png',
                        url: 'hiker://empty' + "@lazyRule=.js:putVar('sources', '3');refreshPage();'toast://正在加载中!'",
                        col_type: 'icon_4'
                    })
                }
                if (sources[8] != undefined) {
                    d.push({
                        title: '哔哩哔哩',
                        pic_url: 'https://s1.ax1x.com/2020/11/06/BhReAJ.png',
                        url: 'hiker://empty' + "@lazyRule=.js:putVar('sources', '8');refreshPage();'toast://正在加载中!'",
                        col_type: 'icon_4'
                    })
                }
                if (sources[9] != undefined) {
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
                        desc: '⇒ 点此临时开启简要模式 ⇐',
                        title: '当前片源:' + sources_title[getVar('sources', '0')],
                        url: 'hiker://empty' + "@lazyRule=.js:getVar('isepisode', '0') == '0' ? putVar('isepisode', '1') : 0;refreshPage();'toast://已临时开启,刷新页面关闭！'",
                        col_type: 'text_center_1'
                    })
                    for (var i in sources[getVar('sources', '0')]) {
                        d.push({
                            title: '第' + sources[getVar('sources', '0')][i].ep + '集',
                            desc: '#isepisode#',
                            url: unescape(sources[getVar('sources', '0')][i].play_link.replace('https://www.douban.com/link2/?url=', '').split('.html')[0] + '.html') + lazy,
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
                    desc: '⇒ 点此临时开启简要模式 ⇐',
                    title: '当前片源:' + sources_title[getVar('sources', '0')],
                    url: 'hiker://empty' + "@lazyRule=.js:getVar('isepisode', '0') == '0' ? putVar('isepisode', '1') : 0;refreshPage();'toast://已临时开启,刷新页面关闭！'",
                    col_type: 'text_center_1'
                })
            }
            for (var i in sources[getVar('sources', '0')]) {
                d.push({
                    title: '第' + sources[getVar('sources', '0')][i].ep + '集',
                    desc: '#isepisode#',
                    url: unescape(sources[getVar('sources', '0')][i].play_link.replace('http://www.douban.com/link2/?url=', '').split('.html')[0] + '.html') + lazy,
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
        writeFile('hiker://files/rules/js/Gy-logfile2.js', JSON.stringify(logfile));
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
            var score_star = logfile.indent + '力荐  ★★★★★';
        } else if (s == 1) {
            var score_star = logfile.indent + '推荐  ★★★★☆';
        } else if (s == 2) {
            var score_star = logfile.indent + '一般  ★★★☆☆';
        } else if (s == 3) {
            var score_star = logfile.indent + '还行  ★★☆☆☆';
        } else if (s == 4) {
            var score_star = logfile.indent + '较差  ★☆☆☆☆';
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
        title: '\r\r\r\r\r\r\r\r' + video_brief,
        col_type: 'long_text'
    })
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
                url: parseDomForHtml(pics_list[i], 'a&&href') + "@lazyRule=.js:parseDomForHtml(request(input,{}), 'body&&source&&src')",
                col_type: 'movie_2'
            });
        } else if (pics_list[i].indexOf('label-short-video') !== -1) {
            d.push({
                title: '视频评论',
                pic_url: parseDomForHtml(pics_list[i], 'a&&style'),
                url: parseDomForHtml(pics_list[i], 'a&&href') + "@lazyRule=.js:parseDomForHtml(request(input,{}), 'body&&source&&src'))",
                col_type: 'movie_2'
            });
        } else {
            d.push({
                title: '剧照',
                pic_url: parseDomForHtml(pics_list[i], 'img&&src').replace('sqxs', 'l').replace('img1', 'img9'),
                url: parseDomForHtml(pics_list[i], 'img&&src').replace('sqxs', 'l').replace('img1', 'img9'),
                col_type: 'movie_2'
            });
        }
    }
    d.push({
        title: '更多剧照',
        pic_url: 'https://cdn.jsdelivr.net/gh/Lingyan000/photos/img/20201104163813.gif',
        url: 'https://movie.douban.com' + content.url + 'photos?type=S&start=fypage@-1@*30@&sortby=like&size=a&subtype=a' + "@rule=js:try{setPageTitle('影片剧照');}catch(e){}var html=getResCode();var d = [];var pics_list = parseDomForArray(getResCode(), 'body&&.article&&li');for(var i in pics_list){d.push({pic_url:parseDomForHtml(pics_list[i],'img&&src').replace('sqxs', 'l'),url:parseDomForHtml(pics_list[i],'img&&src').replace('sqxs', 'l'),col_type:'pic_2'});}setResult(d);",
        col_type: 'movie_2'
    });
    var award_list = parseDomForArray(html, 'body&&.award');
    if (award_list != '') {
        d.push({
            col_type: 'line_blank'
        });
        d.push({
            title: '获奖情况',
            url: 'hiker://empty',
            col_type: 'text_center_1'
        });
        for (var i in award_list) {
            d.push({
                title: parseDomForHtml(award_list[i], '.award&&Text'),
                url: parseDomForHtml(award_list[i], 'a&&href') + "#noHistory#@rule=js:eval(fetch('hiker://files/rules/js/Gy-extensions2.js',{}));awards();",
                col_type: 'text_1'
            });
        }
        d.push({
            title: '‘‘’’<small>查看' + videoname + '的全部获奖情况</small>',
            url: 'https://movie.douban.com' + content.url + 'awards/#noHistory#' + "@rule=js:eval(fetch('hiker://files/rules/js/Gy-extensions2.js',{}));allawards();",
            col_type: 'text_center_1'
        });
    }
    d.push({
        col_type: 'line_blank'
    });
    d.push({
        title: '““””<small>以上数据来源于豆瓣，如您喜欢，请下载官方app</small>',
        desc: '““””<small>此规则仅限学习交流使用，请于导入后24小时内删除，任何组织或个人不得以任何方式方法传播此规则的整体或部分！</small>',
        url: 'https://m.douban.com/home_guide',
        col_type: 'text_center_1'
    });
    var newlist = [];
    if (getVar('isepisode', '0') == '1') {
        for (var i in d) {
            d[i].desc != null && d[i].desc.indexOf('#isepisode#') != -1 ? newlist.push(d[i]) : 0;
        }
        d = newlist;
    }
    for (var i in d) {
        d[i].desc != null && d[i].desc.indexOf('#isepisode#') != -1 ? d[i].desc = d[i].desc.replace('#isepisode#', '') : 0;
    }
    putVar('isepisode', '0');
    setResult(d);
}
function reviews_list() {
    try {
        setPageTitle('影片长评');
    } catch (e) {}
    var d = [];
    if (getUrl().indexOf('start=0') != -1) {
        d.push({
            title: '最受欢迎的',
            url: 'hiker://empty#noLoading#' + "@lazyRule=.js:putVar('reviews_type','sort=hotest');refreshPage();'hiker://empty'",
            col_type: 'scroll_button'
        });
        d.push({
            title: '最新发布的',
            url: 'hiker://empty#noLoading#' + "@lazyRule=.js:putVar('reviews_type','sort=time');refreshPage();'hiker://empty'",
            col_type: 'scroll_button'
        });
        for (var i = 5; i > 0; i--) {
            d.push({
                title: '给' + i + '星的评论',
                url: 'hiker://empty##noLoading#' + i + "@lazyRule=.js:putVar('reviews_type','rating='+getUrl().split('#')[1]);refreshPage();'hiker://empty'",
                col_type: 'scroll_button'
            });
        }
        d.push({
            col_type: 'line_blank'
        });
    }
    var html = request(getUrl().replace('hiker://empty', 'https://movie.douban.com').replace('sort=hotest', getVar('reviews_type', 'sort=hotest')), {
        headers: {
            "User-Agent": PC_UA
        }
    })
    var list = parseDomForArray(html, 'body&&.review-list&&.review-item');
    for (var i in list) {
        try {
            d.push({
                title: parseDomForHtml(list[i], '.name&&Text'),
                pic_url: parseDomForHtml(list[i], 'img&&src') + '@Referer=',
                url: 'hiker://empty',
                col_type: 'avatar'
            });
            d.push({
                col_type: 'line'
            });
            d.push({
                title: '<strong>' + parseDomForHtml(list[i], 'h2&&Text') + '</strong>',
                col_type: 'rich_text'
            });
            d.push({
                title: parseDomForHtml(list[i], '.short-content&&Text').replace(/这篇[剧影]评可能有剧透\s/g, '').replace('( 展开)', '') + '<a href="' + parseDomForHtml(list[i], 'h2&&a&&href') + `@rule=js:eval(fetch('hiker://files/rules/js/Gy-extensions2.js'));reviews_content();` + '">[查看全文]</a>',
                col_type: 'rich_text'
            });
            d.push({
                col_type: 'line_blank'
            });
        } catch (e) {}
    }
    setResult(d);
}
function reviews_content() {
    try {
        setPageTitle('长评详情');
    } catch (e) {}
    try {
        var desc = '““' + parseDomForHtml(getResCode(), '.main-title-tip&&Text') + '””';
    } catch (e) {
        var desc = ''
    }
    var d = [];
    var title = parseDomForHtml(getResCode(), 'meta[name="description"]&&content');
    d.push({
        title: '‘‘’’<big><strong>' + title + '</strong></big>',
        desc: desc,
        url: 'hiker;//empty',
        col_type: 'text_center_1'
    });
    var content = parseDomForArray(getResCode(), 'body&&#link-report')[0].replace(/blockquote/g, 'p').replace(/h2>/g, 'p>');
    var list = content.match(/<p[\s\S]*?\/p>|<img[\s\S]*?>/g)
    for (var i in list) {
        if (list[i].indexOf('<img') != -1) {
            d.push({
                pic_url: parseDom(list[i], 'img&&src'),
                url: parseDom(list[i], 'img&&src'),
                col_type: 'pic_1_full'
            });
        } else {
            parseDomForHtml(list[i], 'p&&Text') != '' ? d.push({
                title: parseDomForHtml(list[i], 'p&&Text').replace(/\s/g, ''),
                col_type: 'long_text'
            }) : 0;
        }
    }
    if (list == null) {
        d.push({
            title: parseDomForHtml(getResCode(), 'body&&#link-report&&Html'),
            col_type: 'rich_text'
        });
    }
    setResult(d);
}
function comments() {
    try {
        setPageTitle('影片短评');
    } catch (e) {}
    var d = [];
    if (getUrl().indexOf('start=0') != -1) {
        d.push({
            title: '最热评论',
            url: 'hiker://empty#noLoading#' + "@lazyRule=.js:putVar('comments_type','sort=new_score');refreshPage();'hiker://empty'",
            col_type: 'scroll_button'
        });
        d.push({
            title: '最新评论',
            url: 'hiker://empty#noLoading#' + "@lazyRule=.js:putVar('comments_type','sort=time');refreshPage();'hiker://empty'",
            col_type: 'scroll_button'
        });
        d.push({
            col_type: 'line_blank'
        });
    }
    var html = request(getUrl().replace('hiker://empty', 'https://movie.douban.com').replace('sort=new_score', getVar('comments_type', 'sort=new_score')), {
        headers: {
            "User-Agent": PC_UA
        }
    })
    var list = parseDomForArray(html, 'body&&#comments&&.comment-item');
    for (var i in list) {
        try {
            d.push({
                title: parseDomForHtml(list[i], 'a&&title'),
                pic_url: parseDomForHtml(list[i], 'img&&src') + '@Referer=',
                url: 'hiker://empty',
                col_type: 'avatar'
            });
            d.push({
                col_type: 'line'
            });
        } catch (e) {}
        try {
            d.push({
                title: parseDomForHtml(list[i], '.comment-content&&Text'),
                col_type: 'long_text'
            });
        } catch (e) {}
        d.push({
            col_type: 'line_blank'
        });
    }
    setResult(d);
}
function works() {
    try {
        setPageTitle('影人信息');
    } catch (e) {}
    var d = [];
    var people_pic = parseDom(getResCode(), 'body&&.nbg[title]&&img&&src');
    var people_title = parseDomForHtml(getResCode(), 'body&&.nbg[title]&&title');
    var people_desc = parseDomForHtml(getResCode(), 'body&&ul[class=""]&&Text');
    d.push({
        title: people_title,
        desc: people_desc,
        pic_url: people_pic,
        url: getUrl(),
        col_type: 'movie_1_vertical_pic'
    });
    d.push({
        col_type: 'line_blank'
    });
    try {
        var desc = parseDomForHtml(getResCode(), 'body&&#intro&&.all&&Text');
        d.push({
            title: '影人简介',
            url: 'hiker://empty',
            col_type: 'text_center_1'
        });
        d.push({
            title: desc.replace(/\s/g, ''),
            col_type: 'long_text'
        });
    } catch (e) {
        d.push({
            title: '该影人暂无简介',
            url: 'hiker://empty',
            col_type: 'text_center_1'
        });
    }
    d.push({
        col_type: 'line_blank'
    });
    try {
        var recent_movies_list = parseDomForArray(getResCode(), 'body&&#recent_movies&&li[class]');
        d.push({
            title: '最近上映的作品',
            url: 'hiker://empty',
            col_type: 'text_center_1'
        });
        for (var r in recent_movies_list) {
            d.push({
                title: parseDomForHtml(recent_movies_list[r], '.info&&a&&title'),
                desc: parseDomForHtml(recent_movies_list[r], 'em&&Text'),
                pic_url: parseDomForHtml(recent_movies_list[r], 'img[class]&&src'),
                url: parseDomForHtml(recent_movies_list[r], 'a&&href') + '#' + parseDomForHtml(recent_movies_list[r], '.info&&a&&title') + "@rule=js:eval(fetch('hiker://files/rules/js/Gy-extensions2.js', {}));main();",
                col_type: 'movie_3'
            });
        }
        d.push({
            col_type: 'line_blank'
        });
    } catch (e) {}
    try {
        var best_movies_list = parseDomForArray(getResCode(), 'body&&#best_movies&&li[class]');
        d.push({
            title: '最受欢迎的作品',
            url: 'hiker://empty',
            col_type: 'text_center_1'
        });
        for (var r in best_movies_list) {
            d.push({
                title: parseDomForHtml(best_movies_list[r], '.info&&a&&title'),
                desc: parseDomForHtml(best_movies_list[r], 'em&&Text'),
                pic_url: parseDomForHtml(best_movies_list[r], 'img[class]&&src'),
                url: parseDomForHtml(best_movies_list[r], 'a&&href') + '#' + parseDomForHtml(best_movies_list[r], '.info&&a&&title') + "@rule=js:eval(fetch('hiker://files/rules/js/Gy-extensions2.js', {}));main();",
                col_type: 'movie_3'
            });
        }
        d.push({
            col_type: 'line_blank'
        });
    } catch (e) {}
    d.push({
        title: '查看全部作品',
        url: getUrl() + 'movies?start=fypage@-1@*10@&format=pic&sortby=vote&#noHistory#' + "@rule=js:eval(fetch('hiker://files/rules/js/Gy-extensions2.js', {}));allmovie();",
        col_type: 'text_center_1'
    });
    setResult(d);
}
function allmovie() {
    var d = [];
    var list = parseDomForArray(getResCode(), 'body&&ul[class=""]&&li')
    for (var i in list) {
        try {
            var desc = parseDomForHtml(list[i], '.star&&span:not([class])&&Text');
        } catch (e) {}
        d.push({
            title: parseDomForHtml(list[i], 'img&&alt'),
            desc: desc != null ? (desc + '分') : '',
            pic_url: parseDomForHtml(list[i], 'img&&src'),
            url: parseDomForHtml(list[i], '.nbg&&href') + '#' + parseDomForHtml(list[i], 'img&&alt') + "@rule=js:eval(fetch('hiker://files/rules/js/Gy-extensions2.js', {}));main();",
            col_type: 'movie_3'
        });
        var desc = null;
    }
    setResult(d);
}
function collection() {
    var returntext = '';
    var html = getResCode();
    var sources_title = ['', '腾讯视频', '', '优酷视频', '', '', '', '', '哔哩哔哩', '爱奇艺视频'];
    var source_list = parseDomForArray(html, 'body&&.bs&&li');
    if (JSON.stringify(source_list).match(/腾讯视频|优酷视频|爱奇艺视频|哔哩哔哩/g) == null) {
        var returntext = '未发现片源';
    } else {
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
                for (var i in sources) {
                    var returntext = sources[i] != undefined ? (returntext + sources_title[i] + '｜更新至：第' + sources[i].length + '集\n') : returntext;
                }
            }
        }
    }
    if (!judge) {
        var script_list = parseDomForArray(html, 'body&&script[src]');
        for (var i in script_list) {
            var url = parseDomForHtml(script_list[i], 'script&&src');
            if (url.indexOf('mixed_static') != -1) {
                var sources_url = url;
            }
        }
        var sources_list = request(sources_url, {}).match(/sources\[[1-9]\][\s\S]*?\]/g);
        var sources = {};
        for (var i in sources_list) {
            eval(sources_list[i]);
        }
        for (var i in sources) {
            var returntext = sources[i] != undefined ? (returntext + sources_title[i] + '｜更新至：第' + sources[i].length + '集\n') : returntext;
        }
    }
    try {
        var returntext = returntext.split('\n')[0];
    } catch (e) {}
    setResult(returntext);
}
function search() {
    var d = [];
    let json = JSON.parse(getResCode());
    let html = '<body>' + json.html + '</body>';
    let list = parseDomForArray(html, 'body&&li');
    for (let i in list) {
        d.push({
            title: parseDomForHtml(list[i], '.subject-title&&Text'),
            desc: '豆瓣评分:' + parseDomForHtml(list[i], '.rating&&Text'),
            pic_url: parseDomForHtml(list[i], 'img&&src'),
            url: parseDomForHtml(list[i], 'a&&href').replace('/movie', 'https://movie.douban.com') + '#' + parseDomForHtml(list[i], '.subject-title&&Text'),
            col_type: 'movie_3'
        });
    }
    setResult(d);
}
function ranking() {
    var d = [];
    var page = MY_URL.split('#')[1];
    if (page == '0') {
        var movieTag = ['热门', '最新', '豆瓣高分', '冷门佳片', '华语', '欧美', '韩国', '日本'];
        var tvTag = ['热门', '国产剧', '综艺', '美剧', '日剧', '韩剧', '日本动画', '纪录片'];
        d.push({
            title: '电影 ⇒',
            url: 'hiker://empty',
            col_type: 'scroll_button'
        });
        for (var i in movieTag) {
            d.push({
                title: (getVar('tag', 'movie@@热门').split('@@')[0] == 'movie' && getVar('tag', 'movie@@热门').split('@@')[1] == movieTag[i] && getVar('type', '') == '') ? ('‘‘’’<font color="#1aad19">' + movieTag[i] + '</font>') : movieTag[i],
                url: 'hiker://empty#movie@@' + movieTag[i] + "@lazyRule=.js:putVar('type','');putVar('tag',input.split('#')[1]);refreshPage();'hiker://empty'",
                col_type: 'scroll_button'
            });
        }
        d.push({
            col_type: 'blank_block'
        });
        d.push({
            title: '剧集 ⇒',
            url: 'hiker://empty',
            col_type: 'scroll_button'
        });
        for (var i in tvTag) {
            d.push({
                title: (getVar('tag', 'movie@@热门').split('@@')[0] == 'tv' && getVar('tag', 'movie@@热门').split('@@')[1] == tvTag[i] && getVar('type', '') == '') ? ('‘‘’’<font color="#1aad19">' + tvTag[i] + '</font>') : tvTag[i],
                url: 'hiker://empty#tv@@' + tvTag[i] + "@lazyRule=.js:putVar('type','');putVar('tag',input.split('#')[1]);refreshPage();'hiker://empty'",
                col_type: 'scroll_button'
            });
        }
        var type = ['剧情', '喜剧', '动作', '爱情', '科幻', '动画', '悬疑', '惊悚', '恐怖', '纪录片', '短片', '情 色', '同性', '音乐', '歌舞', '家庭', '儿童', '传记', '历史', '战争', '犯罪', '西部', '奇幻', '冒险', '灾难', '武侠', '古装', '运动', '黑色电影'];
        var typeId = ['11', '24', '5', '13', '17', '25', '10', '19', '20', '1', '23', '6', '26', '14', '7', '28', '8', '2', '4', '22', '3', '27', '16', '15', '12', '29', '30', '18', '31']
        var score = ['10-9', '9-8', '8-7', '7-6', '6-5', '5-4', '4-3', '3-2'];
        var scoreId = ['100:90', '90:80', '80:70', '70:60', '60:50', '50:40', '40:30', '30:20'];
        d.push({
            col_type: 'blank_block'
        });
        d.push({
            title: '类型 ⇒',
            url: 'hiker://empty',
            col_type: 'scroll_button'
        });
        for (var i in type) {
            d.push({
                title: (getVar('type') == typeId[i]) ? ('‘‘’’<font color="#1aad19">' + type[i] + '</font>') : type[i],
                url: 'hiker://empty#' + typeId[i] + "@lazyRule=.js:putVar('type',input.split('#')[1]);getVar('score','')==''?putVar('score','100:90'):0;refreshPage();'hiker://empty'",
                col_type: 'scroll_button'
            });
        }
        d.push({
            col_type: 'blank_block'
        });
        d.push({
            title: '评分 ⇒',
            url: 'hiker://empty',
            col_type: 'scroll_button'
        });
        for (var i in score) {
            d.push({
                title: (getVar('type', '') != '' && getVar('score') == scoreId[i]) ? ('‘‘’’<font color="#1aad19">' + score[i] + '</font>') : score[i],
                url: 'hiker://empty#' + scoreId[i] + "@lazyRule=.js:putVar('score',input.split('#')[1]);getVar('type','')==''?putVar('type','11'):0;refreshPage();'hiker://empty'",
                col_type: 'scroll_button'
            });
        }
    }
    if (getVar('type', '') == '') {
        var list = JSON.parse(fetch('https://movie.douban.com/j/search_subjects?type=' + getVar('tag', 'movie@@热门').split('@@')[0] + '&tag=' + getVar('tag', 'movie@@热门').split('@@')[1] + '&page_limit=30&page_start=' + page)).subjects;
        for (var i in list) {
            d.push({
                title: list[i].title,
                desc: list[i].rate != '' ? (list[i].rate + '分') : '暂无评分',
                pic_url: list[i].cover + '@Referer=',
                url: list[i].url + '#' + list[i].title + ";get;UTF-8;{User-Agent@Mozilla/5.0 (Windows NT 10.0；； WOW64)}@rule=js:var get=fetch('hiker://files/rules/js/Gy-extensions2.js');eval(get);main();",
                col_type: 'movie_3'
            });
        }
    } else {
        var list = JSON.parse(fetch('https://movie.douban.com/j/chart/top_list?type=' + getVar('type') + '&interval_id=' + getVar('score', '100:90') + '&action=&start=' + page + '&limit=30'));
        for (var i in list) {
            d.push({
                title: list[i].title,
                desc: list[i].score != '' ? (list[i].score + '分') : '暂无评分',
                pic_url: list[i].cover_url + '@Referer=',
                url: 'https://movie.douban.com/subject/' + list[i].id + '/#' + list[i].title + ";get;UTF-8;{User-Agent@Mozilla/5.0 (Windows NT 10.0；； WOW64)}@rule=js:eval(fetch('hiker://files/rules/js/Gy-extensions2.js'));main();",
                col_type: 'movie_3'
            });
        }
    }
    setResult(d);
}
function actors() {
    try {
        setPageTitle('演职员详情');
    } catch (e) {}
    var d = [];
    var list = parseDomForArray(getResCode(), 'body&&#content&&.list-wrapper');
    for (var i in list) {
        try {
            d.push({
                title: parseDomForHtml(list[i], 'h2&&Text'),
                col_type: 'long_text'
            });
        } catch (e) {}
        var personnel_list = parseDomForArray(list[i], 'ul&&li');
        for (var j in personnel_list) {
            try {
                d.push({
                    title: parseDomForHtml(personnel_list[j], 'a&&title'),
                    desc: parseDomForHtml(personnel_list[j], '.works&&Text'),
                    pic_url: parseDomForHtml(personnel_list[j], '.avatar&&style'),
                    url: parseDomForHtml(personnel_list[j], 'a&&href') + '#noHistory#' + "@rule=js:var get=fetch('hiker://files/rules/js/Gy-extensions2.js',{});eval(get);works();",
                    col_type: 'movie_1_vertical_pic'
                })
            } catch (e) {}
        }
    }
    setResult(d);
}
function notice() {
    try {
        setPageTitle('预告花絮');
    } catch (e) {}
    var d = [];
    var title_list = parseDomForArray(getResCode(), 'body&&#content&&h2[id]');
    var list_list = parseDomForArray(getResCode(), 'body&&#content&&.video-list');
    for (var i in title_list) {
        d.push({
            title: parseDomForHtml(title_list[i], 'h2&&Text').split(" · · · · · ·")[0],
            url: '',
            col_type: 'long_text'
        });
        var video_list = parseDomForArray(list_list[i], 'ul&&li');
        for (var j in video_list) {
            d.push({
                title: parseDomForHtml(video_list[j], 'a:not([class])&&Text'),
                desc: parseDomForHtml(video_list[j], 'strong&&Text'),
                pic_url: parseDomForHtml(video_list[j], 'img&&src'),
                url: parseDomForHtml(video_list[j], 'a&&href') + "@lazyRule=body&&source&&src",
                col_type: 'pic_2'
            });
        }
    }
    setResult(d);
}
function allawards() {
    var d = [];
    setPageTitle(parseDomForHtml(getResCode(), 'body&&#content&&h1&&Text'));
    d.push({
        title: '‘‘<strong>' + parseDomForHtml(getResCode(), 'body&&#content&&h1&&Text') + '</strong>’’',
        url: 'hiker://empty',
        col_type: 'text_center_1'
    });
    var awards_list = parseDomForArray(getResCode(), 'body&&#content&&.awards');
    for (var i in awards_list) {
        d.push({
            col_type: 'line_blank'
        });
        d.push({
            title: '‘‘’’<strong>' + parseDomForHtml(awards_list[i], 'h2&&Text') + '</strong>',
            url: parseDomForHtml(awards_list[i], 'a&&href') + "#noHistory#@rule=js:eval(fetch('hiker://files/rules/js/Gy-extensions2.js',{}));awards();",
            col_type: 'text_1'
        });
        var list = parseDomForArray(awards_list[i], '.awards&&.award');
        for (var j in list) {
            d.push({
                title: parseDomForHtml(list[j], '.award&&Text'),
                url: 'hiker://empty',
                col_type: 'text_1'
            });
        }
    }
    setResult(d);
}
function awards() {
    var d = [];
    setPageTitle(parseDomForHtml(getResCode(), 'body&&#content&&h1&&Text'));
    try {
        d.push({
            title: parseDomForHtml(getResCode(), 'body&&#content&&h1&&Text'),
            desc: parseDomForHtml(getResCode(), 'body&&#content&&.desc&&Text'),
            pic_url: parseDomForHtml(getResCode(), 'body&&#content&&.poster&&img&&src'),
            url: 'hiker://empty',
            col_type: 'movie_1_vertical_pic'
        });
    } catch (e) {}
    d.push({
        col_type: 'line_blank'
    });
    var movies_list = parseDomForArray(getResCode(), 'body&&#feature-slide&&.ui-slide-item');
    d.push({
        title: '获奖影片',
        url: 'hiker://empty',
        col_type: 'text_center_1'
    });
    for (var i in movies_list) {
        try {
            d.push({
                title: parseDomForHtml(movies_list[i], 'a[title]&&title'),
                desc: parseDomForHtml(movies_list[i], '.aw&&Text'),
                pic_url: parseDom(movies_list[i], 'img&&src'),
                url: parseDom(movies_list[i], 'a&&href') + '#' + parseDomForHtml(movies_list[i], 'a[title]&&title') + "@rule=js:eval(fetch('hiker://files/rules/js/Gy-extensions2.js',{}));main();",
                col_type: 'movie_3'
            });
        } catch (e) {}
    }
    d.push({
        col_type: 'line_blank'
    });
    var year_awards = parseDomForArray(getResCode(), 'body&&#content&&#year_awards&&ul&&li');
    d.push({
        title: parseDomForHtml(getResCode(), 'body&&#content&&#year_awards&&h2&&Text'),
        url: 'hiker://empty',
        col_type: 'text_center_1'
    });
    for (var i in year_awards) {
        d.push({
            title: parseDomForHtml(year_awards[i], 'li&&Text'),
            url: parseDomForHtml(year_awards[i], 'a&&href') + "#noHistory#@rule=js:eval(fetch('hiker://files/rules/js/Gy-extensions2.js',{}));awards();",
            col_type: 'text_5'
        });
    }
    setResult(d);
}