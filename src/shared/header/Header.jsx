import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo_ML.png';

import Search from '../search/Search';
import Breadcrumb from '../breadcrumb/Breadcrumb';

import './Header.scss';

const Header = ({ showBreadcrumb, filters }) => {
    return (
        <Fragment>
            <header className='pt-2 pb-2'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-10 offset-1'>
                            <div className='row'>
                                <div className='col-3 col-lg-1'>
                                    <Link to='/'>
                                        <img src={logo} className='img-fluid' alt='Logo Mercado Libre' width='60' />
                                    </Link>
                                </div>
                                <div className='col-9 col-lg-11 ps-0'>
                                    <Search />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section>{showBreadcrumb ? <Breadcrumb filters={filters} /> : ''}</section>
        </Fragment>
    );
};

export default Header;
