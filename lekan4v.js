function lekanhome(){
var spl=MY_URL.split('##');
var html = request('https://4v0r.cn/vodshow/'+spl[1]+'--------'+spl[2]+'---/');
var list = parseDomForArray(html,'.myui-vodlist&&li');
    for (var i in list) {
        var title = parseDomForHtml(list[i], 'a&&title');
        var img = parseDom(list[i], '.lazyload&&data-original');
        var url = parseDomForHtml(list[i], 'a&&href');
        var desc = parseDomForHtml(list[i], '.pic-text||span&&Text');
        items.push({
            title: title,
            pic_url: img+'@Referer='+img,
            url: 'https://4v0r.cn'+url,
            desc: desc
        });
    }
};
function lekansearch(){
var spl=MY_URL.split('#@#');
var html = request('https://4v0r.cn/vodsearch/'+spl[1]+'----------'+spl[2]+'---/');
var list = parseDomForArray(html,'.myui-vodlist__media&&li');
    for (var i in list) {
        var title = parseDomForHtml(list[i], 'a&&title');
        var img = parseDom(list[i], '.lazyload&&data-original');
        var url = parseDomForHtml(list[i], 'a&&href');
        var desc = parseDomForHtml(list[i], '.pic-text&&Text');
        var con = parseDomForHtml(list[i], '.detail--h4&&Text');
        items.push({
            title: title,
            img: img+'@Referer='+img,
            url: 'https://4v0r.cn'+url,
            desc: desc,
            content: con
        });
    }
};
function lekanerji(){
var html=getResCode();
var tabs=parseDomForArray(html,'body&&.nav-tabs&&li');
var conts=parseDomForArray(html,'body&&.myui-content__list');
var thumb = parseDom(html, ".myui-content__thumb&&.lazyload&&data-original");
d.push({
    title: '剧情简介：'+'    共'+conts.length+'条线路',
    desc:parseDomForHtml(html, ".myui-content__detail&&p,-1&&Text"),
    pic_url:thumb,
    url:thumb,
	col_type: 'pic_1'
});

for(var i in conts){
  var list=parseDomForArray(conts[i],'body&&a');
  if(list!=null){
		d.push({
			title:parseDomForHtml(tabs[i], "a&&Text"),
			col_type: 'text_1'
		});
		for(var j in list){
			d.push({
				title:parseDomForHtml(list[j], "a&&Text"),
      url:parseDom(list[j], "a&&href")+`@lazyRule=.js:eval(getVar('xyqlekan'));lekanlazy();`,
      col_type: 'text_2'
			});
   }
  }
}
};
function lekanlazy(){
var cook=base64Decode(getVar('lkyscook'));
var get=fetch(input,{headers:{"User-Agent":MOBILE_UA,"Referer":"https://4v0r.cn/","Cookie":cook}});
var js=parseDomForHtml(get,".embed-responsive&&script&&Html").replace(/player_.*?={/,'player_data={');
eval(js);
var fro=player_data.from;
var urll=player_data.url;
//m3u8直链
if(/m3u8/.test(urll)){
return urll;}
//哔哩
else if(fro=='bilibili'){
return 'https://www.murl.us/?url='+urll;}
//需要解析的
else{
	try{
//取html网页
if(/html/.test(urll)&&/http/.test(urll)){
var jk=request('https://4v0r.cn/static/player/'+fro+'.js',{}).match(/src=\"(.*?)\'/)[1];
var jiek=jk+urll;
var html=request(jiek,{headers:{"Referer":"https://4v0r.cn/"}})
}else{
var jvs = parseDom(get,".embed-responsive&&script,1&&src");
var jso=request(jvs,{}).match(/player_list=(.*?),MacPlayerConfig/)[1];
eval("json="+jso);
var pl=eval("json."+fro+".parse");
var jiek=pl+urll;
var html=request(jiek,{headers:{"Referer":"https://4v0r.cn/"}})
};//结束取html网页
//处理无法解析的
if(html.indexOf('片源无法解析')!=-1){
return 'toast://片源无法解析也无法播放哦~';}
//取播放
else{
if(!fetch("hiker://files/rules/xyq/token.js",{})){
var fileUrl=fetch("https://gitee.com/lzk23559/public_folder/raw/master/token.js",{});
writeFile("hiker://files/rules/xyq/token.js",fileUrl);
eval(fileUrl);}
else{
var fileUrl=fetch("hiker://files/rules/xyq/token.js",{});
eval(fileUrl)
};
if(tkurl.indexOf('url=')!=-1){
return tkurl.split('url=')[1];
}else if(tkurl.indexOf('mgtv')!=-1){
return tkurl+';{Referer@https://www.mgtv.com/}';
}else{
return tkurl}
}//结束取播放
}catch(e){return urll}
}//结束需要解析

};
function lekanycl(){
var login=JSON.parse(fetchCookie('https://4v0r.cn/user/login.html', {headers:{'User-Agent':MOBILE_UA,'Content-Type':'application/x-www-form-urlencoded','Origin':'https://4v0r.cn'},body:cs,method:'POST',withHeaders:true})).join(';');
var b64E=base64Encode(login);
putVar2('lkyscook',b64E);
};