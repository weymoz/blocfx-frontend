import React, { useState, useRef } from "react";
import s from "./style.scss";

export default function AmmountPane() {
  return (
    <>
      <h1 className={s.header}>Agreement</h1>

      <section className={s.section}>

        <div className={s.pane}>
          <p>You Send</p>
          <p>US Dollar</p>
          <p className={s.value}>200.00</p>
          <div className={s.currency}>
            <span className={s.sign}>$</span>
            USD
          </div>
          <p className={s.info}>Transaction ID 123756483</p>
        </div>

        <div className={s.decor}></div>

        <div className={s.pane}>
          <p>You Get</p>
          <p>Euro</p>
          <p className={s.value}>181.05</p>
          <div className={s.currency}>
            <span className={s.sign}>&euro;</span>
            EUR
          </div>
          <p className={s.info}>100 USD = 90.5 EUR</p>
        </div>

      </section>
    </>
  );
}
