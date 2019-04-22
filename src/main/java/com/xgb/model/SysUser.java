package com.xgb.model;

import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "sys_user")
public class SysUser {
    @Id
    private Integer uid;

    private String username;

    private String password;

    private String salt;



    public SysUser() {
    }

    public SysUser(String username, String password, String salt) {
        this.username = username;
        this.password = password;
        this.salt = salt;
    }

    public SysUser(Integer uid, String username, String password, String salt) {
        this.uid = uid;
        this.username = username;
        this.password = password;
        this.salt = salt;
    }



    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt == null ? null : salt.trim();
    }
}