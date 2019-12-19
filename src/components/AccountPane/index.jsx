import React, { useState, useRef } from "react";
import Media from "react-media";
import Collapse from "@kunukn/react-collapse";
import s from "./style.scss";

export default function AccountPane() {
  let [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    console.log("jhgjhgjg");
    setIsOpen(!isOpen);
  };

  const OpenContent = () => (
    <div className={s.pane}>
      <p className={s.accountLabel}>Bank Name</p>
      <p className={s.accountValue}>Raiffeisen Bank</p>
      <p className={s.accountLabel}>Bank account number</p>
      <p className={s.accountValue}>5168 7556 4123 4219</p>
      <p className={s.accountLabel}>Currency</p>
      <p className={s.accountValue}>EUR</p>
    </div>
  );

  const Decor = () => <div className={`${s.decor}`}></div>;

  const CloseableContent = () => (
      <div className={s.pane}>
        <p className={s.accountLabel}>Sort Code</p>
        <p className={s.accountValue}>12-34-56</p>
        <p className={s.accountLabel}>Bank full address</p>
        <p className={s.accountValue}>Charlotte str. 48 WIT</p>
        <p className={s.accountLabel}>Location</p>
        <p className={s.accountValue}>Vienna, Austria</p>
      </div>
  );


  const ToggleButton = ({ isOpen }) => {
    return (
      <button
        className={`${s.toggleButton}`}
        onClick={handleToggle}
      >
          <svg className={s.dropdownArrow}>
            <use href={`#${isOpen ? 'arrow-up' : 'arrow-down'}`}></use>
          </svg>
      </button>
    );
  };


  return (
    <>
      <h1 className={s.header}>Payment Account</h1>

      <section className={s.section}>
        <OpenContent />
        <Media
          queries={{
            large: "(min-width: 768px)",
            small: "(max-width: 767px)"
          }}
        >
          {matches => (
            <>
              {matches.large && (
                <>
                  <Decor />
                  <CloseableContent />
                </>
              )}
              {matches.small && (
                <>
                  {!isOpen && <ToggleButton isOpen={isOpen} onClick={handleToggle} />}
                  <Collapse
                    transition="height 500ms cubic-bezier(.4, 0, .2, 1)"
                    isOpen={isOpen}
                  >
                    <Decor />
                    <CloseableContent />
                    {isOpen && <ToggleButton isOpen={isOpen} onClick={handleToggle} />}
                  </Collapse>
                </>
              )}
            </>
          )}
        </Media>
      </section>
    </>
  );
}
