package com.shopping.controller;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.entity.Cart;
import com.shopping.entity.Order;
import com.shopping.entity.Product;
import com.shopping.entity.UserLogin;
import com.shopping.entity.UserReg;
import com.shopping.services.UserService;

@RestController
@RequestMapping("/product")
@CrossOrigin("*")
public class ProductController {

	@Autowired
	private UserService service;

	@PostMapping("/addProduct")
	public Product product(@RequestBody Product product) throws Exception {
		return service.addProduct(product);
	}

	@GetMapping("/allProducts")
	public List<Product> allProducts() throws Exception {
		return service.allProduct();
	}

	@GetMapping("/getProduct/{id}")
	public Optional<Product> getProduct(@PathVariable int id) throws Exception {
		return service.getProduct(id);
	}

	@PostMapping("/addToCart")
	public Cart addCart(@RequestBody Cart cart) throws Exception {
		return service.addCart(cart);
	}

	@PostMapping("/myOrder")
	public Order myOrder(@RequestBody Order order) throws Exception {
			System.out.println("welcome to myorder page....");
			return service.myOrder(order);
		
	}

//	@DeleteMapping("/clearCart")
//	public void clearCart(@RequestParam int id) throws Exception
//	{	
//		service.clearCart(id);
//	}
//	
	@GetMapping("/getCartProduct/{uid}")
	public List<Cart> getCartProduct(@PathVariable String uid) throws Exception {
		return service.getCartProduct(uid);
	}

	@DeleteMapping("/deleteFromCart/{id}")
	public void deleteFromCart(@PathVariable int id) {
		service.deleteFromCart(id);
	}
	
	@DeleteMapping("/clearCart/{uid}")
	public void clearCart(@PathVariable String uid) {
		System.out.println("in clearcart backend"+uid);
		service.clearCart(uid);
	}
	
	
	
	@GetMapping("/getOrderDetails/{uid}")
	public List<Order> getOrderDetails(@PathVariable String uid) throws Exception {
		return service.getOrderDetails(uid);
	}
	
	

}