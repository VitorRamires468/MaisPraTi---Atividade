const input = require("prompt-sync")();
function questao1() {
  let quantidadeCigarros = parseInt(input("Cigarros fumados por dia: "));
  let anosFumados = parseInt(input("Quantos anos você fumou: "));
  let diasFumados = 365 * anosFumados * quantidadeCigarros;
  let diasPerdidos = parseInt(diasFumados / 1440);
  console.log(`Você perdeu ${diasPerdidos} dias.`);
}

function questao2() {
  let velocidade = parseInt(input("Informe a velocidade do seu carro: "));
  if (velocidade >= 80) {
    let multa = 5 * (velocidade - 80);
    console.log(`Valor da multa: ${multa}`);
  }
}

function questao3() {
  let distancia = parseInt(
    input("Informe a distancia a ser percorrida em Km: ")
  );
  let preco;
  if (distancia <= 200) {
    preco = 0.5 * distancia;
  } else {
    preco = 0.45 * distancia;
  }
  console.log(`Preço da passagem: ${preco}`);
}

function questao4() {
  let lado1 = parseInt(input("Informe a medida do lado: "));
  let lado2 = parseInt(input("Informe a medida do lado: "));
  let lado3 = parseInt(input("Informe a medida do lado: "));
  if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
    console.log("É possível formar triângulo");
  } else {
    console.log("Não é possível formar um triângulo");
  }
}

function questao5() {
  let array = ["pedra", "papel", "tesoura"];
  let index = Math.floor(Math.random() * array.length);
  let escolhaComputado = array[index];
  let escolha = input(" pedra-papel-tesoura : ");
  console.log("Computador: " + escolhaComputado);
  if (escolha === "pedra") {
    if (escolhaComputado === "pedra") {
      console.log("ninguem venceu");
    } else if (escolhaComputado === "papel") {
      console.log("computador venceu");
    } else {
      console.log("você venceu");
    }
  } else if (escolha === "papel") {
    if (escolhaComputado === "pedra") {
      console.log("você venceu");
    } else if (escolhaComputado === "papel") {
      console.log("ninguem venceu");
    } else {
      console.log("computador venceu");
    }
  } else {
    if (escolhaComputado === "pedra") {
      console.log("computador venceu");
    } else if (escolhaComputado === "papel") {
      console.log("você venceu");
    } else {
      console.log("ningeum venceu");
    }
  }
}

function questao6() {
  let numeroGerado = Math.floor(Math.random() * 5);
  let numeroUsuario = parseInt(input("Qual foi o número escolhido: "));
  if (numeroGerado === numeroUsuario) {
    console.log("PARABENS! Você ganhou!");
  } else {
    console.log(`Número do computador: ${numeroGerado}`);
    console.log("Não foi dessa vez");
  }
}

function questao7() {
  let carro = input("Informe o carro (luxo/popular): ");
  let diasAlugados = parseInt(input("Informe o total de dias do aluguel: "));
  let kmPercorridos = parseInt(input("Informe quantos Km foram percorridos: "));
  let preco = 0;
  if (carro === "popular") {
    if (kmPercorridos <= 100) {
      preco = preco + kmPercorridos * 0.2;
    } else {
      preco = preco + kmPercorridos * 0.1;
    }
    preco = preco + diasAlugados * 90;
  } else {
    if (kmPercorridos <= 200) {
      preco = preco + kmPercorridos * 0.3;
    } else {
      preco = preco + kmPercorridos * 0.25;
    }
    preco = preco + diasAlugados * 150;
  }
  console.log(
    `Valor a ser pago: ${preco.toFixed(
      2
    )}\nTipo do Carro: ${carro}\nKm Percorridos: ${kmPercorridos}\nDias alugados: ${diasAlugados}`
  );
}

function questao8() {
  let horasExercicio = parseInt(
    input("Informe o total de horas exercitadas: ")
  );
  let pontos;
  if (horasExercicio <= 10) {
    pontos = horasExercicio * 2;
  } else if (horasExercicio <= 20) {
    pontos = horasExercicio * 5;
  } else {
    pontos = horasExercicio * 10;
  }
  console.log(
    `Você obteve ${pontos} pontos. Dinheiro a ser resgatado: ${(
      pontos * 0.05
    ).toFixed(2)}`
  );
}

