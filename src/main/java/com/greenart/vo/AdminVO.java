package com.greenart.vo;

public class AdminVO {
    private String id;
    private String name;
    private Integer user_type;

    public Integer getUser_type() {
        return this.user_type;
    }

    public void setUser_type(Integer user_type) {
        this.user_type = user_type;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
