'use client';

import React, {FC, useEffect, useState} from 'react';
import {getImgForMovies} from "@/services/api.service";
import style from "./PosterStyle.module.css";
import Link from "next/link";


interface PosterPreviewProps {
    movieId: number;
    path: string;
    title: string;
}

const PosterPreviewComponent: FC<PosterPreviewProps> = ({ movieId, path, title }) => {
    const [imgSrc, setImgSrc] = useState<string>('');
    useEffect(() => {
        const img = async () => {
            const imageUrl = await getImgForMovies(movieId);
            setImgSrc(imageUrl);
        };
        img();
    }, [movieId]);
    return (
        <div>
            <Link href={`/movie/${movieId}`}>
                <img className={style.poster} src={`https://image.tmdb.org/t/p/w500${path}`} alt={title} />
            </Link>
        </div>
    );
};

export default PosterPreviewComponent;