function questao9() {
  let pagoHomens = 0,
    pagoMulheres = 0,
    sexo,
    salario,
    continuar;

  while (true) {
    salario = parseFloat(input("Informe o salario: "));
    sexo = input("Informe o sexo (homem/mulher): ");
    continuar = input("Deseja continuar [S/N]: ");
    if (sexo === "homem") {
      pagoHomens = pagoHomens + salario;
    } else if (sexo === "mulher") {
      pagoMulheres = pagoMulheres + salario;
    }
    if (continuar === "N") {
      break;
    }
  }

  console.log(
    `Valor pago aos homens: ${pagoHomens}\nValor pago as mulheres: ${pagoMulheres}`
  );
}

function questao10() {
  let numeros = new Array();
  let continuar,
    numero,
    contador = 0,
    soma = 0,
    pares = 0;
  do {
    numero = parseFloat(input("Informe um numero: "));
    numeros.push(numero);
    soma = soma + numero;
    contador++;
    continuar = input("Deseja continuar [S/N]: ");
  } while (continuar != "N");
  numeros.forEach((valor) => {
    if (valor % 2 === 0) {
      pares++;
    }
  });
  console.log(
    `A soma dos numeros: ${soma.toFixed(2)}\nMenor valor: ${Math.min(
      numeros
    )}\nMedia: ${(soma / contador).toFixed(2)}\nQuantidade de Pares: ${pares}`
  );
}

function questao11() {
  let primeiroTermo = parseInt(input("Informe o primeiro termo: "));
  let razao = parseInt(input("Informe a razão da PA: "));
  for (let i = 0; i < 10; i++) {
    console.log(primeiroTermo);
    primeiroTermo = primeiroTermo + razao;
  }
}

function questao12() {
  let a = 0,
    b = 1;
  for (let i = 0; i < 10; i++) {
    a = a + b;
    console.log(a);
    b = a - b;
  }
}

function questao13() {
  let fibo = new Array();
  let a = 0,
    b = 1;
  for (let i = 0; i < 15; i++) {
    a = a + b;
    fibo.push(a);
    b = a - b;
  }
  console.log(fibo);
}

function questao14() {
  let nomes = new Array();
  let nome;
  for (let i = 0; i < 7; i++) {
    nome = input("Informe seu nome: ");
    nomes.push(nome);
  }
  nomes.reverse().forEach((value) => {
    console.log(value);
  });
}

function questao15() {
  let numeros = new Array();
  let numero;
  for (let i = 0; i < 10; i++) {
    numero = parseInt(input("Informe um numero: "));
    numeros.push(numero);
  }
  numeros.forEach((value, index) => {
    if (value % 2 === 0) {
      console.log(`Número: ${value} - Posição: ${index}`);
    }
  });
}

function questao16() {
  let numeros = new Array();
  console.log();
  for (let i = 0; i < 20; i++) {
    numeros[i] = Math.floor(Math.random() * 99);
  }
  console.log("--------------Vetor-------------");
  console.log(numeros);
  console.log("------------Ordenado------------");
  console.log(numeros.sort((a, b) => a - b));
}

function questao17() {
  let nome = Array();
  let idade = Array();
  for (let i = 0; i < 5; i++) {
    nome[i] = input("Informe seu nome: ");
    idade[i] = parseInt(input("Informe sua idade: "));
  }
  menoresIdade = idade.filter((idade) => idade < 18);
  let nomesMenores = new Array();
  let indice_menor = 0;
  for (let i in idade) {
    if (idade[i] === menoresIdade[indice_menor]) {
      nomesMenores[indice_menor] = nome[i];
      indice_menor++;
    }
  }
  for (let j = 0; j < nomesMenores.length; j++) {
    console.log("Nome: " + nomesMenores[j]);
    console.log("Idade: " + menoresIdade[j]);
  }
}

function questao18() {
  let registro = {
    nome: "",
    cargo: "",
    salario: 0,
  };
  registro.nome = input("Informe seu nome: ");
  registro.cargo = input("Informe seu cago: ");
  registro.salario = parseInt(input("Informe seu salario: "));
  console.log("\n-----------Dados-----------");
  for (let dado in registro) {
    console.log(registro[dado]);
  }
}

function questao19() {
  let horas = new Array();
  let hora;
  for (let i = 0; i < 5; i++) {
    hora = input("Informe o horário: ");
  }
}

