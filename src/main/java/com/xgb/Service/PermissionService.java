package com.xgb.Service;

import com.xgb.model.SysPermission;

import java.util.List;

public interface PermissionService {
    List<SysPermission> findByPercodes(String[] per);
    SysPermission findByPercode(String percode);
}
