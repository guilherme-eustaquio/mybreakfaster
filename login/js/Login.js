function login() {
	let email = document.getElementById("email").value;
	let senha = document.getElementById("senha").value;
	let contador = 0;

	for(contador = 0; contador < usuarios.length; contador++) {
		if(usuarios[contador]["email"] === email && usuarios[contador]["senha"] === senha ) {
			location.assign("../dashboard/index.html#lista-restaurantes")  			
			return true;
		}
	}

	gerarMensagemErro("Usuário ou senha incorretos!");
}

function gerarMensagemErro(mensagem) {
	$("#mensagem-de-erro").text(mensagem);
	$("#mensagem-de-erro").toggle(200);
}
