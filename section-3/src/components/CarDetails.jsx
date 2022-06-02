
const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do Carro:</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Km: {km}/km</li>
            <li>Cor: {color}</li>
        </ul>

    {newCar && <p>essse carro é novo!</p>}
    </div>
  )
}

export default CarDetails