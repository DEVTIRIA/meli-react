import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByTerm } from '../../services/productsServices';

import Header from '../../shared/header/Header';
import Product from '../product/Product';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState(null);
    const { search } = useParams();

    useEffect(() => {
        document.title = search;
        getProducts();
    }, [search]);

    const getProducts = async () => {
        const { filters, results } = await getProductsByTerm(search);

        setCategories(filters);

        if (results.length > 0) {
            setProducts(results);
        } else {
            setProducts([]);
        }
    };

    return (
        <Fragment>
            <Header showBreadcrumb={true} filters={categories} />
            <div className='container'>
                <div className='row'>
                    <div className='col-10 offset-1'>
                        <div className='bg-white'>
                            <ul className='list-unstyled m-0'>
                                {products.map((product) => (
                                    <Product key={product.id} item={product} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProductList;
