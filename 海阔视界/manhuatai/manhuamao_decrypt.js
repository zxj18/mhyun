//解密
var hexcase = 0;  
var b64pad  = ""; 
var chrsz   = 8; 


function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}



function core_md5(x, len)
{

    x[len >> 5] |= 0x80 << ((len) % 32);
    x[(((len + 64) >>> 9) << 4) + 14] = len;

    var a =  1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d =  271733878;

    for(var i = 0; i < x.length; i += 16)
    {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;

        a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
        d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
        c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
        b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
        a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
        d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
        c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
        b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
        a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
        d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
        c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
        b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
        a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
        d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
        c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
        b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

        a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
        d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
        c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
        b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
        a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
        d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
        c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
        b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
        a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
        d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
        c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
        b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
        a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
        d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
        c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
        b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

        a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
        d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
        c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
        b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
        a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
        d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
        c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
        b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
        a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
        d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
        c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
        b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
        a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
        d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
        c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
        b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

        a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
        d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
        c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
        b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
        a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
        d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
        c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
        b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
        a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
        d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
        c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
        b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
        a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
        d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
        c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
        b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
    }
    return Array(a, b, c, d);

}


function md5_cmn(q, a, b, x, s, t)
{
    return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
    return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
    return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
    return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
    return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}



function safe_add(x, y)
{
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
}


function bit_rol(num, cnt)
{
    return (num << cnt) | (num >>> (32 - cnt));
}


function str2binl(str)
{
    var bin = Array();
    var mask = (1 << chrsz) - 1;
    for(var i = 0; i < str.length * chrsz; i += chrsz)
        bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
    return bin;
}




function binl2hex(binarray)
{
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var str = "";
    for(var i = 0; i < binarray.length * 4; i++)
    {
        str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
            hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
    }
    return str;
}