function questao20() {
  let fucionarios = [
    { matricula: 1, nome: "Mariana Lima", salarioBruto: "1652.23" },
    { matricula: 2, nome: "Mariana Oliveira", salarioBruto: "5278.47" },
    { matricula: 3, nome: "Ana Pereira", salarioBruto: "1762.26" },
    { matricula: 4, nome: "Fernanda Souza", salarioBruto: "2296.72" },
    { matricula: 5, nome: "Ana Costa", salarioBruto: "6761.21" },
    { matricula: 6, nome: "Carlos Ribeiro", salarioBruto: "7487.82" },
    { matricula: 7, nome: "Paula Costa", salarioBruto: "2003.68" },
    { matricula: 8, nome: "Ana Souza", salarioBruto: "6188.93" },
    { matricula: 9, nome: "Fernanda Souza", salarioBruto: "7643.13" },
    { matricula: 10, nome: "Fernanda Silva", salarioBruto: "5140.80" },
    { matricula: 11, nome: "Mariana Gomes", salarioBruto: "7462.43" },
    { matricula: 12, nome: "Carlos Pereira", salarioBruto: "5197.36" },
    { matricula: 13, nome: "Paula Santos", salarioBruto: "1742.75" },
    { matricula: 14, nome: "Maria Lima", salarioBruto: "3580.85" },
    { matricula: 15, nome: "José Santos", salarioBruto: "5138.63" },
    { matricula: 16, nome: "Ricardo Almeida", salarioBruto: "5769.47" },
    { matricula: 17, nome: "Ana Almeida", salarioBruto: "3469.70" },
    { matricula: 18, nome: "José Oliveira", salarioBruto: "4825.79" },
    { matricula: 19, nome: "Fernanda Gomes", salarioBruto: "7044.88" },
    { matricula: 20, nome: "João Lima", salarioBruto: "6236.80" },
    { matricula: 21, nome: "Paula Almeida", salarioBruto: "1573.21" },
    { matricula: 22, nome: "Fernanda Almeida", salarioBruto: "1809.97" },
    { matricula: 23, nome: "José Silva", salarioBruto: "1538.93" },
    { matricula: 24, nome: "Maria Almeida", salarioBruto: "1538.71" },
    { matricula: 25, nome: "Paula Costa", salarioBruto: "2577.02" },
    { matricula: 26, nome: "Carlos Gomes", salarioBruto: "5458.83" },
    { matricula: 27, nome: "José Oliveira", salarioBruto: "4480.64" },
    { matricula: 28, nome: "Fernanda Lima", salarioBruto: "3145.11" },
    { matricula: 29, nome: "Paula Lima", salarioBruto: "2232.77" },
    { matricula: 30, nome: "Carlos Gomes", salarioBruto: "4058.35" },
    { matricula: 31, nome: "Pedro Santos", salarioBruto: "7340.18" },
    { matricula: 32, nome: "Mariana Lima", salarioBruto: "6044.79" },
    { matricula: 33, nome: "João Silva", salarioBruto: "3605.38" },
    { matricula: 34, nome: "Ana Gomes", salarioBruto: "7429.33" },
    { matricula: 35, nome: "João Silva", salarioBruto: "2477.98" },
    { matricula: 36, nome: "João Almeida", salarioBruto: "2984.26" },
    { matricula: 37, nome: "Ana Pereira", salarioBruto: "6885.40" },
    { matricula: 38, nome: "Paula Lima", salarioBruto: "5953.70" },
    { matricula: 39, nome: "Maria Pereira", salarioBruto: "3856.51" },
    { matricula: 40, nome: "Paula Silva", salarioBruto: "1874.29" },
    { matricula: 41, nome: "Paula Silva", salarioBruto: "1590.05" },
    { matricula: 42, nome: "Maria Souza", salarioBruto: "3046.17" },
    { matricula: 43, nome: "Fernanda Silva", salarioBruto: "3000.23" },
    { matricula: 44, nome: "Mariana Costa", salarioBruto: "2295.42" },
    { matricula: 45, nome: "José Silva", salarioBruto: "1799.97" },
    { matricula: 46, nome: "Pedro Santos", salarioBruto: "2189.28" },
    { matricula: 47, nome: "José Silva", salarioBruto: "7905.12" },
    { matricula: 48, nome: "Mariana Almeida", salarioBruto: "5209.60" },
    { matricula: 49, nome: "Fernanda Costa", salarioBruto: "2574.21" },
    { matricula: 50, nome: "Fernanda Lima", salarioBruto: "5571.01" },
    { matricula: 51, nome: "Carlos Silva", salarioBruto: "3734.80" },
    { matricula: 52, nome: "Fernanda Almeida", salarioBruto: "2082.00" },
    { matricula: 53, nome: "Carlos Silva", salarioBruto: "3955.13" },
    { matricula: 54, nome: "João Gomes", salarioBruto: "6739.25" },
    { matricula: 55, nome: "Paula Almeida", salarioBruto: "1798.06" },
    { matricula: 56, nome: "Paula Santos", salarioBruto: "7258.36" },
    { matricula: 57, nome: "Maria Gomes", salarioBruto: "4651.93" },
    { matricula: 58, nome: "Carlos Pereira", salarioBruto: "4152.22" },
    { matricula: 59, nome: "João Lima", salarioBruto: "4472.68" },
    { matricula: 60, nome: "Mariana Gomes", salarioBruto: "4817.44" },
    { matricula: 61, nome: "Paula Pereira", salarioBruto: "2103.61" },
    { matricula: 62, nome: "João Santos", salarioBruto: "3682.67" },
    { matricula: 63, nome: "Paula Gomes", salarioBruto: "5598.64" },
    { matricula: 64, nome: "Mariana Ribeiro", salarioBruto: "4985.70" },
    { matricula: 65, nome: "João Silva", salarioBruto: "7244.32" },
    { matricula: 66, nome: "José Pereira", salarioBruto: "6727.04" },
    { matricula: 67, nome: "Ricardo Lima", salarioBruto: "4865.63" },
    { matricula: 68, nome: "Pedro Gomes", salarioBruto: "6496.76" },
    { matricula: 69, nome: "Pedro Santos", salarioBruto: "1931.55" },
    { matricula: 70, nome: "Fernanda Pereira", salarioBruto: "3979.45" },
    { matricula: 71, nome: "Paula Souza", salarioBruto: "3816.17" },
    { matricula: 72, nome: "Mariana Souza", salarioBruto: "1908.25" },
    { matricula: 73, nome: "José Ribeiro", salarioBruto: "2870.79" },
    { matricula: 74, nome: "Mariana Souza", salarioBruto: "6792.35" },
    { matricula: 75, nome: "João Oliveira", salarioBruto: "4904.12" },
    { matricula: 76, nome: "Carlos Ribeiro", salarioBruto: "5269.19" },
    { matricula: 77, nome: "Ricardo Silva", salarioBruto: "3860.33" },
    { matricula: 78, nome: "Carlos Pereira", salarioBruto: "2733.12" },
    { matricula: 79, nome: "Ricardo Gomes", salarioBruto: "6914.55" },
    { matricula: 80, nome: "Pedro Costa", salarioBruto: "5099.18" },
  ];
  for (let dado of fucionarios) {
    console.log(
      `Matricula: ${dado.matricula}\nNome: ${dado.nome}\nSalário Bruto: ${
        dado.salarioBruto
      }\nDedução INSS: R$ ${(dado.salarioBruto * 0.12).toFixed(
        2
      )}\nSalário Liquido: R$ ${(
        dado.salarioBruto -
        dado.salarioBruto * 0.12
      ).toFixed(2)}`
    );
  }
}

