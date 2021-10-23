import React from 'react';
import {GET_PRODUTOS, CREATE_PRODUTO} from '../consultas';
import {
  useQuery,
  useMutation
} from "@apollo/client";

const LojaContext = React.createContext();

export const LojaProvider = ({children}) => {
  const getProdutosObj = useQuery(GET_PRODUTOS);
  const [createProdutoMutation, createProdutoObj] = useMutation(CREATE_PRODUTO);

  const createProduto = (dados) => {
    createProdutoMutation({ variables: { record: dados } });
  };

  if (createProdutoObj.data) {
    getProdutosObj.refetch();
  }

  return (
    <LojaContext.Provider value={{
      getProdutosObj, createProduto, createProdutoObj
    }}>
      {children}
    </LojaContext.Provider>
  );  
};

export default LojaContext;