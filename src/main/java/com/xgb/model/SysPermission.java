package com.xgb.model;

import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "sys_permission")
public class SysPermission {
    @Id
    private Integer pid;

    private String name;

    private String percode;

    public SysPermission() {
    }

    public SysPermission(Integer pid, String name, String percode) {
        this.pid = pid;
        this.name = name;
        this.percode = percode;
    }

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getPercode() {
        return percode;
    }

    public void setPercode(String percode) {
        this.percode = percode == null ? null : percode.trim();
    }
}