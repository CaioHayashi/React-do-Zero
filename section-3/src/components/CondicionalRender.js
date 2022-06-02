import { useState } from "react";

const CondicionalRender = () => {
  const [boo] = useState(true);
  const [name, setName] = useState("Matheus");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {boo && <p>Se "boo" for "true", sim!</p>}
      {!boo && <p>o resultado é "false"</p>}

      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Pessoa não encontrada</p>
        </div>
      )}
      <button onClick={() => setName("João")}>Mudar nome para João</button>
    </div>
  );
};

export default CondicionalRender;
