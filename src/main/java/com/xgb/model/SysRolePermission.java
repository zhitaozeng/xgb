package com.xgb.model;

import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "sys_role_permission")
public class SysRolePermission {
    @Id
    private Integer id;

    private Integer rid;

    private Integer pid;

    public SysRolePermission() {
    }

    public SysRolePermission(Integer rid, Integer pid) {
        this.rid = rid;
        this.pid = pid;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getRid() {
        return rid;
    }

    public void setRid(Integer rid) {
        this.rid = rid;
    }

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }
}