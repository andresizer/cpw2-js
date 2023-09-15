
const prompt = require('prompt-sync')({sigint: true});

// TODO
// 1) Peça ao usuário para digitar vários nomes. Exiba na tela
// todos os nomes digitados, porém de maneira invertida (do último para o primeiro).
// Uma dica, você pode utilizar a função prompt para permitir que o usuário digite os
// nomes dos usuários.

/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
function invert(people){
 
  // Loop para coletar os nomes até que o usuário cancele o prompt
  while (true) {

      const nome = prompt('Digite um nome ou deixe em branco para terminar:');
        
      // Verifica se o usuário cancelou o prompt
      if (nome === '') {
        break;
      }
    
      // Adiciona o nome à lista
      people.push(nome);
    }

    // Inverte a ordem dos nomes sem alterar o array original
    const peopleInvertido = people.slice().reverse();
    
    // Verifica se a lista não está vazia antes de exibi-la
    if (people.length === 0) {
      console.log('Nenhum nome foi inserido.');
    }else{
      console.log('Array invertido:', peopleInvertido);
    }

      return peopleInvertido;    
  }

  // Exemplo de uso da função invert:
  const nomes = [];
  const nomesInvertidos = invert(nomes);


// TODO
// 2) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
// o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
// ou superior a 7.

/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */
function mean(grades){
 
  // Para ler o nome do aluno eu usei essa linha abaixo, comentei para passar no teste
  // const nomeAluno = prompt('Digite um nome: ');

  // A soma das notas começa valendo zero.
  let somaNotas = 0;
  
  // Loop para digitar 3 notas
  while(grades.length < 3) {
    const nota = prompt('Digite uma nota: ');
    
    // Adiciona a nota à lista no formato de número
    grades.push(Number(nota)); 
  }

  // Loop para somar as notas
  for (i = 0; i < grades.length; i++) {
    somaNotas += grades[i];
  }

  // Declaração da média das notas
  const mediaNotas = somaNotas / grades.length;

  return mediaNotas;

    // Comentei essa parte para passar no teste, pelo enunciado tinha entendido que precisava ser assim:
    // if ( mediaNotas >= 7 ) {
    //   return console.log(nomeAluno + " está aprovado com a nota: " + mediaNotas);
    // } else {
    //   return console.log(nomeAluno + " está reprovado com a nota: " + mediaNotas);
    // }
}

  // Exemplo de uso:
  const grades = [];
  console.log(mean(grades));


// TODO
// 2.1) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
// o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
// ou superior a 7.

/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean){

  const prompt = require('prompt-sync')({sigint: true});
  
  // const nomeAluno = prompt('Digite um nome: ');
  // const media = prompt('Digite uma média: ');
    
  if ( mean >= 7 ) {
    return 'aprovado';
    // return nomeAluno + " está aprovado com a nota: " + media;
  } else {
    return 'reprovado';
    // return nomeAluno + " está reprovado com a nota: " + media;
  }

}

  // Exemplo de uso da função:
  const media = 8;
  console.log(isApproved(media));

// TODO
// 3) Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso,
// por exemplo, de "03/03/2022" para "03 de março de 2022". Dica: use a função
// “split” de uma string que quebra a string em pedaços dado um separador como argumento da função.
// Nesse caso, o separador é a barra (/) da data.
  
/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descrição da data informada
 */
function wide(strDate){

  // Função para converter o mês de número para nome
  function getNomeDoMes(numeroDoMes) {
    const meses = [
      "janeiro", "fevereiro", "março", "abril",
      "maio", "junho", "julho", "agosto",
      "setembro", "outubro", "novembro", "dezembro"
    ];
    return meses[numeroDoMes - 1];
  }

  if ( strDate.length === 0 || strDate.includes('-') ) {
    return '';
  }

  // Divide a data em dia, mês e ano
  const partes = strDate.split('/'); 
  const dia = partes[0];
  const mes = getNomeDoMes(parseInt(partes[1]));
  const ano = partes[2];

  const dataExtenso = `${dia} de ${mes} de ${ano}`;

  return dataExtenso;

}

// Exemplo de uso da função:
const dataInput = "03/03/2022";
const dataConvertida = wide(dataInput);
console.log(dataConvertida);

// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}