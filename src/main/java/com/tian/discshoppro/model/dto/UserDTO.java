package com.tian.discshoppro.model.dto;

import java.util.Set;

public class UserDTO {
    private Long id;
    private String username;
    private String email;
    private Set<String> roles;

    public UserDTO() {}

    public UserDTO(Long id, String username, String email, Set<String> roles) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.roles = roles;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }
}