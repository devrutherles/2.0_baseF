import Icon from "../Icon";
import React from "react";
import Tooltip from "../Tooltip";
import cn from "classnames";
import styles from "./TextInput.module.sass";

const TextInput = ({
  className,
  classLabel,
  classInput,
  label,
  icon,
  copy,
  currency,
  tooltip,
  type,
  place,
  value,
  setValue,
  ...props
}) => {
  return (
    <div
      className={cn(
        styles.field,
        { [styles.fieldIcon]: icon },
        { [styles.fieldCopy]: copy },
        { [styles.fieldCurrency]: currency },
        className
      )}
    >
      {label && (
        <div className={cn(classLabel, styles.label)}>
          {label}{" "}
          {tooltip && (
            <Tooltip
              className={styles.tooltip}
              title={tooltip}
              icon="info"
              place={place ? place : "right"}
            />
          )}
        </div>
      )}
      <div className={styles.wrap}>
        <input
          onBlur={props.onBlur}
          disabled={props.disabled}
          type={type}
          value={value}
          autoComplete={props.autoComplete ? props.autoComplete : "off"}
          onChange={(e) => setValue(e.target.value)}
          className={cn(classInput, styles.input)}
          {...props}
        />
        {icon && (
          <div className={styles.icon}>
            <Icon name={icon} size="24" />{" "}
          </div>
        )}
        {copy && (
          <button className={styles.copy}>
            <Icon name="copy" size="24" />{" "}
          </button>
        )}
        {currency && <div className={styles.currency}>{currency}</div>}
      </div>
    </div>
  );
};

export default TextInput;
