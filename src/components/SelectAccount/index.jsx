import React, { useRef, useState, useEffect } from "react";
import Select, { components } from "react-select";
import selectStyles from "@/common/select-styles"
import s from "./style.scss";

const ACCOUNT_TYPE = {
  BANK: "Payment Account",
  BENEFICIARY: "Beneficiary"
}

export { ACCOUNT_TYPE };

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

  const { number } = props.data;

  const Content = (
  <span>{number}</span>
  );

  return (
      <components.SingleValue {...props}>{Content}</components.SingleValue>
  );
};

const Option = props => {
  const { type } = props.selectProps;
  let Content;

  switch (type) {

    case ACCOUNT_TYPE.BANK:
      const { bank, number } = props.data;
      Content = (
        <div >
          <div>{bank}</div>
          <div>{number}</div>
        </div>
      )
      break;

      case ACCOUNT_TYPE.BENEFICIARY:
        const { name, currency } = props.data
        Content = (
          <div >
            <div>{name}</div>
            <div>{currency}</div>
          </div>
        )
        break;

    default: 
        Content = "Provide account type"
  }


  return (
    <components.Option {...props}>
      {Content}
    </components.Option>
  );
};



const MenuList = props => {
  const { type } = props.selectProps;
  return (
    <components.MenuList {...props}>
      <div>{`Add ${type}`}</div>
      {props.children}
    </components.MenuList>
  );
};


const SelectAccount = props => {
  return (
    <Select
      {...props}
      menuPlacement={"bottom"}
      styles={selectStyles}
      components={{ Option, SingleValue, DropdownIndicator, MenuList }}
    />
  );
};

export default SelectAccount;
