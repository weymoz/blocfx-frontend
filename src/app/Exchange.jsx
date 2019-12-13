import React from "react";
import inputValue from "./components/InputValue";
import SelectCurrency from "./components/SelectCurrency";
import fiatCurrencies from "@/app/data/currency-fiat"
import cryptoCurrencies from "@/app/data/currency-crypto"
import InputValue from "./components/InputValue";


const Exchange = () => (
  <>
    <header className="header">
      <div className="menu-btn">
        <div className="menu-btn__line-1"></div>
        <div className="menu-btn__line-2"></div>
      </div>
    </header>

    <main className="content">

      <h2 className="content__title">Converter</h2>

      <section className="content__main exchanger">

        <section className="exchanger__panel panel">

          <InputValue className="panel__value" classNamePrefix="custom-input" />

          <SelectCurrency
            className="panel__currency custom-select select-currency"
            classNamePrefix="custom-select"
            inputId="select-fiat-currency"
            currencies={fiatCurrencies}
            defaultValue={{value: fiatCurrencies.USD.code, label: fiatCurrencies.USD.name}}
          />

          <SelectCurrency
            className="panel__account custom-select select-currency"
            classNamePrefix="custom-select"
            inputId="select-fiat-currency"
            currencies={cryptoCurrencies}
            defaultValue={{value: cryptoCurrencies.BTC.code, label: cryptoCurrencies.BTC.name}}
          />

          <p className="input__min-ammount">Min. ammount 198.39 USD</p>

        </section>


        <div className="exchanger__decor decor">
          <svg className="decor__circle">
            <use href="#circle"></use>
          </svg>
        </div>


        <section className="exchanger__panel panel">

          <InputValue className="panel__value" classNamePrefix="custom-input" />

          <SelectCurrency
            className="panel__currency custom-select select-currency"
            classNamePrefix="custom-select"
            inputId="select-fiat-currency"
            currencies={cryptoCurrencies}
            defaultValue={{value: cryptoCurrencies.BTC.code, label: cryptoCurrencies.BTC.name}}
          />

          <SelectCurrency
            inputId="select-fiat-currency"
            className="panel__account custom-select select-currency"
            classNamePrefix="custom-select"
            currencies={fiatCurrencies}
            defaultValue={{value: fiatCurrencies.USD.code, label: fiatCurrencies.USD.name}}
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
