# Projeto API de Alunos

Esta é uma API para gerenciar alunos.

## Tecnologias Utilizadas

* Node.js
* Express.js
* MongoDB (com Mongoose)

## Instalação

1. Clone o repositório: `git clone <url-do-repositorio>`
2. Navegue até o diretório `backend`: `cd backend`
3. Instale as dependências: `npm install`
4. Crie um arquivo `.env` na raiz do diretório `backend` e adicione a seguinte variável de ambiente:
   ```
   MONGODB_URI=<sua-string-de-conexao-do-mongodb>
   ```

## Uso

Para iniciar o servidor, execute o seguinte comando no diretório `backend`:

```
npm run dev
```

O servidor estará rodando em `http://localhost:5000`.

## Endpoints da API

* `GET /api/alunos`: Retorna todos os alunos cadastrados no sistema.
* `GET /api/alunos/:id`: Retorna os detalhes de um aluno específico pelo seu ID.
* `POST /api/alunos`: Cria um novo aluno (necessário enviar nome, matricula e curso no corpo da requisição).
* `PUT /api/alunos/:id`: Atualiza as informações de um aluno existente pelo seu ID.
* `DELETE /api/alunos/:id`: Remove um aluno do sistema pelo seu ID.

## Documentação

A documentação completa da API pode ser encontrada em `http://localhost:5000/api-docs` após iniciar o servidor. 
A documentação é interativa e permite testar todos os endpoints diretamente pelo navegador.

## Exemplo de Uso

Para criar um novo aluno, você pode usar o seguinte comando curl:

```bash
curl -X POST http://localhost:5000/api/alunos \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva",
    "matricula": "2023001",
    "curso": "Engenharia de Software"
  }'
```


## Exemplo de Requisição com Thunder Client

### GET /api/alunos

**URL:** `http://localhost:5000/api/alunos`

**Método:** `GET`

**Headers:**
```json
{
  "Content-Type": "application/json"
}
```

**Resposta (Exemplo):**
```json
[
  {
    "_id": "654a5b5f1c3d5a2f8e4b3e3b",
    "nome": "João da Silva",
    "idade": 20,
    "turma": "A",
    "__v": 0
  },
  {
    "_id": "654a5b6a1c3d5a2f8e4b3e3d",
    "nome": "Maria da Silva",
    "idade": 22,
    "turma": "B",
    "__v": 0
  }
]
```

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT.
