import React from 'react';
import { Link } from 'react-router-dom';
import { conditionTranslate } from '../../helpers/conditions';
import iconShipping from '../../assets/images/ic_shipping.png';

import './Product.scss';

const Product = ({ item }) => {
    const { id, address, condition, shipping, thumbnail, title, price } = item;

    return (
        <li className='product'>
            <div className='row'>
                <div className='col-md-9'>
                    <Link to={`/items/${id}`} className='text-decoration-none'>
                        <img
                            src={thumbnail}
                            className='img-fluid thumbnail float-start'
                            alt={title}
                            height='180'
                            width='180'
                        />
                    </Link>
                    <div className='detail-product'>
                        <div className='price'>
                            $ {new Intl.NumberFormat('es-CO').format(price)}
                            {shipping.free_shipping ? (
                                <img src={iconShipping} className='icon-shipping' alt='Icon Shipping' />
                            ) : (
                                ''
                            )}
                        </div>
                        <h2 className='m-0'>
                            <Link to='/' className='text-decoration-none'>
                                {title}
                            </Link>
                        </h2>
                        <div className='status'>{conditionTranslate(condition)}</div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <small>{address.state_name}</small>
                </div>
            </div>
        </li>
    );
};

export default Product;
