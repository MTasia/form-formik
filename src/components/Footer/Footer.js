import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={style.logo}>
            <div className={style.ellipse}/>
            <div className={style.line}/>
            <p className={style.footerText}>
                Created by Medvedeva Taya
                taya_medeved@mail.ru
            </p>
            <div className={style.square}/>
        </div>
    )
}

export default Footer