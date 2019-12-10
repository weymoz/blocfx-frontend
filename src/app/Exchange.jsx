import React from "react";
import Logo from "../assets/svg/logo.svg";
import Selector from 'react-select'

const Exchange = () => (
  <>
    <header className="header">
      <img className="logo" src={Logo} />
      <div className="menu-btn">
        <div className="menu-btn__line-1"></div>
        <div className="menu-btn__line-2"></div>
      </div>
    </header>

    <main className="content">

      <h2 className="content__title">Converter</h2>

      <section className="content__main exchanger">

        <section className="exchanger__input input">

          <label htmlFor="currency-fiat" className="input__fiat-value-label">
            You Send
          </label>

          <input
            id="currency-fiat"
            name="currency"
            type="text"
            className="input__fiat-value"
            defaultValue="198.39"
          />

          <label htmlFor="select-fiat" className="input__fiat-type-label">
            US Dollar
          </label>

          <Selector
            className="input__fiat-type"
            options={
              [
                {value: "USD", label: "USD"},
                {value: "EUR", label: "EUR"},
              ]
            }
            defaultValue={{value: "USD", label: "USD"}}
          />

          <Selector
            className="input__account"
            options={
              [
                {value: "USD", label: "USD"},
                {value: "EUR", label: "EUR"},
              ]
            }
            defaultValue={{value: "USD", label: "USD"}}
          />

          <p className="input__min-ammount">Min. ammount 198.39 USD</p>

        </section>

        <div className="exchanger__decor decor">
          <svg className="decor__circle">
            <use href="#circle"></use>
          </svg>
        </div>

        <section className="exchanger__input input">

          <label htmlFor="currency-fiat" className="input__fiat-value-label">
            You Send
          </label>

          <input
            id="currency-fiat"
            name="currency"
            type="text"
            className="input__fiat-value"
            defaultValue="198.39"
          />

          <label htmlFor="select-fiat" className="input__fiat-type-label">
            US Dollar
          </label>

          <Selector
            className="input__fiat-type"
            options={
              [
                {value: "USD", label: "USD"},
                {value: "EUR", label: "EUR"},
              ]
            }
            defaultValue={{value: "USD", label: "USD"}}
          />

          <Selector
            className="input__account"
            options={
              [
                {value: "USD", label: "USD"},
                {value: "EUR", label: "EUR"},
              ]
            }
            defaultValue={{value: "USD", label: "USD"}}
          />

          <p className="input__min-ammount">Min. ammount 198.39 USD</p>

        </section>

      </section>

      <section className="content__footer controls">
        <input type="submit" className="accept-btn" value="Accept Rates" />
        <p className="info">30 seconds to update rates feed</p>
      </section>
    </main>
  </>
);

export default Exchange;
