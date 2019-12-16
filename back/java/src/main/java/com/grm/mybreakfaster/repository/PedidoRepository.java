package com.grm.mybreakfaster.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.grm.mybreakfaster.domain.Pedido;
import com.grm.mybreakfaster.domain.Produto;
import com.grm.mybreakfaster.domain.Usuario;

public interface PedidoRepository extends JpaRepository <Pedido, Long> {
	
	@Query("SELECT u FROM Usuario u WHERE id = :id")	
	public Usuario findUsuario(@Param("id") Long id); 
	
	@Query("SELECT p FROM Produto p WHERE id = :id")		
	public Produto findProduto(@Param("id") Long id);

	@Query("SELECT p FROM Pedido p WHERE id_usuario = :id_usuario")
	public List<Pedido> findByIdUsuario(@Param("id_usuario") Long id);	
}
