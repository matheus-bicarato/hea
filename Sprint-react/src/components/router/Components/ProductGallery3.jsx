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
  { id: 1, name: 'Pamper', price: 12.99, image: img1 },
  { id: 2, name: 'Gohmsonis', price: 30.99, image: img2 },
  { id: 3, name: 'bepantol', price: 18.99, image: img3 },
  { id: 4, name: 'Chupeta', price: 2.99, image: img4 },
  { id: 5, name: 'Baby José', price: 5.99, image: img5 },
  { id: 6, name: 'Hipoglos', price: 8.99, image: img6 },
  { id: 7, name: 'Sabonete de Glicerina', price: 7.99, image: img7 },
  { id: 8, name: 'Aptamil', price: 9.99, image: img8 },
  { id: 9, name: 'Shampoo Suave', price: 20.99, image: img9 },
  { id: 10, name: 'Protex', price: 15.99, image: img10 },
  { id: 11, name: 'Sabonete Suave', price: 7.99, image: img11 },
  { id: 12, name: 'Condicionador', price: 19.99, image: img12 },
  ];
  
  const ProductGallery3 = () => {
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

export default ProductGallery3;