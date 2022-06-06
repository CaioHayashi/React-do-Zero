import "./App.css";
import MyComponent from "./components/MyComponent";
import { useState } from "react";
import Title from "./components/Title";


function App() {
  const num = 7;
  const [name] = useState("Matheus");

  const redTitle = true;

  return (
    <div className="App">
      <h1>React-CSS</h1>
      {/* CSS no componente */}
      <MyComponent />
      <p>Este paragrafo é do App.js</p>

      {/* CSS inline */}
      <p
        style={{
          color: "blue",
          padding: "25px",
          borderTop: "2px solid red",
        }}
      >
        Paragrafo com css-inline
      </p>

      {/* CSS inline Dinamico */}
      <h2 style={num > 10 ? { color: "purple" } : { color: "pink" }}>
        Inline Dinamico
      </h2>
      <h2 style={num < 10 ? { color: "purple" } : { color: "pink" }}>
        Inline Dinamico
      </h2>
      <h2 style={name === "Matheus" ? { color: "green" } : null}>
        Testing Name
      </h2>

      {/* CSS classes Dinamicas*/}
      <h2 className={redTitle ? "redTitle" : "title"}>
        Este titulo vai ter uma classe dinâmica
      </h2>

      {/* CSS modules */}
      <Title />
    </div>
  );
}

export default App;