function questao21(alt, sexo) {
  let pesoIdeal;
  if (sexo == "H") {
    pesoIdeal = 72.7 * alt - 58;
  } else if ((sexo = "M")) {
    pesoIdeal = 62.1 * alt - 44.7;
  }
  return pesoIdeal.toFixed(2);
}

function questao22(listaSalario = Array(), listaFilhos = Array()) {
  let mediaSalario = 0,
    mediaFilhos = 0,
    maiorSalario,
    salariosate350;
  for (let salario of listaSalario) {
    mediaSalario = mediaSalario + salario;
  }
  mediaSalario = (mediaSalario / listaSalario.length).toFixed(2);
  for (let filhos of listaFilhos) {
    mediaFilhos = mediaFilhos + filhos;
  }
  mediaFilhos = (mediaFilhos / listaFilhos.length).toFixed(2);
  maiorSalario = Math.max.apply(null, listaSalario);
  salariosate350 = listaSalario.reduce((salario, valoratual) => {
    if (valoratual <= 350) {
      salario++;
    }
    return salario;
  }, 0);

  salariosate350 = ((salariosate350 / listaSalario.length) * 100).toFixed(2);
  return { mediaSalario, mediaFilhos, maiorSalario, salariosate350 };
}

function questao23() {
  let matriz = new Array();
  for (let i = 0; i < 7; i++) {
    matriz.push([]);
    for (let j = 0; j < 7; j++) {
      if (i === j) {
        matriz[i][j] = 1;
      } else {
        matriz[i][j] = 0;
      }
    }
    console.log(matriz[i]);
  }
}

