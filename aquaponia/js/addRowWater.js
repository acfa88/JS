function addRowDataTableMonitorWater(monitorWater){
	tabelaTr = montarLinhaMonitorWater(monitorWater);
	console.log(tabelaTr);
	tabelaMonitorAgua = document.querySelector('#tabelaMonitorQualidadeAgua');
	tabelaMonitorAgua.appendChild(tabelaTr);
}

function montarLinhaMonitorWater(monitorWater){
	var trTabela = document.createElement("tr");
	//trTabela.classList.add("");

	var tdPh = montarCelulaMonitorWater(monitorWater.ph);
	var tdAmonia = montarCelulaMonitorWater(monitorWater.amonia);
	var tdNitrato = montarCelulaMonitorWater(monitorWater.nitrato);
	var tdNitrito = montarCelulaMonitorWater(monitorWater.nitrito);
	var tdTemperatura = montarCelulaMonitorWater(monitorWater.temperatura);
	var tdOxigenio = montarCelulaMonitorWater(monitorWater.oxigenio);
	var tdGh = montarCelulaMonitorWater(monitorWater.gh);
	var tdDate = montarCelulaMonitorWater(monitorWater.date);
	
	trTabela.appendChild(tdPh);
	trTabela.appendChild(tdAmonia);
	trTabela.appendChild(tdNitrato);
	trTabela.appendChild(tdNitrito);
	trTabela.appendChild(tdTemperatura);
	trTabela.appendChild(tdOxigenio);
	trTabela.appendChild(tdGh);
	trTabela.appendChild(tdDate);
	
	return trTabela;	
}

function montarCelulaMonitorWater(dado){
	var td = document.createElement("td");
	td.textContent = dado;
	//td.classList.add(classeString);	
	return td;	
}

function addFormQualidadeAgua(){
	event.preventDefault();
	formulario = document.querySelector('#adcionar-qualidade-agua');
	var monitorWater = pegarFormMonitorAgua(formulario);	
	addRowDataTableMonitorWater(monitorWater);
	carregar();
}

function pegarFormMonitorAgua(formulario){
	var monitorWater = {
		ph: formulario.ph.value,
		amonia: formulario.amonia.value,
		nitrato: formulario.nitrato.value,
		nitrito: formulario.nitrito.value,
		temperatura: formulario.temperatura.value,
		oxigenio: formulario.oxigenio.value,
		gh: formulario.gh.value,
		date: new Date()
	}

	monitorWater.date = javaScriptToJsonDate(monitorWater.date);

	return monitorWater;
}

function javaScriptToJsonDate(date){
	return date.toJSON();
}

var btnWater = document.querySelector("#adicionar-qualidadeDagua");
btnWater.addEventListener('click', addFormQualidadeAgua);

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObjs = JSON.parse(this.responseText);
        //console.log(typeof myObjs);
        //console.log(myObjs);

        myObjs.forEach(function(myObj) {
			//console.log(myObj);
			addRowDataTableMonitorWater(myObj);
		}); 
        //document.getElementById("demo").innerHTML = myObj.name;
    }
};
xmlhttp.open("GET", "https://gist.githubusercontent.com/acfa88/c0b29353776c817952d7814e4a24e28d/raw/07d9632fd46a45df7ed5f7a68dd353b7fae3a4f4/qualidade.json", true);
xmlhttp.send();




//https://gist.githubusercontent.com/acfa88/c0b29353776c817952d7814e4a24e28d/raw/07d9632fd46a45df7ed5f7a68dd353b7fae3a4f4/qualidade.json












