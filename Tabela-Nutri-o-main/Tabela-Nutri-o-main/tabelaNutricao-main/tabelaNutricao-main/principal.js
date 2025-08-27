// Alteração do título e subtítulo
var pacientes = document.querySelector(".titulo-secundario");
var piresnutrição = document.querySelector(".titulo");
pacientes.textContent = "Meus Pacientes";
piresnutrição.textContent = "Pires Nutrição";

// Criação da variável paciente, buscando o elemento a partir da classe alterada e seu conteúdo
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

// Busca o elemento da altura e altera seu conteúdo
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var IMC = peso / (altura * altura);
var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = IMC;

console.log(IMC);