function questao24() {
  let matriz = new Array(
    [1, -2, -3, 4],
    [5, -6, -7, -9],
    [12, 14, 13, 11],
    [-20, -30, -40, -50]
  );
  let C = new Array();
  let negativos;
  for (let i = 0; i < matriz.length; i++) {
    negativos = matriz[i].reduce((acumulador, valoratual) => {
      if (valoratual < 0) {
        acumulador++;
      }
      return acumulador;
    }, 0);
    C.push(negativos);
  }
  console.log(C);
}

function questao25() {
  let matriz = new Array();
  let linha = new Array();
  let somaColuna;
  for (let i = 0; i < 15; i++) {
    somaColuna = 0;
    linha = input("Informe os elementos da linha: ").split(" ");
    linha = linha.map(Number);
    matriz.push(linha);
  }
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 20; j++) {
      somaColuna = somaColuna + matriz[j][i];
    }
    console.log(`Soma coluna ${i}: ${somaColuna}`);
  }
}

function questao26() {
  let A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15],
  ];
  let B = [
    [2, 4, 6, 8, 10],
    [1, 3, 5, 7, 9],
    [1, 2, 3, 4, 5],
  ];
  let P = new Array();
  for (let k = 0; k < 5; k++) {
    let linha = new Array();
    for (let i = 0; i < 5; i++) {
      let elemento = 0;
      for (let j = 0; j < 3; j++) {
        elemento = elemento + A[k][j] * B[j][i];
      }
      linha.push(elemento);
    }
    P.push(linha);
  }
  console.log(P);
}

function questao27() {
  let matriz = new Array();
  let numero;
  for (let i = 0; i < 6; i++) {
    somaColuna = 0;
    linha = input("Informe os elementos da linha: ").split(" ");
    linha = linha.map(Number);
    matriz.push(linha);
  }
  numero = input("Informe um número: ");
  for (let i = 0; i < 6; i++) {
    matriz[i] = matriz[i].map((valor) => valor * 2);
  }
  console.log(matriz);
}

function questao28() {
  let matriz = new Array();
  let somaAcima = 0,
    somaAbaixo = 0;
  for (let a = 0; a < 10; a++) {
    linha = input("Informe os números da linhas: ").split(" ");
    linha = linha.map(Number);
    matriz.push(linha);
  }

  for (let i = 0; i < 10; i++) {
    for (let j = i; j < 10; j++) {
      if (i != j) {
        somaAcima = somaAcima + matriz[i][j];
      }
    }
  }
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j <= i; j++) {
      if (i != j) {
        somaAbaixo = somaAbaixo + matriz[i][j];
      }
    }
  }

  console.log(
    `Soma acima da diagonal principal: ${somaAcima}\nSoma abaixo da diagonal principal: ${somaAbaixo}`
  );
}

function questao29() {
  let matriz = new Array();
  let linha,
    somaLinha4 = 0,
    somaColuna2 = 0,
    somaPrincipal = 0,
    somaTotal = 0;
  for (let a = 0; a < 5; a++) {
    linha = input("Informe os números da linhas: ").split(" ");
    linha = linha.map(Number);
    matriz.push(linha);
  }
  matriz.forEach((linha, indice) => {
    if (indice === 3) {
      somaLinha4 = linha.reduce((soma, valor) => soma + valor, 0);
    }
    somaColuna2 = somaColuna2 + linha[1];
    somaPrincipal = somaPrincipal + linha[indice];
    somaTotal = somaTotal + linha.reduce((soma, valor) => soma + valor, 0);
  });
  console.log(
    `Soma da linha 4: ${somaLinha4}\nSoma da coluna 2: ${somaColuna2}\nSoma da principal: ${somaPrincipal}\nSoma da total: ${somaTotal}`
  );
}

function questao30() {
  let matriz = new Array();
  let linha;
  let SL = new Array();
  let SC = new Array(0, 0, 0, 0, 0);
  for (let a = 0; a < 5; a++) {
    linha = input("Informe os números da linhas: ").split(" ");
    linha = linha.map(Number);
    matriz.push(linha);
  }
  matriz.forEach((linha, indice) => {
    SL[indice] = linha.reduce((soma, valor) => soma + valor, 0);
    SC[0] = SC[0] + linha[0];
    SC[1] = SC[1] + linha[1];
    SC[2] = SC[2] + linha[2];
    SC[3] = SC[3] + linha[3];
    SC[4] = SC[4] + linha[4];
  });
  console.log("-------------Matriz-------------");
  console.log(matriz);
  console.log("-----------Soma Linha-----------");
  console.log(SL);
  console.log("-----------Soma Coluna----------");
  console.log(SC);
}

