package com.bfs.petownerapi.controller;

import com.bfs.petownerapi.model.Owner;
import com.bfs.petownerapi.model.Pet;
import com.bfs.petownerapi.service.OwnerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class OwnerController {
    private final OwnerService ownerService;

    public OwnerController(OwnerService ownerService) {
        this.ownerService = ownerService;
    }

    @GetMapping("/owners")
    public List<Owner> getAllOwners(){
        return ownerService.getAllOwners();
    }

    @GetMapping("/owner/{id}")
    public Optional<Owner> getOwnerById(@PathVariable String id){
        return ownerService.getOwnerById(id);
    }

    @PostMapping("/owner")
    public Owner createOwner(@RequestBody Owner owner){
        return ownerService.createOwner(owner);
    }

    @PutMapping("/owner/{ownerId}/pet")
    public Owner addPetToOwner(@PathVariable String ownerId, @RequestBody Pet pet){
        return ownerService.addPetToOwner(ownerId, pet);
    }

    @DeleteMapping("owner/{id}")
    public void deleteOwnerById(@PathVariable String id){
        ownerService.deleteOwnerById(id);
    }
}
