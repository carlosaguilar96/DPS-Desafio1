import React from "react";
import {productosCat1} from "../app/productosCat1.json";
import {productosCat2} from "../app/productosCat2.json";
import {productosCat3} from "../app/productosCat3.json";
import {productosCat4} from "../app/productosCat4.json";
import {productosCat5} from "../app/productosCat5.json";
import { ProductDetail } from '@/components/ProductDetail';
import Swal from 'sweetalert2';
export const ProductList = ({
    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal,
}) => {
    const onAddProduct = product => {
        if (allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 }: item);
            setTotal(total + product.precio * product.quantity);
            setCountProducts(countProducts + product.quantity);
            return setAllProducts([...products]);
        }
        setTotal(total + product.precio * product.quantity);
        setCountProducts(countProducts + product.quantity);
        setAllProducts([...allProducts, product]);
        Swal.fire({
            title: "Producto agregado",
            text: product.nombre+" ha sido agregado al carrito",
            icon: "success",
            confirmButtonColor: "#deb887",
        });
    };
    return (
        <div className='container-items'>
            {productosCat1.map(product => (
                <>
                    <div className='item' key={product.id}>
                        <ProductDetail
                            product={product}
                        />
                        <div className='info-product'>
                            <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                            <h5>Categoría: Yoga y Pilates</h5>
                        </div>
                    </div>
                </>
            ))}
            {productosCat2.map(product => (
                <>
                    <div className='item' key={product.id}>
                        <ProductDetail
                            product={product}
                        />
                        <div className='info-product'>
                            <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                            <h5>Categoría: Fútbol</h5>
                        </div>
                    </div>
                </>
            ))}
            {productosCat3.map(product => (
                <>
                    <div className='item' key={product.id}>
                        <ProductDetail
                            product={product}
                        />
                        <div className='info-product'>
                            <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                            <h5>Categoría: Mochilas Deportivas</h5>
                        </div>
                    </div>
                </>
            ))}
            {productosCat4.map(product => (
                <>
                    <div className='item' key={product.id}>
                        <ProductDetail
                            product={product}
                        />
                        <div className='info-product'>
                            <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                            <h5>Categoría: Ciclismo</h5>
                        </div>
                    </div>
                </>
            ))}
            {productosCat5.map(product => (
                <>
                    <div className='item' key={product.id}>
                        <ProductDetail
                            product={product}
                        />
                        <div className='info-product'>
                            <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                            <h5>Categoría: Boxeo</h5>
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
};