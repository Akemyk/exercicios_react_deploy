function Nota({nota}){
    if (nota>=70 && nota<=89 ){
        return <h1>Bom</h1>
    }else if(nota<70 ){
        return <h1>Precisa melhorar</h1>
    }else{
        return <h1>Excelente</h1>
    }

}
export default Nota