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
	PRIMARY KEY(id, email)
);

CREATE TABLE IF NOT EXISTS produto (
	id INTEGER AUTO_INCREMENT,
	id_estabelecimento INTEGER,
	imagem VARCHAR(50),
	descricao VARCHAR(200),
	valor DOUBLE,
	PRIMARY KEY(id),
	FOREIGN KEY(id_estabelecimento) REFERENCES estabelecimento
);

CREATE TABLE IF NOT EXISTS pedido (
	id INTEGER AUTO_INCREMENT,
	id_produto INTEGER,
	id_estabelecimento INTEGER,
	id_usuario INTEGER,
	forma_pagamento VARCHAR(50),
	PRIMARY KEY(id),
	FOREIGN KEY(id_produto) REFERENCES produto(id),
	FOREIGN KEY(id_estabelecimento) REFERENCES estabelecimento(id),
	FOREIGN KEY(id_usuario) REFERENCES usuario(id)
);

INSERT INTO usuario (id, nome, email, senha) VALUES (1, 'Guilherme', 'guilherme.eustaquio.moreira@gmail.com', '123456');
INSERT INTO usuario (id, nome, email, senha) VALUES (2, 'Rodrigo',  'admrodrigo2@yahoo.com.br', '123456');
INSERT INTO usuario (id, nome, email, senha) VALUES (3, 'Mateus', 'mboprates@gmail.com', '123456');

INSERT INTO estabelecimento (id, nome, conteudo, avaliacao) VALUES (1, 'Mac Donalds', 'Venha ser feliz no MC Lanche Feliz!', 4);
INSERT INTO estabelecimento (id, nome, conteudo, avaliacao) VALUES (2, 'Bobs', 'O Bobs eh dahora!', 3);

INSERT INTO produto (id, id_estabelecimento, imagem, descricao, valor) VALUES (1, 1, '../global/local_files/macdonalds/pizza.jpg', 'A melhor pizza do mundo!', 42.50);
INSERT INTO produto (id, id_estabelecimento, imagem, descricao, valor) VALUES (2, 1, '../global/local_files/macdonalds/hamburguer.jpg', 'O melhor big mac do mundo!', 17.50);
INSERT INTO produto (id, id_estabelecimento, imagem, descricao, valor) VALUES (3, 2, '../global/local_files/macdonalds/mclanche.jpg', 'Esse aqui eh brabo!', 12.50);
