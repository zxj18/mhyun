var resolve_zxzj = function () {
    let play_url = input;
    // let html = getResCode();
    let html = fetch(play_url, {});
    // setError(html)
    /"link_next".*?"url":"(.*?)","url_next"/g.test(html)
    let player_url = RegExp.$1.replace(/[\\]/g, "")
    if (player_url.indexOf("pan.baidu.com") > -1) {
        return player_url
    }
    let player_html = fetch(player_url, {
        headers: {'referer': play_url},
        method: 'GET'
    });
    /var url = '(.*?)'/g.test(player_html)
    let code = RegExp.$1.split('').reverse().join('')
    let temp = ''
    for (let i = 0x0; i < code.length; i = i + 0x2) {
        temp += String.fromCharCode(parseInt(code[i] + code[i + 0x1], 0x10))
    }
    return temp.substring(0x0, (temp.length - 0x6) / 0x2) + temp.substring((temp.length - 0x6) / 0x2 + 0x6)


}



eval(getCryptoJS());
var tools = {
    // MD5 散列
    /**
     * @return {string}
     */
    MD5: function (data) {
        // 以md5的格式创建一个哈希值
        return CryptoJS.MD5(data).toString(CryptoJS.enc.Hex);
    }
};
var epang = {
    getSign: function (id, key) {
        return tools.MD5(id + "duoduo" + key + (Math.floor(new Date().getTime() / 0x186a0) * 0x64).toString())
    },
    getUrl: function (id) {
        // setError(id)
        var url = "https://hls.ddyunp.com/ddyun"
        let res = url + '/' + id + "/l/" + this.getSign(id, 'l') + "/playlist.m3u8";
        // setError(res)
        return res
    }
}