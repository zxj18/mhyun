function jusou() {
    let cpath = 'hiker://files/rules/dzHouse/html/聚搜君.html';
    let is_ok = fetch(cpath);
    if (!is_ok) {
        writeFile(cpath, fetch('https://erp.scwinbao.com/hikerule/rulelist.json?id=607', { headers: { 'Referer': 'https://blog.csdn.net', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36' } }));
    }
    var d = [];
    var searchPage = parseInt(MY_URL.split("$")[1]);
    var dz = MY_URL.split("$")[2];
    var searchKeyword = dz;
    var responseTime = 4000;
    var threadCnt = 6;
    var myset = getVar('jsq_settings', '');
    putVar2("exteriorUrl", myset);
    if (myset.length > 0) {
        var costom = JSON.parse(myset);
        try {
            var settings = fetch(costom.path) || '{}';
            settings = JSON.parse(settings);
            responseTime = settings.timeout || 4000;
            threadCnt = settings.threadCnt || 6;
        } catch (e) { }
    }
    var filterWord = [];
    var filterWordSave = fetch("hiker://files/searchgroups.json");
    if (filterWordSave != "") {
        try {
            let tmp = JSON.parse(filterWordSave);
            tmp = tmp[tmp.apply];
            for (var k = 0; k < tmp.length; k++) {
                filterWord.push(tmp[k].name);
            }
        } catch (e) {
            writeFile("hiker://files/searchgroups.json", '');
            // refreshPage(true);
        }
    }

    if (searchPage == 1) {
        // let x5_h = getVar('x5_height','80');
        d.push({
            // desc:x5_h+'&&float',
            // desc:'auto',
            desc: '80&&float',
            url: 'file:///storage/emulated/0/Android/data/com.example.hikerview/files/Documents/rules/dzHouse/html/聚搜君.html',
            col_type: 'x5_webview_single'
        });
        d.push({
            col_type: 'line_blank'
        });
        if (searchKeyword == "") {
            var work = fetch("hiker://files/searchwork.json");
            if (work != "") {
                work = JSON.parse(work);
                d.push({
                    title: "<strong><big>搜索记录</big></strong><br><a href='hiker://empty@lazyRule=.js:let work=fetch(\"hiker://files/searchwork.json\")||\"[]\";work=JSON.parse(work);work.length=0;writeFile(\"hiker://files/searchwork.json\",JSON.stringify(work));refreshPage(true);\"toast://已清空\"'>清除搜索记录</a>",
                    col_type: "rich_text"
                });
                for (var key of work) {
                    d.push({
                        title: key,
                        url: $().lazyRule((k) => {
                            putVar2("searchKeyword", k);
                            refreshPage(true);
                            return "toast://" + k
                        }, key),
                        col_type: "text_3"
                    })
                }
            }
        }
    }
    var err = [];
    function load() {
        var _res_ = [];
        if (searchKeyword == "") {
            return "不能为空";
        }
        var homeListJson = JSON.parse(fetch("hiker://home", {}));
        var homeListfilter = homeListJson.filter((data) => {
            if (data.searchFind == "") {
                return false;
            }
            //if(data.title=="nieta追剧")return true
            for (key of filterWord) {
                if (data.group == key) {
                    return true;
                }
            }
            return false;
        });
        //var result=[];
        var resultJson = [];
        var resultUrl = [];
        for (var i = (searchPage - 1) * threadCnt; i < homeListfilter.length && i < searchPage * threadCnt; i++) {
            var item = homeListfilter[i];
            item.search_url = item.search_url.replace("**", searchKeyword).replace(/fypage@.*?@.*?@?/, "1").replace("fypage", "1");
            var itemRule = {};
            itemRule.title = item.title;
            itemRule.index = i;
            itemRule.searchFind = item.searchFind;
            itemRule.preRule = item.preRule;
            if (item.sdetail_find_rule == "*") {
                itemRule.sdetailFind = item.detail_find_rule;
            } else {
                itemRule.sdetailFind = item.sdetail_find_rule;
            }
            resultJson.push(itemRule);
            var urlRequest = item.search_url.split(";");
            if (urlRequest.length == 1) {
                resultUrl.push({ url: urlRequest[0], options: { timeout: responseTime } });
            } else if (urlRequest.length == 2) {
                resultUrl.push({ url: urlRequest[0], options: { method: urlRequest[1], timeout: responseTime } })
            } else if (urlRequest.length == 3) {
                resultUrl.push({ url: urlRequest[0], options: { headers: { "content-type": "application/json; charst=" + urlRequest[2] }, method: urlRequest[1], timeout: responseTime } })
            } else if (urlRequest.length == 4) {
                var headers = {};
                headers["content-type"] = "application/json; charst=" + urlRequest[2];
                var headersLsit = urlRequest[3].match(/\{(.*)\}/)[1].split("&&");
                for (var j of headersLsit) {
                    headers[j.split("@")[0]] = run(j.split("@")[1]);
                }
                resultUrl.push({ url: urlRequest[0], options: { headers: headers, method: urlRequest[1], timeout: responseTime } });
            }
        }
        if (resultUrl.length == 0 || resultJson == 0) {
            /*_res_.push({title:"<h4 style='text-align:center'>到底了</h4>",col_type:"rich_text"})*/
            return _res_;
        }
        var htmlCode = batchFetch(resultUrl);
        //setError(htmlCode.length)
        for (var i = 0; i < htmlCode.length; i++) {
            var htmlItem = htmlCode[i];
            var ruleItem = resultJson[i];
            var urlRule = "";
            var html = htmlCode[i];
            if (ruleItem.sdetailFind != "" && ruleItem.sdetailFind != undefined) {
                urlRule = "@rule=" + ruleItem.sdetailFind;
            }
            try {
                if (ruleItem.searchFind.indexOf("js:") == 0) {
                    _res_ = _res_.concat(runRule(resultUrl[i].url, ruleItem, urlRule, html));
                } else {
                    var find = ruleItem.searchFind.split(";");
                    var domainName = resultUrl[i].url.match(/(https?\:\/\/.*?)\//)[1];
                    var list = parseDomForArray(html, find[0]);
                    //setError(html)
                    for (var data of list) {
                        var item = {};
                        var url = run(pe(data, find[2]));
                        var img = run(pe(data, find[5]));
                        if (!/https?:\/\/./.test(url)) {
                            url = domainName + url
                        }
                        if (!/https?:\/\/./.test(img)) {
                            img = domainName + img
                        }
                        item.title = run(pe(data, find[1])) + "\n" + ruleItem.title;
                        item.url = url + urlRule;
                        item.desc = run(pe(data, find[3])) + "\n" + run(pe(data, find[4]));
                        item.img = img;
                        //setError(item)
                        if (item.title.indexOf(searchKeyword) > -1 || item.desc.indexOf(searchKeyword) > -1) {
                            _res_.push(item);
                        }
                    }
                }
            } catch (e) {
                err.push(e.name + ": " + e.message);
                _res_.push({
                    title: "不支持 " + ruleItem.title + " 或者规则已失效",
                    url: $().lazyRule((err) => { setError(err); return "toast://查看错误信息" }, e.name + ": " + e.message),
                    col_type: "text_center_1"
                });
            }
        }
        //setError(_res_.concat.apply([],_res_))
        return _res_
    }
    function run(text) {
        if (text.includes(".js:")) {
            try {
                var input = text.split(".js:")[0];
                var code = text.split(".js:")[1];
                return eval(code);
            } catch (e) {
                return text
            }
        } else {
            return text;
        }
    }
    var pe = (html, rule) => parseDomForHtml(html, rule);
    function runRule(url, ruleItem, urlRurl, html) {
        var _result_ = [];
        MY_URL = url;
        function getUrl() {
            return MY_URL;
        }
        function getResCode() {
            return html;
        }
        function setSearchResult(list) {
            for (var item of list.data) {
                if (!item.url.includes("@rule=") && !item.url.includes("@lazyRule=")) {
                    item.url = item.url + urlRurl;
                }
                item.title = item.title + "\n" + ruleItem.title;
                _result_.push(item);
            }
        }
        function setResult(list) {
            for (var item of list) {
                if (!item.url.includes("@rule=") && !item.url.includes("@lazyRule=")) {
                    item.url = item.url + urlRurl;
                }
                /*
                if (!item.img && !Item.pic_url) {
                    item.col_type = "text_1"
                } else {
                    item.col_type = "movie_1_vertical_pic"
                }
                */
                item.title = item.title + "\n" + ruleItem.title;
                _result_.push(item)
            }
        }

        eval(ruleItem.preRule);
        eval(ruleItem.searchFind.replace("js:", ""));
        return _result_;
    }

    d = d.concat(load());

    setResult(d);
}