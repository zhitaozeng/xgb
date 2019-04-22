<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/7/9
  Time: 20:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<!--
Template Name: Metronic with Continuing Education
Version: 1.0
Author: TinyJian - Final Lab in Computer&Communication
Website: http://finalab.com & http://www.csust.edu.cn/pub/cslg/jgsz/yxsz/jsjytxgcxy/
Contact: For Secret
Purchase: For Secret
-->
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en" class="no-js">
<!--<![endif]-->
<!-- BEGIN HEAD -->
<head>
    <meta charset="utf-8"/>
    <title>学管宝后台管理系统</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    <meta content="" name="description"/>
    <meta content="" name="author"/>
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="${pageContext.request.contextPath}/Assets/global/css/gfonts1.css" rel="stylesheet" type="text/css"/>
    <link href="${pageContext.request.contextPath}/Assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
    <link href="${pageContext.request.contextPath}/Assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css"/>
    <link href="${pageContext.request.contextPath}/Assets/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link href="${pageContext.request.contextPath}/Assets/global/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css"/>
    <link href="${pageContext.request.contextPath}/Assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css" rel="stylesheet" type="text/css"/>
    <!-- END GLOBAL MANDATORY STYLES -->
    <!-- BEGIN PAGE LEVEL PLUGIN STYLES -->
    <link href="${pageContext.request.contextPath}/Assets/global/plugins/bootstrap-daterangepicker/daterangepicker-bs3.css" rel="stylesheet" type="text/css"/>
    <link href="${pageContext.request.contextPath}/Assets/global/plugins/fullcalendar/fullcalendar.min.css" rel="stylesheet" type="text/css"/>
    <link href="${pageContext.request.contextPath}/Assets/global/plugins/jqvmap/jqvmap/jqvmap.css" rel="stylesheet" type="text/css"/>
    <!-- END PAGE LEVEL PLUGIN STYLES -->
    <!-- BEGIN PAGE STYLES -->
    <link href="${pageContext.request.contextPath}/Assets/admin/pages/css/tasks.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/Assets/global/plugins/select2-4.0.3/dist/css/select2.min.css"/>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/Assets/global/plugins/datatables/extensions/Scroller/css/dataTables.scroller.min.css"/>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/Assets/global/plugins/datatables/extensions/ColReorder/css/dataTables.colReorder.min.css"/>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/Assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.css"/>

    <!-- END PAGE STYLES -->
    <!-- BEGIN THEME STYLES -->
    <!-- DOC: To use 'rounded corners' style just load 'components-rounded.css' stylesheet instead of 'components.css' in the below style tag -->
    <link href="${pageContext.request.contextPath}/Assets/global/css/components.css" id="style_components" rel="stylesheet" type="text/css"/>
    <link href="${pageContext.request.contextPath}/Assets/global/css/plugins.css" rel="stylesheet" type="text/css"/>
    <link href="${pageContext.request.contextPath}/Assets/admin/layout/css/layout.css" rel="stylesheet" type="text/css"/>
    <link href="${pageContext.request.contextPath}/Assets/admin/layout/css/themes/light2.css" rel="stylesheet" type="text/css" id="style_color"/>
    <link href="${pageContext.request.contextPath}/Assets/admin/layout/css/custom.css" rel="stylesheet" type="text/css"/>
    <!-- END THEME STYLES -->
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class="page-header-fixed page-quick-sidebar-over-content page-style-square">
<!-- BEGIN HEADER -->
<%@ include file="../Common/header.jsp" %>
<!-- END HEADER -->
<div class="clearfix">
</div>
<!-- BEGIN CONTAINER -->
<div class="page-container">
    <!-- BEGIN SIDEBAR -->

    <%@ include file="../Common/sidebar.jsp" %>

    <!-- END SIDEBAR -->
    <!-- BEGIN CONTENT -->
    <div class="page-content-wrapper">
        <div class="page-content" style="min-height:800px">

            <!-- BEGIN PAGE HEADER-->
            <h3 class="page-title">
                专业管理 <small> 管理所有专业和班级</small>
            </h3>
            <div class="page-bar">
                <ul class="page-breadcrumb">
                    <li>
                        <i class="fa fa-home"></i>
                        <a href="/index">日常管理系统</a>
                        <i class="fa fa-angle-right"></i>
                    </li>
                    <li>
                        <a href="#">专业设置</a>
                        <i class="fa fa-angle-right"></i>
                    </li>
                    <li>
                        <a href="#">专业管理</a>
                    </li>
                </ul>
            </div>
            <!-- END PAGE HEADER-->
            <!-- BEGIN MAIN CONTENT -->
            <div class="rows">
                <div class="row">

                    <!-- 当前学年所有专业 -->
                    <div class="col-md-10 col-md-offset-1 portlet box red-intense">
                        <div class="portlet-title">
                            <div class="caption">
                                <i class="fa fa-globe"></i> 某年开设的所有专业及其班级
                            </div>

                            <div class="tools">
                                <a href="javascript:;" class="collapse" data-original-title="" title="">
                                </a>
                                <a href="" class="fullscreen" data-original-title="" title="">
                                </a>
                                <a href="javascript:;" class="reload" id="reload" data-original-title="" title="">
                                </a>
                            </div>
                            <div class="actions">

                            </div>
                        </div>
                        <div class="portlet-body">

                            <table class="table table-striped table-bordered table-hover" id="tb_majorList">
                                <tr>
                                    <th>
                                        序号
                                    </th>

                                    <th >
                                        专业名称
                                    </th>
                                    <th >
                                        学制
                                    </th>
                                    <th width="188px" class="hidden-xs">
                                        操作
                                    </th>
                                </tr>
                                <c:forEach items="${majorPages.list}" var="major" varStatus="str">
                                    <tr>
                                        <td>${str.count}</td>
                                        <td>${major.name}</td>
                                        <td>${major.schoolsystem}</td>
                                        <td>
                                            <a href="${pageContext.request.contextPath}/major/update?id=${major.id}" class="btn btn-xs default"><i class="fa fa-pencil"></i> 修改</a>
                                            <a href="javascript:if(confirm('确定删除吗？')){location='${pageContext.request.contextPath}/major/delete?id=${major.id}'}"  class="btn btn-xs btn-danger del-class"><i class="fa fa-trash-o"></i> 删除</a>
                                        </td>
                                    </tr>
                                </c:forEach>
                            </table>
                            <div style="margin-left: 400px;">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination">
                                        <c:choose>
                                            <c:when test="${majorPages.page == 1}">
                                                <li class="disabled">
                                          <span>
                                            <span aria-hidden="true">&laquo;</span>
                                          </span>
                                                </li>
                                            </c:when>
                                            <c:otherwise>
                                                <li>
                                                    <a href="${pageContext.request.contextPath}/major/find?page=${majorPages.page - 1}" aria-label="Previous">
                                                        <span aria-hidden="true">&laquo;</span>
                                                    </a>
                                                </li>
                                            </c:otherwise>
                                        </c:choose>
                                        <c:forEach varStatus="page" begin="1" end="${majorPages.totalPage}">
                                            <li <c:if test="${majorPages.page == page.count}">class="active"</c:if> ><a href="/major/find?page=${page.count}">${page.count}</a></li>
                                        </c:forEach>
                                        <c:choose>
                                            <c:when test="${majorPages.page == majorPages.totalPage}">
                                                <li class="disabled">
                                          <span>
                                            <span aria-hidden="true">&raquo;</span>
                                          </span>
                                                </li>
                                            </c:when>
                                            <c:otherwise>
                                                <li>
                                                    <a href="${pageContext.request.contextPath}/major/find?page=${majorPages.page + 1}" aria-label="Next">
                                                        <span aria-hidden="true">&raquo;</span>
                                                    </a>
                                                </li>
                                            </c:otherwise>
                                        </c:choose>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    </div>
    <!-- END CONTENT -->

