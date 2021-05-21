function doub() {
var res = {};
var items = [];
refreshX5WebView("");
items.push({
	title: '',
    desc:'255&&float',
    url:'',
    col_type: 'x5_webview_single'
});
var html = getResCode();
try{
var pic = parseDomForHtml(html,"rss&&pic&&Text").replace("http://t.8kmm.com","https://www.wxtv.net");
if(MY_URL.indexOf("pangniaozyw")!=-1||MY_URL.indexOf("leshizyw")!=-1||MY_URL.indexOf("9191zy")!=-1){
pic="https://tu.tianzuida.com/pic/"+pic;
}else if(MY_URL.indexOf("lby")!=-1){
pic.indexOf("http")!=-1?pic=pic:pic="http://cj.lby.pet/"+pic;
}else if(MY_URL.indexOf("xjiys")!=-1){
pic=pic.replace("img.maccms.com","xjiys.com");
}else if(MY_URL.indexOf("shidian")!=-1){
pic=pic.replace("img.maccms.com","shidian.vip");
}else if(MY_URL.indexOf("17kanju")!=-1){
pic=pic.replace("img.maccms.com","img.17kanju.com");
}else if(MY_URL.indexOf("potatost")!=-1){
pic=pic.replace("http://img.maccms.com//pic=","");
}
var typ = parseDomForHtml(html,"body&&type&&Text");
var des=parseDomForHtml(html, "rss&&des&&Text");
items.push({
title:'演员：'+'\n'+parseDomForHtml(html, "rss&&actor&&Text"),
desc:'导演：'+parseDomForHtml(html, "rss&&director&&Text"),
pic_url:pic+'@Referer='+pic,
url:pic,
col_type: 'movie_1_vertical_pic'
});

items.push({
title: "剧情简介：",
desc:des,
col_type: 'text_1'
});

var conts=parseDomForArray(html,'rss&&dl&&dd');
var url=parseDomForHtml(html,'rss&&id&&Text');
for(var i = 0;i<conts.length;i++){
if (getVar('doublsort','1')=='1') {
var list=conts[i].split(">\n")[1].split("\n<")[0].split("#");
  }else{
var list=conts[i].split(">\n")[1].split("\n<")[0].split("#").reverse();
  }
var flag=parseDomForHtml(conts[i], "body&&dd&&flag");
if(list!=null){
items.push({
title:flag=='qdyun'?flag+" 不显示播放的需刷新一次网页才能播":flag+"    🔗"+[i+1]+'/'+conts.length+"““点击切换选集排序””",
url:"hiker://empty@lazyRule=.js:putVar('doublsort', getVar('doublsort','1')=='1'?'0':'1');refreshPage(false);'toast://切换成功！'",
col_type: 'text_1'
});
var url={};
for(var j = 0; j<list.length; j++){
if(list[j].split('$')[1]!=null){url=list[j].split('$')[1];}else{url=list[j].split('$')[0];}
if(MY_URL.indexOf('leduozy')!=-1){url='https://api.leduotv.com/wp-api/glid.php?vid='+url}
if(MY_URL.indexOf('bbkdj')!=-1){url='http://jx.yparse.com/index.php?url='+url}
if(MY_URL.indexOf('7kjx')!=-1){url='http://jx.xmflv.com/?url='+url}
if(flag=='ddyunp'||flag=='xin'){url='https://player.90mm.me/play.php?url='+url.replace(/第.*?集/g,'')}
if(flag=='qdyun'){url='http://qdy.zt6a.cn/parse?resources='+url}
if(flag=='ppayun'||flag=='gangtiexia'){url=url.substring(0,4)=='http'?url.replace('683d2433ee134cde8063d50506c1a1b1','3bb24322f78b47dfb8723c13d46d45ee'):'https://wy.mlkioiy.cn/api/GetDownUrlWy/3bb24322f78b47dfb8723c13d46d45ee/'+url}
if(flag=='tt10'){url='https://wy.mlkioiy.cn/api/ShowVideoMu/3bb24322f78b47dfb8723c13d46d45ee/'+url}
if(MY_URL.indexOf('yyid6080')!=-1||MY_URL.indexOf('p4kan')!=-1){if(flag=='xigua'||flag=='bjm3u8'){url='https://bbs.cnzv.cc/dp/mp4.php?url=http://list.47api.cn:90/qq/xigua.php?id='+url;}else if(flag=='qqkj'){url='https://bbs.cnzv.cc/dp/ck/ck.php?url=http://list.47api.cn:90/qq/mp4.php?id='+url;}else if(flag=='tudou'){url='https://sf1-ttcdn-tos.pstatp.com/obj/'+url+'#.mp4';}else{url=url};}
if(flag=='rrm3u8'){url='https://www.meiju11.com/ckplayerx/m3u8.php?url='+url}
if(flag=='niux'){url='https://www.shenma4480.com/jx.php?id='+url}
if(flag=='hkm3u8'){url='https://pl.tcc-interiors.com/hls/'+url}
if(flag=='xsp1'){url='https://jx.api.xhfhttc.cn/jx/?type=xsp1&url='+url}
if(flag=='bb'){url='https://jx.api.xhfhttc.cn/jx/?url='+url}
if(flag=='pll'){url='https://jx.baipiaozy.com/player/?url='+url}
if(/languang/.test(flag)){url='https://j.languang.wfss100.com/?url='+url}
if(flag=='msp'){url='https://titan.mgtv.com.bowang.tv/player/analysis.php?v='+url}
if(flag=='kdyx'||flag=='kdsx'){url='http://api.kudian6.com/jm/pdplayer.php?url='+url}
if(flag=='789pan'){url='http://789pan.hd8.pw/?url='+url}
items.push({
title:list[j].split('$')[0].indexOf('http')!=-1?[j+1]:list[j].split('$')[0],
url:url.replace(/\n*/g,'')+`@lazyRule=.js:/*refreshX5WebView*/eval(fetch('https://codeberg.org/lzk23559/PublicRule/raw/branch/master/doub.js'));lazyRu();`,
col_type: 'text_2'});
   }//end for list
  }//end if
 }//end for conts
} catch(e) {}
res.data=items;
setHomeResult(res);
}

