/* 获取xmlhttp对象的函数　*/
function createXmlHttp() {
    var xmlhttp;
    if(window.XMLHttpRequest)
        xmlhttp = new XMLHttpRequest();
    else if(window.ActiveXObject) {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}


/* ajax从服务器文本文件获取信息　*/
function change() {
    /*
    ajax 技术使用js来获取服务器的数据,达到局部更新的效果
     */


    var xmlhttp = createXmlHttp();
    // state change 0-4
    xmlhttp.onreadystatechange = function() {
        // judge ok
        if(xmlhttp.status == 200 && xmlhttp.readyState == 4) {
            // refresh the part message
            document.getElementById("hello").innerHTML = xmlhttp.responseText;
        }

    };

    xmlhttp.open("GET", "../file/ajax_info.txt", true);
    xmlhttp.send();
}


/*
 输入提示
 */
function getMoreContents() {
    //　获取搜索框内容
    var content = document.getElementById("search");
    if(content.value == "") {
        // 输入内容为空，或者回车清空后删除提示
        clearContent();
        return;
    }

    var xmlhttp = createXmlHttp();

    // 发送数据
    var url = "search?keyword=" + escape(content.value);
    xmlhttp.open("GET", url, true);
    xmlhttp.send("");
    // alert("test1");
    // 写回调方法
    xmlhttp.onreadystatechange = function() {
        //  alert(xmlhttp.status);   // 成了　４０５　．．．不是　２００
        //  alert(xmlhttp.readyState);
        if(xmlhttp.status == 200 && xmlhttp.readyState == 4) {
            // 服务器servlet通过json格式发送数据给客户端
            // alert("....")
            var result = xmlhttp.responseText;
            var jsonobj = eval("(" + result + ")");　　// 转化json数据为普通数据
            setContent(jsonobj)
        }

    };

}

/*  设置关联数据展示函数　*/
function setContent(contents) {         //函数的参数不带var声明，函数错了，整个js都错了，函数内部某个错误不影响整体
    // 先清除之前的记录
    clearContent();

    // 设置显示位置
    setLocation();
    // 获取长度来生成相应数量的<tr><td>
    var size = contents.length;

    for(var i = 0; i < size; ++i) {
        var nextNode = contents[i]; //　代表的是json数据转js的数据第contents[i]
        // alert(nextNode);
        // 生成<tr> <td>
        var tr = document.createElement("tr");
        var td = document.createElement("td");

        // 设置<td>属性
        td.setAttribute("border", 0);
        td.setAttribute("bgcolor", "#FFFAFA");

        // 设置触碰效果
        td.onmouseover = function() {
            this.className = "mouseOver";  // 关联的css 类选择器
            this.style.cursor="pointer";
        };
        td.onmouseout = function() {
            this.className = 'mouseOut';
            // this.style.cursor="pointer";
        };

        // 实现鼠标点击一个提示时，提示会自动填入搜索框
        td.onclick = function() {
            //
            alert("hello");
            var searchValue = document.getElementById("search");
            searchValue.value = "hell";
        };

        // 显示 . 从内到外添加
        var text = document.createTextNode(nextNode);
        td.appendChild(text);
        tr.appendChild(td);
        document.getElementById("content_table_body").appendChild(tr);
    }


}


/* 清空提示函数，就是输入下一个字符得到串的提示删除前面字符串的提示 */
function clearContent() {
    // 清空<tbody>标签里面的内容
    var contentTableBody = document.getElementById("content_table_body");
    // 获取儿子数量大小
    var size = contentTableBody.childNodes.length;

    for(var i = size-1; i >= 0; --i) {
        // 删除其儿子
        contentTableBody.removeChild(contentTableBody.childNodes[i]);
    }

    // 删除边框
    document.getElementById("popDiv").style.border = "none";
}

/* 输入框失去焦点时清空提示内容 */
function searchOnBlur() {
    clearContent();
}

/* 设置关联信息的位置，变成一个框框 */
function setLocation() {
    // 关联信息的显示位置要和输入框的一致
    var content = document.getElementById("search");
    var width = content.offsetWidth; // 输入框的宽度
    var left = content["offsetLeft"]; // 到左边框的距离
    var top = content["offsetTop"] + content.offsetHeight;

    //  获取显示数据的div
    var popDiv = document.getElementById("popDiv");
    popDiv.style.border = "#fff 0.1spx solid";
    popDiv.style.left = left  + "px";
    popDiv.style.top = top + "px";
    popDiv.style.width = width + "px";
    document.getElementById("content_table").style.width = width + "px";


}
////////////   js函数没有顺序关系　　/////////