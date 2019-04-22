package com.xgb.Service;

import com.xgb.model.MoUser;
import com.xgb.model.SysUser;
import com.xgb.utils.PageBean;

import java.util.List;

public interface UserService {
    SysUser findByUsername(String username);

    List<String> findPermissionsByUid(Integer uid);

    void createNewUser(String username, String password);


    SysUser findByUid(Integer uid);

    void updateInfo(Integer uid, String username, String password);

    void deleteByUid(Integer uid);

    PageBean<MoUser> findUsersByPage(Integer page);
}
