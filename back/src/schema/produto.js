const { ProdutoGraphQLType } = require('../model/produto');

const ProdutoQuery = {
    produtoById: ProdutoGraphQLType.getResolver('findById'),
    produtoByIds: ProdutoGraphQLType.getResolver('findByIds'),
    produtoOne: ProdutoGraphQLType.getResolver('findOne'),
    produtoMany: ProdutoGraphQLType.getResolver('findMany'),
    produtoCount: ProdutoGraphQLType.getResolver('count'),
    produtoConnection: ProdutoGraphQLType.getResolver('connection'),
    produtoPagination: ProdutoGraphQLType.getResolver('pagination'),
};

const ProdutoMutation = {
    produtoCreateOne: ProdutoGraphQLType.getResolver('createOne'),
    produtoCreateMany: ProdutoGraphQLType.getResolver('createMany'),
    produtoUpdateById: ProdutoGraphQLType.getResolver('updateById'),
    produtoUpdateOne: ProdutoGraphQLType.getResolver('updateOne'),
    produtoUpdateMany: ProdutoGraphQLType.getResolver('updateMany'),
    produtoRemoveById: ProdutoGraphQLType.getResolver('removeById'),
    produtoRemoveOne: ProdutoGraphQLType.getResolver('removeOne'),
    produtoRemoveMany: ProdutoGraphQLType.getResolver('removeMany'),
};

module.exports = { ProdutoQuery, ProdutoMutation };