<%@ page language="java" contentType="text/html; charset=utf-8"%> <!-- %,@要连接一起 -->
<!-- 不加这个ｊｓｐ头会中文乱码，即便ＨＴＭＬ便签声明了，但是这是ｊｓｐ文件，所以要声明　-->
<!DOCTYPE html>
<html>
<head>
    <title>webDemo1</title>
    <meta content="text/html" charset="utf-8" />
    <meta name="author" content="Lin" />
    <meta name="description" content="webDemo1" />
    <meta name="keywords" content="ajax,jsp,maven web" />
    <script src="scripts/index-ajax.js"></script>  <!-- 引入ajax -->

    <link rel="stylesheet" type="text/css" href="styles/main.css" /> <!-- 引入 css 单标签元素　是rel不是ref -->

</head>
<body>
<!-- ajax从服务器文本获取数据　-->
<div id="hello">Hello World!</div>
<!-- in1 是ｉｎｐｕｔ标签，没有innerHTML -->
<input type="button" id="change" name="change" value="改变" onclick="change()" />
<hr/>
<hr/>

<!-- 搜索框自能提示，ajax发送数据到服务器，服务器响应给js -->
<div id="search_block">
    <input type="search" id="mysearch" name="search" placeholder="输入搜索内容..." />   <!-- placeholder属性是提示输入内容-->
    <button type="button" id="mybutton">搜索</button>
</div>
<%

%>
</body>
</html>
