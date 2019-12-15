import React from "react";
import Select, { components } from "react-select";

const DropdownIndicator = props => {

  const { menuIsOpen } = props.selectProps;

  return (
    <components.DropdownIndicator {...props}>
      {menuIsOpen ? (
        <svg className="">
          <use href="#arrow-up"></use>
        </svg>
      ) : (
        <svg className="">
          <use href="#arrow-down"></use>
        </svg>
      )}
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;