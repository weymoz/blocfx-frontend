import React from "react";

export default function Svg({iconId, className}) {
  return (
      <svg className={className}>
        <use href={`#${iconId}`}></use>
      </svg>
  );
}
