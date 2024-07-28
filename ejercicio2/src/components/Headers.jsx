"use client"
import { useState } from 'react';
import Swal from 'sweetalert2';
import { CartDetail } from '@/components/CartDetail';
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
            title: "¿Está seguro que desea eliminar el artículo "+product.nombre+"?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#deb887",
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                const results = allProducts.filter(
                    item => item.id !== product.id
                );
                setTotal(total - product.precio * product.quantity);
                setCountProducts(countProducts - product.quantity);
                setAllProducts(results);
                Swal.fire({
                    title: "Artículo eliminado",
                    icon: "success",
                    confirmButtonColor: "#deb887"
                });
            }
        });
    };
    const onCleanCart = () => {
        Swal.fire({
            title: "¿Está seguro que desea vaciar el carrito?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#deb887",
            confirmButtonText: "Vaciar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                setAllProducts([]);
                setTotal(0);
                setCountProducts(0);
                Swal.fire({
                    title: "Carrito vacío",
                    icon: "success",
                    confirmButtonColor: "#deb887"
                });
            }
        });
    };
    const cambiarCantidad = product => {
        if (allProducts.find(item => item.id === product.id)) {
            var cantidad = parseInt(document.getElementById('inputCantidad'+product.id).value);
            console.log(cantidad);
                const products = allProducts.map(item => item.id === product.id ? { ...item, quantity: cantidad }: item);
                if(cantidad>product.quantity){
                  setTotal(total + product.precio);
                  setCountProducts(countProducts + 1);
                }
                else{
                  setTotal(total - product.precio);
                  setCountProducts(countProducts - 1);
                }
                return setAllProducts([...products]);
            
        }
        setTotal(total + product.precio * cantidad);
        setCountProducts(countProducts + cantidad);
        setAllProducts([...allProducts, product]);
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
                                        <CartDetail 
                                            product={product}
                                        />
                                        <div>
                                            <img src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png" alt="cerrar" className="icon-close" onClick={() => onDeleteProduct(product)}/><br/><br/>
                                            <input id={"inputCantidad"+product.id} type="number" value={product.quantity} min="1" className='inputCantidad' onChange={() => cambiarCantidad(product)}></input>  
                                        </div>
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