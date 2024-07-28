"use client"
import { useState } from 'react';
import Swal from 'sweetalert2';
export const Headers = ({
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal,
}) => {
    const [active, setActive] = useState(false);
    const onDeleteProduct = product => {
        Swal.fire({
            title: "¿Está seguro que desea eliminar el artículo?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Borrar"
        }).then((result) => {
            if (result.isConfirmed) {
                const results = allProducts.filter(
                    item => item.id !== product.id
                );
                setTotal(total - product.price * product.quantity);
                setCountProducts(countProducts - product.quantity);
                setAllProducts(results);
                Swal.fire({
                    title: "Artículo eliminado",
                    icon: "success"
                });
            }
        });
    };
    const onCleanCart = () => {
        Swal.fire({
            title: "¿Está seguro que desea vaciar el carrito?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Vaciar"
        }).then((result) => {
            if (result.isConfirmed) {
                setAllProducts([]);
                setTotal(0);
                setCountProducts(0);
                Swal.fire({
                    title: "Carrito vacío",
                    icon: "success"
                });
            }
        });
    };
    return (
        <header>
            <h1>JAGUAR SPORT</h1>
            <div className='container-icon'>
                <div className='container-cart-icon' onClick={() => setActive(!active)}>
                    <img src="img/cart.png" alt="carrito" className="icon-cart" />
                    <div className='count-products'>
                        <span id='contador-productos'>{countProducts}</span>
                    </div>
                </div>
                <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
                    {allProducts.length ? (
                    <>
                        <div className='row-product'>
                            {allProducts.map(product => (
                                <div className='cart-product' key={product.id}>
                                    <div className='info-cart-product'>
                                        <span className='cantidad-producto-carrito'>{product.quantity}</span>
                                        <img src={product.urlImage} className="icon-cart"></img>
                                        <p className='titulo-producto-carrito'>{product.title}</p>
                                        <span className='precio-producto-carrito'>${product.price}</span>
                                    </div>
                                    <img src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png" alt="cerrar" className="icon-close" onClick={() => onDeleteProduct(product)}/>
                                </div>
                            ))}
                        </div>
                        <div className='cart-total'>
                            <h3>Total:</h3>
                            <span className='total-pagar'>${total}</span>
                        </div>
                        <button className='btn-clear-all' onClick={onCleanCart}>Vaciar Carrito</button>
                    </>
                    ) : (
                        <p className='cart-empty'>El carrito está vacío</p>
                    )}
                </div>
            </div>
        </header>
    );
};