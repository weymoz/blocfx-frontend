import React from "react";
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import Header from '@/components/Header'
import Converter from '@/components/Converter'
import FiatToken from '@/components/FiatToken'
import s from "./style.scss";

export default function Exchanger() {
  return (
    <div className={s.layout}>
      <header className={s.headerContainer}>
        <Header />
      </header>
      <main className={s.contentContainer}>
          <Switch>
            <Route path="/exchanger/converter" >
                <Converter />
            </Route>
            <Route path="/exchanger/fiat-token" >
                <FiatToken />
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


function OtcDesk() {
    return (
        <h2>OTC Desk</h2>
    )
}
