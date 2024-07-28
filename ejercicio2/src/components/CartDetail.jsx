import React from "react";
export const CartDetail = ({
    product
}) => {
    return (
        <div className='info-cart-product'>
            <figure><img src={product.urlImage}></img></figure>
            <div>
                <p className='titulo-producto-carrito'>{product.nombre}</p><br/>
                <span className='precio-producto-carrito'>${product.precio}</span>
            </div>
        </div>
    );
};