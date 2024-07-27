import { useState } from "react";

export const Elemento = ({ pelicula, llave, onChangeCantidad, fEliminar }) => {

    const [subTotal, setSubTotal] = useState(pelicula.precio);

    // Calcula el subTotal en base a la cantidad y al precio.
    const calcularSubtotal = () => {
        setSubTotal(pelicula.precio * pelicula.cantidad);
    }

    return (
        <div key={llave} className="elementoP">
            <div>
                <p>Título: <span>{pelicula.nombre}</span></p>
                <p>Precio Unitario: <span>${pelicula.precio.toFixed(2)}</span></p>
                <p>SubTotal: <span>${subTotal.toFixed(2)}</span></p>
            </div>
            <div className="derecha">
                <label for={`txtM${pelicula.id}`}>Cantidad: </label>
                <input type="number" id={`txtM${pelicula.id}`} min="1" defaultValue={1} onChange={(e) => {
                    onChangeCantidad(e, llave);
                    calcularSubtotal();
                }}></input>
                <button type="button" onClick={() => fEliminar(llave)} className="btn eliminar">X</button>
            </div>
        </div>
    )
}