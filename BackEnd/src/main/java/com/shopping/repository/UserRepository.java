package com.shopping.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.shopping.entity.UserLogin;
import com.shopping.entity.UserReg;

@Repository
public interface UserRepository extends MongoRepository<UserReg, Integer>{

	public UserReg findByUsername(String username);

	public UserReg findByUsernameAndPassword(String username,String password);

}
