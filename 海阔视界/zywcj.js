function updata() {
    var res = {};
    var items = [];

    res.data = items;
    setHomeResult(res);
};

function filter(key) {
    //var word = JSON.parse(base64Decode('WyLkvKbnkIYiLCAi5YaZ55yfIiwgIuemj+WIqSIsICJWSVAiLCAi576O5aWzIiwgIumHjOeVqiIsICLmgKfmhJ8iLCAi5YCr55CGIiwgIuiuuueQhiIsICLmiJDkuroiLCAi5oOF6ImyIiwgIuaXoOeggSIsICLmnInnoIEiLCAi5aa7IiwgIuivsSIsICLkubMiLCAi57qi5Li7IiwgIuiOiSIsICLlk4HmjqgiLCAi5paH5a2XIiwgIuS4iee6pyIsICLnvo7lsJEiLCAiSEVZIiwgIumqkeWFtSIsICLkuqfoh6oiLCAi5oCn54ixIiwgIuijuOiBiiIsICLkubHkvKYiLCAi5YG3IiwgIkFWIiwgImF2IiwgIua3qyIsICLlppYiLCAi5ZCM5oCnIiwgIueUt+WQjCIsICLlpbPlkIwiLCAi5Lq6IiwgIuWmhyIsICLkuJ0iLCAi56eBIiwgIueblyIsICLomZrmi58iLCAi5LqkIiwgIlNNIiwgIuaFsCIsICLnsr7lk4EiLCAi5a2m55SfIiwgIuWwhCIsICIzUCIsICLlpKfnp4AiLCAi57K+5ZOBIiwgIuWPo+WRsyIsICLpq5jmva4iLCAi5p6B5ZOBIiwgIkRNTSIsICLpppbmrKEiLCAi6L6j5qSSIiwgIuWutuaTgiIsICLoibLmg4UiLCAi5Li75pKtIiwgIuWQjeS8mCIsICLlubwiLCAi55yJIiwgIuWlsyIsICLpmLQiLCAi5aW4IiwgIui9qCIsICLluIgiLCAi5oOF5L6jIiwgIua/gCIsICLmgIEiLCAi5o6nIiwgIumjnuacuiIsICLmjqgiLCAi5r2uIiwgIum6u+ixhiIsICJleSJd'));
    var word=[];
    //for (var i = 0; i < word.length; i++) {
    //    if (key.indexOf(word[i]) > -1) {
    //        return true;
     //   }
    //}
    return false;
};

