import React from 'react'
import withCurrency from '@/components/SelectCurrency'
import fiatCurrencies from "@/data/currency-fiat"
import cryptoCurrencies from "@/data/currency-crypto"
import s from './style.scss'

export default function Pane({direction}) {
    const currency = direction ? fiatCurrencies : cryptoCurrencies;
    return (
        <div className={s.pane}>
          {withCurrency(currency)}
        </div>
    )
}