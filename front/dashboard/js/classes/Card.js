class Card {
	
	gerarCardEstabelecimento(json) {
		
		let contador = 0;
		let str = "";		

		for(contador = 0; contador < json.length; contador++) {
			
			str += '<div class="my-3 p-3 bg-white rounded box-shadow">';
			str += '<h6 class="border-bottom border-gray pb-2 mb-0">' + json[contador].nome;
			

			str += '<span style = "float:right">' + json[contador].avaliacao + ' <img src = "./image/star-24px.svg"></span>'
			
			str += '</h6>';
		
			str += '<div class="media text-muted pt-3">';
			str += '<p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">';
			str += json[contador].conteudo;
			str += '</p></div>';
			str += '<small class="d-block text-right mt-3">';
			str += '<a href="#lista-produto=' + json[contador].id + '" class = "btn btn-danger">abrir</a></small></div>';
		}

		return str;	

	}

	gerarCardProdutos(json) {
		
		let str = "";
		let contador = 0;

		for(contador = 0; contador < json.length; contador++) {		

			str += '<div class="col-md-12">';
			str += '<div class="card mb-4 box-shadow">';
			str += '<img class="card-img-top"  src = "' + json[contador].imagem + '">';
			str += '<div class="card-body">';
			str += '<p class="card-text">' + json[contador].descricao + '</p>';
			str += '<div class="d-flex justify-content-between align-items-center">';
			str += '<div class="btn-group">';
			str += '<a href = "#produto=' + json[contador].id + '" class="btn btn-sm btn-outline-secondary">Pedir</a>';
			str += '</div>' + '<small class="text-muted" style = "float:right">R$' + json[contador].valor + '</small>'  +'</div></div></div></div>';
		}

		return str;			
	}
}
