import React from 'react';
import {getAllMovies} from "@/services/api.service";
import Link from "next/link";
import MoviesListComponent from '@/components/moviesList/MoviesListComponent'

const MoviePage = async () => {
    let movies = await getAllMovies();
    console.log(movies)

    return (
        <div>
            <MoviesListComponent movies={movies}/>
        </div>
    );
};

export default MoviePage;