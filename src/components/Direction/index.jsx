import React from 'react'
import s from './style.scss'

export default function Direction({ onClick }) {
    return (
        <div onClick={onClick} className={s.direction}>
          <svg className={s.circle}>
            <use href="#circle"></use>
          </svg>
        </div>
    )
}