<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/7/11
  Time: 0:15
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
    <link rel="stylesheet" href="${pageContext.request.contextPath}/Manage/css/Class/search.css">
    <!-- END THEME STYLES -->
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<!-- DOC: Apply "page-header-fixed-mobile" and "page-footer-fixed-mobile" class to body element to force fixed header or footer in mobile devices -->
<!-- DOC: Apply "page-sidebar-closed" class to the body and "page-sidebar-menu-closed" class to the sidebar menu element to hide the sidebar by default -->
<!-- DOC: Apply "page-sidebar-hide" class to the body to make the sidebar completely hidden on toggle -->
<!-- DOC: Apply "page-sidebar-closed-hide-logo" class to the body element to make the logo hidden on sidebar toggle -->
<!-- DOC: Apply "page-sidebar-hide" class to body element to completely hide the sidebar on sidebar toggle -->
<!-- DOC: Apply "page-sidebar-fixed" class to have fixed sidebar -->
<!-- DOC: Apply "page-footer-fixed" class to the body element to have fixed footer -->
<!-- DOC: Apply "page-sidebar-reversed" class to put the sidebar on the right side -->
<!-- DOC: Apply "page-full-width" class to the body element to have full width page without the sidebar menu -->
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
        <div class="page-content" style="min-height:1556px">


            <!-- BEGIN PAGE HEADER-->
            <h3 class="page-title">
                查看班级 <small> 查找符合条件的班级</small>
            </h3>
            <div class="page-bar">
                <ul class="page-breadcrumb">
                    <li>
                        <i class="fa fa-home"></i>
                        <a href="/index">学管宝后台管理系统</a>
                        <i class="fa fa-angle-right"></i>
                    </li>
                    <li>
                        <a href="#">班级设置</a>
                        <i class="fa fa-angle-right"></i>
                    </li>
                    <li>
                        <a href="#">查看班级</a>
                    </li>
                </ul>
            </div>
            <!-- END PAGE HEADER-->
            <!-- BEGIN MAIN CONTENT -->
            <div class="rows">
                <div class="row">
                    <div style="width:400px;margin:0 auto">
                        <div class="portlet box purple ">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="fa fa-gift"></i> 查找条件
                                </div>
                                <div class="tools">
                                    <a href="" class="collapse" data-original-title="" title="">
                                    </a>
                                </div>
                            </div>

                            <div class="portlet-body form">
                                <div class="form-body" style="overflow: hidden">
                                    <div class="form-group">
                                        <label class="col-md-4 control-label">专业名称：</label>
                                        <div class="col-md-8">
                                            <select id="major_id" class="select2_category form-control"  tabindex="1">
                                                <option value="0">全部专业</option>
                                                <c:forEach items="${majorList}" var="major">
                                                    <option value="${major.id}">${major.name}</option>
                                                </c:forEach>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-4 control-label">班号：</label>
                                        <div class="col-md-8">
                                            <select id="class_num" class="select2_category form-control"  tabindex="1">
                                                <option value="">全部班级</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-4 control-label">开班年份：</label>
                                        <div class="col-md-3">
                                            <select id="year_start" class="select2_category form-control" style="width:80px">
                                            </select>
                                        </div>
                                        <label class="col-md-1 control-label">到</label>
                                        <div class="col-md-3">
                                            <select id="year_end" class="select2_category form-control" style="width:80px"  >
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-actions right1">
                                    <a id="submit_search" class="btn green">查询班级</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <!-- 班级 -->
                        <div class="portlet light">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class=" icon-bubbles"></i>
                                    <span class="caption-subject font-green-sharp bold uppercase">查询结果</span>
                                    <span class="caption-helper">符合条件的班级...</span>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <div class="table-container">
                                    <table class="table table-striped table-bordered table-hover" id="class_ajax_table">
                                        <thead>
                                        <tr role="row" class="heading">
                                            <th width="5%">
                                                序号
                                            </th>
                                            <th width="100">
                                                开设年份
                                            </th>
                                            <th width="50">
                                                学制
                                            </th>
                                            <th>
                                                专业名称
                                            </th>
                                            <th>
                                                班号
                                            </th>
                                            <th >
                                                班级QQ群
                                            </th>
                                            <th >
                                                学生人数
                                            </th>
                                            <th width="166">
                                                操作
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody id="tabelDataTbody">
                                            <c:forEach items="${classPages.list}" var="c" varStatus="i">
                                                <tr>
                                                    <td>${i.count}</td>
                                                    <td>${c.time}</td>
                                                    <td>${c.realMajor.schoolsystem}</td>
                                                    <td>${c.realMajor.name}</td>
                                                    <td>${c.name}</td>
                                                    <td>${c.qqgroup}</td>
                                                    <td>${c.studentnumber}</td>
                                                    <td>
                                                        <a href="${pageContext.request.contextPath}/class/update?id=${c.id}" class="btn btn-xs default"><i class="fa fa-pencil"></i> 修改</a>
                                                        <a href="javascript:if(confirm('确定删除吗？')){location='${pageContext.request.contextPath}/class/delete?id=${c.id}'}"  class="btn btn-xs btn-danger del-class"><i class="fa fa-trash-o"></i> 删除</a>
                                                    </td>
                                                </tr>
                                            </c:forEach>
                                        </tbody>
                                    </table>
                                    <div id="pageHelper" style="margin-left: 400px;">
                                        <nav aria-label="Page navigation">
                                            <ul class="pagination">
                                                <c:choose>
                                                    <c:when test="${classPages.page == 1}">
                                                        <li class="disabled">
                                              <span>
                                                <span aria-hidden="true">&laquo;</span>
                                              </span>
                                                        </li>
                                                    </c:when>
                                                    <c:otherwise>
                                                        <li>
                                                            <a  href="${pageContext.request.contextPath}/class/find?page=${classPages.page - 1}" aria-label="Previous">
                                                                <span aria-hidden="true">&laquo;</span>
                                                            </a>
                                                        </li>
                                                    </c:otherwise>
                                                </c:choose>
                                                <c:forEach varStatus="page" begin="1" end="${classPages.totalPage}">
                                                    <li <c:if test="${classPages.page == page.count}">class="active"</c:if> ><a href="/class/find?page=${page.count}">${page.count}</a></li>
                                                </c:forEach>
                                                <c:choose>
                                                    <c:when test="${classPages.page == classPages.totalPage}">
                                                        <li class="disabled">
                                              <span>
                                                <span aria-hidden="true">&raquo;</span>
                                              </span>
                                                        </li>
                                                    </c:when>
                                                    <c:otherwise>
                                                        <li>
                                                            <a href="${pageContext.request.contextPath}/class/find?page=${classPages.page + 1}" aria-label="Next">
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
            <!-- END MAIN CONTENT -->

        </div>

    </div>
    <!-- END CONTENT -->

</div>
<!-- END CONTAINER -->
<!-- BEGIN FOOTER -->
<%@ include file="../Common/footer.jsp" %>
<!-- END FOOTER -->
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
<script type="text/javascript" src="${pageContext.request.contextPath}/Assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/Assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<!-- END PAGE LEVEL PLUGINS -->
<!-- BEGIN PAGE LEVEL SCRIPTS -->
<script src="${pageContext.request.contextPath}/Assets/global/scripts/metronic.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/admin/layout/scripts/layout.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/admin/layout/scripts/quick-sidebar.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/admin/layout/scripts/demo.js" type="text/javascript"></script>
<!-- END PAGE LEVEL SCRIPTS -->
<script src="${pageContext.request.contextPath}/Assets/my/DataTable.js" type="text/javascript"></script>
<%@ include file="../Common/js_common.jsp" %>
<script src="${pageContext.request.contextPath}/Manage/js/Class/search.js" type="text/javascript"></script>
<!-- END JAVASCRIPTS -->
</body>
<!-- END BODY -->
</html>
