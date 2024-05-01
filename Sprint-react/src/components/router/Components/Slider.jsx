import React, { useState, useEffect } from 'react';
import '../style/Home.css';
import image1 from '../../../assets/banner1.jpeg'
import image2 from '../../../assets/banner2.jpeg'
import image3 from '../../../assets/banner3.jpeg'



    const Slider = () => {
        // itens do slider automatico 
        const [currentSlide, setCurrentSlide, currentSlide1, setCurrentSlide1] = useState(0);
        const slides = [
            image1,
            image2,
            image3,
        ];

        // variaveis

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
            }, 3000);

            return () => clearInterval(interval);
        }, []);

        // -----------------
        return (
            <div className="slider-container">
                {slides.map((slide, index) => (
                    <div key={index} className={index === currentSlide ? 'slide active' : 'slide'}>
                        <img className='image' src={slide} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

        );
    }


export default Slider;