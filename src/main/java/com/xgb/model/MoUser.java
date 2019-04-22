package com.xgb.model;

public class MoUser {
    private Integer uid;

    private String username;

    private String password;

    private String salt;

    private MoRole moRole;

    public MoUser() {
    }

    public MoRole getMoRole() {
        return moRole;
    }

    public void setMoRole(MoRole moRole) {
        this.moRole = moRole;
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
