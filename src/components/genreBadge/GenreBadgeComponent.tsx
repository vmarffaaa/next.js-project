import React, {FC} from 'react';
import style from './GenreBadgeComponentStyle.module.css'
import {IGenre} from "@/models/IGenre";
import GenreComponent from "@/components/genre/GenreComponent";

interface IProps {
    genres: IGenre[]
}

const GenreBadgeComponent: FC<IProps> = ({genres}) => {
    return (
        <div className={style.flex}>
            <div className={style.genres_list}>
                {Array.isArray(genres) && genres.length > 0 ? (
                    genres.map(genres => <GenreComponent genre={genres} key={genres.id} />)
                ) : (
                    <p>No genres available</p>
                )}
            </div>
        </div>
    );
};

export default GenreBadgeComponent;