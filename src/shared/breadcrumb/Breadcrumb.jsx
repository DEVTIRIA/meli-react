import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Breadcrumb.scss';

const Breadcrumb = ({ filters }) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-10 offset-1'>
                    <nav aria-label='breadcrumb' className='breadcrumb'>
                        <ol className='breadcrumb m-0'>
                            {filters
                                ? filters.map(({ id, values, name }) =>
                                      values ? (
                                          <li key={id} className='breadcrumb-item'>
                                              {values[0].name}
                                          </li>
                                      ) : (
                                          <li key={id} className='breadcrumb-item'>
                                              {name}
                                          </li>
                                      )
                                  )
                                : ''}
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
