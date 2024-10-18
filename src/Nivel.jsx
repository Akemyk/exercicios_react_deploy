function Nivel({nivel}){
    return(
        nivel == "iniciante"? <h1>Bem vindo</h1>
        : nivel == "intermediário" ? <h1>Você está progredindo!</h1>
        : nivel == "avançado" ? <h1>Parabéns, especialista!</h1>
        : "Nenhum nível"
    )
}
export default Nivel