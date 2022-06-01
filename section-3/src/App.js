import './App.css';
import City from "./assets/city.jpg"
import ManageData from './components/ManageData';
import RenderList from './components/RenderList';

function App() {
  return (
    <div className="App">
      <div>
        {/* imagem src*/}
        <h1>Avançando em React</h1>
        <img src="img1.jpg" alt="Paisagem" />
      </div>
    
      <div>
        {/* imagem assets*/}
        <img src={City} alt="Cidade" />
      </div>
      <div>
        <ManageData />
        <RenderList />
      </div>
    </div>
  );
}

export default App;
