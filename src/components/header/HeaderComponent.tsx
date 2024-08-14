import Link from 'next/link';
import ThemeSwitch from '../switch/ThemeSwitch';
import style from './HeaderComponentStyle.module.css'
import UserInfo from "@/components/userInfo/UserInfoComponent";
import SearchComponent from "@/components/search/SearchComponent";

export default function Header() {
    return (
        <div className={style.header}>
            <div className={style.searchContainer}>
                <SearchComponent/>
            </div>
            <div className={style.navContainer}>
                <Link href={'/'} className={style.link}>
                    <span className={style.title}>MOVIE</span>
                    <span className={style.app}> app</span>
                </Link>
                <ThemeSwitch/>
                <UserInfo/>
            </div>
        </div>
    );
}
