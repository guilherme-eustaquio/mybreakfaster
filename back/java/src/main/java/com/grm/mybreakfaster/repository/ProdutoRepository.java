package com.grm.mybreakfaster.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.grm.mybreakfaster.domain.Produto;

public interface ProdutoRepository extends JpaRepository <Produto, Long> {
	
	@Query("SELECT p FROM Produto p WHERE id_estabelecimento = :id_estabelecimento")
	public List<Produto> findByEstabelecimento(@Param("id_estabelecimento") Long id);
	
	//
}
