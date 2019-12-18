import React, { useState, useRef } from "react";
import Direction from "@/components/Direction";
import SelectCurrency from "@/components/SelectCurrency";
import InputValue from "@/components/InputValue";
import SelectAccount from "@/components/SelectAccount";

import fiatCurrencies from "@/data/currency-fiat";
import cryptoCurrencies from "@/data/currency-crypto";
import accounts from "@/data/accounts.js";
import beneficiaries from "@/data/beneficiaries.js";

import s from "./style.scss";

const mapCurrenciesToOptions = currencies =>
  Object.keys(currencies).map(code => ({ value: code, label: code }));

const mapAccountsToOptions = accounts =>
  accounts.map(a => ({ value: a.number, label: a.number, info: a }));

export default function Converter() {
  // Input value data
  let [value1, setValue1] = useState("10");
  let [value2, setValue2] = useState("100");

  // Select currency data
  let [currencyType1, setCurrencyType1] = useState(fiatCurrencies);
  let [currencyType2, setCurrencyType2] = useState(cryptoCurrencies);

  let [currencyOptions1, setCurrencyOptions1] = useState(
    mapCurrenciesToOptions(fiatCurrencies)
  );
  let [options2, setOptions2] = useState(
    mapCurrenciesToOptions(cryptoCurrencies)
  );

  let [currency1, setCurrency1] = useState(currencyOptions1[0]);
  let [currency2, setCurrency2] = useState(options2[0]);

  // Select account data
  let [accountOptions, setAccountOptions] = useState(
    mapAccountsToOptions(accounts)
  );

  console.log(accountOptions);

  // Beneficiaries data
  // let [beneficiaryOptions, setBeneficiaryOptions] = useState(
  //   mapBeneficiariesToOptions(beneficiaries)
  // );

  // Swap exchange source and destination
  function swap() {
    let temp;

    // Swap input value src. and dest.
    temp = value1;
    setValue1(value2);
    setValue2(temp);

    // Swap select src. and dest.
    temp = currencyOptions1;
    setCurrencyOptions1(options2);
    setOptions2(temp);

    temp = currency1;
    setCurrency1(currency2);
    setCurrency2(temp);

    temp = currencyType1;
    setCurrencyType1(currencyType2);
    setCurrencyType2(temp);
  }

  // Handle currency value input change
  function onInputChange(setState, evt) {
    setState(evt.target.value);
  }

  // Handle currency type select change
  function onSelectChange(setState, value) {
    setState(value);
  }

  return (
    <>
      <h2 className={s.header}>Converter</h2>

      <section className={s.container}>
        <InputValue
          onChange={onInputChange.bind(null, setValue1)}
          value={value1}
          labelText="You send"
        />

        <SelectCurrency
          currency={currencyType1}
          options={currencyOptions1}
          onChange={onSelectChange.bind(null, setCurrency1)}
          value={currency1}
        />

        <Direction onClick={swap} />

        <InputValue
          onChange={onInputChange.bind(null, setValue2)}
          value={value2}
          labelText="You Get"
        />

        <SelectCurrency
          currency={currencyType2}
          options={options2}
          onChange={onSelectChange.bind(null, setCurrency2)}
          value={currency2}
        />
      </section>
    </>
  );
}
