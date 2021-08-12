package com.shopping.services;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import com.shopping.entity.Cart;
import com.shopping.entity.Order;
import com.shopping.entity.Product;
import com.shopping.entity.UserLogin;
import com.shopping.entity.UserReg;

public interface UserService {
	public UserReg addUser(UserReg userReg) throws Exception;

	public UserReg userLogin(UserLogin userLogin) throws Exception;

	public Product addProduct(Product product);

	public List<Product> allProduct();

	public Optional<Product> getProduct(int id);

	public Cart addCart(Cart cart);

	public List<Cart> getCartProduct(String uid);

	public void deleteFromCart(int id);

	
	public Order myOrder(Order order);

	public void clearCart(String uid);

	public List<Order> getOrderDetails(String uid);
}
