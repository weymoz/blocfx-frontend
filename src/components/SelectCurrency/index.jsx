import React from "react";
import Select, { components } from "react-select";
import DropdownIndicator from "@/components/DropdownIndicator";

const customStyles = {
  option: (provided, state) => {
    return {
      ...provided,

      backgroundColor: "tansparent",
      color: "inherit",
      padding: "auto",

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
      display: "flex"
    };
  },

  dropdownIndicator: (provided, data) => {
    return {
      ...provided
    };
  }
};



const SingleValue = ({ children, ...props }) => {
  const currencies = props.selectProps.currencies;
  const currencyCode = props.data.value;
  const { sprite } = currencies[currencyCode];
  return (
    <>
      <svg className="">
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
      <div className="">
        <svg className="">
          <use href={`#${sprite.id}`}></use>
        </svg>
        <div className="">{code}</div>
        <div className="">{name}</div>
      </div>
    </components.Option>
  );
};


const Control = (props) => {

  const currencies = props.selectProps.currencies;
  let currentValue = props.getValue()[0].value;
  const labelText = currencies[currentValue].name

  const labelClass = props.selectProps.classNamePrefix + '__label';

  return (
    <>
      <label className={""} htmlFor="">{labelText}</label>
      <components.Control {...props} />
    </>
  )
};

const mapCurrenciesToOptions = currencies => Object.keys(currencies).map(code => ({value: code, label: code}))
const SelectCurrency = props => {

  return (

      <Select
        {...props}
        styles={customStyles}
        menuPlacement={"bottom"}
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

export default SelectCurrency;
