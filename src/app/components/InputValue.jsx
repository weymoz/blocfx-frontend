import React from "react";

const InputValue = props => {
  return (
    <div className={`${props.classNamePrefix} ${props.className}`}>

      <label htmlFor="currency-fiat" className={`${props.classNamePrefix}__label`}>
        You Send
      </label>

      <input
        className={`${props.classNamePrefix}__input`}
        id="currency-fiat"
        name="currency"
        type="text"
        defaultValue="198.39"
      />
    </div>
  );
};

export default InputValue;
