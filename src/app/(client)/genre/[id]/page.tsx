'use client'

import React, { useEffect, useState } from 'react';
import { getGenresById } from "@/services/api.service";
import { IMovie } from '@/models/IMovie';
import MoviesListComponent from "@/components/moviesList/MoviesListComponent";
import { useSearchParams } from "next/navigation";
import PaginationComponent from "@/components/pagination/PaginationComponent";

interface Params {
    id: string;
}

const genreByIdPage = ({ params }: { params: Params }) => {
    const genreId = params.id;
    const id = Number(genreId);
    const searchParam = useSearchParams();
    const page = searchParam.get('page') ? Number(searchParam.get('page')) : 1;
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const getMovies = async () => {
            const moviesData: IMovie[] = await getGenresById(id, page);
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

export default genreByIdPage;
