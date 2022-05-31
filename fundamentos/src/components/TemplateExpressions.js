const TemplateExpressions = () => {
    const name = "Caio"
    const data = {
        age: 26,
        job: "programmmer"
    }

    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Sua profissão: {data.job} </p>
            <p>{4 + 4}</p>
        </div>
    )
}

export default TemplateExpressions