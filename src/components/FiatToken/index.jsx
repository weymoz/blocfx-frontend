import React, { useState, useRef } from "react";
import AmmountPane from "@/components/AmmountPane"
import AccountPane from "@/components/AccountPane"
import BeneficiaryPane from "@/components/BeneficiaryPane"
import TermsPane from "@/components/TermsPane"
import s from "./style.scss";
import NextStep from "../NextStep";

export default function FiatToken() {
    return (
        <div className={s.container}>
            <AmmountPane />
            <AccountPane />
            <BeneficiaryPane />
            <TermsPane />
            <NextStep 
                path="" 
                buttonText="Continue" 
                infoText={
                    (className) => (
                        <p className={className}>
                            By clicking Continue you agree with  
                            <a href="#terms">
                                &nbsp;Terms of Use and Privacy Policy
                            </a>
                        </p>
                    )
                }
            />
        </div>
    )
}