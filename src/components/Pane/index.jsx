import React from "react";
import SelectCurrency from "@/components/SelectCurrency";
import fiatCurrencies from "@/data/currency-fiat";
import cryptoCurrencies from "@/data/currency-crypto";
import s from "./style.scss";

export default function Pane({ currencyType }) {
  const currency = currencyType ? fiatCurrencies : cryptoCurrencies;
  const firstKey= Object.keys(currency)[0];
  const firstItem = currency[firstKey]
  return (
    <div className={s.pane}>
      <SelectCurrency
        className=""
        classNamePrefix=""
        inputId="select-fiat-currency"
        currencies={currency}
        defaultInpitValue={firstItem.name}
        defaultValue={{
          value: firstItem.code,
          label: firstItem.name
        }}
      />
    </div>
  );
}
