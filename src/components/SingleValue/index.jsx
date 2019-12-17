import React from "react";
import Select, { components } from "react-select";

function SingleValue ({ children, ...props }) {

  return (
        <components.SingleValue {...props}>{children}</components.SingleValue>
  );
};

export default SingleValue;
