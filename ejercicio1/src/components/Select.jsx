"use client"
import React from "react";
import { Elemento } from "../components/Elemento.jsx";
import { Total } from "./Total.jsx";
import { useState } from "react";

export const Select = () => {

    // Objeto JSON
    const movies = require("../app/movies.json");

    // Todas las peliculas agregadas. Inicialmente vacío
    const [moviesList, setMoviesList] = useState([]);

    // Película actualmente seleccionada en el select
    const [selectedMovie, setSelectedMovie] = useState(-1);

    // Cambia el valor de selectedMovie según lo seleccionado en el select
    const onSelectChange = (evento) => {
        setSelectedMovie(evento.target.value);
    }

    // Precio total
    const [precioTotal, setPrecioTotal] = useState(0);

    // Función que añade la película seleccionada.
    const onAgregar = () => {
        if (selectedMovie != -1) {
            // Busca si la película ya estaba agregada
            let aux = moviesList.filter((pelicula) => pelicula.id == selectedMovie);

            if (aux.length > 0)
                alert("Ya está guardada");
            else {
                setMoviesList([...moviesList, movies[selectedMovie]]);
                let aux = precioTotal + movies[selectedMovie].precio;
                setPrecioTotal(aux);
            }
        }
        else
            alert("Debes seleccionar una película");
    }

    return (
        <div>
            <select onChange={(e) => onSelectChange(e)}>
                <option selected value="-1">Elige la película</option>

                {movies.map(pelicula => (
                    <option value={pelicula.id}>{pelicula.nombre}</option>
                ))}

            </select>
            <button onClick={onAgregar}>Agregar</button>

            <div>
                {moviesList.map(pelicula => (
                    <Elemento pelicula={pelicula}></Elemento>
                )
                )
                }
            </div>

            <div>
                {precioTotal != 0 ? 
                <Total total={precioTotal}></Total> 
                : 
                <br></br>}
            </div>
        </div>
    );
};