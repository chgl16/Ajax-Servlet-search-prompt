function search() {
    /*
    ajax 技术使用js来获取服务器的数据,达到局部更新的效果
     */
    var xmlhttp = null;
    if(window.XMLHttpRequest) {
        // code for IE7+, Firefox,Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject();
        // code for IE5-6
    }
    // state change 0-4
    xmlhttp.onreadystatechange = function() {
        // judge ok
        if(xmlhttp.status == 200 && xmlhttp.readyState == 4) {
            // refresh the part message
            document.getElementById("hello").innerHTML = xmlhttp.responseText;
        }

    }

    xmlhttp.open("GET", "../file/ajax_info.txt", true);
    xmlhttp.send();
}


