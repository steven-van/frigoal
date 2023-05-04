import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";


function App() {
  return (
    <div className="App">
      <p className="text-5xl text-center">
      FRIGOAL
      </p>
      <br></br><br></br>
      <Login />
      <br></br><br></br>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-red-500">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Home></Home>
    </div>
  );
}

export default App;