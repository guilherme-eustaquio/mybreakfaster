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
	public Usuario login(@RequestParam(name = "email") String email, @RequestParam(name = "senha") String senha) {
		return this.usuarioRepository.login(email, senha);
		
	}
	
	@GetMapping("/{id}")
	public Usuario obterUsuario(@PathVariable(name = "id") Long id) {
		return this.usuarioRepository.findById(id).get();
	}
	
	@PostMapping("/editar")
	public Usuario editarUsuario(@RequestParam(name = "id") Long id, @RequestParam(name = "email") String email, 
			@RequestParam(name = "nome") String nome, @RequestParam(name = "senha") String senha,
			@RequestParam(name = "endereco") String endereco) {
		
		Usuario usuario = this.usuarioRepository.findById(id).get();
		
		usuario.setId(id);
		usuario.setEmail(email);
		usuario.setNome(nome);
		usuario.setSenha(senha);
		usuario.setEndereco(endereco);
		this.usuarioRepository.save(usuario);		
		return usuario;	
	}
	
	@PostMapping("/criar")
	public String criarUsuario(@RequestParam(name = "email") String email, 
			@RequestParam(name = "nome") String nome, @RequestParam(name = "senha") String senha,
			@RequestParam(name = "endereco") String endereco) {
		
		Usuario usuario = new Usuario();
		
		usuario.setEmail(email);
		usuario.setNome(nome);
		usuario.setSenha(senha);
		usuario.setEndereco(endereco);
		
		this.usuarioRepository.save(usuario);		
		return "{\"result\":\"OK\"}";
	}	
	
}
