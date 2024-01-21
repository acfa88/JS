		function montarTitulo(titulo){
			h = document.createElement("h4");
			h.textContent = titulo;
			return h;
		}


		function montaRadio(texto, linha, coluna){
			conteudoTexto = texto;
			textoGrupoLinha = "grupo" + String(linha);
			textoGrupoLinhaColuna = "grupo" + String(linha) + String(coluna);
			valuePorColuna = coluna;

			div = document.createElement("div");
			div.classList.add("radio");

			input = document.createElement("input");			
			input.setAttribute("type", "radio");
			input.setAttribute("value", valuePorColuna);			 
			input.setAttribute("name", textoGrupoLinha);
			input.setAttribute("id", textoGrupoLinhaColuna);
			input.setAttribute("onchange", "calcular()");

			label = document.createElement("label");
			label.setAttribute("for", textoGrupoLinhaColuna);
			label.textContent = conteudoTexto;

			div.appendChild(input);
			div.appendChild(label);
			
			return div;
		}

		divForm = document.querySelector('#lista');	

		tamanhoLista = opcoes.length;
		tamanhoColunas = 6;

		for(linha =0; linha<tamanhoLista; linha++){		
			for(coluna =0; coluna<tamanhoColunas; coluna++){	
				ehTitulo = coluna == 0;
				if(ehTitulo){
					titulo = opcoes[linha][coluna];
					t = montarTitulo(titulo);					
					divForm.appendChild(t);
				}else{
					conteudo = opcoes[linha][coluna];							
					divRadioList = montaRadio(conteudo, linha, coluna);					
					divForm.appendChild(divRadioList);
				}
			}			
		}

		divResultado = document.createElement("div");
		divResultado.setAttribute("id", "divResultado");
		divResultado.classList.add("alert");
		divResultado.classList.add("alert-success");
		divResultado.setAttribute("role", "alert");


		divForm.appendChild(divResultado);		





