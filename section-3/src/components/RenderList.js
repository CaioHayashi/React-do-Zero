import {useState} from "react"

const RenderList = () => {
    const [list] = useState(["Caio", "Ivanda", "Joana", "Marcos", "Josué"])

    const [users, setUsers] = useState([
        {id: 1, name: "Caio", age: 26},
        {id: 2, name: "Monica", age: 29},
        {id: 3, name: "Bruno", age: 24}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.round(Math.random() * 3)
        console.log(randomNumber)

        setUsers( prevUsers => {
            console.log(prevUsers)
            return prevUsers.filter( user => randomNumber !== user.id)
        })
    }

  return (
    <div>
        <ul>
            {list.map( (item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

        <ul>
            {users.map( user => (
                <li key={user.id}>Nome: {user.name} - Idade: {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete um Item da Lista Acima!</button>
    </div>
  )
}

export default RenderList