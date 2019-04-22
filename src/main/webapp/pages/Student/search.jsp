<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/7/9
  Time: 22:09
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
                查看学生信息 <small> 查找符合条件的学生</small>
            </h3>
            <div class="page-bar">
                <ul class="page-breadcrumb">
                    <li>
                        <i class="fa fa-home"></i>
                        <a href="/index.php">日常管理系统</a>
                        <i class="fa fa-angle-right"></i>
                    </li>
                    <li>
                        <a href="#">学生管理</a>
                        <i class="fa fa-angle-right"></i>
                    </li>
                    <li>
                        <a href="#">查看学生信息</a>
                    </li>
                </ul>
            </div>
            <!-- END PAGE HEADER-->
            <!-- BEGIN MAIN CONTENT -->
            <div class="rows">
                <div class="row">
                    <div style="width:800px;margin:0 auto;">
                        <div class="portlet box purple ">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="fa fa-gift"></i> 查找条件
                                    <small>留空表示不限制</small>
                                </div>
                                <div class="tools">
                                    <a href="" class="collapse" data-original-title="" title="">
                                    </a>
                                </div>
                            </div>

                            <div class="portlet-body form">
                                <div id="form_stu"  class="form-horizontal">
                                    <div class="form-body">
                                        <div class="form-group col-md-6">
                                            <label class="col-md-4 control-label">学生姓名：</label>
                                            <div class="col-md-8">
                                                <input id="stu_name" name="name" type="text" class="form-control" placeholder="想查找的学生姓名">
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-md-4 control-label">学生：</label>
                                            <div class="col-md-8">
                                                <input id="stu_num" name="num"  type="text" class="form-control" placeholder="想查找的学生学号">
                                            </div>
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label class="col-md-4 control-label">专业：</label>
                                            <div class="col-md-8">
                                                <select  id="major_id" name="major" class=" form-control" data-placeholder="" tabindex="1">

                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-md-4 control-label">班级：</label>
                                            <div class="col-md-8">
                                                <select id="class_num" name="class_id" class="form-control">
                                                </select>
                                            </div>
                                        </div>


                                        <div class="clear">

                                        </div>
                                    </div>

                                    <div class="form-actions right1">
                                        <a  id="submit_search" class="btn green">查找学生</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <!-- 当前学年所有专业 -->
                        <div class="portlet light">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class=" icon-bubbles"></i>
                                    <span class="caption-subject font-green-sharp bold uppercase">查询结果</span>
                                    <span class="caption-helper">符合条件的学生...</span>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <div class="table-container" style="height: 350px;">
                                    <table class="table table-striped table-bordered table-hover" id="student_ajax_table">
                                        <thead >
                                        <tr role="row" class="heading">
                                            <th >
                                                序号
                                            </th>
                                            <th >
                                                学生学号
                                            </th>
                                            <th>
                                                学生姓名
                                            </th>
                                            <th >
                                                性别
                                            </th>

                                            <th >
                                                民族
                                            </th>
                                            <th >
                                                身份证
                                            </th>
                                            <th >
                                                政治面貌
                                            </th>
                                            <th >
                                                QQ号
                                            </th>
                                            <th >
                                                家庭地址
                                            </th>
                                            <th >
                                                手机号码
                                            </th>
                                            <th >
                                                家庭号码
                                            </th>
                                            <th>
                                                操作
                                            </th>

                                        </tr>
                                        </thead>
                                        <tbody id="tabelDataTbody">
                                        </tbody>
                                    </table>
                                </div>
                                <div  style="margin-left: 400px;">
                                    <nav aria-label="Page navigation">
                                        <ul class="pagination" id="pageHelper">
                                        </ul>
                                    </nav>
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
<!-- BEGIN My SCRIPTS -->
<%@ include file="../Common/js_common.jsp" %>
<!-- END My SCRIPTS -->
<script src="${pageContext.request.contextPath}/Assets/my/DataTable.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Manage/js/Student/search.js" type="text/javascript"></script>

<!-- END JAVASCRIPTS -->
</body>
<!-- END BODY -->
</html>