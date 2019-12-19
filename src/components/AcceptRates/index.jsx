import React from "react";
import { withRouter } from "react-router-dom";
import s from "./style.scss";

function AcceptRates({ history }) {
  return (
    <div className={s.acceptRates}>
      <button
        className={s.button}
        onClick={() => history.push("/exchanger/fiat-token")}
      >
        Accept Rates
      </button>
      <p className={s.info}>30 seconds to update rates feed</p>
    </div>
  );
}

export default withRouter(AcceptRates);
