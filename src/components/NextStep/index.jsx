import React from "react";
import { withRouter } from "react-router-dom";
import s from "./style.scss";

function NextStep({ history, path, buttonText, infoText }) {
  return (
    <div className={s.acceptRates}>
      <button
        className={s.button}
        onClick={() => history.push(path)}
      >
        {buttonText}
      </button>
      {
        typeof infoText === 'function' ? (
          infoText(s.info)
        ) : (
          <p className={s.info}>{infoText}</p>
        )
      } 
    </div>
  );
}

export default withRouter(NextStep);
