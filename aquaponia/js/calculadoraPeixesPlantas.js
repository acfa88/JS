var kgPeixe = document.querySelector('#kgPeixe');
kgPeixe.addEventListener("keyup", calcularRacao);

function calcularRacao() {
	var kgPeixe = document.querySelector('#kgPeixe').value;
	calcularTudoTabela(kgPeixe);
}

var plantas = document.querySelector('#plantas');
plantas.addEventListener("keyup", calcularPlantas);

function calcularPlantas(){
    var plantas = document.querySelector('#plantas').value;
	var kgPeixe = plantas / 12;
	
	calcularTudoTabela(kgPeixe);
}

var reservatorio = document.querySelector('#reservatorio');
reservatorio.addEventListener("keyup", calcularReservatorio);

function calcularReservatorio(){
	var reservatorio = document.querySelector('#reservatorio').value;
	var kgPeixes = reservatorio /  27;
	calcularTudoTabela(kgPeixes);
}

function calcularTudoTabela(kgPeixe){

	var peixesPlantas = trazerPeixesPlantas(kgPeixe);

	peixesPlantas.kgPeixesReservatorio();
	peixesPlantas.kgRacaoPorDia();
	peixesPlantas.kgRacaPorMes();
	peixesPlantas.kgRacaoPorAno();
	peixesPlantas.calcularReservatorioMinimo();
	peixesPlantas.calcularReservatorioMedio();
	peixesPlantas.quantidadeMudas();
	peixesPlantas.quantidadeFolhosas();
	peixesPlantas.quantidadeTomates();
}

function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}


function trazerPeixesPlantas(kgPeixe){

	var peixesPlantas = {
		qtyRacaoDia: kgPeixe - (kgPeixe * 0.985),
		resTextKgPeixe: document.querySelector('#resKgPeixe'),
		resTextoDia: document.querySelector('#resRacaoDia'),
		resTextoMes: document.querySelector('#resRacaoMes'),
		resTextoAno: document.querySelector('#resRacaoAno'),
		resTextoResMinM3: document.querySelector('#resMinM3'),
		resTextoResMedM3: document.querySelector('#resMedM3'),
		resTextoQtyMudas: document.querySelector('#resQtyMudas'),
		resTextQtyFolhosas: document.querySelector('#resQtyFolhosas'),
		resTextQtyTomates: document.querySelector('#resQtyTomates'),
		kgPeixesReservatorio: function() {
        	this.resTextKgPeixe.textContent = kgPeixe + " kg   /   " + (kgPeixe / 1000).toFixed(1) + " toneladas";
    	},
    	kgRacaoPorDia: function(){
    		this.resTextoDia.textContent = this.qtyRacaoDia.toFixed(3) + " kg";
    	},
    	kgRacaPorMes: function(){
    		this.resTextoMes.textContent = (this.qtyRacaoDia * 30).toFixed(3) + " kg";
    	},
    	kgRacaoPorAno: function(){
    		this.resTextoAno.textContent = (this.qtyRacaoDia * 365).toFixed(3) + " kg";
    	},
    	calcularReservatorioMinimo: function(){
    		this.resTextoResMinM3.textContent = formatNumber( (kgPeixe * 27).toFixed(0) ) + " L  /  " + formatNumber( ((kgPeixe * 27)/1000).toFixed(1) ) + " m3";
    	},
    	calcularReservatorioMedio: function(){
    		this.resTextoResMedM3.textContent = (kgPeixe * 50).toFixed(0) + " L  /  " + ((kgPeixe * 50)/1000).toFixed(1) + " m3";
    	},
    	quantidadeMudas: function(){
    		this.resTextoQtyMudas.textContent = (kgPeixe * 0.6).toFixed(1) + " m2- " + (kgPeixe * 0.6 * 40).toFixed(0)  + " /  " + (kgPeixe * 24).toFixed(0) + " Mudas";
    	},
    	quantidadeFolhosas: function(){
    		this.resTextQtyFolhosas.textContent = (kgPeixe * 0.6).toFixed(1) + " m2- " + (kgPeixe * 0.6 * 20).toFixed(0) + " Folhosas /  " + (kgPeixe * 5).toFixed(0) + " Pés";
    	},
    	quantidadeTomates: function(){
    		this.resTextQtyTomates.textContent = (kgPeixe * 0.4).toFixed(1) + " m2" + "";
    	}
	}
	return peixesPlantas;
}