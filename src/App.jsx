//Importar Bootstrap@5.3.3
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

//Importar Material Design Icons
import '@mdi/font/css/materialdesignicons.css';

//Importar CSS Geral
import './App.css';

//Importar Components
import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App
