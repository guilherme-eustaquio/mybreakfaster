package com.grm.mybreakfaster.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.grm.mybreakfaster.entity.Estabelecimento;

@RepositoryRestResource(collectionResourceRel = "estabelecimento", path = "estabelecimento")
public interface Estabelecimentos extends JpaRepository <Estabelecimento, Long> {

}
