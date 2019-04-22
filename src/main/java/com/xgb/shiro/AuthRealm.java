package com.xgb.shiro;

import com.xgb.Service.UserService;
import com.xgb.model.SysUser;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class AuthRealm extends AuthorizingRealm {

    @Autowired
    private UserService userService;

    //授权
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        //从principals中获取主身份信息
        SysUser user = (SysUser) principals.getPrimaryPrincipal();

        //根据用户信息从数据库查询用户权限
        List<String> permissionList = userService.findPermissionsByUid(user.getUid());


        //查到权限数据，返回AuthorizationInfo
        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
        //将上面查询到的权限信息，填充到AuthorizationInfo对象中
        info.addStringPermissions(permissionList);
        return info;
    }

    //认证登入
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        UsernamePasswordToken usernamePasswordToken = (UsernamePasswordToken) token;
        //从token中获取用户信息
        String username = usernamePasswordToken.getUsername();

        //根据用户信息，查询用户凭证
        SysUser user = userService.findByUsername(username);


        //将user数据存入info，返回AuthenticationInfo
        return new SimpleAuthenticationInfo(user,user.getPassword(),this.getClass().getName());
    }
}
