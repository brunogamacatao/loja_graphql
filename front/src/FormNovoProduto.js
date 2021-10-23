import React, {useState, useContext} from 'react';
import LojaContext from './contextos/LojaContext';

const criaFormEmBranco = () => {
  return {
    nome: '',
    foto: '', 
    valor: 0.0
  };
};

export default function FormNovoProduto() {
  const [form, setForm] = useState(criaFormEmBranco());
  const {createProduto, createProdutoObj: { loading, error }} = useContext(LojaContext);

  const setValor = (evento, campo) => {
    setForm({...form, [campo]: evento.target.value});
  };

  const submeter = async (evento) => {
    evento.preventDefault();
    let dadosForm = {...form};
    dadosForm.valor = parseFloat(dadosForm.valor);
    setForm(criaFormEmBranco());
    createProduto(dadosForm);
  };

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <form onSubmit={(e) => submeter(e)}>
      <fieldset>
        <legend>Novo Produto</legend>
        <div>
          <label>Nome:</label>
          <input type="text" name="nome" value={form.nome} onChange={(e) => setValor(e, 'nome')}/>
        </div>
        <div>
          <label>Foto:</label>
          <input type="text" name="foto" value={form.foto} onChange={(e) => setValor(e, 'foto')}/>
        </div>
        <div>
          <label>Valor:</label>
          <input type="number" name="valor" value={form.valor} onChange={(e) => setValor(e, 'valor')}/>
        </div>
        <div>
          <input type="submit" value="Adicionar"/>
        </div>
      </fieldset>
    </form>
  );
}
