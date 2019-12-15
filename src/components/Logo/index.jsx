import React from "react";
import s from "./style.scss";
import "../../assets/sprites/logo.svg";

export default function Logo() {
  return (
      <svg className={s.logo}>
        <use href="#logo"></use>
      </svg>
  );
}
