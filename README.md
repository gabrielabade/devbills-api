# DevBills API

Este é o back-end do projeto **DevBills**, uma aplicação para controle financeiro pessoal que permite gerenciar categorias, registrar transações e visualizar relatórios financeiros.

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução de JavaScript no servidor.
- **Express.js**: Framework para criação de APIs rápidas e escaláveis.
- **TypeScript**: Superset do JavaScript para adicionar tipagem estática.
- **MongoDB**: Banco de dados NoSQL para armazenamento das informações.
- **Mongoose**: ODM para modelagem de dados no MongoDB.
- **Zod**: Validação e manipulação de dados.
- **Express Validator**: Validação de entradas nas rotas da API.
- **Cors**: Controle de acessos à API.
- **Dotenv**: Gerenciamento de variáveis de ambiente.
- **Docker**: Para containerização do banco de dados MongoDB.

## Instalação e Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/gabrielabade/devbills-api.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd devbills-api
   ```

3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```

4. Configure as variáveis de ambiente criando um arquivo `.env` com os seguintes valores:
   ```env
   MONGO_URL=mongodb://devbills:pass123@mongodb:27017/devbills?authSource=admin
   FRONT_URL=http://localhost:5173
   ```

5. Inicie o banco de dados com Docker:
   ```bash
   docker-compose up -d
   ```

6. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

## Scripts Disponíveis

- **`dev`**: Inicia o servidor de desenvolvimento com recarregamento automático.
- **`build`**: Compila o código TypeScript para JavaScript.
- **`start`**: Executa o servidor com o código compilado.
- **`lint`**: Executa o lint para identificar problemas no código.
- **`lint:fix`**: Corrige problemas identificados pelo lint.
- **`format`**: Formata o código seguindo as regras do Prettier.

## Funcionalidades

- Criação de categorias (nome e cor).
- Registro de transações (nome, valor, data, tipo e categoria).
- Filtros para listagem de transações por nome, período ou categoria.
- Cálculo de saldo com filtros por período.
- Dados de despesas categorizadas e balanço geral anual.

## Repositório Front-End

Para acessar o repositório do front-end deste projeto, visite: [DevBills Front-End](https://github.com/gabrielabade/devbills-front).

##  Prévia

![Preview do projeto](./src/devbills-finanças.png)