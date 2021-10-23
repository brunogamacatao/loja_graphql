import React from 'react';
import {
  useQuery,
  gql
} from "@apollo/client";

export const GET_POSTAGENS = gql`
  query GetPostagens {
    postagemMany {
      titulo
      texto
    }
  }
`;

export default function ListagemDePostagens() {
  const {loading, error, data} = useQuery(GET_POSTAGENS, { pollInterval: 500 });

  if (loading) return <p>Carregando as mensagens ...</p>
  if (error) return <p>Erro ao carregar as mensagens: {error.message}</p>

  const renderPostagem = (post) => {
    return (
      <div>
        <h3>{post.titulo}</h3>
        <p>{post.texto}</p>
      </div>
    );
  };

  return data.postagemMany.map(renderPostagem);
}
