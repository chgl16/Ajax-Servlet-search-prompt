package top.chgl16.services;

/* servlet和json没有自带，需要下载依赖 */
import jdk.nashorn.internal.runtime.JSONListAdapter;
import net.sf.json.JSONArray;
import netscape.javascript.JSObject;

import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;
import java.util.ArrayList;


/**
 * @Lin
 * ajax　后台代码
 * 1. 获取ajax发送过来的keyword
 * 2. 找到合适的数据返回
 */
public class SearchServlet extends HttpServlet {

    // 数据集
    static List<String> datas = new ArrayList<String>();
    static {
        datas.add("ajax");
        datas.add("ajax post");
        datas.add("ajax get");
        datas.add("ajax servlet");
        datas.add("chen guanlin");
        datas.add("jsp servlet");
        datas.add("mysql");
        datas.add("json");
        datas.add("chgl16");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // super.doGet(request, response);   //////////// 必须注解掉，不然４０５错误

        // 设置请求和响应编码
        request.setCharacterEncoding("utf-8");
        response.setCharacterEncoding("utf-8");

        System.out.println("服务器servlet:");

        // 获取客户端传送的keyword
        String keyword = request.getParameter("keyword");

        /* 不去掉的话，不输入就显示所以了
        if(keyword == null) {
            keyword = "";
        }
        */
        // 输出获取到的关键词
        System.out.println("keyword " + keyword);

        // 获得关键字后处理，得到关联数据
        List<String> listData = new ArrayList<String>();
        listData = getData(keyword);

        // 给客户端放回关联数据的json格式
        System.out.println("关联数据json格式：　" + JSONArray.fromObject(listData));

        // 将数据传回客户端
        response.getWriter().write(JSONArray.fromObject(listData).toString());  // json格式在write()函数里面要装换成String类型

        System.out.println("----------------------------------------------------------------------------------------------");
    }


    public List<String> getData(String keyword) {
        List<String> list = new ArrayList<String>();
        for(String s : datas) {
            if(s.contains(keyword)) {
                list.add(s);
            }
        }
        return list;
    }
}