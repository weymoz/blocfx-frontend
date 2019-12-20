import React from "react";
import s from './style.scss'

export default ({ children }) => {
  return <h1 className={s.mainTitle}>{children}</h1>;
};