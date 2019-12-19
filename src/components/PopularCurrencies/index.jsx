import React from "react";
import s from "./style.scss";

export default function PopularCurrencies() {
  return (
    <div className={s.PopularCurrencies}>
      <h2 className={s.header}>Popular Currencies</h2>
      <section className={s.container}>
        <p className={s.crypto}>BTC</p>
        <p className={s.currency}>$ 7000.02</p>
        <p className={s.percent}>1.63%</p>
        <p className={s.crypto}>BTC</p>
        <p className={s.currency}>$ 7000.02</p>
        <p className={s.percent}>1.63%</p>
        <p className={s.crypto}>BTC</p>
        <p className={s.currency}>$ 7000.02</p>
        <p className={`${s.percent} ${s.down}`}>1.63%</p>
        <p className={s.crypto}>BTC</p>
        <p className={s.currency}>$ 7000.02</p>
        <p className={s.percent}>1.63%</p>
      </section>
    </div>
  );
}
