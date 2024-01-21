function montarData(d){
	d = jsonToJavaScriptDate(d);
	d = d.toLocaleString();
	return d;
}

function jsonToJavaScriptDate(d){
	var date = new Date(d);
	return date;
}

function montarTabela(tabela, indice){

	var indexCell = indice;
	var tableMonitorWater = document.getElementById("tabelaMonitorQualidadeAgua");
	var listRowsSize = tableMonitorWater.rows.length;
	var listCellsSize = tableMonitorWater.rows[0].cells.length;
	var cellDate = listCellsSize - 1;

	var tituloData = tableMonitorWater.rows[0].cells[cellDate].innerHTML;
	var tituloIndice = tableMonitorWater.rows[0].cells[indexCell].innerHTML;	
	tabela.addColumn('string',String(tituloData));
	tabela.addColumn('number', tituloIndice);
	tabela.addColumn({type: 'string', role: 'annotation'});

	var listas = [];
	var lista = [];
	var i = 1;

	while(i < listRowsSize){
		lista = [];
		n = tableMonitorWater.rows[i].cells[cellDate].innerHTML;
		n = montarData(n);
		lista.push(String(n));

		n = tableMonitorWater.rows[i].cells[indexCell].innerHTML;
		lista.push(parseFloat(n));
		lista.push(String(n));

		listas.push(lista);
		i++;
	}	

	tabela.addRows(listas);

	return tabela;
}

function desenhaGraficos(cell){
	
	if( isNaN(cell) ){
		cell = 0;
		console.log('load chart ...');
		//console.log(cell);
		//console.log(indexCell);
	}		

	tabela = new google.visualization.DataTable();
	tabela = montarTabela(tabela, cell);

	var opcoes = 
	{
		title: 'Monitor Agua',
		width: 1000,
		height: 800,
		vAxis:
		{
			format: 'decimal',
			gridlines: 
			{
				color: 'transparent',
				count: 0
			}
		},
		curveType: 'function',					
		legend: 
		{
			position: 'none',
			textStyle: {color: 'blue', fontSize: 30}
		}
		
	}
	var grafico = new google.visualization.LineChart(document.getElementById('graficoDagua'));
	grafico.draw(tabela,opcoes);
}


function carregar(){
	//event.preventDefault();	
	var radios = document.getElementsByName("chartRadio");
	for(i=0;i < radios.length;i++){
		if(radios[i].checked == true){
			var cell = i;
		}
	}		
	console.log("load");
	desenhaGraficos(cell);
}



