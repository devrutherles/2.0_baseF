import React, { useEffect, useState } from "react";

import Card from "../../Cards";
import Icon from "../../Icon";
import Link from "next/link";
import Switch from "../../Switch";
import TextInput from "../../TextInput";
import cn from "classnames";
import styles from "./NameAndDescription.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { setService } from "@/context/serviceSlice";

const NameAndDescription = ({ className }) => {
  const [detalhes, setDetalhes] = useState("");
  const [norigin, setNorigin] = useState("");
  const [ndestino, setNdestino] = useState("");
  const [telefone, setTelefone] = useState("");
  const [ap, setAP] = useState(false);
  const [elevador, setElevador] = useState(false);
  const service = useSelector((state) => state.service.service);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setService({
        ...service,
        norigin: norigin,
        ndestino: ndestino,
        apartamento: ap,
        elevador: elevador,
        telefone: telefone,
      })
    );
  }, [norigin, ndestino, ap, elevador, telefone]);

  return (
    <Card className={cn(styles.card, className)}>
      <div style={{ marginBotton: 10 }} className={styles.line}>
        <div className={styles.info}>Apartamento? </div>
        <Switch
          className={styles.switch}
          value={ap}
          onChange={() => setAP(!ap)}
        />
      </div>

      {ap ? (
        <div style={{ marginBotton: 10 }} className={styles.line}>
          <div className={styles.info}>Elevador? </div>
          <Switch
            className={styles.switch}
            value={elevador}
            onChange={() => setElevador(!elevador)}
          />
        </div>
      ) : (
        <></>
      )}

      <div className={styles.description}>
        <div style={{ marginButton: 10 }} className={styles.group}>
          <TextInput
            className={styles.field}
            label="Endereço"
            name="value1"
            type="text"
            value={norigin}
            placeholder="Confirme o número de origem"
            required
            onChange={(e) => setNorigin(e.target.value)}
          />

          <TextInput
            className={styles.field}
            name="value2"
            type="text"
            value={ndestino}
            placeholder="Confirme o número  de destino"
            onChange={(e) => setNdestino(e.target.value)}
            required
          />
        </div>
        <div
          style={{ marginButton: 10, marginTop: 15 }}
          className={styles.group}
        >
          <TextInput
            className={styles.field}
            label="Telefone"
            name="telefone"
            type="text"
            value={telefone}
            placeholder="Telefone de contato"
            required
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
        <div style={{ marginTop: 15 }}>
          <TextInput
            className={styles.field}
            label="Detalhes"
            name="detalhes"
            type="text"
            value={detalhes}
            placeholder="Detalhes do serviço"
            required
            onChange={(e) => setDetalhes(e.target.value)}
          />
        </div>
      </div>
    </Card>
  );
};

export default NameAndDescription;
