package com.bfs.petownerapi.service;

import com.bfs.petownerapi.model.Owner;
import com.bfs.petownerapi.model.Pet;
import com.bfs.petownerapi.repository.OwnerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OwnerService {
    private final OwnerRepository ownerRepository;

    public OwnerService(OwnerRepository ownerRepository) {
        this.ownerRepository = ownerRepository;
    }

    public List<Owner> getAllOwners() {
        return ownerRepository.findAll();
    }

    public Optional<Owner> getOwnerById(String id){
        return ownerRepository.findById(id);
    }

    public Owner createOwner(Owner owner){
        return ownerRepository.save(owner);
    }

    public Owner addPetToOwner(String ownerId, Pet pet){
        Owner owner = this.ownerRepository.findById(ownerId)
                .orElseThrow(() -> new RuntimeException("Owner not found"));

        owner.getPets().add(pet);
        return ownerRepository.save(owner);
    }

    public void deleteOwnerById(String ownerId){
        ownerRepository.deleteById(ownerId);
    }
}
