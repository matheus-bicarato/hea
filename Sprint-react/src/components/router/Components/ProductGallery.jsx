import React from 'react';
import '../style/Saude-BemEstar.css';
import img1 from '../../../assets/beleza-img/1.png'
import img2 from '../../../assets/beleza-img/2.png'
import img3 from '../../../assets/beleza-img/3.png'
import img4 from '../../../assets/beleza-img/4.png'
import img5 from '../../../assets/beleza-img/5.png'
import img6 from '../../../assets/beleza-img/6.png'
import img7 from '../../../assets/beleza-img/7.png'
import img8 from '../../../assets/beleza-img/8.png'
import img9 from '../../../assets/beleza-img/9.png'
import img10 from '../../../assets/beleza-img/10.png'
import img11 from '../../../assets/beleza-img/11.png'
import img12 from '../../../assets/beleza-img/12.png'

const products = [
    { id: 1, name: 'Lip balm', price: 68.99, image: img1 },
    { id: 2, name: 'Better Me', price: 13.99, image: img2 },
    { id: 3, name: 'Óleo de Rícino', price: 19.99, image: img3 },
    { id: 4, name: 'Toca', price: 13.99, image: img4 },
    { id: 5, name: 'Koleston', price: 20.99, image: img5 },
    { id: 6, name: 'Fortalecimento de Cabelo', price: 15.99, image: img6 },
    { id: 7, name: 'Elásticos para cabelo', price: 2.99, image: img7 },
    { id: 8, name: 'Pente', price: 10.99, image: img8 },
    { id: 9, name: 'Risque', price: 8.99, image: img9 },
    { id: 10, name: 'alicate de unha', price: 14.99, image: img10 },
    { id: 11, name: 'Soothing', price: 13.99, image: img11 },
    { id: 12, name: 'Pó descolorante', price: 15.30, image: img12 },
  ];
  
  const ProductGallery = () => {
    return (
      <div className="product-gallery">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img className='produtos-img' src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Preço: R${product.price}</p>
            <button className='add-compra'>Adicionar no carrinho</button>
          </div>
        ))}
      </div>
    );
  };

export default ProductGallery;