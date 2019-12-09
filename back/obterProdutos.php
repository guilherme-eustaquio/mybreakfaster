<?php

	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);

	if(!isset($_GET["id"])) {

		echo "[]";
	}
	else {
		
		require_once("banco.php");
		
		$banco = new Banco();
		$id_estabelecimento = $_GET["id"];
		$conexao = $banco->obterConexao();
		
		$sql = sprintf("SELECT * FROM produto WHERE id_estabelecimento = %d", $id_estabelecimento);
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
	
		

		
	}
?>
