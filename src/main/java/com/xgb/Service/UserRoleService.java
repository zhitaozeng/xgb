package com.xgb.Service;

public interface UserRoleService {
    void addUidRid(Integer uid, Integer rid);

    Integer findRidByUid(Integer uid);

    void deleteByUid(Integer uid);

    void deleteByRid(Integer rid);
}
