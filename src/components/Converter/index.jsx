import React, { useState, useRef } from "react";
import Direction from "@/components/Direction";
import SelectCurrency from "@/components/SelectCurrency";
import InputValue from "@/components/InputValue";
import SelectAccount, { ACCOUNT_TYPE } from "@/components/SelectAccount";
import AcceptRates from "@/components/AcceptRates";
import PopularCurrencies from "@/components/PopularCurrencies";

import fiatCurrencies from "@/data/currency-fiat";
import cryptoCurrencies from "@/data/currency-crypto";
import accounts from "@/data/accounts.js";
import beneficiaries from "@/data/beneficiaries.js";

import s from "./style.scss";

const mapCurrenciesToOptions = currencies =>
  Object.keys(currencies).map(code => ({ value: code, label: code }));

// const mapAccountsToOptions = accounts =>
//   accounts.map(a => ({ value: a.number, label: a.number, info: a }));

const mapAccountsToOptions = accounts => accounts.map(a => a);

const mapBeneficiariesToOptions = beneficiaries => beneficiaries.map(b => b);

export default function Converter() {
  // Input value data
  let [value1, setValue1] = useState("10");
  let [value2, setValue2] = useState("100");

  // Select currency data
  let [currencyType1, setCurrencyType1] = useState(fiatCurrencies);
  let [currencyType2, setCurrencyType2] = useState(fiatCurrencies);

  let [currencyOptions1, setCurrencyOptions1] = useState(
    mapCurrenciesToOptions(fiatCurrencies)
  );
  let [currencyOptions2, setOptions2] = useState(
    mapCurrenciesToOptions(fiatCurrencies)
  );

  let [currency1, setCurrency1] = useState(currencyOptions1[0]);
  let [currency2, setCurrency2] = useState(currencyOptions2[0]);

  // Select account data
  let [accountType1, setAccountType1] = useState(ACCOUNT_TYPE.BANK);
  let [accountType2, setAccountType2] = useState(ACCOUNT_TYPE.BENEFICIARY);

  let [accountOptions1, setAccountOptions1] = useState(
    mapAccountsToOptions(accounts)
  );
  let [accountOptions2, setAccountOptions2] = useState(
    mapAccountsToOptions(beneficiaries)
  );

  let [accountValue1, setAccountValue1] = useState(null);
  let [accountValue2, setAccountValue2] = useState(null);

  let [placeholder1, setPlaceholder1] = useState("Select Payment Account");
  let [placeholder2, setPlaceholder2] = useState("Select Beneficiary");

  // Swap exchange source and destination
  function swap() {
    let temp;

    // Swap input value src. and dest.
    temp = value1;
    setValue1(value2);
    setValue2(temp);

    // Swap select src. and dest.
    temp = currencyOptions1;
    setCurrencyOptions1(currencyOptions2);
    setCurrencyOptions2(temp);

    temp = currency1;
    setCurrency1(currency2);
    setCurrency2(temp);

    temp = currencyType1;
    setCurrencyType1(currencyType2);
    setCurrencyType2(temp);

    // Swap select acc. type
    temp = accountType1;
    setAccountType1(accountType2);
    setAccountType2(temp);

    temp = accountOptions1;
    setAccountOptions1(accountOptions2);
    setAccountOptions2(temp);

    temp = accountValue1;
    setAccountValue1(accountValue2);
    setAccountValue2(temp);

    temp = placeholder1;
    setPlaceholder1(placeholder2);
    setPlaceholder2(temp);
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
        <div className={s.pane}>
          <InputValue
            className={s.inputValue}
            onChange={onInputChange.bind(null, setValue1)}
            value={value1}
            labelText="You send"
          />

          <SelectCurrency
            className={s.selectCurrency}
            currency={currencyType1}
            options={currencyOptions1}
            onChange={onSelectChange.bind(null, setCurrency1)}
            value={currency1}
          />

          <SelectAccount
            className={s.selectAccount}
            type={accountType1}
            options={accountOptions1}
            value={accountValue1}
            onChange={onSelectChange.bind(null, setAccountValue1)}
            placeholder={placeholder1}
          />

          <p className={s.infoLine}>
            Min. ammount: <span className={s.infoLineAmmount}>198.39 USD</span>
          </p>
        </div>

        <Direction onClick={swap} />

        <div className={s.pane}>
          <InputValue
            className={s.inputValue}
            onChange={onInputChange.bind(null, setValue2)}
            value={value2}
            labelText="You Get"
          />

          <SelectCurrency
            className={s.selectCurrency}
            currency={currencyType2}
            options={currencyOptions2}
            onChange={onSelectChange.bind(null, setCurrency2)}
            value={currency2}
          />

          <SelectAccount
            className={s.selectAccount}
            type={accountType2}
            options={accountOptions2}
            value={accountValue2}
            onChange={onSelectChange.bind(null, setAccountValue2)}
            placeholder={placeholder2}
          />

          <p className={s.infoLine} >1 ETH = 198.39 USD</p>
        </div>

      </section>

      <AcceptRates />
      <PopularCurrencies />
    </>
  );
}
