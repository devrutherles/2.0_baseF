
import { isEqual } from "lodash";
import { useCallback, useRef } from "react";


export function toPrice(value) {
  const formattedPrice = `R$ ${value.toFixed(2).toString().replace('.', ',')}`;
  return formattedPrice;
}
export const handleDateChange = (value, setBookDate) => {
  const formattedDate = value
    .replace(/\D/g, '') // Remove todos os caracteres não numéricos
    .replace(/(\d{2})(\d)/, '$1/$2') // Insere a primeira barra após o segundo dígito
    .replace(/(\d{2})(\d)/, '$1/$2') // Insere a segunda barra após o quarto dígito
    .substring(0, 10); // Limita a entrada a 10 caracteres (dd/mm/aaaa)

  setBookDate(formattedDate);
};
export const handleTimeChange = (value, setBookHour) => {
  const FormattedTime = value.replace(/(\d{2})(\d)/, '$1:$2').substring(0, 5);
  setBookHour(FormattedTime);
};

export function useDeepCompareCallback(callback, dependencies) {
  const dependenciesRef = useRef();

  if (!isEqual(dependenciesRef.current, dependencies)) {
    dependenciesRef.current = dependencies;
  }

  return useCallback(callback, dependenciesRef.current);
}

export const toName = (name) => {
  const palavras = name.split(' ');

  return palavras[0] + ' ' + palavras[1];
};

export const toDate = (data) => {
  const dateString = data;
  const date = new Date(dateString);
  if (dateString == null || dateString == undefined || dateString == '') {
    return '';
  } else {
    const formattedDate = `${
      date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit'
      }) +
      ' às ' +
      date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
      })
    }`;

    return formattedDate;
  }
};
