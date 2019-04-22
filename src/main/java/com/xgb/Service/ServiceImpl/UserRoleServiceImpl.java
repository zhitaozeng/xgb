package com.xgb.Service.ServiceImpl;

import com.xgb.Service.UserRoleService;
import com.xgb.mapper.SysUserRoleMapper;
import com.xgb.model.SysUserRole;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class UserRoleServiceImpl implements UserRoleService {

    @Resource
    private SysUserRoleMapper sysUserRoleMapper;

    //将用户id和角色id插入到用户角色表
    @Override
    public void addUidRid(Integer uid, Integer rid) {
        sysUserRoleMapper.insert(new SysUserRole(uid,rid));
    }

    //根据用户id查询角色id
    @Override
    public Integer findRidByUid(Integer uid) {
        SysUserRole sysUserRole = new SysUserRole();
        sysUserRole.setUid(uid);
        SysUserRole sysUserRole1 = sysUserRoleMapper.selectOne(sysUserRole);
        if(sysUserRole1 != null ){
            return sysUserRole1.getRid();
        }
        return 0;
    }

    //通过用户id删除用户角色表数据
    @Override
    public void deleteByUid(Integer uid) {
        SysUserRole sysUserRole = new SysUserRole();
        sysUserRole.setUid(uid);
        sysUserRoleMapper.delete(sysUserRole);
    }

    //通过角色id删除用户角色表数据
    @Override
    public void deleteByRid(Integer rid) {
        SysUserRole sysUserRole = new SysUserRole();
        sysUserRole.setRid(rid);
        sysUserRoleMapper.delete(sysUserRole);
    }
}
