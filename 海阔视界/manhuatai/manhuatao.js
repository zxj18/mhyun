let res = {};
let d = [];
let rescode = getResCode();
d.push({
    title:'<strong><h3 style="text-align:center;"><font color="#3daade">'+parseDomForHtml(rescode,"h1&&Text")+"</font></h3></strong>"+'<span style="color:#893342">'+'🟣'+parseDomForHtml(rescode,".comic_deCon_liO&&li,0&&Text")+'<br>🔵'+parseDomForHtml(rescode,".comic_deCon_liO&&li,1&&Text")+'<br>🟡'+parseDomForHtml(rescode,".comic_deCon_liO&&li,2&&Text")+'<br>🟠'+parseDomForHtml(rescode,".comic_deCon_liO&&li,3&&Text")+'</span>',
    col_type:"rich_text"
},{
    col_type:"line"
},{
    title:"<span style='color:#4A3E87'>&emsp;&emsp;"+parseDomForHtml(rescode,".comic_deCon_d&&Text")+"</span>",
        col_type:"rich_text",
});
d.push({
    col_type:"line_blank"
});
let comic_book_list = parseDomForArray(rescode,"#chapter-list-1&&li");
for(let i = 0;i<comic_book_list.length;i++){
    d.push({
        title:parseDomForHtml(comic_book_list[i],".list_con_zj&&Text"),
        url:"https://www.manhuatao.com"+parseDomForHtml(comic_book_list[i],"a&&href")+'@lazyRule=.js:let rescode =parseDomForHtml(fetch(input,{}),"body&&script,0&&Html");let imgcode = "pic=["+rescode.split("[")[1].split("]")[0]+"]";eval(imgcode);let pics = pic.map(x => "https://res.nbhbzl.com//" + x +"@Referer=https://www.manhuatao.com/@User-Agent=Windows") ;"pics://"+pics.join("&&");',
        col_type:"text_2"
    })
}
res.data = d;
setResult(res);

