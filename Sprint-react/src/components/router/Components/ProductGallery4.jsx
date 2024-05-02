import React from 'react';
import '../style/Saude-BemEstar.css';
import produto1 from '../../../assets/Forever.png'

const products = [
    { id: 1, name: 'Product 1', price: 19.99, image: produto1 },
    { id: 2, name: 'Product 2', price: 29.99, image: produto1 },
    { id: 3, name: 'Product 3', price: 39.99, image: produto1 },
    { id: 4, name: 'Product 4', price: 19.99, image: produto1 },
    { id: 5, name: 'Product 5', price: 29.99, image: produto1 },
    { id: 6, name: 'Product 6', price: 39.99, image: produto1 },
    { id: 7, name: 'Product 7', price: 39.99, image: produto1 },
    { id: 8, name: 'Product 8', price: 19.99, image: produto1 },
    { id: 9, name: 'Product 9', price: 29.99, image: produto1 },
    { id: 10, name: 'Product 10', price: 39.99, image: produto1 },
    { id: 11, name: 'Product 11', price: 29.99, image: produto1 },
    { id: 12, name: 'Product 12', price: 39.99, image: produto1 },
    { id: 13, name: 'Product 13', price: 29.99, image: produto1 },
    { id: 14, name: 'Product 14', price: 39.99, image: produto1 },
  ];
  
  const ProductGallery4 = () => {
    return (
      <div className="product-gallery">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img className='produtos-img' src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button className='add-compra'>Add to Cart</button>
          </div>
        ))}
      </div>
    );
  };

export default ProductGallery4;