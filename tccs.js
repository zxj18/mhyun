<!doctype html>
<html lang="zh">
 <head> 
  <meta charset="UTF-8"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no"> 
  <title>发粪涂墙</title> 
  <link href="http://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <script src="https://libs.baidu.com/jquery/1.11.3/jquery.min.js"></script>
  <style>
* {
	box-sizing:border-box;
}
   
}
   div.search {
	padding:10px 0;
}
  form {
	position:relative;
	width:96%;
	margin:0 auto;
}
  input,button {
	border:none;
	outline:none;
}
  input {
	width:100%;
	height:42px;
	padding-left:13px;
}
  button {
	height:42px;
	width:42px;
	cursor:pointer;
	position:absolute;
}

        .bar1 {background: #FFFFFF;}
        .bar1 input {
            border: 2px solid #1db69a;
            border-radius: 5px;
            background: #FFFFFF;
            color: #000000;
        }
        .bar1 button {
            top: 0;
            right: 0;
            background: #1db69a;
            border-radius: 0 5px 5px 0;
        }
        .bar1 button:before {
            content: "\f002";
            font-family: FontAwesome;
            font-size: 16px;
            color: #F9F0DA;
        }
    </style>
 </head>
 <body style="overflow:hidden;"> 
  <div class="search bar1"> 
  <form>
    <input type="text" autocomplete="off" class="input" id="search-input" placeholder="搜索内容 . . ." onkeydown="if(event.keyCode==13){up()}">
    <button type="submit" id="search-ok"></button>
    </form>
   </div> 
  <script>
      function up(){
         var k=document.getElementById("search-input").value

         var work=fy_bridge_app.fetch("hiker://files/searchwork.json");
         if(work==""){
             work=[];
         }else{
             work=JSON.parse(work);
         }
         if(work.length<11&&k){
             work.unshift(k);
             work=Array.from(new Set(work))
             fy_bridge_app.writeFile("hiker://files/searchwork.json",JSON.stringify(work));
         }
         fy_bridge_app.putVar("searchKeyword",k);
         fy_bridge_app.refreshPage(true);
     }
     document.getElementById("search-ok").onclick=up
     if(fy_bridge_app.getVar("searchKeyword")!=""){
         document.getElementById("search-input").placeholder="点击搜索返回首页";
     }
     </script>  
 </body>
</html>