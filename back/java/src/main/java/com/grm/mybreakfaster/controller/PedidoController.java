package com.grm.mybreakfaster.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.grm.mybreakfaster.domain.Pedido;
import com.grm.mybreakfaster.domain.Produto;
import com.grm.mybreakfaster.domain.Usuario;
import com.grm.mybreakfaster.repository.PedidoRepository;

@RestController
@RequestMapping("/pedidos")
public class PedidoController {
	
	@Autowired
	private PedidoRepository pedidos;
	
	@PostMapping
	public String realizarPedido(@RequestParam(name = "id_produto") Long id_produto, @RequestParam(name = "id_usuario") Long id_usuario, 
			@RequestParam("formaPagamento") String formaPagamento) {
		
		Usuario usuario = this.pedidos.findUsuario(id_usuario);
		Produto produto = this.pedidos.findProduto(id_produto);
		Pedido pedido = new Pedido(produto, usuario, formaPagamento);
	
		pedidos.save(pedido);
		
		return "{\"result\":\"OK\"}";
	}
	
	@GetMapping	
	public List<Pedido> meusPedidos() {
		return pedidos.findAll();
	}
	
}