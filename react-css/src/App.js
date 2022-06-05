import "./App.css";
import MyComponent from "./components/MyComponent";
import { useState } from "react";

function App() {
  const num = 7;
  const [name] = useState("Matheus");

  return (
    <div className="App">
      <h1>React-CSS</h1>
      <MyComponent />
      <p>Este paragrafo é do App.js</p>
      <p
        style={{
          color: "blue",
          padding: "25px",
          borderTop: "2px solid red",
        }}
      >
        Paragrafo com css-inline
      </p>

      <h2 style={num > 10 ? { color: "purple" } : { color: "pink" }}>
        Inline Dinamico
      </h2>

      <h2 style={num < 10 ? { color: "purple" } : { color: "pink" }}>
        Inline Dinamico
      </h2>

      <h2 style={name === "Matheus" ? { color: "green" } : null}>
        Testing Name
      </h2>
    </div>
  );
}

export default App;
