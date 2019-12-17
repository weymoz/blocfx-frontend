import React, { useRef, useState, useEffect } from "react";
import Select, { components } from "react-select";
import s from "./style.scss";
import { useRouteMatch } from "react-router-dom";

const customStyles = {
  container: provided => ({
    ...provided,
    minWidth: "250px"
  }),

  menu: provided => ({
    ...provided,
    borderRadius: 2
  }),

  menuList: provided => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0
  }),

  indicatorSeparator: provided => ({
    ...provided,
    display: "none"
  }),

  option: (provided, state) => {
    return {
      ...provided,

      backgroundColor: "tansparent",
      color: "inherit",
      padding: "10",

      ":active": {
        backgroundColor: "transparent"
      },

      ":hover": {
        backgroundColor: "#f5f6fc"
      }
    };
  },

  singleValue: (provided, { data }) => {
    return {
      ...provided,
      display: "flex",
      marginLeft: "26px"
    };
  }
};

/**
 *  Sub components
 */

const DropdownIndicator = props => {
  const { menuIsOpen } = props.selectProps;

  return (
    <components.DropdownIndicator {...props}>
      {menuIsOpen ? (
        <svg className={s.dropdownArrow}>
          <use href="#arrow-up"></use>
        </svg>
      ) : (
        <svg className={s.dropdownArrow}>
          <use href="#arrow-down"></use>
        </svg>
      )}
    </components.DropdownIndicator>
  );
};

const SingleValue = ({ children, ...props }) => {
  const currentValue = props.data.value;
  const iconId = props.selectProps.currency[currentValue].sprite.id;

  return (
    <>
      <svg className={s.singleValueCurrencyIcon}>
        <use href={`#${iconId}`}></use>
      </svg>
      <components.SingleValue {...props}>{children}</components.SingleValue>
    </>
  );
};

const Option = props => {
  const currencies = props.selectProps.currency;
  const currencyCode = props.data.value;
  const { sprite, code, name } = currencies[currencyCode];
  return (
    <components.Option {...props}>
      <div className={s.customOption}>
        <svg className={s.optionCurrencyIcon}>
          <use href={`#${sprite.id}`}></use>
        </svg>
        <div className={s.customOption_Code}>{code}</div>
        <div className={s.customOption_Name}>{name}</div>
      </div>
    </components.Option>
  );
};


const Control = props => {
  const currentVal = props.selectProps.value.value;
  const currency = props.selectProps.currency;
  const labelText = currency[currentVal].name

  return (
    <>
      <label>{labelText}</label>
      <components.Control {...props} />
    </>
  );
};


const SelectCurrency = props => {
  return (
    <Select
      {...props}
      menuPlacement={"bottom"}
      styles={customStyles}
      components={{Control}}
    />
  );
};

export default SelectCurrency;
