package com.xgb.model;

import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "sys_user_role")
public class SysUserRole {
    @Id
    private Integer id;

    private Integer uid;

    private Integer rid;

    public SysUserRole() {
    }

    public SysUserRole(Integer uid, Integer rid) {
        this.uid = uid;
        this.rid = rid;
    }

    public SysUserRole(Integer id, Integer uid, Integer rid) {
        this.id = id;
        this.uid = uid;
        this.rid = rid;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public Integer getRid() {
        return rid;
    }

    public void setRid(Integer rid) {
        this.rid = rid;
    }
}