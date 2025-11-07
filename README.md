# Projeto de Gerenciamento de Alunos

Este é um projeto full-stack para gerenciar alunos, composto por uma API backend em Node.js/Express/MongoDB e um frontend em React/Vite.

## Tecnologias Utilizadas

### Backend
* Node.js
* Express.js
* MongoDB (com Mongoose)
* Swagger (para documentação da API)

### Frontend
* React
* Vite
* Axios (para requisições HTTP)

## Instalação

### Backend
1. Clone o repositório: `git clone <url-do-repositorio>`
2. Navegue até o diretório `backend`: `cd backend`
3. Instale as dependências: `npm install`
4. Crie um arquivo `.env` na raiz do diretório `backend` e adicione a seguinte variável de ambiente:
   ```
   MONGODB_URI=<sua-string-de-conexao-do-mongodb>
   ```

### Frontend
1. Navegue até o diretório `frontend`: `cd frontend`
2. Instale as dependências: `npm install`

## Uso

### Backend
Para iniciar o servidor backend, execute o seguinte comando no diretório `backend`:

```
fale em potugues add um modo notunor e um butão e inicer o app iniciar os servidores de backend e frontend inicer o app


### Frontend
1. Navegue até o diretório `frontend`: `cd frontend`
2. Instale as dependências: `npm install`

## Uso

### Backend
Para iniciar o servidor backend, execute o seguinte comando no diretório `backend`:

```
npm run dev
```

O servidor estará rodando em `http://localhost:5000`.

### Frontend
Para iniciar o frontend, execute o seguinte comando no diretório `frontend`:

```
npm run dev
```

O frontend estará rodando em `http://localhost:5173`.
```

O servidor estará rodando em `http://localhost:5000`.

### Frontend
Para iniciar o frontend, execute o seguinte comando no diretório `frontend`:

```
npm run dev
```

O frontend estará rodando em `http://localhost:5173`.

## Modelo de Dados

O modelo `Aluno` possui os seguintes campos:
- `nome` (String, obrigatório): Nome do aluno
- `idade` (Number, obrigatório): Idade do aluno
- `turma` (String, obrigatório): Turma do aluno
- `frequencia` (Array): Lista de frequências com `data` (Date) e `presente` (Boolean)
- `criadoEm` (Date): Data de criação (automática)

## Endpoints da API

* `GET /api/alunos`: Retorna todos os alunos cadastrados no sistema.
* `GET /api/alunos/:id`: Retorna os detalhes de um aluno específico pelo seu ID.
* `POST /api/alunos`: Cria um novo aluno (necessário enviar nome, idade e turma no corpo da requisição).
* `PUT /api/alunos/:id`: Atualiza as informações completas de um aluno existente pelo seu ID.
* `DELETE /api/alunos/:id`: Remove um aluno do sistema pelo seu ID.
* `PATCH /api/alunos/:id`: Edita parcialmente um aluno (método edit).
* `PATCH /api/alunos/:id`: Aplica patch em um aluno (método patch).
* `GET /api/alunos/busca?nome=xxx`: Busca alunos por nome (case-insensitive).
* `GET /api/alunos/filtro?turma=xxx`: Filtra alunos por turma.
* `GET /api/alunos/contagem`: Retorna a contagem total de alunos.

## Documentação

A documentação completa da API pode ser encontrada em `http://localhost:5000/api-docs` após iniciar o servidor backend.
A documentação é interativa e permite testar todos os endpoints diretamente pelo navegador.

## Exemplo de Uso

Para criar um novo aluno, você pode usar o seguinte comando curl:

```bash
curl -X POST http://localhost:5000/api/alunos \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva",
    "idade": 20,
    "turma": "A"
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
    "frequencia": [],
    "criadoEm": "2023-11-05T12:00:00.000Z",
    "__v": 0
  },
  {
    "_id": "654a5b6a1c3d5a2f8e4b3e3d",
    "nome": "Maria da Silva",
    "idade": 22,
    "turma": "B",
    "frequencia": [],
    "criadoEm": "2023-11-05T12:05:00.000Z",
    "__v": 0
  }
]
```

## Frontend

O frontend é uma aplicação React que permite:
- Visualizar a lista de alunos em uma tabela.
- Criar novos alunos através de um formulário.
- Editar e excluir alunos existentes.

Acesse `http://localhost:5173` após iniciar o frontend.

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT.
