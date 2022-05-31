// components
import FirstComponent from "./components/FirstComponent"
import MyComponent from './components/MyComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Event from './components/Event';
import Challenge from "./components/Challenge";


// styles / CSS
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Event />
      <Challenge />
    </div>
  );
}

export default App;
