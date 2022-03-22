let dividir = (valor1, valor2) => {
  let valor1C = parseFloat(valor1);
  let valor2C = parseFloat(valor2);

  if (valor1C == 0 || valor2C == 0) {
    return "Não se pode dividir por zero";
  } else {
    return valor1C / valor2C;
  }
};
