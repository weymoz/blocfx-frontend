import React, { useState, useRef } from "react";
import s from "./style.scss";

export default function InfoPane() {
    return (
        <>
        <h2 className={s.subHeader}>Payment Account</h2>
        <section className={s.account}>
            <div>
                <p className={s.dataLabel}>Bank Name</p>
                <p className={s.dataValue}>Raiffeisen Bank</p>
                <p className={s.dataLabel}>Bank account number</p>
                <p className={s.dataValue}>5168 2323 4123 4219</p>
                <p className={s.dataLabel}>Currency</p>
                <p className={s.dataValue}>EUR</p>
            </div>                
        </section>
        </>
    )
}