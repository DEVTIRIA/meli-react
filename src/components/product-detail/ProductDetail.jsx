import React, { Fragment } from 'react';
import Header from '../../shared/header/Header';

import './ProductDetail.scss';

const ProductDetail = () => {
    return (
        <Fragment>
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col-10 offset-1'>
                        <div className='bg-white product-detail'>
                            <div className='d-flex flex-row'>
                                <div className='content-thumbnail'>
                                    <img
                                        src='https://picsum.photos/680/400'
                                        className='img-fluid'
                                        alt='Img'
                                        width='680'
                                    />

                                    <h3>Descripción del producto</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quis beatae
                                        libero impedit minus aperiam ea dolore delectus ipsum illo quas, eius quam
                                        repudiandae vero distinctio dolorum esse deserunt accusamus.
                                    </p>
                                </div>
                                <div className='content-specs'>
                                    <div className='status'>Nuevo - 234 vendidos</div>
                                    <h1 className='m-0'>Lorem ipsum dolor sit amet consectetur.</h1>
                                    <div className='price'>$ 1.980</div>
                                    <div class='d-grid gap-2'>
                                        <a href='#' className='btn btn-blue'>
                                            Comprar
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProductDetail;
