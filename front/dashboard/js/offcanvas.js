var ativador_menu_opcao = 0;


function ativarMenuOpcao() {
	document.getElementById("barra-navegacao-opcao-producao").className = "navbar-collapse offcanvas-collapse";
	
	if(ativador_menu_opcao) {
		$('[data-toggle="offcanvas"]', function() {
			$('.offcanvas-collapse').toggleClass('');
		})
		ativador_menu_opcao = 0;
	}
	else {

		$('[data-toggle="offcanvas"]', function() {
			$('.offcanvas-collapse').toggleClass('open');
		});
		ativador_menu_opcao = 1;
	}
}

/*
$(function () {
  'use strict'

	$('[data-toggle="offcanvas"]').on('click', function () {
		$('.offcanvas-collapse').toggleClass('open')
	})
	ativador_menu_opcao = 1;
})
*/
