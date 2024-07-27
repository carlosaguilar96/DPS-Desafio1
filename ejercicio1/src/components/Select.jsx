"use client"
import React from "react";
import { Elemento } from "../components/Elemento.jsx";
import { useState } from "react";
import { Total } from "./Total.jsx";

export const Select = () => {

    // Objeto JSON
    const movies = require("../app/movies.json");

    // Todas las peliculas agregadas. Inicialmente vacío
    const [moviesList, setMoviesList] = useState([]);

    // Película actualmente seleccionada en el select
    const [selectedMovie, setSelectedMovie] = useState(-1);

    // Bandera que indica si hay elementos en la lista
    const [bandera, setBandera] = useState(false);

    // Cambia el valor de selectedMovie según lo seleccionado en el select
    const onSelectChange = (evento) => {
        setSelectedMovie(evento.target.value);
    }

    // Función que añade la película seleccionada.
    const onAgregar = () => {
        if (selectedMovie != -1) {
            // Busca si la película ya estaba agregada
            let aux = moviesList.filter((pelicula) => pelicula.id == selectedMovie);

            if (aux.length > 0)
                alert("La película ya está guardada");
            else {
                setMoviesList([...moviesList, movies[selectedMovie]]);
                setBandera(true);
            }
        }
        else
            alert("Debes seleccionar una película");
    }


    const onChangeCantidad = (evento, key) => {

        let arregloAux = [...moviesList];
        arregloAux[key].cantidad = evento.target.value;
        setMoviesList(arregloAux);

    }

    // Función para eliminar un elemento de la lista
    const onDelete = (key) => {
        let aux = [...moviesList];
        aux.splice(key, 1);

        setMoviesList(aux);

        // Cuando ya no hay elementos, la bandera vuelve a ser false
        if (aux.length == 0)
            setBandera(false);
    }

    return (
        <div>
            <select onChange={(e) => onSelectChange(e)} defaultValue="-1">
                <option key="-1" value="-1">Elige la película</option>

                {movies.map(pelicula => (
                    <option value={pelicula.id} key={pelicula.id}>{pelicula.nombre}</option>
                ))}

            </select>
            <button onClick={onAgregar}>Agregar</button>

            <div>
                {moviesList.map((pelicula, llave) => (
                    <Elemento pelicula={pelicula} llave={llave} onChangeCantidad={onChangeCantidad} fEliminar={onDelete}></Elemento>
                ))}
            </div>
            <Total peliculas={moviesList} flag={bandera}></Total>

        </div>
    );
};