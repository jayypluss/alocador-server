# alocador-server
Express API de otimização e alocação de cargas 3D em containers. 
Este projeto serve como API para o frontend do projeto: https://github.com/jayypluss/alocador-front.
Portanto ambos têm que estar rodando para o funcionamento da aplicação.

### Instalando dependências
Para rodar a aplicação é necessário ter o [npm](https://www.npmjs.com/) e o [nodeJS](https://nodejs.org/en/) (testado na versão v14) instalado.
Sendo assim basta rodar
`npm install`
para instalar as dependências.


### Rodando o projeto

Após instalar as dependências, para rodar o projeto utilize o comando
`npm run dev`.

### Outras informações

Por padrão, esta aplicação irá rodar na porta `3001`, ou então na porta especificada pelo `process.env.PORT`. Isso pode ser alterado no arquivo https://github.com/jayypluss/alocador-server/blob/main/src/index.ts.
