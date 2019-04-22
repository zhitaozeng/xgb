package com.xgb.Service;

import java.util.List;

public interface RolePermissionService {
    void addByRidPids(Integer rid, List<Integer> pidList);
    void addByRidPid(Integer rid,Integer pid);

    void deleteByRid(Integer rid);
}
