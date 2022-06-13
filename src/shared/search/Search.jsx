import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import iconSearch from '../../assets/images/ic_Search.png';

import './Search.scss';

const Search = () => {
    const [term, setTerm] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/items/search/${term}`);
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <input
                        type='search'
                        name='term'
                        className='form-control'
                        placeholder='Nunca dejes de buscar'
                        onChange={handleInputChange}
                    />
                    <span className='input-group-text' onClick={handleSubmit}>
                        <img src={iconSearch} alt='Icon Search' />
                    </span>
                </div>
            </form>
        </Fragment>
    );
};

export default Search;
