const mongoose = require('mongoose');
const { composeWithMongoose } = require('graphql-compose-mongoose');

const postagemSchema = new mongoose.Schema({
  titulo: String,
  texto: String,
}, { 
  timestamps: true 
});

const Postagem = mongoose.model('Postagem', postagemSchema);
const PostagemGraphQLType = composeWithMongoose(Postagem);

module.exports = { Postagem, PostagemGraphQLType };
