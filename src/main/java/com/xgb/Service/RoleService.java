package com.xgb.Service;

import com.xgb.model.MoRole;
import com.xgb.model.SysRole;


import java.util.List;

public interface RoleService {

    void createNewRole(String name, String rcode, String comment);

    SysRole findByRcode(String rcode);

    List<SysRole> findAllRole();

    MoRole findRolePersByRid(Integer rid);

    void updateByRid(Integer rid, String name, String rcode, String comment);

    void deleteByRid(Integer rid);

}
