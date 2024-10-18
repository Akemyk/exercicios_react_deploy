function MaiorIdade({idade}){
    if (idade >= 18 ) {
    return(
        <>
        <h1>Maior idade</h1>
        <p>Você é adulto</p>
        </>
    )
}else{
    return(
        <>
        <h1>Menor idade</h1>
        <p>Você é menor de idade</p>
        </>
    )
}
}
export default MaiorIdade