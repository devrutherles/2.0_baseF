export const numberWithCommas = (x) => {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};
export const removeNonDigits = (value) => {
  return value.replace(/\D/g, "");
};
export function primeiraLetraMaiuscula(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export const cpfMask = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};
export const phoneMask = (value) => {
  return value
    .replace(/\D/g, "") // Remove todos os caracteres que não são números
    .replace(/^(\d{2})(\d)/, "($1)$2") // Adiciona parênteses em torno dos dois primeiros dígitos
    .replace(/(\d)(\d{4})$/, "$1-$2") // Adiciona um hífen antes dos últimos quatro dígitos
    .replace(/(?<=\(\d\d\))(\d)/, " $1"); // Adiciona um espaço após os dois primeiros dígitos
};
export const progress = () => {
  return Math.floor(Math.random() * 90) + 10 + "%";
};

export function maskBrazilianPhone(value) {
  const cleaned = ('' + value).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{3,4})(\d{4})$/);
  if (match) {
    const part1 = match[1];
    const part2 = match[2];
    const part3 = match[3];
    return `(${part1}) ${part2}-${part3}`;
  }
  return value;
}




export const formatPrice = (data) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(data);
};

export function obterPrimeirosNomes(nomeCompleto) {
  // Verificar se a string de entrada está vazia
  if (!nomeCompleto || nomeCompleto.trim() === "") {
    return nomeCompleto;
  }

  // Dividir o nome completo em partes separadas pelo espaço em branco
  const partesNome = nomeCompleto.split(" ");

  // Se o nome completo tiver apenas um nome, retornar o nome completo original
  if (partesNome.length === 1) {
    return nomeCompleto;
  }

  // O primeiro nome é a primeira parte do nome completo
  const primeiroNome = partesNome[0] + " " + partesNome[1];
  return primeiroNome;
}

export function getInitials(data) {
  let initials = "";
  const words = data.split(" ");

  if (words.length >= 1 && words[0]) {
    initials += words[0][0]?.toUpperCase() || "";
  }

  if (words.length >= 2 && words[1]) {
    initials += words[1][0]?.toUpperCase() || "";
  }

  return initials;
}
export function initialsToColor(initials) {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const charCode = initials.charCodeAt(i % initials.length);
    const index = (charCode * (i + 1)) % 16;
    color += letters[index];
  }

  return color;
}
export function removeAspasChaves(str) {
  return (str = str
    .replace(/[{}"]/g, "")
    .replace(/,/g, ", ")
    .replace(/:/g, ": ")
    .replace(/\b\w/g, function (l) {
      return l.toUpperCase();
    }));
}

export function formatDate(timestamp) {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}/${month} às ${hours}:${minutes}`;
}


