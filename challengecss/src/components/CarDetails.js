import styles from "./CarDetails.module.css"

const CarDetails = ({ name, age, price, settings, img }) => {
  return (
    <div className={styles.container}>
        <h2>{name}</h2>
        <div className={styles.content}>
          <img className={styles.my_img} src={img} alt={name}/>
          <ul>
              <li>Ano: {age}</li>
              <li>Preço: R$ {price}</li>
              <li>Configuração: {settings}</li>
          </ul>
        </div>
    </div>
  )
}

export default CarDetails