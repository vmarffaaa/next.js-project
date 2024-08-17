'use client'

import React, { useEffect, useState } from 'react';
import { getAllMoviesWithPage } from '@/services/api.service';
import MoviesListComponent from '@/components/moviesList/MoviesListComponent';
import { useSearchParams } from 'next/navigation';
import PaginationComponent from '@/components/pagination/PaginationComponent'
import {IMovie} from "@/models/IMovie";

const MoviePage = () => {
    const searchParam = useSearchParams();
    const page = searchParam.get('page') ? Number(searchParam.get('page')) : 1;
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const getMovies = async () => {
            const moviesData = await getAllMoviesWithPage(page);
            setMovies(moviesData);
        };

        getMovies();
    }, [page]);

    return (
        <div>
            <MoviesListComponent movies={movies} />
            <PaginationComponent currentPage={page} />
        </div>
    );
};

export default MoviePage;
