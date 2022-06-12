import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

const Product = () => {
    return (
        <li className='product'>
            <div className='row'>
                <div className='col-9'>
                    <Link to='/' className='text-decoration-none'>
                        <img
                            src='https://picsum.photos/180/180'
                            className='img-fluid thumbnail float-start'
                            alt='Img'
                            height='180'
                            width='180'
                        />
                    </Link>
                    <div className='detail-product'>
                        <div className='price'>$ 1.980</div>
                        <h2 className='m-0'>
                            <Link to='/' className='text-decoration-none'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, veniam.
                            </Link>
                        </h2>
                        <div className='status'>Completo Unico!</div>
                    </div>
                </div>
                <div className='col-3'>
                    <small>Capital Federal</small>
                </div>
            </div>
        </li>
    );
};

export default Product;
