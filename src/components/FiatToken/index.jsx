import React, { useState, useRef } from "react";
import AcceptRates from "@/components/AcceptRates";
import AmmountPane from "@/components/AmmountPane"
import s from "./style.scss";

export default function FiatToken() {
    return (
        <div className={s.container}>
            <AmmountPane />
        </div>
    )
}