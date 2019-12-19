import React, { useState, useRef } from "react";
import Media from "react-media";
import s from "./style.scss";

export default function AmmountPane() {
  let [visibility1, setVisibility1] = useState(s.hidden);
  let [visibility2, setVisibility2] = useState(s.buttonVisible);

  function handleClick() {
    if (visibility1 === s.hidden) {
      setVisibility1(s.visible);
      setVisibility2(s.buttonHidden);
    } else {
      setVisibility1(s.hidden);
      setVisibility2(s.buttonVisible);
    }
  }

function Content() {
  return (
  <div className={s.pane}>
    <p className={s.accountLabel}>Sort Code</p>
    <p className={s.accountValue}>12-34-56</p>
    <p className={s.accountLabel}>Bank full address</p>
    <p className={s.accountValue}>Charlotte str. 48 WIT</p>
    <p className={s.accountLabel}>Location</p>
    <p className={s.accountValue}>Vienna, Austria</p>
  </div>
  )
};


function TogglablePane({children}) {
  return (
    <>
        <div className={`${s.decor} ${visibility1}`}></div>

        <button
          className={`${s.toggleButton} ${visibility2}`}
          onClick={handleClick}
        >
          <svg className={s.dropdownArrow}>
            <use href="#arrow-down"></use>
          </svg>
        </button>
        <div className={visibility1}>

          {children}

          <button
            className={`${s.toggleButton} ${visibility1}`}
            onClick={handleClick}
          >
            <svg className={s.dropdownArrow}>
              <use href="#arrow-up"></use>
            </svg>
          </button>
        </div>
      </>
  );
}

  return (
    <>
      <h1 className={s.header}>Payment Account</h1>

      <section className={s.section}>
        <div className={s.pane}>
          <p className={s.accountLabel}>Bank Name</p>
          <p className={s.accountValue}>Raiffeisen Bank</p>
          <p className={s.accountLabel}>Bank account number</p>
          <p className={s.accountValue}>5168 7556 4123 4219</p>
          <p className={s.accountLabel}>Currency</p>
          <p className={s.accountValue}>EUR</p>
        </div>

        <Media 
          queries={{
            large: "(min-width: 768px)",
            small: "(max-width: 767px)"
          }}
        >
          {
            matches => (
              <>
                {matches.large && <Content />}
                {matches.small && <TogglablePane><Content /></TogglablePane>}
              </>
            )            
          }
        </Media>

      </section>
    </>
  );
}
