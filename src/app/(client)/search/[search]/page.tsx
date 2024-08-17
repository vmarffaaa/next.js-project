'use client'

import MoviesListComponent from "@/components/moviesList/MoviesListComponent";
import { getGenresById, searchResults } from "@/services/api.service";
import SearchResultsComponent from "@/components/searchResults/SearchResultsComponent";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IMovie } from "@/models/IMovie";
import PaginationComponent from "@/components/pagination/PaginationComponent";

export default function SearchPage({ params }: { params: { search: string } }) {
    const search = params.search;
    const searchParam = useSearchParams();
    const page = searchParam.get('page') ? Number(searchParam.get('page')) : 1;
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const getMovies = async () => {
            const results: IMovie[] = await searchResults(search, page);
            setMovies(results);
        };

        getMovies();
    }, [page]);

    return (
        <div>
            {movies.length === 0 ? (
                <h1>No results found</h1>
            ) : (
                <>
                    <SearchResultsComponent results={movies} />
                    <PaginationComponent currentPage={page} />
                </>
            )}
        </div>
    );
}
