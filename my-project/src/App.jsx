/* eslint-disable no-unused-vars */
import React from 'react';
import '../src/components/style.css'; // You can create a CSS file for styling
import img1 from "./assets/images/h1.jpg";
import img2 from "./assets/images/h2.jpg";
import img3 from "./assets/images/h3.jpg"
import img4 from "./assets/images/h4.jpg"
import img5 from "./assets/images/h5.jpg"
import img6 from "./assets/images/h6.jpg"
import img7 from "./assets/images/h7.jpg"
import img8 from "./assets/images/h8.jpg"
const products = [
  { id: 1, name: 'House1', price: 100000, image: img1, info: 'fdldnmnvkjbvbn vnsvh v' },
  { id: 2, name: 'house2', price: 20000, image: img2 },
  { id: 3, name: 'Smart Watch', price: 100, image: img3 },
  { id: 4, name: 'Headphone', price: 200, image: img4 },
  { id: 5, name: 'Camera', price: 300, image: img5 },
  { id: 6, name: 'Nike Shoes', price: 400, image: img6 },
  { id: 7, name: 'Apple watch', price: 500, image: img7 },
  { id: 8, name: 'Toy Car', price: 600, image: img8 },
  // Add more products as needed
];

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.info}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button className="add-to-cart" onClick={() => alert(`Added ${product.name} to Cart`)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
