const Event = () => {
    const handleMyEvent = (e) => { console.log(e) }

    const renderSomething = (x) => {
        if(x){
            return <p>Renderizando isso!</p>
        } else {
            return <p>Também pode renderizar isso!</p>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Click here!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>Click here too!</button>

                <button onClick={() => { /* não se deve fazer */
                    if(true){
                        console.log("Você Clicou")
                    }
                }}>Please, Click Here!</button>
                
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    )
}

export default Event