import React, { useState, useEffect } from 'react';
import './style/Home.css';
import Slider from './Components/Slider';
import Carousel from './Components/Carousel';
import fundo from '../../assets/Fundo-conteudo.png'


const Home = () => {

    return (
        <div className="conteudo">
            <Slider />

            <div className="produtos-favoritos">
                <div className="caixa">
                    <div className="escrita">
                        <div className='consteudo-titulo'>
                            <p>
                                <strong>Produtos Favoritos pelos Clientes!</strong>
                            </p>
                        </div>
                        <div className='frase-impactante'>
                            <p>
                                Os produtos mais vendidos da nossa Farmacia estão transformando <br />   vida e superando expectativas em cada compra!
                            </p>
                        </div>

                    </div>
                </div>

                <div className="produtos-Carousel">
                    <Carousel />
                </div>
            </div>
        </div>

    );
}

export default Home;