function questao31() {
  let matriz = new Array();
  let matrizAtt = new Array();
  let linha;
  let numero,
    elementos = 0;
  numero = parseInt(input("Informe um número: "));
  for (let a = 0; a < 30; a++) {
    linha = input("Informe os números da linhas: ").split(" ");
    linha = linha.map(Number);
    matriz.push(linha);
    elementos =
      elementos +
      linha.reduce((soma, valor) => {
        if (valor === numero) {
          soma++;
        }
        return soma;
      }, 0);
    matrizAtt.push(linha.filter((valor) => valor != numero));
  }
  console.log("-------Matriz Original--------");
  console.log(matriz);
  console.log("\n-------------------------------\n");
  console.log(`O ${numero} aparece ${elementos} na matriz\n`);
  console.log("----------Matriz Att----------");
  console.log(matrizAtt);
}

function questao32() {
  let matriz = new Array();
  let matrizAtt = new Array();
  let linha, maiorValor;
  for (let a = 0; a < 12; a++) {
    linha = input("Informe os números da linhas: ").split(" ");
    linha = linha.map(Number);
    matriz.push(linha);
    maiorValor = Math.max.apply(
      null,
      linha.map((x) => Math.abs(x))
    );
    console.log(maiorValor);
    matrizAtt.push(linha.map((valor) => (valor / maiorValor).toFixed(2)));
  }
  console.log("-------Matriz Original--------");
  console.log(matriz);
  console.log("----------Matriz Att----------");
  console.log(matrizAtt);
}

function questao33() {
  let matriz = new Array();
  for (let a = 0; a < 3; a++) {
    linha = input("Informe os números da linhas: ").split(" ");
    linha = linha.map(Number);
    matriz.push(linha);
  }
  console.log("----------Matriz-----------");
  console.log(matriz);
  let mediaSecun = ((matriz[0][2] + matriz[1][1] + matriz[2][0]) / 3).toFixed(
    2
  );
  matriz.map((linha, indice) => {
    linha[indice] = linha[indice] * mediaSecun;
  });
  console.log("--------Matriz Att---------");
  console.log(matriz);
}

function questao34() {
  let matriz = new Array();
  let linha;
  for (let a = 0; a < 50; a++) {
    linha = input("Informe os números da linhas: ").split(" ");
    linha = linha.map((value, indice, linha) => {
      value = Number(value);
      value = value * linha[a];
      return value;
    });
    matriz.push(linha);
  }
  console.log(matriz);
}

function questao35() {
  let pares = new Array();
  let impares = new Array();
  let numero;
  for (let i = 0; i < 30; i++) {
    numero = parseInt(input("Informe um número: "));
    if (numero % 2 === 0) {
      pares.push(numero);
    } else {
      impares.push(numero);
    }
    if (pares.length === 5) {
      console.log("\n------------Par-------------");
      console.log(pares);
      console.log("------------Par-------------\n");
      pares.length = 0;
    } else if (impares.length === 5) {
      console.log("\n------------Impar-------------");
      console.log(impares);
      console.log("------------Impar-------------\n");
      impares.length = 0;
    }
  }
  console.log("\n----------Vetor Final----------");
  console.log("\n------------Par-------------");
  console.log(pares);
  console.log("------------Par-------------\n");
  console.log("\n------------Impar-------------");
  console.log(impares);
  console.log("------------Impar-------------\n");
}

function questao36() {
  let gabarito = new Set(input("Digite o gabarito: ").split(" ").map(Number));
  let resposta, acertos;
  for (let i = 0; i < 100; i++) {
    acertos = 0;
    resposta = input("Digite o seu bilhete: ").split(" ").map(Number);
    for (let n of resposta) {
      if (gabarito.has(n)) {
        acertos++;
      }
    }
    console.log(`Apostador: ${i}\nAcertos: ${acertos}`);
    if (acertos === 13) {
      console.log("Parabéns, tu foi GANHADOR");
    }
  }
}

