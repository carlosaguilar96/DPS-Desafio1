import { useEffect, useState } from "react";

export const Total = ({ peliculas, flag }) => {

    // Precio total
    const [total, setTotal] = useState(0);
    let totalAux = 0;

    // Cada vez que cambia el valor de peliculas, se calcula el total
    useEffect(() => {
        calcular();
    }, [peliculas]);

    const calcular = () => {
        totalAux = 0;

        // La bandera es un indicador de si hay elementos
        if (flag) {
            peliculas.forEach((pelicula) => {
                totalAux += (pelicula.precio * pelicula.cantidad);
                setTotal(totalAux);
            });
        }
        // Todo esta vacío, por lo que el precio es automáticamente 0
        else
            setTotal(0);
    }

    return (
        <div className="total">
            <p>Total: <b>${total.toFixed(2)}</b></p>
        </div>
    )
}