package com.xgb.model;

import javax.persistence.Id;

public class Major {
    @Id
    private Integer id;
    private String name;
    private String schoolsystem;

    public Major() {
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

    public String getSchoolsystem() {
        return schoolsystem;
    }

    public void setSchoolsystem(String schoolsystem) {
        this.schoolsystem = schoolsystem;
    }
}
