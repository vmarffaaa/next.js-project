import React from 'react';
import { getAllMovies } from '@/services/api.service';
import MoviesListComponent from '@/components/moviesList/MoviesListComponent';
import {PaginationComponent} from "@/components/pagination/PaginationComponent";

const MoviePage = async () => {

    let movies = await getAllMovies();

    return (
        <div>
            <MoviesListComponent movies={movies} />

        </div>
    );
};

export default MoviePage;
