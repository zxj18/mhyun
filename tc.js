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

        /*搜索框1*/
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

        /*搜索框2*/
        .bar2 {background: #FFFFFF;}
        .bar2 input, .bar2 button {
            border-radius: 3px;
        }
        .bar2 input {
            background: #F9F0DA;
        }
        .bar2 button {
            height: 26px;
            width: 26px;
            top: 8px;
            right: 8px;
            background: #F15B42;
        }
        .bar2 button:before {
            content: "\f105";
            font-family: FontAwesome;
            color: #F9F0DA;
            font-size: 20px;
            font-weight: bold;
        }

        /*搜索框3*/
        .bar3 {background: #FFFFFF;}
        .bar3 form {background: #A3D0C3;}
        .bar3 input, .bar3 button {
            background: transparent;
        }
        .bar3 button {
            top: 0;
            right: 0;
        }
        .bar3 button:before {
            content: "\f002";
            font-family: FontAwesome;
            font-size: 16px;
            color: #F9F0DA;
        }

        /*搜索框4*/
        .bar4 {background: #FFFFFF;}
        .bar4 form {
            background: #F9F0DA;
            border-bottom: 2px solid #BE290E;
        }
        .bar4 input, .bar4 button {
            background: transparent;
        }
        .bar4 button {
            top: 0;
            right: 0;
        }
        .bar4 button:before {
            content: "\f178";
            font-family: FontAwesome;
            font-size: 20px;
            color: #be290e;
        }

        /*搜索框5*/
        .bar5 {background: #FFFFFF;}
        .bar5 input, .bar5 button {
            background: transparent;
        }
        .bar5 input {
            border: 2px solid #F9F0DA;
        }
        .bar5 button {
            top: 0;
            right: 0;
        }
        .bar5 button:before {
            content: "\f002";
            font-family: FontAwesome;
            font-size: 16px;
            color: #F9F0DA;
        }
        .bar5 input:focus {
            border-color: #311c24
        }

        /*搜索框6*/
        .bar6 {background: #FFFFFF;}
        .bar6 input {
            border: 2px solid  #1db69a;
            border-radius: 5px;
            background: transparent;
            top: 0;
            right: 0;
        }
        .bar6 button {
            background:  #1db69a;
            border-radius: 0 5px 5px 0;
            width: 60px;
            top: 0;
            right: 0;
        }
        .bar6 button:before {
            content: "搜索";
            font-size: 13px;
            color: #FFFFFF;
        }


        /*搜索框7*/
        .bar7 {background: #FFFFFF;}
        .bar7 form {
            height: 42px;
        }
        .bar7 input {
            width: 250px;
            border-radius: 42px;
            border: 2px solid #324B4E;
            background: #F9F0DA;
            transition: .3s linear;
            float: right;
        }
        .bar7 input:focus {
            width: 300px;
        }
        .bar7 button {
            background: none;
            top: -2px;
            right: 0;
        }
        .bar7 button:before{
          content: "\f002";
          font-family: FontAwesome;
          color: #324b4e;
        }

        /*搜索框8*/
        .bar8 {background: #FFFFFF;}
        .bar8 form {
            height: 42px;
        }
        .bar8 input {
            width: 0;
            padding: 0 42px 0 15px;
            border-bottom: 2px solid transparent;
            background: transparent;
            transition: .3s linear;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 2;
        }
        .bar8 input:focus {
            width: 300px;
            z-index: 1;
            border-bottom: 2px solid #F9F0DA;
        }
        .bar8 button {
            background: #683B4D;
            top: 0;
            right: 0;
        }
        .bar8 button:before {
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