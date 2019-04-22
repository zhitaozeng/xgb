package com.xgb.model;

import javax.persistence.Id;
import javax.persistence.Table;


@Table(name = "sys_role")
public class SysRole {
    @Id
    private Integer rid;

    private String name;

    private String rcode;

    private String comment;


    public SysRole() {
    }

    public SysRole(Integer rid, String name, String rcode, String comment) {
        this.rid = rid;
        this.name = name;
        this.rcode = rcode;
        this.comment = comment;
    }



    public SysRole(String name, String rcode, String comment) {
        this.name = name;
        this.rcode = rcode;
        this.comment = comment;
    }



    public Integer getRid() {
        return rid;
    }

    public void setRid(Integer rid) {
        this.rid = rid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getRcode() {
        return rcode;
    }

    public void setRcode(String rcode) {
        this.rcode = rcode == null ? null : rcode.trim();
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment == null ? null : comment.trim();
    }
}