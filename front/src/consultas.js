import {
  gql
} from "@apollo/client";

export const GET_PRODUTOS = gql`
  query GetProdutos {
    produtoMany {
      _id
      nome
      foto
    }
  }
`;

export const CREATE_PRODUTO = gql`
  mutation ProdutoCreateOneMutation($record: CreateOneProdutoInput!) {
    produtoCreateOne(record: $record) {
      recordId
    }
  }
`;
