<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/7/5
  Time: 15:14
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<div class="page-sidebar-wrapper">
    <div class="page-sidebar navbar-collapse collapse">

        <ul class="page-sidebar-menu" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
            <li class="sidebar-toggler-wrapper">
                <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
                <div class="sidebar-toggler">
                </div>
                <!-- END SIDEBAR TOGGLER BUTTON -->
            </li>
            <li class="sidebar-search-wrapper">
            </li>

            <li>
                <a href='/index'>
                    <i class=''></i>
                    <span class='title'>首页</span>
                </a>
            </li>
            <shiro:hasPermission name="major:menu">
            <li>
                <a href='javascript:;'>
                    <i class=''></i>
                    <span class='title'>专业管理</span>
                    <span class='arrow'></span>
                </a>
                <ul class="sub-menu">
                    <li>
                        <a href='/major/add'>
                            <i class=''></i>
                            <span class='title'>新增专业</span>
                        </a>
                    </li>
                    <li>
                        <a href='/major/find'>
                            <i class=''></i>
                            <span class='title'>专业管理</span>
                        </a>
                    </li>
                </ul>
            </li>
            </shiro:hasPermission>
            <shiro:hasPermission name="class:menu">
            <li>
                <a href='javascript:;'>
                    <i class=''></i>
                    <span class='title'>班级管理</span>
                    <span class='arrow'></span>
                </a>
                <ul class="sub-menu">
                    <li>
                        <a href='/class/add'>
                            <i class=''></i>
                            <span class='title'>新增班级</span>
                        </a>
                    </li>
                    <li>
                        <a href='/class/find'>
                            <i class=''></i>
                            <span class='title'>查找班级</span>
                        </a>
                    </li>
                </ul>
            </li>
            </shiro:hasPermission>
            <shiro:hasPermission name="student:menu">
            <li>
                <a href='javascript:;'>
                    <i class=''></i>
                    <span class='title'>学生管理</span>
                    <span class='arrow'></span>
                </a>
                <ul class="sub-menu">
                    <li>
                        <a href='${pageContext.request.contextPath}/student/find'>
                            <i class=''></i>
                            <span class='title'>查找学生</span>
                        </a>
                    </li>
                    <li>
                        <a href='${pageContext.request.contextPath}/student/import'>
                            <i class=''></i>
                            <span class='title'>快速导入</span>
                        </a>
                    </li>
                    <li>
                        <a href='${pageContext.request.contextPath}/student/add'>
                            <i class=''></i>
                            <span class='title'>手动添加</span>
                        </a>
                    </li>
                </ul>
            </li>
            </shiro:hasPermission>
            <shiro:hasPermission name="dorm:menu">
            <li>
                <a href='javascript:;'>
                    <i class=''></i>
                    <span class='title'>宿舍管理</span>
                    <span class='arrow'></span>
                </a>
                <ul class="sub-menu">
                    <li>
                        <a href='/dorm/building'>
                            <i class=''></i>
                            <span class='title'>楼栋管理</span>
                        </a>
                    </li>
                    <li>
                        <a href='/dorm/bed'>
                            <i class=''></i>
                            <span class='title'>床位管理</span>
                        </a>
                    </li>
                </ul>
            </li>
            </shiro:hasPermission>
            <shiro:hasPermission name="role:menu">
            <li>
                <a href='javascript:;'>
                    <i class=''></i>
                    <span class='title'>角色管理</span>
                    <span class='arrow'></span>
                </a>
                <ul class="sub-menu">
                    <li>
                        <a href='/role/add'>
                            <i class=''></i>
                            <span class='title'>新增角色</span>
                        </a>
                    </li>
                    <li>
                        <a href='/role/find'>
                            <i class=''></i>
                            <span class='title'>查看角色</span>
                        </a>
                    </li>
                </ul>
            </li>
            </shiro:hasPermission>
            <shiro:hasPermission name="user:menu">
            <li>
                <a href='javascript:;'>
                    <i class=''></i>
                    <span class='title'>用户管理</span>
                    <span class='arrow'></span>
                </a>
                <ul class="sub-menu">
                    <li>
                        <a href='${pageContext.request.contextPath}/user/add'>
                            <i class=''></i>
                            <span class='title'>新增用户</span>
                        </a>
                    </li>
                    <li>
                        <a href='${pageContext.request.contextPath}/user/find'>
                            <i class=''></i>
                            <span class='title'>查看用户</span>
                        </a>
                    </li>
                </ul>
            </li>
            </shiro:hasPermission>

        </ul>
        <!-- END SIDEBAR MENU -->
    </div>
</div>
