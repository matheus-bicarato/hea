import React from 'react';
import '../style/Saude-BemEstar.css';
import img1 from '../../../assets/Infantil/1.png'
import img2 from '../../../assets/Infantil/2.png'
import img3 from '../../../assets/Infantil/3.png'
import img4 from '../../../assets/Infantil/4.png'
import img5 from '../../../assets/Infantil/5.png'
import img6 from '../../../assets/Infantil/6.png'
import img7 from '../../../assets/Infantil/7.png'
import img8 from '../../../assets/Infantil/8.png'
import img9 from '../../../assets/Infantil/9.png'
import img10 from '../../../assets/Infantil/10.png'
import img11 from '../../../assets/Infantil/11.png'
import img12 from '../../../assets/Infantil/12.png'

const products = [
  { id: 1, name: 'Product 1', price: 19.99, image: img1 },
  { id: 2, name: 'Product 2', price: 29.99, image: img2 },
  { id: 3, name: 'Product 3', price: 39.99, image: img3 },
  { id: 4, name: 'Product 4', price: 19.99, image: img4 },
  { id: 5, name: 'Product 5', price: 29.99, image: img5 },
  { id: 6, name: 'Product 6', price: 39.99, image: img6 },
  { id: 7, name: 'Product 7', price: 39.99, image: img7 },
  { id: 8, name: 'Product 8', price: 19.99, image: img8 },
  { id: 9, name: 'Product 9', price: 29.99, image: img9 },
  { id: 10, name: 'Product 10', price: 39.99, image: img10 },
  { id: 11, name: 'Product 11', price: 29.99, image: img11 },
  { id: 12, name: 'Product 12', price: 39.99, image: img12 },
  ];
  
  const ProductGallery3 = () => {
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

export default ProductGallery3;