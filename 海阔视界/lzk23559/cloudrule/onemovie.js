function omhmerj() {
var res = {};var d = [];
var spl = MY_URL.split('$$')[1];
var pn = MY_URL.split('$$')[2];
//取主页源码
try{
if(/cqzyw/.test(spl)){
var link=spl+'/index.php/index/index/page/'+pn+'.html';
var html=fetch(link,{headers:{'User-Agent':MOBILE_UA,'Referer':spl}});
}else if(/kunyu77/.test(spl)){
var html=fetch(spl+'/searchFilter?type_id=0&pagenum='+pn+'&pagesize=24',{headers:{'User-Agent':'Dalvik/2.1.0'}});
}else if(/789pan/.test(spl)){
var html=request(spl+'?ac=videolist&pg='+pn,{});
}else if(/bbkdj|888hyk|leduozy|rrzyw/.test(spl)){
var html=request(spl+'?ac=list&pg='+pn,{});
}else{
if(pn==1){
var html=fetch(spl,{headers:{'User-Agent':MOBILE_UA}});}
}

if (html.indexOf('检测中') != -1) {
html=request(spl + '?btwaf'+ html.match(/btwaf(.*?)\"/)[1], {});
}
//setError(html);

//第一页要显示分类
if(pn==1){
//分类标题与替换词
if(/7xiady/.test(spl)){
var clst=('电影&电视剧&综艺&动漫').split('&');
var clsu=('dianying&lianxuju&zongyi&dongman').split('&');}
else if(/kunyu77/.test(spl)){
var clst=('电影&电视剧&综艺&动漫').split('&');
var clsu=('1&2&3&4').split('&');}
else if(/siguyy/.test(spl)){
var clst=('电影&电视剧&综艺&动漫').split('&');
var clsu=('m&tv&va&ct').split('&');}

else if(/cqzyw/.test(spl)){
var clst=('电影&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&动漫电影&纪录片&连续剧&国产剧&港台剧&日韩剧&欧美剧&海外剧&综艺&动漫&国产动漫&日韩动漫').split('&');
var clsu=('1&6&7&8&9&10&11&12&20&21&2&13&14&15&16&35&3&4&36&37').split('&');}
else if(/ak1080/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&犯罪片&冒险片&奇幻片&悬疑片&记录片&动画片&预告片&国产剧&港台剧&日韩剧&欧美剧&海外剧').split('&');
var clsu=('1&2&3&4&6&7&8&9&10&11&12&20&21&22&23&24&25&44&13&14&15&16&26').split('&');}
else if(/gudanys/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&国产剧&港台剧&欧美剧').split('&');
var clsu=('1&2&3&4&6&7&8&9&10&11&12&13&14&16').split('&');}
else if(/jpysvip/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&国产剧&香港剧&韩国剧&欧美剧&日本剧&台湾剧').split('&');
var clsu=('1&2&3&4&6&7&8&9&10&11&12&13&14&15&16&20&21').split('&');}
else if(/zhenbuka/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&动画片&纪录片&国产剧&港台剧&日韩剧&欧美剧&海外剧&纪录片').split('&');
var clsu=('1&2&3&4&6&7&8&9&10&11&12&23&25&13&14&15&16&20&24').split('&');}
else if(/bwl87/.test(spl)){
var clst=('电影&连续剧&综艺&动漫&纪录片&动漫电影&国产剧&韩日剧&欧美剧&泰国剧&日本剧').split('&');
var clsu=('1&2&3&4&20&26&13&15&16&21&27').split('&');}
else if(/aidi/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&传记&国产剧&港台剧&韩剧&美剧&日剧&英剧&泰剧&日韩动漫&国产动漫&欧美动漫&动漫电影').split('&');
var clsu=('dianying&lianxuju&zongyi&dongman&dongzuopian&xijupian&aiqingpian&kehuanpian&kongbupian&juqingpian&zhanzhengpian&zhuanji&guochanju&gangtaiju&hanju&meiju&riju&yingju&taiju&rihan&guoman&oumei&cartoon').split('&');}
else if(/zhaikanys/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&国产剧&港台剧&欧美剧&日韩剧&动漫电影').split('&');
var clsu=('1&2&4&3&6&7&8&9&10&11&12&13&14&16&15&22').split('&');}
else if(/klysw|789pan|hktvyb/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&国产剧&港台剧&日韩剧&欧美剧').split('&');
var clsu=('1&2&3&4&6&7&8&9&10&11&12&13&14&15&16').split('&');}
else if(/nfstar|nfxtv|nfxhd/.test(spl)){
var clst=('电影&欧美剧&国语剧&日韩剧&动漫&记录片&油管精选&综艺').split('&');
var clsu=('20&21&22&23&34&26&33&42').split('&');}
else if(/subaibai/.test(spl)){
var clst=('全部&电影&电视剧&热门电影&动漫电影&高分电影&动漫剧&动漫电影&国产剧&国产电影&日剧&日韩电影&欧美剧&欧美电影&泰国电影&港剧&港台电影&纪录片&综艺&韩剧&香港经典电影').split('&');
var clsu=('movie_bt&new-movie&dianshiju&hot-month&movie_bt_series/dongmandy&gf&movie_bt_series/dongmanju&movie_bt_series/dongmandy&movie_bt_series/guochanju&movie_bt_series/guochandy&movie_bt_series/riju&movie_bt_series/rihandy&movie_bt_series/oumeiju&movie_bt_series/oumeidy&movie_bt_series/thaidy&movie_bt_series/gangju&movie_bt_series/gangtaidy&movie_bt_series/documentary&movie_bt_series/zongyi&movie_bt_series/hanju&movie_bt_series/xianggangdy').split('&');}
else if(/qianoo/.test(spl)){
var clst=('高分影视&最新电影&电视剧&动漫&全部&俄罗斯电影&加拿大电影&印度电影&日剧&日本电影&欧美电影&法国电影&海外剧&港台电影&电影&美剧&英国电影&韩剧&韩国电影').split('&');
var clsu=('zuixindianying/gaofenyingshi&zuixindianying&dsj&dm&movie_bt&movie_bt_series/eluosidianying&movie_bt_series/jianadadianying&movie_bt_series/yindudianying&movie_bt_series/rj&movie_bt_series/ribendianying&movie_bt_series/meiguodianying&movie_bt_series/faguodianying&movie_bt_series/hwj&movie_bt_series/xianggangdianying&movie_bt_series/dyy&movie_bt_series/mj&movie_bt_series/yingguodianying&movie_bt_series/hj&movie_bt_series/hanguodianying').split('&');}
else if(/mjtvs/.test(spl)){
var clst=('魔幻科幻&灵异惊悚&都市情感&犯罪历史&电影&动漫&韩剧').split('&');
var clsu=('mohuan&lingyi&dushi&fanzui&katong&hanju&hanjuju').split('&');}
else if(/qkan8/.test(spl)){
var clst=('高清原碟&日漫&女频&劇場&漫画&国漫&美漫').split('&');
var clsu=('33&21&50&24&55&51&22').split('&');}
else if(/nicotv/.test(spl)){
var clst=('全部&热血&恋爱&科幻&奇幻&百合&后宫&励志&搞笑&冒险&校园&战斗&机战&运动&战争&萝莉').split('&');
var clsu=('&热血&恋爱&科幻&奇幻&百合&后宫&励志&搞笑&冒险&校园&战斗&机战&运动&战争&萝莉').split('&');}
else if(/agefan/.test(spl)){
var clst=('全部&TV&剧场版&OVA').split('&');
var clsu=('all&TV&剧场版&OVA').split('&');}
else if(/1090ys/.test(spl)){
var clst=('电影&国产剧&韩剧&美剧&日剧&综艺&动漫').split('&');
var clsu=('1&2&3&4&5&22&23').split('&');}
else if(/cokemv/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&抖音电影&动作片&科幻片&喜剧片&爱情片&恐怖片&剧情片&战争片&犯罪片&奇幻片&悬疑片&微电影&纪录片&国产剧&香港剧&台湾剧&日本剧&韩国剧&欧美剧&泰国剧').split('&');
var clsu=('1&2&3&4&5&6&9&7&8&10&11&12&23&24&25&26&27&13&14&21&20&15&16&22').split('&');}
else if(/80ysm/.test(spl)){
var clst=('电影&电视剧&综艺&动漫&B站资源').split('&');
var clsu=('1&2&3&4&34').split('&');}
else if(/bbkdj/.test(spl)){
var clst=('综艺&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&国产剧&台湾剧&韩国剧&欧美剧&微电影&香港剧&日本剧&海外剧&泰国剧&纪录片&动画片').split('&');
var clsu=('3&4&6&7&8&9&10&11&12&13&14&15&16&20&21&22&23&24&25&26').split('&');}
else if(/888hyk/.test(spl)){
var clst=('动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&国产剧&奇幻片&香港剧&台湾剧&韩国剧&海外剧&日本剧&欧美剧&日本动漫&欧美动漫&国产动漫&其他动漫&大陆综艺&国外综艺&港台综艺').split('&');
var clsu=('4&6&7&8&9&10&11&12&13&20&21&22&23&24&25&34&26&27&28&29&31&32&33').split('&');}
else if(/leduozy/.test(spl)){
var clst=('电影&连续剧&动漫&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&国产剧&港剧&日剧&欧美剧&台剧&韩剧&海外剧&纪录片').split('&');
var clsu=('1&2&4&5&6&7&8&9&10&11&12&13&14&15&16&17&21&22').split('&');}
else if(/rrzyw/.test(spl)){
var clst=('电影&美剧&科幻动作&欧美片&综艺选秀&悬疑烧脑&喜剧青春&日韩片&科幻片&动作片&动漫卡通&精英文艺&喜剧片&恐怖片&爱情片&剧情片&韩剧&国产剧').split('&');
var clsu=('1&2&5&6&9&10&11&12&14&15&16&18&19&20&21&22&24&26').split('&');}
else if(/zju8/.test(spl)){
var clst=('Netflix自建&电影&连续剧&动漫&综艺&日韩剧&欧美剧').split('&');
var clsu=('25&1&2&4&3&15&16').split('&');}


for(var i=0;i<clst.length;i++){
//分类链接
if(/jpysvip|zhaikan|gudanys/.test(spl)){var url=spl+'/vodtype/'+clsu[i]+'-fypage.html';}
else if(/nfstar|nfxtv|nfxhd|zhenbuka|cokemv/.test(spl)){var url=spl+'/vodtype/'+clsu[i]+'-fypage/';}
else if(/ak1080/.test(spl)){var url=spl+'/vodshow/'+clsu[i]+'--------fypage---.html';}
else if(/zju8/.test(spl)){var url=spl+'/vodshow/'+clsu[i]+'--------fypage---/';}
else if(/80ysm/.test(spl)){var url=spl+'/vodshow/'+clsu[i]+'/page/fypage.html';}
else if(/7xiady|bwl87/.test(spl)){var url=spl+'/type/'+clsu[i]+'-fypage/';}
else if(/siguyy/.test(spl)){var url=spl+'/type/'+clsu[i]+'-fypage.html';}
else if(/subaibai|qianoo/.test(spl)){var url=spl+'/'+clsu[i]+'/page/fypage[firstPage='+spl+'/'+clsu[i]+']';}
else if(/mjtvs/.test(spl)){var url=spl+'/'+clsu[i]+'/indexfypage.html[firstPage='+spl+'/'+clsu[i]+'/index.html]';}
else if(/aidi/.test(spl)){var url=spl+'/show/'+clsu[i]+'--------fypage---.html';}
else if(/hktvyb/.test(spl)){var url=spl+'/vod/type/id/'+clsu[i]+'/page/fypage.html';}
else if(/qkan8|cqzyw/.test(spl)){var url=spl+'/index.php/vod/type/id/'+clsu[i]+'/page/fypage.html';}
else if(/klysw/.test(spl)){var url=spl+'/index.php/vod/show/id/'+clsu[i]+'/page/fypage.html';}
else if(/nicotv/.test(spl)){var url=spl+'/video/type3/'+clsu[i]+'-------fypage.html';}
else if(/agefan/.test(spl)){var url=spl+'/catalog/'+clsu[i]+'-all-all-all-all-time-fypage';}
else if(/1090ys/.test(spl)){var url=spl+'/whole/'+clsu[i]+'/page/fypage.html';}
else if(/kunyu77/.test(spl)){var url=spl+'/searchFilter?type_id='+clsu[i]+'&pagenum=fypage&pagesize=24;get;utf-8;{User-Agent@Dalvik/2.1.0}';}
else if(/789pan/.test(spl)){var url=spl+'?ac=videolist&pg=fypage&t='+clsu[i];}
else if(/bbkdj|888hyk|leduozy|rrzyw/.test(spl)){var url=spl+'?ac=list&pg=fypage&t='+clsu[i];}

d.push({
   title:clst[i],
   url:url+`@rule=js:eval(fetch('hiker://files/rules/xyq/onemovie.js'));clsrule();`,
   col_type:clst[i].length>=4?'text_3':'text_4'
})
}//for结束
//分类结束
d.push({col_type: 'line'});}

//首页推荐开始,取首页推荐列表
if(/jpysvip|zhaikan|nfstar|nfxtv|nfxhd|siguyy|mjtvs|gudanys|cokemv|bwl87/.test(spl)){var conts=parseDomForArray(html,'body&&.myui-vodlist:has(.pic-text)');}
else if(/ak1080|80ysm/.test(spl)){if(html.indexOf('mo-part-round')!=-1){var conts=parseDomForArray(html,'body&&.mo-part-round:has(.mo-situ-name)');}else{var conts=parseDomForArray(html,'body&&.myui-vodlist:has(.pic-text)');}}
else if(/7xiady|hktvyb|zhenbuka|1090ys|zju8/.test(spl)){var conts=parseDomForArray(html,'body&&.stui-vodlist:has(.pic-text)');}
else if(/subaibai|qianoo/.test(spl)){var conts=parseDomForArray(html,'body&&.bt_img');}
else if(/aidi/.test(spl)){var conts=parseDomForArray(html,'body&&.vodlist:has(.vodlist_item)');}
else if(/qkan8/.test(spl)){var conts=parseDomForArray(html,'body&&.fed-list-info:has(.fed-col-md2)');}
else if(/nicotv/.test(spl)){var conts=parseDomForArray(html,'body&&.list-unstyled:has(.col-sm-3)');}
else if(/agefan/.test(spl)){var conts=parseDomForArray(html,'body&&.ul_li_a5');}
else if(/cqzyw/.test(spl)){var conts=parseDomForArray(html,'body&&.stui-vodlist');}
else if(/klysw/.test(spl)){var conts=parseDomForArray(html,'body&&section:has(.leo-video-item)');}
else if(/kunyu77/.test(spl)){var conts = '[]';}
else if(/789pan|bbkdj|888hyk|leduozy|rrzyw/.test(spl)){var conts=parseDomForArray(html,'body&&rss');}

//setError(conts.length);

for(var i = 0;i<conts.length;i++){
//主页片单列表
if(html.indexOf('mo-part-round')!=-1){
var list=parseDomForArray(conts[i],'body&&.mo-cols-info');}
else if(html.indexOf('fed-list-info')!=-1){
var list=parseDomForArray(conts[i],'body&&.fed-col-md2');}
else if(/kunyu77/.test(spl)){
var list=JSON.parse(html).data.result;}
else if(/789pan|bbkdj|888hyk|leduozy|rrzyw/.test(spl)){
var list=parseDomForArray(conts[i],"body&&video");}
else{
var list=parseDomForArray(conts[i],'body&&li:has(a)')}

for(var j = 0;j<list.length;j++){
//图片
try{
if(/agefan|klysw/.test(spl)){
var img=parseDomForHtml(list[j], 'img&&src');}
else if(/kunyu77/.test(spl)){
var img=list[j].videoCover;}
else if(/789pan/.test(spl)){
var img=parseDomForHtml(list[j],"body&&pic&&Text");}
else{
var img=parseDomForHtml(list[j], '.lazy||.lazyload||.mo-situ-pics||.myui-vodlist__thumb||.fed-list-pics||.img-responsive&&data-original||style');
}
if(img.substring(0,4)=='http'){img=img;}else{img=spl+img}
} catch(e) {}

//描述
if(/subaibai|qianoo/.test(spl)){
var desc=parseDomForHtml(list[j], '.jidi||.hdinfo&&span&&Text');
}else if(/cokemv|klysw/.test(spl)){
var desc=parseDomForHtml(list[j], '.pic-tag||.leo-video-remark&&Text');
}else if(/cqzyw/.test(spl)){
var typ=parseDomForHtml(list[j], '.type&&Text');
var tim=parseDomForHtml(list[j], '.time&&Text');
var desc=typ+' '+tim;
}else if(/bbkdj|888hyk|leduozy|rrzyw/.test(spl)){
var typ = parseDomForHtml(list[j],"body&&type&&Text");
var last = parseDomForHtml(list[j],"body&&last&&Text");
var dt = parseDomForHtml(list[j],"body&&dt&&Text");
var desc=last+' '+typ+' '+dt;
}else if(/789pan/.test(spl)){
var desc = parseDomForHtml(list[j],"body&&note&&Text");
}else if(/kunyu77/.test(spl)){
var desc=list[j].msg;
}else{
var desc=parseDomForHtml(list[j], '.pic-text||.pic_text||.mo-situ-rema||.fed-list-remarks||.continu||.anime_icon1_name1&&Text')}

//标题
if(/subaibai|qianoo|cqzyw/.test(spl)){
var title=parseDomForHtml(list[j], 'h3&&Text');
}else if(/bbkdj|888hyk|leduozy|rrzyw/.test(spl)){
var name = parseDomForHtml(list[j],"body&&name&&Text").split('<')[0];
var note = parseDomForHtml(list[j],"body&&note&&Text");
var title = name+"  状态:"+note;
}else if(/789pan/.test(spl)){
var title = parseDomForHtml(list[j],"body&&name&&Text").split('<')[0];
}else if(/kunyu77/.test(spl)){
var title=list[j].title;
}else if(/mo-situ-name/.test(list[j])){
var title=parseDomForHtml(list[j], '.mo-situ-name&&Text');
}else if(/fed-list-title/.test(list[j])){
var title=parseDomForHtml(list[j], '.fed-list-title&&Text');
}else if(/ff-text-right|anime_icon1_name/.test(list[j])){
var title=parseDomForHtml(list[j], 'img&&alt');}
else{
var title=parseDomForHtml(list[j], 'a&&title')}

//链接
if(/kunyu77/.test(spl)){
var url=spl+'/videoPlaylist?ids='+list[j].id+';get;utf-8;{User-Agent@Dalvik/2.1.0}';}
else if(/789pan|bbkdj|888hyk|leduozy|rrzyw/.test(spl)){
var urlid = parseDomForHtml(list[j],"body&&id&&Text");
var url=spl+'?ac=videolist&ids='+urlid;}
else{
var url=parseDomForHtml(list[j], 'a&&href')}

if(/cqzyw|bbkdj|888hyk|leduozy|rrzyw/.test(spl)){
d.push({
   title:title,
   url:(url.substring(0,4)=='http'?url:spl+url)+`@rule=js:eval(fetch('hiker://files/rules/xyq/onemovie.js'));omerj();`,
   desc:desc,
   col_type: 'text_center_1'
});
}else{
d.push({
   title:title,
   url:(url.substring(0,4)=='http'?url:spl+url)+`@rule=js:eval(fetch('hiker://files/rules/xyq/onemovie.js'));omerj();`,
   pic_url:img+'@Referer='+img,
   desc:desc,
   col_type: 'movie_3'
});
}

 }//for j
}//for i
} catch(e) {}
res.data = d;setHomeResult(res);
}

//分类规则函数
function clsrule() {
var res = {};var d = [];
if(/789pan|bbkdj|888hyk|leduozy|rrzyw/.test(MY_URL)){
var spl=MY_URL.split("?")[0];
}else{
var spl = MY_URL.match(/([\S]*?:\/\/[\S]*?)\//)[1];}
var html = getResCode();
//过宝塔检测
if (html.indexOf('检测中') != -1) {
html=request(MY_URL + '?btwaf'+ html.match(/btwaf(.*?)\"/)[1], {});}

//setError(html);
//分类片单列表
if(/jpysvip|zhaikan|nfstar|nfxtv|nfxhd|siguyy|mjtvs|gudanys|cokemv|bwl87/.test(MY_URL)){
var list = parseDomForArray(html,".myui-vodlist&&li");}
else if(/ak1080|80ysm/.test(MY_URL)){
if(html.indexOf('mo-part-round')!=-1){
var list=parseDomForArray(html,'body&&.mo-part-round:has(.mo-situ-name)&&.mo-cols-info');}
else{
var list=parseDomForArray(html,'.myui-vodlist&&li');}
}
else if(/aidi/.test(MY_URL)){
var list = parseDomForArray(html,".vodlist&&li");}
else if(/7xiady|hktvyb|zhenbuka|1090ys|cqzyw|zju8/.test(MY_URL)){
var list = parseDomForArray(html,".stui-vodlist&&li:has(a)");}
else if(/subaibai|qianoo/.test(MY_URL)){
var list=parseDomForArray(html,'.bt_img&&li');}
else if(/qkan8/.test(MY_URL)){
var list=parseDomForArray(html,'.fed-list-info&&li');}
else if(/nicotv/.test(MY_URL)){
var list=parseDomForArray(html,'.list-unstyled&&li');}
else if(/agefan/.test(MY_URL)){
var list=parseDomForArray(html,'body&&.cell');}
else if(/klysw/.test(MY_URL)){
var list=parseDomForArray(html,'body&&.leo-video-item');}
else if(/789pan|bbkdj|888hyk|leduozy|rrzyw/.test(MY_URL)){
var list=parseDomForArray(html,"rss&&video");}
else if(/kunyu77/.test(MY_URL)){var list = JSON.parse(html).data.result;}
//setError(list);

for(var i=0;i<list.length;i++){
//图片
try{
if(/agefan|klysw/.test(MY_URL)){
var img=parseDomForHtml(list[i], 'img&&src');}
else if(/kunyu77/.test(MY_URL)){var img = list[i].videoCover;}
else if(/789pan/.test(spl)){
var img=parseDomForHtml(list[i],"body&&pic&&Text");}
else{var img=parseDom(list[i], '.lazy||.lazyload||.mo-situ-pics||.fed-list-pics||.img-responsive&&data-original');}
if(img.substring(0,4)=='http'){img=img;}else{img=spl+img}
} catch(e) {}

//描述
try{
if(/qianoo|subaibai/.test(MY_URL)){
var desc=parseDomForHtml(list[i], '.jidi||.hdinfo&&Text');
}else if(/cokemv|klysw/.test(MY_URL)){
var desc=parseDomForHtml(list[i], '.pic-tag||.leo-video-remark&&Text');
}else if(/kunyu77/.test(MY_URL)){
var desc = list[i].msg;}
else if(/cqzyw/.test(MY_URL)){
var typ=parseDomForHtml(list[i], '.type&&Text');
var tim=parseDomForHtml(list[i], '.time&&Text');
var desc=typ+' '+tim;
}else if(/789pan/.test(spl)){
var desc = parseDomForHtml(list[i],"body&&note&&Text");
}else if(/bbkdj|888hyk|leduozy|rrzyw/.test(spl)){
var typ = parseDomForHtml(list[i],"body&&type&&Text");
var last = parseDomForHtml(list[i],"body&&last&&Text");
var dt = parseDomForHtml(list[i],"body&&dt&&Text");
var desc=last+' '+typ+' '+dt;
}else{
var desc=parseDomForHtml(list[i], '.pic-text||.pic_text||.mo-situ-rema||.fed-list-remarks||.continu||.newname||span&&Text');}
} catch(e) {}

//标题
if(/subaibai|qianoo|cqzyw/.test(MY_URL)){
var title=parseDomForHtml(list[i], "h3&&Text");}
else if(/789pan/.test(MY_URL)){
var title = parseDomForHtml(list[i],"body&&name&&Text").split('<')[0];
}else if(/bbkdj|888hyk|leduozy|rrzyw/.test(MY_URL)){
var name = parseDomForHtml(list[i],"body&&name&&Text").split('<')[0];
var note = parseDomForHtml(list[i],"body&&note&&Text");
var title = name+'  '+note;
}else if(/kunyu77/.test(MY_URL)){
var title = list[i].title;}
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
if(/kunyu77/.test(MY_URL)){
var url='http://api.kunyu77.com/api.php/provide/videoPlaylist?ids='+list[i].id;
}else if(/789pan|bbkdj|888hyk|leduozy|rrzyw/.test(spl)){
var urlid = parseDomForHtml(list[i],"body&&id&&Text");
var url=spl+'?ac=videolist&ids='+urlid;}else{ 
var url=parseDom(list[i], 'a&&href');}

//纯文本显示
if(!img){
d.push({
   title:title,
   url:(url.substring(0,4)=='http'?url:spl+url)+`@rule=js:eval(fetch('hiker://files/rules/xyq/onemovie.js'));omerj();`,
   desc:desc,
   col_type: 'text_center_1'
});
}
//图文显示
else{
d.push({
   title:title,
   pic_url:img+'@Referer='+img,
   desc:desc,
   url:url+`@rule=js:eval(fetch('hiker://files/rules/xyq/onemovie.js'));omerj();`,
   col_type:'movie_3'
});
}
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
else if(/nfstar|nfxtv|nfxhd|zhenbuka|cokemv|zju8/.test(url)){url=url+'/vodsearch/'+spl[2]+'----------fypage---/';}
else if(/aidi/.test(url)){url=url+'/vsearch/'+spl[2]+'----------fypage---.html';}
else if(/siguyy/.test(url)){url=url+'/search/'+spl[2]+'----------fypage---.html';}
else if(/7xiady|bwl87/.test(url)){url=url+'/search/'+spl[2]+'----------fypage---/';}
else if(/1090ys/.test(url)){url=url+'/search/wd/'+spl[2]+'/page/fypage.html';}
else if(/subaibai|qianoo/.test(url)){url=url+'/page/fypage?s='+spl[2];}
else if(/hktvyb/.test(url)){url=url+'/vod/search/page/fypage/wd/'+spl[2]+'.html';}
else if(/qkan8|cqzyw|klysw/.test(url)){url=url+'/index.php/vod/search/page/fypage/wd/'+spl[2]+'.html';}
else if(/mjtvs/.test(url)){url=url+'/search.php?page=fypage&searchword='+spl[2]+'&searchtype=';}
else if(/nicotv/.test(url)){url=url+'/vod-search-wd-'+spl[2]+'-p-fypage.html';}
else if(/agefans/.test(url)){url=url+'/search?query='+spl[2]+'&page=fypage';}
else if(/789pan|bbkdj|888hyk|leduozy|rrzyw/.test(url)){url=url+'?wd='+spl[2]+'&pg=fypage&ac=list';}
else if(/kunyu77/.test(url)){url=url+'/searchVideo?searchName='+spl[2]+'&pg=fypage;get;utf-8;{User-Agent@Dalvik/2.1.0}';}


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
if(/789pan|bbkdj|888hyk|leduozy|rrzyw/.test(MY_URL)){
var spl=MY_URL.split("?")[0];
}else{
var spl = MY_URL.match(/([\S]*?:\/\/[\S]*?)\//)[1];}
var res={};var d=[];
var html=getResCode();
//过宝塔检测
if (html.indexOf('检测中') != -1) {
html=request(MY_URL + '?btwaf'+ html.match(/btwaf(.*?)\"/)[1], {});}
//setError(html);
//取列表
if(/jpysvip|zhaikan|nfstar|nfxtv|nfxhd|siguyy|mjtvs|gudanys/.test(MY_URL)){var list = parseDomForArray(html,'#searchList&&li');}
else if(/7xiady|cqzyw/.test(MY_URL)){var list = parseDomForArray(html,'.stui-vodlist&&li:has(a)');}
else if(/aidi/.test(MY_URL)){var list = parseDomForArray(html,'.vodlist&&li');}
else if(/hktvyb|zju8/.test(MY_URL)){var list = parseDomForArray(html,'.stui-vodlist__media&&li');}
else if(/ak1080|80ysm/.test(MY_URL)){
if(html.indexOf('mo-main-info')!=-1){
var list = parseDomForArray(html,'.mo-main-info&&.mo-deta-info:has(a)');}
else{
var list = parseDomForArray(html,'#searchList&&li')}
}
else if(/subaibai|qianoo/.test(MY_URL)){var list = parseDomForArray(html,'.search_list&&li');}
else if(/qkan8/.test(MY_URL)){var list = parseDomForArray(html,'.fed-main-info&&.fed-deta-info');}
else if(/nicotv/.test(MY_URL)){var list = parseDomForArray(html,'.list-unstyled&&li');}
else if(/agefans|klysw/.test(MY_URL)){var list = parseDomForArray(html,'body&&.cell||.leo-detail-wrap');}
else if(/kunyu77/.test(MY_URL)){var list = JSON.parse(html).data;}
else if(/789pan|bbkdj|888hyk|leduozy|rrzyw/.test(MY_URL)){
var list=parseDomForArray(html,"rss&&video");}


//setError(list[1]);

for (var i = 0; i < list.length; i++) {

//标题
if(/jpysvip|zhaikan|7xiady|nfstar|nfxtv|nfxhd|aidi|hktvyb|siguyy|mjtvs|gudanys/.test(MY_URL)){var title = parseDomForHtml(list[i], 'a&&title');}
else if(/ak1080|subaibai|qianoo|qkan8|nicotv|80ysm|cqzyw|zju8/.test(MY_URL)){var title = parseDomForHtml(list[i], 'h1||h3||h2&&a&&Text');}
else if(/agefans|klysw/.test(MY_URL)){var title = parseDomForHtml(list[i], 'img&&alt');}
else if(/kunyu77/.test(MY_URL)){var title = list[i].videoName;}
else if(/789pan|bbkdj|888hyk|leduozy|rrzyw/.test(MY_URL)){
var name = parseDomForHtml(list[i],"body&&name&&Text").split('<')[0];
var note = parseDomForHtml(list[i],"body&&note&&Text");
var title = name+'  '+note;
}

//图片
try{
if(/agefans|klysw/.test(MY_URL)){var img = parseDomForHtml(list[i], 'img&&src');}
else if(/kunyu77/.test(MY_URL)){var img = list[i].videoCover;}

else{
var img = parseDom(list[i], '.lazyload||.lazy||.mo-situ-pics||.fed-list-pics||.img-responsive&&data-original');}
if(img.substring(0,4)=='http'){img=img;}else{img=spl+img}
} catch(e) {}

//状态
try{
if(/cqzyw/.test(MY_URL)){
var desc=parseDomForHtml(list[i], 'em&&Text');}
else if(/kunyu77/.test(MY_URL)){
var desc = list[i].msg;}
else{
var desc = parseDomForHtml(list[i], '.pic-text||.pic_text||.mo-situ-rema||.fed-list-remarks||.jidi||.hdinfo||.continu||.newname&&Text');}
} catch(e) {}

//简介
try{
if(/aidi/.test(MY_URL)){
var cont = parseDomForHtml(list[i], 'p,-1&&Text');}
else if(/cqzyw/.test(MY_URL)){
var typ=parseDomForHtml(list[i], '.type&&Text');
var tim=parseDomForHtml(list[i], '.time&&Text');
var cont=typ+' '+tim;}
else if(/kunyu77/.test(MY_URL)){
var cont = list[i].briefContext;}
 else if(/789pan|bbkdj|888hyk|leduozy|rrzyw/.test(MY_URL)){
var typ = parseDomForHtml(list[i],'body&&type&&Text');
var dt = parseDomForHtml(list[i],'body&&dt&&Text');
var cont=typ+' · '+dt;}
else{
var cont = parseDomForHtml(list[i], '.detail||dd||.fed-deta-content||.cell_imform_kv_desc||.leo-detail-media&&Text');}
} catch(e) {}

//链接
if(/kunyu77/.test(MY_URL)){
var url='http://api.kunyu77.com/api.php/provide/videoPlaylist?ids='+list[i].id;
}else if(/789pan|bbkdj|888hyk|leduozy|rrzyw/.test(MY_URL)){
var urlid = parseDomForHtml(list[i],"body&&id&&Text");
var url=spl+'?ac=videolist&ids='+urlid;}else{       
var url = parseDom(list[i], 'a&&href');}

if(!img){
d.push({
   title:title,
   url:(url.substring(0,4)=='http'?url:spl[1]+url)+`@rule=js:eval(fetch('hiker://files/rules/xyq/onemovie.js'));omerj();`,
   desc:cont,
   col_type: 'text_1'
});
}else{
        d.push({
            title: title+'\n'+desc,
            pic_url:img+'@Referer='+img,
            url:url+`@rule=js:eval(fetch('hiker://files/rules/xyq/onemovie.js'));omerj();`,
            desc: cont,
            col_type: 'movie_1_vertical_pic'
        });
     }
   }

res.data = d;setHomeResult(res);
}

//选集列表规则函数
function omerj() {
if(/789pan|bbkdj|888hyk|leduozy|rrzyw/.test(MY_URL)){
var omdomin=MY_URL.split("?")[0];
}else{
var omdomin = MY_URL.match(/([\S]*?:\/\/[\S]*?)\//)[1];}
//setError(host);
var res ={};var d=[];
d.push({
	title: '',
    desc:'255&&float',
    url:'',
	col_type: 'x5_webview_single'
});
refreshX5WebView('');
var html=getResCode();
if (html.indexOf('检测中') != -1) {
html=request(MY_URL + '?btwaf'+ html.match(/btwaf(.*?)\"/)[1], {});}

//setError(html);
//线路判断
if(/jpysvip|siguyy|mjtvs|nicotv|gudanys|cokemv|bwl87|zju8/.test(MY_URL)){
var tabs=parseDomForArray(html,'body&&.nav-tabs&&li:not(.dropdown)');}
else if(/ak1080|80ysm/.test(MY_URL)){
if(html.indexOf('mo-sort-head')!=-1){
var tabs = parseDomForArray(html,'body&&.mo-sort-head&&.mo-movs-btns');
var conts=parseDomForArray(html,'body&&.mo-main-info&&.mo-movs-item');}
else{
var tabs = parseDomForArray(html,"body&&.nav-tabs&&li");
var conts=parseDomForArray(html,'body&&.myui-content__list');}
}
else if(/nfstar|nfxtv|nfxhd/.test(MY_URL)){
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
else if(/cqzyw/.test(MY_URL)){
var tabs = parseDomForArray(html,"body&&#playlist");}
else if(/aidi/.test(MY_URL)){
var tabs = parseDomForArray(html,".play_source_tab&&a");}
else if(/qkan8/.test(MY_URL)){
var tabs = parseDomForArray(html, '.fed-tabs-item&&ul&&li');}
else if(/agefan/.test(MY_URL)){
var tabs = parseDomForArray(html, '.menu0&&li');
var conts=parseDomForArray(html,'body&&.movurl:has(a)');}
else if(/kunyu77/.test(MY_URL)){
var tabs = JSON.parse(html).data.episodes;
var conts=tabs;}
else if(/klysw/.test(MY_URL)){
var tabs = parseDomForArray(html, 'body&&.leo-source-cho&&li');}


//列表判断
if(/jpysvip|zhaikanys|nfstar|nfxtv|nfxhd|siguyy/.test(MY_URL)){
var conts=parseDomForArray(html,'body&&.myui-content__list');}
else if(/7xiady|hktvyb|zhenbuka|mjtvs|1090ys|cqzyw|zju8/.test(MY_URL)){
var conts=parseDomForArray(html,'body&&.stui-content__playlist');}
else if(/subaibai|qianoo/.test(MY_URL)){
var conts=parseDomForArray(html,'body&&.paly_list_btn');}
else if(/aidi/.test(MY_URL)){
var conts=parseDomForArray(html,'body&&.playlist_full:has(.content_playlist)');}
else if(/qkan8|klysw/.test(MY_URL)){
var conts = parseDomForArray(html, 'body&&.fed-play-item||.leo-play-num');}
else if(/nicotv|gudanys|cokemv|bwl87/.test(MY_URL)){
var conts = parseDomForArray(html, 'body&&.tab-content&&ul');}
else if(/789pan|bbkdj|888hyk|leduozy|rrzyw/.test(MY_URL)){
var tabs = parseDomForArray(html,'rss&&dl&&dd');
var conts = parseDomForArray(html,'rss&&dl&&dd');}

//-----华丽的分割线-----
for(var i = 0;i<conts.length;i++){
//取列表选集
if(/<li>/.test(conts[i])){
var list=parseDomForArray(conts[i],'body&&li');}
else if(/fed-btns-info/.test(conts[i])){
var list=parseDomForArray(conts[i],'body&&.fed-btns-info');}
else if(/kunyu77/.test(MY_URL)){
var list=conts[i].playurls;}
else if(/789pan|bbkdj|888hyk|leduozy|rrzyw/.test(MY_URL)){
var list=conts[i].split(">\n")[1].split("\n<")[0].split("#");}
else{
var list=parseDomForArray(conts[i],'body&&a');
}
  
 //判断需要显示线路的
if(tabs){
  if(/jpysvip|zhaikan|ak1080|siguyy|mjtvs|qkan8|nicotv|gudanys|80ysm/.test(MY_URL)){
  	var tabt=parseDomForHtml(tabs[i], "a&&Text");}
  else if(/7xiady|nfstar|nfxtv|nfxhd|hktvyb|zhenbuka|1090ys|cqzyw/.test(MY_URL)){
  	var tabt=parseDomForHtml(tabs[i], "h3||a&&Text");}
  else if(/aidi/.test(MY_URL)){
  	var tabt=parseDomForHtml(tabs[i], "a&&alt");}
  else if(/kunyu77/.test(MY_URL)){
  	var tabt=tabs[i].episode+'';}
  else if(/agefan|cokemv|bwl87|klysw|zju8/.test(MY_URL)){
  	var tabt=parseDomForHtml(tabs[i], "body&&Text");}
  else if(/789pan|bbkdj|888hyk|leduozy|rrzyw/.test(MY_URL)){
  	var tabt=parseDomForHtml(tabs[i], "body&&dd&&flag");
;}
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
var link={};
for(var j = 0; j<list.length; j++){
			
if(/kunyu77/.test(MY_URL)){
var title=tabs[i].episode+'-'+list[j].playfrom;
var link=list[j].playurl;}
else if(/cqzyw/.test(MY_URL)){
var title=list[j].split('copy_text\">')[1].split('<')[0];
var link=list[j].split('$')[1].split('<')[0].replace('amp;','');}
else if(/789pan|bbkdj|888hyk|leduozy|rrzyw/.test(MY_URL)){
if(list[j].split('$')[1]!=null){
link=list[j].split('$')[1].replace(/\n*/g,'').replace(/amp;/g,"").replace(/^\s*/,"");}
else{
link=list[j].split('$')[0].replace(/\n*/g,'').replace(/amp;/g,"").replace(/^\s*/,"");}
if(tabt=='789pan'){link='https://play.789pan.cn/player/tm.php?url='+link}
if(/bbkdj/.test(MY_URL)){link='http://jx.yparse.com/index.php?url='+link}
if(/leduozy/.test(MY_URL)){link='https://api.leduotv.com/wp-api/glid.php?vid='+link}
if(/rrm3u8/.test(MY_URL)){link='https://www.meiju11.com/ckplayerx/m3u8.php?url='+link}

var title=(list[j].split('$')[0].indexOf('http')!=-1?[j+1]:list[j].split('$')[0]);
}
else{
var title=parseDomForHtml(list[j], "a&&Text");
var link=parseDom(list[j], "a&&href");}

			if(title.length>=11){var clt='text_center_1';}else if(title.length>=6){var clt='text_2';}else{var clt='text_3'}
			d.push({
				title:title,
                url:'hiker://empty$$$'+omdomin+'$$$'+link+`@lazyRule=.js:/*refreshX5WebView*/eval(fetch('hiker://files/rules/xyq/onemovie.js'));omlazy();`,
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
var myurl=input.split('$$$')[1];
var srcurl=input.split('$$$')[2];

//资源网yun链
if(srcurl.indexOf("135-cdn")!=-1){
refreshX5WebView(srcurl);
return "toast://请等待加载选集！";
}else if(srcurl.indexOf("/share/")!=-1){
try{
var link=srcurl.split("/share")[0];
var fc=fetch(srcurl,{}).replace("var purl","var main");
if(fc.indexOf("main")!=-1){
var mat=fc.match(/var main.*?;/)[0];
eval(mat);
var play=(main.indexOf("http")!=-1?main:link+main);
}else{
var main=fc.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];
var play=(main.indexOf("http")!=-1?main:link+main)};
return play;
} catch(e) {
refreshX5WebView(srcurl);
return "toast://请等待加载选集！"};
}
//可乐&宅看
else if(/klysw|zhaikanys/.test(myurl)){
var phtml =request(srcurl,{});
eval(parseDomForHtml(phtml,".leo-player||.embed-responsive&&script&&Html").replace(/player_.*?={/,'player_data={'));
var fro=player_data.from;var urll=player_data.url;
return urll
}
//77影视
else if(/kunyu77/.test(myurl)){

if(srcurl.indexOf('html')!=-1){
var jx='http://jx.quanmingjiexi.com/?url='+srcurl;
return 'x5WebView://'+(jx);}

else{
if(srcurl.indexOf('GetDownUrlDoc')!=-1){
var ul=JSON.parse(request(srcurl, {headers:{"Referer":"https://www.nfmovies.com/"}, redirect:false, withHeaders:true}));
if(ul.statusCode=="302"){return ul.headers.location[0]+'#isVideo=true#';}else{return srcurl}}else if(srcurl.indexOf('GetDownUrlMu')!=-1){return srcurl+';{User-Agent@Lavf/57.83.100}'}
else{return srcurl}}
}
//秋霞
else if(/7xiady/.test(myurl)){
var phtml =request(srcurl,{});
var js = eval(parseDomForHtml(phtml,".stui-player__video&&script&&Html").replace(/player_.*?={/,'player_data={'));
var fro=player_data.from;var urll=player_data.url;
if(fro=='niux'){refreshX5WebView('');
var jiexi=fetch(myurl+'/jx.php?id='+urll,{headers:{"User-Agent":PC_UA,"Referer":myurl}});
var re=fetch(myurl+'/'+jiexi.match(/var u=\"(.*?)\"/)[1],{});
if(re=='error'){return 'toast://解析失败，该资源无播放地址。';}else{return re.match(/url: \"(.*?)\"/)[1]};}
else{var jk=request(myurl+'/static/player/'+fro+'.js',{}).match(/src=\"(.*?)\'/)[1];refreshX5WebView(jk+urll);return 'toast://切换选集成功，请等待加载播放框架。'}

}
//789盘
else if(/789pan/.test(myurl)){
var phtml=request(srcurl);
return phtml.match(/url\":.*?[\'\"](.*?)[\'\"]/)[1];
}
//步步高资源
else if(/bbkdj/.test(myurl)){
refreshX5WebView(srcurl);
return "toast://请等待加载选集！";
}
//乐多资源网
else if(/leduozy/.test(myurl)){
var pla=request(srcurl,{}).split("var url=\'")[1].split("\'")[0];
if(pla.indexOf("m3u8")!=-1){
return pla.split("=")[1];
}else{
return srcurl};
}
//解b64链接
else if(srcurl.indexOf("aHR0c")!=-1){
return decodeURIComponent(base64Decode(srcurl.split("&")[0]));
}
//人人资源网
else if(/rrzyw/.test(myurl)){
var meiju=fetch(srcurl,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://www.meiju11.com"}});
return meiju.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];
}
//去看吧
else if(/qkan8/.test(myurl)){
var phtml=fetch(srcurl,{});
var dplay=base64Decode(parseDomForHtml(phtml,'.fed-play-player&&iframe&&data-play').slice(3));
var pars=parseDom(phtml,'.fed-play-player&&iframe&&data-pars');
if(dplay.indexOf('http')!=-1){
if(dplay.indexOf('html')!=-1){
var html=fetch('https://www.cuan.la/m3u8.php?url='+dplay,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://qkan8.com/"}});
eval(fetch('https://gitee.com/lzk23559/public_folder/raw/master/token.js',{}));
return tkurl.indexOf('url=') > -1 ? tkurl.split('url=')[1] : tkurl;}else{return dplay+'#isVideo=true#'};}
else{
var html=fetch(pars+dplay,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://qkan8.com/"}});
if(html.indexOf('purl')!=-1){
var kjjx=parseDomForHtml(html,'body&&Html').match(/var purl = \'(.*?)\'/)[1];
var html=fetch('https://qkan8.com'+kjjx,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://qkan8.com/"}})};
var vurl=html.indexOf('var vid')!=-1?html.match(/var vid=\"(.*?)\"/)[1]:html.match(/var url = \'(.*?)\'/)[1];return vurl;}
}
//素白白&厂长影视
else if(/subaibai|qianoo/.test(myurl)){
var phtml=parseDom(fetch(srcurl,{headers:{'User-Agent':'Windows'}}),"body&&script:not([src]),2&&Html");
eval(getCryptoJS());
var scrpt=phtml.match(/var.*?\)\);/g)[0];
eval(scrpt.replace(/md5/g,'CryptoJS').replace('eval','var data = '));
return data.match(/url:.*?[\'\"](.*?)[\'\"]/)[1].replace('https://wy','http://wy')+"#isVideo=true#"+';{Referer@'+myurl+'}';
}
//奈飞星
else if(/nfxhd/.test(myurl)){
var scrpt=parseDomForHtml(fetch(srcurl,{}),'.embed-responsive&&script&&Html').replace(/player_.*?={/,'player_data={');
eval(scrpt);var fro=player_data.from;var urll = player_data.url;
if(fro=='ppayun2'||fro=='tt10'){var play='https://wy.bigmao.top/api/ShowVideoMu/3bb24322f78b47dfb8723c13d46d45ee/'+urll;}
else if(fro=='gangtiexia'){var play='https://wy.bigmao.top/api/ShowVideoWy/3bb24322f78b47dfb8723c13d46d45ee/'+urll;}
else if(fro=='docker'){var doclin='https://wy.bigmao.top/api/ShowVideoDoc/3bb24322f78b47dfb8723c13d46d45ee/'+urll;
var ul=JSON.parse(request(doclin, {headers:{"Referer":"https://www.nfxhd.com/"}, redirect:false, withHeaders:true}));
if(ul.statusCode=="302"){var play=ul.headers.location[0];}else{var play=doclin;}
}
else if(fro=='bilibili'||urll.indexOf('html')!=-1){
var jxhtml=request('https://nfxhd.com/jx/analysis.php?v='+urll,{headers:{"Referer":"https://nfxhd.com"}});
var play=jxhtml.match(/var urls = \"(.*?)\"/)[1];
}
else{var play=urll}
if(fro=='ppayun2'||fro=='tt10'||fro=='gangtiexia'){
var mlki=parseDomForHtml(fetch(play,{}),"body&&#dplayer&&result");
var fileUrl ="https://gitee.com/lzk23559/rulehouse/raw/master/pako-min.js";
eval(fetch(fileUrl,{}));return realUrl;
}else{return play}
}
//真不卡影视
else if(/zhenbuka/.test(myurl)){
var phtml =fetch(srcurl,{headers:{"User-Agent":MOBILE_UA}});
var scrpt = parseDomForHtml(phtml,".embed-responsive&&script&&Html");
eval(scrpt);var fro=player_data.from;var urll=player_data.url;
if(fro=='niuxyun'){
var one=fetch('https://cq.mmiyue.com/jiekou/zbk-bkby/jx.php?id='+urll,{headers:{"Referer":"https://www.zhenbuka.com/"},method:"GET"}).match(/var u=\"(.*?)\"/)[1];
var tow=fetch('https://cq.mmiyue.com/jiekou/zbk-bkby/'+one,{headers:{"Referer":"https://www.zhenbuka.com/"},method:"GET"});
return tow.match(/url: \"(.*?)\"/)[1];}
else if(urll.indexOf('m3u8')!=-1){return urll;}
else{var jiek=fetch('https://www.zhenbuka.com/static/player/'+fro+'.js?v='+new Date().getTime()+'',{headers:{"User-Agent":MOBILE_UA}}).match(/src=\"(.*?)\'/)[1];
refreshX5WebView(jiek+urll);return 'toast://切换选集成功，请等待加载播放框架。'}
}
//91美剧
else if(/mjtvs/.test(myurl)){
var phtml =request(srcurl);var scrpt =parseDomForHtml(phtml,".embed-responsive&&script&&Html").replace(/base64decode/g,'base64Decode');eval(scrpt);
if(now.indexOf('http')!=-1){
return now;}
else{
var cod=request('https://www.mjtvs.com/js/player/'+pn+'.html',{}).match(/parent.now\+\'(.*?)\"/)[1];
var qq=fetch('https://oss.306kan.com/?url='+now+cod,{headers:{'User-Agent':MOBILE_UA,'Referer':'https://www.mjtvs.com'}});
var vkey=qq.match(/var vkey = \'(.*?)\'/)[1]+'&ip=192.168.0.109&dq=CHINA';
var jiek=qq.replace(/\/\*[\s\S]*?\*\//g,'').replace(/<!--[\s\S]*?-->/g,'').match(/post\([\"\'](.*?)[\"\']/)[1];
var play=fetch('https://oss.306kan.com/'+jiek, {headers:{'User-Agent':MOBILE_UA,'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},body:'vkey='+vkey,method:'POST'});
return JSON.parse(play).url;}
}
//阿房影视
else if(/bwl87/.test(myurl)){
try{
var phtml =fetch(srcurl,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://bwl87.com"}});
var scrpt = parseDomForHtml(phtml,".embed-responsive&&script&&Html").replace(/player_.*?={/,'player_data={');
eval(scrpt);var fro=player_data.from;var urll=player_data.url;
if(fro.indexOf('m3u8')!=-1||fro=='qie'){refreshX5WebView('');return urll;}
else if(fro=='vip'){refreshX5WebView('');return JSON.parse(fetch(urll, {headers:{"User-Agent":"Dalvik/2.1.0","Referer":"https://bwl87.com"}, redirect:false, withHeaders:true})).headers.location[0];}
else if(fro=='xin'||fro=='ddyunp'){
eval(getCryptoJS());
var id=urll + 'duoduo' + 'l' + (Math.floor(new Date().getTime() / 100000) * 100).toString();
var dat=CryptoJS.MD5(id).toString(CryptoJS.enc.Hex);
var purl='https://hls.90mm.me/ddyun/' + urll + '/l/' + dat + '/playlist.m3u8';return purl;}
else if(urll.indexOf('html')!=-1){refreshX5WebView('');
if(fro=='mgtv'){
var jx='https://www.mgtv.com.flygd.ml/player/analysis.php?v='+urll;
return fetch(jx,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://bwl87.com/"}}).match(/var urls = \"(.*?)\"/)[1]+';{Referer@https://www.mgtv.com/}';}
else{
var jx='https://flygd.ml/player/analysis.php?v='+urll;
return fetch(jx,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://bwl87.com/"}}).match(/var urls = \"(.*?)\"/)[1]};
}
else if(fro.indexOf('age')!=-1){return urll;}
else{return refreshX5WebView(urll)}
}catch(e){refreshX5WebView(srcurl);return 'toast://解析失败，已为您打开源网页查看。'}
}
//cokemv影视
else if(/cokemv/.test(myurl)){
var phtml =fetch(srcurl,{headers:{"User-Agent":MOBILE_UA,"Referer":"http://cokemv.cn"}});
var scrpt = parseDomForHtml(phtml,".embed-responsive&&script&&Html").replace(/player_.*?={/,'player_data={');
eval(scrpt);var fro=player_data.from;var urll=decodeURIComponent(base64Decode(player_data.url)).replace(/&.*/,'');
if(urll.indexOf('m3u8')!=-1){return urll;}
else if(fro=='age01'||fro=='age02'){return urll;}
else if(fro=='90mm'||fro=='xin'||fro=='cokeqie01'){eval(getCryptoJS());
var id=urll + 'duoduo' + 'l' + (Math.floor(new Date().getTime() / 100000) * 100).toString();
var dat=CryptoJS.MD5(id).toString(CryptoJS.enc.Hex);
var purl='https://hls.90mm.me/ddyun/' + urll + '/l/' + dat + '/playlist.m3u8';return purl;}
else{return srcurl}
}

//打开源链接
else{return srcurl}
}