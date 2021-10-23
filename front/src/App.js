import {LojaProvider} from './contextos/LojaContext';
import ListagemDeProdutos from './ListagemDeProdutos';
import FormNovoProduto from "./FormNovoProduto";
import FormNovaPostagem from './FormNovaPostagem';
import ListagemDePostagens from './ListagemDePostagens';

function App() {
  return (
    <LojaProvider>
      <h1>Exemplo GraphQL + Apollo + Mongoose + React</h1>
      <FormNovaPostagem/>
      <ListagemDePostagens/>
      <hr/>
      <h3>PRODUTOS</h3>
      <ListagemDeProdutos/>
      <hr/>
      <FormNovoProduto/>
    </LojaProvider>
  );
}

export default App;
