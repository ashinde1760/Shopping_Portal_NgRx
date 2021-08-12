package com.shopping.repository;

import java.util.Set;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.shopping.entity.Product;

@Repository
public interface ProductRepository extends MongoRepository<Product, Integer>{

	

}
