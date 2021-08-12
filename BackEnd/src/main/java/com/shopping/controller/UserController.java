package com.shopping.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.entity.UserLogin;
import com.shopping.entity.UserReg;
import com.shopping.services.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserService service;
	
	@PostMapping("/addUser")
	public UserReg addUser(@RequestBody UserReg userReg) throws Exception
	{
		
		return service.addUser(userReg);
	}
	
	@PostMapping("/login")
	public UserReg userLogin(@RequestBody UserLogin userLogin) throws Exception
	{
		System.out.println(userLogin.getUsername());
		return service.userLogin(userLogin);
	}
	
	
}
