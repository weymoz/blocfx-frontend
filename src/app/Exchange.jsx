import React from "react";
import Logo from "../assets/svg/logo.svg";
import CustomSelect from "./CustomSelect";
import Currency from './currency';
import SelectType from './selectType';

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
            className="input-text input__fiat-value"
            defaultValue="198.39"
          />

          <label htmlFor="select-fiat" className="input__fiat-type-label">
            US Dollar
          </label>

          <CustomSelect
            selectType={SelectType.CURRENCY}
            className="input__fiat-type custom-select"
            classNamePrefix={"custom-select"}
            options={
              Object.keys(Currency).map(type => ({
                value: Currency[type].acronym,
                label: Currency[type].acronym,
              }))
            }
            defaultValue={{value: Currency.USD.acronym, label: Currency.USD.acronym}}
          />

          <CustomSelect
            className="input__account custom-select"
            classNamePrefix={"custom-select"}
            options={
              [
                {value: "1234345345345", label: "4564373567"},
                {value: "678567864567567", label: "98698769876876"},
              ]
            }
          />

          <p className="input__min-ammount">Min. ammount 198.39 USD</p>

        </section>

        <div className="exchanger__decor decor">
          <svg className="decor__circle">
            <use href="#circle"></use>
          </svg>
        </div>

      </section>

      <section className="content__footer controls">
        <input type="submit" className="accept-btn" value="Accept Rates" />
        <p className="info">30 seconds to update rates feed</p>
      </section>
    </main>
  </>
);

export default Exchange;
