import './App.css';
import Login from './components/Login.jsx'
import Registro from './components/Registro';
import Footer from './components/Footer.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Opinions from './components/Opinions.jsx';
import Inicio from './components/Inicio'
import Mapa from './components/Mapa';


function App() {


  return (
    <div className="App">
      <Navbar />
      <Login />
      <Mapa/>
      <Opinions />
      <Footer />


    </div>
  );
}
export default App;
