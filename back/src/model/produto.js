const mongoose = require('mongoose');
const { composeWithMongoose } = require('graphql-compose-mongoose');

const produtoSchema = new mongoose.Schema({
  nome: String,
  foto: String,
  valor: Number
}, { 
  timestamps: true 
});

const Produto = mongoose.model('Produto', produtoSchema);
const ProdutoGraphQLType = composeWithMongoose(Produto);

module.exports = { Produto, ProdutoGraphQLType };
