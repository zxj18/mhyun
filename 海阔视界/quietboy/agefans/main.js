const _local_config_path = 'hiker://files/rules/quietboy/agefans/config.json';
const _domin = 'https://www.agefans.vip';

function descPage() {
    var ret = [];
    var url = MY_PARAMS.xjjurl;
    let res = fetch(url, {});
    let otherInfo = parseDomForArray(res, '.baseblock2,0&&li');
    for (let i = 0; i < otherInfo.length; i++) {
        ret.push(
            {
                title: parseDomForHtml(otherInfo[i], '.detail_imform_tag&&Text') + parseDomForHtml(otherInfo[i], '.detail_imform_value&&Text'),
                col_type: 'long_text'
            }
        );
    }
    ret.push({
        title: '详细简介：' + parseDomForHtml(res, '.detail_imform_desc_pre&&Text'),
        col_type: 'long_text'
    })
    setResult(ret);
}
function detailPage() {
    const _cachePath = 'hiker://files/rules/quietboy/agefans/cache.txt';
    function get(url) {
        // var demo = {
        //     "url": url,
        //     "pic": pic_url,
        //     "desc": desc,
        //     "current_index": 0,
        //     "reverse": false,
        //     "content": [
        //         {
        //             "tab": tab_name,
        //             "items": [
        //                 {
        //                     "name": item_name,
        //                     "url": item_url
        //                 }
        //             ]
        //         }
        //     ]
        // };
        var ret = {};
        ret.url = url;
        res = fetch(url, {});
        ret.pic = parseDom(res, '.baseblock&&.blockcontent&&img&&src');
        ret.desc = parseDomForHtml(res, '.detail_imform_desc_pre&&Text');
        try {
            var cache = JSON.parse(fetch(_cachePath, {}));
            var check = false;
            for (let i = 0; i < cache.length; i++) {
                if (cache[i].url == url) {
                    check = true;
                    ret.current_index = cache[i].current_index;
                    ret.reverse = cache[i].reverse;
                    break;
                }
            }
            if (!check) {
                cache.push({
                    url: url,
                    current_index: 0,
                    reverse: false
                });
                ret.current_index = 0;
                ret.reverse = false;
                writeFile(_cachePath, JSON.stringify(cache));
            }
        } catch (e) {
            log(e);
            let obj = {};
            obj.url = url;
            obj.current_index = 0;
            obj.reverse = false;
            ret.current_index = 0;
            ret.reverse = false;
            writeFile(_cachePath, JSON.stringify([obj]));
        }
        var content = [];
        var serverList = parseDomForArray(res, '#main0&&.movurl');
        for (let i = 0; i < serverList.length; i++) {
            let epiList = parseDomForArray(serverList[i], 'ul&&a');
            let epiListLen = epiList.length;
            if (epiListLen != 0) {
                let tmp = {};
                tmp.tab = '播放列表' + (i + 1);
                tmp.items = [];
                for (let j = 0; j < epiListLen; j++) {
                    tmp.items.push({
                        name: parseDomForHtml(epiList[j], 'a&&Text'),
                        url: _domin + parseDomForHtml(epiList[j], 'a&&href')
                    });
                }
                content.push(tmp);
            }
        }
        ret.content = content;
        return ret;
    }
    function set(data) {
        var res = [];
        var extra = JSON.stringify({
            xjjurl: data.url
        });
        res.push({
            title: "点我查看详情",
            col_type: 'movie_1_vertical_pic_blur',
            url: 'hiker://page/desc.html',
            img: data.pic,
            desc: data.desc,
            extra: extra
        });
        res.push({
            col_type: 'line_blank'
        });
        for (let i = 0; i < 10; i++) {
            res.push({
                col_type: 'blank_block'
            });
        }
        res.push({
            col_type: 'scroll_button',
            title: '““””<strong><font color="black">线路：</font></strong>',
            url: $('hiker://empty#noLoading#').lazyRule(() => {
                return 'hiker://empty';
            })
        });
        for (let i = 0; i < data.content.length; i++) {
            var tabObj = {};
            tabObj.col_type = 'scroll_button';
            tabObj.url = $('hiker://empty#noLoading#').lazyRule((obj) => {
                var cache = JSON.parse(fetch(obj._cachePath, {}));
                for (let i = 0; i < cache.length; i++) {
                    if (cache[i].url == obj.url) {
                        cache[i].current_index = obj.index;
                        break;
                    }
                }
                writeFile(obj._cachePath, JSON.stringify(cache));
                refreshPage();
                return 'hiker://empty';
            }, {
                index: i,
                _cachePath: _cachePath,
                url: data.url
            });
            if (i == data.current_index) {
                tabObj.title = '““””<small><font color="red">' + data.content[i].tab + '</font></small>'

            } else {
                tabObj.title = data.content[i].tab
            }
            res.push(tabObj);
        }
        res.push({
            col_type: 'line_blank'
        });
        res.push({
            col_type: 'flex_button',
            title: '““””<font color="black">反序</font>',
            url: $('hiker://empty#noLoading#').lazyRule((obj) => {
                var cache = JSON.parse(fetch(obj._cachePath, {}));
                for (let i = 0; i < cache.length; i++) {
                    if (cache[i].url == obj.url) {
                        cache[i].reverse = !cache[i].reverse;
                        break;
                    }
                }
                writeFile(obj._cachePath, JSON.stringify(cache));
                refreshPage();
                return 'hiker://empty';
            }, {
                _cachePath: _cachePath,
                url: data.url
            })
        });
        res.push({
            col_type: 'line'
        });
        var current_item = data.content[data.current_index].items;
        var current_group = [];
        for (let i = 0; i < current_item.length; i++) {
            current_group.push(
                {
                    col_type: 'text_3',
                    title: current_item[i].name,
                    url: $(current_item[i].url).lazyRule(() => {
                        eval(fetch('hiker://files/rules/quietboy/agefans/main.js', {}));
                        try {
                            return getVideoUrl(input);
                        } catch (e) {
                            log(e);
                            return "toast://请重试";
                        }
                    })
                }
            );
        }
        if (data.reverse) {
            current_group.reverse();
        }
        res = res.concat(current_group);
        setResult(res);
    }
    var url = MY_PARAMS.xjjurl;
    set(get(url));
}
var vip = {
    '88ys': function (url) {
        eval(getCryptoJS());
        var cryptoAuthcode = {
            authcode: function (str, operation, key, expiry) {
                function base64_encode(str) {
                    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                    var out, i, len;
                    var c1, c2, c3;

                    len = str.length;
                    i = 0;
                    out = "";
                    while (i < len) {
                        c1 = str.charCodeAt(i++) & 0xff;
                        if (i == len) {
                            out += base64EncodeChars.charAt(c1 >> 2);
                            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
                            out += "==";
                            break;
                        }
                        c2 = str.charCodeAt(i++);
                        if (i == len) {
                            out += base64EncodeChars.charAt(c1 >> 2);
                            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
                            out += "=";
                            break;
                        }
                        c3 = str.charCodeAt(i++);
                        out += base64EncodeChars.charAt(c1 >> 2);
                        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
                        out += base64EncodeChars.charAt(c3 & 0x3F);
                    }
                    return out;
                }
                function base64_decode(str) {
                    var base64DecodeChars = new Array(
                        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
                        52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
                        -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
                        15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
                        -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
                    var c1, c2, c3, c4;
                    var i, len, out;

                    len = str.length;
                    i = 0;
                    out = "";
                    while (i < len) {
                        /* c1 */
                        do {
                            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
                        } while (i < len && c1 == -1);
                        if (c1 == -1)
                            break;

                        /* c2 */
                        do {
                            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
                        } while (i < len && c2 == -1);
                        if (c2 == -1)
                            break;

                        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

                        /* c3 */
                        do {
                            c3 = str.charCodeAt(i++) & 0xff;
                            if (c3 == 61)
                                return out;
                            c3 = base64DecodeChars[c3];
                        } while (i < len && c3 == -1);
                        if (c3 == -1)
                            break;

                        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

                        /* c4 */
                        do {
                            c4 = str.charCodeAt(i++) & 0xff;
                            if (c4 == 61)
                                return out;
                            c4 = base64DecodeChars[c4];
                        } while (i < len && c4 == -1);
                        if (c4 == -1)
                            break;
                        out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
                    }
                    return out;
                }
                function md5(s) {
                    return CryptoJS.MD5(s).toString();
                }
                function time() {
                    var unixtime_ms = new Date().getTime();
                    return parseInt(unixtime_ms / 1000);
                }
                function microtime(get_as_float) {
                    var unixtime_ms = new Date().getTime();
                    var sec = parseInt(unixtime_ms / 1000);
                    return get_as_float ? (unixtime_ms / 1000) : (unixtime_ms - (sec * 1000)) / 1000 + ' ' + sec;
                }
                function chr(s) {
                    return String.fromCharCode(s);
                }
                function ord(s) {
                    return s.charCodeAt();
                }
                var operation = operation ? operation : 'DECODE';
                var key = key ? key : '';
                var expiry = expiry ? expiry : 0;

                var ckey_length = 4;
                key = md5(key);

                var keya = md5(key.substr(0, 16));
                var keyb = md5(key.substr(16, 16));
                if (ckey_length) {
                    if (operation == 'DECODE') {
                        var keyc = str.substr(0, ckey_length);
                    } else {
                        var md5_time = md5(microtime());
                        var start = md5_time.length - ckey_length;
                        var keyc = md5_time.substr(start, ckey_length)
                    }
                } else {
                    var keyc = '';
                }

                var cryptkey = keya + md5(keya + keyc);

                var strbuf;

                if (operation == 'DECODE') {
                    str = str.substr(ckey_length);
                    strbuf = base64_decode(str);
                    //string = b.toString();
                } else {
                    expiry = expiry ? expiry + time() : 0;
                    tmpstr = expiry.toString();
                    if (tmpstr.length >= 10)
                        str = tmpstr.substr(0, 10) + md5(str + keyb).substr(0, 16) + str;
                    else {
                        var count = 10 - tmpstr.length;
                        for (var i = 0; i < count; i++) {
                            tmpstr = '0' + tmpstr;
                        }
                        str = tmpstr + md5(str + keyb).substr(0, 16) + str;
                    }
                    strbuf = str;
                }

                var box = new Array(256);
                for (var i = 0; i < 256; i++) {
                    box[i] = i;
                }
                var rndkey = new Array();
                for (var i = 0; i < 256; i++) {
                    rndkey[i] = cryptkey.charCodeAt(i % cryptkey.length);
                }
                for (var j = i = 0; i < 256; i++) {
                    j = (j + box[i] + rndkey[i]) % 256;
                    tmp = box[i];
                    box[i] = box[j];
                    box[j] = tmp;
                }
                var s = '';
                strbuf = strbuf.split('');
                for (var a = j = i = 0; i < strbuf.length; i++) {
                    a = (a + 1) % 256;
                    j = (j + box[a]) % 256;
                    tmp = box[a];
                    box[a] = box[j];
                    box[j] = tmp;
                    s += chr(ord(strbuf[i]) ^ (box[(box[a] + box[j]) % 256]));
                }

                if (operation == 'DECODE') {
                    if ((s.substr(0, 10) == 0 || s.substr(0, 10) - time() > 0) && s.substr(10, 16) == md5(s.substr(26) + keyb).substr(0, 16)) {
                        s = s.substr(26);
                    } else {
                        s = '';
                    }
                } else {
                    s = base64_encode(s);
                    var regex = new RegExp('=', "g");
                    s = s.replace(regex, '');
                    s = keyc + s;
                }

                return (s);
            },
            encode: function (lcr, pad, n) {
                var res = this.authcode(lcr, "ENCODE", pad, n);
                res = res.replace(/\+/g, '-');
                res = res.replace(/\//g, '_');
                res = res.replace(/=/g, '.');
                return res;
            },
            decode: function (lcr, pad) {
                lcr = lcr.replace(/-/g, '+');
                lcr = lcr.replace(/_/g, '/');
                lcr = lcr.replace(/\./g, '=');
                return this.authcode(lcr, "DECODE", pad);
            }
        };
        function encode_url(lcr, pad) {
            return cryptoAuthcode.encode(lcr, pad, 0x0);
        }
        function decode_url(lcr, pad) {
            return cryptoAuthcode.decode(lcr, pad);
        }
        function lc(s) {
            function lco(t) {
                var a = lcb(1) + t;
                return a.replace(/[\-|\,]/g, '');
            }
            function lcl(x, y) {
                var a = (x & 0xFFFF) + (y & 0xFFFF);
                var b = (x >> 16) + (y >> 16) + (a >> 16);
                return (b << 16) | (a & 0xFFFF);
            }
            function lcc(a, b) {
                return (a << b) | (a >>> (32 - b));
            }
            function lcf(a, b, c, d, x, s, t) {
                return lce((b & c) | ((~b) & d), a, b, x, s, t);
            }
            function lcg(a, b, c, d, x, s, t) {
                return lce((b & d) | (c & (~d)), a, b, x, s, t);
            }
            function lce(q, a, b, x, s, t) {
                return lcl(lcc(lcl(lcl(a, q), lcl(x, t)), s), b);
            }
            function lch(a, b, c, d, x, s, t) {
                return lce(b ^ c ^ d, a, b, x, s, t);
            }
            function lci(a, b, c, d, x, s, t) {
                return lce(c ^ (b | (~d)), a, b, x, s, t);
            }
            function lcb(x) {
                var a = 1732584193;
                var b = -271733879;
                var c = -1732584194;
                var d = 271733878;
                if (x !== '1') {
                    for (var i = 0; i < x.length; i += 16) {
                        var a1 = a;
                        var b1 = b;
                        var c1 = c;
                        var d1 = d;
                        a = lcf(a, b, c, d, x[i + 0], 7, -680876936);
                        d = lcf(d, a, b, c, x[i + 1], 12, -389564586);
                        c = lcf(c, d, a, b, x[i + 2], 17, 606105819);
                        b = lcf(b, c, d, a, x[i + 3], 22, -1044525330);
                        a = lcf(a, b, c, d, x[i + 4], 7, -176418897);
                        d = lcf(d, a, b, c, x[i + 5], 12, 1200080426);
                        c = lcf(c, d, a, b, x[i + 6], 17, -1473231341);
                        b = lcf(b, c, d, a, x[i + 7], 22, -45705983);
                        a = lcf(a, b, c, d, x[i + 8], 7, 1770035416);
                        d = lcf(d, a, b, c, x[i + 9], 12, -1958414417);
                        c = lcf(c, d, a, b, x[i + 10], 17, -42063);
                        b = lcf(b, c, d, a, x[i + 11], 22, -1990404162);
                        a = lcf(a, b, c, d, x[i + 12], 7, 1804603682);
                        d = lcf(d, a, b, c, x[i + 13], 12, -40341101);
                        c = lcf(c, d, a, b, x[i + 14], 17, -1502002290);
                        b = lcf(b, c, d, a, x[i + 15], 22, 1236535329);
                        a = lcg(a, b, c, d, x[i + 1], 5, -165796510);
                        d = lcg(d, a, b, c, x[i + 6], 9, -1069501632);
                        c = lcg(c, d, a, b, x[i + 11], 14, 643717713);
                        b = lcg(b, c, d, a, x[i + 0], 20, -373897302);
                        a = lcg(a, b, c, d, x[i + 5], 5, -701558691);
                        d = lcg(d, a, b, c, x[i + 10], 9, 38016083);
                        c = lcg(c, d, a, b, x[i + 15], 14, -660478335);
                        b = lcg(b, c, d, a, x[i + 4], 20, -405537848);
                        a = lcg(a, b, c, d, x[i + 9], 5, 568446438);
                        d = lcg(d, a, b, c, x[i + 14], 9, -1019803690);
                        c = lcg(c, d, a, b, x[i + 3], 14, -187363961);
                        b = lcg(b, c, d, a, x[i + 8], 20, 1163531501);
                        a = lcg(a, b, c, d, x[i + 13], 5, -1444681467);
                        d = lcg(d, a, b, c, x[i + 2], 9, -51403784);
                        c = lcg(c, d, a, b, x[i + 7], 14, 1735328473);
                        b = lcg(b, c, d, a, x[i + 12], 20, -1926607734);
                        a = lch(a, b, c, d, x[i + 5], 4, -378558);
                        d = lch(d, a, b, c, x[i + 8], 11, -2022574463);
                        c = lch(c, d, a, b, x[i + 11], 16, 1839030562);
                        b = lch(b, c, d, a, x[i + 14], 23, -35309556);
                        a = lch(a, b, c, d, x[i + 1], 4, -1530992060);
                        d = lch(d, a, b, c, x[i + 4], 11, 1272893353);
                        c = lch(c, d, a, b, x[i + 7], 16, -155497632);
                        b = lch(b, c, d, a, x[i + 10], 23, -1094730640);
                        a = lch(a, b, c, d, x[i + 13], 4, 681279174);
                        d = lch(d, a, b, c, x[i + 0], 11, -358537222);
                        c = lch(c, d, a, b, x[i + 3], 16, -722521979);
                        b = lch(b, c, d, a, x[i + 6], 23, 76029189);
                        a = lch(a, b, c, d, x[i + 9], 4, -640364487);
                        d = lch(d, a, b, c, x[i + 12], 11, -421815835);
                        c = lch(c, d, a, b, x[i + 15], 16, 530742520);
                        b = lch(b, c, d, a, x[i + 2], 23, -995338651);
                        a = lci(a, b, c, d, x[i + 0], 6, -198630844);
                        d = lci(d, a, b, c, x[i + 7], 10, 1126891415);
                        c = lci(c, d, a, b, x[i + 14], 15, -1416354905);
                        b = lci(b, c, d, a, x[i + 5], 21, -57434055);
                        a = lci(a, b, c, d, x[i + 12], 6, 1700485571);
                        d = lci(d, a, b, c, x[i + 3], 10, -1894986606);
                        c = lci(c, d, a, b, x[i + 10], 15, -1051523);
                        b = lci(b, c, d, a, x[i + 1], 21, -2054922799);
                        a = lci(a, b, c, d, x[i + 8], 6, 1873313359);
                        d = lci(d, a, b, c, x[i + 15], 10, -30611744);
                        c = lci(c, d, a, b, x[i + 6], 15, -1560198380);
                        b = lci(b, c, d, a, x[i + 13], 21, 1309151649);
                        a = lci(a, b, c, d, x[i + 4], 6, -145523070);
                        d = lci(d, a, b, c, x[i + 11], 10, -1120210379);
                        c = lci(c, d, a, b, x[i + 2], 15, 718787259);
                        b = lci(b, c, d, a, x[i + 9], 21, -343485551);
                        a = lcl(a, a1);
                        b = lcl(b, b1);
                        c = lcl(c, c1);
                        d = lcl(d, d1);
                    }
                    return [a, b, c, d];
                } else {
                    return [a, d, c, b];
                }
            }
            function lcd(t) {
                var a = ((t.length + 8) >> 6) + 1;
                var b = new Array(a * 16);
                for (var i = 0; i < a * 16; i++)
                    b[i] = 0;
                for (var i = 0; i < t.length; i++)
                    b[i >> 2] |= (t.charCodeAt(i) & 0xFF) << ((i % 4) * 8);
                b[i >> 2] |= 0x80 << ((i % 4) * 8);
                b[a * 16 - 2] = t.length * 8;
                return b;
            }
            function lca(t) {
                var a = "0123456789abcdef";
                var b = "";
                for (var i = 0; i < t.length * 4; i++) {
                    b += a.charAt((t[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) + a.charAt((t[i >> 2] >> ((i % 4) * 8)) & 0xF);
                }
                return b;
            }
            return lca(lcb(lcd(lco(s))));
        }
        var $ = {
            md5: function (s) {
                return CryptoJS.MD5(s).toString();
            }
        };
        var Host = "v1.shankuwang.com";
        var Domain = "v1.shankuwang.com";
        var resCode1 = fetch("https://v1.shankuwang.com/?url=" + url, {
            headers: {
                "Referer": "https://www.agefans.tv"
            }
        });
        eval(resCode1.match(/<script>[\s\S]*?(var Seek[\s\S]*?var Ref.*?;)/)[1]);
        var resCode2 = fetch('https://v1.shankuwang.com/Api.php', {
            headers: {
                'Token': Vkey,
                "Access-Token": Vkey + "-" + Key + "-" + Sign + "-" + Token,
                'Version': Version,
                'Cookie': 'uuid=' + Vkey + "-" + Key + "-" + Sign + "-" + Token
            },
            method: 'POST',
            body: 'url=' + Vurl + '&referer=' + 'aHR0cHM6Ly93d3cuYWdlZmFucy50dg==' + '&host=' + Host + '&key=' + Key + '&sign=' + Sign + '&token=' + Token + '&time=' + Time
        });
        var newUrl = decodeURIComponent(decode_url(JSON.parse(resCode2).url, $.md5(Host + Token)));
        if (newUrl[0] == '/') {
            newUrl = 'https:' + newUrl;
        }
        return newUrl;
    }
}
function getVideoUrl(url) {
    function getCookie(url) {
        let t1;
        let t2;
        let k1;
        let oriCookie = JSON.parse(fetchCookie(url, {}));
        oriCookie.map((c) => {
            c.split(';').some((s) => {
                if (s.split('=')[0] == 't1' || s.split('=')[0] == 'k1') {
                    eval(s);
                    return true;
                }
                else {
                    return false;
                }
            });
        });
        cookie.t1 = t1;
        cookie.k1 = k1;
        t1 = Math["round"](Number(t1) / 1E3) >> 5;
        cookie.k2 = (t1 * (t1 % 4096) * 3 + 83215) * (t1 % 4096) + t1;
        while (true) {
            t2 = new Date().getTime();
            if (t2.toString().slice(-3).indexOf(cookie.k2.toString().slice(-1)) >= 0) {
                cookie.t2 = t2;
                break;
            }
        }
    }
    var cookie = {};
    getCookie(url);
    var _getplay_url = (url.replace(/play.{1}(.*?).{1}playid.{1}(.*?)_(.*)/, '_getplay?aid=$1&playindex=$2&epindex=$3'));
    let playResCode = fetch(_getplay_url,
        {
            headers: {
                "user-agent": "Mozilla/5.0",
                "x-requested-with": "XMLHttpRequest",
                'referer': url,
                'cookie': 't1=' + cookie.t1 + ';t2=' + cookie.t2 + ';k2=' + cookie.k2
            }
        }
    );
    var play = url;
    if (playResCode.indexOf('{') >= 0) {
        let playJson = JSON.parse(playResCode);
        if (playJson.playid.search(/QLIVE|web_mp4|web_m3u8|PC-XXX|WMVBRH|WMZD|WMQPIC|WMXIAOMI/) >= 0) {
            if (playJson.vurl[0] == '/') {
                play = decodeURIComponent('http:' + playJson.vurl);
            }
            else {
                play = decodeURIComponent(playJson.vurl);
            }
        }
        else if (playJson.playid.search(/tieba/) >= 0) {
            let purl = playJson.purl;
            let vurl = playJson.vurl;
            play = decodeURIComponent(purl.substring(purl.indexOf('http'), purl.length) + vurl);
        }
        else if (playJson.playid.search(/爱奇艺接口|腾讯接口|优酷接口|PPTV接口/) >= 0) {
            let vurl = playJson.vurl;
            if (vurl[0] == '/') {
                vurl = 'https:' + vurl;
            }
            play = vip['88ys'](vurl);
        }
        else {
            setError(playResCode);
        }
    }
    else {
        setError(playResCode);
    }
    return play + '#isVideo=true#';
}
function erji() {
    if (MY_URL.indexOf('haikuoshijie') >= 0) {
        let d = [];
        d.push({
            desc: 'auto',
            col_type: 'x5_webview_single',
            url: MY_URL
        });
        setResult(d);
    }
}
function search() {
    var ret = [];
    var xjjsearchkey = MY_URL.split('##')[1];
    var xjjpage = MY_URL.split('##')[2];
    var url = _domin + '/search?query=' + xjjsearchkey + '&page=' + xjjpage;
    var res = fetch(url, {});
    var movies = parseDomForArray(res, '.blockcontent1&&.cell');
    for (let i of movies) {
        let extra = JSON.stringify({
            xjjurl: _domin + parseDomForHtml(i, 'a&&href')
        });
        ret.push({
            title: parseDomForHtml(i, '.cell_imform&&.cell_imform_name&&Text'),
            url: 'hiker://page/detail.html' + '#immersiveTheme#',
            desc: parseDomForHtml(i, '.newname&&Text'),
            img: parseDomForHtml(i, 'img&&src'),
            content: parseDomForHtml(i, '.cell_imform_kv_desc&&Text'),
            extra: extra
        });
    }
    setResult(ret);
}
function chapter() {
    var url = MY_PARAMS.xjjurl;
    res = fetch(url, {});
    var idx = parseDomForHtml(res, '#DEF_PLAYINDEX&&Html');
    var current_group = parseDomForArray(res, '.movurl,' + idx + '&&li');
    var latest = parseDomForHtml(current_group[current_group.length - 1], 'a&&Text');
    setResult(latest)
}
function main() {
    function addTabBtn(page, res, tabs) {
        var tab = getVar('age-tab');
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
                putVar('age-tab', obj.name);
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
    var tabs = ['最近更新', '每周放送', '目录'];
    var tab = addTabBtn(xjjpage, ret, tabs);

    switch (tab) {
        case '最近更新':
            let resCode_1 = fetch(_domin + '/update?page=' + xjjpage, {});
            let movies = parseDomForArray(resCode_1, '.ul_li_a6&&.anime_icon2');
            for (let i of movies) {
                let extra = JSON.stringify({
                    xjjurl: _domin + parseDomForHtml(i, 'a&&href')
                });
                ret.push({
                    title: parseDomForHtml(i, '.anime_icon2_name&&Text'),
                    url: 'hiker://page/detail.html' + '#immersiveTheme#',
                    desc: parseDomForHtml(i, '.anime_icon1_name1&&Text'),
                    img: parseDomForHtml(i, 'img&&src'),
                    extra: extra
                });
            }
            break;
        case '每周放送':
            function refreshWeek() {
                let resCode = fetch(_domin, {});
                eval(resCode.match(/var new_anime_list = [\s\S]*?\}\]\;/)[0].replace('var', 'let'));
                let week = {};
                week.info = new_anime_list;
                week.cur = new Date().getDay();
                week.update = new Date().getTime();
                writeFile('hiker://files/rules/quietboy/agefans/week.txt', JSON.stringify(week));
            }
            if (xjjpage != 1) break;
            ret.push({
                title: `<a href="hiker://empty@lazyRule=.js:let weekInfo = JSON.parse(fetch('hiker://files/rules/quietboy/agefans/week.txt', {}));weekInfo.cur=1;writeFile('hiker://files/rules/quietboy/agefans/week.txt', JSON.stringify(weekInfo));refreshPage();'toast://轻点~'">周一</a>&nbsp&nbsp&nbsp&nbsp` +
                    `<a href="hiker://empty@lazyRule=.js:let weekInfo = JSON.parse(fetch('hiker://files/rules/quietboy/agefans/week.txt', {}));weekInfo.cur=2;writeFile('hiker://files/rules/quietboy/agefans/week.txt', JSON.stringify(weekInfo));refreshPage();'toast://轻点~'">周二</a>&nbsp&nbsp&nbsp&nbsp` +
                    `<a href="hiker://empty@lazyRule=.js:let weekInfo = JSON.parse(fetch('hiker://files/rules/quietboy/agefans/week.txt', {}));weekInfo.cur=3;writeFile('hiker://files/rules/quietboy/agefans/week.txt', JSON.stringify(weekInfo));refreshPage();'toast://轻点~'">周三</a>&nbsp&nbsp&nbsp&nbsp` +
                    `<a href="hiker://empty@lazyRule=.js:let weekInfo = JSON.parse(fetch('hiker://files/rules/quietboy/agefans/week.txt', {}));weekInfo.cur=4;writeFile('hiker://files/rules/quietboy/agefans/week.txt', JSON.stringify(weekInfo));refreshPage();'toast://轻点~'">周四</a>&nbsp&nbsp&nbsp&nbsp` +
                    `<a href="hiker://empty@lazyRule=.js:let weekInfo = JSON.parse(fetch('hiker://files/rules/quietboy/agefans/week.txt', {}));weekInfo.cur=5;writeFile('hiker://files/rules/quietboy/agefans/week.txt', JSON.stringify(weekInfo));refreshPage();'toast://轻点~'">周五</a>&nbsp&nbsp&nbsp&nbsp` +
                    `<a href="hiker://empty@lazyRule=.js:let weekInfo = JSON.parse(fetch('hiker://files/rules/quietboy/agefans/week.txt', {}));weekInfo.cur=6;writeFile('hiker://files/rules/quietboy/agefans/week.txt', JSON.stringify(weekInfo));refreshPage();'toast://轻点~'">周六</a>&nbsp&nbsp&nbsp&nbsp` +
                    `<a href="hiker://empty@lazyRule=.js:let weekInfo = JSON.parse(fetch('hiker://files/rules/quietboy/agefans/week.txt', {}));weekInfo.cur=0;writeFile('hiker://files/rules/quietboy/agefans/week.txt', JSON.stringify(weekInfo));refreshPage();'toast://轻点~'">周日</a>&nbsp&nbsp&nbsp&nbsp`,
                col_type: 'rich_text'
            });
            let weekInfo = fetch('hiker://files/rules/quietboy/agefans/week.txt', {});
            if (weekInfo == '') {
                refreshWeek();
                weekInfo = fetch('hiker://files/rules/quietboy/agefans/week.txt', {});
            }
            let curTime = new Date().getTime();
            let weekInfoParse = JSON.parse(weekInfo);
            let curWeek = weekInfoParse.cur;
            let update = weekInfoParse.update;
            if ((curTime - update) > 3600000) {
                refreshWeek();
                weekInfo = fetch('hiker://files/rules/quietboy/agefans/week.txt', {});
                weekInfoParse = JSON.parse(weekInfo);
                curWeek = weekInfoParse.cur;
                update = weekInfoParse.update;
            }
            ret.push({
                title: '当前显示： ““周' + curWeek + '””',
                col_type: 'text_1'
            })
            ret.push({
                col_type: 'line_blank'
            })
            for (let i of weekInfoParse.info) {
                if (i.wd == curWeek) {
                    let extra = JSON.stringify({
                        xjjurl: _domin + '/detail/' + i.id
                    });
                    ret.push({
                        col_type: 'text_1',
                        title: i.name + '    ' + i.namefornew,
                        url: 'hiker://page/detail.html' + '#immersiveTheme#',
                        extra: extra
                    });
                }
            }
            break;
        case '目录':
            var menuPath = 'hiker://files/rules/quietboy/agefans/menu.txt';
            function loadMenu() {
                let menuInfo = fetch(menuPath, {});
                if (menuInfo == '') {
                    menuInfo = new Array(9).fill(0).join('|');
                    writeFile(menuPath, menuInfo);
                }
                return menuInfo.split('|');
            }
            let menuKey = ['地区', '版本', '首字母', '年份', '季度', '状态', '类型', '资源', '排序'];
            let menuShow = [
                ['全部', '日本', '中国', '欧美'],
                ['全部', 'TV', '剧场版', 'OVA'],
                ['全部', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
                ['全部', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000以前'],
                ['全部', '1月', '4月', '7月', '10月'],
                ['全部', '连载', '完结', '未播放'],
                ['全部', '搞笑', '运动', '励志', '热血', '战斗', '竞技', '校园', '青春', '爱情', '冒险', '后宫', '百合', '治愈', '萝莉', '魔法', '悬疑', '推理', '奇幻', '科幻', '游戏', '神魔', '恐怖', '血腥', '机战', '战争', '犯罪', '历史', '社会', '职场', '剧情', '伪娘', '耽美', '童年', '教育', '亲子', '真人', '歌舞', '肉番', '美少女', '轻小说', '吸血鬼', '女性向', '泡面番', '欢乐向'],
                ['全部', 'BDRIP', 'AGE-RIP'],
                ['更新时间', '名称', '点击量']
            ];
            let menuValue = [
                ['all', '日本', '中国', '欧美'],
                ['all', 'TV', '剧场版', 'OVA'],
                ['all', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
                ['all', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000'],
                ['all', '1', '4', '7', '10'],
                ['all', '连载', '完结', '未播放'],
                ['all', '搞笑', '运动', '励志', '热血', '战斗', '竞技', '校园', '青春', '爱情', '冒险', '后宫', '百合', '治愈', '萝莉', '魔法', '悬疑', '推理', '奇幻', '科幻', '游戏', '神魔', '恐怖', '血腥', '机战', '战争', '犯罪', '历史', '社会', '职场', '剧情', '伪娘', '耽美', '童年', '教育', '亲子', '真人', '歌舞', '肉番', '美少女', '轻小说', '吸血鬼', '女性向', '泡面番', '欢乐向'],
                ['all', 'BDRIP', 'AGE-RIP'],
                ['time', 'name', '点击量']
            ];
            let menuIdx = loadMenu();
            let rowUrl = _domin + '/catalog/版本-年份-首字母-类型-资源-排序-' + xjjpage + '-地区-季度-状态';
            for (let i = 0; i < menuKey.length; i++) {
                rowUrl = rowUrl.replace(menuKey[i], menuValue[i][menuIdx[i]]);
                if (xjjpage == 1) {
                    ret.push({
                        col_type: 'scroll_button',
                        title: '““””<strong><font color="black">xjjkey：</font></strong>'.replace('xjjkey', menuKey[i]),
                        url: $('hiker://empty#noLoading#').lazyRule(() => {
                            return 'hiker://empty';
                        })
                    });
                    for (let j = 0; j < menuValue[i].length; j++) {
                        if (menuIdx[i] == j) {
                            ret.push({
                                col_type: 'scroll_button',
                                title: '““””<small><font color="red">xjjshow</font></small>'.replace('xjjshow', menuShow[i][j]),
                                url: $('hiker://empty#noLoading#').lazyRule(() => {
                                    return 'hiker://empty';
                                })
                            });
                        }
                        else {
                            ret.push({
                                col_type: 'scroll_button',
                                title: '““””<code>xjjshow</code>'.replace('xjjshow', menuShow[i][j]),
                                url: $('hiker://empty#noLoading#').lazyRule((obj) => {
                                    let menuInfo = fetch(obj.menuPath, {}).split('|');
                                    menuInfo[obj.i] = obj.j;
                                    writeFile(obj.menuPath, menuInfo.join('|'));
                                    refreshPage();
                                    return 'hiker://empty';
                                }, { menuPath: menuPath, i: i, j: j })
                            });
                        }
                    }
                    ret.push({
                        col_type: 'blank_block'
                    })
                }
            }
            if (xjjpage == 1) {
                ret.push({
                    col_type: 'flex_button',
                    title: '重置选项',
                    url: $("hiker://empty").lazyRule((obj) => {
                        writeFile(obj.menuPath, new Array(9).fill(0).join('|'));
                        refreshPage();
                        return 'toast://重置成功~'
                    }, { menuPath: menuPath })
                });
                ret.push({
                    col_type: 'line_blank'
                });
            }

            let moviesMenu = parseDomForArray(fetch(rowUrl, {}), '.blockcontent1&&.cell');
            for (let idx = 0; idx < moviesMenu.length; idx++) {
                let extra = JSON.stringify({
                    xjjurl: _domin + parseDomForHtml(moviesMenu[idx], 'a&&href')
                });
                ret.push({
                    title: parseDomForHtml(moviesMenu[idx], '.cell_imform&&.cell_imform_name&&Text'),
                    url: 'hiker://page/detail.html' + '#immersiveTheme#',
                    desc: parseDomForHtml(moviesMenu[idx], '.newname&&Text'),
                    img: parseDomForHtml(moviesMenu[idx], 'img&&src'),
                    extra: extra
                });
            }

            break;
        default:
            break;
    }
    setResult(ret);
}