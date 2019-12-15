import React from "react";
import s from "./Exchanger.css";

export default function Exchanger() {
  return (
    <div className={s.layout}>
      <header className={s.header}>
        <h1>Logo</h1>
        <nav className={s.menu}>
          <ul>
            <li>menu item 1</li>
            <li>menu item 2</li>
            <li>menu item 3</li>
            <li>menu item 4</li>
            <li>menu item 5</li>
            <li>menu item 6</li>
            <li>menu item 7</li>
          </ul>
        </nav>
      </header>
      <main className={s.content}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          eaque ullam dolore! Quisquam vel, esse mollitia ullam nesciunt sint
          necessitatibus, aliquid inventore quis doloremque perferendis
          molestias voluptatem? Beatae, ullam saepe!
        </p>
      </main>
    </div>
  );
}
