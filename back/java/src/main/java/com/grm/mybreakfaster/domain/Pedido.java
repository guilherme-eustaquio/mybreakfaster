package com.grm.mybreakfaster.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
@Table(name = "pedido")
public class Pedido {
	
	@Column(name = "id")
	@Id
	@GeneratedValue
	private Long id;
	
	@Column(name = "id_produto")
	private Long produto;
	
	@Column(name = "id_usuario")
	private Long usuario;
	
	@Column(name = "forma_pagamento")
	private String formaPagamento;
	
	@Column(name = "endereco")
	private String endereco;

	@Column(nullable = false, updatable = false)
	@CreationTimestamp
	@JsonFormat(pattern="dd/MM/yyyy HH:mm:ss")
	private Date dataCriacao;
	
	@Column(name = "status")
	private Long status;
	
	public Pedido() {}
	
	public Pedido(Long produto, Long usuario, String formaPagamento, String endereco) {
		super();
		this.produto = produto;
		this.usuario = usuario;
		this.formaPagamento = formaPagamento;
		this.endereco = endereco;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public String getFormaPagamento() {
		return formaPagamento;
	}

	public void setFormaPagamento(String formaPagamento) {
		this.formaPagamento = formaPagamento;
	}

	public Long getProduto() {
		return produto;
	}

	public void setProduto(Long produto) {
		this.produto = produto;
	}

	public Long getUsuario() {
		return usuario;
	}

	public void setUsuario(Long usuario) {
		this.usuario = usuario;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public Date getDataCriacao() {
		return dataCriacao;
	}

	public void setDataCriacao(Date dataCriacao) {
		this.dataCriacao = dataCriacao;
	}

	public Long getStatus() {
		return status;
	}

	public void setStatus(Long status) {
		this.status = status;
	}

	
	
}