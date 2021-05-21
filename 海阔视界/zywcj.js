function updata() {
var res = {};
var items = [];

res.data=items;
setHomeResult(res);
};
function filter(key) {
  //var word = ["伦理","写真","福利","VIP","美女","里番","性感","倫理","论理","成人","情色","无码","有码","妻","诱","乳","红主","莉","品推","文字","三级","美少","HEY","骑兵","产自","性爱","裸聊","乱伦","偷","AV","av","淫","妖","男同","女同","人","妇","丝","私","盗","虚拟","交","SM","慰","精品","学生","射","3P","大秀","精品","口味","高潮","极品","DMM","首次","辣椒","家擂","色情","主播","名优","幼","眉","女","阴","奸","轨","师","情侣","激","态","控","飞机","推","潮","麻豆","ey"];
  var word=[];
  for (var i = 0; i <word.length; i++){
    if(key.indexOf(word[i])>-1){
    	return true;
    	}
      }
  return false;
};

function zywhm() {
var html = getResCode();
var arr = html.indexOf('http')!=-1?html.match(/#[\s\S]*?#/g):base64Decode(html).match(/#[\s\S]*?#/g);
var ssmd=JSON.parse(fetch('hiker://files/rules/zywset.json',{})).ssmode;
var res = {};
var items = [];

items.push({
    title : '🔍模式'+'('+(ssmd==1?'聚':'列')+')',
    url : $('hiker://empty').lazyRule(()=>{
    var md=JSON.parse(fetch('hiker://files/rules/zywset.json',{})).ssmode;
    if(md==1){
    var fileUrl=fetch("hiker://files/rules/zywset.json",{}).replace('\"ssmode\":\"1\"','\"ssmode\":\"0\"');
    writeFile("hiker://files/rules/zywset.json",fileUrl);
    refreshPage(false);return 'toast://切换为搜索引擎列表单选模式成功！';
    }
    else{
    var fileUrl=fetch("hiker://files/rules/zywset.json",{}).replace('\"ssmode\":\"0\"','\"ssmode\":\"1\"');
    writeFile("hiker://files/rules/zywset.json",fileUrl);
    refreshPage(false);return 'toast://切换为聚合搜索模式成功！'
    }
    }),
    col_type:'flex_button'
});
items.push({
    title : '获取云端',
    url:$('hiker://empty').lazyRule(()=>{
	var rulejs = fetch('https://raw.githubusercontent.com/YuanHsing/freed/master/%E6%B5%B7%E9%98%94%E8%A7%86%E7%95%8C/zywcj.js',{});
	writeFile("hiker://files/rules/zywcj.js",rulejs);
	refreshPage(false);return 'toast://应该是获取最新了吧。'
    }),
    col_type:'flex_button'
});
items.push({
    title : '香情影视',
    url:'hiker://home@香情影视',
    col_type:'flex_button'
});
items.push({col_type: 'line'});
for (var i = 0; i < arr.length; i++) {
var tabs = arr[i].match(/#.*?[\s]/g)[0].split('#')[1].replace(/\n/,'');
var list = arr[i].match(/[\S]*?,.*?[\s]/g);

items.push({

            title: tabs,
            col_type: 'text_1'

        });

for (var j = 0; j < list.length; j++) {

items.push({

            title: list[j].split(',')[0],

            url: list[j].split(',')[1]+'?ac=list&pg=fypage',
            col_type: 'text_3'

        });
 }

}

res.data = items;

setHomeResult(res);
};


//图片替换函数
function picfun() {
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
};
//列表解析函数
function listfun() {
try{
var list=parseDomForArray(html,"rss&&video");
for(var j = 0; j <list.length; j++){
var title = parseDomForHtml(list[j],"body&&name&&Text").split('<')[0]; 
var url = parseDomForHtml(list[j],"body&&id&&Text"); 
var note = parseDomForHtml(list[j],"body&&note&&Text"); 
var typ = parseDomForHtml(list[j],"body&&type&&Text");
var last = parseDomForHtml(list[j],"body&&last&&Text");
if(!filter(word)){
if(html.indexOf("</pic>")!=-1){
var pic=parseDomForHtml(list[j],"body&&pic&&Text").replace("http://t.8kmm.com","https://www.wxtv.net");
eval(fetch("hiker://files/rules/zywcj.js"));
picfun();
items.push({
title:title,
pic_url:pic+'@Referer='+pic,
desc:note,
url:arrr+"?ac=videolist&ids="+url+`@rule=js:eval(fetch('hiker://files/rules/zywcj.js'));SSEJ();`,
col_type:"movie_3"
    });
}else{
var dt = parseDomForHtml(list[j],"body&&dt&&Text");
items.push({
title:title+"  状态:"+note,
desc:last+' '+typ+' '+dt,
url:arrr+"?ac=videolist&ids="+url+`@rule=js:eval(fetch('hiker://files/rules/zywcj.js'));SSEJ();`,
col_type:"text_1"
})
    }
  }
}
} catch(e) {}
};
//二级规则函数
function TWEJ() {
var res = {};
var items = [];
var arrr = MY_URL.split("?")[0];
var pn = MY_URL.split("=")[2];
var listmod=JSON.parse(fetch('hiker://files/rules/zywset.json',{})).listmod;
if (listmod=='1') {
html = getResCode();}else{html = request(MY_URL.replace('ac=list','ac=videolist'))}
//对第一页分类进行处理
if(pn=='1'){
try{
if(html.indexOf("</class>")!=-1){
rescod= getResCode();
}else{
rescod= request(arrr+"?ac=list")
}
var type = parseDomForHtml(rescod,"class&&Html").match(/<ty[\s]id[\s\S]*?<\/ty>/g);
for(var i=0;i<type.length;i++){
var title = parseDomForHtml(type[i],"body&&Text").split('{')[0];
var url = parseDomForHtml(type[i],"body&&ty&&id");
if(!filter(word)){
items.push({
title:title,
url:$(arrr+"?ac=list&pg=fypage&t="+url).rule(()=>{
var arrr = MY_URL.split("?")[0];
var pn = MY_URL.split("pg=")[1].split("&t=")[0];
var listmod=JSON.parse(fetch('hiker://files/rules/zywset.json',{})).listmod;
if (listmod=='1') {html = getResCode();}else{html = request(MY_URL.replace('ac=list','ac=videolist'))}
var res = {};var items = [];
if(pn=='1'){
items.push({
	title: '‘‘’’<strong><font color="#ffaa64">纯文本列表</front></strong>',
    desc:'',
    url:$('hiker://empty').lazyRule(()=>{
var fileUrl=fetch("hiker://files/rules/zywset.json",{}).replace('\"listmod\":\"0\"','\"listmod\":\"1\"');
    writeFile("hiker://files/rules/zywset.json",fileUrl);refreshPage();'toast://切换成功！'}),
    col_type: 'text_2'
});
items.push({
	title: '‘‘’’<strong><font color="#ffaa64">图文列表</front></strong>',
    desc:'',
    url:$('hiker://empty').lazyRule(()=>{
var fileUrl=fetch("hiker://files/rules/zywset.json",{}).replace('\"listmod\":\"1\"','\"listmod\":\"0\"');
    writeFile("hiker://files/rules/zywset.json",fileUrl);refreshPage();'toast://切换成功！'}),
    col_type: 'text_2'
});
items.push({
col_type: 'line'});}
eval(fetch('hiker://files/rules/zywcj.js'));
listfun();
res.data=items;setHomeResult(res);}),
//col_type:"text_3"
col_type:'flex_button'});
  }
 }
} catch(e) {}
items.push({col_type: 'line'});
items.push({
	title: '‘‘’’<strong><font color="#ffaa64">纯文本列表</front></strong>',
    desc:'',
    url:$('hiker://empty').lazyRule(()=>{
var fileUrl=fetch("hiker://files/rules/zywset.json",{}).replace('\"listmod\":\"0\"','\"listmod\":\"1\"');
    writeFile("hiker://files/rules/zywset.json",fileUrl);refreshPage();'toast://切换成功！'}),
    col_type: 'text_2'
});
items.push({
	title: '‘‘’’<strong><font color="#ffaa64">图文列表</front></strong>',
    desc:'',
    url:$('hiker://empty').lazyRule(()=>{
var fileUrl=fetch("hiker://files/rules/zywset.json",{}).replace('\"listmod\":\"1\"','\"listmod\":\"0\"');
    writeFile("hiker://files/rules/zywset.json",fileUrl);refreshPage();'toast://切换成功！'}),
    col_type: 'text_2'
});
items.push({col_type: 'line'});
}
//结束第一页分类处理

//对列表处理开始
eval(fetch('hiker://files/rules/zywcj.js'));
listfun();
//对列表处理结束
res.data=items;
setHomeResult(res);
};

function zywsea() {
var res = {};
var items = [];
//获取搜索线程数量
var ssxc = JSON.parse(fetch('hiker://files/rules/zywset.json',{})).sscount;;

//设置超时时间，越小越快，单位毫秒
var timeou = 5000;

var ss = MY_URL.split('$$$')[1];
var num= MY_URL.split('$$$')[2];
var ssmode=JSON.parse(fetch('hiker://files/rules/zywset.json',{})).ssmode;
var le = num*ssxc;
//setError(le);
if(num=='1'){
putVar({key:'zyfany', value:''});
var src=fetch('hiker://files/rules/ZYWCJ.txt',{});
putVar({key:'zyfany', value:src});
}//end

if(num=='1'){src=src;}else{src=getVar('zyfany')};

var cc = src.indexOf('http')!=-1?src.match(/[\S]*?,.*?[\s]/g):base64Decode(src).match(/[\S]*?,.*?[\s]/g);

if(ssmode=='0'){
for(var i=0; i<cc.length;i++){
items.push({

            title: cc[i].split(',')[0]+' 点击查看搜索结果',

            url: cc[i].split(',')[1]+ss.replace(/pg=\d*/g,'pg=fypage')
        });

    };
}else{
var Data=[];
var Tit=[];
var Ost=[];
for(var i=le-ssxc;i<le;i++){
if(i<cc.length){
var arr = cc[i].split(',')[1];
var arrt = cc[i].split(',')[0];
var link=cc[i].split(',')[1]+ss;

//Data.push({url:link,options:{headers:{'User-Agent':MOBILE_UA},timeout:timeou}});
Data.push({url:link,options:{headers:{'User-Agent':MOBILE_UA}}});
Tit.push({tit:arrt});
Ost.push({url:arr});
}
}

//---------------代码分界线----------------

//批量发送请求
if(Data!=''){
var html=batchFetch(Data);
//setError(Tit);

for(var k=0;k<html.length;k++){
if(html[k]!=null){

//搜索结果网页处理开始
if(html[k].indexOf('<video>')==-1){

items.push({
			title: '““'+Tit[k].tit+'””'+'未搜索到相关资源',
    url:Data[k].url,
		col_type: 'text_center_1'
});}else{


var list = parseDomForArray(html[k], 'rss&&video');

//setError(list[0]);
for (var j = 0; j < list.length; j++) {


        var title = parseDomForHtml(list[j],'body&&name&&Text');

        var url = parseDomForHtml(list[j],'body&&id&&Text');
        var note = parseDomForHtml(list[j],'body&&note&&Text');

        var typ = parseDomForHtml(list[j],'body&&type&&Text');
         var dt = parseDomForHtml(list[j],'body&&dt&&Text');
items.push({

            title: title+" "+' • '+note,
            desc: Tit[k].tit+' · '+typ+' · '+dt,

            url: Ost[k].url+"?ac=videolist&ids="+url

        });

    }
  }
}
}
}
}

res.data = items;

setSearchResult(res);
}

function zywerj() {
var ssmode=JSON.parse(fetch('hiker://files/rules/zywset.json',{})).ssmode;
if(ssmode=='0'){
var res = {};var items = [];
var domain = MY_URL.split('?wd')[0];
var html=getResCode();
//setError(domain);

if(html.indexOf('<video>')==-1){
items.push({
			title: '未搜索到相关资源',
		col_type: 'text_center_1'
   });
;}else{
var list = parseDomForArray(html, 'rss&&video');

for (var j = 0; j < list.length; j++) {

        var title = parseDomForHtml(list[j],'body&&name&&Text');

        var ids = parseDomForHtml(list[j],'body&&id&&Text');
        var note = parseDomForHtml(list[j],'body&&note&&Text');
         var last = parseDomForHtml(list[j],"body&&last&&Text");

        var typ = parseDomForHtml(list[j],'body&&type&&Text');
         var dt = parseDomForHtml(list[j],'body&&dt&&Text');
items.push({

            title: '““'+title+'””'+" "+' • '+note,         
            desc: last+' ·  '+typ+' ·  '+dt,

            url: domain+"?ac=videolist&ids="+ids+`@rule=js:var erj=fetch("hiker://files/rules/zywcj.js",{});eval(erj);SSEJ();`,
            col_type: 'text_center_1'

        });

    }
}

res.data = items;setHomeResult(res);
}else{

var net=fetch('hiker://files/rules/zywcj.js',{});
eval(net);SSEJ();}
}


//选集与简介规则
function SSEJ() {
var res = {};
var items = [];
refreshX5WebView("");
items.push({
	title: '',
    desc:'240&&float',
    url:'',
    col_type: 'x5_webview_single'
});
var html = getResCode();
try{
var pic = parseDomForHtml(html,"rss&&pic&&Text").replace("http://t.8kmm.com","https://www.wxtv.net");
eval(fetch('hiker://files/rules/zywcj.js'));
picfun();
var typ = parseDomForHtml(html,"body&&type&&Text");
if(!filter(word)){
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

if (getVar('zywlsort','1')=='1') {
var list=conts[i].split(">\n")[1].split("\n<")[0].split("#");
  }else{
var list=conts[i].split(">\n")[1].split("\n<")[0].split("#").reverse();
  }
var flag=parseDomForHtml(conts[i], "body&&dd&&flag");
if(list!=null){
items.push({
title:flag=='qdyun'?flag+" 不显示播放的需刷新一次网页才能播":flag+"    🔗"+[i+1]+'/'+conts.length+"““点击切换选集排序””",
url:"hiker://empty@lazyRule=.js:putVar('zywlsort', getVar('zywlsort','1')=='1'?'0':'1');refreshPage(false);'toast://切换成功！'",
col_type: 'text_1'
});
var url={};
for(var j = 0; j<list.length; j++){
if(list[j].split('$')[1]!=null){url=list[j].split('$')[1];}else{url=list[j].split('$')[0];}
if(MY_URL.indexOf('leduozy')!=-1){url='https://api.leduotv.com/wp-api/glid.php?vid='+url}
if(MY_URL.indexOf('bbkdj')!=-1){url='http://jx.yparse.com/index.php?url='+url}
if(MY_URL.indexOf('7kjx')!=-1){url='https://jx.xmflv.com/?url='+url}
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
if(flag=='languang'){url='https://j.languang.wfss100.com/?url='+url}
if(flag=='msp'){url='https://titan.mgtv.com.bowang.tv/player/?url='+url}
if(flag=='kdyx'||flag=='kdsx'){url='http://api.kudian6.com/jm/pdplayer.php?url='+url}
if(flag=='789pan'){url='http://789pan.hd8.pw/?url='+url}
var title=(list[j].split('$')[0].indexOf('http')!=-1?[j+1]:list[j].split('$')[0]);
items.push({
title:list[j].split('$')[0].indexOf('http')!=-1?[j+1]:list[j].split('$')[0],
url:url.replace(/\n*/g,'')+`@lazyRule=.js:/*refreshX5WebView*/eval(fetch('hiker://files/rules/zywcj.js'));lazyRu();`,
col_type: title.length>=6?'text_2':'text_3'});
   }
  }
 }
 }//
} catch(e) {}
res.data=items;
setHomeResult(res);
};

//动态解析
function lazyRu() {
var src=input.replace(/amp;/g,"").replace(/^\s*/,"");
if(src.indexOf("html")!=-1){
var fileUrl="hiker://files/rules/parse.js";
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
var fileUrl ="hiker://files/rules/pako-min.js";
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
var fileUrl="hiker://files/rules/parse.js";
eval(fetch(fileUrl,{}));
var play=yqjx.toUrl(pli);
return play!=""?play:getUrl(pli);
}else if(src.indexOf("kudian6.com")!=-1){
var html=request(src);
return html.match(/url\":.*?[\'\"](.*?)[\'\"]/)[1];
}else if(src.indexOf("789pan")!=-1){
	/*
var html=request(src);
eval(getCryptoJS());
var id = html.match(/var id=\"(.*?)\"/)[1];
var times=(new Date()).getTime()+'';
var sh= CryptoJS.MD5(base64Encode(id+times)).toString();
var purl='http://play.zk132.cn/new/play1/'+id+'%7C'+times+'%7C'+sh+'%7C'+'1'+'%7C'+'index.m3u8';
*/
return src;
}else if(src.indexOf("baipiaozy")!=-1||src.indexOf("bowang")!=-1){
refreshX5WebView(src);
return "toast://请等待加载选集！";
}else if(src.indexOf("www.bilibili.com")!=-1){
return src;
}else if(src.indexOf("alizy-")!=-1){
refreshX5WebView('http://hong.1ren.ren/?url='+src);
return "toast://请等待加载选集！";
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
};


//预处理代码
function zywpre(){
	if(!fetch('hiker://files/rules/zywset.json',{})){
var set=`{"ssmode":"0","listmod":"0","sscount":"5"}`;
writeFile("hiker://files/rules/zywset.json",set);  
 }
 
}
