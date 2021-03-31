function omhmerj() {
var res = {};var d = [];
var spl = MY_URL.split('$$');

//四大金刚
var clst=('电影&电视剧&综艺&动漫').split('&');
//各网站分类
if(/7xiady|aidi/.test(spl[1])){
//拼音
var clsu=('dianying&lianxuju&zongyi&dongman').split('&');}
else if(/jpysvip|zhaikan|ak1080|hktvyb|zhenbuka|gudanys|bwl87/.test(spl[1])){
//数字
var clsu=('1&2&3&4').split('&');}
//缩写
else if(/siguyy/.test(spl[1])){
var clsu=('m&tv&va&ct').split('&');}

else if(/nfstar|nfxtv/.test(spl[1])){
var clst=('电影&欧美剧&国语剧&日韩剧&动漫&记录片&油管精选&综艺').split('&');
var clsu=('20&21&22&23&34&26&33&42').split('&');}
else if(/subaibai/.test(spl[1])){
var clst=('全部&电影&电视剧&热门电影&动漫电影&高分电影').split('&');
var clsu=('movie_bt&new-movie&dianshiju&hot-month&movie_bt_series/dongmandy&gf').split('&');}
else if(/qianoo/.test(spl[1])){
var clst=('高分影视&最新电影&电视剧&动漫&全部').split('&');
var clsu=('zuixindianying/gaofenyingshi&zuixindianying&dsj&dm&movie_bt').split('&');}
else if(/mjtvs/.test(spl[1])){
var clst=('魔幻科幻&灵异惊悚&都市情感&犯罪历史&电影&动漫&韩剧').split('&');
var clsu=('mohuan&lingyi&dushi&fanzui&katong&hanju&hanjuju').split('&');}
else if(/qkan8/.test(spl[1])){
var clst=('高清原碟&日漫&女频&劇場&漫画&国漫&美漫').split('&');
var clsu=('33&21&50&24&55&51&22').split('&');}
else if(/nicotv/.test(spl[1])){
var clst=('全部&热血&恋爱&科幻&奇幻&百合&后宫&励志&搞笑&冒险&校园&战斗&机战&运动&战争&萝莉').split('&');
var clsu=('&热血&恋爱&科幻&奇幻&百合&后宫&励志&搞笑&冒险&校园&战斗&机战&运动&战争&萝莉').split('&');}
else if(/agefan/.test(spl[1])){
var clst=('全部&TV&剧场版&OVA').split('&');
var clsu=('all&TV&剧场版&OVA').split('&');}
else if(/1090ys/.test(spl[1])){
var clst=('电影&国产剧&韩剧&美剧&日剧&资源站').split('&');
var clsu=('1&2&3&4&5&20').split('&');}
else if(/cokemv/.test(spl[1])){
var clst=('电影&电视剧&综艺&动漫&抖音电影').split('&');
var clsu=('1&2&3&4&5').split('&');}
else if(/80ysm/.test(spl[1])){
var clst=('电影&电视剧&综艺&动漫&B站资源').split('&');
var clsu=('1&2&3&4&34').split('&');}


for(var i=0;i<clst.length;i++){
//分类链接
if(/jpysvip|zhaikan|gudanys/.test(spl[1])){var url=spl[1]+'/vodtype/'+clsu[i]+'-fypage.html';}
else if(/nfstar|nfxtv|zhenbuka|cokemv/.test(spl[1])){var url=spl[1]+'/vodtype/'+clsu[i]+'-fypage/';}
else if(/ak1080/.test(spl[1])){var url=spl[1]+'/vodshow/'+clsu[i]+'--------fypage---.html';}
else if(/80ysm/.test(spl[1])){var url=spl[1]+'/vodshow/'+clsu[i]+'/page/fypage.html';}
else if(/7xiady|bwl87/.test(spl[1])){var url=spl[1]+'/type/'+clsu[i]+'-fypage/';}
else if(/siguyy/.test(spl[1])){var url=spl[1]+'/type/'+clsu[i]+'-fypage.html';}
else if(/subaibai|qianoo/.test(spl[1])){var url=spl[1]+'/'+clsu[i]+'/page/fypage[firstPage='+spl[1]+'/'+clsu[i]+']';}
else if(/mjtvs/.test(spl[1])){var url=spl[1]+'/'+clsu[i]+'/indexfypage.html[firstPage='+spl[1]+'/'+clsu[i]+'/index.html]';}
else if(/aidi/.test(spl[1])){var url=spl[1]+'/show/'+clsu[i]+'--------fypage---.html';}
else if(/hktvyb/.test(spl[1])){var url=spl[1]+'/vod/type/id/'+clsu[i]+'/page/fypage.html';}
else if(/qkan8/.test(spl[1])){var url=spl[1]+'/index.php/vod/type/id/'+clsu[i]+'/page/fypage.html';}
else if(/nicotv/.test(spl[1])){var url=spl[1]+'/video/type3/'+clsu[i]+'-------fypage.html';}
else if(/agefan/.test(spl[1])){var url=spl[1]+'/catalog/'+clsu[i]+'-all-all-all-all-time-fypage';}
else if(/1090ys/.test(spl[1])){var url=spl[1]+'/whole/'+clsu[i]+'/page/fypage.html';}

d.push({
   title:clst[i],
   url:url+`@rule=js:eval(fetch('hiker://files/rules/xyq/onemovie.js'));clsrule();`,
   col_type:clst[i].length>=4?'text_3':'text_4'
})
}//for结束
//分类结束
d.push({col_type: 'line'});

//主页推荐开始
var html=fetch(spl[1],{headers:{'User-Agent':MOBILE_UA,'Referer':spl[1]}});
if (html.indexOf('检测中') != -1) {
html=request(spl[1] + '?btwaf'+ html.match(/btwaf(.*?)\"/)[1], {});
}

//取首页推荐列表
if(/jpysvip|zhaikan|nfstar|nfxtv|siguyy|mjtvs|gudanys|cokemv|bwl87/.test(spl[1])){var conts=parseDomForArray(html,'body&&.myui-vodlist:has(.pic-text)');}
else if(/ak1080|80ysm/.test(spl[1])){if(html.indexOf('mo-part-round')!=-1){var conts=parseDomForArray(html,'body&&.mo-part-round:has(.mo-situ-name)');}else{var conts=parseDomForArray(html,'body&&.myui-vodlist:has(.pic-text)');}}
else if(/7xiady|hktvyb|zhenbuka|1090ys/.test(spl[1])){var conts=parseDomForArray(html,'body&&.stui-vodlist:has(.pic-text)');}
else if(/subaibai|qianoo/.test(spl[1])){var conts=parseDomForArray(html,'body&&.bt_img');}
else if(/aidi/.test(spl[1])){var conts=parseDomForArray(html,'body&&.vodlist:has(.vodlist_item)');}
else if(/qkan8/.test(spl[1])){var conts=parseDomForArray(html,'body&&.fed-list-info:has(.fed-col-md2)');}
else if(/nicotv/.test(spl[1])){var conts=parseDomForArray(html,'body&&.list-unstyled:has(.col-sm-3)');}
else if(/agefan/.test(spl[1])){var conts=parseDomForArray(html,'body&&.ul_li_a5');}


for(var i = 0;i<conts.length;i++){
//主页片单列表
if(html.indexOf('mo-part-round')!=-1){
var list=parseDomForArray(conts[i],'body&&.mo-cols-info');}
else if(html.indexOf('fed-list-info')!=-1){
var list=parseDomForArray(conts[i],'body&&.fed-col-md2');}
else{
var list=parseDomForArray(conts[i],'body&&li')}


for(var j = 0;j<list.length;j++){
//图片
if(/agefan/.test(spl[1])){
var img=parseDomForHtml(list[j], 'img&&src');
}else{
var img=parseDomForHtml(list[j], '.lazy||.lazyload||.mo-situ-pics||.myui-vodlist__thumb||.fed-list-pics||.img-responsive&&data-original||style');
}
if(img.substring(0,4)=='http'){img=img;}else{img=spl[1]+img}

//描述
if(/subaibai|qianoo/.test(spl[1])){
var des=parseDomForHtml(list[j], '.jidi||.hdinfo&&span&&Text');
}else if(/cokemv/.test(spl[1])){
var des=parseDomForHtml(list[j], '.pic-tag&&Text');
}else{
var des=parseDomForHtml(list[j], '.pic-text||.pic_text||.mo-situ-rema||.fed-list-remarks||.continu||.anime_icon1_name1&&Text')}

//标题
if(/subaibai|qianoo/.test(spl[1])){
var title=parseDomForHtml(list[j], 'h3&&Text');
}else if(/mo-situ-name/.test(list[j])){
var title=parseDomForHtml(list[j], '.mo-situ-name&&Text');
}else if(/fed-list-title/.test(list[j])){
var title=parseDomForHtml(list[j], '.fed-list-title&&Text');
}else if(/ff-text-right|anime_icon1_name/.test(list[j])){
var title=parseDomForHtml(list[j], 'img&&alt');}
else{
var title=parseDomForHtml(list[j], 'a&&title')}

//链接
var url=parseDomForHtml(list[j], 'a&&href');

d.push({
   title:title,
   url:(url.substring(0,4)=='http'?url:spl[1]+url)+`@rule=js:eval(fetch('hiker://files/rules/xyq/onemovie.js'));omerj();`,
   pic_url:img+'@Referer='+img,
   desc:des,
   col_type: 'movie_3'
});
 }
}
res.data = d;setHomeResult(res);
}

//分类规则函数
function clsrule() {
var res = {};var d = [];
var html = getResCode();
//过宝塔检测
if (html.indexOf('检测中') != -1) {
html=request(MY_URL + '?btwaf'+ html.match(/btwaf(.*?)\"/)[1], {});}

//分类片单列表
if(/jpysvip|zhaikan|nfstar|nfxtv|siguyy|mjtvs|gudanys|cokemv|bwl87/.test(MY_URL)){
var list = parseDomForArray(html,".myui-vodlist&&li");}
else if(/ak1080|80ysm/.test(MY_URL)){
if(html.indexOf('mo-part-round')!=-1){
var list=parseDomForArray(html,'body&&.mo-part-round:has(.mo-situ-name)&&.mo-cols-info');}
else{
var list=parseDomForArray(html,'.myui-vodlist&&li');}
}
else if(/aidi/.test(MY_URL)){
var list = parseDomForArray(html,".vodlist&&li");}
else if(/7xiady|hktvyb|zhenbuka|1090ys/.test(MY_URL)){
var list = parseDomForArray(html,".stui-vodlist&&li");}
else if(/subaibai|qianoo/.test(MY_URL)){
var list=parseDomForArray(html,'.bt_img&&li');}
else if(/qkan8/.test(MY_URL)){
var list=parseDomForArray(html,'.fed-list-info&&li');}
else if(/nicotv/.test(MY_URL)){
var list=parseDomForArray(html,'.list-unstyled&&li');}
else if(/agefan/.test(MY_URL)){
var list=parseDomForArray(html,'body&&.cell');}


for(var i=0;i<list.length;i++){
//图片
if(/agefan/.test(MY_URL)){
var img=parseDomForHtml(list[i], 'img&&src');
}else{
var img=parseDom(list[i], '.lazy||.lazyload||.mo-situ-pics||.fed-list-pics||.img-responsive&&data-original');
}
//描述
if(/qianoo|subaibai/.test(MY_URL)){
var desc=parseDomForHtml(list[i], '.jidi||.hdinfo&&Text');
}else if(/cokemv/.test(MY_URL)){
var desc=parseDomForHtml(list[i], '.pic-tag&&Text');
}else{
var desc=parseDomForHtml(list[i], '.pic-text||.pic_text||.mo-situ-rema||.fed-list-remarks||.continu||.newname||span&&Text');}
//标题
if(/subaibai|qianoo/.test(MY_URL)){
var title=parseDomForHtml(list[i], "h3&&Text");}
else if(/mo-situ-name/.test(list[i])){
var title=parseDomForHtml(list[i], '.mo-situ-name&&Text');}
else if(/fed-list-title/.test(list[i])){
var title=parseDomForHtml(list[i], '.fed-list-title&&Text');}
else if(/ff-text-right|cell_imform/.test(list[i])){
var title=parseDomForHtml(list[i], 'img&&alt');}
else{
var title=parseDomForHtml(list[i], 'a&&title');
}
//链接
var url=parseDom(list[i], 'a&&href');
d.push({
   title:title,
   pic_url:img,
   desc:desc,
   url:url+`@rule=js:eval(fetch('hiker://files/rules/xyq/onemovie.js'));omerj();`,
   col_type:'movie_3'
});
}
res.data = d;setHomeResult(res);
}

//搜索解析规则函数
function omsearch() {
var spl = MY_URL.split('$$$');
var json = JSON.parse(fetch(spl[1],{}));
var res = {};var d = [];

for (var i = 0; i < json.length; i++) {
var url=json[i].url;
if(/jpysvip|zhaikan|ak1080|80ysm|gudanys/.test(url)){url=url+'/vodsearch/'+spl[2]+'----------fypage---.html';}
else if(/nfstar|nfxtv|zhenbuka|cokemv/.test(url)){url=url+'/vodsearch/'+spl[2]+'----------fypage---/';}
else if(/aidi/.test(url)){url=url+'/vsearch/'+spl[2]+'----------fypage---.html';}
else if(/siguyy/.test(url)){url=url+'/search/'+spl[2]+'----------fypage---.html';}
else if(/7xiady|bwl87/.test(url)){url=url+'/search/'+spl[2]+'----------fypage---/';}
else if(/1090ys/.test(url)){url=url+'/search/wd/'+spl[2]+'/page/fypage.html';}
else if(/subaibai|qianoo/.test(url)){url=url+'/page/fypage?s='+spl[2];}
else if(/hktvyb/.test(url)){url=url+'/vod/search/page/fypage/wd/'+spl[2]+'.html';}
else if(/qkan8/.test(url)){url=url+'/index.php/vod/search/page/fypage/wd/'+spl[2]+'.html';}
else if(/mjtvs/.test(url)){url=url+'/search.php?page=fypage&searchword='+spl[2]+'&searchtype=';}
else if(/nicotv/.test(url)){url=url+'/vod-search-wd-'+spl[2]+'-p-fypage.html';}
else if(/agefans/.test(url)){url=url+'/search?query='+spl[2]+'&page=fypage';}


if(/zhenbuka|1090ys|cokemv|bwl87/.test(url)){
var link=url+`@lazyRule=.js:input.replace('fypage','1')`;
}else{
var link=url
}

    d.push({
    title : json[i].title,
    url : link
})
 
}
res.data = d;setSearchResult(res);
}

//搜索二级解析函数
function omseaerji() {
var res={};var d=[];
var html=getResCode();
//过宝塔检测
if (html.indexOf('检测中') != -1) {
html=request(MY_URL + '?btwaf'+ html.match(/btwaf(.*?)\"/)[1], {});}

//取列表
if(/jpysvip|zhaikan|nfxtv|siguyy|mjtvs|gudanys/.test(MY_URL)){var list = parseDomForArray(html,'#searchList&&li');}
else if(/7xiady/.test(MY_URL)){var list = parseDomForArray(html,'.stui-vodlist&&li');}
else if(/ak1080|80ysm/.test(MY_URL)){
if(html.indexOf('mo-main-info')!=-1){
var list = parseDomForArray(html,'.mo-main-info&&.mo-deta-info:has(a)');}
else{
var list = parseDomForArray(html,'#searchList&&li')}
}
else if(/subaibai|qianoo/.test(MY_URL)){var list = parseDomForArray(html,'.search_list&&li');}
else if(/aidi/.test(MY_URL)){var list = parseDomForArray(html,'.vodlist&&li');}
else if(/hktvyb/.test(MY_URL)){var list = parseDomForArray(html,'.stui-vodlist__media&&li');}
else if(/qkan8/.test(MY_URL)){var list = parseDomForArray(html,'.fed-main-info&&.fed-deta-info');}
else if(/nicotv/.test(MY_URL)){var list = parseDomForArray(html,'.list-unstyled&&li');}
else if(/agefans/.test(MY_URL)){var list = parseDomForArray(html,'body&&.cell');}

//setError(list[1]);

for (var i = 0; i < list.length; i++) {

var cont='';
//标题
if(/jpysvip|zhaikan|7xiady|nfxtv|aidi|hktvyb|siguyy|mjtvs|gudanys/.test(MY_URL)){var title = parseDomForHtml(list[i], 'a&&title');}
else if(/ak1080|subaibai|qianoo|qkan8|nicotv|80ysm/.test(MY_URL)){var title = parseDomForHtml(list[i], 'h1||h3||h2&&a&&Text');}
else if(/agefans/.test(MY_URL)){var title = parseDomForHtml(list[i], 'img&&alt');}

//图片
if(/jpysvip|zhaikan|7xiady|ak1080|nfxtv|subaibai|aidi|hktvyb|qianoo|siguyy|mjtvs|qkan8|nicotv|gudanys|80ysm/.test(MY_URL)){
var img = parseDom(list[i], '.lazyload||.lazy||.mo-situ-pics||.fed-list-pics||.img-responsive&&data-original');}
else if(/agefans/.test(MY_URL)){var img = parseDomForHtml(list[i], 'img&&src');}

//状态
if(/jpysvip|zhaikan|7xiady|ak1080|nfxtv|subaibai|aidi|hktvyb|qianoo|siguyy|mjtvs|qkan8|nicotv|agefans|gudanys|80ysm/.test(MY_URL)){
var desc = parseDomForHtml(list[i], '.pic-text||.pic_text||.mo-situ-rema||.fed-list-remarks||.jidi||.hdinfo||.continu||.newname&&Text');}

//简介
if(/jpysvip|zhaikan|ak1080|nfxtv|hktvyb|siguyy|mjtvs|qkan8|agefans|gudanys|80ysm/.test(MY_URL)){var cont = parseDomForHtml(list[i], '.detail||dd||.fed-deta-content||.cell_imform_kv_desc&&Text');}
else if(/aidi/.test(MY_URL)){
var cont = parseDomForHtml(list[i], 'p,-1&&Text');}
        
        var url = parseDom(list[i], 'a&&href');
        d.push({

            title: title+'\n'+desc,
            pic_url:img,

            url:url+`@rule=js:eval(fetch('hiker://files/rules/xyq/onemovie.js'));omerj();`,
            desc: cont,
            col_type: 'movie_1_vertical_pic'
        });

    }

res.data = d;setHomeResult(res);
}

//选集列表规则函数
function omerj() {
var res ={};var d=[];
var html=getResCode();
if (html.indexOf('检测中') != -1) {
html=request(MY_URL + '?btwaf'+ html.match(/btwaf(.*?)\"/)[1], {});}

//setError(html);
//线路判断
if(/jpysvip|siguyy|mjtvs|nicotv|gudanys|cokemv|bwl87/.test(MY_URL)){
var tabs=parseDomForArray(html,'body&&.nav-tabs&&li:not(.dropdown)');}
else if(/ak1080|80ysm/.test(MY_URL)){
if(html.indexOf('mo-sort-head')!=-1){
var tabs = parseDomForArray(html,'body&&.mo-sort-head&&.mo-movs-btns');
var conts=parseDomForArray(html,'body&&.mo-main-info&&.mo-movs-item');}
else{
var tabs = parseDomForArray(html,"body&&.nav-tabs&&li");
var conts=parseDomForArray(html,'body&&.myui-content__list');}
}
else if(/nfstar|nfxtv/.test(MY_URL)){
if(html.indexOf('sort-button')!=-1){
var tabs = parseDomForArray(html,"body&&.myui-panel__head:has(.sort-button)");}
else{
var tabs = parseDomForArray(html,"body&&.nav-tabs&&.item");}
}
else if(/zhaikanys/.test(MY_URL)){
if(/voddetail/.test(MY_URL)){
var tabs = parseDomForArray(html,"body&&.nav-tabs&&li");
}else{
var tabs=parseDomForArray(html,'body&&.nav-tabs&&.item&&a');}
}
else if(/7xiady|hktvyb|zhenbuka|1090ys/.test(MY_URL)){
var tabs = parseDomForArray(html,"body&&.playlist");}
else if(/aidi/.test(MY_URL)){
var tabs = parseDomForArray(html,".play_source_tab&&a");}
else if(/qkan8/.test(MY_URL)){
var tabs = parseDomForArray(html, '.fed-tabs-item&&ul&&li');}
else if(/agefan/.test(MY_URL)){
var tabs = parseDomForArray(html, '.menu0&&li');
var conts=parseDomForArray(html,'body&&.movurl:has(a)');
}

//列表判断
if(/jpysvip|zhaikanys|nfstar|nfxtv|siguyy/.test(MY_URL)){
var conts=parseDomForArray(html,'body&&.myui-content__list');}
else if(/7xiady|hktvyb|zhenbuka|mjtvs|1090ys/.test(MY_URL)){
var conts=parseDomForArray(html,'body&&.stui-content__playlist');}
else if(/subaibai|qianoo/.test(MY_URL)){
var conts=parseDomForArray(html,'body&&.paly_list_btn');}
else if(/aidi/.test(MY_URL)){
var conts=parseDomForArray(html,'body&&.playlist_full:has(.content_playlist)');}
else if(/qkan8/.test(MY_URL)){
var conts = parseDomForArray(html, 'body&&.fed-play-item');}
else if(/nicotv|gudanys|cokemv|bwl87/.test(MY_URL)){
var conts = parseDomForArray(html, 'body&&.tab-content&&ul');}

//-----华丽的分割线-----
for(var i = 0;i<conts.length;i++){
//取列表选集
if(/<li>/.test(conts[i])){
var list=parseDomForArray(conts[i],'body&&li');}
else if(/fed-btns-info/.test(conts[i])){
var list=parseDomForArray(conts[i],'body&&.fed-btns-info');}
else{
var list=parseDomForArray(conts[i],'body&&a');
}
  
 //判断需要显示线路的
if(tabs){
  if(/jpysvip|zhaikan|ak1080|siguyy|mjtvs|qkan8|nicotv|gudanys|80ysm/.test(MY_URL)){
  	var tabt=parseDomForHtml(tabs[i], "a&&Text");}
  else if(/7xiady|nfstar|nfxtv|hktvyb|zhenbuka|1090ys/.test(MY_URL)){
  	var tabt=parseDomForHtml(tabs[i], "h3||a&&Text");}
  else if(/aidi/.test(MY_URL)){
  	var tabt=parseDomForHtml(tabs[i], "a&&alt");}
  else if(/agefan|cokemv|bwl87/.test(MY_URL)){
  	var tabt=parseDomForHtml(tabs[i], "body&&Text");}
		d.push({
			title:tabt,
			col_type: 'text_1'
		});
	}else if(/subaibai|qianoo/.test(MY_URL)){
		d.push({
			title:'在线播放',
			col_type: 'text_1'
		});}
	//显示选集
		for(var j = 0; j<list.length; j++){
			var title=parseDomForHtml(list[j], "a&&Text");
			if(title.length>=11){var clt='text_center_1';}else if(title.length>=6){var clt='text_2';}else{var clt='text_3'}
			d.push({
				title:title,
                url:parseDom(list[j], "a&&href")+`@lazyRule=.js:eval(fetch('hiker://files/rules/xyq/onemovie.js'));omlazy();`,
                col_type: clt
			});
   }//for j
}//for i

//厂长显示下载线路
if(/qianoo/.test(MY_URL)){
if(html.indexOf('ypbt_down_list')!=-1){
d.push({
			title: '下载地址',
			col_type: 'text_1'
		});
var dnli = parseDomForArray(html, '.ypbt_down_list&&li');

for (var i = 0; i < dnli.length; i++) {
    d.push({
        title: parseDomForHtml(dnli[i], "a&&title"),
        col_type: 'text_center_1',
        url: parseDom(dnli[i], "a&&href")
    });
  }
 }
}

res.data=d;setHomeResult(res);
}

//动态解析部分函数
function omlazy() {
var url=input;
return url
}