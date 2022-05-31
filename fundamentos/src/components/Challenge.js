const Challenge = () => {
    const a = 10
    const b = 15

    const sumNumbers = () => {
        return console.log(a + b)
    }

  return (
    <div>
        <span>{a}</span> + <span>{b}</span> = <button onClick={sumNumbers}>resultado</button>
        
    </div>

    
  )
}

export default Challenge