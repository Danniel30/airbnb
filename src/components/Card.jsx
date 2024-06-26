import React from 'react'
//Importar CSS do CardGroup
import './css/Card.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//Importar dados de Back-end (simulação)
import { acomodacoes } from '../../backend/dados.js';

export default function Card() {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div className='container-fluid'>
            <div className="container-airbnb row">
                {
                    acomodacoes.map((acomodacao, index) => (
                        <div key={acomodacao.id} className='mt-4 col-xxl-2'>
                            <Swiper
                                className='img-content'
                                navigation={true}
                                pagination={true}
                                modules={[Pagination, Navigation]}

                            >
                                {
                                    acomodacao.imagens.map((imagem, index) => (
                                        <SwiperSlide
                                            className='swiperImg'
                                            key={index}
                                        >
                                            <img src={imagem} className='img-fluid cardImage' />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>

                            <p className='d-flex justify-content-between mt-3 mb-0'>
                                <span style={{ display: 'block', maxWidth: '200px' }} className='fw-bold text-truncate'>{acomodacao.cidade},{acomodacao.pais}</span>
                                <span><i className='mdi mdi-star'></i>{acomodacao.nota}</span>

                            </p>
                            <p className='text-muted my-0'>{getRandomInt(10, 800)} KM de distância</p>
                            <p className='text-muted'>{getRandomInt(1, 31)} de jan - {getRandomInt(1, 28)} de fev</p>
                            <p className='fw-bold'>R$ {acomodacao.preco.toLocaleString('pt-BR')} noite</p>

                        </div>
                    ))
                }


            </div>

        </div>
    )
}
