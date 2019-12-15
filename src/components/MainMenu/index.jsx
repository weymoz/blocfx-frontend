import React from "react";
import {
    Link
} from 'react-router-dom'
import s from "./style.scss";

export default function MaimMenu() {
  return (
      <nav className={s.mainMenu}>
        <ul>
          <li>
            <Link to="/exchanger/converter">Converter</Link>
          </li>
          <li>
            <Link to="/exchanger/otc-desk">OTC Desk</Link>
          </li>
        </ul>
      </nav>
  );
}
