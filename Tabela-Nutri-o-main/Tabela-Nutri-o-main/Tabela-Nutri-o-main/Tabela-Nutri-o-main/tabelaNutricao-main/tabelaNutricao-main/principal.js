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

if(pesoValido && alturaValida){
    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = IMC;
    }

var IMC = peso / (altura * altura);

//valores booleanos
var pesoValido = true;
var alturaValida= true;

//Alerta caso o peso e a altura sejam inválidos
if (peso <= 0 || peso >= 1000){
    alert("Peso inválido!");
var pesoValido = false;
}

if (altura <= 0 || altura >= 3.00){
    alert("Altura inválida");
var alturaValida = false;
}

