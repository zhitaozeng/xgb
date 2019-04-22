package com.xgb.Service.ServiceImpl;

import com.xgb.Service.PermissionService;
import com.xgb.mapper.SysPermissionMapper;
import com.xgb.model.SysPermission;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class PermissionServiceImpl implements PermissionService {

    @Resource
    private SysPermissionMapper sysPermissionMapper;

    //通过权限名字数组，返回所有的权限id数组
    @Override
    public List<SysPermission> findByPercodes(String[] per) {
        List<SysPermission> list = new ArrayList<>();
        for (String p:per) {
            list.add(findByPercode(p));
        }
        return list;
    }

    //通过权限名字，查询权限对象
    @Override
    public SysPermission findByPercode(String percode) {
        SysPermission sysPermission = new SysPermission();
        sysPermission.setPercode(percode);
        return sysPermissionMapper.selectOne(sysPermission);
    }
}
