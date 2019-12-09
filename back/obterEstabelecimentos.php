<?php

	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);
	
	require_once("banco.php");
		
	$banco = new Banco();

	$conexao = $banco->obterConexao();
	
	$sql = "SELECT * FROM estabelecimento";
	$resultado = $conexao->query($sql);

	if(!$resultado) {
		echo sprintf('{"result":"%s"}', $conexao->error);
	}
	else {

		$json = array();

		while($row = $resultado->fetch_assoc()) {
			if(is_string($row)) {
				$json[] = utf8_encode($row);
			}
			else {
				$json[] = $row;
			}
		} 

		echo json_encode($json);
	}
	

	$banco->fecharConexao($conexao);
?>