//动态解析
function lazyRu() {
var src=input.replace(/amp;/g,"").replace(/^\s*/,"");
if(src.indexOf("html")!=-1){
var fileUrl="https://codeberg.org/lzk23559/PublicRule/raw/branch/master/parse.js";
eval(fetch(fileUrl,{}));
var play=vodkey.toUrl(src.split('"')[0]);
return play!=""?play:getUrl(src.split('"')[0]);
}else if(src.indexOf("135-cdn")!=-1){
refreshX5WebView(src);
return "toast://请等待加载选集！";
}else if(src.indexOf("/share/")!=-1){
try{
var link=src.split("/share")[0];
var fc=fetch(src,{}).replace("var purl","var main");
if(fc.indexOf("main")!=-1){
var mat=fc.match(/var main.*?;/)[0];
eval(mat);
var play=(main.indexOf("http")!=-1?main:link+main);
}else{
var main=fc.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];
var play=(main.indexOf("http")!=-1?main:link+main)};
return play;
} catch(e) {
refreshX5WebView(src);
return "toast://请等待加载选集！"};
}else if(src.indexOf("meiju11")!=-1){
var meiju=fetch(src,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://www.meiju11.com"}});
return meiju.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];
}else if(src.indexOf("leduotv")!=-1){
var pla=request(src,{}).split("var url=\'")[1].split("\'")[0];
if(pla.indexOf("m3u8")!=-1){
return pla.split("=")[1];}else{return src};
}else if(src.indexOf("aHR0c")!=-1){
return decodeURIComponent(base64Decode(src.split("&")[0]));
}else if(src.indexOf("haodanxia")!=-1||src.indexOf("cqzyw")!=-1){
var ul=JSON.parse(fetch(src, {headers:{"User-Agent":"Dalvik/2.1.0"}, redirect:false, withStatusCode:true}));
if(ul.statusCode=="302"){
var play=ul.headers.location[0];
}else{
var play=src+"#isVideo=true#"};
return play;
}else if(src.indexOf("shenma4480")!=-1){
var sm="https://www.shenma4480.com/"+fetch(src,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://www.shenma4480.com"}}).match(/var u=\"(.*?)\"/)[1];
return fetch(sm,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://www.shenma4480.com"}}).match(/url:.*?[\'\"](.*?)[\'\"]/)[1].replace(/[+]/g,"%20");
}else if(src.indexOf("mlkioiy")!=-1){
if(src.indexOf("ShowVideo")!=-1){
var mlki=parseDomForHtml(fetch(src,{}),"body&&#dplayer&&result");
var fileUrl ="https://cdn.jsdelivr.net/gh/lzk23559/rulehouse/pako-min.js";
eval(request(fileUrl,{}));
return realUrl;
}else{
return src+"#isVideo=true#"};
}else if(src.indexOf("ddyunp")!=-1||src.indexOf("90mm.me")!=-1){
eval(getCryptoJS());
var id=src + 'duoduo' + 'l' + (Math.floor(new Date().getTime() / 100000) * 100).toString();
var dat=CryptoJS.MD5(id).toString(CryptoJS.enc.Hex);
var purl='https://hls.90mm.me/ddyun/' + src + '/l/' + dat + '/playlist.m3u8';
return purl;
}else if(src.indexOf("xsp1")!=-1){
var pli=parseDomForHtml(fetch(src,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://zz22x.com"}}),"body&&iframe&&src").split("url=")[1];
var fileUrl="https://codeberg.org/lzk23559/PublicRule/raw/branch/master/parse.js";
eval(fetch(fileUrl,{}));
var play=yqjx.toUrl(pli);
return play!=""?play:getUrl(pli);
}else if(src.indexOf("kudian6.com")!=-1){
var html=request(src);
return html.match(/url\":.*?[\'\"](.*?)[\'\"]/)[1];
}else if(src.indexOf("789pan")!=-1){
var html=request(src);
eval(getCryptoJS());
var id = html.match(/var id=\"(.*?)\"/)[1];
var times=(new Date()).getTime()+'';
var sh= CryptoJS.MD5(base64Encode(id+times)).toString();
var purl='http://play.zk132.cn/new/play1/'+id+'%7C'+times+'%7C'+sh+'%7C'+'1'+'%7C'+'index.m3u8';
return purl;
}else if(src.indexOf("baipiaozy")!=-1||src.indexOf("bowang")!=-1){
refreshX5WebView(src);
return "toast://请等待加载选集！";
}else if(src.indexOf("www.bilibili.com")!=-1){
return src;
}else if(src.indexOf("alizy-")!=-1){
return fetch('https://foubin.com/jiexi.php?url='+src,{}).match(/\"url\":\"(.*?)\"/)[1];
}else if(src.indexOf("47api")!=-1){
refreshX5WebView(src);
return "toast://请等待加载选集！";
}else if(src.indexOf("yparse.com")!=-1){
refreshX5WebView(src);
return "toast://请等待加载选集！";
}else if(src.indexOf("//520.com")!=-1){
refreshX5WebView("https://titan.mgtv.com.o8tv.com/jiexi/?url="+src);
return "toast://请等待加载选集！";
}else{return src}
}

function doubss() {
var res = {};
var items = [];
items.push({
title:'提示：请使用资源网采集规则进行搜索,或者把搜索二级的doubss()改成doub()',
desc:'请注意看标题说明哟。',
url:'',
col_type: 'text_center_1'
});
res.data=items;
setHomeResult(res);
}