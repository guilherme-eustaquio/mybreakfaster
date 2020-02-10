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

CREATE TABLE IF NOT EXISTS permissao (
	id bigint NOT NULL ,
	descricao varchar(255) DEFAULT NULL,
	permissao varchar(255) DEFAULT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS usuario_permissao (
	id_usuario bigint NOT NULL,
	id_permissao bigint NOT NULL,
	CONSTRAINT FK859n2jvi8ivhui0rl0esws6o FOREIGN KEY (id_usuario) REFERENCES usuario (id),
	CONSTRAINT FKa68196081fvovjhkek5m97n3y FOREIGN KEY (id_permissao) REFERENCES permissao (id)
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

create table if not exists oauth_client_details (
	client_id VARCHAR(256) PRIMARY KEY,
	resource_ids VARCHAR(256),
	client_secret VARCHAR(256),
	scope VARCHAR(256),
	authorized_grant_types VARCHAR(256),
	web_server_redirect_uri VARCHAR(256),
	authorities VARCHAR(256),
	access_token_validity INTEGER,
	refresh_token_validity INTEGER,
	additional_information VARCHAR(4096),
	autoapprove VARCHAR(256)
);

create table if not exists oauth_client_token (
	token_id VARCHAR(255),
	token bytea ,
	authentication_id VARCHAR(255),
	user_name VARCHAR(255),
	client_id VARCHAR(255)
);

create table if not exists oauth_access_token (
	token_id VARCHAR(255),
	token bytea,
	authentication_id VARCHAR(255),
	user_name VARCHAR(255),
	client_id VARCHAR(255),
	authentication bytea,
	refresh_token VARCHAR(255)
);

create table if not exists oauth_refresh_token (
	token_id VARCHAR(255),
	token bytea,
	authentication bytea
);

create table if not exists oauth_code (
	code VARCHAR(255), authentication bytea
);

INSERT INTO usuario (id, nome, email, senha, endereco) VALUES (1, 'Guilherme', 'guilherme.eustaquio.moreira@gmail.com', '$2a$10$qtH0F1m488673KwgAfFXEOWxsoZSeHqqlB/8BTt3a6gsI5c2mdlfe', 'Rua teste');
INSERT INTO usuario (id, nome, email, senha, endereco) VALUES (2, 'Rodrigo',  'admrodrigo2@yahoo.com.br', '$2a$10$qtH0F1m488673KwgAfFXEOWxsoZSeHqqlB/8BTt3a6gsI5c2mdlfe', 'Rua teste 2');
INSERT INTO usuario (id, nome, email, senha, endereco) VALUES (3, 'Mateus', 'mboprates@gmail.com', '$2a$10$qtH0F1m488673KwgAfFXEOWxsoZSeHqqlB/8BTt3a6gsI5c2mdlfe', 'Rua teste 3');

INSERT INTO permissao (id, permissao, descricao) VALUES (1, 'cliente', 'Usuário cliente - não tem estabelecimentos. Apenas realiza pedidos e avalia estabelecimentos.');
INSERT INTO permissao (id, permissao, descricao) VALUES (2, 'estabelecimento', 'Usuário estabelecimento - tem estabelecimentos. Cria pedidos, cardápios, etc.');

INSERT INTO estabelecimento (id, nome, conteudo, avaliacao) VALUES (1, 'Mac Donalds', 'Venha ser feliz no MC Lanche Feliz!', 4);
INSERT INTO estabelecimento (id, nome, conteudo, avaliacao) VALUES (2, 'Bobs', 'O Bobs eh dahora!', 3);

INSERT INTO produto (id, id_estabelecimento, imagem, descricao, valor, tipo) VALUES (1, 1, '../global/local_files/macdonalds/pizza.jpg', 'A melhor pizza do mundo!', 42.50, 'casa');	
INSERT INTO produto (id, id_estabelecimento, imagem, descricao, valor, tipo) VALUES (2, 1, '../global/local_files/macdonalds/hamburguer.jpg', 'O melhor big mac do mundo!', 17.50, 'local');
INSERT INTO produto (id, id_estabelecimento, imagem, descricao, valor, tipo) VALUES (3, 2, '../global/local_files/macdonalds/mclanche.jpg', 'Esse aqui eh brabo!', 12.50, 'local');

INSERT INTO oauth_client_details
   (client_id, client_secret, scope, authorized_grant_types,
   authorities, access_token_validity, refresh_token_validity)
VALUES
   ('admin', 'XY7kmzoNzl100', 'read,write', 'password,refresh_token,client_credentials,authorization_code', 'ROLE_CLIENT,ROLE_TRUSTED_CLIENT', 900, 2592000);