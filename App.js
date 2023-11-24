import './App.css';
import Header from './componentes/Header';
import Projects from './componentes/Projects';
import Contact from './componentes/Contact';
import Footer from './componentes/Footer';
import Ola from './Ola';
import ContadorClick from './componentes/ContadorClick';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Ola name="Bruna"/>
     <ContadorClick></ContadorClick>
     <Projects></Projects>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  );
}

export default App;
