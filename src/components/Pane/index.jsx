import React from "react";
import s from './style.scss'

export default ({ children }) => {
  return <div className={s.container}>{children}</div>;
};
