import logo from './logo.svg';
import './App.css';
import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';
import Inicio from './Componentes/Inicio';
import CartProvider from './Context/CartProvider';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Contacto from './Componentes/Contacto';

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
            {/* RUTA A NOSOTROS */}
            <Route exact path="/ nosotros">
              <div>
                    <p>EN CONSTRUCCION</p>
              </div>
            </Route >
              {/* RUTA A CONTACTO*/}
              <Route  exact path="/ contacto"> 
              <div>
                {/* <p> DEJANOS  TU MENSAJE </p> */}
                <Contacto />
              </div>
            </Route>
              {/* RUTA A LOGIN */}
              <Route  exact path="/ login">
              <div>
                    <p> SOLO PARA USUARIOS</p>
              </div>
            </Route>
          </Switch>
        
        
        </BrowserRouter>


      </CartProvider>
      
      <Footer />
    </>
  );
}

export default App;
