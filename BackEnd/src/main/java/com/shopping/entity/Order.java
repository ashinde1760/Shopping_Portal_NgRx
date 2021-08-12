package com.shopping.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "MyOrder")
public class Order {

	@Id
	private int id;
	private String productName;
	
	private String price;
	private String uid;
	private Long date;
	private int GrandTotal;
	
	
	
	@Transient
	public static final String SEQUENCE_NAME = "user_sequence";
	
	
	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public Long getDate() {
		return date;
	}

	public void setDate(Long date) {
		this.date = date;
	}

	public int getGrandTotal() {
		return GrandTotal;
	}

	public void setGrandTotal(int grandTotal) {
		GrandTotal = grandTotal;
	}

	public Order(int id, String productName, String price, String uid, Long date, int grandTotal) {
		super();
		this.id = id;
		this.productName = productName;
		this.price = price;
		this.uid = uid;
		this.date = date;
		GrandTotal = grandTotal;
	}

}