<?php
	class Banco {

		private $servidor = "localhost";
		private $usuario = "domod796_mybreak";
		private $senha = "guilherme123";
		private $nomeBD = "domod796_mybreakfaster";


		public function obterConexao() {
			$conexao = new mysqli($this->servidor, $this->usuario, $this->senha, $this->nomeBD);
			$conexao->set_charset("UTF-8");
			if ($conexao->connect_error) {
				die(sprintf('{"result":"%s"}', $conexao->connect_error));
			}

			return $conexao;
		}

		public function fecharConexao($conexao) {
			$conexao->close();
		}
	}
?>
