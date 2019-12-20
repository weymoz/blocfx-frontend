import React from "react";
import s from './style.scss'
import icon from '../../assets/sprites/download.svg'
console.log(icon)

export default () => {
    return (
        <button className={s.downloadButton}>
            <span className={s.text}>
                Download PDF
            </span>
            <svg className={s.icon}>
                <use href={`#${icon.id}`}></use>
            </svg>
        </button>
    )
};