import React from "react";
import style from "./List.module.sass";
import Icon from "../Icons";

export default function RenderRow({ suggestion, handleSetOrigem }) {
  if (!suggestion) {
    return null;
  }

  const neighborhood = suggestion.context?.find((c) =>
    c.id.includes("neighborhood")
  )?.text;
  const place = suggestion.context?.find((c) => c.id.includes("place"))?.text;
  const region =
    suggestion.context?.find((c) => c.id.includes("region"))?.text ||
    "Endereço não encontrado";

  return (
    <div key={suggestion.id} className={style["col--search"]}>
      <div onClick={() => handleSetOrigem(suggestion)} className={style.search}>
        <Icon name="searchLocation" className={style["rectangle-1-2-1-2"]} />
        <div className={style["frame-3"]}>
          <p className={style["text-1"]}>
            {suggestion.text || "Endereço inválido"}
          </p>
          <p className={style["text-2"]} key={suggestion.id}>
            {neighborhood ? neighborhood + ", " : ""}
            {place ? place + ", " : ""}
            {region}
          </p>
        </div>
      </div>
    </div>
  );
}
