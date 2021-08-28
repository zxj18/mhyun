function EJ() {
    var d = [];
    d.push({
        desc: '240&&float',
        col_type: 'x5_webview_single'
    });
    var html = getResCode();
    if (getResCode().indexOf('检测中') != -1) {
html=fetch(MY_URL + '?btwaf'+ html.match(/btwaf(.*?)\"/)[1], {});
}
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

    //var _0xodu='jsjiami.com.v6',_0x1195=[_0xodu,'\x40\x6c\x61\x7a\x79\x52\x75\x6c\x65\x3d\x2e\x6a\x73\x3a\x74\x72\x79\x7b\x76\x61\x72\x20\x48\x20\x3d\x20\x72\x65\x71\x75\x65\x73\x74\x28\x69\x6e\x70\x75\x74\x29\x3b\x76\x61\x72\x20\x55\x20\x3d\x20\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x28\x70\x61\x72\x73\x65\x44\x6f\x6d\x46\x6f\x72\x48\x74\x6d\x6c\x28\x48\x2c\x20\x27\x2e\x6d\x6f\x2d\x70\x6c\x61\x79\x2d\x6c\x6f\x61\x64\x26\x26\x64\x61\x74\x61\x2d\x70\x6c\x61\x79\x27\x29\x2e\x73\x6c\x69\x63\x65\x28\x33\x29\x29\x3b\x76\x61\x72\x20\x6a\x78\x20\x3d\x20\x70\x61\x72\x73\x65\x44\x6f\x6d\x46\x6f\x72\x48\x74\x6d\x6c\x28\x48\x2c\x20\x27\x2e\x6d\x6f\x2d\x70\x6c\x61\x79\x2d\x6c\x6f\x61\x64\x26\x26\x64\x61\x74\x61\x2d\x70\x61\x72\x73\x65\x27\x29\x3b\x69\x66\x28\x55\x2e\x69\x6e\x64\x65\x78\x4f\x66\x28\x27\x68\x74\x6d\x6c\x27\x29\x21\x3d\x2d\x31\x29\x7b\x72\x65\x66\x72\x65\x73\x68\x58\x35\x57\x65\x62\x56\x69\x65\x77\x28\x27\x27\x29\x3b\x76\x61\x72\x20\x75\x72\x6c\x20\x3d\x20\x70\x61\x72\x73\x65\x44\x6f\x6d\x46\x6f\x72\x48\x74\x6d\x6c\x28\x72\x65\x71\x75\x65\x73\x74\x28\x27\x68\x74\x74\x70\x73\x3a\x2f\x2f\x74\x69\x74\x61\x6e\x2e\x6d\x67\x74\x76\x2e\x63\x6f\x6d\x2e\x68\x64\x38\x2e\x70\x77\x2f\x64\x70\x2f\x61\x6e\x61\x6c\x79\x73\x69\x73\x2e\x70\x68\x70\x3f\x76\x3d\x27\x2b\x55\x29\x2c\x27\x62\x6f\x64\x79\x26\x26\x73\x63\x72\x69\x70\x74\x2c\x2d\x31\x26\x26\x48\x74\x6d\x6c\x27\x29\x3b\x65\x76\x61\x6c\x28\x75\x72\x6c\x2e\x73\x70\x6c\x69\x74\x28\x27\x3b\x27\x29\x5b\x30\x5d\x29\x3b\x75\x72\x6c\x73\x7d\x65\x6c\x73\x65\x20\x69\x66\x28\x6a\x78\x2e\x69\x6e\x64\x65\x78\x4f\x66\x28\x27\x6d\x6d\x27\x29\x21\x3d\x2d\x31\x29\x7b\x65\x76\x61\x6c\x28\x67\x65\x74\x43\x72\x79\x70\x74\x6f\x4a\x53\x28\x29\x29\x3b\x27\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x6c\x73\x2e\x39\x30\x6d\x6d\x2e\x6d\x65\x2f\x64\x64\x79\x75\x6e\x2f\x27\x20\x2b\x20\x55\x20\x2b\x20\x27\x2f\x6c\x2f\x27\x20\x2b\x20\x43\x72\x79\x70\x74\x6f\x4a\x53\x2e\x4d\x44\x35\x28\x55\x20\x2b\x20\x27\x64\x75\x6f\x64\x75\x6f\x27\x20\x2b\x20\x27\x6c\x27\x20\x2b\x28\x4d\x61\x74\x68\x2e\x66\x6c\x6f\x6f\x72\x28\x6e\x65\x77\x20\x44\x61\x74\x65\x28\x29\x2e\x67\x65\x74\x54\x69\x6d\x65\x28\x29\x20\x2f\x20\x30\x78\x31\x38\x36\x61\x30\x29\x20\x2a\x20\x30\x78\x36\x34\x29\x2e\x74\x6f\x53\x74\x72\x69\x6e\x67\x28\x29\x29\x2b\x20\x27\x2f\x70\x6c\x61\x79\x6c\x69\x73\x74\x2e\x6d\x33\x75\x38\x27\x7d\x65\x6c\x73\x65\x20\x69\x66\x28\x55\x2e\x69\x6e\x64\x65\x78\x4f\x66\x28\x27\x68\x74\x74\x70\x27\x29\x3d\x3d\x2d\x31\x29\x7b\x65\x76\x61\x6c\x28\x70\x61\x72\x73\x65\x44\x6f\x6d\x46\x6f\x72\x48\x74\x6d\x6c\x28\x66\x65\x74\x63\x68\x28\x6a\x78\x2b\x55\x29\x2c\x27\x62\x6f\x64\x79\x26\x26\x73\x63\x72\x69\x70\x74\x26\x26\x48\x74\x6d\x6c\x27\x29\x2e\x73\x70\x6c\x69\x74\x28\x27\x69\x66\x27\x29\x5b\x30\x5d\x29\x3b\x76\x6f\x64\x75\x72\x6c\x2f\x2a\x65\x76\x61\x6c\x28\x67\x65\x74\x43\x72\x79\x70\x74\x6f\x4a\x53\x28\x29\x29\x3b\x65\x76\x61\x6c\x28\x70\x61\x72\x73\x65\x44\x6f\x6d\x46\x6f\x72\x48\x74\x6d\x6c\x28\x66\x65\x74\x63\x68\x28\x6a\x78\x2b\x55\x29\x2c\x27\x62\x6f\x64\x79\x26\x26\x73\x63\x72\x69\x70\x74\x26\x26\x48\x74\x6d\x6c\x27\x29\x29\x3b\x76\x61\x72\x20\x74\x69\x6d\x65\x73\x3d\x28\x6e\x65\x77\x20\x44\x61\x74\x65\x28\x29\x29\x2e\x67\x65\x74\x54\x69\x6d\x65\x28\x29\x3b\x76\x61\x72\x20\x73\x68\x3d\x20\x43\x72\x79\x70\x74\x6f\x4a\x53\x2e\x4d\x44\x35\x28\x62\x61\x73\x65\x36\x34\x45\x6e\x63\x6f\x64\x65\x28\x69\x64\x2b\x74\x69\x6d\x65\x73\x29\x29\x2e\x74\x6f\x53\x74\x72\x69\x6e\x67\x28\x43\x72\x79\x70\x74\x6f\x4a\x53\x2e\x65\x6e\x63\x2e\x48\x65\x78\x29\x3b\x27\x68\x74\x74\x70\x73\x3a\x2f\x2f\x70\x79\x2e\x37\x38\x39\x70\x61\x6e\x2e\x63\x6e\x2f\x6e\x65\x77\x2f\x70\x6c\x61\x79\x31\x2f\x27\x2b\x69\x64\x2b\x27\x7c\x27\x2b\x74\x69\x6d\x65\x73\x2b\x27\x7c\x27\x2b\x73\x68\x2b\x27\x7c\x27\x2b\x27\x31\x27\x2b\x27\x7c\x27\x2b\x27\x69\x6e\x64\x65\x78\x2e\x6d\x33\x75\x38\x27\x2a\x2f\x7d\x65\x6c\x73\x65\x7b\x72\x65\x66\x72\x65\x73\x68\x58\x35\x57\x65\x62\x56\x69\x65\x77\x28\x27\x27\x29\x3b\x55\x7d\x7d\x63\x61\x74\x63\x68\x28\x65\x29\x7b\x69\x6e\x70\x75\x74\x7d','\x6a\x73\x74\x47\x4b\x4d\x6a\x64\x69\x7a\x5a\x61\x74\x5a\x74\x6e\x6d\x69\x4e\x46\x54\x2e\x63\x6f\x6d\x2e\x76\x36\x3d\x3d'];var _0x34d0=function(_0x3c2d35,_0x551a48){_0x3c2d35=~~'0x'['concat'](_0x3c2d35);var _0x3338b1=_0x1195[_0x3c2d35];return _0x3338b1;};(function(_0x1c19fe,_0x3c4433){var _0x2ede66=0x0;for(_0x3c4433=_0x1c19fe['shift'](_0x2ede66>>0x2);_0x3c4433&&_0x3c4433!==(_0x1c19fe['pop'](_0x2ede66>>0x3)+'')['replace'](/[tGKMdzZtZtnNFT=]/g,'');_0x2ede66++){_0x2ede66=_0x2ede66^0x8357b;}}(_0x1195,_0x34d0));var lazy=_0x34d0('0');;_0xodu='jsjiami.com.v6';

// var _0xodw='jsjiami.com.v6',_0x48b9=[_0xodw,'wo8BP8KAIsOlS17DoMOEbG3CgMKGwqwxLgTCtiHCpEbDlMKwFD5nHUI5w79Kw4U6w5fDpcOAwqdTwoxoBEk3L8OQw4/DvcOxcSLCpzxTwq3CjU46HcOmw7d2wrbCu1PDt0p+WcKuwrULwrEXKsK0w6vDiB8gIMO5I8KAw4EQw7fDscOpAE5fZlzCrVnChmx1w4sww7kQw5TDksKpIGzDqHXCtFfDvA7DtMK0w7lCw75AV2LDqsKKw77CuMOORDAdImV7cWYRJFfCuWMzW8KvQWrCi8KQwqTCthjCqB8VwozDqsKbZ8OOTC3Dj8K1D214wqswwpJsYDLDnB8OXcKgbMOqwqTDoMKiVG1aCMKuBT7DlMK9woRXS8Ogwp9SP1lRNcOHFsOZw70MGE7CuMOzIUfCi8O5WsKYMMKxHXnDtsKhw445YXF5wodWw4IAwpRDw5RgwpxDKmBKwodwwo/DoXDDq8KJMA4DOkXDhRbCtDNFw6DCncKcw7zCvGrCtiLCrSfDgBNpw6bChMKsw55gPWPCtcKkYcOSwq3DmBXCgzHDjcOiw5/CmzlpSDgswrLCqHswUzZ2VMK7DcKlw5zCuMKSEcOnWcKHfGLCoMKbKMO9a8K+b8K2w5BPwo/DlcOqAUvCnsO3FMOPW8KTw7XCoMKzYsKdfsK0w4Y5R3PCi8Kow67CksKTccKpd8KKZljCt3XCvcOBCcKMG8KIP8ODw5NOTcKgwonDpcKJwqlsKEHDim3DuB5WMwXDhwTChMKMw45EMcOsKcK0w4XDuBLCmn50MzLCqxPDmkp5w781KWTDk0UWw41GT8OrcsKowpTDnDJyPsODw4bClMOMw5dww59EaW4bw5sAw7fDmsO5wqkbG2DCpmQxADXDtFlLFAnCusOEMxh5w6cuwqjCknfDkxrDgzYKZ8OjWGHCgW/Cm8KrMhHCig7Co2zCtTHDix/DgMOeaVzDo8Oze21hVgkcwrDDtcKFw7pyw6MZU0Qiw4IhwrkTb8KxDCXDlsOIw4rCpkdMw5jDm1xmWMKxF8KIw5Nyeko5w7zCkFrCgW7CqcOnw7TCmcO5w4UUExApw4B/ZsKlw6MRwrsiwo4ow4PCqjnCpmQNcMKyBsONF8OBwpvClcKtwpRMw783REopwr9Uwo00wrRbwpR/CsKvwooCHsKiwowxBkjDljTDpMKLwopcwpjCmcKkwqjDk0PCjMOmNnUqw74xACjDvRcbSmdxXnBlw6vCgMKwwqoKwoZcXU55w5YcWUzCpFTCmMK2aEnCtVzDtTHClz8hXsKtRsKfZ2fCocOXWBHDhMKfGlBwZsOLwqXDmMOgwoJoH8KxJsODwpwCw7DCpwDCqcKzJcKGbyIADXp9wroOBsKsXsOmw7nDg8Kow75qw4TDjsOOwpPDgGzDmsKewr9jwqvCjcOCw6lFw5gyw7LCnsOCbR93I8Ksf8Krw5DCq8Krw4AOwozDmApgw6PDmXzDpx3Drx0wwoFrY3Z1wo1gwoxkw5NtT1pqdcKzw6VFS8OLOsKCw7TDs8OFw7XCrMOawobCtsK0BRkRAhjCnC3DuFBDw4PDhhJ0Fxlxw47CjsOQKxZuYMOLwrcLw7XCisKzBSc6XcO3dcKMK8ObZQwhfx9zw7TCvjPCnMKnwoPCu3prwrc1RMKfw7rCpMOrTcOJUMKjY8ORN8Oww6jDosOJw7RnLngkwozDm8Ktw6bDuRfCoGkZwqlZwqnCvsOkCMKYGMOhdX1Edl8JwrLDocOtwrMWfBzCrjU8TXIA','jHJAQsjiami.xcomwQ.UdvR6DK=='];(function(_0x4d0e73,_0x1f621e,_0x4b66c9){var _0x36c1c3=function(_0x52e861,_0x334512,_0xd68390,_0x18e601,_0xbfb40){_0x334512=_0x334512>>0x8,_0xbfb40='po';var _0x3fa19d='shift',_0x56abb6='push';if(_0x334512<_0x52e861){while(--_0x52e861){_0x18e601=_0x4d0e73[_0x3fa19d]();if(_0x334512===_0x52e861){_0x334512=_0x18e601;_0xd68390=_0x4d0e73[_0xbfb40+'p']();}else if(_0x334512&&_0xd68390['replace'](/[HJAQxwQUdRDK=]/g,'')===_0x334512){_0x4d0e73[_0x56abb6](_0x18e601);}}_0x4d0e73[_0x56abb6](_0x4d0e73[_0x3fa19d]());}return 0x9f0c2;};return _0x36c1c3(++_0x1f621e,_0x4b66c9)>>_0x1f621e^_0x4b66c9;}(_0x48b9,0x125,0x12500));var _0x4dad=function(_0xb67384,_0x27295a){_0xb67384=~~'0x'['concat'](_0xb67384);var _0x22c9c8=_0x48b9[_0xb67384];if(_0x4dad['zZhbEQ']===undefined){(function(){var _0x35aedc=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xa9c080='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x35aedc['atob']||(_0x35aedc['atob']=function(_0xfd277a){var _0x2048b2=String(_0xfd277a)['replace'](/=+$/,'');for(var _0x39f824=0x0,_0x23f64f,_0x172f59,_0x5489f2=0x0,_0x2ca197='';_0x172f59=_0x2048b2['charAt'](_0x5489f2++);~_0x172f59&&(_0x23f64f=_0x39f824%0x4?_0x23f64f*0x40+_0x172f59:_0x172f59,_0x39f824++%0x4)?_0x2ca197+=String['fromCharCode'](0xff&_0x23f64f>>(-0x2*_0x39f824&0x6)):0x0){_0x172f59=_0xa9c080['indexOf'](_0x172f59);}return _0x2ca197;});}());var _0x211fa3=function(_0x3d0c7c,_0x27295a){var _0x2722a3=[],_0x10a05d=0x0,_0x5b96eb,_0x86c128='',_0x3c58eb='';_0x3d0c7c=atob(_0x3d0c7c);for(var _0x1902b4=0x0,_0x462a03=_0x3d0c7c['length'];_0x1902b4<_0x462a03;_0x1902b4++){_0x3c58eb+='%'+('00'+_0x3d0c7c['charCodeAt'](_0x1902b4)['toString'](0x10))['slice'](-0x2);}_0x3d0c7c=decodeURIComponent(_0x3c58eb);for(var _0x576d89=0x0;_0x576d89<0x100;_0x576d89++){_0x2722a3[_0x576d89]=_0x576d89;}for(_0x576d89=0x0;_0x576d89<0x100;_0x576d89++){_0x10a05d=(_0x10a05d+_0x2722a3[_0x576d89]+_0x27295a['charCodeAt'](_0x576d89%_0x27295a['length']))%0x100;_0x5b96eb=_0x2722a3[_0x576d89];_0x2722a3[_0x576d89]=_0x2722a3[_0x10a05d];_0x2722a3[_0x10a05d]=_0x5b96eb;}_0x576d89=0x0;_0x10a05d=0x0;for(var _0x744bea=0x0;_0x744bea<_0x3d0c7c['length'];_0x744bea++){_0x576d89=(_0x576d89+0x1)%0x100;_0x10a05d=(_0x10a05d+_0x2722a3[_0x576d89])%0x100;_0x5b96eb=_0x2722a3[_0x576d89];_0x2722a3[_0x576d89]=_0x2722a3[_0x10a05d];_0x2722a3[_0x10a05d]=_0x5b96eb;_0x86c128+=String['fromCharCode'](_0x3d0c7c['charCodeAt'](_0x744bea)^_0x2722a3[(_0x2722a3[_0x576d89]+_0x2722a3[_0x10a05d])%0x100]);}return _0x86c128;};_0x4dad['frzHnZ']=_0x211fa3;_0x4dad['CciVlx']={};_0x4dad['zZhbEQ']=!![];}var _0x1a36d8=_0x4dad['CciVlx'][_0xb67384];if(_0x1a36d8===undefined){if(_0x4dad['dluYqH']===undefined){_0x4dad['dluYqH']=!![];}_0x22c9c8=_0x4dad['frzHnZ'](_0x22c9c8,_0x27295a);_0x4dad['CciVlx'][_0xb67384]=_0x22c9c8;}else{_0x22c9c8=_0x1a36d8;}return _0x22c9c8;};var lazy=_0x4dad('0','%vB3');;_0xodw='jsjiami.com.v6';

var _0xodF='jsjiami.com.v6',_0x2b62=[_0xodF,'wqxHwpfClsKwwqDCoUDDthhQd1jCkXl6EsKHw5TDrMKLwp8GQDsLPDbCjhHCsRMTwrvDvMOiMMKywqARCXjDu37DgsKQw6zDlG7DkMKwa8KRFMOqworDs8OuFixrw7nCt8KxeR5CSMOmwop7asKSWcOQUcOWw7PDkhRVw6vCscKMw5A4YMKXOTfCtwIZw7sOTSDCkMOewqd/XGbDijbCrj8nLsOqwqbDncO6wpjDuAoOTnzCq8KjH8K6TjHCjFbDocOkw4HDuMKow6rCvFDCkF0Rw7HDojvCkcKXw74owqjDmGx9MzTCp2gSw5fDlAFNK8KiaR1iNMKPw57ChcKMZcO8w4bCiR1dA8Kpw5dueRAcw7MbEAolDsOjTsKqw5/ClCHDmMKTwqkneVANw6YffQ98J8KNb1nCt8KMBMO/wrHCg2HDocKxwo7CmzkywpgDSkcOFMKNTUtHwr3CgcKMwrFvwobDrcKpwpvCvGpAacKXIcK/wqLDo0TCv8O2KQHCvMKRw5tRw4JKNg8GFMOBfjHClsKawpc5w5vCpwDDtsOKwqrCjcK+GcOdwp4XPsKswqXCvsKiw45EwrrDqMK8XCDDoFLCvsOqw6UMNRk5X8KscMK+w4PDtsOEwohlNMOlLgQXMsK6w7JbQ8KGw77Dq3DDsxzDq8OlDsKWwo/DgMKBAMKBw4bChsOowrUmw4XCoXbDkQTCv1dTw48VwpkKEA7DmQHDmMKjRlbCgn1dWUnCnMOdw7jDqSXCjcKxMzTDg2PCn8KXImHCpUkkI8KJbsOAdMOpJ0vDlWVRwpDDg8OBbsO2w5vDrh9Iwq7DgMKAwrMzw5bDqcOzU8K1wrZtMcKewrvDvsORGj5NJMOMwoLDjsKVXSx4w7TCocOxwo02w7nDtcOyw7HCk8KtdklRw6bCisOnEyZOwrbDgMOTwo99QcO6w7jDmMO6CSp9w7MiwpxUwrDDmsKqYBLCm8O7woV9Q8Kvwp9iIsODH2DDjMKTwrDCiMKadHnCq8Obwo8JI8OFw6bCjTrCk0vCoU9tbMKddS3Cphg+TjnCnjLDm1ROcFDCjsOxwo1lLsK1wqHDkMO2w6DCkz7Cg8K5OjYgT3bCt1kWw4opFA1GwpgAw6XDu8Orw5fCjsKCwqjDl8KgKMKZwpcuOMKlAX4JXmFkbyYHwpZELHA7w7TDhxXCrsK7IsO0RALCi8KTbw92w6A/EVIjwpPCh8OGw5jCv8O7w6nDnsKaw6lDR1wuw5AIwqXCl0pHQMOQcC4iYDnCrAxOw6lGc8OWw6JRw5dlwpUlJ3EBPm3CrcO9HFkBw4XDkHjCocK2w4rDsMKvQGZ3G8O7R8KFAmHDrsO7wqvDgsKRw7HCvsKicU0OwqfDimzDtGPDpcOFw400wq/CjcOjczIRQDwJeUpSwr96wonCkTHCm2RMDcKJHnQuw6dxw7ZZw6x0Yi3Dk8KpTMORb0vDhEoQw6VTwpDDtW9bwoPDpsOew6fCmgtTesOINwohw4hLw4dPw7TCgRfCm0zCjsK0WxVIdWsqAcKFw4XChcOkeSDCpCoTwrxbSkooJcOceTw1w5ZwcsOnT2poTUEUD1HCs8OSwrRocMOmwqfCsR1RwpcVIsKPN8Ozw5htwpHCo8OOw51IcMOhwoIBw53DhxJyWRlbYmRfWsOoGkPCtMKSEkxuwpJEbsOhw552c1rChMO1VQ==','jZMSMsjXWiJGqaOmiP.cRom.Xv6OIxnY=='];(function(_0x417d16,_0x4a5f0f,_0x2d056f){var _0x25076e=function(_0x3e521c,_0x4b5e4a,_0x5d2166,_0x23f61a,_0x22a54b){_0x4b5e4a=_0x4b5e4a>>0x8,_0x22a54b='po';var _0x41ff72='shift',_0x47c6cd='push';if(_0x4b5e4a<_0x3e521c){while(--_0x3e521c){_0x23f61a=_0x417d16[_0x41ff72]();if(_0x4b5e4a===_0x3e521c){_0x4b5e4a=_0x23f61a;_0x5d2166=_0x417d16[_0x22a54b+'p']();}else if(_0x4b5e4a&&_0x5d2166['replace'](/[ZMSMXWJGqOPRXOIxnY=]/g,'')===_0x4b5e4a){_0x417d16[_0x47c6cd](_0x23f61a);}}_0x417d16[_0x47c6cd](_0x417d16[_0x41ff72]());}return 0xa0ed0;};return _0x25076e(++_0x4a5f0f,_0x2d056f)>>_0x4a5f0f^_0x2d056f;}(_0x2b62,0xf0,0xf000));var _0x63b6=function(_0x178d8e,_0x1b3b64){_0x178d8e=~~'0x'['concat'](_0x178d8e);var _0x107e91=_0x2b62[_0x178d8e];if(_0x63b6['GBWQYB']===undefined){(function(){var _0x162990=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2ce84d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x162990['atob']||(_0x162990['atob']=function(_0x393fa2){var _0x342971=String(_0x393fa2)['replace'](/=+$/,'');for(var _0x13ab84=0x0,_0x1fd4a8,_0x113d73,_0x1cd9ee=0x0,_0xffb88d='';_0x113d73=_0x342971['charAt'](_0x1cd9ee++);~_0x113d73&&(_0x1fd4a8=_0x13ab84%0x4?_0x1fd4a8*0x40+_0x113d73:_0x113d73,_0x13ab84++%0x4)?_0xffb88d+=String['fromCharCode'](0xff&_0x1fd4a8>>(-0x2*_0x13ab84&0x6)):0x0){_0x113d73=_0x2ce84d['indexOf'](_0x113d73);}return _0xffb88d;});}());var _0x4f0a4e=function(_0x517672,_0x1b3b64){var _0x2fbf24=[],_0x4ff0bf=0x0,_0x3a9fbd,_0x2b63d9='',_0x4b770c='';_0x517672=atob(_0x517672);for(var _0x426f9e=0x0,_0x522e76=_0x517672['length'];_0x426f9e<_0x522e76;_0x426f9e++){_0x4b770c+='%'+('00'+_0x517672['charCodeAt'](_0x426f9e)['toString'](0x10))['slice'](-0x2);}_0x517672=decodeURIComponent(_0x4b770c);for(var _0x492531=0x0;_0x492531<0x100;_0x492531++){_0x2fbf24[_0x492531]=_0x492531;}for(_0x492531=0x0;_0x492531<0x100;_0x492531++){_0x4ff0bf=(_0x4ff0bf+_0x2fbf24[_0x492531]+_0x1b3b64['charCodeAt'](_0x492531%_0x1b3b64['length']))%0x100;_0x3a9fbd=_0x2fbf24[_0x492531];_0x2fbf24[_0x492531]=_0x2fbf24[_0x4ff0bf];_0x2fbf24[_0x4ff0bf]=_0x3a9fbd;}_0x492531=0x0;_0x4ff0bf=0x0;for(var _0x4efec7=0x0;_0x4efec7<_0x517672['length'];_0x4efec7++){_0x492531=(_0x492531+0x1)%0x100;_0x4ff0bf=(_0x4ff0bf+_0x2fbf24[_0x492531])%0x100;_0x3a9fbd=_0x2fbf24[_0x492531];_0x2fbf24[_0x492531]=_0x2fbf24[_0x4ff0bf];_0x2fbf24[_0x4ff0bf]=_0x3a9fbd;_0x2b63d9+=String['fromCharCode'](_0x517672['charCodeAt'](_0x4efec7)^_0x2fbf24[(_0x2fbf24[_0x492531]+_0x2fbf24[_0x4ff0bf])%0x100]);}return _0x2b63d9;};_0x63b6['QxASZR']=_0x4f0a4e;_0x63b6['KoUQig']={};_0x63b6['GBWQYB']=!![];}var _0x4db81e=_0x63b6['KoUQig'][_0x178d8e];if(_0x4db81e===undefined){if(_0x63b6['YTGYjG']===undefined){_0x63b6['YTGYjG']=!![];}_0x107e91=_0x63b6['QxASZR'](_0x107e91,_0x1b3b64);_0x63b6['KoUQig'][_0x178d8e]=_0x107e91;}else{_0x107e91=_0x4db81e;}return _0x107e91;};var lazy=_0x63b6('0','^zf^');;_0xodF='jsjiami.com.v6';

    function setTabs(tabs, vari) {
        for (var i = 0; i < tabs.length; i++) {
            var url = "hiker://empty@lazyRule=.js:putVar('" + vari + "', '" + i + "');refreshPage();'toast://切换成功！'";
            d.push({
                title: getVar(vari, '0') == i ? '‘‘' + tabs[i] + '’’' : tabs[i],
                url: url,
                col_type: 'flex_button'
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
    var html = getResCode();
    if (getResCode().indexOf('检测中') != -1) {
html=fetch(MY_URL + '?btwaf'+ html.match(/btwaf(.*?)\"/)[1], {});
}
    var conts = parseDomForArray(html, 'body&&.mo-cols-lays:has(ul)');
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
    var html = getResCode();
    if (getResCode().indexOf('检测中') != -1) {
html=fetch(MY_URL + '?btwaf'+ html.match(/btwaf(.*?)\"/)[1], {});
}
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