

let multiplicador = 1;
let multiplicando = 1;
while (multiplicando <= 10) {
	imprima(multiplicador + " * " + multiplicando + " = " + (multiplicador * multiplicando++)); multiplicador++;

}


function imprima(texto) {
	document.write(texto + "<br>");
}

function formataNumero(valor) {
	return new Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2 }).format(valor);
}

function formataMoeda(valor) {
	let padraoBR = Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
	return padraoBR.format(valor);
}