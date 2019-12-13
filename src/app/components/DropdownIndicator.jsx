import React from "react";
import Select, { components } from "react-select";

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

export default DropdownIndicator;