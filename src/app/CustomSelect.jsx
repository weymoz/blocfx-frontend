import React from "react";
import Select, { components } from "react-select";
import DetailsArrow from "../assets/svg/details_arrow.svg";
import dropBtn from "../assets/svg/drop_btn.svg";
import Currency from "./currency";
import SelectType from "./selectType";

const DropdownIndicator = props => {

  const { menuIsOpen } = props.selectProps;

  return (
    <components.DropdownIndicator {...props}>
      {menuIsOpen ? (
        <svg className="custom-select__dropdown-arrow">
          <use href="#arrow-up"></use>
        </svg>
      ) : (
        <svg className="custom-select__dropdown-arrow">
          <use href="#arrow-down"></use>
        </svg>
      )}
    </components.DropdownIndicator>
  );
};

const CurrencyListItem = props => {
  const { symbol = "", acronym = "", name = "" } = Currency[props.label];
  return (
    <div className="currency-list-item">
      <div
        className="currency-list-item__symbol"
        dangerouslySetInnerHTML={{ __html: symbol }}
      ></div>
      <div className="currency-list-item__acronym">{acronym}</div>
      <div className="currency-list-item__name">{name}</div>
    </div>
  );
};

const Option = props => {
  return (
    <components.Option {...props}>
      <CurrencyListItem {...props} />
    </components.Option>
  );
};

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
      display: "flex",

      ":before": {
        color: "#364fcc",
        fontFamily: "Muli Bold",
        marginRight: ".7em",
        content: `"${Currency[data.label].symbolUnicode}"`,
        display: "block"
      }
    };
  },

  dropdownIndicator: (provided, data) => {
    return {
      ...provided
    };
  }
};


const getCustomComponents = (selectType) => {
  switch (selectType)  {

    case SelectType.CURRENCY:
      return {
        DropdownIndicator,
        Option
      }
    
    case SelectType.PAYMENT_ACCOUNT:
      return {
        DropdownIndicator,
      }
  } 
}



const CustomSelect = props => {
  return (
    <Select
      styles={customStyles}
      {...props}
      menuPlacement={"bottom"}
      components={getCustomComponents(props.selectType)}
    />
  );
};
export default CustomSelect;
