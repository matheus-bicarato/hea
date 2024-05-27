import React from 'react';
import '../style/Saude-BemEstar.css';
import img1 from '../../../assets/Produtos-diarios/1.png'
import img2 from '../../../assets/Produtos-diarios/2.png'
import img3 from '../../../assets/Produtos-diarios/3.png'
import img4 from '../../../assets/Produtos-diarios/4.png'
import img5 from '../../../assets/Produtos-diarios/5.png'
import img6 from '../../../assets/Produtos-diarios/6.png'
import img7 from '../../../assets/Produtos-diarios/7.png'
import img8 from '../../../assets/Produtos-diarios/8.png'
import img9 from '../../../assets/Produtos-diarios/9.png'
import img10 from '../../../assets/Produtos-diarios/10.png'
import img11 from '../../../assets/Produtos-diarios/11.png'
import img12 from '../../../assets/Produtos-diarios/12.png'

const products = [
  { id: 1, name: 'Principia', price: 70.00, image: img1 },
  { id: 2, name: 'Esfoliante Facia', price: 19.99, image: img2 },
  { id: 3, name: 'Nivea', price: 30.99, image: img3 },
  { id: 4, name: 'Hidratante', price: 24.99, image: img4 },
  { id: 5, name: 'Hidratante para mão', price: 29.99, image: img5 },
  { id: 6, name: 'Óleo corporal', price: 15.00, image: img6 },
  { id: 7, name: 'Óleo de Coco', price: 15.00, image: img7 },
  { id: 8, name: 'Creme para cabelo', price: 19.99, image: img8 },
  { id: 9, name: 'Protetor solar para o rosto', price: 29.99, image: img9 },
  { id: 10, name: 'Óleo para o cabelo', price: 39.99, image: img10 },
  { id: 11, name: 'Nivea Acne', price: 24.99, image: img11 },
  { id: 12, name: 'Tônico Poderoso', price: 99.99, image: img12 },
  ];
  
  const ProductGallery1 = () => {
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

export default ProductGallery1;