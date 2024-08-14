import React from 'react';
import { getMovieInfo } from "@/services/api.service";
import MovieInfoComponent from '@/components/movieInfo/MovieInfoComponent';
import { IMovieDetail } from '@/models/IMovieDetail'; // Import your IMovieDetail interface

interface Params {
    id: string;
}

const MovieInfoPage = async ({ params }: { params: Params }) => {
    const movieId = params.id;
    const movieInfo: IMovieDetail = await getMovieInfo(Number(movieId));

    return (
        <div>
            <MovieInfoComponent movieInfo={movieInfo} />
        </div>
    );
};

export default MovieInfoPage;
