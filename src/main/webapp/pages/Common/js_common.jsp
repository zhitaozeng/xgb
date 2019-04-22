<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/7/5
  Time: 15:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<script>
    //metronic 初始化
    jQuery(document).ready(function() {
        Metronic.init(); // init metronic core componets
        Layout.init(); // init layout
        Demo.init(); // init demo features
    });
</script>
<script src="${pageContext.request.contextPath}/Manage/js/Common/tools.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Manage/js/Common/rpc.js" type="text/javascript"></script>
