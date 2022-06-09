import "./MyForm.css";
import { useState } from "react";

const MyForm = ({ user }) => {
  /* 6 - controle de input */
  /* 3 - gerenciamento de dados */
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (event) => {
    setName(event.target.value);
  };

  // console.log(name)
  // console.log(email)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("enviando formulário");
    console.log(name, email, bio, role);

    /* Limpando form */
    setName("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {/* 5 - envio de form */}
          {/* 1 - criação do fomr */}
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu Nome"
            onChange={handleName}
            value={name}
          />
        </div>
        <div>
          <label>
            {/* 2 - input dentro do label */}
            <span>E-mail:</span>
            {/* 4 - simplificação de manipulação de state */}
            <input
              type="email"
              name="email"
              placeholder="Digite seu E-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </label>
        </div>
        <label>
          <textarea
            name="bio"
            placeholder="Descreva sua bio"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        <label>
          <span>Função no Sistema</span>
          <select
            name="role"
            onChange={(e) => {
              setRole(e.target.value);
            }}
            value={role}
          >
            <option value="Usuario">Usuário</option>
            <option value="Editor">Editor</option>
            <option value="Administrador">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
