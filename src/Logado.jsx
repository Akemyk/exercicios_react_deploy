import React from 'react';
function Logado({ logado }) {
  return (
    <button>
      {logado === true ? 'Sair' : 'Entrar'}
    </button>
  );
}

export default Logado;
