//Importar Bootstrap@5.2.3
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

//Importar Material Design Icons
import '@mdi/font/css/materialdesignicons.css';

//Importar CSS Geral
import './App.css';

//Importar Components
import Navbar from './components/Navbar';
import Categorias from './components/Categorias';
import ModalFilter from './components/ModalFilter';
import Card from './components/Card';

function App() {

  return (
    <div>
      <Navbar />
      <Categorias />
      <Card />
      <ModalFilter />
    </div>
  )
}

export default App