function questao37() {
  let gabarito = input("Digite o gabarito: ").split(" ");
  let resposta, acertos;
  for (let i = 0; i < 50; i++) {
    resposta = input("Digite o seu gabarito: ").split(" ");
    acertos = resposta.reduce((acertos, valor, indice) => {
      if (valor === gabarito[indice]) {
        acertos++;
      }
      return acertos;
    }, 0);
    console.log(`Aluno: ${i}\nAcertos: ${acertos}`);
    if (acertos >= 12) {
      console.log("APROVADO");
    } else {
      console.log("REPROVADO");
    }
  }
}

function questao38() {
  let numeros = input("Informe os números: ").split(" ").map(Number);
  console.log(
    "1- soma dos elementos\n2- produto dos elementos\n3- média dos elementos\n4- ordene os elementos em ordem crescente\n5- mostre o vetor"
  );
  let identificadora = parseInt(input("Digite uma das opções acima: "));
  switch (identificadora) {
    case 1:
      console.log(
        `A soma dos elementos é: ${numeros.reduce(
          (soma, valor) => soma + valor,
          0
        )}`
      );
      break;
    case 2:
      console.log(
        `O produtos dos elementos é: ${numeros.reduce(
          (soma, valor) => soma * valor,
          0
        )}`
      );
      break;
    case 3:
      console.log(
        `A média dos elementos é: ${(
          numeros.reduce((soma, valor) => soma + valor, 0) / 6
        ).toFixed(2)}`
      );
      break;
    case 4:
      console.log(`Array ordenado: ${numeros.sort((a, b) => a - b)}`);
      break;
    case 5:
      console.log(`Array: ${numeros}`);
      break;
    default:
      console.log("Digite uma opção válida");
  }
}

function questao39() {
  let vetorA = new Array();
  let vetorB = new Array();
  for (let i = 0; i < 5; i++) {
    vetorA[i] = parseInt(input(`Informe o valor da posição ${i + 1}:  `));
  }
  vetorB = vetorA.filter((valor) => valor > 0);
  console.log(vetorB);
}

function questao40() {
  let gabarito = new Set(input("Digite o resultado: ").split(" ").map(Number));
  let resposta, acertos;
  for (let i = 0; i < 50; i++) {
    acertos = 0;
    resposta = input("Digite a sua aposta: ").split(" ").map(Number);
    for (let n of resposta) {
      if (gabarito.has(n)) {
        acertos++;
      }
    }
    console.log(`Apostador: ${i}`);
    if (acertos === 5) {
      console.log("GANHADOR");
    }
  }
}

function questao41() {
  let pessoa = {
    nome: "Vitor",
    idade: 21,
  };
  console.log(pessoa.idade);
  pessoa.email = "ramiresvitor468@gmail.com";
  console.log(pessoa);
}

function questao42() {
  let dados = {
    nome: "Vitor",
    idade: 21,
    hardskills: ["Python", "Front-End"],
    softskills: ["Proatividade", "trabalho em equipe"],
    cachorros: ["Black", "Melissa"],
  };

  function info(dados = new Object()) {
    let novoObjeto = {};
    let i = 1,
      prop;
    for (let dado in dados) {
      prop = `prop${i}`;
      if (dados[dado] instanceof Array) {
        novoObjeto[prop] = dados[dado];
        i++;
      }
    }
    return novoObjeto;
  }
  console.log(info(dados));
}

function questao43() {
  let obj1 = {
    nome: "Vitor",
    idade: 21,
    cachorros: ["Black", "Melissa"],
  };

  let obj2 = {
    nome: "Caio",
    idade: 22,
    cidadeNatal: "Manaus",
  };

  function novoObjeto(obj1 = new Object(), obj2 = new Object()) {
    let obj3 = obj1;
    for (let prop2 in obj2) {
      obj3[prop2] = obj2[prop2];
    }
    return obj3;
  }

  console.log(novoObjeto(obj1, obj2));
}

function questao44() {
  let objeto = {
    nome: "Vitor",
    idade: 21,
    cidade: "Manaus",
    estado: "Amazonas",
    casado: false,
    trabalha: true,
    estuda: true,
  };

  function verificaString(objeto = new Object()) {
    let quantidadeStrings = 0;
    for (let key in objeto) {
      if (typeof objeto[key] === "string") {
        quantidadeStrings++;
      }
    }
    return quantidadeStrings;
  }
  console.log(verificaString(objeto));
}

