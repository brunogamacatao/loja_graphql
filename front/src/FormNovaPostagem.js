import React, {useState} from 'react';
import {
  useMutation,
  gql
} from "@apollo/client";

export const CREATE_POSTAGEM = gql`
  mutation PostagemCreateOneMutation($record: CreateOnePostagemInput!) {
    postagemCreateOne(record: $record) {
      recordId
    }
  }
`;

const criaFormEmBranco = () => {
  return {
    titulo: '',
    texto: ''
  };
};

export default function FormNovaPostagem() {
  const [form, setForm] = useState(criaFormEmBranco());
  const [createPostagem, {loading, error}] = useMutation(CREATE_POSTAGEM);

  const setValor = (evento, campo) => {
    setForm({...form, [campo]: evento.target.value});
  };

  const submeter = async (evento) => {
    evento.preventDefault();
    let dadosForm = {...form};
    setForm(criaFormEmBranco());
    createPostagem({ variables: { record: dadosForm } });
  };

  if (loading) return <p>'Enviando a postagem...'</p>;
  if (error) return <p>Erro ao criar a postagem: {error.message}</p>;

  return (
    <form onSubmit={(e) => submeter(e)}>
      <fieldset>
        <legend>Novo Postagem</legend>
        <div>
          <label>Título:</label>
          <input type="text" name="titulo" value={form.titulo} onChange={(e) => setValor(e, 'titulo')}/>
        </div>
        <div>
          <label>Texto:</label>
          <textarea name="texto" value={form.texto} onChange={(e) => setValor(e, 'texto')}></textarea>
        </div>
        <div>
          <input type="submit" value="Adicionar"/>
        </div>
      </fieldset>
    </form>
  );
}
