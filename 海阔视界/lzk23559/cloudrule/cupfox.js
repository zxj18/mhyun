function cuphome(){
var spl=MY_URL.split('##');
var lin='https://api.jackeriss.com/api/v1/recommend/?subject='+spl[1]+'&page_start='+spl[2]+'&page_limit=10';
//var lin='https://api.jackeriss.com/api/v1/recommend/?subject='+spl[1]+'&page_start='+spl[2]+'&page_limit=24';
var json=JSON.parse(request(lin,{}));
var self=JSON.parse(getRule()).title;
//setError(self);
for (var i = 0; i < json.subjects.length; i++) {

    var r = {};

    var j = json.subjects[i];

    r.title = j.title;
    r.url ='hiker://search?s='+j.title+'&rule='+self;
    r.pic_url = j.cover+'@Referer='+j.cover;

    r.desc = j.rate;

    if (r.title !== null && r.title !== undefined && r.title !== '') d.push(r);

}

}
function cupss(){
var spl=MY_URL.split('##');
//var lin='https://api2.jackeriss.com/api/v1/search/?text='+spl[1]+'&type=0&from='+spl[2]+'&size=20';
var lin = 'https://api.jackeriss.com/api/v1/search/?text='+spl[1]+'&type=0&from='+spl[2]+'&size=20';
var pn=spl[2]/20+1;
var urlo=JSON.parse(request(lin,{}));
var urlt=JSON.parse(fetch(lin.replace('type=0','type=1'),{}));

if(urlo.resources.length > 0){
d.push({
			title: '♥当前第'+pn+'页',
			col_type: 'text_center_1'
		});

for (var i = 0; i < urlo.resources.length; i++) {

    var r = {};

    var j = urlo.resources[i];

    r.title = j.text.replace(/\<.*?\>/g,'');
    r.url =j.url;

    r.desc = j.website+'      在线搜索结果';

    if (r.title !== null && r.title !== undefined && r.title !== '') d.push(r);

}
}

if(urlt.resources.length > 0){
for (var i2 = 0; i2 < urlt.resources.length; i2++) {

    var k = {};

    var j2 = urlt.resources[i2];

    k.title = j2.text.replace(/\<.*?\>/g,'');
    k.url =j2.url;

    k.desc = j2.website+'      下载搜索结果';

    if (k.title !== null && k.title !== undefined && k.title !== '') d.push(k);

}
}

}