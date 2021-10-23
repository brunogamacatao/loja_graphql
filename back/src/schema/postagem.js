const { PostagemGraphQLType } = require('../model/postagem');

const PostagemQuery = {
    postagemById: PostagemGraphQLType.getResolver('findById'),
    postagemByIds: PostagemGraphQLType.getResolver('findByIds'),
    postagemOne: PostagemGraphQLType.getResolver('findOne'),
    postagemMany: PostagemGraphQLType.getResolver('findMany'),
    postagemCount: PostagemGraphQLType.getResolver('count'),
    postagemConnection: PostagemGraphQLType.getResolver('connection'),
    postagemPagination: PostagemGraphQLType.getResolver('pagination'),
};

const PostagemMutation = {
    postagemCreateOne: PostagemGraphQLType.getResolver('createOne'),
    postagemCreateMany: PostagemGraphQLType.getResolver('createMany'),
    postagemUpdateById: PostagemGraphQLType.getResolver('updateById'),
    postagemUpdateOne: PostagemGraphQLType.getResolver('updateOne'),
    postagemUpdateMany: PostagemGraphQLType.getResolver('updateMany'),
    postagemRemoveById: PostagemGraphQLType.getResolver('removeById'),
    postagemRemoveOne: PostagemGraphQLType.getResolver('removeOne'),
    postagemRemoveMany: PostagemGraphQLType.getResolver('removeMany'),
};

module.exports = { PostagemQuery, PostagemMutation };