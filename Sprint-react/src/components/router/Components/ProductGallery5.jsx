import React from 'react';
import '../style/Saude-BemEstar.css';
import img1 from '../../../assets/Forever.png'
import img2 from '../../../assets/saude_e_bem_estar/2.png'
import img3 from '../../../assets/saude_e_bem_estar/3.png'
import img4 from '../../../assets/saude_e_bem_estar/4.png'
import img5 from '../../../assets/saude_e_bem_estar/5.png'
import img6 from '../../../assets/saude_e_bem_estar/6.png'
import img7 from '../../../assets/saude_e_bem_estar/7.png'
import img8 from '../../../assets/saude_e_bem_estar/8.png'
import img9 from '../../../assets/saude_e_bem_estar/9.png'
import img10 from '../../../assets/saude_e_bem_estar/10.png'
import img11 from '../../../assets/saude_e_bem_estar/11.png'
import img12 from '../../../assets/saude_e_bem_estar/12.png'

const products = [
  { id: 1, name: 'Forever hair', price: 80.99, image: img1 },
  { id: 2, name: 'Gummy', price: 60.00, image: img2 },
  { id: 3, name: 'Dove', price: 10.99, image: img3 },
  { id: 4, name: 'Colgate', price: 1.99, image: img4 },
  { id: 5, name: 'Escova (colgate)', price: 1.99, image: img5 },
  { id: 6, name: 'Ora pró-nobis', price: 20.99, image: img6 },
  { id: 7, name: 'Saedra', price: 50.99, image: img7 },
  { id: 8, name: 'Creatina', price: 70.99, image: img8 },
  { id: 9, name: 'Lavitan', price: 40.00, image: img9 },
  { id: 10, name: 'Bio-C', price: 4.99, image: img10 },
  { id: 11, name: 'Vitaminas Complexo B', price: 6.99, image: img11 },
  { id: 12, name: 'Vitamina A', price: 7.99, image: img12 },
  ];
  
  const ProductGallery5 = () => {
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

export default ProductGallery5;