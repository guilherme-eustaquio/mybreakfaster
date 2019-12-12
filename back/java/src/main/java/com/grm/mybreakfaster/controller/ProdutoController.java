package com.grm.mybreakfaster.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grm.mybreakfaster.domain.Produto;
import com.grm.mybreakfaster.repository.ProdutoRepository;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {
	
	@Autowired
	private ProdutoRepository produtos;
	
	@GetMapping("/{id}")
	public List<Produto> obterProdutos(@PathVariable long id) {	
		return this.produtos.findByEstabelecimento(id);
	}
}
