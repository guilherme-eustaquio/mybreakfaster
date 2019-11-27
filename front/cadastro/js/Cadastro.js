function cadastrar() {


	let email = document.getElementById("email").value;
	let nome = document.getElementById("nome").value;
	let senha = document.getElementById("senha").value;

	let contador = 0;

	for(contador = 0; contador < usuarios.length; contador++) {
		if(usuarios[contador]["email"] === email) {
			alert("Esse usuário já existe!");
			return false;
		}
	}
	
	usuarios.push({nome:nome, email:email, senha:senha});

	alert("Cadastrado com sucesso... redirecionando");
  	location.replace("../login/index.html");
}
