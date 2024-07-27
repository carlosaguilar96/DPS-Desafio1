import { useState } from "react";

export const Elemento = ({ pelicula, llave, onChangeCantidad, fEliminar}) => {

    const [subTotal, setSubTotal] = useState(pelicula.precio);

    // Calcula el subTotal en base a la cantidad y al precio.
    const calcularSubtotal = () =>{
        setSubTotal(pelicula.precio * pelicula.cantidad);
    }

    return (
        <div key={llave}>
            <p>Título: {pelicula.nombre}</p>
            <p>Precio Unitario: ${pelicula.precio}</p>
            <label for={`txtM${pelicula.id}`}>Cantidad: </label>
            <input type="number" id={`txtM${pelicula.id}`} min="1" defaultValue={1} onChange={(e) => {onChangeCantidad(e, llave);
                calcularSubtotal();
            }}></input>
            <p>SubTotal: ${subTotal}</p>
            <button type="button" onClick={() => fEliminar(llave)}>Eliminar</button>
            <hr></hr>
        </div>
    )
}