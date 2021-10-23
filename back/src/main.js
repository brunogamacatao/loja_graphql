// #1 - Importa o dotenv e lê as configurações do arquivo .env
require('dotenv').config();


const express = require('express');
const http = require('http');
const { ApolloServer } = require('apollo-server-express');
const db = require('./util/db');
const schema = require('./schema');

const startServer = async () => {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema,
    cors: true,
    playground: process.env.NODE_ENV === 'development' ? true : false,
  });

  await server.start();
  server.applyMiddleware({ app });

  httpServer.listen({ port: process.env.PORT }, () => {
    console.log(`🚀 Servidor no ar em http://localhost:${process.env.PORT}`);
  });
};

console.log('Conectando ao banco de dados...')
db.conecta(() => {
  console.log('Pronto')
  startServer();
});
