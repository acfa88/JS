radios = document.querySelectorAll('input');

function calcular(){
	nItems = 0;
	pontos = 0;		
	radios.forEach(function(radio){	
	if (radio.checked == true){
		nItems = nItems + 1;
		pontos = parseInt(pontos) + parseInt(radio.value -1);			
	} 			
});

function checarListaOpcoesPorIndexRecursivo(indexAtual, listaOpcoes, percentual){				
	valorDoItemDaListaEhMaiorOuIgualPercentual = listaOpcoes[indexAtual] >= percentual;
	if(valorDoItemDaListaEhMaiorOuIgualPercentual) return indexAtual; //ponto de parada
	else return checarListaOpcoesPorIndexRecursivo(indexAtual + 1, listaOpcoes, percentual);
}


pontosTotais = nItems * 4;
percentual =  ((pontos * 100) / pontosTotais).toFixed(0);	

bar = document.querySelector('.pb1');
bar.setAttribute('aria-valuenow', percentual);
bar.setAttribute("style", "width:" + percentual + "%");
bar.setAttribute('value', percentual);

listaOpcoesPercentuais = [5,10,15,20,25,40,50,70,85,95,100];

indexStart = 0;
indexAtual = 0;
indexResposta = checarListaOpcoesPorIndexRecursivo(indexStart,listaOpcoesPercentuais, percentual);
//console.log(indexResposta);

textoResultado = listasDeResultados[indexResposta];
divResultado.textContent = listasDeResultados[indexResposta];

	//revisar usando metodo recursivo ------------------------------
	/*
	listaOpcoes = [10,15,20,25,30,40,50,70,85,95,100];

	var textoResultado;
	for (cont=0; cont < listaOpcoes.length; cont ++){
		itemDaListaEhMaiorOuIgualPercentual = listaOpcoes[cont] >= percentual		
 		if(itemDaListaEhMaiorOuIgualPercentual){
 			console.log(listaOpcoes[cont] + " >= " + percentual);

 			textoResultado = listasDeResultados[cont];
 			break;
 		}
	}
	
	divResultado.textContent = textoResultado;
	*/
	//------------------------------

}

