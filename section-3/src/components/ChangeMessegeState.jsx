const ChangeMessegeState = ({ handleMessege }) => {
    const messeges = ["Oi", "Olá", "Oi, tudo bem?"]
  return (
    <div>
        <button onClick={() => handleMessege(messeges[0])}>1</button>
        <button onClick={() => handleMessege(messeges[1])}>2</button>
        <button onClick={() => handleMessege(messeges[2])}>3</button>
    </div>
  )
}

export default ChangeMessegeState