import React from "react";
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import Pane from '@/components/Pane'
import Direction from '@/components/Direction'
import s from "./style.scss";



export default function Converter() {
    return (
        <>
            <h2 className={s.header}>Converter</h2>
            <section className={s.container}>
                <Pane  />
                <Direction />
                <Pane direction />
            </section>
        </>
    )
}