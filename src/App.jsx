import Titulo from "./Titulo"
import Maior from "./Maior"
import Estudante from "./Estudante"
import Nota from "./Nota"
import Desconto from "./Desconto"
import Online from "./Online"
import Nivel from "./Nivel"
import Logado from "./Logado"


function App(){
  return (
    <>
    <Titulo nome= "Julia" autenticado="Bem vindo"/>
    <Maior idade={18}/>
    <Estudante estudante={false} />
    <Nota nota={50}/>
    <Desconto temDesconto={false}/>
    <Online online={true}/>
    <Nivel nivel={"intermediário"}/>
    <Logado logado={true}/>


    </>
  )
}
export default App