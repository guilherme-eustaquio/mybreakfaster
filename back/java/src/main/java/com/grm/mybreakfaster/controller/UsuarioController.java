package com.grm.mybreakfaster.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.grm.mybreakfaster.domain.Usuario;
import com.grm.mybreakfaster.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@PostMapping
	public String login(@RequestParam(name = "email") String email, @RequestParam(name = "senha") String senha) {
		
		if(usuarioRepository.login(email, senha) == 0) {
			return String.format("{\"result\":\"%s\"}", "Usuário ou senha incorretos!");
		}
		
		return "{\"result\":\"OK\"}";
	}
	
	@GetMapping("/{id}")
	public Usuario obterUsuario(@PathVariable(name = "id") Long id) {
		return this.usuarioRepository.findById(id).get();
	}
	
	@PostMapping("/update")
	public String editarUsuario(@RequestParam(name = "id") Long id, @RequestParam(name = "email") String email, 
			@RequestParam(name = "nome") String nome, @RequestParam(name = "senha") String senha) {
		
		Usuario usuario = this.usuarioRepository.findById(id).get();
		
		usuario.setEmail(email);
		usuario.setNome(nome);
		usuario.setSenha(senha);

		this.usuarioRepository.save(usuario);		
		return "{\"result\":\"OK\"}";		
	}
}
