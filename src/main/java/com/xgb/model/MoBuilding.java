package com.xgb.model;

public class MoBuilding {
    private Integer id;
    private String name;
    private String note;
    private Integer dormNum;
    private Integer emptyNum;

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

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Integer getDormNum() {
        return dormNum;
    }

    public void setDormNum(Integer dormNum) {
        this.dormNum = dormNum;
    }

    public Integer getEmptyNum() {
        return emptyNum;
    }

    public void setEmptyNum(Integer emptyNum) {
        this.emptyNum = emptyNum;
    }
}
