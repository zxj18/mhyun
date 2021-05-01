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
        var list = parseDomForArray(html, 'body&&.srch-result-box');
        var list2 = parseDomForArray(html, '.result-lst&&li');

        for (var i in list) {

            d.push({
                title: parseDomForHtml(list[i], '.srch-result-tit&&a&&Text'),
                desc: parseDomForHtml(list[i], 'a&&Text'),
                img: parseDom(list[i], 'img&&src'),
                url: parseDom(list[i], 'a&&href')
            });
        }
        for (var j in list2) {

            d.push({
                title: parseDomForHtml(list2[j], '.srch-result-tit&&a&&Text'),
                desc: parseDomForHtml(list2[j], 'a&&Text'),
                img: parseDom(list2[j], 'img&&src'),
                url: parseDom(list2[j], 'a&&href')
            });
        }
        d.push({ col_type: 'line_blank' });
        d.push({ title: "<h4 style='text-align:center'>到底了呢！</h4>", col_type: "rich_text" });

    }
    setResult(d)
}