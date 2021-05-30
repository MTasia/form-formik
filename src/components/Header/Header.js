import React from "react";
import style from "./Header.module.css"

const Header = () => {
    return (
        <div className={style.headerWrapper}>
            <p className={style.form}>Form</p>
            <div className={style.logo}>
                <div className={style.ellipse}/>
                <div className={style.line}/>
                <p className={style.headerText}>Fill out the form and
                    your data will appear
                    in the document</p>
                <div className={style.square}/>
            </div>
            <p className={style.document}>Document</p>
        </div>
    )
}

export default Header