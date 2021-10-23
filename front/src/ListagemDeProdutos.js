import React, {useContext} from 'react';
import LojaContext from './contextos/LojaContext';

export default function ListagemDeProdutos() {
  const {getProdutosObj: { loading, error, data }} = useContext(LojaContext);

  if (loading) return <p>Carregando ...</p>
  if (error) return <p>Erro: {error}</p>

  const renderProduto = (produto) => {
    return (
      <div key={produto._id}>
        <h3>{produto.nome}</h3>
        <img src={produto.foto} alt={produto.nome} width="100"/>
      </div>
    );
  };

  return data.produtoMany.map(renderProduto);
}
