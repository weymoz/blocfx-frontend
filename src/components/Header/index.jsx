import React from "react";
import {
    Link
} from 'react-router-dom'
import MainMenu from '@/components/MainMenu'
import Logo from '@/components/Logo'
import s from "./style.scss";
import "../../assets/sprites/logo.svg";
import "../../assets/sprites/burger-btn.svg";

export default function Header() {
  return (
    <div className={s.header}>
      <Logo />
      <svg className={s.burgerBtn}>
        <use href="#burger-btn"></use>
      </svg>
      <MainMenu />
    </div>
  );
}
