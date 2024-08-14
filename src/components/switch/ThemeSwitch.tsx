'use client';

import { BsFillBrightnessHighFill, BsBrightnessHigh } from "react-icons/bs";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === 'system' ? systemTheme : theme;
    useEffect(() => setMounted(true), []);
    return (
        <div style={{ display: 'grid', placeItems: 'center'}}>
            {mounted &&
                (currentTheme === 'dark' ? (
                    <BsFillBrightnessHighFill
                        size={36}
                        style={{ color: '#6262f8'}}
                        onClick={() => setTheme('light')}
                        className='text-xl cursor-pointer hover:text-amber-500'
                    />
                ) : (
                    <BsBrightnessHigh
                        size={32}
                        style={{ color: 'blue'}}
                        onClick={() => setTheme('dark')}
                        className='text-xl cursor-pointer hover:text-amber-500'
                    />
                ))}
        </div>
    );
}