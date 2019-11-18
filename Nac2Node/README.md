# Nac 2 - Node.js

## Script do banco de dados
```sql
create database nac;

use nac;

drop table frutas;

create table frutas (
  id_fruta int AUTO_INCREMENT,
  nome varchar(30),
  descricao varchar(50),
  preco decimal(5,2),
  primary key (id_fruta));
  
  insert into frutas (nome,descricao,preco) values ('Maça', 'Maça gala', 9.90);
  insert into frutas (nome,descricao,preco) values ('Pera', 'Verde', 7.10);
  insert into frutas (nome,descricao,preco) values ('Banana', 'Prata', 4.75);

```
