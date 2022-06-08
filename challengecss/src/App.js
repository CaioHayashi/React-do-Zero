import { useState } from 'react'
import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const [cars] = useState([
    {
      name: "Tesla Model S Plaid",
      age: "2021",
      price: "1.699.000,00",
      settings: "Sedã",
      img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/8a74d206-66dc-4386-8c7a-88ff32174e7d/bvlatuR/std/4096x2560/Model-S-Main-Hero-Desktop-LHD",
    },
    {
      name: "Tesla Model Y Range AWD",
      age: "2020",
      price: "469.775,00",
      settings: "SUV",
      img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2",
    },
    {
      name: "Tesla Model 3 Long Range AWD",
      age: "2018",
      price: "304.763,00",
      settings: "Sedã",
      img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/5a7b3001-249f-4065-a330-4ea6a17ccf7b/bvlatuR/std/2560x1708/Model-3-Main-Hero-Desktop-LHD",
    },
  ]);

  return (
    <div className="App">
      <h1 className="Title">Comparativo Models Tesla</h1>
      <div className="car_container">
        {cars.map((car, i) => (
          <CarDetails
            key={i}
            name={car.name}
            age={car.age}
            price={car.price}
            settings={car.settings}
            img={car.img}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
