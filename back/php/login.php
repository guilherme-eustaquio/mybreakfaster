<?php
	
	require_once("banco.php");

	if(isset($_POST["email"]) && isset($_POST["senha"])) {
		
		$banco = new Banco();

		$conexao = $banco->obterConexao();

		$email = $_POST["email"];
		$senha = $_POST["senha"];

		$sql = sprintf("SELECT * FROM usuario WHERE email = '%s' AND senha = '%s'", $email, $senha);

		$resultado = $conexao->query($sql);

		if($resultado && $resultado->num_rows > 0) {
			echo '{"result":"OK"}';
		}
		else {
			echo sprintf('{"result":"Erro %s"}', $conexao->error);
		}
		
		$banco->fecharConexao($conexao);
	}

?>