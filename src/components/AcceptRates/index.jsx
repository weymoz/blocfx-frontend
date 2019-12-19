import React from 'react'
import s from './style.scss'

export default function AcceptRates() {
    return (
        <div className={s.acceptRates}>
            <button className={s.button}>Accept Rates</button>
            <p className={s.info}>30 seconds to update rates feed</p>
        </div>
    )
}