package com.xgb.controller;

import com.xgb.Service.*;
import com.xgb.model.MoRole;
import com.xgb.model.SysPermission;
import com.xgb.model.SysRole;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * 角色controller：用于角色的查找，添加，修改，删除
 *
 */
@Controller
public class RoleController {

    @Autowired
    private RoleService roleService;
    @Autowired
    private PermissionService permissionService;
    @Autowired
    private RolePermissionService rolePermissionService;
    @Autowired
    private UserRoleService userRoleService;

    //跳转到添加角色页面
    @RequiresPermissions("role:add")
    @RequestMapping("/role/add")
    public String add(){
        return "Role/add";
    }

    //执行添加角色功能
    @RequiresPermissions("role:add")
    @RequestMapping(value = "/role/add",method = RequestMethod.POST)
    public String addRole(@RequestParam("name")String name,@RequestParam("rcode")String rcode,@RequestParam("comment")String comment,@RequestParam("permission[]")String[] pers ){
        //创建新角色
        roleService.createNewRole(name,rcode,comment);
        //获取角色id
        SysRole role =  roleService.findByRcode(rcode);
        Integer rid = role.getRid();
        //获取权限id数组
        List<SysPermission> list = permissionService.findByPercodes(pers);
        List<Integer> pidList = new ArrayList<>();
        for (SysPermission permission:list) {
            pidList.add(permission.getPid());
        }
        //将角色id和权限id插入角色权限表
        rolePermissionService.addByRidPids(rid,pidList);
        //跳转到角色查看页面
        return "redirect:/role/find";
    }

    //跳转到查看角色列表页面
    @RequiresPermissions("role:find")
    @RequestMapping("/role/find")
    public String find(Model model){
        List<SysRole> roles = roleService.findAllRole();
        model.addAttribute("roles",roles);
        return "Role/find";
    }

    //跳转到更新页面
    @RequiresPermissions("role:update")
    @RequestMapping("/role/update")
    public String update(@RequestParam("rid")Integer rid,Model model){
        //根据rid从数据库查找角色(包含权限)信息
        MoRole moRole =  roleService.findRolePersByRid(rid);
        model.addAttribute("role",moRole);
        return "Role/update";
    }

    //执行更新角色的功能
    @RequiresPermissions("role:update")
    @RequestMapping(value = "/role/update",method = RequestMethod.POST)
    public String updateRole(@RequestParam("rid")Integer rid,@RequestParam("name")String name,@RequestParam("rcode")String rcode,@RequestParam("comment")String comment,@RequestParam("permission[]")String[] pers){

        //更改角色表信息
        roleService.updateByRid(rid,name,rcode,comment);
        //将角色权限表原有数据删除
        rolePermissionService.deleteByRid(rid);
        //获取新的权限id数组
        List<SysPermission> list = permissionService.findByPercodes(pers);
        List<Integer> pidList = new ArrayList<>();
        for (SysPermission permission:list) {
            pidList.add(permission.getPid());
        }
        //将角色id和权限id插入角色权限表
        rolePermissionService.addByRidPids(rid,pidList);
        //跳转到角色查看页面
        return "redirect:/role/find";
    }

    @RequiresPermissions("role:delete")
    @RequestMapping("/role/delete")
    public String delete(@RequestParam("rid")Integer rid){
        //删除角色权限表中对应的权限信息
        rolePermissionService.deleteByRid(rid);
        //删除用户角色表对应数据
        userRoleService.deleteByRid(rid);

        //删除角色信息
        roleService.deleteByRid(rid);

        return "redirect:/role/find";
    }

}
