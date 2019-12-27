const lib = [
	'./css/signin.css'
]

include(lib);

function login() {

	
	let email = document.getElementById("email").value;
	let senha = document.getElementById("senha").value;
	
	let json = {email:email, senha:senha};

	validarDados(json);
}

function gerarMensagemErro(mensagem) {
	$("#mensagem-de-erro").text(mensagem);
	$("#mensagem-de-erro").toggle(200);
}

function validarDados(json) {

	object = {
		path: "usuario",
		method: "POST",
		data: "email=" + json.email + "&senha=" + json.senha, 
	};

	Network.makeHttpReq(object, 
		function success(msg) {
			if(typeof(msg) == "object") {
				location.assign("../dashboard/index.html#lista-restaurantes&" + msg.id);	
				localStorage.setItem("id", msg.id);	
			}	
			else {
				gerarMensagemErro("Usuário ou senha incorretos!");		
			}
		},

		function failed() {
			gerarMensagemErro("Erro no servidor");
		}
	);
	
}
