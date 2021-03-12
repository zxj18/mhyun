let res = {};
let d = [];
let rescode = getResCode();
d.push({
    title:parseDomForHtml(rescode,".comic-titles,0&&Text"),
    pic_url:parseDomForHtml(rescode,".comic-cover&&img&&src"),
    desc:parseDomForHtml(rescode,".table&&tr,9&&Text")+"\n"+parseDomForHtml(rescode,".table&&tr,7&&Text")+"\n"+parseDomForHtml(rescode,".table&&tr,10&&Text"),
    url:parseDomForHtml(rescode,".comic-cover&&img&&src"),
    col_type:"movie_1_vertical_pic"
});
d.push({
        title:"<span style='color:#4D0E87'>"+parseDomForHtml(rescode,".comic_story&&Text").replace("：","<br>&emsp;&emsp;").replace("。。欢迎您到漫画猫畅快阅读","")+"</span>",
        col_type:"rich_text",
    },{
        col_type:"line_blank",
});
let comic_book_list = parseDomForArray(rescode,"#comic-book-list,0&&.tab-pane");
let chapter_list;
for(let i = 0;i<comic_book_list.length;i++){
    d.push({
        title:"‘‘"+parseDomForHtml(comic_book_list[i],"h2&&Text")+"’’",
        url:'hiker://empty@lazyRule=.js:"toast://别点了别点了"',
        col_type:"text_center_1"
    })
    chapter_list = parseDomForArray(comic_book_list[i],".links-of-books&&li");
    for(let j = chapter_list.length-1;j>=0;j--){
        d.push({
            title:parseDomForHtml(chapter_list[j],"a&&Text"),
            url:parseDomForHtml(chapter_list[j],"a&&href")+'@lazyRule=.js:var jsonfile = "hiker://files/manhua/manhuamao_decrypt.js";var detail = fetch(jsonfile);if(!detail){ detail = fetch("https://gitee.com/mofeibai/hiker_info/raw/master/manhuatai/manhuamao_decrypt.js",{});writeFile(jsonfile,detail);}eval(detail);"pics://"+pics.join("&&");',
            col_type:"text_2"
        })
    }
}
res.data = d;
setResult(res);