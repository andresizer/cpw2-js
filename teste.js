// Função para converter o mês de número para nome
function getNomeDoMes(numeroDoMes) {
  const meses = [
    "janeiro", "fevereiro", "março", "abril",
    "maio", "junho", "julho", "agosto",
    "setembro", "outubro", "novembro", "dezembro"
  ];
  return meses[numeroDoMes - 1];
}

// Função para converter a data por extenso
function dataPorExtenso(data) {
  const partes = data.split('/'); // Divide a data em dia, mês e ano
  const dia = partes[0];
  const mes = getNomeDoMes(parseInt(partes[1]));
  const ano = partes[2];

  const dataExtenso = `${dia} de ${mes} de ${ano}`;
  return dataExtenso;
}

// Exemplo de uso da função
const dataInput = "03/04/2022";
const dataConvertida = dataPorExtenso(dataInput);
console.log(dataConvertida); // Saída: "03 de março de 2022"
