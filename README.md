# Conversor de Moedas

Este projeto é o código-fonte do conversor de moedas, utilizando as taxas de conversão da (Foreign exchange rates API), mais detalhes clique [aqui](https://exchangeratesapi.io/) 

### Pré-requisitos:

Você precisa do NodeJS e do Yarn instalado em sua máquina.

```
Yarn - Para instalar as dependências 
Yarn dev:server - Para Rodar a API
```

### Funcionalidades:

```
Para realizar a conversão de moedas é necessário criar o usuário, informando email:
    edpoint: http://localhost:3333/users
    JSON: {"email": "Seu email"}

Após cadastrar o usuário, é necessário copiar o id do usuário para rwalizar a conversão de moedas:
    edpoint: http://localhost:3333/transactions
    JSON: 
    {
        "origincurrency": "USD",
        "sourcevalue": 10.50,
	    "destinationcurrency": "BRL",
	    "user_id": "[id copiado após criação do usuário]"
    }

Obs.: Todas as informações desse edpoint deverão ser informadas, caso falte alguma dessas informações retornara um erro de validação;

A API disponibiliza um edpoint de consulta das transaçoes feitas por usuário, conforme abaixo:
    edpoint: http://localhost:3333/transactions/[É necessário informar o id do usuário]

Obs.: Caso não informe o id usuário, retornara uma mensagem de erro da validação.   
```

## Colocando em produção:

Este projeto pode ser colocado em produção utilizando o (Heroku, ou similar)

## Construído com:

* [axios]
* [celebrate]
* [cors]
* [dotenv]
* [express]
* [express-async-errors]
* [jest]
* [reflect-metadata]
* [sqlite3]
* [tsyringe]
* [typeorm]
* [typescript]
* [uuidv4]

## Módulos independentes:

Foi utilizado injeção de dependêcia, princípio DIP (Dependency Inversion Principle) 

* [Users] - Cadastro de usuários
* [Transaction] - Cadastro das transações
* [Shared] - Implementações globais utilizado em toda API


## Author:

* **Roberto Rodrigues** - [LinkedIn](https://www.linkedin.com/in/robertorodriguesazevedo/)


## Licença

Este projeto é licenciado sobre a licença MIT - veja [LICENSE.md](LICENSE.md) para mais informações.