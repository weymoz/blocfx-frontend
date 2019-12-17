import React, { useState, useRef} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Pane from "@/components/Pane";
import Direction from "@/components/Direction";
import SelectCurrency from "@/components/SelectCurrency";
import fiatCurrencies from "@/data/currency-fiat";
import cryptoCurrencies from "@/data/currency-crypto";
import Select from 'react-select'
import s from "./style.scss";

const mapCurrenciesToOptions = currencies =>
  Object.keys(currencies).map(code => ({ value: code, label: code }));


export default function Converter() {
  let [currency1, setCurrency1] = useState(fiatCurrencies);
  let [currency2, setCurrency2] = useState(cryptoCurrencies);

  let [opt1, setOpt1] = useState(mapCurrenciesToOptions(fiatCurrencies));
  let [opt2, setOpt2] = useState(mapCurrenciesToOptions(cryptoCurrencies));

  let [val1, setVal1] = useState(opt1[0])
  let [val2, setVal2] = useState(opt2[0])


  function swap() {
    let temp = opt1;
    setOpt1(opt2)
    setOpt2(temp)

    temp = val1;
    setVal1(val2)
    setVal2(temp)

    temp = currency1;
    setCurrency1(currency2)
    setCurrency2(temp)
  }

  return (
    <>
      <h2 className={s.header}>Converter</h2>

      <section className={s.container}> 

      <SelectCurrency currency={currency1} options={opt1} onChange={v => setVal1(v)} value={val1} />
 
      <Direction onClick={swap} />

      <SelectCurrency currency={currency2} options={opt2} onChange={v => setVal2(v)} value={val2} />

      </section>
    </>
  );
}
