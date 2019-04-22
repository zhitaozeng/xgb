package com.xgb.model;

import javax.persistence.Id;

public class Class {
    @Id
    private Integer id;
    private String name;
    private Integer qqgroup;
    private Integer major;
    private Integer studentnumber;
    private Integer time;

    public Class() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getQqgroup() {
        return qqgroup;
    }

    public void setQqgroup(Integer qqgroup) {
        this.qqgroup = qqgroup;
    }

    public Integer getMajor() {
        return major;
    }

    public void setMajor(Integer major) {
        this.major = major;
    }

    public Integer getStudentnumber() {
        return studentnumber;
    }

    public void setStudentnumber(Integer studentnumber) {
        this.studentnumber = studentnumber;
    }

    public Integer getTime() {
        return time;
    }

    public void setTime(Integer time) {
        this.time = time;
    }
}
