package com.shopping.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.shopping.entity.Cart;
import com.shopping.entity.Product;

@Repository
public interface CartRepository extends MongoRepository<Cart, Integer> {
	List<Cart> findAllByUid(String uid);

	void deleteByUid(String uid);

}
