package com.grm.mybreakfaster.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grm.mybreakfaster.domain.Estabelecimento;
import com.grm.mybreakfaster.repository.EstabelecimentoRepository;

@RestController
@RequestMapping("/estabelecimentos")
public class EstabelecimentoController {
	
	@Autowired
	private EstabelecimentoRepository estabelecimentos;
	
	@GetMapping
	@PreAuthorize("hasAuthority('cliente')")	
	public List<Estabelecimento> obterEstabelecimentos() {
		return estabelecimentos.findAll();
	}
	
	@GetMapping("/{id}")
	public Estabelecimento obterEstabelecimentoPorId(@PathVariable long id) {
		return estabelecimentos.findById(id).get();				
	}
}
