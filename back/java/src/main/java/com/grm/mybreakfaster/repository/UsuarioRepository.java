package com.grm.mybreakfaster.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.grm.mybreakfaster.domain.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	@Query("SELECT u FROM Usuario u WHERE email = :email AND senha = :senha")
	public Usuario login(@Param("email") String email, @Param("senha") String senha);
}
