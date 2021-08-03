js:
var d = [];
var html = getResCode();

var des_desc = parseDomForHtml(html, '.vod_content&&Text');
d.push({
    title: parseDomForHtml(html, '.vod-n-l&&p,2&&p&&Text') + '   ' + parseDomForHtml(html, '.vod-n-l&&p,4&&p&&Text').replace('年份：', '') + '    ' + parseDomForHtml(html, '.vod-n-l&&p,6&&p&&Text').replace('地区：', '') + '\n' + parseDomForHtml(html, '.vod-n-l&&p,1&&p&&Text').substring(0, 15) + '\n' + parseDomForHtml(html, '.vod-n-l&&p,3&&p&&Text').substring(0, 15),
    desc: parseDomForHtml(html, '.vod-n-l&&p,7&&p&&Text'),
    pic_url: parseDom(html, '.loading&&data-original'),
    url: MY_URL,
    col_type: 'movie_1_vertical_pic'
});
if (des_desc.length > 60) {
    des_desc = des_desc.replace(des_desc, des_desc.substring(0, 60) + "......");
}

d.push({
    title: des_desc,
    col_type: 'long_text'
});

var jsurl = fetch(parseDom(fetch(MY_URL.replace('.html', '/play-1-1.html'), {}), 'body&&script&&src'), {});
eval(jsurl);

var conts = mac_url.split("$$$");
var tabs = mac_from.split("$$$");

for (var i = 0; i < tabs.length; i++) {
    var list = conts[i].split('#');
    d.push({
        title: tabs[i] + '线路',
        col_type: "text_1"
    });

    for (var j = 0; j < list.length; j++) {
        var title = list[j].split("$")[0];
        d.push({
            title: title,
            url: $(list[j].input.split('$')[1]).lazyRule((title) => {
                var html = fetch('https://www.tg3.net/player/' + title + '.js').match(/src = (.*?);/)[1].replace('MacPlayer.PlayUrl', title);
                return html
            }),
            col_type: list.length > 3 ? 'text_3' : 'text_2'
        });
    }
}
setResult(d)