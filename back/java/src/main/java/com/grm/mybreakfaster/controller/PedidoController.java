package com.grm.mybreakfaster.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.grm.mybreakfaster.domain.Pedido;
import com.grm.mybreakfaster.repository.PedidoRepository;

@RestController
@RequestMapping("/pedidos")
public class PedidoController {
	
	@Autowired
	private PedidoRepository pedidos;
	
	@PostMapping
	public String realizarPedido(@RequestParam(name = "id_produto") Long id_produto, @RequestParam(name = "id_usuario") Long id_usuario, 
			@RequestParam("formaPagamento") String formaPagamento, @RequestParam("endereco") String endereco) {
		
		Pedido pedido = new Pedido(id_produto, id_usuario, formaPagamento, endereco);
	
		pedidos.save(pedido);
		
		return "{\"result\":\"OK\"}";
	}
	
	@GetMapping("/{id}")	
	public List<Pedido> meusPedidos(@PathVariable(name = "id") Long id_usuario) {
		return pedidos.findByIdUsuario(id_usuario);
	}
}