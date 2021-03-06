import React, { useState, useRef } from "react";
import Media from "react-media";
import Collapse from "@kunukn/react-collapse";
import s from "./style.scss";

export default function BeneficiaryPane() {
  let [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const OpenContent = () => (
    <div className={s.pane}>
      <p className={s.accountLabel}>Name</p>
      <p className={s.accountValue}>John Doe</p>
      <p className={s.accountLabel}>Bank Name</p>
      <p className={s.accountValue}>Raiffeisen Bank</p>
      <p className={s.accountLabel}>Account Number</p>
      <p className={s.accountValue}>2112 4275 9123 1925</p>
      <p className={s.accountLabel}>Currency</p>
      <p className={s.accountValue}>EUR</p>
    </div>
  );

  const Decor = () => <div className={`${s.decor}`}></div>;

  const CloseableContent = () => (
      <div className={s.pane}>
        <p className={s.accountLabel}>Sort Code</p>
        <p className={s.accountValue}>12-34-56</p>
        <p className={s.accountLabel}>Bank SWIFT/BIC code</p>
        <p className={s.accountValue}>FXBBBeBBXX</p>
        <p className={s.accountLabel}>Bank Full Address</p>
        <p className={s.accountValue}>John Charlotte str., 48 WIT</p>
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
      <h1 className={s.header}>Beneficiary</h1>

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
