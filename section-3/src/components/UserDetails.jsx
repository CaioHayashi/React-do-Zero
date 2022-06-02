const UserDetails = ({name, age, job}) => {
  return (
    <div>
        <h1>{name}</h1>
        <p>Olá {name}, sua profissão é {job} e sua idade é {age}, portanto, {age >= 18 ? (
            <span>você pode tirar carteira de motorista, vamos lá! </span>
        ) : (
            <span>você não pode tirar sua carteira de motorista, aguarde alguns anos. </span>
        )}</p>
    </div>
  )
}

export default UserDetails