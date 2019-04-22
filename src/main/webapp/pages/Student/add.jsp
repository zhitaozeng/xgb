<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/7/10
  Time: 11:35
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
                新增学生 <small> 手动新增一个学生</small>
            </h3>
            <div class="page-bar">
                <ul class="page-breadcrumb">
                    <li>
                        <i class="fa fa-home"></i>
                        <a href="/index">学管宝后台管理系统</a>
                        <i class="fa fa-angle-right"></i>
                    </li>
                    <li>
                        <a href="#">学生设置</a>
                        <i class="fa fa-angle-right"></i>
                    </li>
                    <li>
                        <a href="#">新增</a>
                    </li>
                </ul>
            </div>
            <!-- END PAGE HEADER-->
            <!-- BEGIN MAIN CONTENT -->
            <div class="rows">
                <div class="row">
                    <div style="width:460px;margin:0 auto;">
                        <div class="portlet box purple ">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="fa fa-gift"></i> 填写学生信息
                                </div>
                                <div class="tools">
                                    <a href="" class="collapse" data-original-title="" title="">
                                    </a>
                                </div>
                            </div>



                            <div class="portlet-body form">
                                <div class="form-body form-horizontal">
                                    <form action="/student/add" method="post">
                                    <div class="form-group">
                                        <label class=" col-md-3 control-label">选择专业：</label>
                                        <div class="col-md-9">
                                            <select  id="major_id" name="major" class=" form-control" data-placeholder="" tabindex="1">

                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-3 control-label">选择班级：</label>
                                        <div class="col-md-9">
                                            <select id="class_num" name="class_id" class="form-control">
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-3 control-label">学号：</label>
                                        <div class="col-md-9">
                                            <input  id="num" name="num" type="text" required="required" class="form-control" placeholder="请输入学号">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-3 control-label">姓名：</label>
                                        <div class="col-md-9">
                                            <input  id="name" name="name" type="text" required="required" class="form-control" placeholder="请输入姓名">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-3 control-label">性别：</label>
                                        <div class="col-md-9">
                                            <select id="sex" name="sex" class="form-control">
                                                <option value="男">男</option>
                                                <option value="女">女</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-3 control-label">民族：</label>
                                        <div class="col-md-9">
                                            <select name="nation">
                                                <option value="汉族">汉族</option>
                                                <option value="蒙古族">蒙古族</option>
                                                <option value="回族">回族</option>
                                                <option value="藏族">藏族</option>
                                                <option value="维吾尔族">维吾尔族</option>
                                                <option value="苗族">苗族</option>
                                                <option value="彝族">彝族</option>
                                                <option value="壮族">壮族</option>
                                                <option value="布依族">布依族</option>
                                                <option value="朝鲜族">朝鲜族</option>
                                                <option value="满族">满族</option>
                                                <option value="侗族">侗族</option>
                                                <option value="瑶族">瑶族</option>
                                                <option value="白族">白族</option>
                                                <option value="土家族">土家族</option>
                                                <option value="哈尼族">哈尼族</option>
                                                <option value="哈萨克族">哈萨克族</option>
                                                <option value="傣族">傣族</option>
                                                <option value="黎族">黎族</option>
                                                <option value="傈僳族">傈僳族</option>
                                                <option value="佤族">佤族</option>
                                                <option value="畲族">畲族</option>
                                                <option value="高山族">高山族</option>
                                                <option value="拉祜族">拉祜族</option>
                                                <option value="水族">水族</option>
                                                <option value="东乡族">东乡族</option>
                                                <option value="纳西族">纳西族</option>
                                                <option value="景颇族">景颇族</option>
                                                <option value="柯尔克孜族">柯尔克孜族</option>
                                                <option value="土族">土族</option>
                                                <option value="达斡尔族">达斡尔族</option>
                                                <option value="仫佬族">仫佬族</option>
                                                <option value="羌族">羌族</option>
                                                <option value="布朗族">布朗族</option>
                                                <option value="撒拉族">撒拉族</option>
                                                <option value="毛南族">毛南族</option>
                                                <option value="仡佬族">仡佬族</option>
                                                <option value="锡伯族">锡伯族</option>
                                                <option value="阿昌族">阿昌族</option>
                                                <option value="普米族">普米族</option>
                                                <option value="塔吉克族">塔吉克族</option>
                                                <option value="怒族">怒族</option>
                                                <option value="乌孜别克族">乌孜别克族</option>
                                                <option value="俄罗斯族">俄罗斯族</option>
                                                <option value="鄂温克族">鄂温克族</option>
                                                <option value="德昂族">德昂族</option>
                                                <option value="保安族">保安族</option>
                                                <option value="裕固族">裕固族</option>
                                                <option value="京族">京族</option>
                                                <option value="塔塔尔族">塔塔尔族</option>
                                                <option value="独龙族">独龙族</option>
                                                <option value="鄂伦春族">鄂伦春族</option>
                                                <option value="赫哲族">赫哲族</option>
                                                <option value="门巴族">门巴族</option>
                                                <option value="珞巴族">珞巴族</option>
                                                <option value="基诺族">基诺族</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-3 control-label">身份证：</label>
                                        <div class="col-md-9">
                                            <input  id="idcard" name="idcard" type="text" class="form-control" required="required" placeholder="请输入身份证">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-3 control-label">政治面貌：</label>
                                        <div class="col-md-9">
                                            <input  id="politicalstatus" name="politicalstatus" type="text" class="form-control" placeholder="请输入政治面貌">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-3 control-label">QQ号：</label>
                                        <div class="col-md-9">
                                            <input  id="qq" name="qq" type="text" class="form-control" placeholder="请输入qq号">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-3 control-label">家庭地址：</label>
                                        <div class="col-md-9">
                                            <input  id="address" name="address" type="text" class="form-control" placeholder="请输入家庭地址">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-3 control-label">手机号码：</label>
                                        <div class="col-md-9">
                                            <input  id="selfphone" name="selfphone" type="text" class="form-control" placeholder="请输入手机号码">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-3 control-label">家庭号码：</label>
                                        <div class="col-md-9">
                                            <input  id="relativephone" name="relativephone" type="text" class="form-control" placeholder="请输入号码">
                                        </div>
                                    </div>
                                </div>
                                <div class="clear"></div>
                                <div class="form-actions right1">
                                    <button id="submit" class="btn green">确认</button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>

                </div>
                <!-- END MAIN CONTENT -->
            </div>

        </div>
        <!-- END CONTENT -->

    </div>
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
<!-- END PAGE LEVEL PLUGINS -->
<!-- BEGIN PAGE LEVEL SCRIPTS -->
<script src="${pageContext.request.contextPath}/Assets/global/scripts/metronic.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/admin/layout/scripts/layout.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/admin/layout/scripts/quick-sidebar.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/admin/layout/scripts/demo.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/Assets/admin/pages/scripts/form-samples.js"></script>


<!-- END PAGE LEVEL SCRIPTS -->
<%@ include file="../Common/js_common.jsp" %>
<script src="${pageContext.request.contextPath}/Manage/js/Student/add.js" type="text/javascript"></script>

<!-- END JAVASCRIPTS -->
</body>
<!-- END BODY -->
</html>
