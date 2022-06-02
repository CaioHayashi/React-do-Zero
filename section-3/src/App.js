//stilo css
import { useState } from "react";
import "./App.css";
import City from "./assets/city.jpg";

//import js
import CondicionalRender from "./components/CondicionalRender";
import ManageData from "./components/ManageData";
import RenderList from "./components/RenderList";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragments from "./components/Fragments";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Messege from "./components/Messege";
import ChangeMessegeState from "./components/ChangeMessegeState";
import dsadsafas from "./components/UserDetails";
import UserDetails from "./components/UserDetails";

function App() {
  const [users] = useState([
    { name: "Caio", age: 26, job: "programmer" },
    { name: "Ana", age: 15, job: "student" },
    { name: "Bruno", age: 17, job: "football player" },
    { name: "Maria", age: 22, job: "dentist" },
  ]);

  const [messege, setMessege] = useState("");
  const handleMessege = (msg) => setMessege(msg);

  const showMessege = () => {
    console.log("Função executada do elemento pai");
  };

  const [userName] = useState("Maria");
  const [cars] = useState([
    { id: 1, brand: "Ferrari", color: "vermelho", km: 0, newCar: true },
    { id: 2, brand: "KIA", color: "prata", km: 0, newCar: true },
    { id: 3, brand: "Renault", color: "preto", km: 12313, newCar: false },
    { id: 4, brand: "MB", color: "branco", km: 56498, newCar: false },
  ]);

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
        <CondicionalRender />
        {/* props */}
        <ShowUserName name={userName} />
        {/* destructuring */}
        <CarDetails brand="Honda" km={10000} color="Azul" newCar={false} />
        {/* reusing */}
        <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true} />
        <CarDetails brand="Vw" km={7500} color="preto" newCar={false} />
        {/* rendereização de lista em componente */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}
      </div>
      {/* Fragments <> */}
      <Fragments propFragment="test" />
      {/* Children */}
      <Container myValue="testing">
        <p>esse é o meu conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <p>esse é outro conteúdo</p>
      </Container>
      {/* function como prop */}
      <ExecuteFunction propTest="testing" myFunction={showMessege} />
      {/* state lift */}
      <Messege msg={messege} />
      <ChangeMessegeState handleMessege={handleMessege} />
      {users.map((user, i) => (
        <UserDetails key={i} name={user.name} age={user.age} job={user.job} />
      ))}
    </div>
  );
}

export default App;
