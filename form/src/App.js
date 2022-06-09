import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Foms</h2>
      <MyForm
        user={{
          name: "Josias",
          email: "josias@gmail.com",
          bio: "Eu sou advogado",
          role: "Usuario",
        }}
      />
    </div>
  );
}

export default App;
