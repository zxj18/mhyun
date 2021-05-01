function EJ() {

    var d = [];

    var config = fetch('hiker://files/cache/MyParseSet.json');
    var jsUrl = 'https://code.aliyun.com/AI957/Hiker/raw/master/v/CloudParse-V2_Dn.js';
    if (config && fetch(JSON.parse(config).cj)) {
        jsUrl = JSON.parse(config).cj;
    } eval(fetch(jsUrl));

    var lazy = `@lazyRule=.js:var input = fetch(input).match(/window.open\\('(.*?)'/)[1];` + lazy + ``;

    var html = JSON.parse(getResCode().split('window.__INITIAL_STATE__=')[1].split(';(function(){var s;')[0]).detail.itemData;
    var conts = html.play.item_list;
    d.push({
        title: html.zone + '\n' + html.style + '\n' + html.score,
        desc: html.release_time,
        img: html.v_picurl,
        url: setUrl,
        col_type: 'movie_1_vertical_pic'
    });

    for (var i in conts) {
        var list = conts[i].info;
        if (conts[i].info) {
            d.push({
                title: conts[i].sitename[0],
                col_type: "text_1"
            })
            for (var j in list) {
                if (!list[j].index == '0') {
                    d.push({
                        title: list[j].index,
                        url: 'https://v.sogou.com' + list[j].url + lazy,
                        col_type: "text_4"
                    });
                }
            }
        } else
            if (conts[i].latest) {
                var list = conts[i].latest;
                for (var j in list) {
                    d.push({
                        title: list[j].title,
                        img: list[j].picurl,
                        url: 'https://v.sogou.com' + list[j].playurl + lazy,
                        col_type: "movie_2"
                    });
                }
            } else {
                d.push({
                    title: conts[i].sitename[0],
                    img: conts[i].picurl,
                    url: 'https://v.sogou.com' + conts[i].url + lazy,
                    col_type: "movie_2"
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
        var conts = parseDomForArray(getResCode(), 'body&&.section');
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
                });
            }
        }
    } else {
        var html = fetch('https://v.sogou.com/v?query=' + getVar('searchKeyword'));
        var list = JSON.parse(html.split('window.__INITIAL_STATE__=')[1].split(';(function(){var s;')[0]).result.longVideo.results;
        for (var i in list) {

            d.push({
                title: list[i].alais_name || list[i].original_name,
                desc: list[i].docname,
                content: list[i].introduction,
                img: list[i].v_picurl,
                url: 'https://v.sogou.com' + list[i].tiny_url
            });
        }

        d.push({ col_type: 'line_blank' });
        d.push({ title: "<h4 style='text-align:center'>到底了呢！</h4>", col_type: "rich_text" });

    }
    setResult(d)
}
function SSYJ() {
    var d = [];
    var list = JSON.parse(getResCode().split('window.__INITIAL_STATE__=')[1].split(';(function(){var s;')[0]).result.longVideo.results;
    for (var i in list) {
        d.push({
            title: list[i].alais_name || list[i].original_name,
            desc: list[i].docname,
            content: list[i].introduction,
            img: list[i].v_picurl,
            url: 'https://v.sogou.com' + list[i].tiny_url
        });
    }
    setResult(d);
}