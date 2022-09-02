import '../assets/css/app.css';
import NavBar from './Navbar';
import Products from "./Products";
import Users from "./Users";
import {Link, Route, Switch} from 'react-router-dom'
import NotFound from './NotFound';


function App() {
  return (
    <div className="App">
      <header>
        <hr />
        <h2 className='text-primary' > Dashboard CaféArte</h2>
        <hr /> 
          <Link to='/'>Usuarios</Link><br />
          <Link to='/productos'>Productos</Link><br />
      </header>
      <body>
        <Switch >
          {/* <Route path='/' component={Users} exact /> */}
          <Route path='/' exact >
            <Users/>
          </Route>
          <Route path='/productos' component={Products} />
          <Route component={NotFound} />
        </Switch>
      </body>
    </div>
  );
}

export default App;
