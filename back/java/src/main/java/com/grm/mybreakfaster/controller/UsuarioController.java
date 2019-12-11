package com.grm.mybreakfaster.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.grm.mybreakfaster.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@PostMapping
	public String login(@RequestParam(name = "email") String email, @RequestParam(name = "email") String senha) {
		
		if(usuarioRepository.login(email, senha) == 0) {
			return String.format("{\"result\":\"%s\"}", "Usuário ou senha incorretos!");
		}
		
		return "{\"result\":\"OK\"}";
	}
}
