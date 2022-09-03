import Products from "./Products";
import Users from "./Users";
import {Route, Switch} from 'react-router-dom'
import NotFound from './NotFound';
import Probando from './Probando';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      
      <body>
        <Header />
        <Switch >
          {/* <Route path='/' component={Users} exact /> */}
          <Route path='/' exact >
            <Users/>
          </Route>
          <Route path='/productos' component={Products} />
          <Route path='/probando'  component={Probando} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </body>
    </div>
  );
}

export default App;
