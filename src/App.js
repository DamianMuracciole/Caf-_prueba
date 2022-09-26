//Librerias
import React from 'react';
import { Route, Switch } from 'react-router-dom'
//Estilos
import './App.css'
//Componentes
import Products from "./components/Products";
import Users from "./components/Users";
import NotFound from './components/NotFound';
import { SideBar } from './components/SideBar';
import Footer from './components/Footer';
import Main from './components/Main'



function App() {
  return (
    <div>
      {/* <body> */}
        <div className="row h-auto mb-0">
          <div className="col-2 d-flex">
            <SideBar />
          </div>
          <div className="col-10 mb-0">
            <div className="min-vh" >
              <h2 className='titulo'> Dashboard CaféArte</h2>
              <hr />
              <Switch >
                {/* <Route path='/' component={Users} exact /> */}
                <Route path='/' exact >
                  <Main />
                </Route>
                <Route path='/productos' component={Products} />
                <Route path='/usuarios' component={Users} />
                {/* <Route path='/probando'  component={Probando} /> */}
                <Route component={NotFound} />
              </Switch>
            </div>
          
            <div >
              <hr />
              <Footer />
            </div>
          </div>
          
        </div>
        
      {/* </body> */}
    </div>
  );
}

export default App;