</div>
<!-- END CONTAINER -->
<%@ include file="../Common/footer.jsp" %>
<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
<!-- BEGIN CORE PLUGINS -->
<!--[if lt IE 9]>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/respond.min.js"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/excanvas.min.js"></script>
<![endif]-->
<script src="${pageContext.request.contextPath}/Assets/global/plugins/jquery.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/jquery-migrate.min.js" type="text/javascript"></script>
<!-- IMPORTANT! Load jquery-ui-1.10.3.custom.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->
<script src="${pageContext.request.contextPath}/Assets/global/plugins/jquery-ui/jquery-ui-1.10.3.custom.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/jquery.blockui.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/jquery.cokie.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js" type="text/javascript"></script>
<!-- END CORE PLUGINS -->
<!-- BEGIN PAGE LEVEL PLUGINS -->
<script type="text/javascript" src="${pageContext.request.contextPath}/Assets/global/plugins/select2-4.0.3/dist/js/select2.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/Assets/global/plugins/datatables/media/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/Assets/global/plugins/datatables/extensions/TableTools/js/dataTables.tableTools.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/Assets/global/plugins/datatables/extensions/ColReorder/js/dataTables.colReorder.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/Assets/global/plugins/datatables/extensions/Scroller/js/dataTables.scroller.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/Assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js"></script>
<script src="${pageContext.request.contextPath}/Assets/global/scripts/metronic.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/admin/layout/scripts/layout.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/admin/layout/scripts/demo.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Manage/js/Common/TableAdvance_details.js" type="text/javascript"></script>
<!-- END PAGE LEVEL SCRIPTS -->
<%@ include file="../Common/js_common.jsp" %>
</body>
<!-- END BODY -->
</html>
