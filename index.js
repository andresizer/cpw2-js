
/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
function invert(people){
 
  // Loop para coletar os nomes até que o usuário cancele o prompt
  while (true) {

      const prompt = require('prompt-sync')({sigint: true});

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
 
      // TODO
      // 1) Peça ao usuário para digitar vários nomes. Exiba na tela
      // todos os nomes digitados, porém de maneira invertida (do último para o primeiro).
      // Uma dica, você pode utilizar a função prompt para permitir que o usuário digite os
      // nomes dos usuários.
  
      return peopleInvertido;    
  }

  // Exemplo de uso:
  const nomes = [];
  const nomesInvertidos = invert(nomes);





/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */
function mean(grades){
    
  const prompt = require('prompt-sync')({sigint: true});
  
  // const nomeAluno = prompt('Digite um nome: ');

  let somaNotas = 0;
  
while(grades.length < 3) {
  const nota = prompt('Digite uma nota: ');
  
  // Adiciona a nota à lista
  grades.push(Number(nota)); 
}

for (i = 0; i < grades.length; i++) {
  somaNotas += grades[i];
}

const mediaNotas = somaNotas / grades.length;

return mediaNotas;

// if ( mediaNotas >= 7 ) {
//   return console.log(nomeAluno + " está aprovado com a nota: " + mediaNotas);
// } else {
//   return console.log(nomeAluno + " está reprovado com a nota: " + mediaNotas);
// }

    // TODO
    // 2) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.

}

  // Exemplo de uso:
  const grades = [];
  console.log(mean(grades));



/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean){

  // TODO
  // 2.1) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
  // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
  // ou superior a 7.

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

  // Exemplo de uso:
  const media = 8;
  console.log(isApproved(media));


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

const partes = strDate.split('/'); // Divide a data em dia, mês e ano
const dia = partes[0];
const mes = getNomeDoMes(parseInt(partes[1]));
const ano = partes[2];

const dataExtenso = `${dia} de ${mes} de ${ano}`;

return dataExtenso;

  }

    // TODO
    // 3) Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso,
    // por exemplo, de "03/03/2022" para "03 de março de 2022". Dica: use a função
    // “split” de uma string que quebra a string em pedaços dado um separador como argumento da função.
    // Nesse caso, o separador é a barra (/) da data.



// Exemplo de uso da função
const dataInput = "03/03/2022";
const dataConvertida = wide(dataInput);
console.log(dataConvertida); // Saída: "03 de março de 2022"

// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}