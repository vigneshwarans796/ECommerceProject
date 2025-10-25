import React, { useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";
import { useNavigate } from "react-router-dom";

import "./ProductList.css";
const ProductList = ({products}) => {
const navigate= useNavigate();
  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card" onClick={()=>navigate(`/product/${product.id}`)}>
          {product.imageUrl && (
            <img src={product.imageUrl} alt={product.name} className="product-image"/>
          )}
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">₹{product.price}</p>
          <p className="product-quantity">Quantity: {product.quantity}</p>
        </div>
      ))}
    </div>
  );
};
export default ProductList;


