import React from 'react';
import '../style/Saude-BemEstar.css';
import img1 from '../../../assets/Genericos/1.png'
import img2 from '../../../assets/Genericos/2.png'
import img3 from '../../../assets/Genericos/3.png'
import img4 from '../../../assets/Genericos/4.png'
import img5 from '../../../assets/Genericos/5.png'
import img6 from '../../../assets/Genericos/6.png'
import img7 from '../../../assets/Genericos/7.png'
import img8 from '../../../assets/Genericos/8.png'
import img9 from '../../../assets/Genericos/9.png'
import img10 from '../../../assets/Genericos/10.png'
import img11 from '../../../assets/Genericos/11.png'
import img12 from '../../../assets/Genericos/12.png'

const products = [
  { id: 1, name: 'Isolaram potássica', price: 100.99, image: img1 },
  { id: 2, name: 'Citrato de sildenafila', price: 10.99, image: img2 },
  { id: 3, name: 'Ritimoneuran', price: 29.99, image: img3 },
  { id: 4, name: 'Ácido acetilsalicílico', price: 4.99, image: img4 },
  { id: 5, name: 'Maleato de dexclorfeniramina', price: 9.99, image: img5 },
  { id: 6, name: 'Mebendazol', price: 4.99, image: img6 },
  { id: 7, name: 'Cloridrato de Fexofenadina', price: 11.99, image: img7 },
  { id: 8, name: 'Ácido mefenamico', price: 9.99, image: img8 },
  { id: 9, name: 'Rosuvastatina cálcica', price: 24.99, image: img9 },
  { id: 10, name: 'Maleato de enalapril', price: 4.99, image: img10 },
  { id: 11, name: 'Amoxilina', price: 49.99, image: img11 },
  { id: 12, name: 'Hidróxido de alumínio', price: 9.99, image: img12 },
  ];
  
  const ProductGallery2 = () => {
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

export default ProductGallery2;