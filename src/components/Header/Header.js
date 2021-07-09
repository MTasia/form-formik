import React from "react";
import style from "./Header.module.css"

const Header = () => (
            <div>
                <div className={style.square}/>
                <div className={style.ellipse}/>
                <div className={style.line}/>
                <div className={style.headerText}>Fill out the form and
                    your data will appear
                    in the document</div>
            </div>
    )

export default Header