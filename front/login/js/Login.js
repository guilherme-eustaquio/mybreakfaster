function login() {
	
	let email = document.getElementById("email").value;
	let senha = document.getElementById("senha").value;
	
	validarDados(email, senha);
}

function gerarMensagemErro(mensagem) {
	$("#mensagem-de-erro").text(mensagem);
	$("#mensagem-de-erro").toggle(200);
}


function validarDados(email, senha, sucesso, erro) {
	$.ajax({
		url : "https://domod.com.br/mybreakfaster/login.php",
		type : 'POST',
		data : 'email=' + email + '&senha=' + senha
	 })
	 .done(function(msg){

		obj = JSON.parse(msg);

		switch(obj.result) {
			case "OK":
				location.assign("../dashboard/index.html#lista-restaurantes");		
				break;
			default:
				gerarMensagemErro("Usuário ou senha incorretos!");
		}

	 })
	 .fail(function(jqXHR, textStatus, msg){
		gerarMensagemErro("Erro no servidor");
	 });
}
