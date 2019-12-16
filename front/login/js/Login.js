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

	$("#carregando").show();

	$.ajax({
		url : HOST_DEV + "usuario/",
		type : 'POST',
		data : 'email=' + email + '&senha=' + senha
	 })
	 .done(function(msg){
		$("#carregando").hide();
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
		$("#carregando").hide();
		gerarMensagemErro("Erro no servidor");
	 });
}
