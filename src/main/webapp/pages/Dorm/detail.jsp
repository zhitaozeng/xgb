<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/7/14
  Time: 16:18
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
    <!-- search dropdown styles -->
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
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
                        <a href="#">楼栋信息</a>
                        <i class="fa fa-angle-right"></i>
                    </li>
                    <li>
                        <a href="#">操作</a>
                        <i class="fa fa-angle-right"></i>
                    </li>

                </ul>
            </div>
            <!-- END PAGE HEADER-->
            <!-- BEGIN MAIN CONTENT -->
            <div class="rows">
                <div class="row">
                    <div style="margin-left: 110px;" id="dorm_form">
                        <input type="button" id="submit" class="btn btn-primary" value="保存">
                        <input type="hidden" name="id" id="building_id" value="${building.id}">
                        <label>名称：</label>
                        <input type="text" name="name" id="building_name" style="width: 110px;"  value="${building.name}"/></input>
                        <label>备注：</label>
                        <input type="text" name="note" id="building_note" style="width: 150px;" value="${building.note}"/></input>
                    </div>
                    <br/>
                    <!-- 当前学年所有专业 -->
                    <div class="col-md-10 col-md-offset-1 portlet box red-intense">
                        <div class="portlet-title">


                            <div class="tools">
                                <a href="javascript:;" class="collapse" data-original-title="" title="">
                                </a>
                                <a href="" class="fullscreen" data-original-title="" title="">
                                </a>
                                <a href="javascript:;" class="reload" data-original-title="" title="">
                                </a>
                            </div>

                        </div>
                        <div class="portlet-body">
                            <div class="table-container">
                                <table class="table table-striped table-bordered table-hover" id="building_xList">
                                    <thead>
                                    <tr role="row" class="heading">
                                        <th>
                                            序号
                                        </th>
                                        <th>
                                            房间号
                                        </th>
                                        <th>
                                            使用情况
                                        </th>
                                        <th>
                                            学生
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody id="dormTbody">
                                        <c:forEach items="${moDorms}" var="dorm" varStatus="str">
                                            <tr>
                                                <td>${str.count}</td>
                                                <td>${dorm.name}</td>
                                                <td>${dorm.num}/4</td>
                                                <td>
                                                    <div class='single_person'>
                                                    <c:forEach items="${dorm.students}" var="student">
                                                        <label data-usernum='${student.num}'>${student.name}</label>
                                                    </c:forEach>
                                                    </div>
                                                </td>
                                            </tr>
                                        </c:forEach>
                                    </tbody>
                                </table>
                            </div>

                            <div style="width: 200px;height: 220px;padding:15px;border: 1px solid red;display: none;position: absolute;top: 300px;left:600px;" id="jump">
                                <h4>修改房间信息</h4>
                                <label>房间号：</label><input type="text"  style="width: 110px;margin-bottom: 10px;" /><br/>
                                <label>面 &nbsp;&nbsp;&nbsp;积：</label><input type="text" style="width: 110px;margin-bottom: 10px;" /><br/>
                                <label>床 &nbsp;&nbsp;&nbsp;位：</label><input type="text" style="width: 110px;" /><br/><br/>
                                <button onclick="cancelandsave()" type="button" class="btn" style="margin-left:10px;margin-right: 20px;">保存</button><button onclick="cancelandsave()" type="button" class="btn">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- END MAIN CONTENT -->

        </div>
        <!-- MODAL -->
        <div class="modal fade bs-modal-sm" id="modal_bedDetails" tabindex="-1" role="modal_bedDetails" aria-hidden="true">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">房间信息</h4>
                    </div>

                    <div class="modal-body">
                        <input type="hidden" id="dorm_id">
                        <label class=" control-label">房间号</label>
                        <br>
                        <input id="dorm_num"  type="text" class="form-control" placeholder="请输入房间号">
                        <br>

                        <label class=" control-label">面积(㎡)</label>
                        <br>
                        <input id="area"  type="text" class="form-control" placeholder="请输入面积">
                        <br>

                        <label class=" control-label">床位</label>
                        <br>
                        <input id="bed_num"  type="text" class="form-control" placeholder="请输入床位数量">
                        <br>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn default" data-dismiss="modal">关闭</button>
                        <input type="button" id="bed_details_submit" data-dismiss="modal" class="btn blue"  value="确认" />
                    </div>

                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>

    </div>
    <!-- END CONTENT -->

</div>
<!-- END CONTAINER -->
<%@ include file="../Common/footer.jsp"%>
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
<script src="${pageContext.request.contextPath}/Assets/my/DataTable.js" type="text/javascript"></script>
<!-- END PAGE LEVEL SCRIPTS -->
<%@ include file="../Common/js_common.jsp"%>
<script src="${pageContext.request.contextPath}/Manage/js/Dorm/building_x.js" type="text/javascript"></script>
<!-- search dropdown js -->
</body>
<!-- END BODY -->
</html>