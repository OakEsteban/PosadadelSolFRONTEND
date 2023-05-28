import './App.css';
import Login from './components/Login.jsx'
import Registro from './components/Registro';
import Footer from './components/Footer.jsx';
import Navbar from './components/navbar/Navbar.jsx';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Registro/>
      <Footer/>

    </div>
  );
}
export default App;
