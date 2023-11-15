import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import navbar from './components/navegation/navbar'
import Inicio from './components/pages/inicio';
import Bebidas from './components/pages/bebidas';
import Botanas from './components/pages/botanas';

function App() {
  return (
    <div className="App">
      <router>
        <navbar/>
      </router>
    </div>
  );
}


export default App;
