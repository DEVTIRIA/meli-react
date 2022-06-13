import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { conditionTranslate } from '../../helpers/conditions';
import { getCategoryByID, getDescriptionByID, getProductByID } from '../../services/productsServices';
import Header from '../../shared/header/Header';

import './ProductDetail.scss';

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const [description, setDescription] = useState(null);
    const [categories, setCategories] = useState('');
    const { id } = useParams();

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        const item = (await getProductByID(id)) || null;
        const { plain_text } = await getDescriptionByID(id);
        const { path_from_root } = await getCategoryByID(item.category_id);
        document.title = item.title;

        setProduct(item);
        setDescription(plain_text);
        setCategories(path_from_root);
    };

    return (
        <Fragment>
            <Header showBreadcrumb={true} filters={categories} />
            <div className='container'>
                <div className='row'>
                    <div className='col-10 offset-1'>
                        <div className='bg-white product-detail'>
                            <div className='d-flex flex-row'>
                                <div className='content-thumbnail'>
                                    <img
                                        src={product?.pictures[0].url}
                                        className='img-fluid'
                                        alt={product?.title}
                                        width='680'
                                    />

                                    <h3>Descripción del producto</h3>
                                    <p className='mb-0'>{description}</p>
                                </div>
                                <div className='content-specs'>
                                    <div className='status'>
                                        {conditionTranslate(product?.condition)} - {product?.sold_quantity} vendidos
                                    </div>
                                    <h1 className='m-0'>{product?.title}</h1>
                                    <div className='price'>
                                        $ {new Intl.NumberFormat('es-CO').format(product?.price)}
                                    </div>
                                    <div className='d-grid gap-2'>
                                        <a href={product?.permalink} target='_blank' className='btn btn-blue'>
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
