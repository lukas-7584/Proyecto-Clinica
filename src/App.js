import logo from './logo.svg';
import './App.css';
import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';
import Inicio from './Componentes/Inicio';
import CartProvider from './Context/CartProvider';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    < >

      <CartProvider>
        <BrowserRouter>
        <div><NavBar /></div>
          <Switch>
            {/* RUTA AL INICIO */}
            <Route exact path= "/">
              <div>
                <Inicio/>
              </div>
            </Route>
          </Switch>
        
        
        </BrowserRouter>


      </CartProvider>
      {/* <Inicio /> */}
      
      <Footer />
    </>
  );
}

export default App;
