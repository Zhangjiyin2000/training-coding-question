package com.bfs.petownerapi.model;

import java.util.ArrayList;
import java.util.List;

public class Owner {
    String id;
    String name;
    List<Pet> pets = new ArrayList<>();

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setPets(List<Pet> pets) {
        this.pets = pets;
    }

    public List<Pet> getPets() {
        return pets;
    }
}
