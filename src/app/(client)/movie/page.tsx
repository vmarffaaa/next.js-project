import React from 'react';
import { getAllMovies } from '@/services/api.service';
import MoviesListComponent from '@/components/moviesList/MoviesListComponent';
import {PaginationComponent} from "@/components/pagination/PaginationComponent";

const MoviePage = async ({ searchParams }: { searchParams?: { search?: string; page?: string } }) => {
    // Provide default values in case searchParams is undefined
    const search = searchParams?.search || '';
    const page = searchParams?.page ? parseInt(searchParams.page) : 1;

    let movies = await getAllMovies();

    return (
        <div>
            <MoviesListComponent movies={movies} />
            <PaginationComponent
                page={page}
                totalPages={500}
            />
        </div>
    );
};

export default MoviePage;
