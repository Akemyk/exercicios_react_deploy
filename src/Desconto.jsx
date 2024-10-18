function Desconto({temDesconto}) {
    return ( 
        temDesconto == true ? <h1>Desconto aplicado</h1> : <h1>Sem desconto</h1>
    )
}

export default Desconto;

