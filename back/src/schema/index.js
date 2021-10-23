const { SchemaComposer } = require('graphql-compose');
const { ProdutoQuery, ProdutoMutation } = require('./produto');
const { PostagemQuery, PostagemMutation } = require('./postagem');

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
  ...ProdutoQuery,
  ...PostagemQuery,
});

schemaComposer.Mutation.addFields({
  ...ProdutoMutation,
  ...PostagemMutation,
});

module.exports = schemaComposer.buildSchema();