function questao45() {
  let palavras = ["cama", "cama", "ovo", "chocolate", "ovo", "melancia"];
  let objeto = new Object();
  let contador;
  for (let key in palavras) {
    contador = palavras.reduce((soma, valor) => {
      if (valor === palavras[key]) {
        soma++;
      }
      return soma;
    }, 0);
    objeto[palavras[key]] = contador;
  }
  console.log(objeto);
}

function questao46() {
  let vendas = [
    {
      vendedor: "Pedro",
      valorVenda: 20,
    },
    {
      vendedor: "Ana",
      valorVenda: 30,
    },
    {
      vendedor: "Ana",
      valorVenda: 40,
    },
    {
      vendedor: "Pedro",
      valorVenda: 50,
    },
    {
      vendedor: "Ana",
      valorVenda: 30,
    },
    {
      vendedor: "Carol",
      valorVenda: 10,
    },
  ];
  function contar(vendas = new Array()) {
    let vendarVendedor = new Object();
    for (let vend of vendas) {
      vendarVendedor[vend.vendedor] = vendas.reduce((soma, valor) => {
        if (vend.vendedor === valor.vendedor) {
          soma++;
        }
        return soma;
      }, 0);
    }
    return vendarVendedor;
  }
  console.log(contar(vendas));
}

function questao47() {
  let objeto = {
    numero1: 1,
    numero2: 2,
    numero3: 3,
  };

  let funcao = (numero) => numero ** 2;

  function geraObjeto(objeto = new Object(), funcao) {
    let novoObjeto = new Object();
    for (let key of Object.keys(objeto)) {
      novoObjeto[key] = funcao(objeto[key]);
    }
    return novoObjeto;
  }

  console.log(geraObjeto(objeto, funcao));
}

function questao48() {
  let inventarioLojaA = {
    fralda: 2,
    cocaCola: 10,
    arroz: 20,
    tapioca: 2,
  };
  let inventarioLojaB = {
    fralda: 4,
    Pepsi: 10,
    feijao: 20,
    tapioca: 10,
  };

  function relatorio(invetA = new Object(), invetB = new Object()) {
    let invetarioGeral = invetA;
    for (let propB in invetB) {
      if (Object.keys(invetarioGeral).includes(propB)) {
        invetarioGeral[propB] = invetarioGeral[propB] + invetB[propB];
      } else {
        invetarioGeral[propB] = invetB[propB];
      }
    }
    return invetarioGeral;
  }
  console.log(relatorio(inventarioLojaA, inventarioLojaB));
}

function questao49() {
  let transacoes = [
    {
      id: 0,
      valor: 200,
      data: "08/04/2024",
      categoria: "Saque",
    },
    {
      id: 2,
      valor: 60,
      data: "03/04/2024",
      categoria: "Saque",
    },
    {
      id: 2,
      valor: 400,
      data: "05/04/2024",
      categoria: "Deposito",
    },
    {
      id: 1,
      valor: 100,
      data: "06/04/2024",
      categoria: "Deposito",
    },
    {
      id: 3,
      valor: 200,
      data: "06/04/2024",
      categoria: "Deposito",
    },
    {
      id: 2,
      valor: 800,
      data: "06/04/2024",
      categoria: "Saque",
    },
  ];
  function relatorio(transacoes = new Array()) {
    let objeto = new Object();
    let subtotal;
    for (let obj of transacoes) {
      subtotal = `subtotal${obj.categoria}`;
      if (objeto[obj.categoria] === undefined) {
        let array = [[obj.id, obj.valor, obj.data]];
        objeto[obj.categoria] = array;
        objeto[subtotal] = obj.valor;
      } else {
        objeto[obj.categoria].push([obj.id, obj.valor, obj.data]);
        objeto[subtotal] += obj.valor;
      }
    }
    return objeto;
  }
  console.log(relatorio(transacoes));
}

// questao1();
// questao2()
// questao3()
// questao4()
// questao5()
// questao6()
// questao7()
// questao8()
// questao9()
// questao10()
// questao11()
// questao12()
// questao13()
// questao14()
// questao15()
// questao16()
// questao17()
// questao18()
// questao19()
// questao20()
// questao21()
// questao22()
// questao23()
// questao24()
// questao25()
// questao26()
// questao27()
// questao28()
// questao29()
// questao30()
// questao31()
// questao32()
// questao33()
// questao34()
// questao35()
// questao36()
// questao37()
// questao38()
// questao39()
// questao40()
// questao41()
// questao42()
// questao43()
// questao44()
// questao45()
// questao46()
// questao47()
// questao48()
// questao49()
