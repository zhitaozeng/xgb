<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/7/5
  Time: 14:59
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
                更新专业 <small> 更新一个专业</small>
            </h3>
            <div class="page-bar">
                <ul class="page-breadcrumb">
                    <li>
                        <i class="fa fa-home"></i>
                        <a href="/index">学管宝后台管理系统</a>
                        <i class="fa fa-angle-right"></i>
                    </li>
                    <li>
                        <a href="#">专业管理</a>
                        <i class="fa fa-angle-right"></i>
                    </li>
                    <li>
                        <a href="#">更新</a>
                    </li>
                </ul>
            </div>
            <!-- END PAGE HEADER-->
            <!-- MAIN CONTENT BEGIN-->
            <div class="rows">
                <div class="row">
                    <div style="height:400px;width: 500px; margin:0 auto;">
                        <div class="portlet box purple ">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="fa fa-gift"></i> 填写专业信息
                                </div>
                                <div class="tools">
                                    <a href="" class="collapse" data-original-title="" title="">
                                    </a>
                                </div>
                            </div>


                            <div class="portlet-body form">
                                <div class="form-body form-horizontal">
                                    <form action="/major/update" method="post">
                                        <input type="text" name="id" hidden="hidden" value="${major.id}">
                                        <div class="form-group">
                                            <label for="inputEmail1" class="col-sm-3 control-label">专业名</label>
                                            <div class="col-sm-9">
                                                <input type=text" name="name" class="form-control" id="inputEmail1"  required="required" value="${major.name}">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">学制</label>
                                            <div class="col-sm-9">

                                                <select id="major_schsys"  name="schoolsystem" class="select2_category form-control" data-placeholder="Choose a Category" tabindex="1">
                                                    <option value="1年" <c:if test="${major.schoolsystem.equals('1年')}">selected="selected" </c:if> >1年</option>
                                                    <option value="2年" <c:if test="${major.schoolsystem.equals('2年')}">selected="selected" </c:if>>2年</option>
                                                    <option value="2.5年" <c:if test="${major.schoolsystem.equals('2.5年')}">selected="selected" </c:if>>2.5年</option>
                                                    <option value="3年" <c:if test="${major.schoolsystem.equals('3年')}">selected="selected" </c:if>>3年</option>
                                                    <option value="4年"<c:if test="${major.schoolsystem.equals('4年')}">selected="selected" </c:if>>4年</option>
                                                    <option value="5年" <c:if test="${major.schoolsystem.equals('5年')}">selected="selected" </c:if>>5年</option>
                                                </select>
                                            </div>
                                        </div>

                                        <button type="submit" class="btn btn-default">Submit</button>

                                    </form>

                                </div>
                            </div>

                </div>
            <!-- MAIN CONTENT END-->
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
<script src="${pageContext.request.contextPath}/Assets/global/plugins/jqvmap/jqvmap/jquery.vmap.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.russia.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.world.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.europe.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.germany.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.usa.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/jqvmap/jqvmap/data/jquery.vmap.sampledata.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/flot/jquery.flot.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/flot/jquery.flot.resize.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/flot/jquery.flot.categories.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/jquery.pulsate.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/bootstrap-daterangepicker/moment.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/bootstrap-daterangepicker/daterangepicker.js" type="text/javascript"></script>
<!-- IMPORTANT! fullcalendar depends on jquery-ui-1.10.3.custom.min.js for drag & drop support -->
<script src="${pageContext.request.contextPath}/Assets/global/plugins/fullcalendar/fullcalendar.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/jquery-easypiechart/jquery.easypiechart.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/global/plugins/jquery.sparkline.min.js" type="text/javascript"></script>
<!-- END PAGE LEVEL PLUGINS -->
<!-- BEGIN PAGE LEVEL SCRIPTS -->
<script src="${pageContext.request.contextPath}/Assets/global/scripts/metronic.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/admin/layout/scripts/layout.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/admin/layout/scripts/quick-sidebar.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/admin/layout/scripts/demo.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/admin/pages/scripts/index.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/admin/pages/scripts/tasks.js" type="text/javascript"></script>
<%@ include file="../Common/js_common.jsp" %>
</body>
<!-- END BODY -->
</html>