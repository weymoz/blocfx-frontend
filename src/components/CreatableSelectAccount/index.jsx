import React from "react";
import s from "./style.scss";
import CreatableSelect from "react-select/creatable";

const ACCOUNT_TYPE = {
    BANK: "BANK",
    CRYPTO: "CRYPTO"
};



export default function CreatableSelectAccount(props) {
  console.log("Type:");
  console.log(props.type);
  console.log("Options:");
  console.log(props.options);
  console.log("Value:");
  console.log(props.value);
  console.log("Props:");
  console.log(props);

  return (
    <CreatableSelect
        {...props}
        onCreateOption={o => console.log("Starting to create new option " + o)}
    />
  );
}

export { ACCOUNT_TYPE };
