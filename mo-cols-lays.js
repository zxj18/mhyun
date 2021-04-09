function EJ() {
    var d = [];
    d.push({
        desc: '240&&float',
        col_type: 'x5_webview_single'
    });
    var html = getResCode();
    var arts = parseDomForArray(html, 'body&&.mo-movs-btns');
    var tabs = [];
    for (var i in arts) {
        tabs.push(parseDomForHtml(arts[i], 'Text'))
    }
    var conts = parseDomForArray(html, 'body&&.mo-movs-item');
    var lists = [];
    for (var i in conts) {
        lists.push(parseDomForArray(conts[i], 'ul&&li'))
    }
    var title = parseDomForHtml(html, '.mo-part-full&&alt');
    d.push({
        title: '分类：' + parseDomForHtml(html, '.mo-cols-lays&&li,2--span&&Text') + ' | ' + parseDomForHtml(html, '.mo-cols-lays&&li,3--span&&Text') + ' | ' + parseDomForHtml(html, '.mo-cols-lays&&li,4--span&&Text') + '\n' + parseDomForHtml(html, '.mo-cols-lays&&li&&Text').substring(0, 15) + '\n' + parseDomForHtml(html, '.mo-cols-lays&&li,1&&Text').substring(0, 15),
        desc: '更新时间：' + parseDomForHtml(html, '.mo-cols-lays&&li,5&&Text').substring(0, 15),
        pic_url: parseDom(html, '.mo-situ-pics&&data-original'),
        url: "hiker://empty$fypage$" + title + `@rule=js:eval(request('https://gitee.com/zbaolin/hksj/raw/master/SS.js'));jusou()`,
        col_type: 'movie_1_vertical_pic'
    });
    try {
        var des_desc = parseDomForHtml(html, '.mo-lhxl-24px&&Text');
        if (des_desc.length > 60) {
            des_desc = des_desc.replace(des_desc, des_desc.substring(0, 60) + "......");
        }

        d.push({
            title: des_desc,
            col_type: 'long_text'
        });
    } catch (e) { }

var _0xodB='jsjiami.com.v6',_0x3fa0=[_0xodB,'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','ERJjsjYXiwalmQbPibVY.coDGm.v6=='];(function(_0x1196c6,_0x44e6fa,_0x18d0d0){var _0x300794=function(_0x57a784,_0x192d1e,_0x2eedb3,_0x3f8958,_0x4db24b){_0x192d1e=_0x192d1e>>0x8,_0x4db24b='po';var _0x1039ed='shift',_0x39b447='push';if(_0x192d1e<_0x57a784){while(--_0x57a784){_0x3f8958=_0x1196c6[_0x1039ed]();if(_0x192d1e===_0x57a784){_0x192d1e=_0x3f8958;_0x2eedb3=_0x1196c6[_0x4db24b+'p']();}else if(_0x192d1e&&_0x2eedb3['replace'](/[ERJYXwlQbPbVYDG=]/g,'')===_0x192d1e){_0x1196c6[_0x39b447](_0x3f8958);}}_0x1196c6[_0x39b447](_0x1196c6[_0x1039ed]());}return 0x7f435;};return _0x300794(++_0x44e6fa,_0x18d0d0)>>_0x44e6fa^_0x18d0d0;}(_0x3fa0,0x114,0x11400));var _0x6bd3=function(_0x5f5dbc,_0x1ea7e3){_0x5f5dbc=~~'0x'['concat'](_0x5f5dbc);var _0x4b5906=_0x3fa0[_0x5f5dbc];if(_0x6bd3['vJUEYb']===undefined){(function(){var _0x213630=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4e59f4='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x213630['atob']||(_0x213630['atob']=function(_0x2e8fa7){var _0x3af28a=String(_0x2e8fa7)['replace'](/=+$/,'');for(var _0x50de71=0x0,_0x4eda90,_0x27dcee,_0x14eb29=0x0,_0x5a8cc5='';_0x27dcee=_0x3af28a['charAt'](_0x14eb29++);~_0x27dcee&&(_0x4eda90=_0x50de71%0x4?_0x4eda90*0x40+_0x27dcee:_0x27dcee,_0x50de71++%0x4)?_0x5a8cc5+=String['fromCharCode'](0xff&_0x4eda90>>(-0x2*_0x50de71&0x6)):0x0){_0x27dcee=_0x4e59f4['indexOf'](_0x27dcee);}return _0x5a8cc5;});}());var _0x56480b=function(_0x3bac06,_0x1ea7e3){var _0x8e7716=[],_0x1603d9=0x0,_0x280eb2,_0x5484f1='',_0xc2949b='';_0x3bac06=atob(_0x3bac06);for(var _0xfa9f98=0x0,_0x55acfa=_0x3bac06['length'];_0xfa9f98<_0x55acfa;_0xfa9f98++){_0xc2949b+='%'+('00'+_0x3bac06['charCodeAt'](_0xfa9f98)['toString'](0x10))['slice'](-0x2);}_0x3bac06=decodeURIComponent(_0xc2949b);for(var _0x486aec=0x0;_0x486aec<0x100;_0x486aec++){_0x8e7716[_0x486aec]=_0x486aec;}for(_0x486aec=0x0;_0x486aec<0x100;_0x486aec++){_0x1603d9=(_0x1603d9+_0x8e7716[_0x486aec]+_0x1ea7e3['charCodeAt'](_0x486aec%_0x1ea7e3['length']))%0x100;_0x280eb2=_0x8e7716[_0x486aec];_0x8e7716[_0x486aec]=_0x8e7716[_0x1603d9];_0x8e7716[_0x1603d9]=_0x280eb2;}_0x486aec=0x0;_0x1603d9=0x0;for(var _0xdd5564=0x0;_0xdd5564<_0x3bac06['length'];_0xdd5564++){_0x486aec=(_0x486aec+0x1)%0x100;_0x1603d9=(_0x1603d9+_0x8e7716[_0x486aec])%0x100;_0x280eb2=_0x8e7716[_0x486aec];_0x8e7716[_0x486aec]=_0x8e7716[_0x1603d9];_0x8e7716[_0x1603d9]=_0x280eb2;_0x5484f1+=String['fromCharCode'](_0x3bac06['charCodeAt'](_0xdd5564)^_0x8e7716[(_0x8e7716[_0x486aec]+_0x8e7716[_0x1603d9])%0x100]);}return _0x5484f1;};_0x6bd3['kKWyyi']=_0x56480b;_0x6bd3['OUDadz']={};_0x6bd3['vJUEYb']=!![];}var _0x5ae5be=_0x6bd3['OUDadz'][_0x5f5dbc];if(_0x5ae5be===undefined){if(_0x6bd3['LJkeeA']===undefined){_0x6bd3['LJkeeA']=!![];}_0x4b5906=_0x6bd3['kKWyyi'](_0x4b5906,_0x1ea7e3);_0x6bd3['OUDadz'][_0x5f5dbc]=_0x4b5906;}else{_0x4b5906=_0x5ae5be;}return _0x4b5906;};var lazy=_0x6bd3('0','k^Ly');;_0xodB='jsjiami.com.v6';
 
    function setTabs(tabs, vari) {
        d.push({
            title: '‘‘线路’’',
            url: `#noLoading#@lazyRule=.js:let conf = getVar('折叠');if(conf=='关'){putVar({key:'折叠', value:'开'});}else{putVar({key:'折叠', value:'关'})};refreshPage(false);'toast://切换成功';'#noHistory#hiker://empty'`,
            col_type: 'text_center_1'
        })
        if (getVar('折叠') == '开' || getVar('折叠') == '') {
            var title = '';
            for (var i = 0; i < tabs.length; i++) {
                var url = "hiker://empty@lazyRule=.js:putVar('" + vari + "', '" + i + "');refreshPage();'toast://切换成功！'";
                d.push({
                    title: tabs[i] + (getVar(vari, '0') == i ? '✅' : ''),
                    url: url,
                    col_type: tabs.length > 2 ? 'text_3' : 'text_2'
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
                    col_type: list.length > 3 ? 'text_3' : 'text_2'
                });
            }
        } else {
            for (var j = 0; j < list.length; j++) {
                d.push({
                    title: parseDomForHtml(list[j], 'Text'),
                    url: parseDom(list[j], 'a&&href') + lazy,
                    col_type: list.length > 3 ? 'text_3' : 'text_2'
                });
            }
        }
    }
    setTabs(tabs, MY_URL);
    setLists(lists, getVar(MY_URL, '0'));
    setResult(d);
}

function SYYJ() {
    var d = [];
    var conts = parseDomForArray(getResCode(), 'body&&.mo-cols-lays:has(ul)');
    for (var i in conts) {
        if (conts.length > 1) {
            d.push({
                title: '‘‘' + parseDomForHtml(conts[i], 'h2&&Text') + '’’',
                url: $(parseDom(conts[i], 'a&&href').replace('.html', '-fypage.html')).rule(() => {
                    var d = [];
                    var list = parseDomForArray(getResCode(), '.mo-cols-lays:has(ul)&&ul,1&&li');
                    for (var j in list) {
                        var img = parseDom(list[j], 'a&&data-original');
                        d.push({
                            title: parseDomForHtml(list[j], '.mo-situ-name&&Text'),
                            desc: parseDomForHtml(list[j], '.mo-situ-rema&&Text'),
                            img: img + '@Referer=' + img,
                            url: $(parseDom(list[j], 'a&&href')).rule(() => {
                                eval(fetch('hiker://files/jiexi/80.js')); EJ()
                            })
                        });
                    }
                    setResult(d)
                }),
                col_type: 'text_center_1'
            });
        }
        var list = parseDomForArray(conts[i], 'ul,1&&li');
        for (var j in list) {
            var img = parseDom(list[j], 'a&&data-original');
            d.push({
                title: parseDomForHtml(list[j], '.mo-situ-name&&Text'),
                desc: parseDomForHtml(list[j], '.mo-situ-rema&&Text'),
                img: img + '@Referer=' + img,
                url: parseDom(list[j], 'a&&href')
            });
        }
    }
    setResult(d)
}

function SSYJ() {
    var d = [];
    var list = parseDomForArray(getResCode(), 'body&&dl:has(dd)');
    for (var j in list) {
        d.push({
            title: parseDomForHtml(list[j], 'h1&&Text'),
            desc: parseDomForHtml(list[j], '.mo-coxs-center&&Text'),
            content: parseDomForHtml(list[j], '.mo-cols-lg10--h1&&Text'),
            img: parseDom(list[j], 'a&&data-original'),
            url: parseDom(list[j], 'a&&href')
        });
    }
    setResult(d)
}