var botaoCalcularAreaMesas = document.querySelector("#calcularMesas");
botaoCalcularAreaMesas.addEventListener("click", calcularArea);

function calcularArea(){
	event.preventDefault();
	mesas = CalculadoraDimensionamentoMesas();

	var resAreaParcial = document.querySelector("#resAreaParcial");
	var resMetrosPerfis = document.querySelector("#resMetrosPerfis");
	var resPerfisMesa = document.querySelector("#resPerfisMesa");
	var resCultivosMesa = document.querySelector("#resCultivosMesa");
	var resMesas = document.querySelector("#resMesas");
	var resComprimentoTotal = document.querySelector("#areaTotal");	

	resAreaParcial.textContent = mesas.area();
	resMetrosPerfis.textContent = mesas.metrosPorPerfil();
	resPerfisMesa.textContent = mesas.perfisPorMesa();
	resCultivosMesa.textContent = mesas.cultivosPorMesa();
	resMesas.textContent = mesas.nMesas();
	resComprimentoTotal.textContent = mesas.larguraTotal();
}

function CalculadoraDimensionamentoMesas(){
	mesas = {
		entreEixos: parseFloat(document.querySelector('#entreEixos').value),
		larguraMesa: parseFloat(document.querySelector('#larguraMesa').value),
		comprimentoMesa: parseFloat(document.querySelector('#comprimentoMesa').value),
		larguraPerfil: parseFloat(document.querySelector('#larguraPerfil').value),
		espacamentoPerfil: parseFloat(document.querySelector('#espacamentoPerfil').value),
		nPosicoesCultivo: parseFloat(document.querySelector('#nPosicoesCultivo').value),
		mesasLaterais: parseFloat(document.querySelector('#mesasLaterais').value),
		area: function(){
			return this.larguraMesa * this.comprimentoMesa + " m2 | " + this.larguraMesa + "  (L)x(C)  " + this.comprimentoMesa;
		},

		metrosPorPerfil: function(){
			return this.entreEixos / 1 * this.nPosicoesCultivo + " metros";
		},
		perfisPorMesa: function(){
			return this.larguraMesa / (this.larguraPerfil + this.espacamentoPerfil);
		},
		posicoesCultivoPorMetro: function(){
			return 1 / this.entreEixos;	
		},
		cultivosPorMesa: function(){
			return this.perfisPorMesa() * this.comprimentoMesa * this.posicoesCultivoPorMetro();
		},
		nMesas: function(){
			var totalTodasMesas = this.cultivosPorMesa() * this.mesasLaterais;
			var nCultivosTotalDasMesasEhMenorQueCultivosDesejados = totalTodasMesas < this.nPosicoesCultivo;
			if (nCultivosTotalDasMesasEhMenorQueCultivosDesejados){
				var pesRestantes = (this.nPosicoesCultivo - totalTodasMesas).toFixed(1);					
				var mesasAdd = ((this.nPosicoesCultivo - totalTodasMesas) / totalTodasMesas).toFixed(1);
				var metrosAddPorMesa = (mesasAdd * this.comprimentoMesa).toFixed(2);
				return "Pes restantes: " + pesRestantes + " | " + mesasAdd + " mesas adicionais | ou mais " + metrosAddPorMesa + " m";
			}
			return "0 mesas adicionais | nao precisa adicionar mais";
		},
		larguraTotal: function(){
			return (1 + this.mesasLaterais) * 0.7 + (this.larguraMesa * this.mesasLaterais) + " (L) ";
		}
	}
	return mesas;
}



