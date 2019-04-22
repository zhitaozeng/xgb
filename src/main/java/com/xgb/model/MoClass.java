package com.xgb.model;

public class MoClass {
    private Integer id;
    private String name;
    private Integer qqgroup;
    private Integer major;
    private Integer studentnumber;
    private Integer time;
    private Major realMajor;

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

    public Major getRealMajor() {
        return realMajor;
    }

    public void setRealMajor(Major realMajor) {
        this.realMajor = realMajor;
    }
}
