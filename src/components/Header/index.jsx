import React from "react";
import {
    Link
} from 'react-router-dom'
import s from "./style.scss";
import "../../assets/sprites/logo.svg";
import "../../assets/sprites/burger-btn.svg";

export default function Header() {
  return (
    <header className={s.header}>
      <svg className={s.logo}>
        <use href="#logo"></use>
      </svg>
      <svg className={s.burgerBtn}>
        <use href="#burger-btn"></use>
      </svg>
      <nav className={s.menu}>
        <ul>
          <li>
            <Link to="/exchanger/converter">Converter</Link>
          </li>
          <li>
            <Link to="/exchanger/otc-desk">OTC Desk</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
