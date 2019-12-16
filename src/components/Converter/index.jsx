import React from "react";
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import s from "./style.scss";


export default function Converter() {
    return (
        <>
            <h2 className={s.header}>Converter</h2>
            <section className={s.container}>
                CONTAINER
            </section>
        </>
    )
}