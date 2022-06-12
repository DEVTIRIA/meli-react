import React, { Fragment } from 'react';

import Header from '../../shared/header/Header';
import Product from '../product/Product';

const ProductList = () => {
    return (
        <Fragment>
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col-10 offset-1'>
                        <div className='bg-white'>
                            <ul className='list-unstyled m-0'>
                                <Product />
                                <Product />
                                <Product />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProductList;
