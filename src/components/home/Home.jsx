import React, { Fragment } from 'react';
import Header from '../../shared/header/Header';

import './Home.scss';

const Home = () => {
    document.title = 'Inicio';
    return (
        <Fragment>
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col-10 offset-1'>
                        <div className='bg-white content-home'>
                            <h1>Test Práctico - Frontend</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;
