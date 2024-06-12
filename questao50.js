const input = require("prompt-sync")();
let hoteis = new Array();
let reservas = new Array();
let idReserva = 1;
let id = 1;
let reserva = {
  idReserva: 0,
  idHotel: 0,
  nomeCliente: "",
};

function adicionarHoteis() {
  let hotelNovo = new Object();
  hotelNovo.id = id;
  hotelNovo.nome = input("Informe o nome do hotel: ");
  hotelNovo.cidade = input("Informe a cidade: ");
  hotelNovo.cidade.toLowerCase();
  hotelNovo.quartosTotais = parseInt(input("Informe o total de quartos: "));
  hotelNovo.quartosLivres = parseInt(
    input("Informe o total de quartos livres: ")
  );
  hoteis.push(hotelNovo);
  id++;
}

function buscarHoteis() {
  let cidade = input("Informe a cidade para ver hotéis disponíveis: ");
  cidade.toLowerCase();
  let hoteisDisponiveis = hoteis.filter((valor) => {
    if (valor.cidade === cidade && valor.quartosLivres > 0) {
      return valor;
    }
  });
  console.log("------------Hotéis Livres------------");
  for (let hoteis of hoteisDisponiveis) {
    console.log(hoteis);
  }
}

function fazerReserva() {
  buscarHoteis();
  let nomeHotel = input("Informe o hotel para reservar: ");
  let idhotel;
  let reservaNova = new Object();
  let hotelReservar = hoteis.some((valor) => {
    if (valor.nome === nomeHotel && valor.quartosLivres > 0) {
      idhotel = valor.id;
      valor.quartosLivres--;
      return true;
    }
  });
  if (hotelReservar) {
    reservaNova.nomeCliente = input("Informe seu nome: ").toLowerCase();
    reservaNova.idReserva = idReserva;
    reservaNova.idHotel = idhotel;
    reservas.push(reservaNova);
    idReserva++;
  } else {
    console.log("Não foi possível realizar a reserva...");
  }
}

function cancelarReserva() {
  let Cliente = input("Informe seu nome: ").toLowerCase();
  let reservasCliente = reservas.filter((valor, indice) => {
    if (valor.nomeCliente === Cliente) {
      return valor.idHotel;
    }
  });
  for (let resecliente of reservasCliente) {
    hoteis.forEach((valor) => {
      if (valor.id === resecliente.idHotel) {
        console.log(`Hotel com reserva: ${valor.nome}`);
      }
    });
  }
  let reservaPraCancelar = input("Informe o nome do hotel: ");
  let hotelReservado = hoteis.filter((valor) => {
    if (valor.nome === reservaPraCancelar.toLowerCase()) {
      valor.quartosLivres++;
      return valor;
    }
  });
  let indice = 0;
  for (let reserv of reservas) {
    if (reserv.idHotel === hotelReservado.id) {
      indice++;
      break;
    }
  }
  reservas.splice(indice, 1);
}

function listarReservas() {
  let nomeCliente = input("Informe seu nome: ").toLowerCase();
  let reservasCliente = reservas.filter((valor) => {
    if (valor.nomeCliente === nomeCliente) {
      return valor;
    }
  });
  console.log("---------Reservas---------");
  console.log(`Cliente: ${nomeCliente}`);
  for (let reserCliente of reservasCliente) {
    hoteis.forEach((hotelCliente) => {
      if (hotelCliente.id === reserCliente.idHotel) {
        console.log(
          `\tHotel: ${hotelCliente.nome}\n
          Cidade: ${hotelCliente.cidade}\n
          Total de Quartos: ${hotelCliente.quartosTotais}\n
          Quartos Livres: ${hotelCliente.quartosLivres}`
        );
      }
    });
  }
}
let opcao;
do {
  console.log(
    "A - Adiconar Hotel\nB - Buscar hotel por cidade\nF - Fazer reserva\nC - Cancelar reserva\nL - Listar reservas"
  );
  opcao = input("Informe um das opções abaixo: ");
  switch (opcao) {
    case "A":
      adicionarHoteis();
      console.log(hoteis);
      break;
    case "B":
      buscarHoteis();
      break;
    case "F":
      fazerReserva();
      console.log(reservas);
      break;
    case "C":
      cancelarReserva();
      console.log(reservas);
      break;
    case "L":
      listarReservas();
      break;
    default:
      console.log("Informe uma opção válida...");
      break;
  }
} while (opcao != "e");
