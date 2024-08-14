import React from 'react';
import style from './UserInfoComponentStyle.module.css'
import { FaCircleUser } from "react-icons/fa6";

const UserInfo = () => {
    return (
        <div className={style.container}>
            <FaCircleUser size={32} style={{ color: '#6161f6'}}/>
            <p className={style.name} style={{ color: '#6161f6'}}>Marta Zilnyk</p>
        </div>
    );
};

export default UserInfo;
