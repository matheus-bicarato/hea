import React from 'react';
import '../style/Saude-BemEstar.css';
import img1 from '../../../assets/medicamentos/1.png'
import img2 from '../../../assets/medicamentos/2.png'
import img3 from '../../../assets/medicamentos/3.png'
import img4 from '../../../assets/medicamentos/4.png'
import img5 from '../../../assets/medicamentos/5.png'
import img6 from '../../../assets/medicamentos/6.png'
import img7 from '../../../assets/medicamentos/7.png'
import img8 from '../../../assets/medicamentos/8.png'
import img9 from '../../../assets/medicamentos/9.png'
import img10 from '../../../assets/medicamentos/10.png'
import img11 from '../../../assets/medicamentos/11.png'
import img12 from '../../../assets/medicamentos/12.png'

const products = [
  { id: 1, name: 'Dipirona', price: 5.99, image: img1 },
    { id: 2, name: 'ibuprofeno', price: 7.99, image: img2 },
    { id: 3, name: 'Buscopan', price: 19.99, image: img3 },
    { id: 4, name: 'Allegra', price: 69.99, image: img4 },
    { id: 5, name: 'ácido mefenâmico', price: 16.90, image: img5 },
    { id: 6, name: 'Dorflex', price: 8.90, image: img6 },
    { id: 7, name: 'paracetamol', price: 7.99, image: img7 },
    { id: 8, name: 'Adivil', price: 19.99, image: img8 },
    { id: 9, name: 'Cloridrato de Metformina', price: 9.99, image: img9 },
    { id: 10, name: 'Cloridrato de Amiodarona', price: 6.99, image: img10 },
    { id: 11, name: 'Novalgina', price: 12.99, image: img11 },
    { id: 12, name: 'Ibuplil', price: 15.99, image: img12 },
  ];
  
  const ProductGallery4 = () => {
    return (
      <div className="product-gallery">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img className='produtos-img' src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>preço: R${product.price}</p>
            <button className='add-compra'>Adicionar no carrinho</button>
          </div>
        ))}
      </div>
    );
  };

export default ProductGallery4;