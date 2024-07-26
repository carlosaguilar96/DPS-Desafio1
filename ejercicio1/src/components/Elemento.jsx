export const Elemento = ({pelicula}) =>{

    const onChangeCantidad = (evento) =>{

    }
    return(
        <div key={pelicula.id}>
            <p>Título: {pelicula.nombre}</p>
            <p>Precio Unitario: ${pelicula.precio}</p>
            <label for={`txtM${pelicula.id}`}>Cantidad: </label>
            <input type="number" id={`txtM${pelicula.id}`} min="1" defaultValue={1} onChange={(e) => onChangeCantidad(e)}></input>
            <hr></hr>
        </div>
    )
}