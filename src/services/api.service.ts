import {options, baseUrl} from "@/constants/urls";
import {IMovieDetail} from "@/models/IMovieDetail";
import {IGenre} from "@/models/IGenre";
import {IMovie} from "@/models/IMovie";



export const getPage = async (): Promise<IMovie[]> => {
    let movies = await fetch(`${baseUrl}discover/movie?`, options)
        .then(response => response.json())
    return movies.page
}

export const getAllMoviesWithPage = async (page:number): Promise<IMovie[]> => {
    let movies = await fetch(`${baseUrl}discover/movie?page=${page}`, options)
        .then(response => response.json())
    return movies.results
}

// export const getAllMovies = async (page: number = 1): Promise<{ results: IMovie[]; total_pages: number }> => {
//     const response = await fetch(`${baseUrl}discover/movie?page=${page}`, options);
//     if (!response.ok) {
//         throw new Error('Failed to fetch movies');
//     }
//     return response.json();
// };


export const getImgForMovies =async (id: number) => {
    let poster = await fetch( `${baseUrl}movie/${id}/images`, options)
    .then(response => response.json())
    return poster;
}

export const getMovieInfo = async (id: number): Promise<IMovieDetail> => {
        const response = await fetch(`${baseUrl}movie/${id}`, options);
        return response.json();
};

export const searchResults = async(term:string): Promise<IMovie[]> => {

    let movies = await fetch(`${baseUrl}search/movie?query=${term}&language=en-US&page=1&include_adult=false`, options)
    .then(response => response.json())
    return movies.results
};


export const getGenres = async (): Promise<IGenre[]> => {

        const response = await fetch(`${baseUrl}genre/movie/list?language=en-US`, options);
        const data = await response.json();
        return data.genres;
};

export const getGenresById = async (id: number): Promise<IMovie[]> => {
    const response = await fetch(`${baseUrl}discover/movie?with_genres=${id}`, options);
    const data = await response.json();
    return data.results || [];
};