function cdnImage(_0x2176d7, _0x2f45fa, _0xf90ceb) {
    let time_exp = Math.round(new Date() / 1000);
    let ks_md5_path = _0x2176d7 + _0xf90ceb + time_exp;
    let ks_md5 = hex_md5(ks_md5_path);
    return _0x2f45fa + _0x2176d7 + '?_MD=' + ks_md5 +"&_TM=" + time_exp;
}
let rescode = fetch(input,{});
let evalinfo = parseDomForHtml(rescode,"body&&Html").match(/let img_data = "[\s\S]*?"/g)[0];
eval(evalinfo);
var LZString = function() {
    function o(o, r) {
        if (!t[o]) {
            t[o] = {};
            for (var n = 0; n < o.length; n++)
                t[o][o.charAt(n)] = n
        }
        return t[o][r]
    }
    var r = String.fromCharCode
        , n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        , e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$"
        , t = {}
        , i = {
        decompressFromBase64: function(r) {
            return null == r ? "" : "" == r ? null : i._decompress(r.length, 32, function(e) {
                return o(n, r.charAt(e))
            })
        },
        compress: function(o) {
            return i._compress(o, 16, function(o) {
                return r(o)
            })
        },
        _compress: function(o, r, n) {
            if (null == o)
                return "";
            var e, t, i, s = {}, p = {}, u = "", c = "", a = "", l = 2, f = 3, h = 2, d = [], m = 0, v = 0;
            for (i = 0; i < o.length; i += 1)
                if (u = o.charAt(i),
                Object.prototype.hasOwnProperty.call(s, u) || (s[u] = f++,
                    p[u] = !0),
                    c = a + u,
                    Object.prototype.hasOwnProperty.call(s, c))
                    a = c;
                else {
                    if (Object.prototype.hasOwnProperty.call(p, a)) {
                        if (a.charCodeAt(0) < 256) {
                            for (e = 0; h > e; e++)
                                m <<= 1,
                                    v == r - 1 ? (v = 0,
                                        d.push(n(m)),
                                        m = 0) : v++;
                            for (t = a.charCodeAt(0),
                                     e = 0; 8 > e; e++)
                                m = m << 1 | 1 & t,
                                    v == r - 1 ? (v = 0,
                                        d.push(n(m)),
                                        m = 0) : v++,
                                    t >>= 1
                        } else {
                            for (t = 1,
                                     e = 0; h > e; e++)
                                m = m << 1 | t,
                                    v == r - 1 ? (v = 0,
                                        d.push(n(m)),
                                        m = 0) : v++,
                                    t = 0;
                            for (t = a.charCodeAt(0),
                                     e = 0; 16 > e; e++)
                                m = m << 1 | 1 & t,
                                    v == r - 1 ? (v = 0,
                                        d.push(n(m)),
                                        m = 0) : v++,
                                    t >>= 1
                        }
                        l--,
                        0 == l && (l = Math.pow(2, h),
                            h++),
                            delete p[a]
                    } else
                        for (t = s[a],
                                 e = 0; h > e; e++)
                            m = m << 1 | 1 & t,
                                v == r - 1 ? (v = 0,
                                    d.push(n(m)),
                                    m = 0) : v++,
                                t >>= 1;
                    l--,
                    0 == l && (l = Math.pow(2, h),
                        h++),
                        s[c] = f++,
                        a = String(u)
                }
            if ("" !== a) {
                if (Object.prototype.hasOwnProperty.call(p, a)) {
                    if (a.charCodeAt(0) < 256) {
                        for (e = 0; h > e; e++)
                            m <<= 1,
                                v == r - 1 ? (v = 0,
                                    d.push(n(m)),
                                    m = 0) : v++;
                        for (t = a.charCodeAt(0),
                                 e = 0; 8 > e; e++)
                            m = m << 1 | 1 & t,
                                v == r - 1 ? (v = 0,
                                    d.push(n(m)),
                                    m = 0) : v++,
                                t >>= 1
                    } else {
                        for (t = 1,
                                 e = 0; h > e; e++)
                            m = m << 1 | t,
                                v == r - 1 ? (v = 0,
                                    d.push(n(m)),
                                    m = 0) : v++
                                t >>= 1
                    }
                    l--,
                    0 == l && (l = Math.pow(2, h),
                        h++),
                        delete p[a]
                } else
                    for (t = s[a],
                             e = 0; h > e; e++)
                        m = m << 1 | 1 & t,
                            v == r - 1 ? (v = 0,
                                d.push(n(m)),
                                m = 0) : v++,
                            t >>= 1;
                l--,
                0 == l && (l = Math.pow(2, h),
                    h++)
            }
            for (t = 2,
                     e = 0; h > e; e++)
                m = m << 1 | 1 & t,
                    v == r - 1 ? (v = 0,
                        d.push(n(m)),
                        m = 0) : v++,
                    t >>= 1;
            for (; ; ) {
                if (m <<= 1,
                v == r - 1) {
                    d.push(n(m));
                    break
                }
                v++
            }
            return d.join("")
        },
        decompress: function(o) {
            return null == o ? "" : "" == o ? null : i._decompress(o.length, 32768, function(r) {
                return o.charCodeAt(r)
            })
        },
        _decompress: function(o, n, e) {
            var t, i, s, p, u, c, a, l, f = [], h = 4, d = 4, m = 3, v = "", w = [], A = {
                val: e(0),
                position: n,
                index: 1
            };
            for (i = 0; 3 > i; i += 1)
                f[i] = i;
            for (p = 0,
                     c = Math.pow(2, 2),
                     a = 1; a != c; )
                u = A.val & A.position,
                    A.position >>= 1,
                0 == A.position && (A.position = n,
                    A.val = e(A.index++)),
                    p |= (u > 0 ? 1 : 0) * a,
                    a <<= 1;
            switch (t = p) {
                case 0:
                    for (p = 0,
                             c = Math.pow(2, 8),
                             a = 1; a != c; )
                        u = A.val & A.position,
                            A.position >>= 1,
                        0 == A.position && (A.position = n,
                            A.val = e(A.index++)),
                            p |= (u > 0 ? 1 : 0) * a,
                            a <<= 1;
                    l = r(p);
                    break;
                case 1:
                    for (p = 0,
                             c = Math.pow(2, 16),
                             a = 1; a != c; )
                        u = A.val & A.position,
                            A.position >>= 1,
                        0 == A.position && (A.position = n,
                            A.val = e(A.index++)),
                            p |= (u > 0 ? 1 : 0) * a,
                            a <<= 1;
                    l = r(p);
                    break;
                case 2:
                    return ""
            }
            for (f[3] = l,
                     s = l,
                     w.push(l); ; ) {
                if (A.index > o)
                    return "";
                for (p = 0,
                         c = Math.pow(2, m),
                         a = 1; a != c; )
                    u = A.val & A.position,
                        A.position >>= 1,
                    0 == A.position && (A.position = n,
                        A.val = e(A.index++)),
                        p |= (u > 0 ? 1 : 0) * a,
                        a <<= 1;
                switch (l = p) {
                    case 0:
                        for (p = 0,
                                 c = Math.pow(2, 8),
                                 a = 1; a != c; )
                            u = A.val & A.position,
                                A.position >>= 1,
                            0 == A.position && (A.position = n,
                                A.val = e(A.index++)),
                                p |= (u > 0 ? 1 : 0) * a,
                                a <<= 1;
                        f[d++] = r(p),
                            l = d - 1,
                            h--;
                        break;
                    case 1:
                        for (p = 0,
                                 c = Math.pow(2, 16),
                                 a = 1; a != c; )
                            u = A.val & A.position,
                                A.position >>= 1,
                            0 == A.position && (A.position = n,
                                A.val = e(A.index++)),
                                p |= (u > 0 ? 1 : 0) * a,
                                a <<= 1;
                        f[d++] = r(p),
                            l = d - 1,
                            h--;
                        break;
                    case 2:
                        return w.join("")
                }
                if (0 == h && (h = Math.pow(2, m),
                    m++),
                    f[l])
                    v = f[l];
                else {
                    if (l !== d)
                        return null;
                    v = s + s.charAt(0)
                }
                w.push(v),
                    f[d++] = s + v.charAt(0),
                    h--,
                    s = v,
                0 == h && (h = Math.pow(2, m),
                    m++)
            }
        }
    };
    return i
}();

var pics = [];
let img_data_arr = LZString.decompressFromBase64(img_data).split(',');
var img_pre ="/uploads/"

var asset_domain = "https://mao.mhtupian.com";
var asset_key ="manhuacat2021";
for (let _0x418f08 in img_data_arr) {
    pics.push(cdnImage(img_pre + img_data_arr[_0x418f08], asset_domain, asset_key));
}
