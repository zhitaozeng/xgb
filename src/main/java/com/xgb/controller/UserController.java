package com.xgb.controller;


import com.xgb.Service.*;
import com.xgb.model.*;
import com.xgb.utils.PageBean;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;


@Controller
public class UserController {


    @Autowired
    private RoleService roleService;

    @Autowired
    private UserService userService;

    @Autowired
    private UserRoleService userRoleService;

    //跳转到添加用户页面
    @RequiresPermissions("user:add")
    @RequestMapping("/user/add")
    public String add(Model model){
        //查询角色信息
        List<SysRole> sysRoles =  roleService.findAllRole();
        model.addAttribute("roles",sysRoles);
        return "User/add";
    }

    //执行添加用户功能
    @RequiresPermissions("user:add")
    @RequestMapping(value = "/user/add",method = RequestMethod.POST)
    public String addRole(@RequestParam("username")String username,@RequestParam("password")String password,@RequestParam("role")Integer rid){
        //校验用户名是否重复
        SysUser userDB = this.userService.findByUsername(username);
        if (userDB == null){
            //创建新用户
            userService.createNewUser(username,password);
            //获取用户id
            SysUser user = userService.findByUsername(username);
            Integer uid = user.getUid();
            //将用户id和角色id插入用户角色表
            userRoleService.addUidRid(uid,rid);
        }
        //跳转到用户查看页面
        return "redirect:/user/find";
    }

    //跳转到查看角色列表页面
    @RequiresPermissions("user:find")
    @RequestMapping("/user/find")
    public String find(@RequestParam(value = "page",defaultValue = "1")Integer page,Model model){


        //查询所有用户
        PageBean<MoUser> pageBean = userService.findUsersByPage(page);
        //查询用户对应的角色
        for (MoUser user:pageBean.getList()) {
            Integer rid = userRoleService.findRidByUid(user.getUid());
            MoRole role = roleService.findRolePersByRid(rid);
            if(role != null){
                user.setMoRole(role);
            }
        }
        model.addAttribute("userPages",pageBean);
        return "User/find";
    }

    //跳转到更新页面
    @RequiresPermissions("user:update")
    @RequestMapping("/user/update")
    public String update(@RequestParam("uid")Integer uid,Model model){
        //根据uid从数据库查找用户(包含角色)信息
        SysUser user = userService.findByUid(uid);
        MoUser moUser = new MoUser();
        moUser.setUid(user.getUid());
        moUser.setUsername(user.getUsername());
        moUser.setPassword(user.getPassword());
        moUser.setSalt(user.getSalt());
        moUser.setMoRole(roleService.findRolePersByRid(userRoleService.findRidByUid(uid)));
        model.addAttribute("user",moUser);
        //查询角色信息
        List<SysRole> sysRoles =  roleService.findAllRole();
        model.addAttribute("roles",sysRoles);
        return "User/update";
    }

    //执行更新用户的功能
    @RequiresPermissions("user:update")
    @RequestMapping(value = "/user/update",method = RequestMethod.POST)
    public String updateRole(@RequestParam("uid")Integer uid,@RequestParam("username")String username,@RequestParam("password")String password,@RequestParam("role")Integer rid){

        //更改用户表信息
        userService.updateInfo(uid,username,password);

        //将用户角色表原有数据删除
        userRoleService.deleteByUid(uid);

        //将新的用户id和角色id插入用户角色表
        userRoleService.addUidRid(uid, rid);
        //跳转到用户查看页面
        return "redirect:/user/find";
    }

    @RequiresPermissions("user:delete")
    @RequestMapping("/user/delete")
    public String delete(@RequestParam("uid")Integer uid){
        //删除用户角色表中对应的权限信息
        userRoleService.deleteByUid(uid);
        //删除用户信息
        userService.deleteByUid(uid);
        return "redirect:/user/find";
    }



}
