import React from 'react';
import { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//Importar CSS das Categorias
import './css/Categorias.css';

//Importar os dados de categoria
import { categorias } from '../../backend/dados';

export default function Categorias() {

    const [idClicado, setIdClicado] = useState(1);

    const handleClick = (e, id) => {
        // console.log('A categoria clicada atual é: ' + id);
        setIdClicado(id)
    }

    return (
        <div style={{ position: 'fixed', top: 0, marginTop: '80px', zIndex: 998 }} className='pt-2 container-fluid d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center container-airbnb row'>
                <div className='col-12 col-sm-11'>
                    <Swiper

                        breakpoints={{
                            100: {
                                slidesPerView: 3,
                                slidesPerGroup: 1,
                                spaceBetwee: 1
                            },
                            //JANELA MAIOR QUE 576 (sm)
                            576: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                                spaceBetwee: 4
                            },
                            //JANELA MAIOR QUE 768 (md)
                            768: {
                                slidesPerView: 6,
                                slidesPerGroup: 6,
                                spaceBetwee: 7
                            },
                            //JANELA MAIOR QUE 1200 (LG)
                            992: {
                                slidesPerView: 8,
                                slidesPerGroup: 8,
                                spaceBetwee: 7
                            },
                            //JANELA MAIOR QUE 1200 (XL)
                            1200: {
                                slidesPerView: 8,
                                slidesPerGroup: 8,
                                spaceBetwee: 7
                            },
                            //JANELA MAIOR QUE 1400
                            1400: {
                                slidesPerView: 10,
                                slidesPerGroup: 10,
                                spaceBetwee: 7
                            },
                            //JANELA MAIOR QUE >=1600 (xxl)
                            1600: {
                                slidesPerView: 14,
                                slidesPerGroup: 13,
                                spaceBetwee: 7
                            }
                        }}
                        pagination={false}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            categorias.map((dados, index) => (
                                <SwiperSlide
                                    key={dados.id}
                                    virtualIndex={index}
                                    className={dados.id === idClicado ? 'active' : ''}
                                    onClick={(e) => handleClick(e, dados.id)}
                                >
                                    <img className='mb-2' src={dados.imagem} />
                                    <span>{dados.titulo}</span>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>
                <div className='col-sm-1'>
                    <button className='d-none d-md-flex d-lg-none justify-content-center w-100 btn btn-filtro float-end'
                        data-bs-toggle="modal" data-bs-target="#filterModal">
                        <i className='mdi mdi-filter-variant me-2'></i>
                    </button>
                    <button className='d-none d-lg-flex btn btn-filtro d-flex float-end'
                        data-bs-toggle="modal" data-bs-target="#filterModal">
                        <i className='mdi mdi-filter-variant me-2'></i>
                        Filtros
                    </button>
                </div>
            </div>
        </div>
    )
}

