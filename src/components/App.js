import '../assets/css/app.css';
import Products from "./Products";
import Users from "./Users";


function App() {
  return (
    <div className="App">
      <header>
        <hr />
        <h2> Dashboard CaféArte</h2>
        <hr />
      </header>
      <body>
        <br />
        <Users />
        <br />
        <hr />
        <br />
        <Products />
      </body>
    </div>
  );
}

export default App;
