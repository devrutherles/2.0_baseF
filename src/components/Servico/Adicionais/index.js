import React, { useCallback, useEffect, useState } from "react";

import Card from "../../Cards";
import Checkbox from "../../Checkbox";
import Dropdown from "../../Dropdown";
import Tooltip from "../../Tooltip";
import cn from "classnames";
import styles from "./CategoryAndAttibutes.module.sass";
import { useSelector, useDispatch } from "react-redux";
import { setService } from "@/context/serviceSlice";

const CategoryAndAttibutes = ({ config, className }) => {
  const service = useSelector((state) => state.service.service);
  const { id, value } = service;

  const horasOptions = [3, 4, 5, 6, 7, 8];
  const ajudantesOptions = [id == 1 ? 0 : 1, 2, 3, 4, 5, 6];
  const [horas, setHoras] = useState(3);
  const [ajudantes, setAjudantes] = useState(ajudantesOptions[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(service);
    if (!id) return;

    let total =
      horas * config[1]?.value_hours +
      ajudantes * config[1]?.value_helpers -
      config[1]?.value_helpers;

    console.log(total);

    dispatch(
      setService({
        ...service,
        preco: total,
        value: total,
        hours: horas,
        helpers: ajudantes,
      })
    );
  }, [horas, ajudantes]);

  return (
    <Card className={cn(styles.card, className)} title="Detalhes adicionais">
      {service.id == 2 && (
        <Dropdown
          className={styles.field}
          label="Horas"
          tooltip="escolha se precisar de horas adicionais"
          value={horas}
          setValue={setHoras}
          options={horasOptions}
        />
      )}
      <div className={styles.images}>
        <Dropdown
          className={styles.field}
          label="Ajudantes"
          tooltip="Escolha a quantidade de ajudantes"
          value={ajudantes}
          setValue={setAjudantes}
          options={ajudantesOptions}
        />
      </div>
    </Card>
  );
};

export default CategoryAndAttibutes;
