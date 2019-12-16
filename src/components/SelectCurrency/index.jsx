import React from "react";
import Select, { components } from "react-select";
import s from "./style.scss";

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
  const currencies = props.selectProps.currencies;
  const currencyCode = props.data.value;
  const { sprite } = currencies[currencyCode];
  return (
    <>
      <svg className={s.singleValueCurrencyIcon}>
        <use href={`#${sprite.id}`}></use>
      </svg>
      <components.SingleValue {...props}>{children}</components.SingleValue>
    </>
  );
};

const Option = props => {
  const currencies = props.selectProps.currencies;
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
  const currencies = props.selectProps.currencies;
  let currentValue = props.getValue()[0].value;
  const labelText = currencies[currentValue].name;

  const labelClass = props.selectProps.classNamePrefix + "__label";

  return (
    <>
      <label className={""} htmlFor="">
        {labelText}
      </label>
      <components.Control {...props} />
    </>
  );
};

const mapCurrenciesToOptions = currencies =>
  Object.keys(currencies).map(code => ({ value: code, label: code }));

/**
 * Main Component
 */

const SelectCurrency = props => {
  return (
    <Select
      {...props}
      menuPlacement={"bottom"}
      styles={customStyles}
      options={mapCurrenciesToOptions(props.currencies)}
      components={{
        DropdownIndicator,
        Option,
        SingleValue,
        Control
      }}
    />
  );
};


export default function withCurrency(currency) {
  const firstKey= Object.keys(currency)[0];
  const firstItem = currency[firstKey]
  return (
    <SelectCurrency
      className=""
      classNamePrefix=""
      inputId="select-fiat-currency"
      currencies={currency}
      defaultValue={{
        value: firstItem.code,
        label: firstItem.name
      }}
    />
  );
}
