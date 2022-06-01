import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>MyLogo</h1>
          <form action="">
            <input type="text" placeholder="login"/>
            <input type="password" placeholder="password"/>
            <button>Login</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
