package com.xgb.shiro;

import com.xgb.model.SysUser;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authc.credential.SimpleCredentialsMatcher;
import org.apache.shiro.crypto.hash.SimpleHash;

public class CredentialMatcher extends SimpleCredentialsMatcher {
    //自定义密码校验规则
    @Override
    public boolean doCredentialsMatch(AuthenticationToken token, AuthenticationInfo info) {
        UsernamePasswordToken usernamePasswordToken = (UsernamePasswordToken) token;
        //获取用户输入的密码
        String password = new String(usernamePasswordToken.getPassword());
        //获取用户信息
        SysUser user = (SysUser) info.getPrincipals().getPrimaryPrincipal();
        String salt = user.getSalt();
        //转换成加密后的密码
        SimpleHash simpleHash = new SimpleHash("md5",password,salt,2);
        String password_md = simpleHash.toString();
        //获取数据库中的密码
        String dbPassword = user.getPassword();
        //进行对比
        return  this.equals(password_md,dbPassword);
    }
}
