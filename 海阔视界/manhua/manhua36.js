function ComicDetail(){
    js:
    let res = {};
    let d = [];
    let rescode = getResCode();
    d.push({
        title:parseDomForHtml(rescode,"h1,1&&Text"),
        desc:parseDomForHtml(rescode,".info-list,0&&Text")+"\n"+parseDomForHtml(rescode,".info-list,2&&Text")+"\n"+parseDomForHtml(rescode,".info-list,3&&Text"),
        pic_url:"https://mhimgcdn.cdn.bcebos.com"+parseDomForHtml(rescode,".coverbox&&img&&data-src"),
        url:"https://mhimgcdn.cdn.bcebos.com"+parseDomForHtml(rescode,".coverbox&&img&&data-src"),
        col_type:"pic_1_card"
    },{
        title:"<span style='color:#549688'>&emsp;&emsp;"+parseDomForHtml(rescode,".info-list,4&&Text").replace("【展开】","")+"</span>",
        col_type:"rich_text",
    },{
        col_type:"line",
    });
    let sectionlist = parseDomForArray(rescode,".section-list,1&&li");
    for(let j = 0;j<sectionlist.length;j++){
        d.push({
           title:parseDomForHtml(sectionlist[j],"a&&Text"), 
           url:"http://www.xazhpm.com"+parseDomForHtml(sectionlist[j],"a&&href"), 
           col_type:"text_2"
        })
    }
    res.data = d;
    setHomeResult(res);
}