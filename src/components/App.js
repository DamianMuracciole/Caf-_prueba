import {Route, Switch} from 'react-router-dom'
import Products from "./Products";
import Users from "./Users";
import NotFound from './NotFound';
import Probando from './Probando';
import SideBar from './SideBar';
import Footer from './Footer';
import Main from './Main'
import './App.css'


function App() {
  return (
    <div className='App'>
      <body>
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
                  <Main/>
                </Route>
                <Route path='/productos' component={Products} />
                <Route path='/usuarios' component={Users} />
                <Route path='/probando'  component={Probando} />
                <Route component={NotFound} />
              </Switch>
            </div>
          
            <div >
              <hr />
              <Footer />
            </div>
          </div>
          
        </div>
        
      </body>
    </div>
  );
}

export default App;
