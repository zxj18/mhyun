(function() {
if(/\.mmiyue\.com|jxn2\.178du\.com|90ys2\.com\/x2|play\.ds163\.cc/.test(window.location.host)){
        if(document.querySelector('body').innerText.search(/未授权|接口防盗/)>=0) {
            window.location.href=window.location.href;
        }
}else if(/v\.xiajinba\.cn/.test(window.location.host)){
        if(document.querySelector('body').innerText.indexOf('No input file specified')>=0) {
            window.location.href=window.location.href;
        }
}else if (window.location.host == 'www.zhenbuka3.com') {
        if (document.querySelector('.stui-pannel-box').innerHTML.indexOf('xqyszbkcookie') >= 0) {
            fy_bridge_app.writeFile('hiker://files/rules/xyq/xqyscookie/zbkcookie.txt', document.cookie);
            fy_bridge_app.refreshPage(false);
        }
}else if (window.location.host == 'fantuan.tv') {
        if (document.querySelector('h3').innerText.indexOf('xqysfantcookie') >= 0) {
            fy_bridge_app.writeFile('hiker://files/rules/xyq/xqyscookie/fantcookie.txt', document.cookie);
            fy_bridge_app.refreshPage(false);
        }
    }
})();