import React from "react";
import SelectCurrency from "@/components/SelectCurrency";
import fiatCurrencies from "@/data/currency-fiat"
import InputValue from "@/components/InputValue";

import s from './style.scss';
console.log(s)

const Exchange = () => (
  <>
    <main className={s.testClass}>

      <h2 className="">Converter</h2>

      <section className="">

        <section className="">

          <InputValue className="" classNamePrefix="" />

          <SelectCurrency
            className=""
            classNamePrefix=""
            inputId="select-fiat-currency"
            currencies={fiatCurrencies}
            defaultValue={{value: fiatCurrencies.USD.code, label: fiatCurrencies.USD.name}}
          />


          <p className="">Min. ammount 198.39 USD</p>

        </section>


        <div className="">
          <svg className="">
            <use href="#circle"></use>
          </svg>
        </div>


      </section>

      <section className="">
        <input type="submit" className="" value="Accept Rates" />
        <p className="info">30 seconds to update rates feed</p>
      </section>
    </main>
  </>
);

export default Exchange;
