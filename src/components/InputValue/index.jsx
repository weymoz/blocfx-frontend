import React from "react";
import s from "./style.scss";

const InputValue = ({
  labelText,
  value,
  onChange,
  defaultValue,
  className
}) => {

  return (
    <div className={className}>
      <label className={s.inputLabel}>{labelText}</label>

      <input
        className={s.inputValue}
        type="text"
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
      />

    </div>
  );
};

export default InputValue;
