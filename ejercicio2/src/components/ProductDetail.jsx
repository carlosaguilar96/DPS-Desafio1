import React from "react";
export const ProductDetail = ({
    product
}) => {
    return (
        <>
            <figure><img src={product.urlImage} alt={product.nombre} /></figure>
            <div className='info-product'>
                <h2>{product.nombre}</h2>
                <p className='descripcion'>{product.descripcion}</p>
                <p className='price'>${product.precio}</p>
            </div>
        </>
    );
};