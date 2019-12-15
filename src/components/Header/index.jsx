import React from "react";
import {
    Link
} from 'react-router-dom'
import MainMenu from '@/components/MainMenu'
import s from "./style.scss";
import "../../assets/sprites/logo.svg";
import "../../assets/sprites/burger-btn.svg";

export default function Header() {
  return (
    <header className={s.header}>
      <svg className={s.logo}>
        <use href="#logo"></use>
      </svg>
      <svg className={s.burgerBtn}>
        <use href="#burger-btn"></use>
      </svg>
      <MainMenu />
    </header>
  );
}
