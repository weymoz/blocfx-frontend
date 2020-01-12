import React, { useState, useReducer } from "react";
import Direction from "@/components/Direction";
import SelectCurrency from "@/components/SelectCurrency";
import InputValue from "@/components/InputValue";
import SelectAccount, { ACCOUNT_TYPE } from "@/components/SelectAccount";
import NextStep from "@/components/NextStep";
import PopularCurrencies from "@/components/PopularCurrencies";

import fiatCurrencies from "@/data/currency-fiat";
import cryptoCurrencies from "@/data/currency-crypto";
import accounts from "@/data/accounts.js";
import beneficiaries from "@/data/beneficiaries.js";

import s from "./style.scss";

const mapCurrenciesToOptions = currencies =>
  Object.keys(currencies).map(code => ({ value: code, label: code }));

const UPDATE_SRC_INPUT = "UPDATE_SRC_INPUT";
const UPDATE_DEST_INPUT = "UPDATE_DEST_INPUT";
const SWAP_INPUTS = "SWAP_INPUTS";

const initialState = {
  src: {
    input: ""
  },
  dest: {
    input: ""
  },
};

const reducer = (state, action) => {

  switch (action.type) {

    case UPDATE_SRC_INPUT:
      return {
        ...state,
        src: {
          ...state.src,
          input: action.payload
        }  
      };

    case UPDATE_DEST_INPUT:
      return {
        ...state,
        dest: {
          ...state.dest,
          input: action.payload
        }  
      };

      case SWAP_INPUTS:
        console.log("swap");
        return {
          ...state,
          src: { ...state.dest },
          dest: { ...state.src }
        };
      
      default:
        return state;
  }
}


export default function Converter() {

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);


  return (
    <>
      <h2 className={s.header}>Converter</h2>

      <section className={s.container}>
        <div className={s.pane}>

          <InputValue
            className={s.inputValue}
            onChange={ e => dispatch( { type: UPDATE_SRC_INPUT, payload: e.target.value } ) }
            value={ state.src.input }
            labelText="You send"
          />

          <p className={s.infoLine}>
            Min. ammount: <span className={s.infoLineAmmount}>100 USD</span>
          </p>

        </div>

        <Direction onClick={ () => {
          console.log("click")
          dispatch({ type: SWAP_INPUTS });
        } } />

        <div className={s.pane}>

          <InputValue
            className={s.inputValue}
            onChange={ e => dispatch( { type: UPDATE_DEST_INPUT, payload: e.target.value } ) }
            value={ state.dest.input }
            labelText="You send"
          />

          <p className={s.infoLine} >100 USD = 90.5EUR</p>
        </div>

      </section>

      <NextStep path="/exchanger/fiat-token" buttonText="Accept rates" infoText="30 seconds to update rates feed" />
      <PopularCurrencies />
    </>
  );
}
