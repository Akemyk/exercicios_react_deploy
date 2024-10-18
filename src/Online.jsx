function Online({online}) {
    return ( 
        online == true ? <h1>Usuário online</h1> : <h1>Usuário offline</h1>
    )
}

export default Online

