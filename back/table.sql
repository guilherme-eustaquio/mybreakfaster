CREATE TABLE estabelecimento (
	id INTEGER AUTO_INCREMENT,
	nome VARCHAR(50),
	conteudo VARCHAR(200),
	avaliacao INTEGER,
	PRIMARY KEY(id)
);

CREATE TABLE usuario(
	id INTEGER AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(100),
	senha VARCHAR(100),
	PRIMARY KEY(id, email)
);

CREATE TABLE produto(
	id INTEGER AUTO_INCREMENT,
	id_estabelecimento INTEGER,
	imagem VARCHAR(50),
	descricao VARCHAR(200),
	valor DOUBLE,
	PRIMARY KEY(id),
	FOREIGN KEY(id_estabelecimento) REFERENCES estabelecimento
);

INSERT INTO usuario (nome, email, senha) VALUES ('Guilherme', 'guilherme.eustaquio.moreira@gmail.com', '123456');
INSERT INTO usuario (nome, email, senha) VALUES ('Rodrigo',  'admrodrigo2@yahoo.com.br', '123456');
INSERT INTO usuario (nome, email, senha) VALUES ('Mateus', 'mboprates@gmail.com', '123456');

INSERT INTO estabelecimento (nome, conteudo, avaliacao) VALUES ('Mac Donalds', 'Venha ser feliz no MC Lanche Feliz!', 4);
INSERT INTO estabelecimento (nome, conteudo, avaliacao) VALUES ('Bobs', 'O Bobs é dahora!', 3);

INSERT INTO produto (id_estabelecimento, imagem, descricao, valor) VALUES (1, '../global/local_files/macdonalds/pizza.jpg', 'A melhor pizza do mundo!', 42.50);
INSERT INTO produto (id_estabelecimento, imagem, descricao, valor) VALUES (1, '../global/local_files/macdonalds/hamburguer.jpg', 'O melhor big mac do mundo!', 17.50);
INSERT INTO produto (id_estabelecimento, imagem, descricao, valor) VALUES (2, '../global/local_files/macdonalds/mclanche.jpg', 'Esse aqui é brabo!', 12.50);

