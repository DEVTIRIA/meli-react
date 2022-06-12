import React from 'react';
import { Link } from 'react-router-dom';

import './Breadcrumb.scss';

const Breadcrumb = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-10 offset-1'>
                    <nav aria-label='breadcrumb' className='breadcrumb'>
                        <ol className='breadcrumb m-0'>
                            <li className='breadcrumb-item'>
                                <a href='/'>Home</a>
                            </li>
                            <li className='breadcrumb-item'>
                                <Link to='/'>Prueba</Link>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
