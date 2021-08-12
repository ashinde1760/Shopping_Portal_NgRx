package com.shopping.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.shopping.entity.Cart;
import com.shopping.entity.Order;
import com.shopping.entity.Product;

@Repository
public interface MyOrderRepository extends MongoRepository<Order, Integer> {
	
	List<Order> findAllByUid(String uid);

	void save(Cart cart);

}
