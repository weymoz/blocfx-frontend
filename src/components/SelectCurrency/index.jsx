import React, { useRef, useState, useEffect } from "react";
import Select, { components } from "react-select";
import selectStyles from "@/common/select-styles"
import s from "./style.scss";

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
  const labelText = currency[currentVal].name;

  return (
    <>
      <label className={s.inputLabel}>{labelText}</label>
      <components.Control {...props} />
    </>
  );
};


const SelectCurrency = props => {
  return (
    <Select
      {...props}
      className="OverrideRS CustomSelect"
      classNamePrefix="CustomSelect"
      menuPlacement={"bottom"}
      styles={selectStyles}
      components={{Control, Option, SingleValue, DropdownIndicator}}
      //menuIsOpen
    />
  );
};

export default SelectCurrency;
