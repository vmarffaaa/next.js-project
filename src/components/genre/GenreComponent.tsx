'use client';


import React, {FC, useEffect, useState} from 'react';
import Link from "next/link";
import {IGenre} from "@/models/IGenre";
import style from "./GenreComponentStyle.module.css"

interface IProps {
    genre: IGenre
}

const GenreComponent: FC<IProps> = ({genre}) => {



    return (
        <div className={style.genre}>
            <Link  className={style.link} href={`/genre/${genre.id}`}>{genre.name}</Link>
        </div>
    );
};

export default GenreComponent;