import { Provider } from 'react-redux'
import store from './store'
import EstiloGlobal, { Container } from './styles'
import ListaDeContatos from './containers/ListaDeContatos'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