function zywhm() {
    var html = getResCode();
    var arr = html.indexOf('http') != -1 ? html.match(/#[\s\S]*?#/g) : base64Decode(html).match(/#[\s\S]*?#/g);
    var setjson = JSON.parse(fetch('hiker://files/rules/xyq/zywset2.json', {}));
    var ssmd = setjson.ssmode;
    var ssxc = setjson.sscount;
    var self = JSON.parse(getRule()).title;
    var res = {};
    var items = [];
    //items.push({col_type: 'line'});

    var decText = getVar("xyqtext", "");
    items.push({
        title: decText,
        url: "input://" + '' + ".js:putVar('xyqtext',input);refreshPage()",
        col_type: 'icon_1_search'
    });

    var ssyq = ['香情影视搜@@香情影视.奈菲', '资源网采集搜@@资源网采集.xyq2'];
    if (self !== '资源网采集.xyq2') {
        items.push({
            title: self+'搜',
            url: 'hiker://search?s=' + getVar('xyqtext') + '&rule=' + self,
            col_type: 'flex_button'
        });
    } else {
        for (var yq in ssyq) {
            var kj = ssyq[yq].split('@@');
            items.push({
                title: kj[0],
                url: 'hiker://search?s=' + getVar('xyqtext') + '&rule=' + kj[1],
                col_type: "flex_button"
            });
        }
    }
    var len = [];
    for (var i = 0; i < arr.length; i++) {
        var tabs = arr[i].match(/#.*?[\s]/g)[0].split('#')[1].replace(/\n/, '');
        var list = arr[i].match(/[\S]*?,.*?[\s]/g);

        items.push({
            title: tabs,
            col_type: 'text_1'

        });

        for (var j = 0; j < list.length; j++) {
            len.push({
                title: list[j].split(',')[0]
            });
            items.push({
                title: list[j].split(',')[0],
                url: list[j].split(',')[1] + '?ac=list&pg=fypage',
                col_type: 'text_3'
            });
        }
    } //for arr.length

    items.unshift({
        title: '香情影视',
        url: 'hiker://home@香情影视||https://code.aliyun.com/lzk23559/Rulehouse/raw/master/%E9%A6%99%E6%83%85%E5%BD%B1%E8%A7%86%E5%8F%A3%E4%BB%A4.txt',
        col_type: 'flex_button'
    });
    items.unshift({
        title: '🔄更新' + '(共' + len.length + '个)',
        url: $('hiker://empty').lazyRule(() => {
            var rulejs = fetch('https://raw.githubusercontent.com/YuanHsing/freed/master/%E6%B5%B7%E9%98%94%E8%A7%86%E7%95%8C/zywcj.js', {});
            writeFile("hiker://files/rules/xyq/zywcj2.js", rulejs);
            //var ruletxt = fetch('https://codeberg.org/lzk23559/PublicRule/raw/branch/master/ZYWCJ.txt', {});
            //writeFile("hiker://files/rules/xyq/ZYWCJ2.txt", ruletxt);
            refreshPage(false);
            return 'toast://应该是获取最新了吧。'
        }),
        col_type: 'flex_button'
    });
    items.unshift({
        title: '🔍设置' + '(' + (ssmd == 1 ? '聚' + ssxc : '列') + ')',
        url: $('hiker://empty').rule(() => {
            var d = [];
            var setjson = JSON.parse(fetch('hiker://files/rules/xyq/zywset2.json', {}));
            var ssmd = setjson.ssmode;
            var ssxc = setjson.sscount;
            d.push({
                title: '搜索模式设置',
                col_type: 'text_center_1'
            });
            d.push({
                title: '当前：' + '(' + (ssmd == 1 ? '聚合结果' : '引擎列表') + ')',
                url: $('hiker://empty').lazyRule(() => {
                    var md = JSON.parse(fetch('hiker://files/rules/xyq/zywset2.json', {})).ssmode;
                    if (md == 1) {
                        var fileUrl = fetch("hiker://files/rules/xyq/zywset2.json", {}).replace('\"ssmode\":\"1\"', '\"ssmode\":\"0\"');
                        writeFile("hiker://files/rules/xyq/zywset2.json", fileUrl);
                        back(true);
                        return 'toast://切换为搜索引擎列表单选模式成功！';
                    } else {
                        var fileUrl = fetch("hiker://files/rules/xyq/zywset2.json", {}).replace('\"ssmode\":\"0\"', '\"ssmode\":\"1\"');
                        writeFile("hiker://files/rules/xyq/zywset2.json", fileUrl);
                        back(true);
                        return 'toast://切换为聚合搜索模式成功！'
                    }
                }),
                col_type: 'text_2'
            })

            d.push({
                title: '搜索线程设置',
                col_type: 'text_center_1'
            });
            d.push({
                title: '当前线程' + ssxc + '  ' + '你输入的是' + parseInt(getVar('zywssxcset', '')),
                col_type: 'rich_text'
            });

            d.push({
                title: '设置搜索线程',
                url: "input://" + '' + "////请输入一个整数数字，推荐最大不要超过15。.js:putVar('zywssxcset',input);refreshPage()",
                col_type: 'text_2'
            });

            d.push({
                title: '保存设置',
                url: $().lazyRule(() => {
                    var num = parseInt(getVar('zywssxcset')).toString();
                    if (num == 'NaN') {
                        return 'toast://输入的值好像不正确。';
                    } else {
                        var fileUrl = fetch("hiker://files/rules/xyq/zywset2.json", {}).replace(/\"sscount\":\"[\S]*\"/, '\"sscount\":\"' + num + '\"');
                        writeFile("hiker://files/rules/xyq/zywset2.json", fileUrl);
                        refreshPage(true);
                        return 'toast://保存设置搜索线程完成！';
                    }
                }),
                col_type: 'text_2'
            });
            setResult(d)
        }),
        col_type: 'flex_button'
    });

    res.data = items;
    setHomeResult(res);
};


//图片替换函数
function picfun() {
    if (MY_URL.indexOf("pangniaozyw") != -1 || MY_URL.indexOf("leshizyw") != -1 || MY_URL.indexOf("9191zy") != -1) {
        pic = "https://tu.tianzuida.com/pic/" + pic;
    } else if (MY_URL.indexOf("lby") != -1) {
        pic.indexOf("http") != -1 ? pic = pic : pic = "http://cj.lby.pet/" + pic;
    } else if (MY_URL.indexOf("xjiys") != -1) {
        pic = pic.replace("img.maccms.com", "xjiys.com");
    } else if (MY_URL.indexOf("shidian") != -1) {
        pic = pic.replace("img.maccms.com", "shidian.vip");
    } else if (MY_URL.indexOf("17kanju") != -1) {
        pic = pic.replace("img.maccms.com", "img.17kanju.com");
    } else if (MY_URL.indexOf("potatost") != -1) {
        pic = pic.replace("http://img.maccms.com//pic=", "");
    }
};
//列表解析函数
function listfun() {
    try {
        var list = parseDomForArray(html, "rss&&video");
        for (var j = 0; j < list.length; j++) {
            var title = parseDomForHtml(list[j], "body&&name&&Text").split('<')[0];
            var url = parseDomForHtml(list[j], "body&&id&&Text");
            var note = parseDomForHtml(list[j], "body&&note&&Text");
            var typ = parseDomForHtml(list[j], "body&&type&&Text");
            var last = parseDomForHtml(list[j], "body&&last&&Text");           
            if (!filter(typ)) {            	
                if (html.indexOf("</pic>") != -1) {
                    var pic = parseDomForHtml(list[j], "body&&pic&&Text").replace("http://t.8kmm.com", "https://www.wxtv.net");
                    eval(fetch("hiker://files/rules/xyq/zywcj2.js"));
                    picfun();
                    items.push({
                        title: title,
                        pic_url: pic + '@Referer=' + pic,
                        desc: note,
                        url: arrr + "?ac=videolist&ids=" + url +
                            `@rule=js:eval(fetch('hiker://files/rules/xyq/zywcj2.js'));SSEJ();`,
                        col_type: "movie_3"
                    });
                } else {                	
                    var dt = parseDomForHtml(list[j], "body&&dt&&Text");
                    items.push({
                        title: title + "  状态:" + note,
                        desc: last + ' ' + typ + ' ' + dt,
                        url: arrr + "?ac=videolist&ids=" + url +
                            `@rule=js:eval(fetch('hiker://files/rules/xyq/zywcj2.js'));SSEJ();`,
                        col_type: "text_1"
                    })
                }
            }
        }
    } catch (e) {}
};

//json列表解析函数
function jsonlist() {
    try {
        var list = html.list;
        for (var j = 0; j < list.length; j++) {
            var title = list[j].vod_name;
            var url = list[j].vod_id;
            var note = list[j].vod_remarks;
            var typ = list[j].type_name;
            var last = list[j].vod_time;
            if (!filter(typ)) {
                if (list[j].vod_pic) {
                    var pic = list[j].vod_pic;
                    items.push({
                        title: title,
                        pic_url: pic + '@Referer=' + pic,
                        desc: note,
                        url: arrr + "?ac=videolist&ids=" + url +
                            `@rule=js:eval(fetch('hiker://files/rules/xyq/zywcj2.js'));SSEJ();`,
                        col_type: "movie_3"
                    });
                } else {
                    var dt = list[j].vod_play_from;
                    items.push({
                        title: title + "  状态:" + note,
                        desc: last + ' ' + typ + ' ' + dt,
                        url: arrr + "?ac=videolist&ids=" + url +
                            `@rule=js:eval(fetch('hiker://files/rules/xyq/zywcj2.js'));SSEJ();`,
                        col_type: "text_1"
                    })
                }
            }
        }
    } catch (e) {}
};


//二级规则函数
function TWEJ() {
    var res = {};
    var items = [];
    var arrr = MY_URL.split("?")[0];
    var pn = MY_URL.split("=")[2];
    var listmod = JSON.parse(fetch('hiker://files/rules/xyq/zywset2.json', {})).listmod;
    if (listmod == '1') {
        html = getResCode();
    } else {
        html = request(MY_URL.replace('ac=list', 'ac=videolist'))
    }
    //对第一页分类进行处理
    if (pn == '1') {
        try {
            if (/\<\/class\>/.test(html)) {
                rescod = getResCode();
            } else if (/type_name/.test(html)) {
                rescod = getResCode();
            } else {
                rescod = request(arrr + "?ac=list")
            }
            if (/type_name/.test(rescod)) {
                var type = JSON.parse(rescod).class;
            } else {
                var type = parseDomForHtml(rescod, "class&&Html").match(/<ty[\s]id[\s\S]*?<\/ty>/g);
            }
            for (var i = 0; i < type.length; i++) {
                if (/vod_play_from/.test(rescod)) {
                    var typ = type[i].type_name;
                    var tyid = type[i].type_id;
                } else {
                    var typ = parseDomForHtml(type[i], "body&&Text").split('{')[0];
                    var tyid = parseDomForHtml(type[i], "body&&ty&&id");
                }
                if (!filter(typ)) {
                    items.push({
                        title: typ,
                        url: $(arrr + "?ac=list&pg=fypage&t=" + tyid).rule(() => {
                            var arrr = MY_URL.split("?")[0];
                            var pn = MY_URL.split("pg=")[1].split("&t=")[0];
                            var listmod = JSON.parse(fetch('hiker://files/rules/xyq/zywset2.json', {})).listmod;
                            if (listmod == '1') {
                                html = getResCode();
                            } else {
                                html = request(MY_URL.replace('ac=list', 'ac=videolist'))
                            }
                            var res = {};
                            var items = [];
                            if (pn == '1') {
                                items.push({
                                    title: '‘‘’’<strong><font color="#ffaa64">纯文本列表</front></strong>',
                                    desc: '',
                                    url: $('hiker://empty').lazyRule(() => {
                                        var fileUrl = fetch("hiker://files/rules/xyq/zywset2.json", {}).replace('\"listmod\":\"0\"', '\"listmod\":\"1\"');
                                        writeFile("hiker://files/rules/xyq/zywset2.json", fileUrl);
                                        refreshPage();
                                        return 'toast://切换成功！'
                                    }),
                                    col_type: 'text_2'
                                });
                                items.push({
                                    title: '‘‘’’<strong><font color="#ffaa64">图文列表</front></strong>',
                                    desc: '',
                                    url: $('hiker://empty').lazyRule(() => {
                                        var fileUrl = fetch("hiker://files/rules/xyq/zywset2.json", {}).replace('\"listmod\":\"1\"', '\"listmod\":\"0\"');
                                        writeFile("hiker://files/rules/xyq/zywset2.json", fileUrl);
                                        refreshPage();
                                        return 'toast://切换成功！'
                                    }),
                                    col_type: 'text_2'
                                });
                                items.push({
                                    col_type: 'line'
                                });
                            }

                            if (/vod_play_from/.test(html)) {
                                html = JSON.parse(html);
                                eval(fetch('hiker://files/rules/xyq/zywcj2.js'));
                                jsonlist();
                            } else {
                                eval(fetch('hiker://files/rules/xyq/zywcj2.js'));
                                listfun();
                            }

                            res.data = items;
                            setHomeResult(res);
                        }),
                        //col_type:"text_3"
                        col_type: type.length >= 16 ? 'scroll_button' : 'flex_button'
                        //col_type:'flex_button'
                    });
                }
            }
        } catch (e) {}
        items.push({
            col_type: 'line'
        });
        items.push({
            title: '‘‘’’<strong><font color="#ffaa64">纯文本列表</front></strong>',
            desc: '',
            url: $('hiker://empty').lazyRule(() => {
                var fileUrl = fetch("hiker://files/rules/xyq/zywset2.json", {}).replace('\"listmod\":\"0\"', '\"listmod\":\"1\"');
                writeFile("hiker://files/rules/xyq/zywset2.json", fileUrl);
                refreshPage();
                return 'toast://切换成功！'
            }),
            col_type: 'text_2'
        });
        items.push({
            title: '‘‘’’<strong><font color="#ffaa64">图文列表</front></strong>',
            desc: '',
            url: $('hiker://empty').lazyRule(() => {
                var fileUrl = fetch("hiker://files/rules/xyq/zywset2.json", {}).replace('\"listmod\":\"1\"', '\"listmod\":\"0\"');
                writeFile("hiker://files/rules/xyq/zywset2.json", fileUrl);
                refreshPage();
                return 'toast://切换成功！'
            }),
            col_type: 'text_2'
        });
        items.push({
            col_type: 'line'
        });
    }
    //结束第一页分类处理

    //对列表处理开始
    if (/vod_play_from/.test(html)) {
        html = JSON.parse(html);
        eval(fetch('hiker://files/rules/xyq/zywcj2.js'));
        jsonlist();
    } else {
        eval(fetch('hiker://files/rules/xyq/zywcj2.js'));
        listfun();
    }
    //对列表处理结束
    res.data = items;
    setHomeResult(res);
};

function zywsea() {
    var res = {};
    var items = [];
    //获取搜索线程数量
    var ssxc = JSON.parse(fetch('hiker://files/rules/xyq/zywset2.json', {})).sscount;

    //设置超时时间，越小越快，单位毫秒
    //var timeou = 3000;

    var ss = MY_URL.split('$$$')[1];
    var num = MY_URL.split('$$$')[2];
    var ssmode = JSON.parse(fetch('hiker://files/rules/xyq/zywset2.json', {})).ssmode;
    var le = num * ssxc;
    //setError(le);
    var src = fetch('hiker://files/rules/xyq/ZYWCJ2.txt', {});
    //var src = fetch('', {});
    var cc = src.indexOf('http') != -1 ? src.match(/[\S]*?,.*?[\s]/g) : base64Decode(src).match(/[\S]*?,.*?[\s]/g);

    if (ssmode == '0') {
        for (var i = 0; i < cc.length; i++) {
            //屏蔽不支持搜索的1717和穿梭
            if (!/itono|888hyk/.test(cc[i])) {
                items.push({
                    title: cc[i].split(',')[0] + ' 点击查看搜索结果',
                    url: cc[i].split(',')[1] + ss.replace(/pg=\d*/g, 'pg=fypage') + `@rule=js:var erj=fetch("hiker://files/rules/xyq/zywcj2.js",{});eval(erj);zywerj();`,
                    col_type: 'text_center_1'
                });
            }
        };
    } else {
        var Data = [];
        var Tit = [];
        var Ost = [];
        for (var i = le - ssxc; i < le; i++) {
            if (i < cc.length) {
                var arr = cc[i].split(',')[1];
                var arrt = cc[i].split(',')[0];
                var link = cc[i].split(',')[1] + ss;
                //屏蔽不支持搜索的1717和穿梭
                if (!/itono|888hyk/.test(cc[i])) {
                    //Data.push({url:link,options:{headers:{'User-Agent':MOBILE_UA},timeout:timeou}});
                    Data.push({
                        url: link,
                        options: {
                            headers: {
                                'User-Agent': MOBILE_UA
                            }
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
        }

        //---------------代码分界线----------------

        //批量发送请求
        if (Data != '') {
            var bfhtml = batchFetch(Data);
            //setError(Tit);
            for (var k = 0; k < bfhtml.length; k++) {
                var html = bfhtml[k];
                //搜索结果网页处理开始
                if (/\<video\>/.test(html) || /vod_name/.test(html)) {
                    if (/vod_name/.test(html)) {
                        var list = JSON.parse(html).list;
                    } else {
                        var list = parseDomForArray(html, 'rss&&video');
                    }
                    //setError(list[0]);
                    for (var j = 0; j < list.length; j++) {
                        if (/vod_name/.test(html)) {
                            var title = list[j].vod_name;
                            var ids = list[j].vod_id;
                            var note = list[j].vod_remarks;
                            var typ = list[j].type_name;
                            var dt = list[j].vod_play_from;
                        } else {
                            var title = parseDomForHtml(list[j], 'body&&name&&Text');
                            var ids = parseDomForHtml(list[j], 'body&&id&&Text');
                            var note = parseDomForHtml(list[j], 'body&&note&&Text');
                            var typ = parseDomForHtml(list[j], 'body&&type&&Text');
                            var dt = parseDomForHtml(list[j], 'body&&dt&&Text');
                        }
                        if (!filter(typ)) {
                        items.push({
                            title: title + " " + ' • ' + note,
                            desc: ' ' + Tit[k].tit + ' · ' + typ + ' · ' + dt,
                            url: Ost[k].url + "?ac=videolist&ids=" + ids + `@rule=js:var erj=fetch("hiker://files/rules/xyq/zywcj2.js",{});eval(erj);SSEJ();`,
                            col_type: 'text_center_1'
                        });
                        }
                    } //for j
                } else {
                    items.push({
                        title: '““' + Tit[k].tit + '””' + '未搜索到相关资源',
                        url: Data[k].url + `@lazyRule=.js:input+'#ignoreVideo=true#'`,
                        col_type: 'text_center_1'
                    });
                }
            } //for k
        } //if Data

    } //聚/列

    res.data = items;
    setSearchResult(res);
};

function zywerj() {
    var ssmode = JSON.parse(fetch('hiker://files/rules/xyq/zywset2.json', {})).ssmode;
    if (ssmode == '0') {
        var res = {};
        var items = [];
        var domain = MY_URL.split('?wd')[0];
        var html = getResCode();

        //setError(domain);
        if (/\<video\>/.test(html) || /vod_name/.test(html)) {
            if (/vod_name/.test(html)) {
                var list = JSON.parse(html).list;
            } else {
                var list = parseDomForArray(html, 'rss&&video');
            }
            for (var j = 0; j < list.length; j++) {
                if (/vod_name/.test(html)) {
                    var title = list[j].vod_name;
                    var ids = list[j].vod_id;
                    var note = list[j].vod_remarks;
                    var last = list[j].vod_time;
                    var typ = list[j].type_name;
                    var dt = list[j].vod_play_from;
                } else {
                    var title = parseDomForHtml(list[j], 'body&&name&&Text');
                    var ids = parseDomForHtml(list[j], 'body&&id&&Text');
                    var note = parseDomForHtml(list[j], 'body&&note&&Text');
                    var last = parseDomForHtml(list[j], "body&&last&&Text");
                    var typ = parseDomForHtml(list[j], 'body&&type&&Text');
                    var dt = parseDomForHtml(list[j], 'body&&dt&&Text');
                }
                if (!filter(typ)) {
                items.push({
                    title: '““' + title + '””' + " " + ' • ' + note,
                    desc: last + ' ·  ' + typ + ' ·  ' + dt,
                    url: domain + "?ac=videolist&ids=" + ids + `@rule=js:var erj=fetch("hiker://files/rules/xyq/zywcj2.js",{});eval(erj);SSEJ();`,
                    col_type: 'text_center_1'
                });
                }
            }
        } else {
            items.push({
                title: '未搜索到相关资源',
                url: MY_URL,
                col_type: 'text_center_1'
            });
        }

        res.data = items;
        setHomeResult(res);
    } else {

        var net = fetch('hiker://files/rules/xyq/zywcj2.js', {});
        eval(net);
        SSEJ();
    }
};


//选集与简介规则
function SSEJ() {
    var res = {};
    var items = [];
    refreshX5WebView("");
    items.push({
        title: '',
        desc: '240&&float',
        url: '',
        col_type: 'x5_webview_single'
    });
    var html = getResCode();
    try {
        if (/vod_play_from/.test(html)) {
            var html = JSON.parse(html);
            var pic = html.list[0].vod_pic;
            var typ = html.list[0].type_name;
            var des = html.list[0].vod_content;
            var act = html.list[0].vod_actor;
            var dir = html.list[0].vod_director;
            var tabs = html.list[0].vod_play_from.split('$$$');
            var conts = html.list[0].vod_play_url.split('$$$');
            var url = html.list[0].vod_id;
        } else {
            var pic = parseDomForHtml(html, "rss&&pic&&Text").replace("http://t.8kmm.com", "https://www.wxtv.net");
            eval(fetch('hiker://files/rules/xyq/zywcj2.js'));
            picfun();
            var typ = parseDomForHtml(html, "body&&type&&Text");
            var des = parseDomForHtml(html, "rss&&des&&Text");
            var act = parseDomForHtml(html, "rss&&actor&&Text");
            var dir = parseDomForHtml(html, "rss&&director&&Text");
            var tabs = parseDomForArray(html, 'rss&&dl&&dd');
            var conts = parseDomForArray(html, 'rss&&dl&&dd');
            var url = parseDomForHtml(html, 'rss&&id&&Text');

        }
        //log(tabs);

        if (!filter(typ)) {
            items.push({
                title: '演员：' + '\n' + act,
                desc: '导演：' + dir,
                pic_url: pic + '@Referer=' + pic,
                url: pic,
                col_type: 'movie_1_vertical_pic'
            });

            items.push({
                title: "剧情简介：",
                desc: des,
                url: $('hiker://empty').rule((des) => {
                    var res = {};
                    var items = [];
                    items.push({
                        title: des,
                        col_type: 'long_text'
                    });
                    res.data = items;
                    setHomeResult(res);
                }, des),
                col_type: 'text_1'
            });
            //-----简介选集分割线---//
            for (var i = 0; i < conts.length; i++) {
                if (getVar('zywlsort', '1') == '1') {
                    if (/dd flag/.test(conts)) {
                        var list = conts[i].split(">\n")[1].split("\n<")[0].split("#");
                    } else {
                        var list = conts[i].split("#");
                    }
                } else {
                    if (/dd flag/.test(conts)) {
                        var list = conts[i].split(">\n")[1].split("\n<")[0].split("#").reverse();
                    } else {
                        var list = conts[i].split("#").reverse();
                    }
                }

                if (/dd flag/.test(conts)) {
                    var flag = parseDomForHtml(tabs[i], "dd&&flag");
                } else {
                    var flag = tabs[i];
                }
                //如果列表不为null就显示选集
                if (list != null) {
                    items.push({
                        title: flag == 'bilibili' ? flag + " 网页需切换成PC的UA才能播" : flag + "    🔗" + [i + 1] + '/' + conts.length + "““点击切换选集排序””",
                        url: "hiker://empty@lazyRule=.js:putVar('zywlsort', getVar('zywlsort','1')=='1'?'0':'1');refreshPage(false);'toast://切换成功！'",
                        col_type: 'text_1'
                    });

                    var url = {};
                    for (var j = 0; j < list.length; j++) {
                        if (list[j].split('$')[1] != null) {
                            url = list[j].split('$')[1];
                        } else {
                            url = list[j].split('$')[0];
                        }
                        if (MY_URL.indexOf('leduo') != -1) {
                            url = 'https://api.xxctzy.com/wp-api/glid.php?vid=' + url
                        }
                        if (MY_URL.indexOf('bbkdj') != -1) {
                            url = 'http://jx.yparse.com/index.php?url=' + url
                        }
                        if (MY_URL.indexOf('7kjx') != -1) {
                            url = 'https://jx.xmflv.com/?url=' + url
                        }
                        if (MY_URL.indexOf('ujuba') != -1) {
                            url = 'https://zy.ujuba.com/play.php?url=' + url
                        }
                        if (flag == 'ddyunp' || flag == 'xin') {
                            url = 'https://player.90mm.me/play.php?url=' + url.replace(/第.*?集/g, '')
                        }
                        if (flag == 'qdyun') {
                            url = 'http://qdy.zt6a.cn/parse?resources=' + url
                        }
                        if (flag == 'ppayun' || flag == 'gangtiexia') {
                            url = url.substring(0, 4) == 'http' ? url.replace('683d2433ee134cde8063d50506c1a1b1', '3bb24322f78b47dfb8723c13d46d45ee') : 'https://wy.mlkioiy.cn/api/GetDownUrlWy/3bb24322f78b47dfb8723c13d46d45ee/' + url
                        }
                        if (flag == 'tt10') {
                            url = 'https://wy.mlkioiy.cn/api/ShowVideoMu/3bb24322f78b47dfb8723c13d46d45ee/' + url
                        }
                        if (MY_URL.indexOf('yyid6080') != -1 || MY_URL.indexOf('p4kan') != -1) {
                            if (flag == 'xigua' || flag == 'bjm3u8') {
                                url = 'https://bbs.cnzv.cc/dp/mp4.php?url=http://list.47api.cn:90/qq/xigua.php?id=' + url;
                            } else if (flag == 'qqkj') {
                                url = 'https://bbs.cnzv.cc/dp/ck/ck.php?url=http://list.47api.cn:90/qq/mp4.php?id=' + url;
                            } else if (flag == 'tudou') {
                                url = 'https://sf1-ttcdn-tos.pstatp.com/obj/' + url + '#.mp4';
                            } else {
                                url = url
                            };
                        }
                        //if(flag=='rrm3u8'){url='https://www.meiju11.com/ckplayerx/m3u8.php?url='+url}
                        if (flag == 'niux') {
                            url = 'https://www.shenma4480.com/jx.php?id=' + url
                        }
                        if (flag == 'hkm3u8') {
                            url = 'https://jxn2.178du.com/hls/' + url
                        }
                        if (flag == 'xsp1') {
                            url = 'https://jx.api.xhfhttc.cn/jx/?type=xsp1&url=' + url
                        }
                        if (flag == 'bb') {
                            url = 'https://jx.api.xhfhttc.cn/jx/?url=' + url
                        }
                        //if (flag == 'pll') {
                            //url = 'https://vip.gaotian.love/api/?key=GiML8kaI6DnlpAahLM&url=' + url
                        //}
                        if (flag == 'languang') {
                            url = 'https://j.languang.wfss100.com/?url=' + url
                        }
                        if (flag == 'msp') {
                            url = 'https://titan.mgtv.com.bowang.tv/player/?url=' + url
                        }
                        if (flag == 'kdyx' || flag == 'kdsx') {
                            url = 'http://api.kudian6.com/jm/pdplayer.php?url=' + url
                        }
                        if (flag == '789pan'||flag == 'pll') {
                            url = 'https://vip.gaotian.love/api/?key=GiML8kaI6DnlpAahLM&url=' + url
                        }
                        if (flag == 'fanqie') {
                            url = 'https://jx.fqzy.cc/jx.php?url=' + url
                        }
                        if (flag == 'mysp' || flag == 'xmzy' || flag == 'tyun') {
                            url = 'http://jiexi.sxmj.wang/jx.php?url=' + base64Encode(url)
                        }
                        if (flag == 'lekanzyw') {
                            url = 'https://bak.ojbkjx.com/?url=' + url
                        }
                        if (flag == 'renrenmi') {
                            url = 'https://cache1.jhdyw.vip:8091/rrmi.php?url=' + url
                        }
                        if (flag == 'yunbo') {
                            url = 'https://www.mayigq.com/vodzip/player.php?vid=' + url
                        }
                        if (flag == 'duoduozy') {
                            url = 'https://player.duoduozy.com/ddplay/?url=' + url
                        }
                        //if (flag == 'miaoparty') {
                        //url = 'https://jiexi.msdv.cn/jiemi/?url=' + url
                        //}                        
                        var title = (list[j].split('$')[0].indexOf('http') != -1 ? [j + 1] : list[j].split('$')[0]);
                        if (list.length <= 4) {
                            var clt = 'text_2';
                        } else {
                            var clt = isNaN(title) ? 'flex_button' : 'text_5'
                        }
                        if(filter(base64Decode('VklQ'))){
                        items.push({
                            title: list[j].split('$')[0].indexOf('http') != -1 ? [j + 1] : list[j].split('$')[0],
                            url: 'hiker://empty##' + flag + '##' + url.replace(/\n*/g, '') + '##' + `@lazyRule=.js:/*refreshX5WebView*/eval(fetch('hiker://files/rules/xyq/zywcj2.js'));lazyRu();`,
                            //col_type: title.length>=6?'text_2':'text_3'
                            col_type: clt
                        });
                        }else{
                        items.push({
                            title: list[j].split('$')[0].indexOf('http') != -1 ? [j + 1] : list[j].split('$')[0],
                            url: url.replace(/\n*/g, '') +flag+ `@lazyRule=.js:/*refreshX5WebView*/if(input.search(/html|bilibili/)!=-1){'http://17kyun.com/api.php?url='+input;}else{input + '#isVideo=true#'}`,                            
                            //col_type: title.length>=6?'text_2':'text_3'
                            col_type: clt
                        });    
                        }                      
                    } //for j list.length                     
                } //if list != null    
            } //for i conts.length
        } //!filter(typ)
    } catch (e) {}
    res.data = items;
    setHomeResult(res);
};

//动态解析
function lazyRu() {
    var flag = input.split('##')[1];
    var src = (input.split('##')[2]).replace(/amp;/g, "").replace(/^\s*/, "");
    if (flag == 'qq' || flag == 'qiyi' || flag == 'youku' || flag == 'mgtv' || flag == 'letv' || flag == 'sohu' || flag == 'pptv' || flag == 'm1905') {
        var fileUrl = "https://codeberg.org/lzk23559/PublicRule/raw/branch/master/parse.js";
        //var fileUrl = "hiker://files/rules/parse.js";
        eval(fetch(fileUrl, {}));
        var play = vodkey.toUrl(src.split('"')[0]);
        if (play != "" && play !== undefined) {
            return play;
        } else {
            var play = btoken.toUrl(src.split('"')[0]);
            if (play != "" && play !== undefined) {
                return play;
            } else {
                var play = yqjx.toUrl(src.split('"')[0]);
                if (play != "" && play !== undefined) {
                    return play;
                } else {
                    return 'http://17kyun.com/api.php?url=' + (src.split('"')[0]);
                }
            }
        }

    } else if (src.indexOf("xmflv") != -1) {
        eval(getCryptoJS());
        //感谢墙佬提供算法代码
        var sign = function(a) {
            var b = CryptoJS.MD5(a);
            var c = CryptoJS.enc.Utf8.parse(b);
            var d = CryptoJS.enc.Utf8.parse('ren163com5201314');
            var e = CryptoJS.AES.encrypt(a, c, {
                iv: d,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.ZeroPadding
            });
            return e.toString()
        }
        var html = fetch(src, {
            headers: {
                "User-Agent": MOBILE_UA,
                "Referer": "https://jx.xmflv.com"
            }
        });
        var svg = html.match(/\[\'post\'\]\(\'(.*?)\'/)[1];
        var time = html.match(/var time = \'(.*?)\'/)[1];
        var url = html.match(/var url = \'(.*?)\'/)[1];
        var vkey = html.match(/var vkey = \'(.*?)\'/)[1];
        var fvkey = sign(html.match(/var fvkey = \'(.*?)\'/)[1]);
        var body = 'time=' + time + '&url=' + url + '&wap=1&vkey=' + vkey + '&fvkey=' + fvkey;
        var json = fetch('https://jx.xmflv.com' + svg, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            body: body,
            method: 'POST'
        });
        //log(json);
        return JSON.parse(json).url;
    } else if (src.indexOf('obj/tos') != -1) {
        return src + '#isVideo=true#';
    } else if (/wkfile/.test(src)) {
        return src + ';{Referer@https://fantuan.tv}'
    } else if (src.indexOf("135-cdn") != -1) {
        refreshX5WebView(src);
        return "toast://请等待加载选集！";
    } else if (src.indexOf("/share/") != -1) {
        try {
            var link = src.split("/share")[0];
            var fc = fetch(src, {}).replace("var purl", "var main");
            if (fc.indexOf("main") != -1) {
                var mat = fc.match(/var main.*?;/)[0];
                eval(mat);
                var play = (main.indexOf("http") != -1 ? main : link + main);
            } else {
                var main = fc.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];
                var play = (main.indexOf("http") != -1 ? main : link + main)
            };
            return play;
        } catch (e) {
            refreshX5WebView(src);
            return "toast://请等待加载选集！"
        };
    }
    /*else if(src.indexOf("meiju11")!=-1){
    var meiju=fetch(src,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://www.meiju11.com"}});
    return meiju.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];
    }*/
    else if (src.indexOf("duoduozy") != -1) {
        var duoduo = fetch(src, {
            headers: {
                "User-Agent": MOBILE_UA,
                "Referer": "https://www.duoduozy.com/"
            }
        });
        return duoduo.match(/var urls.*?[\'\"](.*?)[\'\"]/)[1];
    } else if (flag == 'miaoparty') {
        var miao = fetch('https://jiexi.msdv.cn/jiemi/api.php', {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            body: 'url=' + src + '&ac=jx',
            method: 'POST'
        });
        return JSON.parse(miao).url;
    } else if (/fqzy\.cc|ojbkjx/.test(src)) {
        var html = fetch(src, {
            headers: {
                "User-Agent": MOBILE_UA
            }
        });
        if (/bt_token/.test(html)) {
            var fileUrl = fetch("https://cdn.jsdelivr.net/gh/lzk23559/Public_folder/token.js", {});
            eval(fileUrl);
            var play = (tkurl.indexOf('url=') > -1 ? tkurl.split('url=')[1] : tkurl);
        } else {
            var play = html.match(/\"url\": \"(.*?)\"/)[1]
        }
        if (/4kan/.test(play)) {
            return play + ';{Referer@https://bak.ojbkjx.com/}';
        } else {
            return play
        };
    } else if (src.indexOf("xxctzy") != -1) {
        var purl = request(src, {}).split("var url=\'")[1].split("\'")[0];
        var pla = request("https://api.xxctzy.com" + purl, {});
        return pla.match(/\"url\": \"(.*?)\"/)[1];
        //if(pla.indexOf("m3u8")!=-1){
        //return pla.split("=")[1];}else{return src};
    } else if (src.indexOf("aHR0c") != -1) {
        return decodeURIComponent(base64Decode(src.split("&")[0]));
    } else if (src.indexOf("haodanxia") != -1 || src.indexOf("cqzyw") != -1) {
        var ul = JSON.parse(fetch(src, {
            headers: {
                "User-Agent": "Dalvik/2.1.0"
            },
            redirect: false,
            withStatusCode: true
        }));
        if (ul.statusCode == "302") {
            var play = ul.headers.location[0];
        } else {
            var play = src + "#isVideo=true#"
        };
        return play;
    } else if (src.indexOf("shenma4480") != -1) {
        var sm = "https://www.shenma4480.com/" + fetch(src, {
            headers: {
                "User-Agent": MOBILE_UA,
                "Referer": "https://www.shenma4480.com"
            }
        }).match(/var u=\"(.*?)\"/)[1];
        return fetch(sm, {
            headers: {
                "User-Agent": MOBILE_UA,
                "Referer": "https://www.shenma4480.com"
            }
        }).match(/url:.*?[\'\"](.*?)[\'\"]/)[1].replace(/[+]/g, "%20");
    } else if (src.indexOf("mlkioiy") != -1) {
        if (src.indexOf("ShowVideo") != -1) {
            var mlki = parseDomForHtml(fetch(src, {}), "body&&#dplayer&&result");
            var fileUrl = "https://cdn.jsdelivr.net/gh/lzk23559/rulehouse/pako-min.js";
            eval(request(fileUrl, {}));
            return realUrl;
        } else {
            return src + "#isVideo=true#"
        };
    } else if (src.indexOf("ddyunp") != -1 || src.indexOf("90mm.me") != -1) {
        eval(getCryptoJS());
        var id = src + 'duoduo' + 'l' + (Math.floor(new Date().getTime() / 100000) * 100).toString();
        var dat = CryptoJS.MD5(id).toString(CryptoJS.enc.Hex);
        var purl = 'https://hls.90mm.me/ddyun/' + src + '/l/' + dat + '/playlist.m3u8';
        return purl;
    } else if (src.indexOf("xsp1") != -1) {
        var pli = parseDomForHtml(fetch(src, {
            headers: {
                "User-Agent": MOBILE_UA,
                "Referer": "https://zz22x.com"
            }
        }), "body&&iframe&&src").split("url=")[1];
        var fileUrl = "https://codeberg.org/lzk23559/PublicRule/raw/branch/master/parse.js";
        eval(fetch(fileUrl, {}));
        var play = yqjx.toUrl(pli);
        return play != "" ? play : getUrl(pli);
    } else if (src.indexOf("kudian6.com") != -1) {
        var html = request(src);
        return html.match(/url\":.*?[\'\"](.*?)[\'\"]/)[1];
    } else if (/719ns|rrmi/.test(src)) {
        /*
var html=request(src);
eval(getCryptoJS());
var id = html.match(/var id=\"(.*?)\"/)[1];
var times=(new Date()).getTime()+'';
var sh= CryptoJS.MD5(base64Encode(id+times)).toString();
var purl='http://play.zk132.cn/new/play1/'+id+'%7C'+times+'%7C'+sh+'%7C'+'1'+'%7C'+'index.m3u8';
*/
        var html = fetch(src, {});
        return 'x5Play://'+JSON.parse(html).url;
    } else if (/wfss100/.test(src)) {
        var phtml = request(src, {});
        var ifsrc = src.split('/?url=')[0] + parseDomForHtml(phtml, "body&&iframe&&src");
        var ifsrct = ifsrc.split('?url=')[0] + parseDomForHtml(request(ifsrc, {}), "body&&iframe&&src");
        var urll = request(ifsrct, {}).match(/vodurl = \'(.*?)\'/)[1];
        return urll + ';{Referer@https://j.languang.wfss100.com/}';
    } else if (flag == 'pll' || flag == '789pan') {
        var json = JSON.parse(fetch(src, {}));
        if (json.code == '200') {
            return json.url;
        }
    } else if (flag == 'bilibili') {
        //var zxyb = fetch('https://www.zxyb.cc/bd_json.php?url=' + src, {});
        //return JSON.parse(zxyb).url + ';{Referer@https://www.bilibili.com&&User-Agent@Mozilla/5.0}';  
        return 'http://17kyun.com/api.php?url=' + src;
    } else if (src.indexOf("alizy-") != -1) {
        refreshX5WebView('http://hong.1ren.ren/?url=' + src);
        return "toast://请等待加载选集！";
    } else if (src.indexOf("47api") != -1) {
        refreshX5WebView(src);
        return "toast://请等待加载选集！";
    } else if (src.indexOf("yparse.com") != -1) {
        refreshX5WebView(src);
        return "toast://请等待加载选集！";
    } else if (src.indexOf("//520.com") != -1) {
        refreshX5WebView("https://titan.mgtv.com.o8tv.com/jiexi/?url=" + src);
        return "toast://请等待加载选集！";
    } else {
        return src
    }
};


//预处理代码
function zywpre() {
    if (!fetch('hiker://files/rules/xyq/zywset2.json', {})) {
        var set = `{"ssmode":"0","listmod":"0","sscount":"5"}`;
        writeFile("hiker://files/rules/xyq/zywset2.json", set);
    }
}
