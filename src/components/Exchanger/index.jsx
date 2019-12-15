import React from "react";
import {
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import s from "./Exchanger.css";

export default function Exchanger() {
  return (
    <div className={s.layout}>
      <header className={s.header}>
        <h1>Logo</h1>
        <nav className={s.menu}>
          <ul>
              <li><Link to="/exchanger/converter">Converter</Link></li>
              <li><Link to="/exchanger/otc-desk" >OTC Desk</Link></li>
          </ul>
        </nav>
      </header>
      <main className={s.content}>
          <Switch>
            <Route path="/exchanger/converter" >
                <Converter />
            </Route>
            <Route path="/exchanger/otc-desk" >
                <OtcDesk />
            </Route>
            <Redirect to="/exchanger/converter" />
          </Switch>
      </main>
    </div>
  );
}

function Converter() {
    return (
        <h2>Converter</h2>
    )
}

function OtcDesk() {
    return (
        <h2>OTC Desk</h2>
    )
}