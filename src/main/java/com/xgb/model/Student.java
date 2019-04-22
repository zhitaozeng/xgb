package com.xgb.model;

import javax.persistence.Id;

public class Student {
    @Id
    private Integer id;
    private String num;
    private String name;
    private String sex;
    private String nation;
    private String politicalstatus;
    private Integer dormid;
    private String qq;
    private String address;
    private String selfphone;
    private String idcard;
    private String relativephone;
    private Integer classid;

    public Student() {
    }

    public Student(Integer classid,String num, String name, String sex, String nation,String idcard, String politicalstatus, String qq, String address, String selfphone, String relativephone) {
        this.num = num;
        this.name = name;
        this.sex = sex;
        this.nation = nation;
        this.politicalstatus = politicalstatus;
        this.qq = qq;
        this.address = address;
        this.selfphone = selfphone;
        this.idcard = idcard;
        this.relativephone = relativephone;
        this.classid = classid;
    }



    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }


    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    public Integer getDormid() {
        return dormid;
    }

    public void setDormid(Integer dormid) {
        this.dormid = dormid;
    }

    public String getQq() {
        return qq;
    }

    public void setQq(String qq) {
        this.qq = qq;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getSelfphone() {
        return selfphone;
    }

    public void setSelfphone(String selfphone) {
        this.selfphone = selfphone;
    }

    public String getIdcard() {
        return idcard;
    }

    public void setIdcard(String idcard) {
        this.idcard = idcard;
    }


    public String getRelativephone() {
        return relativephone;
    }

    public void setRelativephone(String relativephone) {
        this.relativephone = relativephone;
    }

    public Integer getClassid() {
        return classid;
    }

    public void setClassid(Integer classid) {
        this.classid = classid;
    }

    public String getPoliticalstatus() {
        return politicalstatus;
    }

    public void setPoliticalstatus(String politicalstatus) {
        this.politicalstatus = politicalstatus;
    }
}