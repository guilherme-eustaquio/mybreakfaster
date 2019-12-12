package com.grm.mybreakfaster.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "produto")
public class Produto {
	
	@Id
	@Column(name = "id")
	@GeneratedValue
	private Long id;
	
	@Column(name = "id_estabelecimento")
	private Long id_estabelecimento;
	
	@Column(name = "imagem")
	private String imagem;
	
	@Column(name = "descricao")
	private String descricao;
	
	@Column(name = "valor")
	private double valor;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	public Long getIdEstabelecimento() {
		return id_estabelecimento;
	}

	public void setIdEstabelecimento(Long id_estabelecimento) {
		this.id_estabelecimento = id_estabelecimento;
	}	
	
	
}
