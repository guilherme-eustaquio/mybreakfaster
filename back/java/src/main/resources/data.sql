CREATE TABLE IF NOT EXISTS estabelecimento (
	id INTEGER AUTO_INCREMENT,
	nome VARCHAR(50),
	conteudo VARCHAR(200),
	avaliacao INTEGER,
	PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS usuario (
	id INTEGER AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(100),
	senha VARCHAR(100),
	endereco VARCHAR(100),
	PRIMARY KEY(id, email)
);

CREATE TABLE IF NOT EXISTS produto (
	id INTEGER AUTO_INCREMENT,
	id_estabelecimento INTEGER,
	imagem VARCHAR(50),
	descricao VARCHAR(200),
	valor DOUBLE,
	tipo VARCHAR(20),
	PRIMARY KEY(id),
	FOREIGN KEY(id_estabelecimento) REFERENCES estabelecimento
);

CREATE TABLE IF NOT EXISTS pedido (
	id INTEGER AUTO_INCREMENT,
	id_produto INTEGER,
	id_usuario INTEGER,
	forma_pagamento VARCHAR(50),
	data_criacao DATETIME,
	endereco VARCHAR(100),
	status INTEGER,
	PRIMARY KEY(id),
	FOREIGN KEY(id_produto) REFERENCES produto(id),
	FOREIGN KEY(id_usuario) REFERENCES usuario(id)
);

INSERT INTO usuario (id, nome, email, senha, endereco) VALUES (1, 'Guilherme', 'guilherme.eustaquio.moreira@gmail.com', '123456', 'Rua teste');
INSERT INTO usuario (id, nome, email, senha, endereco) VALUES (2, 'Rodrigo',  'admrodrigo2@yahoo.com.br', '123456', 'Rua teste 2');
INSERT INTO usuario (id, nome, email, senha, endereco) VALUES (3, 'Mateus', 'mboprates@gmail.com', '123456', 'Rua teste 3');

INSERT INTO estabelecimento (id, nome, conteudo, avaliacao) VALUES (1, 'Mac Donalds', 'Venha ser feliz no MC Lanche Feliz!', 4);
INSERT INTO estabelecimento (id, nome, conteudo, avaliacao) VALUES (2, 'Bobs', 'O Bobs eh dahora!', 3);

INSERT INTO produto (id, id_estabelecimento, imagem, descricao, valor, tipo) VALUES (1, 1, '../global/local_files/macdonalds/pizza.jpg', 'A melhor pizza do mundo!', 42.50, 'casa');	
INSERT INTO produto (id, id_estabelecimento, imagem, descricao, valor, tipo) VALUES (2, 1, '../global/local_files/macdonalds/hamburguer.jpg', 'O melhor big mac do mundo!', 17.50, 'local');
INSERT INTO produto (id, id_estabelecimento, imagem, descricao, valor, tipo) VALUES (3, 2, '../global/local_files/macdonalds/mclanche.jpg', 'Esse aqui eh brabo!', 12.50, 'local');
