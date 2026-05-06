package com.bfs.petownerapi.repository;

import com.bfs.petownerapi.model.Owner;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface OwnerRepository extends MongoRepository<Owner, String> {

    List<Owner> findAll();

    Optional<Owner> findById(String id);
//    these two are already inherited from MongoRepository<Owner, String>
//    Owner save(Owner owner);
//
//    void deleteById(String id);

}
