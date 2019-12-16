function cadastrar() {

	let email = document.getElementById("email").value;
	let nome = document.getElementById("nome").value;
	let senha = document.getElementById("senha").value;

	$.ajax({
		url : HOST_DEV + "usuario/criar", 
		type : 'POST',
		data : 'email=' + email + '&senha=' + senha + '&nome=' + nome
	 })
	 .done(function(msg) {
		document.getElementById("modal-cadastro-mensagem").innerHTML = "Cadastrado com sucesso... redirecionando";
		$('#modal-cadastro').modal('toggle');	
		setTimeout(function() {
			location.replace("../login/index.html");
		}, 1000);
	 }).fail(function(jqXHR, textStatus, msg) {
		$('#modal-cadastro').modal('toggle');
		document.getElementById("modal-cadastro-mensagem").innerHTML = "Falha ao cadastrar usuário";
	 });
}
