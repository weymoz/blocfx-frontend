import React from "react";
import { Link } from "react-router-dom";
import s from "./style.scss";

console.log(s);

const items = [
  {
    name: "Converter",
    to: "/exchanger/converter",
    className: s.converter
  },
  {
    name: "OTC Desk",
    to: "/exchanger/otc-desk",
    className: s.otcDesk
  },
  {
    name: "Payment Accounts",
    to: "/exchanger/payment-accounts",
    className: s.paymentAccounts
  },
  {
    name: "Beneficiaries",
    to: "/exchanger/beneficiaries",
    className: s.beneficiaries
  },
  {
    name: "History",
    to: "/exchanger/history",
    className: s.history
  },
  {
    name: "Support",
    to: "/exchanger/support",
    className: s.support
  },
  {
    name: "Settings",
    to: "/exchanger/settings",
    className: s.settings
  },
  {
    name: "Logout",
    to: "/exchanger/logout",
    className: s.logout
  },
];

const getClassName = ({className, to}) => to === document.location.pathname ? `${className} ${s.active}` : className;

export default function MainMenu() {
  return (
    <nav className={s.mainMenu}>
      <ul className={s.menuContainer} >
        {items.map((item, index) => (
          <li key={index}>
            <Link
              className={getClassName(item)}
              to={item.to}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
