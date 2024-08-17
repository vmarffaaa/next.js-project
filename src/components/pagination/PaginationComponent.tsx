import React from 'react';
import { useRouter} from 'next/navigation';
import style from './PaginationComponentStyle.module.css'

interface PaginationProps {
    currentPage: number;
}

const PaginationComponent: React.FC<PaginationProps> = ({ currentPage }) => {
    const router = useRouter();

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            router.push(`?page=${currentPage - 1}`);
        }
    };

    const handleNextPage = () => {
        router.push(`?page=${currentPage + 1}`);
    };

    return (
        <div className={style.box}>
            <div className={style.pagination}>
                <button className={style.button} onClick={handlePreviousPage} disabled={currentPage <= 1}>
                    Prev
                </button>
                <button className={style.button} onClick={handleNextPage}>
                   Next
                </button>
            </div>
        </div>
    );
};

export default PaginationComponent;
