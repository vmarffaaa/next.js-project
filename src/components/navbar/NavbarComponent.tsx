import React from 'react';
import Link from "next/link";
import style from "@/components/navbar/NavbarComponentStyle.module.css"

const NavbarComponent = () => {
    return (
        <div className={style.header}>
            <ul className={style.flex}>
                <li><Link className={style.link} href={'/'}>Movie</Link></li>
                <li><Link className={style.link} href={'/genre'}>Genre</Link></li>
            </ul>
        </div>
    );
};

export default NavbarComponent;