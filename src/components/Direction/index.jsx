import React from 'react'
import s from './style.scss'

export default function Direction() {
    return (
        <div className={s.direction}>
          <svg className={s.circle}>
            <use href="#circle"></use>
          </svg>
        </div>
    )
}