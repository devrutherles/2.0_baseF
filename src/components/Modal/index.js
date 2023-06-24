import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import OutsideClickHandler from "react-outside-click-handler";
import cn from "classnames";
import styles from "./Modal.module.sass";
import Icon from "../Icon";

const Modal = ({ outerClassName, visible, onClose, children }) => {
  return (
    <>
      {visible ? (
        <div id="modal" className={styles.modal}>
          <div className={cn(styles.outer, outerClassName)}>
            <OutsideClickHandler onOutsideClick={onClose}>
              {children}
              <button className={styles.close} onClick={onClose}>
                <Icon name="close" size="32" />
              </button>
            </OutsideClickHandler>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
