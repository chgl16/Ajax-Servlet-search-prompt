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
    <script src="scripts/ajax.js"></script>  <!-- 引入ajax -->

    <link rel="stylesheet" type="text/css" href="css/main.css" /> <!-- 引入 css 单标签元素　是rel不是ref -->

</head>
<body>
<div id="hello">Hello World!</div>
搜索: &nbsp;
<input type="search" id="in1" name="search" placeholder="输入搜索内容..." />   <!-- placeholder属性是提示输入内容-->
<!-- in1 是ｉｎｐｕｔ标签，没有innerHTML -->
<input type="button" id="tosearch" name="tosearch" value="开始" onclick="search()" />
<hr/>

<%

%>
</body>
</html>
