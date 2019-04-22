<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/7/14
  Time: 16:27
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
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
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
    <!--<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/Assets/global/plugins/select2/select2.css"/>-->
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
    <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/Manage/css/Dorm/bed.css" />
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
<%@ include file="../Common/header.jsp"%>
<!-- END HEADER -->
<div class="clearfix">
</div>
<!-- BEGIN CONTAINER -->
<div class="page-container">
    <!-- BEGIN SIDEBAR -->
    <%@ include file="../Common/sidebar.jsp"%>

    <!-- END SIDEBAR -->
    <!-- BEGIN CONTENT -->
    <div class="page-content-wrapper">
        <div class="page-content" style="min-height:1556px">


            <!-- BEGIN PAGE HEADER-->
            <h3 class="page-title">
                床位管理 <small> 快速分配床位</small>
            </h3>
            <div class="page-bar">
                <ul class="page-breadcrumb">
                    <li>
                        <i class="fa fa-home"></i>
                        <a href="/index">学管宝后台管理系统</a>
                        <i class="fa fa-angle-right"></i>
                    </li>
                    <li>
                        <a href="#">宿舍管理</a>
                        <i class="fa fa-angle-right"></i>
                    </li>
                    <li>
                        <a href="#">床位管理</a>
                    </li>
                </ul>
            </div>
            <!-- END PAGE HEADER-->
            <!-- BEGIN MAIN CONTENT -->
            <div class="rows">
                <div class="row">
                    <div class="col-md-12">
                        <table class="s2_table">
                            <tbody>
                            <tr>
                                <td>
                                    <label class="control-label pl_s2label">专业：</label>
                                </td>
                                <td>

                                    <select  name="major" id="bed_major" title="" tabindex="-1">

                                    </select>
                                </td>
                                <td>
                                    <label class="control-label pl_s2label">班级：</label>
                                </td>
                                <td>

                                    <select  name="class" id="bed_class" title="" tabindex="-1">
                                    </select>
                                </td>
                                <td>
                                    <a class="btn green pl_btn" id="search_class">搜索</a>
                                </td>
                            </tr>
                            </tbody></table>



                    </div>

                    <div class="col-md-12">
                        <div class="pl_box">

                            <!-- shortcut btn start -->
                            <div class="choose">
                                <label class="btn choose_boy green">选中男生</label>
                                <label class="btn choose_girl green">选中女生</label>
                                <label class="btn confirm_count">已分配
                                    <span class="had_check">0</span>
                                    <span>/</span>
                                    <span class="all">0</span>
                                </label>
                            </div>
                            <!-- shortcut btn end -->
                        </div>
                    </div>
                    <div class="col-md-12 pl_show">
                        <label class="col-md-3">已选中学生如下：</label>
                        <label class="pl-select btn green checking" id="dorm_add">分配到选中房间</label>
                        <label class="pl-select btn green re_check" id="recheck">重新选择</label>
                    </div>
                    <div class="col-md-12">
                        <div class="choosed_box">

                        </div>
                    </div>
                    <div class="col-md-12">
                        <table class="s2_table">
                            <tbody>
                            <tr>
                                <td>
                                    <label class="control-label pl_s2label">楼栋：</label>
                                </td>
                                <td>

                                    <select  name="year" id="bed_depart" title="" tabindex="-1">

                                    </select>
                                </td>
                                <td>
                                    <a class="btn green pl_btn" id="search_building">搜索</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <table class="table table-bordered table-hover" id="dorm">

                        </table>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 pl_table">
                    <div class="table-container">
                        <table class="table table-striped table-bordered table-hover room_table" id="dorm_list">
                            <thead>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- MODAL -->
            <div class="modal fade bs-modal-sm" id="modal_search_stu" tabindex="-1" role="modal_majorDetails" aria-hidden="true">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                            <h4 class="modal-title">搜索指定学生</h4>
                        </div>

                        <div class="modal-body">
                            <table id="tb_stu">
                                <tr>
                                    <td><label class=" control-label">学号</label></td>
                                    <td><input id="search_stu_num" type="text" class="form-control" placeholder="请输入学号"></td>
                                </tr>
                                <tr>
                                    <td><label class=" control-label">姓名</label></td>
                                    <td><input id="search_stu_name" type="text" class="form-control" placeholder="请输入姓名"></td>
                                </tr>
                            </table>


                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn default" data-dismiss="modal">关闭</button>
                            <input type="button" id="search_stu" data-dismiss="modal" class="btn blue"  value="搜索" />
                        </div>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
            <!-- MODAL -->
        </div>

    </div>
    <!-- END MAIN CONTENT -->

</div>


<!-- END CONTENT -->


<!-- END CONTAINER -->
<!-- BEGIN FOOTER -->
<%@ include file="../Common/footer.jsp"%>

<!-- END FOOTER -->
<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
<!-- BEGIN CORE PLUGINS -->
<!--[if lt IE 9]>
<script src="/assets/global/plugins/respond.min.js"></script>
<script src="/assets/global/plugins/excanvas.min.js"></script>
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
<!--<script type="text/javascript" src="${pageContext.request.contextPath}/Assets/global/plugins/select2/select2.min.js"></script>-->
<script type="text/javascript" src="${pageContext.request.contextPath}/Assets/global/plugins/select2-4.0.3/dist/js/select2.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/Assets/global/plugins/datatables/media/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/Assets/global/plugins/datatables/extensions/TableTools/js/dataTables.tableTools.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/Assets/global/plugins/datatables/extensions/ColReorder/js/dataTables.colReorder.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/Assets/global/plugins/datatables/extensions/Scroller/js/dataTables.scroller.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/Assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js"></script>
<!-- END PAGE LEVEL PLUGINS -->
<!-- BEGIN PAGE LEVEL SCRIPTS -->
<script src="${pageContext.request.contextPath}/Assets/global/scripts/metronic.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/admin/layout/scripts/layout.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/admin/layout/scripts/quick-sidebar.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/admin/layout/scripts/demo.js" type="text/javascript"></script>

<!-- END PAGE LEVEL SCRIPTS -->

<!-- BEGIN My SCRIPTS -->
<script src="${pageContext.request.contextPath}/Assets/my/DataTable.js" type="text/javascript"></script>
<%@ include file="../Common/js_common.jsp"%>
<script src="${pageContext.request.contextPath}/Manage/js/Dorm/bed.js" type="text/javascript"></script>

<!-- END My SCRIPTS -->
<!-- END JAVASCRIPTS -->
</body>
<!-- END BODY -->
</html>
