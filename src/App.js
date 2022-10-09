//Librerias
import React from 'react';
import { Route, Switch } from 'react-router-dom'
//Estilos
import './App.css'
//Componentes
import useFetchProducts from './components/customHooks/useFetchProducts'
import useFetchUsers from './components/customHooks/useFetchUsers'

import {SideBar} from './components/SideBar';
import DataProducts from './components/Data/DataProducts'
import DataUsers from './components/Data/DataUsers'

import Main from './components/Main'

import Products from "./components/Products";
import ProductsPerUnity from './components/ProductsPerUnity';
import ProductList from './components/ProductList'
import UserList from "./components/UserList";
import LastUser from './components/LastUser'
import NotFound from './components/NotFound';

import Footer from './components/Footer';

function App() {
  //Consultas a la Api
  const {dataProducts,loadingProducts} = useFetchProducts('/api/products');
  const {dataUsers,loadingUsers} = useFetchUsers('/api/users');
  const {productsDetails, totalProducts} = DataProducts({dataProducts, loadingProducts});
  const {cantidadTotalUsuarios} = DataUsers({dataUsers,loadingUsers});

  return (
    <>
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
                  <Main
                    cantidadProductos = {totalProducts}
                    cantidadUsuarios  = {cantidadTotalUsuarios}
                    loadingProducts   = {loadingProducts}
                    loadingUsers      = {loadingUsers}
                  />
                </Route>
                <Route path='/productos'>
                  <Products
                    products          = {dataProducts}
                    loadingProducts   = {loadingProducts}
                  />
                </Route>
                <Route path='/ultimoProducto'>
                  <ProductsPerUnity
                    products        = {productsDetails}
                    loadingProducts = {loadingProducts}
                  />
                </Route>
                <Route path='/listadoProductos'>
                  <ProductList
                    products        = {productsDetails}
                    loadingProducts = {loadingProducts}
                  />
                </Route>

                <Route path='/usuarios' >
                  <UserList 
                    users = {dataUsers.usuarios}
                    loadingUsers = {loadingUsers}
                  />
                </Route>   

                
                <Route path='/ultimoUsuario' >
                  <LastUser
                    users = {dataUsers.usuarios}
                    loadingUsers = {loadingUsers} 
                  />
                </Route>   

                <Route component={NotFound} />
              </Switch>
            </div>

            <div>
              <hr />
              <Footer />
            </div>
          </div>

        </div>

      {/* </body> */}
    </>
  );
}

export default App;
