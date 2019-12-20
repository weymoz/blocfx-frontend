import React from "react";
import Pane from "@/components/Pane";
import BeneficiaryPane from "@/components/BeneficiaryPane";
import MainTitle from "@/components/MainTitle";
import DownloadButton from "@/components/DownloadButton";
import s from './style.scss'

export default function TransactionDone() {
  return (
    <div>
      <div className={s.headerContainer}>
        <MainTitle>Transaction done</MainTitle>
        <DownloadButton />
      </div>
      <p className={s.message}>
        Convert successfully executed. Please, check Your funds in the wallet
      </p>
      <Pane>
        <div className={s.info}>
          <p>Transaction ID</p>
          <p>1237564352</p>
          <p>Status</p>
          <p>Transaction done</p>
          <p>You send</p>
          <p>200 USD</p>
          <p>You get</p>
          <p>181.05 EUR</p>
        </div>
      </Pane>
      <BeneficiaryPane />
    </div>
  );
}
