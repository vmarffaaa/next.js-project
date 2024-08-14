'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import style from './SearchComponentStyle.module.css';
import { IoSearch } from 'react-icons/io5';

const SearchComponent = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        router.push(`/search/${search}`);
        setSearch(''); // Очищає текст в input після надсилання
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className={style.form}
            >
                <input
                    type='text'
                    placeholder='Search movie...'
                    className={style.input}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    className={style.button}
                    disabled={search === ''}
                >
                    <IoSearch size={32} style={{ color: '#6262f8' }} />
                </button>
            </form>
        </div>
    );
};

export default SearchComponent;
