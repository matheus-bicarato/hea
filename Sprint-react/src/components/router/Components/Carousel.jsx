import React, { useState, useEffect } from 'react';
import '../style/Home.css';
import image1 from '../../../assets/Dorflex.jpg'
import image2 from '../../../assets/Amoxicina1.png'
import image3 from '../../../assets/Buscopan1.png'
import image4 from '../../../assets/Redken1.png'



const Carousel = () => {
    const [ currentSlide1, setCurrentSlide1] = useState(0);
    const products = [
        {
            id: 1,
            title: 'Produto 1',
            price: 19.99,
            image: image1,
        },
        {
            id: 2,
            title: 'Produto 2',
            price: 29.99,
            image: image2,
        },
        {
            id: 3,
            title: 'Produto 3',
            price: 39.99,
            image: image3,
        },
        {
            id: 3,
            title: 'Produto 4',
            price: 39.99,
            image: image4,
        },
    ];

    const nextCarousel = () => {
        setCurrentSlide1((prevCarousel) => (prevCarousel + 1) % products.length);
    };

    const prevCarousel = () => {
        setCurrentSlide1((prevCarousel) => (prevCarousel - 1 + products.length) % products.length);
    };
    // -----------------

    return (
        <div className="carousel">
            <div className="product">
                <img src={products[currentSlide1].image} alt={products[currentSlide1].title} />
                <h3>{products[currentSlide1].title}</h3>
                <p>${products[currentSlide1].price.toFixed(2)}</p>
            </div>
            <div className="navigation">
                <button className='interacao' onClick={prevCarousel}>Anterior</button>
                <button className='interacao' onClick={nextCarousel}>próximo</button>
            </div>
        </div>
    );
}


export default Carousel;