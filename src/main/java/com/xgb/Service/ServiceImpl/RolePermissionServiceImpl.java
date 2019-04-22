package com.xgb.Service.ServiceImpl;

import com.xgb.Service.RolePermissionService;
import com.xgb.mapper.SysRolePermissionMapper;
import com.xgb.model.SysRolePermission;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class RolePermissionServiceImpl implements RolePermissionService {

    @Resource
    private SysRolePermissionMapper sysRolePermissionMapper;

    //通过角色id和权限id数组，将数据存入角色权限表
    @Override
    public void addByRidPids(Integer rid, List<Integer> pidList) {
        for (Integer pid:pidList) {
            addByRidPid(rid,pid);
        }
    }

    //通过角色id和权限id，将数据存入角色权限表
    @Override
    public void addByRidPid(Integer rid, Integer pid) {
        sysRolePermissionMapper.insert(new SysRolePermission(rid,pid));
    }

    //通过rid将角色权限表中对应权限全部删除
    @Override
    public void deleteByRid(Integer rid) {
        SysRolePermission sysRolePermission = new SysRolePermission();
        sysRolePermission.setRid(rid);
        sysRolePermissionMapper.delete(sysRolePermission);
    }
}
