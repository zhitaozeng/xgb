package com.xgb.Service.ServiceImpl;

import com.xgb.Service.RoleService;
import com.xgb.mapper.SysPermissionMapper;
import com.xgb.mapper.SysRoleMapper;
import com.xgb.mapper.SysRolePermissionMapper;
import com.xgb.model.MoRole;
import com.xgb.model.SysPermission;
import com.xgb.model.SysRole;
import com.xgb.model.SysRolePermission;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {

    @Resource
    private SysRoleMapper sysRoleMapper;
    @Resource
    private SysRolePermissionMapper sysRolePermissionMapper;
    @Resource
    private SysPermissionMapper sysPermissionMapper;

    //通过用角色信息，创建新角色
    @Override
    public void createNewRole(String name, String rcode, String comment) {
        sysRoleMapper.insert(new SysRole(name,rcode,comment));
    }

    //通过角色代码查找角色
    @Override
    public SysRole findByRcode(String rcode) {
        SysRole role = new SysRole();
        role.setRcode(rcode);
        return sysRoleMapper.selectOne(role);
    }

    //查找所有角色
    @Override
    public List<SysRole> findAllRole() {
        return sysRoleMapper.selectAll();
    }

    //根据主键查找角色(含权限)信息
    @Override
    public MoRole findRolePersByRid(Integer rid) {
        //通过rid查找到pid数组
        SysRolePermission rolePermission = new SysRolePermission();
        rolePermission.setRid(rid);
        List<SysRolePermission> rolePermissions = sysRolePermissionMapper.select(rolePermission);
        //通过pid查找权限集合
        List<String> list = new ArrayList<>();
        for (SysRolePermission rolePer: rolePermissions) {
            SysPermission sysPermission = new SysPermission();
            sysPermission.setPid(rolePer.getPid());
            list.add(sysPermissionMapper.selectOne(sysPermission).getPercode());
        }
        SysRole sysRole = sysRoleMapper.selectByPrimaryKey(rid);
        MoRole moRole = new MoRole();
        if(sysRole != null){
            moRole.setRid(sysRole.getRid());
            moRole.setName(sysRole.getName());
            moRole.setRcode(sysRole.getRcode());
            moRole.setComment(sysRole.getComment());
            moRole.setPermissions(list);
        }
        return moRole;
    }

    //更改角色表信息
    @Override
    public void updateByRid(Integer rid, String name, String rcode, String comment) {
        sysRoleMapper.updateByPrimaryKey(new SysRole(rid,name,rcode,comment));
    }

    //删除角色信息
    @Override
    public void deleteByRid(Integer rid) {
        sysRoleMapper.deleteByPrimaryKey(rid);
    }
}
